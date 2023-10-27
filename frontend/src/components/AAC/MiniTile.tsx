import Image from "next/image";
import React from "react";


export interface MiniTileProps {
    /**
     * Image displayed on center of tile
     */
    image: string;
    /**
     * Caption displayed beneath image on tile
     */
    text: string;
}

/**
 * SHOULD ONLY BE USED AS A VISUAL COMPONENT
 * @returns Component which is the same as a `<Tile/>` but cannot play sound or fire any events
 */
export default function MiniTile({ image, text }: MiniTileProps) {
    return (
        <div className="bg-white flex flex-col justify-center items-center" data-testid={`mini-tile-container-${text}`}>
            <Image src={image} alt={text} width={176} height={176} className="w-auto h-10 object-cover" data-testid="mini-tile-image" />
            <p className="font-bold text-base" data-testid="mini-tile-text">
                {text}
            </p>
        </div>
    );
}
