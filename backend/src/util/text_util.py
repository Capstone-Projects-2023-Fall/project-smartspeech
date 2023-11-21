import re

EMAIL_REGEX = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,7}\b'
 

def is_valid_email(email: str):
	return re.fullmatch(EMAIL_REGEX, email) is not None

def replace_white_space(text: str, replacement: str = '-'):
	return re.sub('\s+', replacement, text);