import { getSimilarWords } from "@/components/AAC/SuggestedTile";
import { useStrokeRecorderContext } from "@/react-state-management/providers/StrokeProvider";
import { stackReducer } from "@/react-state-management/reducers/stackReducer";
import { Draw, Point } from "@/util/types/typing";
import { useEffect, useReducer, useRef, useState } from "react";

export const WHITE = "#FFFFFF";
export const BLACK = "#000000";
export const PRED_INTERVAL = 2000;

interface CanvasAndContext {
    canvas: HTMLCanvasElement | null;
    ctx: CanvasRenderingContext2D | null;
}

/**
 * useDraw provides functionality for drawing on an html canvas
 * @param onDraw whenever the user makes a stroke, a reference to the canvas
 * context, the point the stroke ended at, and the point the stroke started at
 * will be passed to this function
 * @returns a reference to the html canvas, a function that should be called
 * the user presses, and a function for clearning the canvas
 */

export const useDraw = (setItems: (items: string[]) => void) => {
    const [mouseDown, setMouseDown] = useState(false);

    const canvasRef = useRef<HTMLCanvasElement>(null);
    const prevPoint = useRef<null | Point>(null);
    const [currentStroke, dispatchPointAction] = useReducer(stackReducer<Point>, []);

    const { points, addStoke, clear: clearStroke, removeLastStroke } = useStrokeRecorderContext();

    const onMouseDown = () => setMouseDown(true);

    const getCanvasAndContext = () => {
        const values: CanvasAndContext = {
            canvas: null,
            ctx: null,
        };

        values.canvas = canvasRef.current;

        if (!values.canvas) return values;

        values.ctx = values.canvas.getContext("2d");

        return values;
    };

    function onDraw({ prevPoint, currentPoint, ctx }: Draw) {
        const { x: currX, y: currY } = currentPoint;
        const lineColor = BLACK; // black
        const lineWidth = 10;

        let startPoint = prevPoint ?? currentPoint;
        ctx.beginPath();
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = lineColor;
        ctx.moveTo(startPoint.x, startPoint.y);
        ctx.lineTo(currX, currY);
        ctx.stroke();

        ctx.fillStyle = lineColor;
        ctx.beginPath();
        ctx.arc(startPoint.x, startPoint.y, 2, 0, 2 * Math.PI);
        ctx.fill();
    }

    const fillCanvasWithColor = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, color: string = WHITE) => {
        ctx.fillStyle = color;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const clear = (clearBoard: boolean = true) => {
        const { canvas, ctx } = getCanvasAndContext();
        if (!canvas || !ctx) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Set background color to white
        fillCanvasWithColor(canvas, ctx);

        if (clearBoard) clearStroke(); // match state to reflect clearned state
    };

    const undoStroke = () => {
        if (points.length < 2) return clear();

        // detect canvas
        const { ctx } = getCanvasAndContext();
        if (!ctx) return;

        // gather points
        const prevStrokes = [...points];
        prevStrokes.pop(); //remove last element

        //erase board
        clear(false);

        // redraw based on last points
        prevStrokes.forEach((stroke) => {
            let lastPoint: Point | null = null;

            stroke.forEach((point) => {
                onDraw({
                    prevPoint: lastPoint,
                    currentPoint: point,
                    ctx,
                });

                lastPoint = point;
            });
        });

        // match drawing strokes to react state
        removeLastStroke();
    };

    async function promptUserRecogination() {
        try {
            const { canvas, ctx } = getCanvasAndContext();
            if (!canvas || !ctx) return;

            if (canvas) {
                const drawingDataUrl = canvas.toDataURL(); // Capture the drawing as a data URL
                console.log("Captured drawing data URL:", drawingDataUrl);

                const drawingTopObjects = ["Blueberry", "Circle"];
                const similarityTopObjects = await getSimilarWords(drawingTopObjects);
                console.log("In useDraw: " + similarityTopObjects);
                setItems(similarityTopObjects);

                //mock function accepting the canvas drawling
                return drawingDataUrl;
            }
        } catch (error) {
            console.error("Error getting data", error);
            throw error;
        }
    }

    useEffect(() => {
        const handler = (e: MouseEvent | TouchEvent) => {
            if (!mouseDown) return;
            const currentPoint = computePointInCanvas(e);

            const { ctx } = getCanvasAndContext();
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

        const mouseUpHandler = () => {
            setMouseDown(false);
            prevPoint.current = null;
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

    return { canvasRef, onMouseDown, clear, promptUserRecogination, undoStroke };
};
