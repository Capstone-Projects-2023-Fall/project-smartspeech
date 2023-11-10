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
import ManualTiles from "@/components/AAC/ManualTiles";

/**
 *
 * @returns the homepage for this app
 */
export default function Home() {
    return (
        <section className="font-inter max-h-screen max-w-[100vw]">
            <TileProvider>
                <RekognitionProvider>
                    <UtteredTilesProvider>
                        <div className="relative">
                            <SelectedTilesActionBar />
                            <div className="flex gap-2 max-w-[100vw] shrink">
                                <Canvas />
                                <RecentlyClickedTiles />
                            </div>
                            <ManualTiles />
                        </div>
                        <SuggestedTiles />
                    </UtteredTilesProvider>
                </RekognitionProvider>
            </TileProvider>
        </section>
    );
}
