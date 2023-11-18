import mysql.connector
from os import getenv
from dotenv import load_dotenv
from base64 import b64decode

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

router = APIRouter()

# types
from mysql.connector import MySQLConnection
PossibleMySQLConnection = MySQLConnection | None

from .aws_constants import UPLOAD_CUSTOM_TILE, GET_CUSTOM_TILES
from .s3 import upload_file_to_s3_logic

class InsertCustomTileModel(BaseModel):
	image: str
	sound: str = ""
	text: str
	tileColor: str


load_dotenv(".env.local")

DB_URL_ENV_VAR="CT_DB_URL"
DB_PORT_ENV_VAR="CT_DB_PORT"
DB_USERNAME_ENV_VAR="CT_DB_USERNAME"
DB_PASSWORD_ENV_VAR="CT_DB_PASSWORD"


class MySQLConnectionSingleton:
	instance = None

	def __new__(cls, *args, **kwargs):
		if not cls.instance:
			cls.instance = super(MySQLConnectionSingleton, cls).__new__(cls, *args, **kwargs)

			config = {
				'user': getenv(DB_USERNAME_ENV_VAR),
				'password': getenv(DB_PASSWORD_ENV_VAR),
				'host': getenv(DB_URL_ENV_VAR),
				'port': getenv(DB_PORT_ENV_VAR)
			}

			try:
				cls.instance.cxn: PossibleMySQLConnection = mysql.connector.connect(**config)
				if not cls.instance.cxn.is_connected(): raise RuntimeError("Failed to Connect to database")

			except Exception as e:
				print(f"Error: {e}")
		return cls.instance

@router.post(UPLOAD_CUSTOM_TILE)
def upload_custom_tile(insertData: InsertCustomTileModel):
	b64ToBinImage = b64decode(insertData.image)
	URL: str | None = None

	try:
		URL = upload_file_to_s3_logic(b64ToBinImage, "custom-tile", force_unique=True) #generate a unique tile name to save in s3
	except Exception as e:
		print(e)
		raise HTTPException(status_code=500, detail="Image could not be uploaded to S3")

	# upload to db

	return {
		'url': URL,
		'status': "SUCCESS"
	}

	
