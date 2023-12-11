---
sidebar_position: 6
---
# How to create Tiles

Following is the process for creating tiles in the SmartSpeech app.

## Adding a tile to Manual Selection
### Step 1

You'll first need to find an image asset to add a new permanent tile to the manual selection of tiles. Place this image asset preferably within the \frontend\public\AAC_assets\img folder to keep it organized.
Add an image asset under the appropriate category in [C:\Users\borpu\Documents\GitHub\project-smartspeech\frontend\public\AAC_assets\img]

### Step 2

In [C:\Users\borpu\Documents\GitHub\project-smartspeech\frontend\src\data\AAC], create an entry in the appropriate subtiles folder. Here a butterfly is an animal so we make an entry inside the animal.ts file stored inside the animals folder. Each tile entry must have an image, text, sound, and tile color, it may or may not also have a subTile category that points to another selection of tiles. 

`
butterfly: {
        image: "/AAC_assets/img/animals/butterfly.png",
        text: "Butterfly",
        sound: "Butterfly",
        tileColor: THINGS_TILES_COLOR,
      },
`

## Adding a tile for reKognition
### Step 1

The useRekognition provider will use the flat list of tiles inside of \frontend\src\data\testing\AAC, simply redo steps 1 and 2 previously but replace the file to place your entry from the Tiles.ts or subtile ts file to the flatListDataFile.ts, here the only change will be the tileColor. Sometimes the tile may not appear when trying to have it recognized with the camera because the signifier for that tile "butterfly" may not be the recognition's descriptive word for it, it may instead be insect(In this case It will most likely be butterfly). 

`
butterfly: {
        image: "/AAC_assets/img/animals/butterfly.png",
        text: "Butterfly",
        sound: "Butterfly",
        tileColor: "blue",
      },
`

