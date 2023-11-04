import { TileAssets } from "@/components/AAC/TileTypes";

export const CLASSROOM_TILES_COLOR = "blue";

const classroom: TileAssets ={
    classroom: {
        image: "/AAC_assets/img/learn/classroom.png",
        text: "Classroom",
        sound: "Classroom",
        tileColor: "orange",
    },
    schoolPeople: {
        image: "/AAC_assets/img/learn/schoolPeople.png",
        text: "School People",
        sound: "School People",
        tileColor: CLASSROOM_TILES_COLOR,
    },
}
export default classroom;