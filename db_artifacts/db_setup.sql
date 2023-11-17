CREATE SCHEMA `SmartSpeechCustomTiles` ;

CREATE TABLE SmartSpeechCustomTiles.CustomTiles (
    CustomTileID INT NOT NULL AUTO_INCREMENT,
    ImageURL VARCHAR(255) NOT NULL,
    UserEmail VARCHAR(255) NOT NULL,
    TextAssociated VARCHAR(255) NOT NULL,
    SoundAssociated VARCHAR(255) NOT NULL,
    TileColor VARCHAR(50) NOT NULL,
    
    PRIMARY KEY(CustomTileID, UserEmail)
);

SELECT * from SmartSpeechCustomTiles.CustomTiles;



