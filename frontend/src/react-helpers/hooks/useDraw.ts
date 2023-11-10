import { useStrokeRecorderContext } from "@/react-state-management/providers/StrokeProvider";
import { stackReducer } from "@/react-state-management/reducers/stackReducer";
import { Draw, Point } from "@/util/types/typing";
import { useEffect, useReducer, useRef, useState } from "react";

/**
 * useDraw provides functionality for drawing on an html canvas
 * @param onDraw whenever the user makes a stroke, a reference to the canvas
 * context, the point the stroke ended at, and the point the stroke started at
 * will be passed to this function
 * @returns a reference to the html canvas, a function that should be called
 * the user presses, and a function for clearning the canvas
 */

export const useDraw = (onDraw: ({ ctx, currentPoint, prevPoint }: Draw) => void) => {
    const [mouseDown, setMouseDown] = useState(false);

    const canvasRef = useRef<HTMLCanvasElement>(null);
    const prevPoint = useRef<null | Point>(null);
    const [currentStroke, dispatchPointAction] = useReducer(stackReducer<Point>, []);

    const { addStoke, clear: clearStoke } = useStrokeRecorderContext();

    const onMouseDown = () => setMouseDown(true);

    const clear = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        clearStoke(); // match state to reflect clearned state
    };

    async function promptUserRecogination() {
        try {
            const canvas = canvasRef.current;
            if (!canvas) return;

            const ctx = canvas.getContext("2d");
            if (!ctx) return;

            if (canvas) {
                const drawingDataUrl = canvas.toDataURL(); // Capture the drawing as a data URL
                console.log("Captured drawing data URL:", drawingDataUrl);

                //mock function accepting the canvas drawling
                return drawingDataUrl;
            }
        } catch (error) {
            console.error("Error getting data", error);
            throw error;
        }
    }

    const mouseUpHandler = () => {
        setMouseDown(false);
        prevPoint.current = null;
    };

    useEffect(() => {
        const handler = (e: MouseEvent | TouchEvent) => {
            if (!mouseDown) return;
            const currentPoint = computePointInCanvas(e);

            const ctx = canvasRef.current?.getContext("2d");
            if (!ctx || !currentPoint) return;

            onDraw({ ctx, currentPoint, prevPoint: prevPoint.current });
            prevPoint.current = currentPoint;
        };

        const computePointInCanvas = (e: MouseEvent | TouchEvent) => {
            e.preventDefault(); // prevent touch scrolling

            const canvas = canvasRef.current;
            if (!canvas) return;

            const rect = canvas.getBoundingClientRect();

            let computedPoint: Point;

            if (e instanceof MouseEvent) {
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                computedPoint = { x, y };
            }
            // if not a mouse event then it has to be a touch event
            else {
                const primaryTouch = e.touches[0];

                const x = primaryTouch.clientX - rect.left;
                const y = primaryTouch.clientY - rect.top;

                computedPoint = { x, y };
            }

            dispatchPointAction({
                type: "add",
                payload: computedPoint,
            });

            return computedPoint;
        };

        // Add event listeners
        //* mouse
        canvasRef.current?.addEventListener("mousemove", handler);
        window.addEventListener("mouseup", mouseUpHandler);

        //* touch
        canvasRef.current?.addEventListener("touchmove", handler);
        window.addEventListener("touchend", mouseUpHandler);

        // Remove event listeners
        return () => {
            //* mouse
            canvasRef.current?.removeEventListener("mousemove", handler);
            window.removeEventListener("mouseup", mouseUpHandler);

            //* touch
            canvasRef.current?.removeEventListener("touchmove", handler);
            window.removeEventListener("touchend", mouseUpHandler);
        };
    }, [onDraw]);

    useEffect(() => {
        // take no action if no no stoke has been recorded or if the mouse is down
        if (!currentStroke.length || mouseDown) return;

        addStoke([...currentStroke]);
        dispatchPointAction({
            type: "clear",
        });
    }, [mouseDown]);

    return { canvasRef, onMouseDown, clear, promptUserRecogination };
};
