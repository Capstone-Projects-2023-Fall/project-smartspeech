import { FC, useState, useEffect, useRef, RefObject, useCallback } from "react";
import { useDraw } from "../../react-helpers/hooks/useDraw";
import useClientRender from "@/react-helpers/hooks/useClientRender";
import { Draw } from "@/util/types/typing";
import { useSimilarity } from "@/react-state-management/providers/useSimilarity";
import { useInferenceContext } from "@/react-state-management/providers/InferenceProvider";
import { useUtteredTiles } from "@/react-state-management/providers/useUtteredTiles";

interface ParentDivDims {
    width?: number;
    height?: number;
}

const resizeCalc = (parentRef: RefObject<HTMLDivElement>) => {
    if (typeof window === "undefined" || typeof document === "undefined") return;
    if (!parentRef.current) return;

    // Get the viewport height using the innerHeight property
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    // Get the total page height using the scrollHeight property
    const totalPageHeight = document.documentElement.scrollHeight || document.body.scrollHeight;

    const boundRect = parentRef.current.getBoundingClientRect();

    // fallback view
    if (!viewportHeight || !totalPageHeight)
        return {
            width: boundRect.width >> 0,
            height: boundRect.height >> 0,
        };

    // find diff between page and screen length
    const hightDifferential = totalPageHeight - viewportHeight;

    // cut off high diff off canvas height
    return {
        width: boundRect.width >> 0,
        height: (boundRect.height - hightDifferential) >> 0,
    };
};

/**
 * Renders a blank canvas, allowing the user to draw pictures with blank ink.
 * Canvas also allows for clearing and submitting to server
 */
export default function Canvas() {
    // used to calc canvas size for diff screens
    const parentDiv = useRef<HTMLDivElement>(null);
    const [parentDim, setParentDims] = useState<ParentDivDims>({});

    const renderPage = useClientRender();

    // call to trigger async pred
    const { predict } = useInferenceContext();

    // Need to use similarity provider here then pass to hook
    const { setItems: setItems } = useSimilarity();
    const { canvasRef, onMouseDown, clear: clearCanvas, promptUserRecogination } = useDraw(setItems);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Set background color to white
        // ctx.fillStyle = "#ffffff";
        // ctx.fillRect(0, 0, canvas.width, canvas.height);
    }, []);

    // cache callbacks to optimze renders
    const resizeFn = useCallback(() => {
        const resizeCalcs = resizeCalc(parentDiv);
        if (resizeCalcs) setParentDims(resizeCalcs);
        clearCanvas(); //allow state to match a resize event (when a resize occurs canvas will be cleared)
        console.log("resized at", resizeCalcs);
    }, [parentDiv, parentDim, setParentDims, renderPage]);

    // attach event on window resize to configure canvas
    useEffect(() => {
        const windowResizeListener = resizeFn;

        window.addEventListener("resize", windowResizeListener);

        return () => window.removeEventListener("resize", windowResizeListener);
    }, [parentDim, setParentDims]);

    // one time on load resize to resize on initial page load
    useEffect(() => {
        resizeFn();
    }, []);

    const handlePred = () => {
        if (!canvasRef.current) return;
        console.log("Tried to predict");
        predict(canvasRef.current);
    };

    return (
        <div className="ml-3 w-full" ref={parentDiv}>
            <div className="w-full h-full bg-white flex justify-center items-center relative">
                <div className="flex flex-col gap-10">
                    <button
                        type="button"
                        className="z-10 p-2 rounded-md border-black border-2 shadow-lg absolute top-2 right-2 text-bold"
                        data-testid="clearImage"
                        onClick={clearCanvas}
                    >
                        Clear canvas
                    </button>
                    <button
                        type="button"
                        className="z-10 p-2 rounded-md border-black border-2 shadow-lg absolute top-13 right-2 text-bold"
                        data-testid="checkImage"
                        onClick={handlePred}
                    >
                        Check Image
                    </button>
                </div>

                <canvas
                    ref={canvasRef}
                    onMouseDown={onMouseDown}
                    onTouchStart={onMouseDown}
                    className="border-black border-2 shadow-lg rounded-md"
                    data-testid="my-canvas"
                    id="responsive-canvas"
                    width={parentDim.width || 640}
                    height={parentDim.height || 320}
                />
            </div>
        </div>
    );
}
