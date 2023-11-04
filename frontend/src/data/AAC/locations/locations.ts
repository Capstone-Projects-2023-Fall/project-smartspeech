import { TileAssets } from "@/components/AAC/TileTypes";
import at from "@/data/AAC/at/at";
import { AT_TILES_COLOR } from "@/data/AAC/at/at";
import house from "@/data/AAC/house/house";
import { HOUSE_TILES_COLOR } from "@/data/AAC/house/house";
import directions from "@/data/AAC/directions/directions";
import somewhereElse from "@/data/AAC/somewhereElse/somewhereElse";

export const LOCATION_TILES_COLOR = "blue";

const locations: TileAssets = {
    go: {
        image: "/AAC_assets/img/locations/go.png",
        text: "Go",
        sound: "Go",
        tileColor: "yellow",
    },
    home: {
        image: "/AAC_assets/img/locations/home.png",
        text: "Home",
        sound: "Home",
        tileColor: LOCATION_TILES_COLOR,
    },
    myRoom: {
        image: "/AAC_assets/img/locations/myRoom.png",
        text: "My Room",
        sound: "My Room",
        tileColor: LOCATION_TILES_COLOR,
    },
    way: {
        image: "/AAC_assets/img/locations/milkyWay.png",
        text: "Way",
        sound: "Way",
        tileColor: LOCATION_TILES_COLOR,
    },
    inside: {
        image: "/AAC_assets/img/go/inside.png",
        text: "Inside",
        sound: "Inside",
        tileColor: "green",
    },
    outside: {
        image: "/AAC_assets/img/go/outside.png",
        text: "Outside",
        sound: "Outside",
        tileColor: "green",
    },
    at: {
        image: "/AAC_assets/img/locations/at.png",
        text: "At",
        sound: "At",
        tileColor: AT_TILES_COLOR,
        subTiles: at,
    },
    where: {
        image: "/AAC_assets/img/locations/where.png",
        text: "Where",
        sound: "Where",
        tileColor: "red",
    },
    place: {
        image: "/AAC_assets/img/locations/place.png",
        text: "Place",
        sound: "Place",
        tileColor: LOCATION_TILES_COLOR,
    },
    upstairs: {
        image: "/AAC_assets/img/go/upstairs.png",
        text: "Upstairs",
        sound: "Upstairs",
        tileColor: "green",
    },
    downstairs: {
        image: "/AAC_assets/img/go/downstairs.png",
        text: "downstairs",
        sound: "downstairs",
        tileColor: "green",
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
    church: {
        image: "/AAC_assets/img/locations/church.png",
        text: "Church",
        sound: "Church",
        tileColor: LOCATION_TILES_COLOR,
    },
    restaurant: {
        image: "/AAC_assets/img/locations/restaurant.png",
        text: "Restaurant",
        sound: "Restaurant",
        tileColor: LOCATION_TILES_COLOR,
    },
    house: {
        image: "/AAC_assets/img/locations/house.png",
        text: "House",
        sound: "House",
        tileColor: HOUSE_TILES_COLOR,
        subTiles: house,
    },
    library: {
        image: "/AAC_assets/img/locations/library.png",
        text: "Library",
        sound: "Library",
        tileColor: LOCATION_TILES_COLOR,
    },
    here: {
        image: "/AAC_assets/img/go/here.png",
        text: "Here",
        sound: "Here",
        tileColor: "green",
    },
    there: {
        image: "/AAC_assets/img/go/there.png",
        text: "There",
        sound: "There",
        tileColor: "green",
    },
    away: {
        image: "/AAC_assets/img/locations/away.png",
        text: "Away",
        sound: "Away",
        tileColor: LOCATION_TILES_COLOR,
    },
    store: {
        image: "/AAC_assets/img/locations/store.png",
        text: "Store",
        sound: "Store",
        tileColor: LOCATION_TILES_COLOR,
    },
    direction: {
        image: "/AAC_assets/img/locations/directions.png",
        text: "Direction",
        sound: "Direction",
        tileColor: "purple",
        subTiles: directions,
    },
    somewhereElse: {
        image: "/AAC_assets/img/go/somewhereElse.png",
        text: "Somewhere Else",
        sound: "Somewhere Else",
        tileColor: "purple",
        subTiles: somewhereElse,
    }
};

export default locations;
