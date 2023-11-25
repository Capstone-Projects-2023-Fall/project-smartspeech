interface CaretakerPopupTitleProps {
    title: string,
    closeDialog: () => void
}

export default function CaretakerPopupTitle({title, closeDialog}: CaretakerPopupTitleProps){
    return (
        <div className="flex flex-row justify-between mb-4 pt-2 px-5 bg-yellow-400 rounded-lg">
            <h1 className="text-2xl">{title}</h1>
            <button 
                onClick={closeDialog} 
                className="mb-2 py-1 px-2 cursor-pointer rounded border-none w-8 h-8 font-bold bg-red-600 text-white"
                >X
            </button>
        </div>
    )
}