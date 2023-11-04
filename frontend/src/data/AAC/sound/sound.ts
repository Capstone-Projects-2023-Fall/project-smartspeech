import { TileAssets } from "@/components/AAC/TileTypes";
import playlist from "@/data/AAC/playlist/playlist";

export const SOUND_TILES_COLOR = "orange";

const sound: TileAssets ={
    sound: {
        image: "/AAC_assets/img/tell/sound.png",
        text: "Sound",
        sound: "Sound",
        tileColor: SOUND_TILES_COLOR,
    },
    loud: {
        image: "/AAC_assets/img/sound/loud.png",
        text: "Loud",
        sound: "Loud",
        tileColor: "blue",
    },
    quiet: {
        image: "/AAC_assets/img/sound/quiet.png",
        text: "Quiet",
        sound: "Quiet",
        tileColor: "blue",
    },
    soft: {
        image: "/AAC_assets/img/sound/soft.png",
        text: "Soft",
        sound: "Soft",
        tileColor: "blue",
    },
    noisy: {
        image: "/AAC_assets/img/sound/noisy.png",
        text: "Noisy",
        sound: "Noisy",
        tileColor: "blue",
    },
    sing: {
        image: "/AAC_assets/img/sound/sing.png",
        text: "Sing",
        sound: "Sing",
        tileColor: "yellow",
    },
    music: {
        image: "/AAC_assets/img/sound/music.png",
        text: "Music",
        sound: "Music",
        tileColor: SOUND_TILES_COLOR,
    },
    song: {
        image: "/AAC_assets/img/sound/song.png",
        text: "Song",
        sound: "Song",
        tileColor: SOUND_TILES_COLOR,
    },
    playlist: {
        image: "/AAC_assets/img/sound/playlist.png",
        text: "Playlist",
        sound: "Playlist",
        tileColor: "purple",
        subTiles: playlist,
    },
    story: {
        image: "/AAC_assets/img/sound/loud.png",
        text: "Loud",
        sound: "Sound",
        tileColor: SOUND_TILES_COLOR,
    },
    book: {
        image: "/AAC_assets/img/sound/loud.png",
        text: "Loud",
        sound: "Sound",
        tileColor: SOUND_TILES_COLOR,
    }
}
export default sound;