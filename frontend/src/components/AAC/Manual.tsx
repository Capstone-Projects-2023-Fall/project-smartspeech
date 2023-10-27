import React, { useState } from "react";
import Tiles from "./Tiles";

interface ManualButtonProps {
    children: React.ReactNode;
}

export default function ManualButton({ children }: ManualButtonProps) {
    const [showTiles, setShowTiles] = useState(false);

    const handleTilesClick = () => {
        setShowTiles(true);
    };

    const handleTilesReturn = () => {
        setShowTiles(false);
    };

    return (
        <div>
            {!showTiles && (
                <>
                    {children}
                    <Tiles />
                    <button className="tile-button" onClick={handleTilesClick} data-testid="manual-button">
                        <img src={"/AAC_assets/img/standard/manual.png"} width={176} height={176} />
                    </button>
                </>
            )}
            {showTiles && (
                <>
                    <Tiles />
                    <button className="tile-button" onClick={handleTilesReturn} data-testid="return-button">
                        <h1 className="tilesHeaderFont">Return to Canvas</h1>
                        <img src={"/AAC_assets/img/standard/back_arrow.png"} width={176} height={176} />
                    </button>
                </>
            )}
        </div>
    );
}
