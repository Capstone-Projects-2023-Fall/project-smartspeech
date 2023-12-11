import { TileColor } from "@/components/AAC/Tile";
import { FlatTileAssets, TileAssets, TileData } from "@/components/AAC/TileTypes";
import { getTileFlatList } from "@/data/testing/AAC/flatListDataFile";
import { getAACAssets } from "@/util/AAC/getAACAssets";
import getTilesByEmail, { GetTileData } from "@/util/CustomTile/getTilesByEmail";
import { EMPTY_FUNCTION } from "@/util/constants";
import { useSession } from "next-auth/react";
import React, { useState, useContext, createContext, useEffect } from "react";

interface TilesContext {
    tiles: TileAssets;
    flatList: FlatTileAssets;
    customTiles: GetTileData[];
    triggerRefreshCustomTiles: Function;
}

const tilesContext = createContext<TilesContext>({
    tiles: {},
    flatList: {},
    customTiles: [],
    triggerRefreshCustomTiles: EMPTY_FUNCTION,
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
    const [refreshCustomTiles, setRefreshCustomTiles] = useState(0);

    const triggerRefreshCustomTiles = () => setRefreshCustomTiles((prev) => prev + 1);

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
    }, [session?.user?.email, status, refreshCustomTiles]);

    useEffect(() => {
        if (!session?.user?.email) return;
        if (customTiles.length === 0) return;

        const customTilesView: TileData = {
            image: "/AAC_assets/img/standard/custom.png",
            text: "Custom Tiles",
            tileColor: "purple",
        };

        const customTilesViewSubtiles: TileAssets = {};

        customTiles.forEach((tile) => {
            const { text, sound, url, tileColor } = tile;

            customTilesViewSubtiles[tile.text] = {
                text,
                sound,
                image: url,
                tileColor: tileColor as TileColor,
            };
        });

        customTilesView.subTiles = customTilesViewSubtiles;

        setTiles({ ...tiles, "Custom Tiles": customTilesView });
    }, [customTiles, session?.user?.email]);

    const value: TilesContext = {
        tiles,
        flatList,
        customTiles,
        triggerRefreshCustomTiles,
    };

    return <tilesContext.Provider value={value}>{children}</tilesContext.Provider>;
}
