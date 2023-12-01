import useModal, { useModalReturnType } from "@/react-helpers/hooks/useModal";
import { EMPTY_FUNCTION } from "@/util/constants";
import React, { createContext, useContext } from "react";

const ManualModeModalContext = createContext<useModalReturnType>([false, EMPTY_FUNCTION]);

export const useManualModeModelContext = () => useContext(ManualModeModalContext);
export type ModalProviderProps = { children: React.ReactNode };

/**
 * @param props props that contains the children to be rendered
 * @returns Provider with children rendered
 */
export default function ModalProvider(props: ModalProviderProps) {
    const [isOpen, toggleModal] = useModal(false);
    return <ManualModeModalContext.Provider value={[isOpen, toggleModal]}>{props.children}</ManualModeModalContext.Provider>;
}
