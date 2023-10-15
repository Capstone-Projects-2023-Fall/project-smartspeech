import PWAMeta from "@/components/AAC/PWAMeta";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Inter, Poppins } from "next/font/google";
import Head from "next/head";

import ProvidersWrapper from "@/react-state-management/providers/providersWrapper";
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]";
import { SessionProvider } from "next-auth/react";
import React from "react";
import Login from "@/components/login";
import Home from "./";

//localhost:3000

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["500", "600", "900"],
});
export default async function App({children,}:{children: React.ReactNode}){
/*export default function App({ Component, pageProps}: AppProps) {*/
  const  session = await getServerSession(options);
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          {!session ? (
            <Login/>
          ):(
            <Home/>
          )}
        </SessionProvider> 
      </body>
    </html>
    /*
    <>
      <ProvidersWrapper>
        <Head>
          <meta charSet="utf-8" />
          <PWAMeta />
        </Head>
        <main className={`${inter.variable} ${poppins.variable} bg-dark-bg`}>
          <Component {...pageProps} />
        </main>
      </ProvidersWrapper>
    </>
    */
  );
}
