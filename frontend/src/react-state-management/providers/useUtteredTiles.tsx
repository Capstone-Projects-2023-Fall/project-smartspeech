import { createContext, useContext, useReducer } from "react";
import { stackReducer } from "../reducers/stackReducer";

import { TileData } from "@/components/AAC/TileTypes";
import { EMPTY_FUNCTION } from "@/util/constants";

export interface UtteredTilesState {
    tiles: TileData[];
    clear: () => void;
    addTile: (item: TileData) => void;
}

const UtteredTiles = createContext<UtteredTilesState>({
    tiles: [],
    clear: EMPTY_FUNCTION,
    addTile: EMPTY_FUNCTION,
});

export const useUtteredTiles = () => {
    return useContext(UtteredTiles);
};

export interface UtteredTilesProvider {
    children: React.ReactNode;
}

/**
 *
 * @param children Components which require this provider should be used like:  `<UtteredTilesProvider>...</UtteredTilesProvider>`
 * @returns Component which provides a shared state of type `UtteredTilesState` to any `children`
 */
export default function UtteredTilesProvider({ children }: UtteredTilesProvider) {
    const [tiles, dispatchTileState] = useReducer(stackReducer<TileData>, []);

    console.log(tiles);

    const clear = () => {
        dispatchTileState({ type: "clear" });
    };
    const addTile = (item: TileData) => {
        dispatchTileState({
            type: "add",
            payload: item,
        });
    };

    const value = {
        tiles,
        clear,
        addTile,
    };

    return <UtteredTiles.Provider value={value}>{children}</UtteredTiles.Provider>;
}
