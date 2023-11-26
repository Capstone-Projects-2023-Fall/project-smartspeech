import { useCaretakerProviderContext } from "@/react-state-management/providers/CaretakerPopupProvider";
import { useState } from "react";

interface CaretakerPopupBodyType {
    bodyText: string
}

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
            <div className="flex flex-row justify-beginning mt-2 rounded-lg">
                <label>
                    <input
                        type="checkbox"
                        checked={checked}
                        onChange={handleChange}
                        className="bg-green-500 py-1 px-2 rounded border-none"
                        />
                        Don't show again 
                </label> 
            </div>
            <div className="flex flex-row justify-end mt-2 rounded-lg">
                <button 
                    onClick={onOk}
                    data-testid={CaretakerPopupBodyTestIds.okPopupBtn}
                    className="bg-green-500 py-1 px-2 rounded border-none"
                    >OK
                </button>
            </div>
        </div>
    )
}