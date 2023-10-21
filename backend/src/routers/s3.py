from fastapi import APIRouter, UploadFile
from uuid import uuid4

from dotenv import load_dotenv
from os import getenv
import boto3

BUCKET_NAME_ENV_VAR="BUCKET_NAME"
ACCESS_KEY_ENV_VAR="ACCESS_KEY"
SECRET_KEY_ENV_VAR="SECRET_KEY"

router = APIRouter()
load_dotenv(dotenv_path=".env.local")

s3 = boto3.client('s3', \
					aws_access_key_id=getenv(ACCESS_KEY_ENV_VAR), \
					aws_secret_access_key=getenv(SECRET_KEY_ENV_VAR)
				)


@router.post("/s3/drawn-image")
def upload_image_to_s3(fileObj: UploadFile, image_name: str, extension: str, upload_with_raw_name: bool=False):
	uploaded_image_name = fileObj.filename
	
	if upload_with_raw_name == False or uploaded_image_name is None: 
		uploaded_image_name = f'{uuid4().hex}-{image_name}.{extension}'

	s3.upload_fileobj(fileObj.file, getenv(BUCKET_NAME_ENV_VAR), uploaded_image_name)

	return {
		"message": "uploaded",
		"filename": uploaded_image_name
	}



