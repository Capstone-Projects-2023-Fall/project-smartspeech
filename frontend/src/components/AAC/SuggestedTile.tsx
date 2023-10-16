import React, { useEffect, useReducer, useState } from "react";
import { TileAssets } from "./TileTypes";
import { stackReducer } from "@/react-state-management/reducers/stackReducer";
import { getAACAssets } from "../../util/AAC/getAACAssets";
import Tiles from "./Tiles";
import Tile from "./Tile";

/**
 *
 * @returns Component which will fetch tiles and display them based on what is drawn
 * currently using AACAssets dataset
 * update later to add logic for what is drawn on Canvas
 */
export default function SuggestedTiles() {
  const [data, setData] = useState<TileAssets>({});
  const [dataLocation, dispatch] = useReducer(stackReducer<string>, []);
  const [currentFrame, setCurrentFrame] = useState<TileAssets>({});

  useEffect(() => {
    const tileAssets = getAACAssets();
    setData(tileAssets);
  }, []);

  useEffect(() => {
    if (dataLocation.length === 0) return setCurrentFrame(data);
  }, [data, dataLocation]);

  return (
    <><h1 className="tilesHeaderFont">Suggested Tiles</h1>
      <div className="grid grid-cols-8" data-testid="tiles-container">
        {Object.keys(currentFrame).map((key) => {
          const tileData = currentFrame[key];
          const { image, text, sound, tileColor, subTiles } = tileData;

          //rendering tiles and setting up click handler to add key to data location
          return (
            <div key={key} onClick={() => dispatch({ type: "add", payload: key })}>
              <Tile image={image} text={text} sound={sound} tileColor={tileColor} />
            </div>
          );
        })}
      </div>
    </>
  );
}