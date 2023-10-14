import { FC, useEffect, useReducer, useState } from "react";
import { useDraw } from "../../react-helpers/hooks/useDraw";
import useClientRender from "@/react-helpers/hooks/useClientRender";
import { getAACAssets } from "../../util/AAC/getAACAssets";
import Tiles from "./Tiles";
import { TileAssets } from "./TileTypes";
import Tile from "./Tile";
import { stackReducer } from "@/react-state-management/reducers/stackReducer";


export default function SuggestedTiles(){

    return(
        <div className="grid grid-cols-8">
                    <div>placeHolder</div>
                    <div>placeHolder2</div>
    
                </div>
    )
}