from fastapi import APIRouter, UploadFile, HTTPException, Depends
from fastapi.responses import StreamingResponse
from pydantic import BaseModel
import uuid

from dotenv import load_dotenv
from os import getenv
import boto3

from base64 import b64decode
from io import BytesIO

from .aws_constants import UPLOAD_TO_S3_ROUTE, GET_FROM_S3_ROUTE
from .aws_constants import BUCKET_NAME_ENV_VAR, ACCESS_KEY_ENV_VAR, SECRET_KEY_ENV_VAR, OBJECT_URL_ENV_VAR, AWS_REGION_ENV_VAR

from typing import Any, Annotated

router = APIRouter()
load_dotenv(dotenv_path=".env.local")

def getS3Instance():
    s3 = boto3.client('s3',
                  aws_access_key_id=getenv(ACCESS_KEY_ENV_VAR),
                  aws_secret_access_key=getenv(SECRET_KEY_ENV_VAR),
                  region_name=getenv(AWS_REGION_ENV_VAR)
                  )

    return s3

class UploadFileToS3Model(BaseModel):
    base64File: str
    file_name: str
    extension: str
    force_unique: bool = True


def upload_file_to_s3_logic(s3: Any, file_binary: bytes, uploaded_file_name: str, force_unique: bool):
    # prefix with uuid if user wants it to be unique
    if force_unique:
        uploaded_file_name = f"{uuid.uuid4().hex}-{uploaded_file_name}"

    s3.upload_fileobj(BytesIO(file_binary), getenv(
        BUCKET_NAME_ENV_VAR), uploaded_file_name)

    return f'{getenv(OBJECT_URL_ENV_VAR)}/{uploaded_file_name}'


@router.post(UPLOAD_TO_S3_ROUTE)
def upload_file_to_s3(body: UploadFileToS3Model, s3: Annotated[Any, Depends(getS3Instance)]):
    """Upload file to S3 bucket

    Args:
            body (UploadFileToS3Model): Contains:

                    base64File: str # base64 representation of the file
                    file_name: str  # file name (ex: base.16.png -> base.16)
                    extension: str  # extension (ex: base.16.png ->    .png)
                    force_unique: bool = True # Set to false if you want your file to be saved as the raw file name other wise system will prefix each file with a `uuidv4`

    Returns:
            dict: contains generated filename and url. Filename depends on your params and bool (force_unique) from UploadFileToS3Model
    """
    uploaded_file_name = f'{body.file_name}.{body.extension}'

    uploadedURL = upload_file_to_s3_logic(s3, b64decode(body.base64File), uploaded_file_name, body.force_unique)

    return {
        "message": "uploaded",
        "filename": uploaded_file_name,
        "url": uploadedURL
    }


def get_file_from_s3_logic(s3: Any, filename: str, get_url: bool = False):
    try:
        response = s3.get_object(
            Bucket=getenv(BUCKET_NAME_ENV_VAR),
            Key=filename,
        )

        if get_url:
            return {"url": f'{getenv(OBJECT_URL_ENV_VAR)}/{filename}'}

        # Get the object content to stream it to user
        object_content = response['Body'].iter_chunks()
        object_content_type = response['ContentType']

        return (object_content, object_content_type)
    except s3.exceptions.NoSuchKey:
        # Handle the case when the specified object is not found
        raise HTTPException(status_code=404, detail="Object not found in S3")


@router.get(GET_FROM_S3_ROUTE)
def get_file_from_s3(filename: str, s3: Annotated[Any, Depends(getS3Instance)],get_url: bool = False):
    """get file upload to s3 if possible

    Args:
            filename (str): File name to GET
            get_url (bool, optional): Returns the url instead of object. Defaults to False.

    Raises:
            HTTPException: `filename` is not a valid `Key` in S3 bucket.

    Returns:
            dict["url":, str] : if get_url is `true` it will return a `{url: "..."}`
            StreamingResponse : if get_url is `false` it will return the literal object
    """
    (object_content, object_content_type) = get_file_from_s3_logic(s3, filename, get_url)
    return StreamingResponse(
        content=object_content,
        media_type=object_content_type,  # Set the based on s3 resp
    )
