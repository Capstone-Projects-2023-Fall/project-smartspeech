import deleteTilesByEmail from "@/util/CustomTile/deleteTilesByEmailAndId";
import { GetTileData } from "@/util/CustomTile/getTilesByEmail";
import Image from "next/image";
import React, { useState } from "react";
import { CustomTilesCardLoadingSpinner } from "../util/LoadingSpinner";
import { speak } from "@/util/AAC/Speech";

export interface CustomTileCardProps {
    tileInfo: GetTileData;
    triggerRefreshCustomTiles: Function;
}

export default function Card({ tileInfo, triggerRefreshCustomTiles }: CustomTileCardProps) {
    const [isLoading, setIsLoading] = useState(false);

    const onClickRemove = async () => {
        setIsLoading(true);

        const { email, id } = tileInfo;
        const { data } = await deleteTilesByEmail(email, id);

        triggerRefreshCustomTiles();
        setIsLoading(false);

        if ("detail" in data) {
            return false;
        }

        return data.rowsDeleted;
    };

    const handleSpeak = () => {
        speak(tileInfo.sound);
    };

    return (
        <div className="w-72 max-w-sm bg-white border border-gray-200 rounded-lg shadow">
            <div className="flex flex-col items-center pb-10">
                <Image className="w-20 h-20 mb-3 mt-4" src={tileInfo.url} width={96 * 2} height={96 * 2} alt="Bonnie image" />
                <div className="min-w-0 text-sm text-gray-500 dark:text-gray-400 break-all px-4 pb-1">
                    <strong>Text: </strong> {tileInfo.text}
                </div>
                <div className="min-w-0 text-sm text-gray-500 dark:text-gray-400 break-all px-4 pb-1">
                    <strong>Sound: </strong> {tileInfo.sound}
                </div>
                <div className="flex mt-4 md:mt-6 gap-2">
                    <button
                        type="button"
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                        onClick={onClickRemove}
                    >
                        {isLoading ? <CustomTilesCardLoadingSpinner /> : "Remove Tile"}
                    </button>
                    <button
                        type="button"
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200"
                        onClick={handleSpeak}
                    >
                        Play Sound
                    </button>
                </div>
            </div>
        </div>
    );
}
