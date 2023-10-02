import { TileAssets } from "@/components/AAC/TileTypes";
import colors, { COLOR_TILES_COLOR } from "./colors/colors";
import shapes from "./shapes/shapes";
import foods from "./foods/foods";
import locations from "./locations/locations";
import clothes from "./clothes/clothes";

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
    bad: {
        image: "/AAC_assets/img/standard/bad.png",
        text: "Bad",
        sound: "Bad",
        tileColor: "red",
    },
    stop: {
        image: "/AAC_assets/img/standard/stop.png",
        text: "Stop",
        sound: "Stop",
        tileColor: "red",
    },
    shapes: {
        image: "/AAC_assets/img/shapes/shape.png",
        text: "Shape",
        sound: "Shape",
        tileColor: "yellow",
        subTiles: shapes,
    },
    self: {
        image: "/AAC_assets/img/standard/self.png",
        text: "I",
        sound: "I",
        tileColor: "blue",
    },
    you: {
        image: "/AAC_assets/img/standard/you.png",
        text: "You",
        sound: "You",
        tileColor: "green",
    },
    eat: {
        image: "/AAC_assets/img/food/eat.png",
        text: "Eat",
        sound: "Eat",
        tileColor: "green",
        subTiles: foods,
    },
    go: {
        image: "/AAC_assets/img/locations/go.png",
        text: "Go",
        sound: "Go",
        tileColor: "yellow",
        subTiles: locations,
    },
    clothing: {
        image: "/AAC_assets/img/clothes/clothes.png",
        text: "Clothes",
        sound: "Clothes",
        tileColor: "purple",
        subTiles: clothes,
    },
};

export default data;
