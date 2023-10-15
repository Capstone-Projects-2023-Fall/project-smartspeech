"use client"
import {SessionProvider} from "next-auth/react";
import React from "react";
import { Session } from "next-auth";

type  Props =  {
    children: React.ReactNode;
    session: Session | null;
}

export default function ProvidersWrapper({children,session}: Props){
    return(
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}