import { TileAssets } from "@/components/AAC/TileTypes";

export const SOMEWHERE_ELSE_TILES_COLOR = "yellow";

const somewhereElse: TileAssets ={
    somewhereElse: {
        image: "/AAC_assets/img/go/somewhereElse.png",
        text: "Somewhere Else",
        sound: "Somewhere Else",
        tileColor: "purple",
    },
    myPlace: {
        image: "/AAC_assets/img/locations/myPlace.png",
        text: "My Place",
        sound: "My Place",
        tileColor: SOMEWHERE_ELSE_TILES_COLOR,
    }


}
export default somewhereElse;