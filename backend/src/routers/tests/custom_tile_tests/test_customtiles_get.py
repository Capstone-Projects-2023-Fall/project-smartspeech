import pytest

from fastapi import FastAPI
from fastapi.testclient import TestClient
from ...custom_tiles import custom_tiles

from ... import aws_constants
from ...custom_tiles import sql_constants
from unittest.mock import Mock

from .constants import *

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
		cursor.fetchall.return_value = FAKE_DB_RESP

		return mock_connection
	
	app = FastAPI()
	app.include_router(custom_tiles.router)

	app.dependency_overrides.update({
		custom_tiles.getNewMySQLConnection: mock_getNewMySQLConnection_SUCCESS,
	})	

	return TestClient(app)

@pytest.fixture()
def client_valid_SQL_Connection_sql_query_error():

	def mock_getNewMySQLConnection_query_error():
		mock_connection = Mock()
		cursor = mock_connection.cursor.return_value
		cursor.execute.side_effect = ValueError("Simulated query error")

		return mock_connection
	
	app = FastAPI()
	app.include_router(custom_tiles.router)

	app.dependency_overrides.update({
		custom_tiles.getNewMySQLConnection: mock_getNewMySQLConnection_query_error,
	})	

	return TestClient(app)

def test_get_custom_tile_success(client_valid_SQL_Connection):
	URL_WITH_EMAIL_QUERY = f'{aws_constants.CUSTOM_TILE_ROUTE}?email={VALID_EMAIL}'
	resp = client_valid_SQL_Connection.get(URL_WITH_EMAIL_QUERY)

	assert resp.status_code == 200

	# responses are in list format
	assert resp.json() == [
		FAKE_RESP
	]

def test_get_custom_tile_invalid_email(client_valid_SQL_Connection):
	URL_WITH_EMAIL_QUERY = f'{aws_constants.CUSTOM_TILE_ROUTE}?email={INVALID_EMAIL}'
	resp = client_valid_SQL_Connection.get(URL_WITH_EMAIL_QUERY)

	assert resp.status_code == 400
	assert resp.json()['detail'] == sql_constants.EMAIL_INVALID_MSG

def test_get_custom_tile_internal_query_error(client_valid_SQL_Connection_sql_query_error):
	URL_WITH_EMAIL_QUERY = f'{aws_constants.CUSTOM_TILE_ROUTE}?email={VALID_EMAIL}'
	resp = client_valid_SQL_Connection_sql_query_error.get(URL_WITH_EMAIL_QUERY)

	assert resp.status_code == 500
	assert resp.json()['detail'] == sql_constants.DB_GET_TILES_FAILURE_MSG

def test_get_custom_tile_failure(client_invalid_SQL_Connection):
	URL_WITH_EMAIL_QUERY = f'{aws_constants.CUSTOM_TILE_ROUTE}?email={VALID_EMAIL}'
	resp = client_invalid_SQL_Connection.get(URL_WITH_EMAIL_QUERY)

	assert resp.status_code == 500
	assert resp.json()['detail'] == sql_constants.DB_CONNECT_FAILURE_MSG