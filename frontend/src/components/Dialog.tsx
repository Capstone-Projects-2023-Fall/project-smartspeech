import React, { useState, useRef, useEffect } from 'react';

export interface DialogProps {
    /**
     * Title of the dialog box
     */
    title: string,
    /**
     * Dialog close button handler 
     * @returns void
     */
    onClose: () => void,
    /**
     * Dialog ok button handler
     * @returns void
     */
    onOk: () => void,
    /**
     * Children of the dialog
     */
    children: React.ReactNode
}

export default function Dialog({title, onClose, onOk, children}: DialogProps) {

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
            <div>
                <div>
                    <h1>title</h1>
                    <button onClick={closeDialog}
                    >X</button>
                </div>
                <div>
                    {children}
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