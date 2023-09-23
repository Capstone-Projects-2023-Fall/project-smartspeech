import Image from "next/image";
import React from "react";

export interface MiniTileProps {
    image: string;
    text: string;
}

/**
 * SHOULD ONLY BE USED AS A VISUAL COMPONENT
 * @returns Component which is the same as a `<Tile/>` but cannot play sound or fire any events
 */
export default function MiniTile({ image, text }: MiniTileProps) {
    return (
        <div className={`bg-white flex flex-col justify-center items-center`}>
            <Image src={image} alt={text} width={176} height={176} className="w-auto h-10 object-cover" />
			<p className="font-bold text-base">{text}</p>
        </div>
    );
}
