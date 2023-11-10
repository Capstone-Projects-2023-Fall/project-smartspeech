import React from "react";
import Tile from "./Tile";
import { useSuggestedTilesContext } from "@/react-state-management/providers/SuggestedTilesProvider";

/**
 *
 * @returns Component which will fetch tiles and display them based on what is drawn
 * currently using AACAssets dataset
 * update later to add logic for what is drawn on Canvas
 */
export default function SuggestedTiles() {
    const { tiles } = useSuggestedTilesContext();

    return (
        <section className="">
            <h1 className="tilesHeaderFont">Suggested Tiles</h1>
            <div className="flex flex-cols-8 gap-6" data-testid="tiles-container">
                {tiles.map((item, i) => {
                    const { image, text, sound, tileColor } = item;
                    return <Tile image={image} text={text} sound={sound} tileColor={tileColor} key={`${item.text}-${i}`} />;
                })}
            </div>
        </section>
    );
}
