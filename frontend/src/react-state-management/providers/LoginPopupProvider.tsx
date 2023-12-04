import { EMPTY_FUNCTION } from "@/util/constants";
import React, { createContext, useContext, useState, Dispatch, SetStateAction } from "react";

type LoginPopupType = [boolean, Dispatch<SetStateAction<boolean>>];

const LoginPopupContext = createContext<LoginPopupType>([false, EMPTY_FUNCTION]);

export type LoginPopupProviderProps = {children: React.ReactNode}

export const useLoginProviderContext = () => useContext(LoginPopupContext);

/**
 * @param props props that contains the children to be rendered along with dialog metadata
 * @returns Provider with children rendered
 */
export default function LoginPopupProvider(props: LoginPopupProviderProps) {
    const [isLoginOpen, setLoginOpen] = useState(false);

    const value: LoginPopupType = [isLoginOpen, setLoginOpen];

    return <LoginPopupContext.Provider value={value}>{props.children}</LoginPopupContext.Provider>;
}
