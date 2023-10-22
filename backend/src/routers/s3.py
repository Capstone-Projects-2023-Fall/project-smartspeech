from fastapi import APIRouter, UploadFile
from pydantic import BaseModel
import uuid

from dotenv import load_dotenv
from os import getenv
import boto3
from base64 import b64decode
from io import BytesIO

from .s3_constants import BUCKET_NAME_ENV_VAR, ACCESS_KEY_ENV_VAR, SECRET_KEY_ENV_VAR, UPLOAD_TO_S3_ROUTE, OBJECT_URL_ENV_VAR

router = APIRouter()
load_dotenv(dotenv_path=".env.local")

if getenv(ACCESS_KEY_ENV_VAR) is None or getenv(SECRET_KEY_ENV_VAR) is None:
	print(getenv(ACCESS_KEY_ENV_VAR), getenv(SECRET_KEY_ENV_VAR), uuid.uuid4().hex)
	raise RuntimeError("AWS Creds or ENV not present")

s3 = boto3.client('s3', \
					aws_access_key_id=getenv(ACCESS_KEY_ENV_VAR, "key"), \
					aws_secret_access_key=getenv(SECRET_KEY_ENV_VAR, "secret")
				)



class UploadFileToS3Model(BaseModel):
	base64File: str
	file_name: str 
	extension: str

@router.post(UPLOAD_TO_S3_ROUTE)
def upload_file_to_s3(body: UploadFileToS3Model):
	uploaded_file_name = f'{uuid.uuid4().hex}-{body.file_name}.{body.extension}'
	file_binary = b64decode(body.base64File)
	
	
	s3.upload_fileobj(BytesIO(file_binary), getenv(BUCKET_NAME_ENV_VAR, "smart-speech-media"), uploaded_file_name)

	return {
		"message": "uploaded",
		"filename": uploaded_file_name,
		"url": f'{getenv(OBJECT_URL_ENV_VAR)}/{uploaded_file_name}'
	}



