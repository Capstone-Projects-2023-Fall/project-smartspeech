'use client';
import SelectedTilesActionBar from "@/components/AAC/SelectedTilesActionBar";
import Tiles from "@/components/AAC/Tiles";
import UtteredTilesProvider from "@/react-state-management/providers/useUtteredTiles";
import Canvas from "@/components/AAC/Canvas";

import React from "react";
import Login from "@/components/login";
import Head from "next/head";
import { signOut,useSession } from "next-auth/react";
import SignOut from "@/components/SignOut";


export default function Home() {
    const session = useSession();
    return (
        <>
        <div>
            <Head>
                <title> Smart Speech</title>
            </Head>

            <main className="main-inter flex justify-center">
                <h1 className="main-title">Welcome {session?.data?.user?.name} to Smart Speech! </h1>
            </main>
            <br/>
                <Login />
        </div>
        <SignOut/>

        </>
    );
}
