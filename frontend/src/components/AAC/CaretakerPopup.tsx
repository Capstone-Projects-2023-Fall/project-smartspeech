import { useCaretakerProviderContext } from "@/react-state-management/providers/CaretakerPopupProvider";

import CaretakerPopupTitle from "@/components/AAC/CaretakerPopupTitle";
import CaretakerPopupBody from "@/components/AAC/CaretakerPopupBody";
import { useEffect, useLayoutEffect } from "react";

export const CaretakerPopupTestIds = {
    mainWindow: "popup-window"
}

export default function CaretakerPopup() {
    const {onClose, showDialog, setShowDialog} = useCaretakerProviderContext();

    useEffect(() => {
        let userPreference = true;
        try {
            const localPreference = localStorage.getItem("SHOW_CARETAKER_POPUP");
            if(localPreference !== null){
                userPreference = localPreference === "true";
                if(!userPreference){
                    setShowDialog(userPreference);
                }
            }
        } catch(e){
            console.error("Failed to read user popup preferences");
            userPreference = true;
        }
        const timeoutId = setTimeout(() => setShowDialog(userPreference), 1000);
        return () => clearTimeout(timeoutId);
    }, []);

    const closeDialog = () => {
        setShowDialog(!showDialog);
        onClose();
    };

    return (
        <>
            {showDialog && (
                <div className="z-50 backdrop-blur-md absolute left-0 top-0 w-screen h-screen flex justify-center items-center"
                data-testid={CaretakerPopupTestIds.mainWindow}>
                    <section className="w-[500px] bg-gray-200 flex flex-col rounded-lg">
                        <CaretakerPopupTitle closeDialog={closeDialog}/>
                        <CaretakerPopupBody />
                    </section>
                </div>
            )}  
        </>
        );
}