from functools import cache
from typing import Annotated

from dotenv import dotenv_values
from fastapi import FastAPI, Depends

app = FastAPI()

@cache
def get_config():
    """Returns a dictionary mapping environment variable name to string value."""
    return dotenv_values(".env")

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/health-check")
async def healthCheck():
    return {"message": "an apple a day keeps the doctor away"}

@app.get("/tts")
async def tts(phrase: str, config: Annotated[dict, Depends(get_config)]):
    """
    Converts **phrase** to audio using elevenlab's test to speech service.
    Returns a string of mp3 bytes.
    """
    return config["ELEVEN_TTS_KEY"]
