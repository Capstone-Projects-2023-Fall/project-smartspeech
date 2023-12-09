import { createContext, useContext, useReducer } from "react";
import { stackReducer } from "../reducers/stackReducer";

import { TileData } from "@/components/AAC/TileTypes";
import { EMPTY_FUNCTION } from "@/util/constants";
import { TileHistoryReducer, TileHistoryTileProps } from "../reducers/tileHistoryReducer";

export interface UtteredTilesState {
    tiles: TileData[];
    tileHistory: TileHistoryTileProps[];
    clear: () => void;
    addTile: (item: TileData) => void;
    removeLastTile: () => void;
}

const UtteredTiles = createContext<UtteredTilesState>({
    tiles: [],
    tileHistory: [],
    clear: EMPTY_FUNCTION,
    addTile: EMPTY_FUNCTION,
    removeLastTile: EMPTY_FUNCTION,
});

export const useUtteredTiles = () => {
    return useContext(UtteredTiles);
};

export interface UtteredTilesProviderProps {
    children: React.ReactNode;
}

/**
 * Provides a list of active tiles to children. This provider should be used to
 * get access to currently selected tiles. Also provides an 'addTile' function
 * for adding selected tiles.
 * @param children Components which require this provider should be used like:  `<UtteredTilesProvider>...</UtteredTilesProvider>`
 * @returns Component which provides a shared state of type `UtteredTilesState` to any `children`
 */
export default function UtteredTilesProvider({ children }: UtteredTilesProviderProps) {
    const [tiles, dispatchTileState] = useReducer(stackReducer<TileData>, []);
    const [tileHistory, dispatchTileHistoryState] = useReducer(TileHistoryReducer, []);

    const clear = () => {
        dispatchTileState({ type: "clear" });
    };

    const addTile = (item: TileData) => {
        dispatchTileState({
            type: "add",
            payload: item,
        });

        dispatchTileHistoryState({
            type: "add",
            payload: item,
        });
    };

    const removeLastTile = () => {
        dispatchTileState({
            type: "remove"
        });

        // Don't remove from recent tile history
    }

    const value = {
        tiles,
        tileHistory,
        clear,
        addTile,
        removeLastTile
    };

    return <UtteredTiles.Provider value={value}>{children}</UtteredTiles.Provider>;
}
