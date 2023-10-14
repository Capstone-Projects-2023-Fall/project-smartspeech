"use client"
import React from "react";
import Head from "next/head"
import Link from "next/link";
import {useSession, signIn, signOut} from "next-auth/react";
import { UserCard } from "./Users/userCard";

export default function Login(){
  // get session from nextAuth
  const {data: session} = useSession();
    if (session) {
        return (
          <>
            Signed in <br />
            <button>
              <Link href="/tiles/index.tsx"> To the tiles pages</Link>
            </button>
            <button onClick={() => signOut()} type="button" className="btn btn-primary">Sign out</button>
            {/* Pass session info to server component */}
            <UserCard user={session?.user}/>
          </> 
        )
      } else {
        return (
          <>
            Not signed in <br />
            <button onClick={() => signIn()} type="button" className="btn btn-primary">Sign in</button>
          </>
        );
      }
}
