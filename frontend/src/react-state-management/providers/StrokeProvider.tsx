import { Point, Points } from "@/util/types/typing";
import React, { createContext, useContext, useReducer } from "react";
import { stackReducer } from "../reducers/stackReducer";

interface StrokeRecorderContextType {
    points: Points[];
    addStoke: (stroke: Points) => void;
    clear: () => void;
    removeLastStroke: () => void;
    getFlatPointArray: () => Point[];
}

const StrokeRecorderContext = createContext<StrokeRecorderContextType>({
    points: [],
    addStoke(stroke) {},
    clear() {},
    removeLastStroke() {},
    getFlatPointArray: () => [],
});

export const useStrokeRecorderContext = () => useContext(StrokeRecorderContext);
export type StrokeProviderProps = { children: React.ReactNode };

/**
 * @param props props that contains the children to be rendered
 * @returns Provider with children rendered
 */
export default function StrokeProvider(props: StrokeProviderProps) {
    const [points, dispatchPointAction] = useReducer(stackReducer<Points>, []);

    const addStoke = (stroke: Points) =>
        dispatchPointAction({
            type: "add",
            payload: stroke,
        });

    const clear = () =>
        dispatchPointAction({
            type: "clear",
        });

    const removeLastStroke = () => {
        dispatchPointAction({
            type: "remove",
        });
    };

    const getFlatPointArray = () => {
        return ([] as Points).concat(...points);
    };

    const value: StrokeRecorderContextType = {
        points,
        addStoke,
        clear,
        removeLastStroke,
        getFlatPointArray,
    };

    return <StrokeRecorderContext.Provider value={value}>{props.children}</StrokeRecorderContext.Provider>;
}
