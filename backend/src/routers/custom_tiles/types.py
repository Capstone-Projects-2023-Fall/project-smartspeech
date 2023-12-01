from pydantic import BaseModel
from typing import Dict, Literal
from mysql.connector import MySQLConnection

PossibleMySQLConnection = MySQLConnection | None

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