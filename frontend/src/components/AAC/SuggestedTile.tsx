import React, { useEffect, useReducer, useState } from "react";
import { stackReducer } from "@/react-state-management/reducers/stackReducer";
import { getAACAssets } from "../../util/AAC/getAACAssets";
import Tile from "./Tile";
import { TileAssets } from "./TileTypes";
import { mockSuggestedTileData } from "@/data/AAC/Tiles";


/**
 *
 * @returns Component which will fetch tiles and display them based on what is drawn
 * currently using AACAssets dataset
 * update later to add logic for what is drawn on Canvas
 */
export default function SuggestedTiles() {
  // State to store tile data and current location
  const [data, setData] = useState<TileAssets>({});

  // Fetch and set tile assets from an external source when the component mounts
  useEffect(() => {
    // get suggested tiles here
    setData(mockSuggestedTileData);
  }, []);

  return (
    <>
      <h1 className="tilesHeaderFont">Suggested Tiles</h1>
      <div className="flex flex-cols-8 gap-6" data-testid="tiles-container">
        {Object.keys(data).map((key) => {
          const tileData = data[key];
          const { image, text, sound, tileColor } = tileData;
          return (
            <Tile image={image} text={text} sound={sound} tileColor={tileColor} key={key}/>
          );
        })}
      </div>
    </>
  );
}