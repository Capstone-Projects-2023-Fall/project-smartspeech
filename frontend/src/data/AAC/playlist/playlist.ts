import { TileAssets } from "@/components/AAC/TileTypes";

export const PLAYLIST_TILES_COLOR = "orange";

const playlist: TileAssets ={
    playlist: {
        image: "/AAC_assets/img/sound/playlist.png",
        text: "Playlist",
        sound: "Playlist",
        tileColor: "purple",
    },
    mySong: {
        image: "/AAC_assets/img/sound/mySong.png",
        text: "My Song",
        sound: "My Song",
        tileColor: PLAYLIST_TILES_COLOR,
    },
    myArtist: {
        image: "/AAC_assets/img/sound/my.png",
        text: "My Artist",
        sound: "My Artist",
        tileColor: PLAYLIST_TILES_COLOR,
    }
}
export default playlist;