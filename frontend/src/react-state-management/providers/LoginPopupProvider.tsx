import { EMPTY_FUNCTION } from "@/util/constants";
import React, { createContext, useContext, useState } from "react";

type LoginPopupType = [boolean, () => void];

const LoginPopupContext = createContext<LoginPopupType>([false, EMPTY_FUNCTION]);

export type LoginPopupProviderProps = {children: React.ReactNode}

export const useLoginProviderContext = () => useContext(LoginPopupContext);

/**
 * @param props props that contains the children to be rendered along with dialog metadata
 * @returns Provider with children rendered
 */
export default function LoginPopupProvider(props: LoginPopupProviderProps) {
    const [isLoginOpen, setLoginOpen] = useState(false);
    const toggleLoginOpen = () => setLoginOpen((prev) => !prev);

    return <LoginPopupContext.Provider value={[isLoginOpen, toggleLoginOpen]}>{props.children}</LoginPopupContext.Provider>;
}
