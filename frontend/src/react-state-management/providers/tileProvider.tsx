import { FlatTileAssets, TileAssets } from "@/components/AAC/TileTypes";
import { getTileFlatList } from "@/data/testing/AAC/flatListDataFile";
import { getAACAssets } from "@/util/AAC/getAACAssets";
import React, { useState, useContext, createContext, useEffect } from "react";

interface TilesContext {
    tiles: TileAssets;
    flatList: FlatTileAssets;
}

const tilesContext = createContext<TilesContext>({
    tiles: {},
    flatList: {},
});

export const useTilesProvider = () => {
    return useContext(tilesContext);
};

export interface TileProviderProps {
    children: React.ReactNode;
}

/**
 * Tile provider to expose collected tiles to the application. Currently it only exposes the default tiles available.
 * @returns
 */
export default function TileProvider({ children }: TileProviderProps) {
    const [tiles, setTiles] = useState<TileAssets>({});
    const [flatList, setFlatList] = useState<FlatTileAssets>({});

    useEffect(() => {
        // replace with actual tile getter
        const tilesResp = getAACAssets();
        setTiles(tilesResp);
    }, []);

    useEffect(() => {
        // replace with actual tile getter
        const flatTileRes = getTileFlatList();
        setFlatList(flatTileRes);
    }, []);

    const value: TilesContext = {
        tiles,
        flatList,
    };

    return <tilesContext.Provider value={value}>{children}</tilesContext.Provider>;
}
