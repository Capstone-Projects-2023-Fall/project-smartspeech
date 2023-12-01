import { useCaretakerProviderContext } from "@/react-state-management/providers/CaretakerPopupProvider";

import CaretakerPopupTitle from "@/components/AAC/CaretakerPopupTitle";
import CaretakerPopupBody from "@/components/AAC/CaretakerPopupBody";
import { useEffect } from "react";

export const CaretakerPopupTestIds = {
    mainWindow: "popup-window"
}

/**
 * Displays a popup overtop of the page to instruct caretakers on how to use the app
 */
export default function CaretakerPopup() {
    const {showDialog, setShowDialog} = useCaretakerProviderContext();

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
        const timeoutId = setTimeout(() => setShowDialog(userPreference), 10);
        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <>
            {showDialog && (
                <div className="custom-fade-in z-50 backdrop-blur-md absolute left-0 top-0 w-screen h-screen flex justify-center items-center"
                data-testid={CaretakerPopupTestIds.mainWindow}>
                    <section className="w-[500px] bg-gray-200 flex flex-col rounded-lg">
                        <CaretakerPopupTitle />
                        <CaretakerPopupBody />
                    </section>
                </div>
            )}  
        </>
        );
}