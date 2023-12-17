---
sidebar_position: 2
---

# Backend

### UML

```mermaid
classDiagram
  class FastAPI {

  }

  class rekognition_router {
    + handle(request: Request) Response
  }

  class custom_tiles_router {
    + handle(request: Request) Response
  }


  class Amazon_Rekognition {
    detect_labels(**kwargs)
  }

  class similarity_router {
    nlp: Language
    + similar(words: List[str]) List[str]
    vocab_similarity(word: str) List[float]
  }

  class tts_router {
    tts(phrase: str) Response
  }

  class s3_router {
    upload_file_to_s3(base64File: str, file_name: str, extension: str, force_unique: bool) Response
    get_file_from_s3(filename: str, get_url: bool) Response
  }

  FastAPI --> rekognition_router: routes /recognize requests
  FastAPI --> custom_tiles_router: routes /custom-tile requests
  FastAPI --> similarity_router: routes /similarity requests
  FastAPI --> tts_router: passes /tts to Tts.router
  FastAPI --> s3_router: routes /s3 requests
  tts_router --> s3_router: uses to cache audio files

  rekognition_router o-- Amazon_Rekognition: uses for image recognition
```

In this Diagram, the FASTAPI application will send routes to python submodules. Some submodules make use of AWS services like Rekognition, S3 (Object Storage), or RDS.
