import { TileProps } from "@/components/AAC/Tile";

export type StackState<T> = T[];

type AddAction<T> = { type: "add"; payload: T };
type RmAction<T> = { type: "remove"; payload: T };
type ClearAction = { type: "clear" };

type StackAction<TileProps> = AddAction<TileProps> | RmAction<TileProps> | ClearAction;

function emptyStateFactory<T>(): StackState<T> {
    return new Array<T>();
}

export function TileHistoryReducer(state: StackState<TileProps>, action: StackAction<TileProps>): StackState<TileProps> {
    switch (action.type) {
        default:
            return state;
    }
}
