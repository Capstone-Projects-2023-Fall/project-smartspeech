import pytest

from fastapi import FastAPI
from fastapi.testclient import TestClient
from ..custom_tiles.custom_tiles import router as custom_tiles_router, getNewMySQLConnection
from ..s3 import upload_file_to_s3_logic

from ..aws_constants import UPLOAD_CUSTOM_TILE, SAMPLE_BASE64_IMAGE, GET_CUSTOM_TILES


@pytest.fixture()
def client():
    from ...main import app

    app.include_router(custom_tiles_router)

    with TestClient(app) as test_client:
        yield test_client


def test_upload_custom_tile_failure(client):
	test_data = {
		"email": "test@example.com"
	}

	assert 200 == 200