import React, { useEffect, useReducer, useState } from "react";
import { stackReducer } from "@/react-state-management/reducers/stackReducer";
import { getAACAssets } from "../../util/AAC/getAACAssets";
import Tile from "./Tile";
import { TileAssets } from "./TileTypes";
import data from "@/data/AAC/Tiles";

export default function ManualTile(){
    const [data, setData] = useState<TileAssets>({});

  // Fetch and set tile assets from an external source when the component mounts
  useEffect(() => {
    // get suggested tiles here
    setData(getAACAssets);
  }, []);

  return (
    <>
      <h1 className="tilesHeaderFont">Manual Tile</h1>
      <div className="grid grid-cols-8" data-testid="tiles-container">
        {Object.keys(data).map((key) => {
          const tileData = data[key];
          const { image, text, sound, tileColor } = tileData;
          return (
            <Tile image={"/AAC_assets/img/standard/keyboard.png"} text={text} sound={sound} tileColor={tileColor} key={key}/>
          );
        })}
      </div>
    </>
  )
}