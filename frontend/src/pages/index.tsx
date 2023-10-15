'use client';
import SelectedTilesActionBar from "@/components/AAC/SelectedTilesActionBar";
import Tiles from "@/components/AAC/Tiles";
import UtteredTilesProvider from "@/react-state-management/providers/useUtteredTiles";
import Canvas from "@/components/AAC/Canvas";

import React from "react";
import Login from "@/components/login";
import Head from "next/head";
import { signOut,useSession } from "next-auth/react";
import SignOut from "@/components/Signout";


export default function Home() {
    const session = useSession();
    return (
        <>
        <div>
            <Head>
                <title> Smart Speech</title>
            </Head>

            <main className="main-inter">
                <h1 className="main-title">Welcome to Smart Speech</h1>
                <Login />
            </main>
        </div>
        <SignOut/>

        </>
    );
}
