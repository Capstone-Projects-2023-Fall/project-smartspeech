import { TileAssets } from "@/components/AAC/TileTypes";

export const SHAPE_TILES_COLOR = "blue";

const shapes: TileAssets = {
    triangle: {
        image: "/AAC_assets/img/shapes/triangle.png",
        text: "Triangle",
        sound: "Triangle",
        tileColor: SHAPE_TILES_COLOR,
    },
    square: {
        image: "/AAC_assets/img/shapes/square.png",
        text: "Square",
        sound: "Square",
        tileColor: SHAPE_TILES_COLOR,
    },
    circle: {
        image: "/AAC_assets/img/shapes/circle.png",
        text: "Circle",
        sound: "Circle",
        tileColor: SHAPE_TILES_COLOR,
    },
    rectangle: {
        image: "/AAC_assets/img/shapes/rectangle.png",
        text: "Rectangle",
        sound: "Rectangle",
        tileColor: SHAPE_TILES_COLOR,
    },
   
};

export default shapes;
