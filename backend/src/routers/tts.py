from functools import cache
import logging
import time
from typing import Annotated

from dotenv import dotenv_values
from fastapi import APIRouter, Depends, Response
import requests


TTS_ROUTE = "/tts"


router = APIRouter()


@cache
def get_config():
    """Returns a dictionary mapping environment variable name to string value."""
    return dotenv_values(".env.local")


@cache
def get_session():
    return requests.Session()


@router.get(TTS_ROUTE)
async def tts(phrase: str, config: Annotated[dict, Depends(get_config)], session: Annotated[requests.Session, Depends(get_session)]):
    """
    Converts **phrase** to audio using elevenlab's test to speech service.
    Returns a string of mp3 bytes.
    """
    headers = {
        "Accept": "audio/mpeg",
        "Content-Type": "application/json",
        "xi-api-key": config["TTS_API_KEY"]
    }

    data = {
        "text": phrase,
        "model_id": "eleven_monolingual_v1",
        "voice_settings": {
            "stability": 0.5,
            "similarity_boost": 0.5
        }
    }

    print(headers)

    start = time.perf_counter()
    response = session.post(
        config["TTS_API_URL"], json=data, headers=headers)
    end = time.perf_counter()

    logging.debug(f"Converting phrase '{phrase}' to audio took {end-start}s.")

    response.raise_for_status()

    audio = b"".join(response.iter_content(chunk_size=1024))
    return Response(audio)
