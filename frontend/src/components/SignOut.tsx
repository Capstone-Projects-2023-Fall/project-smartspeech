"use client";
import SelectedTilesActionBar from "@/components/AAC/SelectedTilesActionBar";
import Tiles from "@/components/AAC/Tiles";
import UtteredTilesProvider from "@/react-state-management/providers/useUtteredTiles";
import Canvas from "@/components/AAC/Canvas";

import React from "react";
import { signOut, useSession } from "next-auth/react";

export default function SignOut(){
    const session = useSession();
    return(
        <>
        <h1 className="main-title">Welcome {session?.data?.user?.name} to Smart Speech!</h1>
        
        <div>
            <section className="font-inter">
                <UtteredTilesProvider>
                    <SelectedTilesActionBar />
                    <Tiles />
                </UtteredTilesProvider>
                <Canvas />
            </section>
        </div>

        <button onClick={() =>  signOut()}>Logout</button>
        </>
    )
}
