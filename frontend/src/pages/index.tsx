import SelectedTilesActionBar from "@/components/AAC/SelectedTilesActionBar";
import Tiles from "@/components/AAC/Tiles";
import UtteredTilesProvider from "@/react-state-management/providers/useUtteredTiles";
import Canvas from "@/components/AAC/Canvas";

import React from 'react'
import { options } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import  {UserCard} from "@/components/Users/userCard";
import ProvidersWrapper from "@/react-state-management/providers/providersWrapper";
import Login from "@/components/login";
import Head from "next/head";


export default async function Home() {
   // const session = await getServerSession(options)
    //const [session, loading] = useSession()
    return (
        <div>
            <Head>
                <title> Smart Speech</title>
            </Head>

            <main className="main-inter">
                <h1 className="main-title">Welcome to Smart Speech</h1>
                <Login/>
            </main>
        </div>

/*
        <div>
            <section className="font-inter">
                    <Login/> 
                    <UtteredTilesProvider>
                        <SelectedTilesActionBar />
                        <Tiles />
                    </UtteredTilesProvider>
                    <Canvas />
            </section>
        </div>
    */
    );
}