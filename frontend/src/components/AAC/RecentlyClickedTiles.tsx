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
        <section className="m-3 px-3 pt-1 pb-3 border-black border-2 rounded-md shadow-lg max-w-max" data-testid={recentlyClickedTilesIds.container}>
            <h2 className="text-xl font-bold text-center mb-2 border-b-2" data-testid={recentlyClickedTilesIds.title}>
                Recent Tiles
            </h2>
            <div className="flex flex-col gap-3" data-testid={recentlyClickedTilesIds.tileContainer}>
                {tileHistory.map((tile, idx) => (
                    <Tile image={tile.image} text={tile.text} tileColor={tile.tileColor} sound={tile.sound} key={`${tile.rank}-${idx}`} />
                ))}
            </div>
        </section>
    );
}