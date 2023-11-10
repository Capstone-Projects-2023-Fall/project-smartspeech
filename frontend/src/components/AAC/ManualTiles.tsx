import useModal from "@/react-helpers/hooks/useModal";
import React from "react";
import Tiles from "./Tiles";
import Tile from "./Tile";

const ManualModeTestIds = {
    manualBtn: "manual-btn",
};

export default function ManualTiles() {
    const [isOpen, toggleModal] = useModal();
    const toggleModelHandler = () => toggleModal();

    return (
        <>
            {isOpen && (
                <section className="absolute bg-white z-20 top-[100%] left-0 right-0">
                    <Tiles />
                    <div className="mt-5 flex justify-center" onClick={toggleModelHandler}>
                        <Tile image="/AAC_assets/img/standard/back_arrow.png" text="Return" tileColor="blue" />
                    </div>
                </section>
            )}
            {!isOpen && <div onClick={toggleModelHandler} data-testid={ManualModeTestIds.manualBtn}>
                <Tile image="/AAC_assets/img/standard/manual.png" text="" tileColor="blue" />
            </div>}
        </>
    );
}
