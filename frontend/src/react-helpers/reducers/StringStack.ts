export type StringStackState = string[];

type AddAction = { type: "add"; payload: string };
type RmAction = { type: "remove" };

type StackAction = AddAction | RmAction;

export function StringStackReducer(state: StringStackState, action: StackAction) {
    switch (action.type) {
        case "add":
            return [...state, action.payload];
        case "remove":
            // edge case
            if (state.length === 0) return [];

            // if array has more than one element
            const newState = [...state];
            newState.pop();
            return newState;
        default:
            return state;
    }
}
