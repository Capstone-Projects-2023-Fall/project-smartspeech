import { TileAssets } from "@/components/AAC/TileTypes";
import materials from "../materials/materials";
import tools from "../tools/tools";

export const THINGS_TILES_COLOR = "red";

const things: TileAssets = {
    things: {
        image: "/AAC_assets/img/things/things.png",
        text: "Things",
        sound: "Things",
        tileColor: THINGS_TILES_COLOR,
    },
    animal: {
        image: "/AAC_assets/img/things/animal.png",
        text: "Animal",
        sound: "Animal",
        tileColor: THINGS_TILES_COLOR,
    },
    boat: {
        image: "/AAC_assets/img/things/boat.png",
        text: "Boat",
        sound: "Boat",
        tileColor: THINGS_TILES_COLOR,
    },
    bridge: {
        image: "/AAC_assets/img/things/bridge.png",
        text: "Bridge",
        sound: "Bridge",
        tileColor: THINGS_TILES_COLOR,
    },
    bug: {
        image: "/AAC_assets/img/things/bug.png",
        text: "Bug",
        sound: "Bug",
        tileColor: THINGS_TILES_COLOR,
    },
    bus: {
        image: "/AAC_assets/img/things/bus.png",
        text: "Bus",
        sound: "Bus",
        tileColor: THINGS_TILES_COLOR,
    },
    car: {
        image: "/AAC_assets/img/things/car.png",
        text: "Car",
        sound: "Car",
        tileColor: THINGS_TILES_COLOR,
    },
    cat: {
        image: "/AAC_assets/img/things/cat.png",
        text: "Cat",
        sound: "Cat",
        tileColor: THINGS_TILES_COLOR,
    },
    dog: {
        image: "/AAC_assets/img/things/dog.png",
        text: "Dog",
        sound: "Dog",
        tileColor: THINGS_TILES_COLOR,
    },
    flower: {
        image: "/AAC_assets/img/things/flower.png",
        text: "Flower",
        sound: "Flower",
        tileColor: THINGS_TILES_COLOR,
    },
    forest: {
        image: "/AAC_assets/img/things/forest.png",
        text: "Forest",
        sound: "Forest",
        tileColor: THINGS_TILES_COLOR,
    },
    it: {
        image: "/AAC_assets/img/things/it.png",
        text: "It",
        sound: "It",
        tileColor: THINGS_TILES_COLOR,
    },
    lake: {
        image: "/AAC_assets/img/things/lake.png",
        text: "Lake",
        sound: "Lake",
        tileColor: THINGS_TILES_COLOR,
    },
    materials: {
        image: "/AAC_assets/img/things/materials.png",
        text: "Materials",
        sound: "Materials",
        tileColor: "yellow",
        subTiles: materials,
    },
    mountain: {
        image: "/AAC_assets/img/things/mountain.png",
        text: "Mountain",
        sound: "Mountain",
        tileColor: THINGS_TILES_COLOR,
    },
    ocean: {
        image: "/AAC_assets/img/things/ocean.png",
        text: "Ocean",
        sound: "Ocean",
        tileColor: THINGS_TILES_COLOR,
    },
    pet: {
        image: "/AAC_assets/img/things/pet.png",
        text: "Pet",
        sound: "Pet",
        tileColor: THINGS_TILES_COLOR,
    },
    road: {
        image: "/AAC_assets/img/things/road.png",
        text: "Road",
        sound: "Road",
        tileColor: THINGS_TILES_COLOR,
    },
    tool: {
        image: "/AAC_assets/img/things/tool.png",
        text: "Tool",
        sound: "Tool",
        tileColor: "yellow",
        subTiles: tools,
    },
    tree: {
        image: "/AAC_assets/img/things/tree.png",
        text: "Tree",
        sound: "Tree",
        tileColor: THINGS_TILES_COLOR,
    },
};

export default things;