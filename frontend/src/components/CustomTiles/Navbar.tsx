import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

export const NavbarTestIds = {
    container: "navbar-container",
    linkToHome: "navbar-link-home",
    linkbarContainer: "navbar-LB-container",
    signOutBtn: "navbar-sign-out-btn",
};

export default function Navbar() {
    const { status } = useSession();

    return (
        <nav className="bg-white dark:bg-gray-900 border-black border-b-2 shadow-xl" data-testid={NavbarTestIds.container}>
            <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
                <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse" data-testid={NavbarTestIds.linkToHome}>
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">SmartSpeech Custom-Tiles</span>
                </Link>
                <div className="inlineflex align-center font-xl" data-testid={NavbarTestIds.linkbarContainer}>
                    <Link href="/" className="mr-4" data-testid={""}>
                        <span className="">Home</span>
                    </Link>
                    <Link href="#" className="mr-4" data-testid={""}>
                        <span className="">Custom Tiles</span>
                    </Link>
                    {status === "authenticated" && (
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            data-testid={NavbarTestIds.signOutBtn}
                            onClick={() => signOut()}
                        >
                            Sign Out
                        </button>
                    )}
                </div>
            </div>
        </nav>
    );
}
