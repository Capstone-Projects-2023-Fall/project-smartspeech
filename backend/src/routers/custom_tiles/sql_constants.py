# Connection Constants
DB_URL_ENV_VAR="CT_DB_URL"
DB_PORT_ENV_VAR="CT_DB_PORT"
DB_USERNAME_ENV_VAR="CT_DB_USERNAME"
DB_PASSWORD_ENV_VAR="CT_DB_PASSWORD"


# Error constants
DB_CONNECT_FAILURE_MSG="DB_FAILED_TO_CONNECT"
DB_GET_TILES_FAILURE_MSG="DB GET error"
EMAIL_INVALID_MSG="Email not in valid format"

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
