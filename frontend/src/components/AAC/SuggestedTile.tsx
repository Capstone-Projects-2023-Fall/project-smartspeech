import React, { useEffect, useReducer, useState } from "react";
import { stackReducer } from "@/react-state-management/reducers/stackReducer";
import { getAACAssets } from "../../util/AAC/getAACAssets";
import Tile from "./Tile";
import { TileAssets } from "./TileTypes";


/**
 *
 * @returns Component which will fetch tiles and display them based on what is drawn
 * currently using AACAssets dataset
 * update later to add logic for what is drawn on Canvas
 */
export default function SuggestedTiles() {
  // State to store tile data and current location
  const [data, setData] = useState<TileAssets>({});
  const [dataLocation, dispatch] = useReducer(stackReducer<string>, []);

  // Fetch and set tile assets from an external source when the component mounts
  useEffect(() => {
    const tileAssets = getAACAssets();
    setData(tileAssets);
  }, []);

  return (
    <>
      <h1 className="tilesHeaderFont">Suggested Tiles</h1>
      <div className="grid grid-cols-8" data-testid="tiles-container">
        {Object.keys(data).map((key) => {
          const tileData = data[key];
          const { image, text, sound, tileColor, subTiles } = tileData;
        //rendering tiles and setting up click handler to add key to data location
          return (
            <Tile image={image} text={text} sound={sound} tileColor={tileColor} key={key}/>
          );
        })}
      </div>
    </>
  );
}