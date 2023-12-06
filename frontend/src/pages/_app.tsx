import PWAMeta from "@/components/AAC/PWAMeta";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Inter, Poppins } from "next/font/google";
import Head from "next/head";

import { useEffect } from "react";

import React from "react";
import { getBackendUrl } from "@/util/backend-url";
import { SessionProvider } from "next-auth/react";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

const poppins = Poppins({
    subsets: ["latin"],
    variable: "--font-poppins",
    weight: ["500", "600", "900"],
});

export default function App({ Component, pageProps }: AppProps) {
    useEffect(() => {
        console.log("Using backendUrl:", getBackendUrl());
    }, []);

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <PWAMeta />
            </Head>
            <main className={`${inter.variable} ${poppins.variable} bg-dark-bg`}>
                <SessionProvider session={pageProps.session}>
                    <Component {...pageProps} />
                </SessionProvider>
            </main>
        </>
    );
}
