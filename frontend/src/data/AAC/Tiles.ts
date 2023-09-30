import { TileAssets } from "@/components/AAC/TileTypes";
import colors, { COLOR_TILES_COLOR } from "./colors/colors";

const data: TileAssets = {
    colors: {
        image: "/AAC_assets/img/colors/colorwheel.png",
        text: "Colors",
        sound: "Colors",
        tileColor: COLOR_TILES_COLOR,
        subTiles: colors,
    },
    ai: {
        image: "/AAC_assets/img/ai/ChatGPT.png",
        text: "ChatGPT",
        sound: "Chat G P T",
        tileColor: "red",
    },
    good: {
        image: "/AAC_assets/img/standard/good.png",
        text: "Good",
        sound: "good",
        tileColor: "green",
    },
};

export default data;
