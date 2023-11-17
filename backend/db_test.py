import mysql.connector

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
host = "mysql-ss-db.ciuw2a2w7jpe.us-east-1.rds.amazonaws.com"
port = 3306
user = "???"
password = "???"

# Call the function to test the connection
test_mysql_connection(host, port, user, password)
