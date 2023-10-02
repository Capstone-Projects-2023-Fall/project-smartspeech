import { TileAssets } from "@/components/AAC/TileTypes";

export const LOCATION_TILES_COLOR = "yellow";

const locations: TileAssets = {
    go: {
        image: "/AAC_assets/img/locations/go.png",
        text: "Go",
        sound: "Go",
        tileColor: LOCATION_TILES_COLOR,
    },
    home: {
        image: "/AAC_assets/img/locations/home.png",
        text: "Home",
        sound: "Home",
        tileColor: LOCATION_TILES_COLOR,
    },
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
    school: {
        image: "/AAC_assets/img/locations/school.png",
        text: "School",
        sound: "School",
        tileColor: LOCATION_TILES_COLOR,
    },
    store: {
        image: "/AAC_assets/img/locations/store.png",
        text: "Store",
        sound: "Store",
        tileColor: LOCATION_TILES_COLOR,
    },
    
};

export default locations;
