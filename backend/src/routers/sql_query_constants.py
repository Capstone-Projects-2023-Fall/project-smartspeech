INSERT_CUSTOM_TILE_QUERY = (
	"INSERT INTO SmartSpeechCustomTiles.CustomTiles "
	"(ImageURL, UserEmail, TextAssociated, SoundAssociated, TileColor) "
	"VALUES (%(ImageURL)s, %(UserEmail)s, %(TextAssociated)s, %(SoundAssociated)s, %(TileColor)s)"
)