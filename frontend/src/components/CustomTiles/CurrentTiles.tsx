import { useTilesProvider } from "@/react-state-management/providers/tileProvider";
import React from "react";
import Card from "./Card";

export default function CurrentTiles() {
    const { customTiles, triggerRefreshCustomTiles } = useTilesProvider();
    return (
        <div className="flex justify-center mt-6">
            <div className="grid grid-cols-3 gap-4 lg-max:grid-cols-2 sm-max:grid-cols-1">
                {customTiles.map((tile) => (
                    <Card tileInfo={tile} triggerRefreshCustomTiles={triggerRefreshCustomTiles} key={tile.url} />
                ))}
            </div>
        </div>
    );
}
