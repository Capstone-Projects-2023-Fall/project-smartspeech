from collections import OrderedDict
from unittest.mock import Mock

from fastapi import FastAPI, HTTPException
from fastapi.testclient import TestClient
import pytest
import requests
import requests_mock

from .. import tts

from ..s3 import get_file_from_s3_logic, upload_file_to_s3_logic


MOCK_TTS_ENDPOINT = 'mock://tts.com'
MOCK_AUDIO_BYTES = b'123456789'
MOCK_AUDIO_BYTES_STR = str(MOCK_AUDIO_BYTES)[2:-1]


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
    adapter.register_uri('POST', MOCK_TTS_ENDPOINT, text=MOCK_AUDIO_BYTES_STR)
    return session


@pytest.fixture
def client() -> TestClient:
    app = FastAPI()
    app.include_router(tts.router)
    app.dependency_overrides.update(
        {tts.get_config: mock_get_config,
         tts.get_session: mock_get_session}
    )

    return TestClient(app)


def test_tts_s3(client: TestClient):
    """Make sure that, in the case that the audio exists on S3, that
       it is returned as-is from S3."""
    mock_s3_get = Mock()
    mock_s3_get.return_value = (MOCK_AUDIO_BYTES.partition(b'5'), None)
    tts.get_file_from_s3_logic = mock_s3_get

    response = client.get(f"{tts.TTS_ROUTE}?phrase=phrase")

    assert response.status_code == 200
    assert response.text == MOCK_AUDIO_BYTES_STR


def test_tts_no_s3(client: TestClient):
    """Make sure that, in the case that there is an error retrieving a phrase
       from S3, that the endpoint turns around and calls elevenlabs, uploads
       the new audio data, and returns the audio data."""
    mock_s3_get = Mock()
    mock_s3_get.side_effect = HTTPException(422)
    tts.get_file_from_s3_logic = mock_s3_get

    mock_s3_upload = Mock()
    tts.upload_file_to_s3_logic = mock_s3_upload

    response = client.get(f"{tts.TTS_ROUTE}?phrase=phrase")

    mock_s3_upload.assert_called_once()
    assert response.status_code == 200
    assert response.text == MOCK_AUDIO_BYTES_STR


def test_tts_no_s3_and_upload_fails(client: TestClient):
    """Make sure that, in the case that there is an error retrieving a phrase
       from S3, that the endpoint turns around and calls elevenlabs, tries
       to upload only for it to fail, and returns the audio regardless."""
    mock_s3_get = Mock()
    mock_s3_get.side_effect = HTTPException(422)
    tts.get_file_from_s3_logic = mock_s3_get

    mock_s3_upload = Mock()
    mock_s3_upload.side_effect = HTTPException(422)
    tts.upload_file_to_s3_logic = mock_s3_upload

    response = client.get(f"{tts.TTS_ROUTE}?phrase=phrase")

    mock_s3_upload.assert_called_once()
    assert response.status_code == 200
    assert response.text == MOCK_AUDIO_BYTES_STR


def test_tts_get_data(client: TestClient):
    """Assert that `get_data` functions as expected."""
    assert tts.get_data('phrase') == {
        "text": 'phrase',
        "model_id": "eleven_monolingual_v1",
        "voice_settings": {
            "stability": 0.5,
            "similarity_boost": 0.5
        }
    }


def test_tts_get_headers(client: TestClient):
    """Assert that `get_headers` functions as expected."""
    assert tts.get_headers({'TTS_API_KEY': 'secret'}) == {
        "Accept": "audio/mpeg",
        "Content-Type": "application/json",
        "xi-api-key": 'secret'
    }


def test_tts_phrase_to_s3_name(client: TestClient):
    """Assert that `phrase_to_s3_name` functions as expected."""
    assert tts.phrase_to_s3_name('hello') == 'hello.mp3'
    assert tts.phrase_to_s3_name('Hello') == 'hello.mp3'
    assert tts.phrase_to_s3_name(
        'Wonderful\tday    today  ') == 'wonderfuldaytoday.mp3'


def test_get_session(client: TestClient):
    """Assert that `get_session` returns a requests Session."""
    assert type(tts.get_session()) == requests.Session


def test_get_config(client: TestClient):
    """Assert that `get_config` returns  the correct type. 
       We have to assume that dotenv just works, 
       so this is just for 100% coverage."""
    assert type(tts.get_config()) == dict
