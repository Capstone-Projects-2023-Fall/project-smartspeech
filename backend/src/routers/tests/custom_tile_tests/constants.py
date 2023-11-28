from ...aws_constants import SAMPLE_BASE64_IMAGE

VALID_EMAIL = "test@parth.fr"
INVALID_EMAIL = "I_LOVE_APPLES"

FAKE_RESP = {
	"url": "FAKE_URL.url",
	"email": "parth@gmail.com",
	"text": "Base64",
	"sound": "Base64",
	"tileColor": "red"
}
FAKE_DB_RESP = [
	(FAKE_RESP['url'], FAKE_RESP['email'], FAKE_RESP['text'], FAKE_RESP['sound'], FAKE_RESP['tileColor'])
]


"""
class InsertCustomTileModel(BaseModel):
	image: str
	imageExt: str
	sound: str = ""
	text: str
	tileColor: str
	email: str
"""
gen_FAKE_REQ = lambda email: {
	'image': SAMPLE_BASE64_IMAGE, 
	'imageExt': 'png',
	'sound': 'test_sound',
	'text': 'test_text',
	'tileColor': 'test_tileColor',
	'email': email
}