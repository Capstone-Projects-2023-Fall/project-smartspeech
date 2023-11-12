import { Points } from "@/util/types/typing";
import React, { createContext, useContext, useReducer } from "react";
import { stackReducer } from "../reducers/stackReducer";

interface StrokeRecorderContextType {
    points: Points[];
    addStoke: (stroke: Points) => void;
    clear: () => void;
}

const StrokeRecorderContext = createContext<StrokeRecorderContextType>({
    points: [],
    addStoke(stroke) {},
    clear() {},
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

    const value: StrokeRecorderContextType = {
        points,
        addStoke,
        clear,
    };

    return <StrokeRecorderContext.Provider value={value}>{props.children}</StrokeRecorderContext.Provider>;
}
