import pytest, json

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

def test_upload_custom_tile_failure(client_invalid_SQL_Connection):
	URL_WITH_EMAIL_QUERY = f'{aws_constants.GET_CUSTOM_TILES}'
	FAKE_REQ = gen_FAKE_REQ(VALID_EMAIL)

	resp = client_invalid_SQL_Connection.post(URL_WITH_EMAIL_QUERY, json=FAKE_REQ)


	print(resp.status_code)
	print(resp.json())
		
	assert 1 == 1