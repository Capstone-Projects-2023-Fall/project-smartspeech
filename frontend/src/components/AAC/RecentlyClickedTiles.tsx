import { useUtteredTiles } from "@/react-state-management/providers/useUtteredTiles";
import React from "react";
import Tile from "./Tile";

export const recentlyClickedTilesIds = {
    container: "recently-clicked-container",
    title: "recently-clicked-title",
    tileContainer: "recently-clicked-tiles",
};

export default function RecentlyClickedTiles() {
    const { tileHistory } = useUtteredTiles();

    return (
        <section
            className="mr-3 px-3 pt-1 pb-0 mb-0 border-black border-2 rounded-md shadow-lg max-w-max overflow-y-scroll overflow-x-visible w-full"
            data-testid={recentlyClickedTilesIds.container}
        >
            <h2 className="text-xl font-bold text-center mb-2 border-b-2" data-testid={recentlyClickedTilesIds.title}>
                Recent Tiles
            </h2>
            <div className="flex flex-col gap-3 items-center" data-testid={recentlyClickedTilesIds.tileContainer}>
                {tileHistory.map((tile, idx) => (
                    <Tile image={tile.image} text={tile.text} tileColor={tile.tileColor} sound={tile.sound} key={`${tile.rank}-${idx}`} />
                ))}
                <div className="w-44 h-1 2xl-max:w-36 xl-max:w-32 lg-max:w-28 mid-max:w-24 md-max:w-20 xs-max:w-16"></div>
            </div>
        </section>
    );
}
