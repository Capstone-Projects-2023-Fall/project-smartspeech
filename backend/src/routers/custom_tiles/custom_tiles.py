import mysql.connector
from os import getenv
from dotenv import load_dotenv
from base64 import b64decode

from fastapi import APIRouter, HTTPException, Depends

from mysql.connector import MySQLConnection

from ..aws_constants import CUSTOM_TILE_ROUTE, S3_IMAGE_UPLOAD_FAILURE_MSG

from .sql_constants import INSERT_CUSTOM_TILE_QUERY, GET_CUSTOM_TILE_QUERY, DELETE_CUSTOM_TILE_QUERY
from .sql_constants import DB_USERNAME_ENV_VAR, DB_PASSWORD_ENV_VAR, DB_PORT_ENV_VAR, DB_URL_ENV_VAR
from .sql_constants import DB_CONNECT_FAILURE_MSG, EMAIL_INVALID_MSG, DB_GET_TILES_FAILURE_MSG, INVALID_IMAGE_FORMAT_MSG, DB_TILE_INSERT_ERROR, DB_DELETE_TILES_FAILURE_MSG

from .types import InsertDataType, InsertCustomTileModel
from ..s3 import upload_file_to_s3_logic, getS3Instance

# util
from ...DTO.CustomTilesDTO import mapCustomTileEntryToJson
from ...util.text_util import is_valid_email

from typing import List, Annotated

load_dotenv(".env.local")
router = APIRouter()

# Error Constants


def getNewMySQLConnection():
	config = {
		'user': getenv(DB_USERNAME_ENV_VAR),
		'password': getenv(DB_PASSWORD_ENV_VAR),
		'host': getenv(DB_URL_ENV_VAR),
		'port': getenv(DB_PORT_ENV_VAR)
	}

	try:
		cxn = mysql.connector.connect(**config)
		cxn.cursor()
		if not cxn.is_connected(): raise RuntimeError("Failed to Connect to database")
		return cxn

	except Exception as e:
		print(f"Error: {e}")

	return None


def insert_custom_tiles_into_db(connection: MySQLConnection, dataToInsert: InsertDataType):
	cursor = connection.cursor()
	cursor.execute(INSERT_CUSTOM_TILE_QUERY, dataToInsert)

	tile_no = cursor.lastrowid

	# save data
	connection.commit()
	cursor.close()

	return tile_no

def get_tiles_by_email(connection: MySQLConnection, email: str):
	cursor = connection.cursor()
	cursor.execute(GET_CUSTOM_TILE_QUERY, (email,))

	rows = cursor.fetchall()

	JSONrows = list(map(mapCustomTileEntryToJson, rows))

	cursor.close()

	return JSONrows

def delete_tile_by_id(connection: MySQLConnection, email: str, tileId: int):
	cursor = connection.cursor()
	cursor.execute(DELETE_CUSTOM_TILE_QUERY, {
		'UserEmail': email,
		'tileId': tileId
	})

	deleted_count = cursor.rowcount
	connection.commit()
	cursor.close()

	return deleted_count


@router.post(CUSTOM_TILE_ROUTE)
def upload_custom_tile(insertData: InsertCustomTileModel, connection: Annotated[MySQLConnection, Depends(getNewMySQLConnection)], s3: Annotated[any, Depends(getS3Instance)]):
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


	# no need to query db if email is false
	if not is_valid_email(insertData.email): raise HTTPException(status_code=400, detail=EMAIL_INVALID_MSG)

	# check for invalid conditions
	image_extension = insertData.imageExt
	if image_extension.upper() in ['SVG']: raise HTTPException(status_code=400, detail=INVALID_IMAGE_FORMAT_MSG)

	# Save image first
	b64ToBinImage = b64decode(insertData.image)
	saved_image_name = f"custom-tile.{image_extension}"

	URL: str | None = None
	try:
		# generate a unique tile name to save in s3 via `force_unique=True`
		URL = upload_file_to_s3_logic(s3, b64ToBinImage, saved_image_name, force_unique=True) 
	except Exception as e:
		print(e)
		raise HTTPException(status_code=500, detail=S3_IMAGE_UPLOAD_FAILURE_MSG)


	# check SQL connection
	if connection is None: raise HTTPException(status_code=500, detail=DB_CONNECT_FAILURE_MSG)


	# upload data to db
	tile_no = None

	try:
		tile_no = insert_custom_tiles_into_db(connection, {
			"ImageURL": URL,
			"UserEmail": insertData.email,
			"TextAssociated": insertData.text,
			"SoundAssociated": insertData.sound,
			"TileColor": insertData.tileColor,
		})

	except Exception as e:
		print(e)
		raise HTTPException(status_code=500, detail=DB_TILE_INSERT_ERROR)

	# clean up
	connection.close()

	return {
		'imageUrl': URL,
		'newTileId': tile_no
	}

	
@router.get(CUSTOM_TILE_ROUTE)
def get_custom_tiles(email: str, connection: Annotated[MySQLConnection, Depends(getNewMySQLConnection)]):
	"""Gets all uploaded tile data based on the `email` they are saved under.

	Args:
		email (str)

	Raises:
		HTTPException: If `email` is invalid
		HTTPException: If the Database fails to respond to connection reqeusts
		HTTPException: If entries are not able to be read

	Returns:
		List (`[]`) of the following dict (json): 
		```
		{
			'id': CustomTileID,
			'url': ImageURL,
			'email': UserEmail,
			'text': TextAssociated,
			'sound': SoundAssociated,
			'tileColor': TileColor
		}
		```
	"""

	# no need to query db if email is false
	if not is_valid_email(email): raise HTTPException(status_code=400, detail=EMAIL_INVALID_MSG)

	# check SQL connection
	if connection is None: raise HTTPException(status_code=500, detail=DB_CONNECT_FAILURE_MSG)

	tiles = None

	try:
		tiles = get_tiles_by_email(connection, email)
	except Exception as e:
		print(e)
		raise HTTPException(status_code=500, detail=DB_GET_TILES_FAILURE_MSG)

	connection.close()

	return tiles


@router.delete(CUSTOM_TILE_ROUTE)
def delete_custom_tiles_by_id(email: str, tileId: int,connection: Annotated[MySQLConnection, Depends(getNewMySQLConnection)]):
	"""deletes uploaded tile data based on the `email` they are saved under and by `tileId`.

	Args:
		email (str)
		id (int)

	Raises:
		HTTPException: If `email` is invalid
		HTTPException: If the Database fails to respond to connection reqeusts
		HTTPException: If entries are not able to be read / deleted

	Returns: Nothing, only an HTTP code
	"""

	# no need to query db if email is false
	if not is_valid_email(email): raise HTTPException(status_code=400, detail=EMAIL_INVALID_MSG)

	# check SQL connection
	if connection is None: raise HTTPException(status_code=500, detail=DB_CONNECT_FAILURE_MSG)

	deleted_count = 0

	try:
		deleted_count = delete_tile_by_id(connection, email, tileId)
	except Exception as e:
		print(e)
		raise HTTPException(status_code=500, detail=DB_DELETE_TILES_FAILURE_MSG)

	connection.close()

	if not deleted_count: raise HTTPException(status_code=400, detail=DB_DELETE_TILES_FAILURE_MSG)

	return {
		'rowsDeleted': deleted_count
	}