import { useCaretakerProviderContext } from "@/react-state-management/providers/CaretakerPopupProvider";
import { useState } from "react";

export const CaretakerPopupBodyTestIds = {
    bodyContainer: "body-component",
    okPopupBtn: "ok-button"
}

export default function CaretakerPopupBody() {
    const { onOk, doNotShow, body } = useCaretakerProviderContext();
    const [ checked, setChecked ] = useState(false);
    
    const handleChange = () => {
        setChecked(!checked);
        doNotShow(checked);
    }

    return (
        <div className="px-5 pb-6"
        data-testid={CaretakerPopupBodyTestIds.bodyContainer}>
            <p>{body}</p>
            <div className="flex flex-row items-end justify-between mt-2 rounded-lg">
                <div className="flex gap-2">
                    <input
                        type="checkbox"
                        checked={checked}
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