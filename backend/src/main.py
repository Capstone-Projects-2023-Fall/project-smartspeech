from typing import List

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

# custom modules
from .routers.s3 import router as s3_router
from .routers.tts import router as tts_router

from dotenv import dotenv_values
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .similarity import suggestion as Suggestion

class Drawing(BaseModel):
    content: str


class DrawingResponse(BaseModel):
    predictions: List[str]


class Image(BaseModel):
    content: str


class ImageResponse(BaseModel):
    predictions: List[str]


app = FastAPI()
app.include_router(s3_router)
app.include_router(tts_router)


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

@app.post("/similarity")
async def similarity(words: List[str]):
    suggestions = Suggestion.similar(words)
    return suggestions