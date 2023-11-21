import { FC, useState, useEffect, useRef, RefObject, useCallback } from "react";
import { useDraw } from "../../react-helpers/hooks/useDraw";
import useClientRender from "@/react-helpers/hooks/useClientRender";
import { useSimilarity } from "@/react-state-management/providers/useSimilarity";
import { useInferenceContext } from "@/react-state-management/providers/InferenceProvider";
import { useUtteredTiles } from "@/react-state-management/providers/useUtteredTiles";
import useSize from "@/react-helpers/hooks/useSize";

interface ParentDivDims {
    width?: number;
    height?: number;
}
/**
 * Renders a blank canvas, allowing the user to draw pictures with blank ink.
 * Canvas also allows for clearing and submitting to server
 */
export default function Canvas() {
    // used to calc canvas size for diff screens
    const containerElement = useRef<HTMLDivElement>(null);
    const [parentDim, setParentDims] = useState<ParentDivDims>({});

    const renderPage = useClientRender();

    const containerSize = useSize(containerElement);

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

    useEffect(() => {
        if (!containerSize) return;

        // round off observer measurements
        const newWidth = containerSize.width >> 0;
        const newHeight = containerSize.height >> 0;

        const { width, height } = parentDim;

        const isInitialRender = !width || !height;

        if (isInitialRender || newWidth !== width || newHeight !== height) {
            setParentDims({
                width: newWidth,
                height: newHeight,
            });
            clearCanvas();
            console.log("Changing size", {
                width: newWidth,
                height: newHeight,
            });
        }
    }, [containerSize]);

    const handlePred = () => {
        if (!canvasRef.current) return;
        console.log("Tried to predict");
        predict(canvasRef.current);
    };

    return (
        <div className="ml-3 w-full" ref={containerElement}>
            <div className="w-full bg-white flex justify-center items-center relative box-border">
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
