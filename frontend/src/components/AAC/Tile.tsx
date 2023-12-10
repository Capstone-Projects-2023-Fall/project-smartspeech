import { useUtteredTiles } from "@/react-state-management/providers/useUtteredTiles";
import { speak } from "@/util/AAC/Speech";
import Image from "next/image";
import React from "react";

export const tileColors = ["red", "purple", "orange", "yellow", "green", "blue"];
export type TileColor = "red" | "purple" | "orange" | "yellow" | "green" | "blue";

export interface TileProps {
    /**
     * image is displayed in center of tile
     */
    image: string;
    /**
     * sound is played when this tile is spoken
     */
    sound?: string;
    /**
     * text is displayed as a caption under image
     */
    text: string;
    /**
     * color of the tile background
     */
    tileColor: TileColor;
}

/**
 * @returns data-testid for a tile that contains text as a prop
 */
export function computeTileContainerName(text: string) {
    return `tile-container-${text.replace(" ", "_")}`;
}

/**
 * @returns Component which will display a tile with `text` and onclick use the WebSpeech API to play `sound`.
 */
export default function Tile({ image, sound, text, tileColor }: TileProps) {
    const { addTile } = useUtteredTiles();

    const handleTileClick = () => {
        // tiles that are just covers are soundless since they are
        if (!sound) return;

        speak(sound);

        addTile({
            image,
            sound,
            text,
            tileColor,
        });
    };

    return (
        <div
            className={`bg-${tileColor}-300 w-44 h-44 flex flex-col justify-center items-center rounded-lg shadow-lg hover:shadow-xl hover:cursor-pointer p-4 2xl-max:w-36 2xl-max:h-36 xl-max:w-32 xl-max:h-32 lg-max:w-28 lg-max:h-28 mid-max:w-24 mid-max:h-24 md-max:w-20 md-max:h-20 xs-max:w-16 xs-max:h-16`}
            onClick={handleTileClick}
            id="tileResize"
            data-testid={computeTileContainerName(text)}
        >
            <h2 className="font-bold text-2xl lg-max:text-xl md-max:text-sm break-words" data-testid="tile-text">
                {text}
            </h2>
            <Image
                src={image}
                alt={text}
                width={176}
                height={176}
                className="w-auto h-32 object-cover 2xl-max:h-24 xl-max:h-20 lg-max:h-16 xs-max:h-12"
                draggable="false"
                data-testid="tile-image"
            />
        </div>
    );
}
