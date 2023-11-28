import pytest

from fastapi import FastAPI
from fastapi.testclient import TestClient
from ..custom_tiles import custom_tiles

from .. import aws_constants
from ..custom_tiles import sql_constants
from unittest.mock import MagicMock

FAKE_EMAIL = "test@parth.fr"
FAKE_RESP = {
	"url": "FAKE_URL.url",
	"email": "parth@gmail.com",
	"text": "Base64",
	"sound": "Base64",
	"tileColor": "red"
}

# def mock_getNewMySQLConnection_FAILURE():
# 	return None

# @pytest.fixture()
# def client_invalid_SQL_Connection():
#     from ...main import app

#     app.include_router(custom_tiles.router)
	
#     app.dependency_overrides.update({
#         custom_tiles.getNewMySQLConnection: mock_getNewMySQLConnection_FAILURE
#     })	

#     with TestClient(app) as test_client:
#         yield test_client


# def test_upload_custom_tile_failure(client_invalid_SQL_Connection):
# 	URL_WITH_EMAIL_QUERY = f'{aws_constants.GET_CUSTOM_TILES}?email={FAKE_EMAIL}'
# 	resp = client_invalid_SQL_Connection.get(URL_WITH_EMAIL_QUERY)

# 	assert resp.status_code == 500
# 	assert resp.json()['detail'] == sql_constants.DB_CONNECT_FAILURE_MSG

def mock_getNewMySQLConnection_SUCCESS():
	print("mock called")
	mock_connection = MagicMock()
	return mock_connection

def mock_getTilesByEmail_SUCCESS():
	return FAKE_RESP

@pytest.fixture()
def client_valid_SQL_Connection():
	
	app = FastAPI()
	app.include_router(custom_tiles.router)

	app.dependency_overrides.update({
		custom_tiles.getNewMySQLConnection: mock_getNewMySQLConnection_SUCCESS,
		custom_tiles.getTilesByEmail: mock_getTilesByEmail_SUCCESS
	})	

	return TestClient(app)


def test_upload_custom_tile_success(client_valid_SQL_Connection):
	URL_WITH_EMAIL_QUERY = f'{aws_constants.GET_CUSTOM_TILES}?email={FAKE_EMAIL}'
	resp = client_valid_SQL_Connection.get(URL_WITH_EMAIL_QUERY)

	print('\n\ntest_upload_custom_tile_success', resp.json())