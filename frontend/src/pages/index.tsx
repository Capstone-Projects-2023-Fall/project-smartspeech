import React, { useState } from "react";
import SelectedTilesActionBar from "@/components/AAC/SelectedTilesActionBar";
import Tiles from "@/components/AAC/Tiles";
import UtteredTilesProvider from "@/react-state-management/providers/useUtteredTiles";
import Canvas from "@/components/AAC/Canvas";
import SuggestedTiles from "@/components/AAC/SuggestedTile";
import RecentlyClickedTiles from "@/components/AAC/RecentlyClickedTiles";
import Tile from "@/components/AAC/Tile";

export const ManualModeTestIds = {
    manualBtn: "manual-button",
    exitManualBtn: "return-button",
};
import RekognitionProvider from "@/react-state-management/providers/useRekognition";
import TileProvider from "@/react-state-management/providers/tileProvider";

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

    const itemsShownByDefault = (
        <>
            <Canvas />
            <SuggestedTiles />
        </>
    );

    return (
        <section className="font-inter">
            <TileProvider>
                <RekognitionProvider>
                    <UtteredTilesProvider>
                        <SelectedTilesActionBar />
                        {!showTiles && (
                            <>
                                {itemsShownByDefault}
                                <br />
                                <div onClick={handleTilesClick} data-testid={ManualModeTestIds.manualBtn}>
                                    <Tile image="/AAC_assets/img/standard/manual.png" text="" tileColor="blue" />
                                </div>
                                <br />
                            </>
                        )}
                        {showTiles && (
                            <>
                                <Tiles />
                                <br />
                                <div onClick={handleTilesReturn} data-testid={ManualModeTestIds.exitManualBtn}>
                                    <Tile image="/AAC_assets/img/standard/back_arrow.png" text="Return" tileColor="blue" />
                                </div>
                            </>
                        )}
                    </UtteredTilesProvider>
                </RekognitionProvider>
            </TileProvider>
        </section>
    );
}
