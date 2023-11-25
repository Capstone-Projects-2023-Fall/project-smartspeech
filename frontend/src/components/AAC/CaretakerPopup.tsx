import React, { useState, useRef, useEffect } from 'react';

import { useCaretakerProviderContext } from "@/react-state-management/providers/CaretakerPopupProvider";


export default function CaretakerPopup() {
    const {title, onClose, onOk} = useCaretakerProviderContext();

    const dialogRef = useRef<null | HTMLDialogElement>(null);
    const [showDialog, setShowDialog] = useState(true);
    console.log(showDialog)
    useEffect(() => {
        console.log(showDialog)
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
    console.log(showDialog)
    const dialog: JSX.Element | null = showDialog === true 
    ? (
        <dialog ref={dialogRef}>
            <div>
                <div>
                    <h1>{title}</h1>
                    <button onClick={closeDialog}
                    >X</button>
                </div>
                <div>
                    <p>This is some dialog text</p>
                    <div>
                        <button onClick={clickOk}
                        >OK</button>
                    </div>
                </div>
            </div>
        </dialog>
    ) 
    : null;


    return dialog
}