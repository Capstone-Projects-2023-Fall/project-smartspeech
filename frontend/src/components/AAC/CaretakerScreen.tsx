import { useLoginProviderContext } from "@/react-state-management/providers/LoginPopupProvider";
import React from "react";
import Tile from "./Tile";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function CaretakerScreen(props: {}) {
    const { status } = useSession();
    const router = useRouter();
    const [isLoginOpen, _] = useLoginProviderContext();

    const loginComponent =
        status === "authenticated" ? (
            <div onClick={(_) => signOut()}>
                <Tile image="/AAC_assets/img/caretaker/logout.svg" text="logout" tileColor="blue" />
            </div>
        ) : (
            <div
                onClick={(_) => {
                    signIn(undefined, { callbackUrl: "/custom-tiles" });
                }}
            >
                <Tile image="/AAC_assets/img/caretaker/login.svg" text="login" tileColor="blue" />
            </div>
        );

    return isLoginOpen && loginComponent;
}
