from fastapi import FastAPI
from pydantic import BaseModel

class Image(BaseModel):
    content: str

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/health-check")
async def healthCheck():
    return {"message": "an apple a day keeps the doctor away"}

@app.get("/draw")
async def draw(image: Image):
    return {"content": image.content}
