"use client"
import {SessionProvider} from "next-auth/react";
import React from "react";
import { Session } from "next-auth";



export default function ProvidersWrapper({
    children,
}: {
    children: React.ReactNode
}) {
    return(
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}