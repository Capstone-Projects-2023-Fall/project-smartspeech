import pytest

from fastapi import FastAPI
from fastapi.testclient import TestClient
from ..custom_tiles import custom_tiles

from .. import aws_constants
from ..custom_tiles import sql_constants

def mock_getNewMySQLConnection_FAILURE():
	return None

@pytest.fixture()
def client_invalid_SQL_Connection():
    from ...main import app

    app.include_router(custom_tiles.router)
	
    app.dependency_overrides.update({
        custom_tiles.getNewMySQLConnection: mock_getNewMySQLConnection_FAILURE
    })	

    with TestClient(app) as test_client:
        yield test_client


def test_upload_custom_tile_failure(client_invalid_SQL_Connection):
	test_data = {
		"email": "test@example.com"
	}

	URL_WITH_EMAIL_QUERY = f'{aws_constants.GET_CUSTOM_TILES}?email={test_data["email"]}'
	resp = client_invalid_SQL_Connection.get(URL_WITH_EMAIL_QUERY)

	assert resp.status_code == 500
	assert resp.json()['detail'] == sql_constants.DB_CONNECT_FAILURE_MSG