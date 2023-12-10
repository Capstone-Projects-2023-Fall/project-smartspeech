import { TileAssets } from "@/components/AAC/TileTypes";
import body from "@/data/AAC/body/body";
import colors, { COLOR_TILES_COLOR } from "./colors/colors";
import shapes from "./shapes/shapes";
import foods from "./foods/foods";
import locations, { LOCATION_TILES_COLOR } from "./locations/locations";
import clothes from "./clothes/clothes";
import feelings from "./feelings/feelings";
import things from "./things/things";
import tell from "./tell/tell";
import these from "./these/these";
import they from "./they/they";
import touch from "./touch/touch";
import { TileProps } from "@/components/AAC/Tile";
import is from "./is/is";
import animals from "./animals/animals";
import electronics from "./electronics/electronics";

/**
 * Maps words to tile data for each tile in our AAC board
 */
const data: TileAssets = {
  colors: {
    image: "/AAC_assets/img/colors/colorwheel.png",
    text: "Colors",
    sound: "Colors",
    tileColor: COLOR_TILES_COLOR,
    subTiles: colors,
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
    image: "/AAC_assets/img/shapes/shapes.png",
    text: "Shape",
    sound: "Shape",
    tileColor: "yellow",
    subTiles: shapes,
  },
  self: {
    image: "/AAC_assets/img/standard/self.png",
    text: "I",
    sound: "Eye",
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
  feelings: {
    image: "/AAC_assets/img/feelings/feelings.png",
    text: "Feelings",
    sound: "Feelings",
    tileColor: "blue",
    subTiles: feelings,
  },
  things: {
    image: "/AAC_assets/img/things/things.png",
    text: "Things",
    sound: "Things",
    tileColor: "red",
    subTiles: things,
  },
  animals: {
    image: "/AAC_assets/img/animals/animal.png",
    text: "Animals",
    sound: "Animals",
    tileColor: "green",
    subTiles: animals,
  },
  tell: {
    image: "/AAC_assets/img/tell/tell.png",
    text: "Tell",
    sound: "Tell",
    tileColor: "yellow",
    subTiles: tell,
  },
  these: {
    image: "/AAC_assets/img/this/this.png",
    text: "This",
    sound: "This",
    tileColor: "green",
    subTiles: these,
  },
  they: {
    image: "/AAC_assets/img/they/they.png",
    text: "They",
    sound: "They",
    tileColor: "yellow",
    subTiles: they,
  },
  body: {
    image: "/AAC_assets/img/body/body.png",
    text: "Body",
    sound: "Body",
    tileColor: "orange",
    subTiles: body,
  },
  touch: {
    image: "/AAC_assets/img/touch/touch.png",
    text: "Touch",
    sound: "Touch",
    tileColor: "blue",
    subTiles: touch,
  },
  is: {
    image: "/AAC_assets/img/is/is.png",
    text: "Is",
    sound: "is",
    tileColor: "blue",
    subTiles: is,
  },
  technology: {
    image: "/AAC_assets/img/electronics/technology.png",
    text: "Technology",
    sound: "Technology",
    tileColor: "blue",
    subTiles: electronics,
  },
};

export const mockSuggestedTileData: TileAssets = {
  bathroom: {
    image: "/AAC_assets/img/locations/bathroom.png",
    text: "Bathroom",
    sound: "Bathroom",
    tileColor: LOCATION_TILES_COLOR,
  },
  hospital: {
    image: "/AAC_assets/img/locations/hospital.png",
    text: "Hospital",
    sound: "Hospital",
    tileColor: LOCATION_TILES_COLOR,
  },
  stop: {
    image: "/AAC_assets/img/standard/stop.png",
    text: "Stop",
    sound: "Stop",
    tileColor: "red",
  },
};

export const blacklist: TileProps[] = [data.good, data.bad];

export default data;
