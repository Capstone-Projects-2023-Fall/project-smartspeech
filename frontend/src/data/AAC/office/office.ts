import { TileAssets } from "@/components/AAC/TileTypes";

export const OFFICE_TILES_COLOR = "yellow";

const office: TileAssets ={
    office: {
        image: "/AAC_assets/img/job/office.png",
        text: "Office",
        sound: "Office",
        tileColor: "blue",
    },
    workWords: {
        image: "/AAC_assets/img/job/workWord.png",
        text: "Work Words",
        sound: "Work Words",
        tileColor: OFFICE_TILES_COLOR,
    }
}
export default office;