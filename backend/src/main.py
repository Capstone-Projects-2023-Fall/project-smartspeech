from fastapi import FastAPI

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/health-check")
async def healthCheck():
    return {"message": "an apple a day keeps the doctor away"}

@app.get("/tts")
async def tts(phrase: str):
    """
    Converts **phrase** to audio using elevenlab's test to speech service.
    Returns a string of mp3 bytes.
    """
    return "successful"