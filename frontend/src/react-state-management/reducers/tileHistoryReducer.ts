import { TileProps } from "@/components/AAC/Tile";

const MAX_TILES_TO_KEEP_IN_MEMORY = 5;

export type StackState<T> = T[];

type AddAction<T> = { type: "add"; payload: T };
type ClearAction = { type: "clear" };

type StackAction<TileProps> = AddAction<TileProps> | ClearAction;

export type TileHistoryTileProps = TileProps & { rank: number };

function emptyStateFactory<T>(): StackState<T> {
    return new Array<T>();
}

/**
 * Insertion function that adds in Tile Objects based on existance into an array.
 * If an object already exists it will alter the rank of the Tile to ensure it reflect its most recently hit status
 * @param newtile tile to be added
 * @param tileArray array for `newtile` to be added to
 * @returns new copy of `tileArray` with `newtile` added to it
 */
export function insertTileWithHistory(newtile: TileProps, tileArray: StackState<TileHistoryTileProps>) {
    const indexInArray = tileArray.findIndex((tile) => {
        return newtile.image === tile.image && newtile.text === tile.text && newtile.tileColor === tile.tileColor && newtile.sound === tile.sound;
    });

    if (indexInArray < 0) {
        // tile was never present so add it in with the highest rank so it appears first
        tileArray.push({ ...newtile, rank: Date.now() });
        return tileArray;
    }

    // tile is already present so replace it with one with a higher rank
    tileArray.splice(indexInArray, 1, { ...newtile, rank: Date.now() });
    return tileArray;
}

//! need to add in :StackState<TileHistoryTileProps> to function head
export function TileHistoryReducer(state: StackState<TileHistoryTileProps>, action: StackAction<TileProps>) {
    switch (action.type) {
        case "add":
            const newState = insertTileWithHistory(action.payload, [...state]);
            newState.splice(MAX_TILES_TO_KEEP_IN_MEMORY, 1); //shave off extra element if it was added
            newState.sort((tileA, tileB) => tileB.rank - tileA.rank); //sort them in order of rank to reflect which one was receently pressed
            return newState;

        case "clear":
            return emptyStateFactory<TileHistoryTileProps>();
        default:
            console.error("TileHistoryReducer Erorr: invalid action", action);
    }
}
