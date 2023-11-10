import pytest
from fastapi.testclient import TestClient
import httpx  # used to add httpx entry to requirements
import requests
import requests_mock

from .main import app


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
