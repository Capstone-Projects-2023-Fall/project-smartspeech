import React, { useState } from "react";
import SelectedTilesActionBar from "@/components/AAC/SelectedTilesActionBar";
import Tiles from "@/components/AAC/Tiles";
import UtteredTilesProvider from "@/react-state-management/providers/useUtteredTiles";
import Canvas from "@/components/AAC/Canvas";
import SuggestedTiles from "@/components/AAC/SuggestedTile";
import RecentlyClickedTiles from "@/components/AAC/RecentlyClickedTiles";

import RekognitionProvider from "@/react-state-management/providers/useRekognition";
import TileProvider from "@/react-state-management/providers/tileProvider";

import ModalProvider from "@/react-state-management/providers/ManualModalProvider";
import ManualTilesPopup from "@/components/AAC/ManualTilesPopup";
import ManualModeButton from "@/components/AAC/ManualModeButton";

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
                        <ModalProvider>
                            <div className="relative">
                                <SelectedTilesActionBar />
                                <ManualTilesPopup />
                            </div>
                            <div className="flex gap-2 max-w-[100vw] shrink">
                                <Canvas />
                                <RecentlyClickedTiles />
                            </div>
                            <SuggestedTiles />
                            <ManualModeButton />
                        </ModalProvider>
                    </UtteredTilesProvider>
                </RekognitionProvider>
            </TileProvider>
        </section>
    );
}
