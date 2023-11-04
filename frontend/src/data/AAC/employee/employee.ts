import { TileAssets } from "@/components/AAC/TileTypes";

export const EMPLOYEE_TILES_COLOR = "yellow";

const employee: TileAssets ={
    employee: {
        image: "/AAC_assets/img/job/employee.png",
        text: "employee",
        sound: "Employee",
        tileColor: "blue",
    },
    workWords: {
        image: "/AAC_assets/img/job/workPeople.png",
        text: "Work People",
        sound: "Work People",
        tileColor: EMPLOYEE_TILES_COLOR,
    }
}
export default employee;