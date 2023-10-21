"use client";
import SelectedTilesActionBar from "@/components/AAC/SelectedTilesActionBar";
import Tiles from "@/components/AAC/Tiles";
import UtteredTilesProvider from "@/react-state-management/providers/useUtteredTiles";
import Canvas from "@/components/AAC/Canvas";

import React from "react";
import {signIn, signOut, useSession } from "next-auth/react";

export default function Login() {
  const { data: session, status } = useSession()
  if(status === 'authenticated'){
    return(
      <>
      <p>Signed in as {session?.user?.email}</p>
      <div>
            <section className="font-inter">
                <UtteredTilesProvider>
                    <SelectedTilesActionBar />
                    <Tiles />
                </UtteredTilesProvider>
                <Canvas />
            </section>
        </div>

        <div className="bg-white flex flex-col justify-center items-center">
        <br />
        <button className="bg-gray-300 p-2 rounded hover:shadow-xl" onClick={() =>  signOut()}>Logout</button>
        <br />
        </div>
      </>
    )
  }

  return (
    <div className="bg-white flex flex-col justify-center items-center">
      <button className="bg-gray-300 p-2 rounded hover:shadow-xl" onClick={() => signIn()}>Sign In</button>
      <br /> Not Signed In Yet. <br />
    </div>
  )  
}