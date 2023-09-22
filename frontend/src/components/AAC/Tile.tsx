import Image from "next/image";
import React from "react";

export interface TileProps {
    image: string;
    sound?: string;
    text: string;
    tileColor: "red" | "purple" | "orange" | "yellow" | "green" | "blue";
}

export default function Tile({ image, sound, text, tileColor }: TileProps) {
    const handleTileClick = () => {
        // tiles that are just covers are soundless since they are
        if (!sound) return;

        let utterance = new SpeechSynthesisUtterance(sound);
        utterance.rate = +(process.env.NEXT_PUBLIC_VOICE_SPEED as string) ?? 1;
        speechSynthesis.cancel();
        speechSynthesis.speak(utterance);
    };

    return (
        <div
            className={`bg-${tileColor}-300 w-44 h-44 flex flex-col justify-center items-center rounded-lg shadow-lg hover:shadow-xl hover:cursor-pointer p-4`}
            onClick={handleTileClick}
        >
            <h2 className="font-bold text-2xl">{text}</h2>
            <Image src={image} alt={text} width={176} height={176} className="w-32 h-32 object-cover" />
        </div>
    );
}
