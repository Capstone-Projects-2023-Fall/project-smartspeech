import re

regex = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,7}\b'
 

def is_valid_email(email: str):
	return re.fullmatch(regex, email) is not None

