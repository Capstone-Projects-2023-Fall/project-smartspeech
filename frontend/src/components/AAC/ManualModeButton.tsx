import React, { useCallback } from "react";
import Tile from "./Tile";
import { useManualModeModelContext } from "@/react-state-management/providers/ManualModalProvider";
import { useLoginProviderContext } from "@/react-state-management/providers/LoginPopupProvider";

import { LongPressEventType, useLongPress } from "use-long-press";

export const ManualBtnTestIds = {
    toggleManualBtn: "mbt-return-button",
};

export default function ManualModeButton() {
    const [isOpen, toggleModal] = useManualModeModelContext();
    const [isLoginOpen, setLoginOpen] = useLoginProviderContext();

    const toggleLoginOpen = () => setLoginOpen((prev) => !prev);

    const toggleModelHandler = () => {
        toggleModal();
    }

    // const callback = useCallback(() => {
    //     console.log(isLoginOpen);
    //   }, []);

    const bind = useLongPress(() => {}, {
        onFinish: () => {
            console.log(isLoginOpen);
            toggleLoginOpen();
            console.log(isLoginOpen);
        },
        onCancel: toggleModelHandler,
        filterEvents: () => true, // All events can potentially trigger long press (same as 'undefined')
        threshold: 800, // In milliseconds
        captureEvent: true, // Event won't get cleared after React finish processing it
        cancelOnMovement: false, // Square side size (in pixels) inside which movement won't cancel long press
        cancelOutsideElement: false, // Cancel long press when moved mouse / pointer outside element while pressing
    });

    return (
        <div {...bind()} className="" data-testid={ManualBtnTestIds.toggleManualBtn}>
            <Tile image="/AAC_assets/img/standard/manual.png" text="" tileColor="blue" />
        </div>
    );
}
