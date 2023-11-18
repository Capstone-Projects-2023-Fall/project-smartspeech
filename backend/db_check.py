import mysql.connector

from dotenv import load_dotenv
from os import getenv

load_status = load_dotenv(dotenv_path="./src/.env.local")

DB_URL_ENV_VAR="CT_DB_URL"
DB_PORT_ENV_VAR="CT_DB_PORT"
DB_USERNAME_ENV_VAR="CT_DB_USERNAME"
DB_PASSWORD_ENV_VAR="CT_DB_PASSWORD"

#! File used for debugging connection to AWS RDS host
def test_mysql_connection(host, port, user, password):
    try:
        # Create a MySQL connection
        connection = mysql.connector.connect(
            host=host,
            port=port,
            user=user,
            password=password,
        )

        # Check if the connection is successful
        if connection.is_connected():
            print("Successfully connected to the MySQL database!")
        else:
            print("Failed to connect to the MySQL database.")

    except Exception as e:
        print(f"Error: {e}")

    finally:
        # Close the connection if it's open
        if connection and connection.is_connected():
            connection.close()
            print("Connection closed.")

# Replace these values with your actual database credentials
host = getenv(DB_URL_ENV_VAR)
port = getenv(DB_PORT_ENV_VAR, 3306)
user = getenv(DB_USERNAME_ENV_VAR)
password = getenv(DB_PASSWORD_ENV_VAR)

# Call the function to test the connection
test_mysql_connection(host, port, user, password)
