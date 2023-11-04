import { TileAssets } from "@/components/AAC/TileTypes";
import classroom from "../classroom/classroom";

export const LEARN_TILES_COLOR = "blue";

const learn: TileAssets ={
    learn: {
        image: "/AAC_assets/img/tell/learn.png",
        text: "Learn",
        sound: "Learn",
        tileColor: LEARN_TILES_COLOR,
    },
    share: {
        image: "/AAC_assets/img/learn/_share.png",
        text: "Share",
        sound: "Share",
        tileColor: LEARN_TILES_COLOR,
    },
    mean: {
        image: "/AAC_assets/img/learn/mean.png",
        text: "Mean",
        sound: "Mean",
        tileColor: LEARN_TILES_COLOR,
    },
    understand: {
        image: "/AAC_assets/img/learn/understand.png",
        text: "Understand",
        sound: "Understand",
        tileColor: LEARN_TILES_COLOR,
    },
    trouble: {
        image: "/AAC_assets/img/learn/trouble.png",
        text: "Trouble",
        sound: "Trouble",
        tileColor: "red",
    },
    success: {
        image: "/AAC_assets/img/learn/success.png",
        text: "Success",
        sound: "Success",
        tileColor: "red",
    },
    problem: {
        image: "/AAC_assets/img/learn/problem.png",
        text: "Problem",
        sound: "Problem",
        tileColor: "red",
    },
    idea: {
        image: "/AAC_assets/img/learn/idea.png",
        text: "Idea",
        sound: "Idea",
        tileColor: "red",
    },
    question: {
        image: "/AAC_assets/img/learn/question.png",
        text: "Question",
        sound: "Question",
        tileColor: "red",
    },
    classroom: {
        image: "/AAC_assets/img/learn/classroom.png",
        text: "Classroom",
        sound: "Classroom",
        tileColor: "orange",
        subTiles: classroom,
    },
    simple: {
        image: "/AAC_assets/img/learn/simple.png",
        text: "Simple",
        sound: "Simple",
        tileColor: "purple",
    },
    hard: {
        image: "/AAC_assets/img/learn/Hard.png",
        text: "Hard",
        sound: "Hard",
        tileColor: "purple",
    },
    right: {
        image: "/AAC_assets/img/learn/right.png",
        text: "Right",
        sound: "Right",
        tileColor: "purple",
    },
    wrong: {
        image: "/AAC_assets/img/learn/wrong.png",
        text: "Wrong",
        sound: "Wrong",
        tileColor: "purple",
    },




}
export default learn;