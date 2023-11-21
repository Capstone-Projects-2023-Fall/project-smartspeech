import pytest

from fastapi import FastAPI
from fastapi.testclient import TestClient
from .custom_tiles import router as custom_tiles_router, getNewMySQLConnection
from ..s3 import upload_file_to_s3_logic

from ..aws_constants import UPLOAD_CUSTOM_TILE, SAMPLE_BASE64_IMAGE

from unittest.mock import patch, MagicMock

@pytest.fixture
def client() -> TestClient:
    app = FastAPI()
    app.include_router(custom_tiles_router)
    return TestClient(app)

def test_upload_custom_tile(client):
	test_data = {
		"image": SAMPLE_BASE64_IMAGE,
		"imageExt": "png",
		"sound": "test_sound",
		"text": "test_text",
		"tileColor": "test_color",
		"email": "test@example.com"
	}

	assert 200 == 200
