'use client';

import React from "react";
import Login from "@/components/login";
import Head from "next/head";
import {useSession } from "next-auth/react";

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
        </>
    );
}