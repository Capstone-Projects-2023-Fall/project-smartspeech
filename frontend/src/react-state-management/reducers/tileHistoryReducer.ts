import { TileProps } from "@/components/AAC/Tile";
import { blacklist } from "@/data/AAC/Tiles";
import { compareTiles } from "@/util/AAC/compareTiles";

export const MAX_TILES_TO_KEEP_IN_MEMORY = 5;

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
    // attempt to find matching tile already present
    const indexInArray = tileArray.findIndex((tile) => compareTiles(tile, newtile));

    if (indexInArray < 0) {
        // tile was never present so add it in with the highest rank so it appears first
        tileArray.push({ ...newtile, rank: Date.now() });
        return tileArray;
    }

    // tile is already present so replace it with one with a higher rank
    tileArray.splice(indexInArray, 1, { ...newtile, rank: Date.now() });

    return tileArray;
}

/**
 * Checks if a tile can be added to history list based on its existance in the black list file
 * @param newtile tile to be checked against tiles in `blacklist`
 * @returns `true` if tile can be safely added
 */
function canStoreTileInHistory(newtile: TileProps) {
    return blacklist.findIndex((tile) => compareTiles(tile, newtile)) < 0;
}

export function TileHistoryReducer(state: StackState<TileHistoryTileProps>, action: StackAction<TileProps>) {
    switch (action.type) {
        case "add":
            const newTile = action.payload;

            //ensure that tile is not in blacklist
            if (!canStoreTileInHistory(newTile)) return [...state];

            const newState = insertTileWithHistory(newTile, [...state]);
            newState
                .sort((tileA, tileB) => tileB.rank - tileA.rank) //remove any extra tiles added to history
                .splice(MAX_TILES_TO_KEEP_IN_MEMORY, 1); //sort them in order of rank to reflect which one was receently pressed

            return newState;

        case "clear":
            return emptyStateFactory<TileHistoryTileProps>();
    }
}
