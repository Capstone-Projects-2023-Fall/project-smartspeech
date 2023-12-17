---
sidebar_position: 3
---

# Frontend

### UML

```mermaid
classDiagram
    class App{

    }

    class Home{

    }

    class UtteredTilesProvider{
        useUtteredTiles(): UtteredTilesState
        UtteredTilesProvider(children: React.ReactNode)
    }

    class SelectedTilesActionBar{
        - handleSpeak()
    }

    class Tiles{
        - dataLocation: string
        - currentFrame: TileAssets
    }

    class Canvas{
        - color: string
        - canvasRef: RefObject~HTMLCanvasElement~
        - onMouseDown()
        - clear()
        - drawLine(ctx: CanvasRenderingContext2D, currentPoint: Point, prevPoint: Point | null)
    }

    class PWAMeta{

    }

    class UtteredTilesState{
        + clear()
        + addTile(item: TileData)
    }

    class TileData{
        image: string
        sound: string?
        text: string
        tileColor: string
        subTiles: TileAssets?
    }

    class TileProps {
        image: string
        sound: string?
        text: string
        tileColor: string
    }

    class Tile {
        props: TileProps
    }


    class TileAssets {
        [key: string]: TileData
    }

    class Point {
        x: number
        y: number
    }

    class MiniTile {
        MiniTile(image: string, text: string)
    }

    class CaretakerPopup {
        showDialog: boolean
    }

    class ManualModeButton {
        isOpen: boolean
    }

    class ManualTilesPopup {
        isOpen: boolean
    }

    class CaretakerPopup {
        status: string
        router: NextRouter
    }

    class InferenceProvider {
        preditions: InferenceData[]
        wordDict: string[]
        model: LayersModel
    }

    note for TileAssets "Self Referential data type"

    SelectedTilesActionBar --> MiniTile: uses to display selected tiles
    Tiles --> Tile: uses to display tiles that can be hit

    SelectedTilesActionBar ..> UtteredTilesProvider: reads selected tiles from
    Tile ..> UtteredTilesProvider: writes selected tiles to
    Tile ..> SpeechSynthesisUtterance: uses the browser's Web Speech API to convert text to audio

    App *-- Home: uses
    App --> PWAMeta: uses
    Home --> UtteredTilesProvider: instantiates
    Home --> SelectedTilesActionBar: contains
    Home --> Tiles: instantiates
    Home --> Canvas: contains
    Home --> RecentlyClickedTiles: contains
    Home --> CaretakerPopup: conditionally contains
    Home --> ManualModeButton: contains

    RecentlyClickedTiles --> UtteredTilesProvider: gets list of tiles

    ManualModeButton --> ManualTilesPopup: opens on short press
    ManualModeButton --> CaretakerScreen: opens on long press

    ManualModeButton --> LoginPopupProvider: uses to open caretaker page

    ManualTilesPopup --> Tiles: contains
    ManualTilesPopup --> SelectedTilesActionBar: contains

    CaretakerPopup --> LoginPopupProvider: uses to ensure user is logged in

    Canvas --> InferenceProvider: uses to access drawing recognition model

    Tiles --> Backend: fetches custom tiles

    CaretakerPopup --> Backend: uploads custom tiles

    Home --> Backend: make tts requests
```

> Classes with no relationships are used as datatypes.

Our frontend is a Next.js app built using React features. Many classes in the above diagram inherit from React.JSX.Element, including App, Home, SelectedTilesActionBar, Tiles, Canvas, and PWAMeta. App is a Next.js internal class as the entry point into our application and page router, but we add headers through PWAMeta to enable PWA features for our app.

### Visual Diagram

![Alt text](../../static/img/screenshots/wireframe.png)

User can draw on the main canvas which will show tile suggestions at the bottom. As the user continues to draw, suggestions are updated and presented in the bottom row of tiles. When a user clicks on a tile, it is saved to the recent tiles, which are presented above the persistent 'Yes' and 'No' tiles (which are difficult to draw). When the user is ready to speak their sentence, they may press the check mark button at the top right of the screen. If the user is unhappy with their sentence, or they do not need to speak it anymore, they may press the trashcan icon to clear the action bar. The manual tile in the bottom right is used to enter the 'Manual Mode' which is the standard tile system used in current AAC solutions.
