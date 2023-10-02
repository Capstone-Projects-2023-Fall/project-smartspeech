---
sidebar_position: 3
---

# Frontend UML


```mermaid
classDiagram
    App *-- Home
    App *-- PWAMeta

    Home *-- SelectedTilesActionBar
    Home *-- Tiles
    Home *-- Canvas

    SelectedTilesActionBar --> UtteredTilesProvider
    SelectedTilesActionBar --> MiniTile

    Tiles --> UtteredTilesProvider
    Tiles *-- TileAssets

    UtteredTilesProvider *-- UtteredTilesState

    UtteredTilesState *-- TileData

    TileData *-- TileProps
    TileData *-- TileAssets

    TileAssets *-- TileData

    Canvas --> Point

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
        
    }

    class TileProps {
        image: string
        sound: string?
        text: string
        tileColor: string
    }

    class Point {
        x: number
        y: number
    }

    class MiniTile {
        MiniTile(image: string, text: string)
    }
```

Our frontend is a Next.js app built using React features. Many classes in the above diagram inherit from React.JSX.Element, including App, Home, SelectedTilesActionBar, Tiles, Canvas, and PWAMeta. App is usually a Next.js internal class, but we add headers through PWAMeta to enable PWA features for our app.
