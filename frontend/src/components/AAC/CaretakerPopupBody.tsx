interface CaretakerPopupBodyType {
    bodyText: string,
    clickOk: () => void
}

export const CaretakerPopupBodyTestIds = {
    okPopupBtn: "ok-button"
}

export default function CaretakerPopupBody({bodyText, clickOk}: CaretakerPopupBodyType) {
    return (
        <div className="px-5 pb-6">
            <p>{bodyText}</p>
            <div className="flex flex-row justify-end mt-2 rounded-lg">
                <button 
                    onClick={clickOk}
                    data-testid={CaretakerPopupBodyTestIds.okPopupBtn}
                    className="bg-green-500 py-1 px-2 rounded border-none"
                    >OK
                </button>
            </div>
        </div>
    )
}