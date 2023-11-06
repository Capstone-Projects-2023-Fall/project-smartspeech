import { FC, useState } from "react";
import { useDraw } from "../../react-helpers/hooks/useDraw";
import useClientRender from "@/react-helpers/hooks/useClientRender";
import RecentlyClickedTiles from "@/components/AAC/RecentlyClickedTiles";

interface pageProps {}

/**
 * Renders a blank canvas, allowing the user to draw pictures with blank ink.
 * Canvas also allows for clearing and submitting to server
 */
export default function Canvas(){
    const [color, setColor] = useState<string>("#000");
    const { canvasRef, onMouseDown, clear, promptUserRecogination } = useDraw(drawLine);

    const renderPage = useClientRender();
   

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



    if (!renderPage) return null;
    return (
        <div className=" flex gap-2 p-2  mx-3">
            <div className="w-full  bg-white flex justify-center min-h-[64px] items-center relative">
                <div className="flex flex-col gap-10">
                    <button type="button" className="p-2 rounded-md border-black border-2 shadow-lg absolute top-2 right-2 text-bold"  data-testid = "clearImage" onClick={clear}>
                        Clear canvas
                    </button>
                    <button type="button" className="p-2 rounded-md border-black border-2 shadow-lg absolute top-13 right-2 text-bold" data-testid = "checkImage" onClick={promptUserRecogination}>
                        Check Image
                    </button>
                </div>

                <canvas
                    ref={canvasRef}
                    onMouseDown={onMouseDown}
                    width={window.innerWidth - 24 - 245}
                    height={window.innerHeight - 24 - 124}
                    className="h-full border-black border-2 shadow-lg rounded-md p-1 min-w-[164px] min-h-[64px]flex flex-wrap"
                    data-testid="my-canvas"
                />
            </div>   
            <div className="w-full bg-white flex justify-center  min-h-[164px] items-center relative">
            <RecentlyClickedTiles />
            </div>
        </div>
    );
};
