import { useCaretakerProviderContext } from "@/react-state-management/providers/CaretakerPopupProvider";

export const CaretakerPopupBodyTestIds = {
    bodyContainer: "body-component",
    okPopupBtn: "ok-button",
    doNotShowBtn: "dont-show"
}

export default function CaretakerPopupBody() {
    const { onOk, doNotShow, body, preferenceCheck, setPreferenceCheck} = useCaretakerProviderContext();

    
    const handleChange = () => {
        setPreferenceCheck(!preferenceCheck);
        doNotShow(preferenceCheck);
    }

    return (
        <div className="px-5 pb-6"
        data-testid={CaretakerPopupBodyTestIds.bodyContainer}>
            <p>{body}</p>
            <div className="flex flex-row items-end justify-between mt-2 rounded-lg">
                <div className="flex gap-2">
                    <input
                        type="checkbox"
                        data-testid={CaretakerPopupBodyTestIds.doNotShowBtn}
                        checked={preferenceCheck}
                        onChange={handleChange}
                        className="bg-green-500 py-1 px-2 rounded border-none"
                    />
                    <label className="text-sm">
                        Don't show again 
                    </label> 
                </div>
                <button 
                onClick={onOk}
                data-testid={CaretakerPopupBodyTestIds.okPopupBtn}
                className="bg-green-500 py-1 px-2 rounded border-none text-sm">
                    OK
                </button>
            </div>
        </div>
    )
}