import { TileAssets } from "@/components/AAC/TileTypes";
import materials from "../materials/materials";
import tools from "../tools/tools";
import sky, { SKY_TILES_COLOR } from "../sky/sky";
import job from "../job/job";
import game from "../game/game";

export const THIS_TILES_COLOR = "blue";

const these: TileAssets = {
    this: {
        image: "/AAC_assets/img/this/this.png",
        text: "This",
        sound: "This",
        tileColor: "green",
    },
    could: {
        image: "/AAC_assets/img/this/could.png",
        text: "Could",
        sound: "Could",
        tileColor: THIS_TILES_COLOR,
    },
    would: {
        image: "/AAC_assets/img/this/would.png",
        text: "Would",
        sound: "Would",
        tileColor: THIS_TILES_COLOR,
    },
    still: {
        image: "/AAC_assets/img/this/still.png",
        text: "Still",
        sound: "Still",
        tileColor: "yellow",
    },
    also: {
        image: "/AAC_assets/img/this/also.png",
        text: "Also",
        sound: "Also",
        tileColor: "yellow",
    },
    instead: {
        image: "/AAC_assets/img/this/instead.png",
        text: "Instead",
        sound: "Instead",
        tileColor: "yellow",
    },
    almost: {
        image: "/AAC_assets/img/this/almost.png",
        text: "Almost",
        sound: "Almost",
        tileColor: "yellow",
    },
    again: {
        image: "/AAC_assets/img/this/again.png",
        text: "Again",
        sound: "Again",
        tileColor: "yellow",
    },
    that: {
        image: "/AAC_assets/img/this/that.png",
        text: "That",
        sound: "That",
        tileColor: "green",
    },
    even: {
        image: "/AAC_assets/img/this/even.png",
        text: "Even",
        sound: "Even",
        tileColor: "yellow",
    },
    definitely: {
        image: "/AAC_assets/img/this/definitely.png",
        text: "Definitely",
        sound: "Definitely",
        tileColor: "yellow",
    },
    may: {
        image: "/AAC_assets/img/this/may.png",
        text: "May",
        sound: "May",
        tileColor: THIS_TILES_COLOR,
    },
    should: {
        image: "/AAC_assets/img/this/should.png",
        text: "Should",
        sound: "Should",
        tileColor: THIS_TILES_COLOR,
    },
    must: {
        image: "/AAC_assets/img/this/must.png",
        text: "Must",
        sound: "Must",
        tileColor: THIS_TILES_COLOR,
    },
    very: {
        image: "/AAC_assets/img/this/very.png",
        text: "Very",
        sound: "Very",
        tileColor: "yellow",
    },
    sky: {
        image: "/AAC_assets/img/this/sky.png",
        text: "Sky",
        sound: "Sky",
        tileColor: SKY_TILES_COLOR,
        subTiles: sky,
    },
    job: {
        image: "/AAC_assets/img/this/job.png",
        text: "Job",
        sound: "Job",
        tileColor: "orange",
        subTiles: job,
    },
    game: {
        image: "/AAC_assets/img/this/game.png",
        text: "Game",
        sound: "Game",
        tileColor: "orange",
        subTiles: game,
    },
};

export default these;
