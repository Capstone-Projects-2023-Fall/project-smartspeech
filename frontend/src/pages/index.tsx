import React, { useState } from "react";
import SelectedTilesActionBar from "@/components/AAC/SelectedTilesActionBar";
import Tiles from "@/components/AAC/Tiles";
import UtteredTilesProvider from "@/react-state-management/providers/useUtteredTiles";
import Canvas from "@/components/AAC/Canvas";
import SuggestedTiles from "@/components/AAC/SuggestedTile";
import RecentlyClickedTiles from "@/components/AAC/RecentlyClickedTiles";

/**
 *
 * @returns the homepage for this app
 */
export default function Home() {
    const [showTiles, setShowTiles] = useState(false);

    const handleTilesClick = () => {
        setShowTiles(true);
    };

    const handleTilesReturn = () => {
        setShowTiles(false);
    };

    return (
        <section className="font-inter">
            <UtteredTilesProvider>
                <SelectedTilesActionBar />
                {!showTiles && (
                    <>
                        <Canvas />
                        <SuggestedTiles />
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
                <SelectedTilesActionBar />
                <Canvas />
                <RecentlyClickedTiles />
                <SuggestedTiles />
                <Tiles />
            </UtteredTilesProvider>
        </section>
    );
}
