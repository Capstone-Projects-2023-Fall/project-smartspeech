import { TileProps } from "@/components/AAC/Tile";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { useRekognition } from "./useRekognition";
import { TileHistoryReducer } from "../reducers/tileHistoryReducer";

export const MAX_SUGGESTIONS = 5;

type SuggestTileFunction = (tile: TileProps) => void;

export interface SuggestedTilesContext {
    tiles: TileProps[];
    suggestTile: SuggestTileFunction;
}

const SuggestedTilesContext = createContext<SuggestedTilesContext>({
    tiles: [],
    suggestTile(tile) {},
});

export const useSuggestedTilesContext = () => useContext(SuggestedTilesContext);
export type SuggestedTilesProviderProps = { children: React.ReactNode };

/**
 * @param props props that contain the children to be rendered
 * @returns Provider with children rendered
 */
export default function SuggestedTilesProvider(props: SuggestedTilesProviderProps) {
    const { items: rekogSuggestions } = useRekognition();

    const [tiles, dispatchTileAction] = useReducer(TileHistoryReducer, []);

    useEffect(() => {
        rekogSuggestions.forEach((suggestedTile) => {
            dispatchTileAction({
                type: "add",
                payload: suggestedTile,
            });
        });
    }, [rekogSuggestions]);

    const suggestTile: SuggestTileFunction = (tile) => {
        dispatchTileAction({
            type: "add",
            payload: tile,
        });
    };

    // limit suggestions
    const suggestions = [...tiles];
    suggestions.splice(MAX_SUGGESTIONS, Infinity);

    const value = {
        tiles: suggestions,
        suggestTile,
    };

    console.log("rerender", tiles);

    return <SuggestedTilesContext.Provider value={value}>{props.children}</SuggestedTilesContext.Provider>;
}
