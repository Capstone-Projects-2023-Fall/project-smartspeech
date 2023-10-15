import { FC, useEffect, useReducer, useState } from "react";
import { useDraw } from "../../react-helpers/hooks/useDraw";
import useClientRender from "@/react-helpers/hooks/useClientRender";
import { getAACAssets } from "../../util/AAC/getAACAssets";
import Tiles from "./Tiles";
import { TileAssets } from "./TileTypes";
import Tile from "./Tile";
import { stackReducer } from "@/react-state-management/reducers/stackReducer";
import data from "@/data/AAC/Tiles";



export const BACK_BTN_TEXT = "back";

export default function SuggestedTiles(){
    const [data, setData] = useState<TileAssets>({});
    const [dataLocation, dispatch] = useReducer(stackReducer<string>, []);
    const [currentFrame, setCurrentFrame] = useState<TileAssets>({});

    useEffect(() => {
        const tileAssets = getAACAssets();
        setData(tileAssets);
    }, []);

    useEffect(() => {
        if (Object.keys(data).length === 0) return;
        if (dataLocation.length === 0) return setCurrentFrame(data);

        let newFrame = data;

        dataLocation.forEach((loc) => {
            if (loc in newFrame && newFrame[loc].subTiles) {
                newFrame = newFrame[loc].subTiles as TileAssets;
            }
        });

        setCurrentFrame(newFrame);
    }, [data, dataLocation]);

    
    
    return (
        <><h1>Suggested Tiles</h1><div className="grid grid-cols-8" data-testid="tiles-container">
            {Object.keys(currentFrame).map((key) => {
                const tileData = currentFrame[key];
                const { image, text, sound, tileColor, subTiles } = tileData;
                const renderedTile = <Tile image={image} text={text} sound={subTiles ? "" : sound} tileColor={tileColor} />;

                const clickHandler = subTiles
                    ? // attach navigator if subtiles exist
                    () => dispatch({
                        type: "add",
                        payload: key,
                    })
                    : // go back to main menu if button clicked
                    () => dispatch({ type: "clear" });

                return (
                    <div key={key} onClick={clickHandler}>
                        {renderedTile}
                    </div>
                );
            })}
            {dataLocation.length > 0 && (
                <div onClick={() => dispatch({ type: "remove" })}>
                    <Tile image="/AAC_assets/img/standard/back_arrow.png" text={BACK_BTN_TEXT} tileColor="green" />
                </div>
            )}
        </div></>
    );
}