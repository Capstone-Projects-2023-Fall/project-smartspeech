import { useState, useEffect, useRef } from "react";
import { PRED_INTERVAL, useDraw } from "../../react-helpers/hooks/useDraw";
import useClientRender from "@/react-helpers/hooks/useClientRender";
import { useSimilarity } from "@/react-state-management/providers/useSimilarity";
import { useInferenceContext } from "@/react-state-management/providers/InferenceProvider";
import useSize from "@/react-helpers/hooks/useSize";
import LoadingScreenBlocker from "../util/LoadingScreenBlocker";
import { useStrokeRecorderContext } from "@/react-state-management/providers/StrokeProvider";


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

    const containerSize = useSize(containerElement);
    const [isContainerShifting, setIsContainerShifting] = useState(false);

    // call to trigger async pred
    const { predict } = useInferenceContext();

    // Need to use similarity provider here then pass to hook
    const { setItems: setItems } = useSimilarity();
    const { canvasRef, onMouseDown, clear: clearCanvas, undoStroke } = useDraw(setItems);

    const { points } = useStrokeRecorderContext();

    useEffect(() => {
        if (points.length == 0) return;

        const predTimerId = setTimeout(() => {
            console.log("Timer pred");

            if (!canvasRef.current) return;
            predict(canvasRef.current);
        }, PRED_INTERVAL);

        return () => clearTimeout(predTimerId);
    }, [points]);

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
        }
    }, [containerSize]);

    // record live if container is changing
    useEffect(() => {
        setIsContainerShifting(true);
        const timeoutId = setTimeout(() => setIsContainerShifting(false), 1000);
        return () => clearTimeout(timeoutId);
    }, [parentDim]);

    useEffect(() => {
        if (!isContainerShifting) clearCanvas(); //when container done moving
    }, [isContainerShifting]);

    return (
        <div className="ml-3 w-full" ref={containerElement}>
            <div className="w-full bg-white flex justify-center items-center relative box-border">
                <div className="flex flex-col gap-3 absolute top-2 right-2">
                    <img
                        src="/AAC_assets/img/standard/eraserX.png"
                        alt="Clear canvas"
                        className="z-10 p-2 rounded-md border-black border-2 shadow-lg clear-button"
                        data-testid="clearImage"
                        onClick={() => clearCanvas()}
                        draggable="false"
                        
                    />

                    <img
                        src="/AAC_assets/img/standard/undostroke.png"
                        alt="undo-stroke"
                        className="z-10 p-2 rounded-md border-black border-2 shadow-lg clear-button"
                        data-testid="undo-stroke"
                        onClick={undoStroke}
                        draggable="false"
                  
                    />
        
                   
                </div>

                {
                    /*Block actions when screen changes*/
                    isContainerShifting && <LoadingScreenBlocker message="Screen change detected. Please wait for resize" />
                }
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
