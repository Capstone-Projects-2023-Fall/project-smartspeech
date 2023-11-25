import { useCaretakerProviderContext } from "@/react-state-management/providers/CaretakerPopupProvider";

import CaretakerPopupTitle from "@/components/AAC/CaretakerPopupTitle";
import CaretakerPopupBody from "@/components/AAC/CaretakerPopupBody";

export const CaretakerPopupTestIds = {
    mainWindow: "popup-window"
}

export default function CaretakerPopup() {
    const {title, onClose, onOk, isOpen, toggleDialog} = useCaretakerProviderContext();

    const closeDialog = () => {
        toggleDialog();
        onClose();
    };

    const clickOk = () => {
        onOk();
        closeDialog();
    };

    return (
        <>
            {isOpen && (
                <div className="absolute right-0 absolute top-1/2 left-1/2 transform -translate-x-1/3 -translate-y-1/2 z-20 backdrop:bg-gray-800/50" data-testid={CaretakerPopupTestIds.mainWindow}>
                    <section className="w-[500px] max-w-full bg-gray-200 flex flex-col rounded-lg">
                        <CaretakerPopupTitle title={title} closeDialog={closeDialog}/>
                        <CaretakerPopupBody bodyText="This is example caretaker instruction text" clickOk={clickOk}/>
                    </section>
                </div>
            )}  
        </>
        )
}