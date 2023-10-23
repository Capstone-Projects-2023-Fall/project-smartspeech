from fastapi import FastAPI
from fastapi.testclient import TestClient
import pytest
import requests
import requests_mock

from .tts import TTS_ROUTE, router, get_config, get_session


MOCK_TTS_ENDPOINT = 'mock://tts.com'
MOCK_TEXT = 'exampledata'


def mock_get_config() -> dict:
    return {
        'TTS_API_KEY': '',
        'TTS_API_URL': MOCK_TTS_ENDPOINT
    }


# https://pypi.org/project/requests-mock/
def mock_get_session() -> dict:
    session = requests.Session()
    adapter = requests_mock.Adapter()
    session.mount(MOCK_TTS_ENDPOINT, adapter)
    adapter.register_uri('POST', MOCK_TTS_ENDPOINT, text=MOCK_TEXT)
    return session


@pytest.fixture
def client() -> TestClient:
    app = FastAPI()
    app.include_router(router)
    app.dependency_overrides.update(
        {get_config: mock_get_config,
         get_session: mock_get_session}
    )

    return TestClient(app)


def test_tts(client: TestClient):
    """Ensure that the client calls the correct endpoint and returns the
       correct value."""
    response = client.get(f"{TTS_ROUTE}?phrase=phrase")
    assert response.status_code == 200
    assert response.text == MOCK_TEXT
