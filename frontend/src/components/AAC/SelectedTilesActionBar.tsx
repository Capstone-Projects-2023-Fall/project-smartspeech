import { useUtteredTiles } from "@/react-state-management/providers/useUtteredTiles";
import React from "react";
import MiniTile from "./MiniTile";
import { RiSpeakLine, RiCameraOffFill, RiCameraFill, RiDeleteBack2Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { speak } from "@/util/AAC/Speech";
import { useRekognition } from "@/react-state-management/providers/useRekognition";
import { useHealthCheckContext } from "@/react-state-management/providers/HealthCheckProvider";

export const actionBarDataTestIds = {
    container: "actionbar-container",
    wordBox: "actionbar-words-box",
    speakBtn: "actionbar-speak-btn",
    clearBtn: "actionbar-clear-btn",
    backspaceBtn: "actionbar-backspace-btn",
    toggleCamBtn: "actionbar-toggle-camera",
    cameraIconOn: "actionbar-camera-on-icon",
    cameraIconOff: "actionbar-camera-off-icon",
};

/**
 * Displays a list of tiles currently selected, a button to speak the tiles,
 * and a button the clear the list of tiles.
 */
export default function SelectedTilesActionBar() {
    const { tiles, clear, removeLastTile } = useUtteredTiles();
    const { backendActive } = useHealthCheckContext();

    const handleSpeak = () => {
        const validTilesSounds = tiles.filter((tile) => Boolean(tile.sound)).map((tile) => tile.sound);
        const sentence = validTilesSounds.join(" ");

        speak(sentence, backendActive);
    };

    const { toggle, toggleCamera } = useRekognition();

    return (
        <div className="z-50 w-full flex gap-2 p-3" data-testid={actionBarDataTestIds.container}>
            <div
                className="w-full border-black border-2 rounded-md shadow-lg p-1 min-h-[64px] flex gap-2 flex-wrap"
                data-testid={actionBarDataTestIds.wordBox}
            >
                {tiles &&
                    tiles.map((miniTileInfo, idx) => (
                        <MiniTile image={miniTileInfo.image} text={miniTileInfo.text} key={`${miniTileInfo.text}-${idx}`} />
                    ))}
            </div>
            <button className="bg-green-400 p-2 rounded hover:shadow-xl" data-testid={actionBarDataTestIds.speakBtn} onClick={handleSpeak}>
                <RiSpeakLine className="w-12 h-12" />
            </button>
            <button className="bg-yellow-300 p-2 rounded hover:shadow-xl" data-testid={actionBarDataTestIds.backspaceBtn} onClick={removeLastTile}>
                <RiDeleteBack2Fill className="w-12 h-12" />
            </button>
            <button className="bg-red-400 p-2 rounded hover:shadow-xl" data-testid={actionBarDataTestIds.clearBtn} onClick={clear}>
                <RxCross2 className="w-12 h-12" />
            </button>
            {
                // show toggle button IF backend is even working at the moment
                backendActive && (
                    <button
                        className={`${toggle ? "bg-gray-400" : "bg-gray-600"} p-2 rounded hover:shadow-xl`}
                        onClick={toggleCamera}
                        data-testid={actionBarDataTestIds.toggleCamBtn}
                    >
                        {toggle ? (
                            <RiCameraFill data-testid={actionBarDataTestIds.cameraIconOn} className="w-12 h-12" />
                        ) : (
                            <RiCameraOffFill data-testid={actionBarDataTestIds.cameraIconOff} className="w-12 h-12" />
                        )}
                    </button>
                )
            }
        </div>
    );
}
