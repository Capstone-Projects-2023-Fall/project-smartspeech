import React, { createContext, useContext, useState, Dispatch, SetStateAction } from "react";

interface CaretakerPopupType {
    title: string,
    body: string,
    onClose: () => void,
    onOk: () => void,
    showDialog: boolean,
    setShowDialog: Dispatch<SetStateAction<boolean>>,
    preferenceCheck: boolean,
    setPreferenceCheck: Dispatch<SetStateAction<boolean>>,
    doNotShow: (checked: boolean) => void,
}

const CaretakerPopupContext = createContext<CaretakerPopupType>({
    title: "",
    body: "",
    onClose() {},
    onOk() {},
    showDialog: false,
    setShowDialog() {},
    preferenceCheck: false,
    setPreferenceCheck() {},
    doNotShow() {}
});

export type CaretakerProviderProps = {children: React.ReactNode}

export const useCaretakerProviderContext = () => useContext(CaretakerPopupContext);

/**
 * @param props props that contains the children to be rendered along with dialog metadata
 * @returns Provider with children rendered
 */
export default function CaretakerPopupProvider(props: CaretakerProviderProps) {
    const title = "Welcome to Smart Speech!";
    const body = "To access Caretaker features, please long-press on the manual button";
    const [showDialog, setShowDialog] = useState(false);
    const [preferenceCheck, setPreferenceCheck] = useState(false);

    const onClose = () => {
        console.log("Dialog close was pressed");
        setShowDialog(false);
    }

    const onOk = () => {
        console.log("Dialog ok was pressed");
        onClose();
    }

    const doNotShow = (checked: boolean) => {
        console.log("Don't show was clicked");
        try{
            localStorage.setItem("SHOW_CARETAKER_POPUP", String(checked));
            console.log("User popup preference saved");
        } catch(e){
            console.log("Failed to save popup preferences");
        }
    }

    const value: CaretakerPopupType = {
        title,
        body,
        onClose,
        onOk,
        showDialog,
        setShowDialog,
        doNotShow,
        preferenceCheck,
        setPreferenceCheck
    }
    return <CaretakerPopupContext.Provider value={value}>{props.children}</CaretakerPopupContext.Provider>;
}
