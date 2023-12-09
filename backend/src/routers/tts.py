import base64
from functools import cache
import time
from typing import Annotated, Any
import urllib.parse

from dotenv import load_dotenv
import os

from fastapi import APIRouter, Depends, Response, HTTPException
import requests

from .aws_constants import GET_FROM_S3_ROUTE
from .s3 import get_file_from_s3_logic, upload_file_to_s3_logic, getS3Instance

TTS_ROUTE = "/tts"


router = APIRouter()

load_dotenv(".env.local")

def get_config():
    """Returns a dictionary mapping environment variable name to string value."""
    return { "TTS_API_KEY": os.getenv("TTS_API_KEY"), "TTS_API_URL": os.getenv("TTS_API_URL") }


@cache
def get_session():
    return requests.Session()


def get_headers(config: dict) -> dict:
    return {
        "Accept": "audio/mpeg",
        "Content-Type": "application/json",
        "xi-api-key": config["TTS_API_KEY"]
    }


def get_data(phrase: str) -> dict:
    return {
        "text": phrase,
        "model_id": "eleven_monolingual_v1",
        "voice_settings": {
            "stability": 0.5,
            "similarity_boost": 0.5
        }
    }


def phrase_to_s3_name(phrase: str) -> str:
    """Lowercases `phrase`, removes all whitespace, and adds the mp3 extension"""
    return ''.join(phrase.lower().split()) + '.mp3'


@router.get(TTS_ROUTE)
async def tts(phrase: str, config: Annotated[dict, Depends(get_config)], session: Annotated[requests.Session, Depends(get_session)],
              s3: Annotated[Any, Depends(getS3Instance)]):
    """
    Checks if the audio of **phrase** is cached on S3, and returns. If it is
    not on S3, then it converts **phrase** to audio using elevenlab's test to
    speech service.

    Returns a string of mp3 bytes.
    """
    start = time.perf_counter()

    audio = None
    try:
        # Try to fetch from cache
        print('Trying to get phrase from S3...')
        (object_content, _) = get_file_from_s3_logic(
            s3, phrase_to_s3_name(phrase), get_url=False)
        print('Object found on S3!')
        audio = b"".join(object_content)
    except HTTPException:
        # Cache miss, so we generate a new sound file
        print('Object not found on S3! Fetching from elevenlabs...')
        response = session.post(
            config["TTS_API_URL"], json=get_data(phrase), headers=get_headers(config))
        response.raise_for_status()
        audio = b"".join(response.iter_content(chunk_size=1024))

        # Add the new sound file to S3
        try:
            upload_file_to_s3_logic(audio, phrase_to_s3_name(phrase), False)
        except Exception as e:
            # Even if the upload was unsuccessful,
            # we still return the audio to the user
            print(f'Failed to upload phrase audio. {e}')

    end = time.perf_counter()

    print(f"Converting phrase '{phrase}' to audio took {end-start}s.")

    return Response(audio)
