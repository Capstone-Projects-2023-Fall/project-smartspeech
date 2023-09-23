import { useUtteredTiles } from "@/react-state-management/providers/useUtteredTiles";
import React from "react";
import MiniTile from "./MiniTile";

import { RiSpeakLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { speakViaWebSpeechAPI } from "@/util/AAC/Speech";

export default function SelectedTilesActionBar() {
    const { tiles, clear } = useUtteredTiles();

    const handleSpeak = () => {
        const sentence = tiles.reduce((prev, curr) => {
            if (!curr.sound) return prev;
            return `${prev} ${curr.sound}`;
        }, "");

        speakViaWebSpeechAPI(sentence);
    };

    return (
        <div className="w-full flex gap-2 p-3">
            <div className="w-full border-black border-2 p-1 min-h-[64px] rounded-md shadow-lg flex gap-2 flex-wrap">
                {tiles && tiles.map((miniTileInfo) => <MiniTile image={miniTileInfo.image} text={miniTileInfo.text} />)}
            </div>
            <button className="bg-green-400 p-2 rounded hover:shadow-xl" onClick={handleSpeak}>
                <RiSpeakLine className="w-12 h-12" />
            </button>
            <button className="bg-red-400 p-2 rounded hover:shadow-xl" onClick={clear}>
                <RxCross2 className="w-12 h-12" />
            </button>
        </div>
    );
}
