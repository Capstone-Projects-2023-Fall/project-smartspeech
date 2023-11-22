INSERT_CUSTOM_TILE_QUERY = (
	"INSERT INTO SmartSpeechCustomTiles.CustomTiles "
	"(ImageURL, UserEmail, TextAssociated, SoundAssociated, TileColor) "
	"VALUES (%(ImageURL)s, %(UserEmail)s, %(TextAssociated)s, %(SoundAssociated)s, %(TileColor)s)"
)

GET_CUSTOM_TILE_QUERY = (
    "SELECT ImageURL, UserEmail, TextAssociated, SoundAssociated, TileColor "
    "FROM SmartSpeechCustomTiles.CustomTiles "
    "WHERE UserEmail = %s"
)
