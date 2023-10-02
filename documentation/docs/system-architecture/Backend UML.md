---
sidebar_position: 2
---

# Backend UML

```mermaid
classDiagram
  class FastAPI {
    
  }

  class RecognizeHandler {
    + handle(request: Request): Response
  }

  class TilesHandler {
    + handle(request: Request): Response
  }


  class Amazon_Rekognition {
    detect_labels(**kwargs)
  }

  class AMAZON_S3 {
    upload_file(file_name: string, bucket: string, object_name: string)
  }

  class Request {
    - method: string
    - path: string
    + query_params: object
    + request_body: object
  }

  class Response {
    - status_code: int
    + content: ?
  }

  FastAPI --> RecognizeHandler: routes /recognize requests
  FastAPI --> TilesHandler: routes /tile requests

  RecognizeHandler o-- Amazon_Rekognition: uses for image recognition 
  RecognizeHandler o-- AMAZON_S3: uses to store images
```

In this Diagram, the FASTAPI application will split routes to python submodules. Some submodules make use of AWS services like Rekognition or S3 (Object Storage). 