import pytest
from fastapi.testclient import TestClient
import httpx  # used to add httpx entry to requirements
import requests
import requests_mock
import os

os.environ['SPACY_MODEL'] = 'en_core_web_md'

from .main import app, Image, ImageResponse, Drawing, DrawingResponse


MOCK_TEXT = 'exampledata'


@pytest.fixture
def client() -> TestClient:
    return TestClient(app)


def test_root(client: TestClient):
    """Ensure that '/' returns the correct message."""
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"message": "Hello World"}


def test_healthCheck(client: TestClient):
    """Ensure that '/health-check' returns the correct message."""
    response = client.get("/health-check")
    assert response.status_code == 200
    assert response.json() == {
        "message": "an apple a day keeps the doctor away"}


def test_image_output(client: TestClient):
    """Ensure that '/image' returns a list of image predictions (string[])"""
    image = Image(content=MOCK_TEXT)
    imageResponse = ImageResponse(predictions=[MOCK_TEXT])
    response = client.post("/image", json=image.model_dump())
    assert response.status_code == 200
    assert response.json() == imageResponse.model_dump()


def test_image_body_req(client: TestClient):
    """Ensure that '/image' returns an error when there is no request body"""
    response = client.post("/image")
    assert response.status_code == 422


def test_image_body_form(client: TestClient):
    """Ensure that '/image' returns an error when the request body is malformed"""
    image = {"not-content": MOCK_TEXT}
    response = client.post("/image", json=image)
    assert response.status_code == 422


def test_draw_output(client: TestClient):
    """Ensure that '/draw' returns a list of drawing predictions (string[])"""
    drawing = Drawing(content=MOCK_TEXT)
    drawingResponse = DrawingResponse(predictions=[MOCK_TEXT])
    response = client.post("/draw", json=drawing.model_dump())
    assert response.status_code == 200
    assert response.json() == drawingResponse.model_dump()


def test_draw_body_req(client: TestClient):
    """Ensure that '/draw' returns an error when there is no request body"""
    response = client.post("/draw")
    assert response.status_code == 422


def test_draw_body_form(client: TestClient):
    """Ensure that '/draw' returns an error when the request body is malformed"""
    image = {"not-content": MOCK_TEXT}
    response = client.post("/image", json=image)
    assert response.status_code == 422


def test_tile_output(client: TestClient):
    """Ensure that '/tile' correclty outputs the user_id"""
    user_id = 1234
    response = client.get(f"/tile/{user_id}")
    assert response.status_code == 200
    assert response.json() == {"user_id": user_id}

def test_similarity_type(client: TestClient):
    """Ensure '/similarity' correctly echoes the input"""
    payload = ["fruit"]
    response = client.post("/similarity", json=payload)
    assert response.json() == ["strawberry"]