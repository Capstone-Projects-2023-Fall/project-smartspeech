import pytest, json

from os import getenv

from fastapi import FastAPI
from fastapi.testclient import TestClient
from ...custom_tiles import custom_tiles

from ... import aws_constants
from ...custom_tiles import sql_constants
from .constants import *

from unittest.mock import Mock
from moto import mock_s3
import boto3

@pytest.fixture(autouse=True)
def moto_create_s3_bucket():
	
	mocks3 = mock_s3() # setup: start moto server and create the bucket
	mocks3.start()
	conn = boto3.resource("s3", region_name="us-east-1")
	conn.create_bucket(Bucket=getenv(aws_constants.BUCKET_NAME_ENV_VAR))
	yield # swap control to test

	mocks3.stop() 	# teardown: stop moto server

@pytest.fixture()
def client_invalid_SQL_Connection():

	def mock_getNewMySQLConnection_FAILURE():
		return None

	from ....main import app

	app.include_router(custom_tiles.router)
	app.dependency_overrides.update({
		custom_tiles.getNewMySQLConnection: mock_getNewMySQLConnection_FAILURE
	})	

	with TestClient(app) as test_client:
		yield test_client

@pytest.fixture()
def client_valid_SQL_Connection():

	def mock_getNewMySQLConnection_SUCCESS():
		mock_connection = Mock()
		cursor = mock_connection.cursor.return_value
		cursor.lastrowid = MOCK_DB_TILE_IDX 
		return mock_connection
	
	app = FastAPI()
	app.include_router(custom_tiles.router)

	app.dependency_overrides.update({
		custom_tiles.getNewMySQLConnection: mock_getNewMySQLConnection_SUCCESS,
	})	

	return TestClient(app)

@pytest.fixture()
def client_valid_SQL_Connection_with_insert_error():

	def mock_getNewMySQLConnection_SUCCESS_with_insert_error():
		mock_connection = Mock()
		cursor = mock_connection.cursor.return_value
		cursor.execute.side_effect = ValueError("Simulated query error")
		return mock_connection
	
	app = FastAPI()
	app.include_router(custom_tiles.router)

	app.dependency_overrides.update({
		custom_tiles.getNewMySQLConnection: mock_getNewMySQLConnection_SUCCESS_with_insert_error,
	})	

	return TestClient(app)


# green
def test_upload_custom_tile_success(client_valid_SQL_Connection):
	URL_WITH_EMAIL_QUERY = f'{aws_constants.CUSTOM_TILE_ROUTE}'
	FAKE_REQ = gen_FAKE_REQ(VALID_EMAIL)

	resp = client_valid_SQL_Connection.post(URL_WITH_EMAIL_QUERY, json=FAKE_REQ)
		
	img_url: str = resp.json()['imageUrl']
	tile_db_index: int = resp.json()['newTileId']

	assert tile_db_index == MOCK_DB_TILE_IDX
	assert img_url.startswith(f"https://{getenv(aws_constants.BUCKET_NAME_ENV_VAR)}.s3.amazonaws.com")

# red
def test_upload_custom_tile_failure_invalid_DB_conn(client_invalid_SQL_Connection):
	URL_WITH_EMAIL_QUERY = f'{aws_constants.CUSTOM_TILE_ROUTE}'
	FAKE_REQ = gen_FAKE_REQ(VALID_EMAIL)

	resp = client_invalid_SQL_Connection.post(URL_WITH_EMAIL_QUERY, json=FAKE_REQ)
		
	assert resp.status_code == 500
	assert resp.json()['detail'] == sql_constants.DB_CONNECT_FAILURE_MSG

# red
def test_upload_custom_tile_failure_invalid_email(client_invalid_SQL_Connection):
	URL_WITH_EMAIL_QUERY = f'{aws_constants.CUSTOM_TILE_ROUTE}'
	FAKE_REQ = gen_FAKE_REQ(INVALID_EMAIL)

	resp = client_invalid_SQL_Connection.post(URL_WITH_EMAIL_QUERY, json=FAKE_REQ)
		
	assert resp.status_code == 400
	assert resp.json()['detail'] == sql_constants.EMAIL_INVALID_MSG

# red
def test_upload_custom_tile_failure_invalid_img_format(client_invalid_SQL_Connection):
	URL_WITH_EMAIL_QUERY = f'{aws_constants.CUSTOM_TILE_ROUTE}'
	FAKE_REQ = gen_FAKE_REQ(VALID_EMAIL, 'svg')

	resp = client_invalid_SQL_Connection.post(URL_WITH_EMAIL_QUERY, json=FAKE_REQ)
		
	assert resp.status_code == 400
	assert resp.json()['detail'] == sql_constants.INVALID_IMAGE_FORMAT_MSG


# red
def test_upload_custom_tile_failure_insert_db_error(client_valid_SQL_Connection_with_insert_error):
	URL_WITH_EMAIL_QUERY = f'{aws_constants.CUSTOM_TILE_ROUTE}'
	FAKE_REQ = gen_FAKE_REQ(VALID_EMAIL)

	resp = client_valid_SQL_Connection_with_insert_error.post(URL_WITH_EMAIL_QUERY, json=FAKE_REQ)
		
	assert resp.status_code == 500
	assert resp.json()['detail'] == sql_constants.DB_TILE_INSERT_ERROR

