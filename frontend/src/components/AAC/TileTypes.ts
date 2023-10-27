import { TileProps } from "./Tile";
import Tiles from "./Tiles";

export type TileData = TileProps & { subTiles?: TileAssets };

export type TileAssets = {
    [key: string]: TileData;
};
