import React from "react";
import Tile from "./Tile";
import { useManualModeModelContext } from "@/react-state-management/providers/ManualModalProvider";

export const ManualBtnTestIds = {
    exitManualBtn: "mbt-return-button",
};

export default function ManualModeButton() {
    const [isOpen, toggleModal] = useManualModeModelContext();
    const toggleModelHandler = () => toggleModal();

    return (
        <div className="" onClick={toggleModelHandler} data-testid={ManualBtnTestIds.exitManualBtn}>
            <Tile image="/AAC_assets/img/standard/manual.png" text="" tileColor="blue" />
        </div>
    );
}
