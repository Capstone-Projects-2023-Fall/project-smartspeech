import { TileProps } from "@/components/AAC/Tile";
import { TileAssets } from "@/components/AAC/TileTypes";

const COLOR_TILES_COLOR = "yellow";

const sampleColors: TileAssets = {
    blue: {
        image: "/AAC_assets/img/colors/blue.png",
        text: "Blue",
        sound: "Blue",
        tileColor: COLOR_TILES_COLOR,
    },
    brown: {
        image: "/AAC_assets/img/colors/brown.png",
        text: "Brown",
        sound: "Brown",
        tileColor: COLOR_TILES_COLOR,
    },
    green: {
        image: "/AAC_assets/img/colors/green.png",
        text: "Green",
        sound: "Green",
        tileColor: COLOR_TILES_COLOR,
    },
    orange: {
        image: "/AAC_assets/img/colors/orange.png",
        text: "Orange",
        sound: "Orange",
        tileColor: COLOR_TILES_COLOR,
    },
    pink: {
        image: "/AAC_assets/img/colors/pink.png",
        text: "Pink",
        sound: "Pink",
        tileColor: COLOR_TILES_COLOR,
    },
    purple: {
        image: "/AAC_assets/img/colors/purple.png",
        text: "Purple",
        sound: "Purple",
        tileColor: COLOR_TILES_COLOR,
    },
    red: {
        image: "/AAC_assets/img/colors/red.png",
        text: "Red",
        sound: "Red",
        tileColor: COLOR_TILES_COLOR,
    },
};

const sampleData: TileAssets = {
    colors: {
        image: "/AAC_assets/img/colors/colorwheel.png",
        text: "Colors",
        sound: "colors",
        tileColor: "yellow",
        subTiles: sampleColors,
    },
    good: {
        image: "/AAC_assets/img/standard/good.png",
        text: "Good",
        sound: "good",
        tileColor: "green",
    },
    ai: {
        image: "/AAC_assets/img/ai/ChatGPT.png",
        text: "ChatGPT",
        sound: "Chat G P T",
        tileColor: "red",
    },
};

export const SampleSuggestedTilesData: TileProps[] = [sampleData.good, sampleData.ai];

export default sampleData;
