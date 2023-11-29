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

@pytest.fixture()
def moto_create_s3_bucket():
	# setup: start moto server and create the bucket
	mocks3 = mock_s3()
	mocks3.start()
	conn = boto3.resource("s3", region_name="us-east-1")
	conn.create_bucket(Bucket=getenv(aws_constants.BUCKET_NAME_ENV_VAR))
	yield
	# teardown: stop moto server
	mocks3.stop()

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


def test_upload_custom_tile_failure(client_invalid_SQL_Connection, moto_create_s3_bucket):
	URL_WITH_EMAIL_QUERY = f'{aws_constants.UPLOAD_CUSTOM_TILE}'
	FAKE_REQ = gen_FAKE_REQ(VALID_EMAIL)

	resp = client_invalid_SQL_Connection.post(URL_WITH_EMAIL_QUERY, json=FAKE_REQ)
		
	assert resp.status_code == 500
	assert resp.json()['detail'] == sql_constants.DB_CONNECT_FAILURE_MSG

def test_upload_custom_tile_success(client_valid_SQL_Connection, moto_create_s3_bucket):
	URL_WITH_EMAIL_QUERY = f'{aws_constants.UPLOAD_CUSTOM_TILE}'
	FAKE_REQ = gen_FAKE_REQ(VALID_EMAIL)

	resp = client_valid_SQL_Connection.post(URL_WITH_EMAIL_QUERY, json=FAKE_REQ)
		
	img_url: str = resp.json()['imageUrl']
	tile_db_index: int = resp.json()['newTileId']

	assert tile_db_index == MOCK_DB_TILE_IDX
	assert img_url.startswith("https://smart-speech-media.s3.amazonaws.com")