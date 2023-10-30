import pytest
from fastapi.testclient import TestClient
import requests
import requests_mock

from .main import app, get_config, get_session, Image, ImageResponse, Drawing, DrawingResponse


mock_tts_endpoint = 'mock://tts.com'
mock_text = 'exampledata'


def mock_get_config() -> dict:
    return {
        'TTS_API_KEY': '',
        'TTS_API_URL': mock_tts_endpoint
    }


# https://pypi.org/project/requests-mock/
def mock_get_session() -> dict:
    session = requests.Session()
    adapter = requests_mock.Adapter()
    session.mount(mock_tts_endpoint, adapter)
    adapter.register_uri('POST', mock_tts_endpoint, text=mock_text)
    return session


@pytest.fixture
def client() -> TestClient:
    app.dependency_overrides.update(
        {get_config: mock_get_config,
         get_session: mock_get_session}
    )

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


def test_tts(client: TestClient):
    """Ensure that the client calls the correct endpoint and returns the
       correct value."""
    response = client.get("/tts?phrase=phrase")
    assert response.status_code == 200
    assert response.text == mock_text

def test_image_output(client: TestClient):
    """Ensure that '/image' returns a list of image predictions (string[])"""
    image = Image(content=mock_text)
    imageResponse = ImageResponse(predictions=[mock_text])
    response = client.post("/image", json=image.model_dump())
    assert response.status_code == 200
    assert response.json() == imageResponse.model_dump()

def test_image_body_req(client: TestClient):
    """Ensure that '/image' returns an error when there is no request body"""
    response = client.post("/image")
    assert response.status_code == 422

def test_image_body_form(client: TestClient):
    """Ensure that '/image' returns an error when the request body is malformed"""
    image = {"not-content": mock_text}
    response = client.post("/image", json=image)
    assert response.status_code == 422

def test_draw_output(client: TestClient):
    """Ensure that '/draw' returns a list of drawing predictions (string[])"""
    drawing = Drawing(content=mock_text)
    drawingResponse = DrawingResponse(predictions=[mock_text])
    response = client.post("/draw", json=drawing.model_dump())
    assert response.status_code == 200
    assert response.json() == drawingResponse.model_dump()

def test_draw_body_req(client: TestClient):
    """Ensure that '/draw' returns an error when there is no request body"""
    response = client.post("/draw")
    assert response.status_code == 422

def test_draw_body_form(client: TestClient):
    """Ensure that '/draw' returns an error when the request body is malformed"""
    image = {"not-content": mock_text}
    response = client.post("/image", json=image)
    assert response.status_code == 422

def test_similarity_type(client: TestClient):
    """Ensure '/similarity' correctly echoes the input"""
    payload = ["fruit"]
    response = client.post("/similarity", json=payload)
    assert response.json() == ["strawberry"]