import { FC, useState, useEffect, useRef, RefObject, useCallback } from "react";
import { useDraw } from "../../react-helpers/hooks/useDraw";
import useClientRender from "@/react-helpers/hooks/useClientRender";
import { Draw } from "@/util/types/typing";
import { useSimilarity } from "@/react-state-management/providers/useSimilarity";

interface ParentDivDims {
  width?: number;
  height?: number;
}

const resizeCalc = (parentRef: RefObject<HTMLDivElement>) => {
  if (typeof window === "undefined" || typeof document === "undefined") return;
  if (!parentRef.current) return;

  // Get the viewport height using the innerHeight property
  const viewportHeight =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;

  // Get the total page height using the scrollHeight property
  const totalPageHeight =
    document.documentElement.scrollHeight || document.body.scrollHeight;

  const boundRect = parentRef.current.getBoundingClientRect();

  // fallback view
  if (!viewportHeight || !totalPageHeight)
    return {
      width: boundRect.width,
      height: boundRect.height,
    };

  // find diff between page and screen length
  const hightDifferential = totalPageHeight - viewportHeight;

  // cut off high diff off canvas height
  return {
    width: boundRect.width,
    height: boundRect.height - hightDifferential,
  };
};

/**
 * Renders a blank canvas, allowing the user to draw pictures with blank ink.
 * Canvas also allows for clearing and submitting to server
 */
export default function Canvas() {
  // Need to use similarity provider here then pass to hook
  const { setItems: setItems } = useSimilarity();

  const [color, setColor] = useState<string>("#000");

  const parentDiv = useRef<HTMLDivElement>(null);
  const [parentDim, setParentDims] = useState<ParentDivDims>({});

  const renderPage = useClientRender();

  const {
    canvasRef,
    onMouseDown,
    clear: clearCanvas,
    promptUserRecogination,
  } = useDraw(drawLine, setItems);

  function drawLine({ prevPoint, currentPoint, ctx }: Draw) {
    const { x: currX, y: currY } = currentPoint;
    const lineColor = color;
    const lineWidth = 5;

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

  // cache callbacks to optimze renders
  const resizeFn = useCallback(() => {
    const resizeCalcs = resizeCalc(parentDiv);
    if (resizeCalcs) setParentDims(resizeCalcs);
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
            onClick={promptUserRecogination}
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
