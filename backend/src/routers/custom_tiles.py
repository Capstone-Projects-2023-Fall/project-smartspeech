import mysql.connector
from os import getenv
from dotenv import load_dotenv


# types
from mysql.connector import MySQLConnection
PossibleMySQLConnection = MySQLConnection | None


load_dotenv(".env.local")

DB_URL_ENV_VAR="CT_DB_URL"
DB_PORT_ENV_VAR="CT_DB_PORT"
DB_USERNAME_ENV_VAR="CT_DB_USERNAME"
DB_PASSWORD_ENV_VAR="CT_DB_PASSWORD"


class MySQLConnectionSingleton:
	instance: PossibleMySQLConnection | None = None

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

