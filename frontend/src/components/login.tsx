"use client";
import SelectedTilesActionBar from "@/components/AAC/SelectedTilesActionBar";
import Tiles from "@/components/AAC/Tiles";
import UtteredTilesProvider from "@/react-state-management/providers/useUtteredTiles";
import Canvas from "@/components/AAC/Canvas";

import React, { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import SuggestedTiles from "./AAC/SuggestedTile";

export default function Login() {
    const { data: session, status } = useSession();

    const [isOpen, toggleLoginScreen] = useState(false);

    if (status === "authenticated") {
        return ( 
            <>
                { isOpen && (
                    <div className="bg-white flex flex-col justify-center items-center">
                        <p>Signed in as {session?.user?.email}</p>
                    </div>

                    <div>
                        <section className="font-inter"></section>
                    </div>

                    <div className="bg-white flex flex-col justify-center items-center">
                        <br />
                        <button className="bg-gray-300 p-2 rounded hover:shadow-xl" onClick={() => signOut()}>
                            Logout
                        </button>
                        <br />
                    </div>
                )}
            </>
        );
    }
    return (
        <>
            { isOpen && (
                <div className="bg-white flex flex-col justify-center items-center">
                    <button className="bg-gray-300 p-2 rounded hover:shadow-xl" onClick={() => signIn()}>
                        Sign In
                    </button>
                </div>
            )}
        </>
    );
}
