---
sidebar_position: 3
---

# Frontend UML

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

    note for TileAssets "Self Referential data type"

    SelectedTilesActionBar --> MiniTile: uses to display selected tiles
    Tiles --> Tile: uses to display tiles that can be hit

    SelectedTilesActionBar ..> UtteredTilesProvider: reads selected tiles from
    Tile ..> UtteredTilesProvider: writes selected tiles to

    App *-- Home: uses
    App --> PWAMeta: uses
    Home --> UtteredTilesProvider: instantiates
    Home --> SelectedTilesActionBar: instantiates
    Home --> Tiles: instantiates
    Home --> Canvas: instantiates
```

Our frontend is a Next.js app built using React features. Many classes in the above diagram inherit from React.JSX.Element, including App, Home, SelectedTilesActionBar, Tiles, Canvas, and PWAMeta. App is a Next.js internal class as the entry point into our application and page router, but we add headers through PWAMeta to enable PWA features for our app.
