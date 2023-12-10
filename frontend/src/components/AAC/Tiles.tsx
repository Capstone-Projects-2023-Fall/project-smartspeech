import React, { useEffect, useReducer, useState } from "react";
import Tile from "./Tile";
import { stackReducer } from "@/react-state-management/reducers/stackReducer";
import { TileAssets } from "./TileTypes";
import { useTilesProvider } from "@/react-state-management/providers/tileProvider";

export const BACK_BTN_TEXT = "back";

export const TilesTestIds = {
    mainContainer: "tiles-container",
};

/**
 *
 * @returns Component which will fetch tiles and display them
 */
export default function Tiles() {
    const { tiles } = useTilesProvider();
    const [dataLocation, dispatch] = useReducer(stackReducer<string>, []);
    const [currentFrame, setCurrentFrame] = useState<TileAssets>({});

    useEffect(() => {
        if (Object.keys(tiles).length === 0) return;
        if (dataLocation.length === 0) return setCurrentFrame(tiles);

        let newFrame = tiles;

        dataLocation.forEach((loc) => {
            if (loc in newFrame && newFrame[loc].subTiles) {
                newFrame = newFrame[loc].subTiles as TileAssets;
            }
        });

        setCurrentFrame(newFrame);
    }, [tiles, dataLocation]);

    return (
        <section className="w-full flex justify-center">
            <div className="grid grid-cols-8 gap-4 2xl-max:grid-cols-7 md-max:gap-2" data-testid="tiles-container">
                {Object.keys(currentFrame).map((key) => {
                    const tileData = currentFrame[key];
                    const { image, text, sound, tileColor, subTiles } = tileData;
                    const renderedTile = <Tile image={image} text={text} sound={subTiles ? "" : sound} tileColor={tileColor} />;

                    const clickHandler = subTiles
                        ? // attach navigator if subtiles exist
                          () =>
                              dispatch({
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
            </div>
        </section>
    );
}
