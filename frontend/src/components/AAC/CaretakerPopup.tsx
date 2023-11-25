import React, { useState, useRef, useEffect } from 'react';

import { useCaretakerProviderContext } from "@/react-state-management/providers/CaretakerPopupProvider";


export default function CaretakerPopup() {
    const {title, onClose, onOk} = useCaretakerProviderContext();

    const dialogRef = useRef<null | HTMLDialogElement>(null);
    const [showDialog, setShowDialog] = useState(true);

    useEffect(() => {
        if(showDialog === true) {
            dialogRef.current?.show();
        } else {
            dialogRef.current?.close();
        }
    }, [showDialog]);

    const closeDialog = () => {
        dialogRef.current?.close();
        onClose();
    };

    const clickOk = () => {
        onOk();
        closeDialog();
    };

    const dialog: JSX.Element | null = showDialog === true 
    ? (
        <dialog ref={dialogRef}>
            <div className="w-[500px] max-w-fullbg-gray-200 flex flex-col">
                <div className="flex flex-row justify-between mb-4 pt-2 px-5 bg-yellow-400">
                    <h1 className="text-2xl">{title}</h1>
                    <button 
                    onClick={closeDialog} 
                    className="mb-2 py-1 px-2 cursor-pointer rounded border-none w-8 h-8 font-bold bg-red-600 text-white"
                    >
                        X
                    </button>
                </div>
                <div className="px-5 pb-6">
                    <p>This is some dialog text</p>
                    <div className="flex flex-row justify-end mt-2">
                        <button 
                        onClick={clickOk}
                        className="bg-green-500 py-1 px-2 rounded border-none"
                        >
                            OK
                        </button>
                    </div>
                </div>
            </div>
        </dialog>
    ) 
    : null;


    return dialog
}