import { useUtteredTiles } from "@/react-state-management/providers/useUtteredTiles";
import React from "react";
import MiniTile from "./MiniTile";

import { RiSpeakLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { speakViaWebSpeechAPI } from "@/util/AAC/Speech";

export const actionBarDataTestIds = {
    container: "actionbar-container",
    wordBox: "actionbar-words-box",
    speakBtn: "actionbar-speak-btn",
    clearBtn: "actionbar-clear-btn",
};

/**
 * Displays a list of tiles currently selected, a button to speak the tiles,
 * and a button the clear the list of tiles.
 */
export default function SelectedTilesActionBar() {
    const { tiles, clear } = useUtteredTiles();

    const handleSpeak = () => {
        const validTilesSounds = tiles.filter((tile) => Boolean(tile.sound)).map((tile) => tile.sound);
        const sentence = validTilesSounds.join(" ");

        speakViaWebSpeechAPI(sentence);
    };

    return (
        <div className="w-full flex gap-2 p-3" data-testid={actionBarDataTestIds.container}>
            <div
                className="w-full border-black border-2 p-1 min-h-[64px] rounded-md shadow-lg flex gap-2 flex-wrap"
                data-testid={actionBarDataTestIds.wordBox}
            >
                {tiles && tiles.map((miniTileInfo) => <MiniTile image={miniTileInfo.image} text={miniTileInfo.text} key={miniTileInfo.text} />)}
            </div>
            <button className="bg-green-400 p-2 rounded hover:shadow-xl" data-testid={actionBarDataTestIds.speakBtn} onClick={handleSpeak}>
                <RiSpeakLine className="w-12 h-12" />
            </button>
            <button className="bg-red-400 p-2 rounded hover:shadow-xl" data-testid={actionBarDataTestIds.clearBtn} onClick={clear}>
                <RxCross2 className="w-12 h-12" />
            </button>
        </div>
    );
}
