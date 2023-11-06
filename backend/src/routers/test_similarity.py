import pytest
from fastapi.testclient import TestClient
import os

from ..main import app

@pytest.fixture
def client() -> TestClient:
    return TestClient(app)

def test_similarity_exists(client: TestClient):
    """Check that the endpoint exists"""
    response = client.post("/similarity")
    assert response.status_code < 500

def test_similarity_type(client: TestClient):
    """Ensure '/similarity' correctly echoes the input"""
    payload = []
    response = client.post("/similarity", json=payload)
    assert response.json() == []



