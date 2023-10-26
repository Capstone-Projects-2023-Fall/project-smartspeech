import { TileAssets } from "@/components/AAC/TileTypes";
import colors, { COLOR_TILES_COLOR } from "./colors/colors";
import shapes from "./shapes/shapes";
import foods from "./foods/foods";
import locations, { LOCATION_TILES_COLOR } from "./locations/locations";
import clothes from "./clothes/clothes";
import feelings from "./feelings/feelings";
import things from "./things/things";
import tell from "./tell/tell";
import these from "./these/these";
import manualTiles from "./manualTiles/manualTiles";
/**
 * Maps words to tile data for each tile in our AAC board
 */
const data: TileAssets = {

    manualTiles: {
        image: "/AAC_assets/img/standard/keyboard.png",
        text: "Manual",
        sound: "Manual",
        tileColor: "blue",
        subTiles: manualTiles,
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
}

export default data;
