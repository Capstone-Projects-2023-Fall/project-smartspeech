import { TileProps } from "@/components/AAC/Tile";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { useRekognition } from "./useRekognition";
import { TileHistoryReducer } from "../reducers/tileHistoryReducer";
import { useSimilarity } from "./useSimilarity";
import { useInferenceContext } from "./InferenceProvider";
import { useTilesProvider } from "./tileProvider";

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
    const { flatList } = useTilesProvider();

    const { items: rekogSuggestions } = useRekognition();
    const { tiles: simSuggestions } = useSimilarity();
    const { predictions } = useInferenceContext();

    const [tiles, dispatchTileAction] = useReducer(TileHistoryReducer, []);

    const suggestTile: SuggestTileFunction = (tile) => {
        dispatchTileAction({
            type: "add",
            payload: tile,
        });
    };

    useEffect(() => {
        rekogSuggestions.forEach(suggestTile);
    }, [rekogSuggestions]);

    useEffect(() => {
        simSuggestions.forEach(suggestTile);
    }, [simSuggestions]);

    useEffect(() => {
        predictions.forEach((pred) => {
            const tileRef = flatList[pred.name];
            if (!tileRef) return;
            suggestTile(tileRef);
        });

        console.log("Predictions Processed,", predictions);
    }, [predictions]);

    // limit suggestions
    const suggestions = [...tiles];
    suggestions.splice(MAX_SUGGESTIONS, Infinity);

    const value = {
        tiles: suggestions,
        suggestTile,
    };

    return <SuggestedTilesContext.Provider value={value}>{props.children}</SuggestedTilesContext.Provider>;
}
