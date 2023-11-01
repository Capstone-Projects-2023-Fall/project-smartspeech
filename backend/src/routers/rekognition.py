from fastapi import APIRouter, UploadFile, HTTPException
from fastapi.responses import StreamingResponse
from pydantic import BaseModel

from dotenv import load_dotenv
from os import getenv
import boto3
from base64 import b64decode

from .aws_constants import UPLOAD_DELECT_LABELS, MAX_LABELS_PER_REQ
from .aws_constants import BUCKET_NAME_ENV_VAR, ACCESS_KEY_ENV_VAR, SECRET_KEY_ENV_VAR, OBJECT_URL_ENV_VAR, AWS_REGION_ENV_VAR

router = APIRouter()
load_dotenv(dotenv_path=".env.local")

rekognition = boto3.client('rekognition',
                  aws_access_key_id=getenv(ACCESS_KEY_ENV_VAR),
                  aws_secret_access_key=getenv(SECRET_KEY_ENV_VAR),
                  region_name=getenv(AWS_REGION_ENV_VAR)
                  )
class ImageRequest(BaseModel):
    base64image: str

class RekognitionLabel(object):
    """Encapsulates an Amazon Rekognition label."""

    def __init__(self, label):
        """
        Initializes the label object.

        label: Label data, in the format returned by Amazon Rekognition
                      functions.
        timestamp: The time when the label was detected, if the label
                          was detected in a video.
        """
        self.name = label.get("Name").lower()
        self.confidence = label.get("Confidence")

@router.post(UPLOAD_DELECT_LABELS)
async def detect_labels(image: ImageRequest, max_labels: int = MAX_LABELS_PER_REQ):

    try:
        byteImage = b64decode(image.base64image)
        response = rekognition.detect_labels(
            Image={"Bytes": byteImage}, MaxLabels=max_labels
        )
        labels = [RekognitionLabel(label) for label in response["Labels"]]
        return labels
    except:
        return HTTPException(status_code=400, detail="Bad Request")


