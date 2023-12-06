import useProtectedPageRoute from "@/react-helpers/hooks/useProtectedPageRoute";
import { useSession } from "next-auth/react";
import React from "react";

export default function CustomTiles() {
    const { data: session } = useSession();
    
	useProtectedPageRoute({
        rerouteAddr: "/",
    });

    return <div></div>;
}
