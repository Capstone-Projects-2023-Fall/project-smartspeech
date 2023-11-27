import { useCaretakerProviderContext } from "@/react-state-management/providers/CaretakerPopupProvider"

export const CaretakerPopupTitleTestIds = {
    titleContainer: "caretaker-title-container",
    closePopupBtn: "close-button",
}

export default function CaretakerPopupTitle(){

    const closeDialog = () => {
        setShowDialog(!showDialog);
        onClose();
    };

    const { title, onClose, showDialog, setShowDialog } = useCaretakerProviderContext();
    return (
        <div className="flex flex-row justify-between mb-4 pt-2 px-5 bg-yellow-400 rounded-lg"
        data-testid={CaretakerPopupTitleTestIds.titleContainer}>
            <h1 className="text-2xl">{title}</h1>
            <button 
                onClick={closeDialog} 
                data-testid={CaretakerPopupTitleTestIds.closePopupBtn}
                className="mb-2 py-1 px-2 cursor-pointer rounded border-none w-8 h-8 font-bold bg-red-600 text-white"
                >X
            </button>
        </div>
    )
}