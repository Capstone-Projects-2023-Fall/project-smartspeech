import { FlatTileAssets, TileAssets } from "@/components/AAC/TileTypes";
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

export default function TileProvider({ children }: TileProviderProps) {
    const [tiles, setTiles] = useState<TileAssets>({});
    const [flatList, setFlatList] = useState<FlatTileAssets>({});

    useEffect(() => {
        // replace with actual tile getter
        const tilesResp = getAACAssets();
        setTiles(tilesResp);

        console.log(tilesResp);
    }, []);

    const value: TilesContext = {
        tiles,
        flatList,
    };

    return <tilesContext.Provider value={value}>{children}</tilesContext.Provider>;
}
