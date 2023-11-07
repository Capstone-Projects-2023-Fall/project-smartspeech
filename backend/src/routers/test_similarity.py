import pytest
import json
import spacy
from typing import Annotated
from fastapi import FastAPI, Depends
from fastapi.testclient import TestClient
from . import similarity

def mock_load_model():
    model_name = "en_core_web_md"
    nlp = spacy.load(model_name)
    return nlp


def mock_parse_vocab() -> dict:
    # Import vocab from json file
    f = open("resources/test_words.json")
    tiles = json.load(f)["tiles"]
    vocab = " ".join(tiles)
    return vocab

@pytest.fixture
def client() -> TestClient:
    app = FastAPI()
    app.include_router(similarity.router)
    app.dependency_overrides.update({
        similarity.parse_vocab: mock_parse_vocab,
        similarity.load_model: mock_load_model
        })
    return TestClient(app)


def test_similarity_exists(client: TestClient):
    """Check that the endpoint exists"""
    response = client.post(similarity.SIMILARITY_ROUTE)
    assert response.status_code < 500

def test_similarity_type(client: TestClient):
    """Ensure '/similarity' correctly echoes the input"""
    payload = { "words": [] }
    response = client.post(similarity.SIMILARITY_ROUTE, json=payload)
    assert response.json() == {"suggestions": []}

def test_similarity_output(client: TestClient):
    """Ensure '/similarity' correctly echoes the input"""
    payload = { "words": ["fruit"] }
    response = client.post(f"{similarity.SIMILARITY_ROUTE}?count=1", json=payload)
    assert response.json() == { "suggestions": ["fruit"] }


