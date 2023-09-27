import { TileAssets } from "@/components/AAC/TileTypes";

export const FOODS_TILES_COLOR = "green";

const foods: TileAssets = {
    eat: {
        image: "/AAC_assets/img/food/eat.png",
        text: "Eat",
        sound: "Eat",
        tileColor: FOODS_TILES_COLOR,
    },
    taste: {
        image: "/AAC_assets/img/food/taste.svg",
        text: "Taste",
        sound: "Taste",
        tileColor: FOODS_TILES_COLOR,
    },
    water: {
        image: "/AAC_assets/img/food/water.png",
        text: "Water",
        sound: "Water",
        tileColor: FOODS_TILES_COLOR,
    },
    drink: {
        image: "/AAC_assets/img/food/drink.png",
        text: "Drink",
        sound: "Drink",
        tileColor: FOODS_TILES_COLOR,
    },
};

export default foods;
