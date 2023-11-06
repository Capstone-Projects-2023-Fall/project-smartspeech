import React, { useEffect, useReducer, useState } from "react";
import { stackReducer } from "@/react-state-management/reducers/stackReducer";
import { getAACAssets } from "../../util/AAC/getAACAssets";
import Tile from "./Tile";
import { TileAssets } from "./TileTypes";
import { mockSuggestedTileData } from "@/data/AAC/Tiles";
import { useRekognition } from "@/react-state-management/providers/useRekognition";

/**
 *
 * @returns Component which will fetch tiles and display them based on what is drawn
 * currently using AACAssets dataset
 * update later to add logic for what is drawn on Canvas
 */
export default function SuggestedTiles() {
    // State to store tile data and current location
    const { items } = useRekognition();

    return (
        <>
            <h1 className="tilesHeaderFont">Suggested Tiles</h1>
            <div className="flex flex-cols-7 gap-6" data-testid="tiles-container">
                {(items ?? []).map((item, i) => {
                    const { image, text, sound, tileColor } = item;
                    return <Tile image={image} text={text} sound={sound} tileColor={tileColor} key={`${item.text}-${i}`} />;
                })}
            </div>
        </>
    );
}
