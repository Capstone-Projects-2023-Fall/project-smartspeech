import React, { useEffect, useRef, useState } from "react";
import { fabric } from "fabric";

export const FabricCanvasSelectors = {
    canvasId: "canvas",
};

export default function FabricCanvas() {
    const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);
    const canvasWrapperRef = useRef<HTMLDivElement>(null);

    const initCanvas = (id: string) =>
        new fabric.Canvas(id, {
            height: 800,
            width: 800,
            backgroundColor: "white",
            isDrawingMode: true,
        });

    useEffect(() => {
        const id = FabricCanvasSelectors.canvasId;
        setCanvas(initCanvas(id));
    }, []);

    useEffect(() => {
        if (!canvas) return;
        if (typeof window === "undefined") return;

        const resizeCalc = () => {
            const outerCanvasContainer = canvasWrapperRef.current;

            if (!outerCanvasContainer) return;

            const ratio = canvas.getWidth() / canvas.getHeight();
            const containerWidth = outerCanvasContainer.clientWidth;
            const scale = containerWidth / canvas.getWidth();
            const zoom = canvas.getZoom() * scale;

            canvas.setDimensions({ width: containerWidth, height: containerWidth / ratio });
            console.log("new dim", containerWidth, containerWidth / ratio);
            canvas.setViewportTransform([zoom, 0, 0, zoom, 0, 0]);
            console.log(canvas.toJSON());
        };

		// run initially to get correct initial render
        resizeCalc();

        window.addEventListener("resize", resizeCalc);

        return () => window.removeEventListener("resize", resizeCalc);
    }, [canvas]);

    return (
        <>
            <div className="fabric-wrapper max-w-max max-h-max" ref={canvasWrapperRef}>
                <canvas id={FabricCanvasSelectors.canvasId} className="border" />
            </div>
        </>
    );
}
