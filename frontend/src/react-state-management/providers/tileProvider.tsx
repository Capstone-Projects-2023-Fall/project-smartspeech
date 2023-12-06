import { FlatTileAssets, TileAssets } from "@/components/AAC/TileTypes";
import { getTileFlatList } from "@/data/testing/AAC/flatListDataFile";
import { getAACAssets } from "@/util/AAC/getAACAssets";
import getTilesByEmail, { GetTileData } from "@/util/CustomTile/getTilesByEmail";
import { useSession } from "next-auth/react";
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
    const [customTiles, setCustomTiles] = useState<GetTileData[]>([]);

    const { data: session, status } = useSession();

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

    useEffect(() => {
        const email = session?.user?.email;
        if (!email || status !== "authenticated") return;

        const customTileDataPromise = getTilesByEmail(email).then((tiles) => {
            if (!tiles) return;
            setCustomTiles(tiles);
        });

        customTileDataPromise.catch((error) => console.log(error));
    }, [session?.user?.email, status]);

    const value: TilesContext = {
        tiles,
        flatList,
    };

    return <tilesContext.Provider value={value}>{children}</tilesContext.Provider>;
}
