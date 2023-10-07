from fastapi import FastAPI

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/health-check")
async def root():
    return {"message": "an apple a day keeps the doctor away"}