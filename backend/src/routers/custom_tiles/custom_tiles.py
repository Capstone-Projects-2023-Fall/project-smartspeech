import mysql.connector
from os import getenv
from dotenv import load_dotenv
from base64 import b64decode

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from typing import Dict, Literal

router = APIRouter()

# types
from mysql.connector import MySQLConnection

PossibleMySQLConnection = MySQLConnection | None

from ..aws_constants import UPLOAD_CUSTOM_TILE, GET_CUSTOM_TILES
from .sql_query_constants import INSERT_CUSTOM_TILE_QUERY, GET_CUSTOM_TILE_QUERY
from ..s3 import upload_file_to_s3_logic
from .DTO.CustomTilesDTO import mapCustomTileEntryToJson

class InsertCustomTileModel(BaseModel):
	image: str
	imageExt: str
	sound: str = ""
	text: str
	tileColor: str
	email: str

InsertDataType = Dict[
	Literal[
		"ImageURL", 
		"UserEmail", 
		"TextAssociated", 
		"SoundAssociated", 
		"TileColor",
		], 
	str
]

load_dotenv(".env.local")

DB_URL_ENV_VAR="CT_DB_URL"
DB_PORT_ENV_VAR="CT_DB_PORT"
DB_USERNAME_ENV_VAR="CT_DB_USERNAME"
DB_PASSWORD_ENV_VAR="CT_DB_PASSWORD"


def getNewMySQLConnection():
	config = {
		'user': getenv(DB_USERNAME_ENV_VAR),
		'password': getenv(DB_PASSWORD_ENV_VAR),
		'host': getenv(DB_URL_ENV_VAR),
		'port': getenv(DB_PORT_ENV_VAR)
	}

	cxn: PossibleMySQLConnection = None

	try:
		cxn = mysql.connector.connect(**config)
		cxn.cursor()
		if not cxn.is_connected(): raise RuntimeError("Failed to Connect to database")

	except Exception as e:
		print(f"Error: {e}")

	return cxn


def insertCustomTilesIntoDB(connection: MySQLConnection, dataToInsert: InsertDataType):
	cursor = connection.cursor()
	cursor.execute(INSERT_CUSTOM_TILE_QUERY, dataToInsert)

	tile_no = cursor.lastrowid

	# save data
	connection.commit()
	cursor.close()

	return tile_no

def getTilesByEmail(connection: MySQLConnection, email: str):
	cursor = connection.cursor()
	cursor.execute(GET_CUSTOM_TILE_QUERY, (email,))

	rows = cursor.fetchall()

	JSONrows = list(map(mapCustomTileEntryToJson, rows))

	return JSONrows



@router.post(UPLOAD_CUSTOM_TILE)
def upload_custom_tile(insertData: InsertCustomTileModel):
	"""
	Args:
		insertData (InsertCustomTileModel): Data required to upload a custom tiles. Needs:

	+ `image`: `str` - BASE64 string
	+ `imageExt`: `str`: Extension of image above (NO SVG)
	+ `sound`: `str` - Phrase / word for the Sound Model
	+ `text`: `str` - Text to be used for tile
	+ `tileColor`: `str` - Color of tile in Frontend
	+ `email`: `str` - Owner of Custom tile

	Raises:
		HTTPException: On one of these Events: 

	+ S3 Error
	+ Connection to RDS Error
	+ Insert to MYSQL Error
	+ Invalid Conditions for Upload
		+ Image is of type SVG

	Returns: (`JSON`)
	```json
	{
		'imageUrl': URL,
		'newTileId': tile_no
	}
	```
	"""

	# check for invalid conditions
	image_extension = insertData.imageExt
	if image_extension.upper() in ['SVG']: raise HTTPException(status_code=400, detail="SVG Images not allowed")

	# Save image first
	b64ToBinImage = b64decode(insertData.image)
	URL: str | None = None

	try:
		# generate a unique tile name to save in s3 via `force_unique=True`
		URL = upload_file_to_s3_logic(b64ToBinImage, f"custom-tile.{image_extension}", force_unique=True) 
	except Exception as e:
		print(e)
		raise HTTPException(status_code=500, detail="Image could not be uploaded to storage")


	# create SQL connection
	connection = getNewMySQLConnection()
	if connection is None: raise HTTPException(status_code=500, detail="DB failed to connect")


	# upload data to db
	tile_no = None

	try:
		tile_no = insertCustomTilesIntoDB(connection, {
			"ImageURL": URL,
			"UserEmail": insertData.email,
			"TextAssociated": insertData.text,
			"SoundAssociated": insertData.sound,
			"TileColor": insertData.tileColor,
		})

	except Exception as e:
		print(e)
		raise HTTPException(status_code=500, detail="Failed to save Tile Info")

	# clean up
	connection.close()

	return {
		'imageUrl': URL,
		'newTileId': tile_no
	}

	
@router.get(UPLOAD_CUSTOM_TILE)
def get_custom_tiles(email: str):
	# create SQL connection
	connection = getNewMySQLConnection()
	if connection is None: raise HTTPException(status_code=500, detail="DB failed to connect")

	tiles = None

	try:
		tiles = getTilesByEmail(connection, email)
	except Exception as e:
		print(e)
		raise HTTPException(status_code=500, detail="DB GET error")

	return tiles


