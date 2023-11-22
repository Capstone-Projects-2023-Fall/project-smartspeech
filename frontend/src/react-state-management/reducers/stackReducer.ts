export type StackState<T> = T[];

type AddAction<T> = { type: "add"; payload: T };
type RmAction = { type: "remove" };
type ClearAction = { type: "clear" };
type MergeAction<T> = { type: "merge"; payload: T[] };

export type StackAction<T> = AddAction<T> | RmAction | ClearAction;

function emptyStateFactory<T>(): StackState<T> {
    return new Array<T>();
}

export function stackReducer<T>(state: StackState<T>, action: StackAction<T>): StackState<T> {
    switch (action.type) {
        case "add":
            return [...state, action.payload];
        case "remove":
            // edge case
            if (state.length === 0) return emptyStateFactory();

            // if array has more than one element
            const newState = [...state];
            newState.pop();
            return newState;
        case "clear":
            return emptyStateFactory();
    }
}
