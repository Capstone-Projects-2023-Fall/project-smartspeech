import { TileProps } from "./Tile";
import { isGlobalManualFlag } from "./GlobalManualVariable";
import Tiles from "./Tiles";

export type TileData = TileProps & { subTiles?: TileAssets };

export type TileAssets = {
    [key: string]: TileData;
};
