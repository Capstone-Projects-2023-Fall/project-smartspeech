from typing import Tuple

def mapCustomTileEntryToJson(entry: Tuple[str]):
	"""Maps DB entry to a dict for JSON transfer

	Args:
		entry (Tuple[str]): Needs to be tuple of this format: `(ImageURL, UserEmail, TextAssociated, SoundAssociated, TileColor)`

	Returns:
		dict with those mappings for JSON Transfer 
	"""

	(ImageURL, UserEmail, TextAssociated, SoundAssociated, TileColor) = entry

	return {
		'url': ImageURL,
		'email': UserEmail,
		'text': TextAssociated,
		'sound': SoundAssociated,
		'tileColor': TileColor
	}