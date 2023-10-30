from functools import cache
import logging
import time
from typing import Annotated, List
from pydantic import BaseModel

from dotenv import dotenv_values
from fastapi import FastAPI, Depends, Response
from fastapi.middleware.cors import CORSMiddleware
import requests

from .similarity import similarity as Suggestion

class Drawing(BaseModel):
    content: str

class DrawingResponse(BaseModel):
    predictions: List[str]

class Image(BaseModel):
    content: str

class ImageResponse(BaseModel):
    predictions: List[str]

app = FastAPI()


origins = [
    "http://localhost:3000",
    "http://localhost"
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


@cache
def get_config():
    """Returns a dictionary mapping environment variable name to string value."""
    return dotenv_values(".env")


@cache
def get_session():
    return requests.Session()


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/health-check")
async def healthCheck():
    return {"message": "an apple a day keeps the doctor away"}

@app.post("/draw")
async def draw(drawing: Drawing):
    predictions = [drawing.content]
    return {"predictions": predictions}

@app.post("/image")
async def draw(image: Image):
    predictions = [image.content]
    return {"predictions": predictions}

@app.get("/tile/{user_id}")
async def tile(user_id: int):
    return {"user_id": user_id}

@app.get("/tts")
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

    start = time.perf_counter()
    response = session.post(
        config["TTS_API_URL"], json=data, headers=headers)
    end = time.perf_counter()

    logging.debug(f"Converting phrase '{phrase}' to audio took {end-start}s.")

    response.raise_for_status()

    audio = b"".join(response.iter_content(chunk_size=1024))
    return Response(audio)

@app.post("/similarity")
async def similarity(words: List[str]):
    suggestions = Suggestion.similar(words)
    return suggestions