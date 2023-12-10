import React from "react";
import Tiles from "./Tiles";
import Tile from "./Tile";
import { useManualModeModelContext } from "@/react-state-management/providers/ManualModalProvider";
import SelectedTilesActionBar from "./SelectedTilesActionBar";

export const ManualPopupTestIds = {
    exitManualBtn: "mpt-return-button",
};

export default function ManualTilesPopup() {
    const [isOpen, toggleModal] = useManualModeModelContext();
    const toggleModelHandler = () => toggleModal();

    return (
        <>
            {isOpen && (
                <div className="">
                    <section className="absolute bg-white z-20 top-0 left-0 right-0 bottom-0 w-screen h-screen">
                        <SelectedTilesActionBar />
                        <Tiles />
                        <div className="mt-5 flex justify-center" data-testid={ManualPopupTestIds.exitManualBtn} onClick={toggleModelHandler}>
                            <Tile image="/AAC_assets/img/standard/back_arrow.png" text="Return" tileColor="blue" />
                        </div>
                    </section>
                </div>
            )}
        </>
    );
}
