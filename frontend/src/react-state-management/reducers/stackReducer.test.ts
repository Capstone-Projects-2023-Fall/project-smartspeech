import { stackReducer, StackAction } from "./stackReducer";

/**
 * @testDescription
 * Test for stackReducer
 * This tests adds and removes items using a stackReducer and checks the integrity of the data:
 *
 *
 * Test Count: 4
 * - `stackReducer` : should add a number to the stack
 * - `stackReducer` : should remove a number from the stack
 * - `stackReducer` : should do nothing on 'remove' if stack is already empty
 * - `stackReducer` : should remove everything from the stack when cleared
 */
export const tests = describe("stackReducer", () => {
    it("should add a number to the stack", () => {
        const initialState = [12];
        const addAction: StackAction<number> = { type: "add", payload: 42 };

        const newState = stackReducer(initialState, addAction);

        expect(newState).toEqual([12, 42]);
    });

    it("should remove a number from the stack", () => {
        const initialState = [10, 20, 30];
        const removeAction: StackAction<number> = { type: "remove" };

        const newState = stackReducer(initialState, removeAction);

        expect(newState).toEqual([10, 20]);
    });

    it("should do nothing on 'remove' if stack is already empty", () => {
        const initialState: number[] = [];
        const removeAction: StackAction<number> = { type: "remove" };

        const newState = stackReducer(initialState, removeAction);

        expect(newState).toEqual([]);
    });

    it("should remove everything from the stack when cleared", () => {
        const initialState = [10, 20, 30];
        const clearAction: StackAction<number> = { type: "clear" };

        const newState = stackReducer(initialState, clearAction);

        expect(newState).toEqual([]);
    });
});
