import React, { useCallback } from "react";
import Tile from "./Tile";
import { useManualModeModelContext } from "@/react-state-management/providers/ManualModalProvider";
import { LongPressEventType, useLongPress } from "use-long-press";

export const ManualBtnTestIds = {
    toggleManualBtn: "mbt-return-button",
};

export default function ManualModeButton() {
    const [isOpen, toggleModal] = useManualModeModelContext();
    const toggleModelHandler = () => {
        console.log("Onclick triggered");
        toggleModal();
    }

    const callback = useCallback(() => {
        console.log("Long Pressed!")
      }, []);

    const bind = useLongPress(callback, {
    onStart: () => console.log('Press started'),
    onFinish: () => console.log('Long press finished'),
    onCancel: toggleModelHandler,
    onMove: () => console.log('Detected mouse or touch movement'),
    filterEvents: () => true, // All events can potentially trigger long press (same as 'undefined')
    threshold: 800, // In milliseconds
    captureEvent: true, // Event won't get cleared after React finish processing it
    cancelOnMovement: false, // Square side size (in pixels) inside which movement won't cancel long press
    cancelOutsideElement: true, // Cancel long press when moved mouse / pointer outside element while pressing
    detect: LongPressEventType.Mouse && LongPressEventType.Pointer && LongPressEventType.Touch
    });

    return (
        <div {...bind()} className="" data-testid={ManualBtnTestIds.toggleManualBtn}>
            <Tile image="/AAC_assets/img/standard/manual.png" text="" tileColor="blue" />
        </div>
    );
}
