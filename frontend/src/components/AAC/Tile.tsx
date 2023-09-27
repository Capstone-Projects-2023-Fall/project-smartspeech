import { useUtteredTiles } from "@/react-state-management/providers/useUtteredTiles";
import { speakViaWebSpeechAPI } from "@/util/AAC/Speech";
import Image from "next/image";
import React from "react";

export interface TileProps {
    image: string;
    sound?: string;
    text: string;
    tileColor: "red" | "purple" | "orange" | "yellow" | "green" | "blue";
}

/**
 * @returns Component which will display a tile with `text` and onclick use the WebSpeech API to play `sound`.
 */
export default function Tile({ image, sound, text, tileColor }: TileProps) {
    const { addTile } = useUtteredTiles();

    const handleTileClick = () => {
        // tiles that are just covers are soundless since they are
        if (!sound) return;

        console.log("speaking:", sound, text);
        speakViaWebSpeechAPI(sound);

        if (!addTile) return;

        addTile({
            image,
            sound,
            text,
            tileColor,
        });
    };

    return (
        <div
            className={`bg-${tileColor}-300 w-44 h-44 flex flex-col justify-center items-center rounded-lg shadow-lg hover:shadow-xl hover:cursor-pointer p-4`}
            onClick={handleTileClick}
            data-testid="tile-container"
        >
            <h2 className="font-bold text-2xl" data-testid="tile-text">
                {text}
            </h2>
            <Image src={image} alt={text} width={176} height={176} className="w-auto h-32 object-cover" data-testid="tile-image" />
        </div>
    );
}
