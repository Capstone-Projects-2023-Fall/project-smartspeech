import React, { createContext, useContext } from "react";

interface CaretakerPopupType {
    title: string,
    onClose: () => void,
    onOk: () => void,
}

const CaretakerPopupContext = createContext<CaretakerPopupType>({
    title: "",
    onClose() {},
    onOk() {},
});

export type CaretakerPopupProps = { 
    title: string, 
    onClose: () => void,
    onOk: () => void
};

export type CaretakerProviderProps = {children: React.ReactNode}

export const useCaretakerProviderContext = () => useContext(CaretakerPopupContext);

/**
 * @param props props that contains the children to be rendered along with dialog metadata
 * @returns Provider with children rendered
 */
export default function CaretakerPopupProvider(props: CaretakerProviderProps) {
    const title = "Example Title";

    const onClose = () => {
        console.log("Dialog close was pressed");
    }

    const onOk = () => {
        console.log("Dialog ok was pressed");
    }
    const value: CaretakerPopupType = {
        title,
        onClose,
        onOk,
    }
    return <CaretakerPopupContext.Provider value={value}>{props.children}</CaretakerPopupContext.Provider>;
}
