import useModal from "@/react-helpers/hooks/useModal";
import React, { useState } from "react";
import Tiles from "./Tiles";
import Tile from "./Tile";
import { useManualModeModelContext } from "@/react-state-management/providers/ManualModalProvider";
import { useLoginProviderContext } from "@/react-state-management/providers/LoginPopupProvider";
import SelectedTilesActionBar from "./SelectedTilesActionBar";
import CustomTileInput from "./CustomTileInput";
import CustomTileForm from "./CustomTileForm";

export const ManualPopupTestIds = {
    exitManualBtn: "mpt-return-button",
};

export default function ManualTilesPopup() {
    const [isOpen, toggleModal] = useManualModeModelContext();
    const toggleModelHandler = () => toggleModal();
    const [isLoginOpen, setLoginOpen] = useLoginProviderContext();
    const toggleLoginOpen = () => setLoginOpen();
    const toggleCustom = CustomTileForm;

    const [showCustomTileForm, setShowCustomTileForm] = useState(false);


    const handleClick = (event: any) => {
        // 👇️ toggle shown state
        setShowCustomTileForm(current => !current);

        // 👇️ or simply set it to true
        // setIsShown(true);
    };
    
    return (
        <>
            {isOpen && (
                <div className="">
                    <section className="absolute bg-white z-20 top-0 left-0 right-0 bottom-0 w-screen h-screen">
                        <SelectedTilesActionBar />
                        <Tiles />
                        <div>
                            {isLoginOpen
                                ? <div className="flex gap-2 gap-4 p-2 justify-center">
                                    <div className="mt-5  flex  justify-center" data-testid={ManualPopupTestIds.exitManualBtn} onClick={toggleModelHandler}>
                                        <Tile image="/AAC_assets/img/standard/back_arrow.png" text="Return" tileColor="blue" />
                                    </div>
                                        
                                    <div className="flex flex-col">
                                    <div className="mt-5 flex justify-center" data-testid={ManualPopupTestIds.exitManualBtn} onClick={handleClick}>
                                        <Tile image="/AAC_assets/img/standard/edit_1.png" text="Custom Tile" tileColor="purple" />
                                    </div>
                                        {/* 👇️ show component on click */}
                                        {showCustomTileForm && <CustomTileForm />}
                                    </div>
                                    
                                  </div>  
                                : <div className="mt-5 flex justify-center" data-testid={ManualPopupTestIds.exitManualBtn} onClick={toggleModelHandler}>
                                    <Tile image="/AAC_assets/img/standard/back_arrow.png" text="Return" tileColor="blue" />
                                  </div>       
                            }
                        </div>
                    </section>
                </div>
            )}
        </>
    );
}
