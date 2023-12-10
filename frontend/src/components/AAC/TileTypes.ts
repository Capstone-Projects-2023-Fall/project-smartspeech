import { TileProps } from "./Tile";

export type TileData = TileProps & { subTiles?: TileAssets };

export type TileAssets = {
    [key: string]: TileData;
};

export type FlatTileAssets = {
    [key: string]: TileProps;
};
