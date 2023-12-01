import pytest
import json
import spacy
from functools import cache
from fastapi import FastAPI
from fastapi.testclient import TestClient
from .. import similarity

@cache
def mock_load_model():
    model_name = "en_core_web_md"
    nlp = spacy.load(model_name)
    return nlp

@cache
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
    payload = { "words": ["fruit"] }
    response = client.post(similarity.SIMILARITY_ROUTE, json=payload)
    assert type(response.json()["suggestions"]) == type([])


def test_similarity_count(client: TestClient):
    """Check that the count parameter is being utilized correctly"""
    payload = { "words": ["fruit"]}
    response = client.post(f"{similarity.SIMILARITY_ROUTE}?count=3", json=payload)
    assert len(response.json()["suggestions"]) == 3


def test_similarity_ignore_input(client: TestClient):
    """Ignore words from the input from suggestions"""
    payload = { "words": ["apple"]}
    response = client.post(f"{similarity.SIMILARITY_ROUTE}?count=3", json=payload)
    assert "apple" not in response.json()["suggestions"]
