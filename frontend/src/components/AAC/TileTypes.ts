import { TileProps } from "./Tile";
import { isGlobalManualFlag } from "./GlobalManualVariable";

export type TileData = TileProps & { subTiles?: TileAssets };

export type TileAssets = {
    [key: string]: TileData;
};
