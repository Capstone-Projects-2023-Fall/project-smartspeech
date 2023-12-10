from ...aws_constants import SAMPLE_BASE64_IMAGE

VALID_EMAIL = "test@parth.fr"
INVALID_EMAIL = "I_LOVE_APPLES"

FAKE_RESP = {
	"id": 99,
	"url": "FAKE_URL.url",
	"email": "parth@gmail.com",
	"text": "Base64",
	"sound": "Base64",
	"tileColor": "red"
}
FAKE_DB_RESP = [
	(FAKE_RESP['id'], FAKE_RESP['url'], FAKE_RESP['email'], FAKE_RESP['text'], FAKE_RESP['sound'], FAKE_RESP['tileColor'])
]

MOCK_DB_TILE_IDX = 100

"""
class InsertCustomTileModel(BaseModel):
	image: str
	imageExt: str
	sound: str = ""
	text: str
	tileColor: str
	email: str
"""
gen_FAKE_REQ = lambda email, ext=".png": {
	'image': SAMPLE_BASE64_IMAGE, 
	'imageExt': ext,
	'sound': 'test_sound',
	'text': 'test_text',
	'tileColor': 'test_tileColor',
	'email': email
}