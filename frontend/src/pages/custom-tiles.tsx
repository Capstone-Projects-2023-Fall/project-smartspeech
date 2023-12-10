import AddCustomTile from "@/components/CustomTiles/AddCustomTile";
import CurrentTiles from "@/components/CustomTiles/CurrentTiles";
import Navbar from "@/components/CustomTiles/Navbar";
import DangerAlert from "@/components/util/DangerAlert";
import { CustomTilesLoadingSpinner } from "@/components/util/LoadingSpinner";
import TileProvider from "@/react-state-management/providers/tileProvider";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

export default function CustomTiles() {
    const { data: session, status } = useSession();

    let toRender: React.ReactNode = null;

    if (status === "loading") {
        toRender = (
            <>
                <Navbar />
                <div className="my-6 w-full flex flex-col items-center gap-4">
                    <CustomTilesLoadingSpinner />
                    <p className="font-semibold text-xl mt-4">Loading Your Information.</p>
                </div>
            </>
        );
    }

    if (status === "authenticated")
        toRender = (
            <>
                <Navbar />
                <CurrentTiles />
                <hr className="my-8"/>
                <AddCustomTile/>
            </>
        );

    if (status === "unauthenticated") {
        toRender = (
            <>
                <Navbar />
                <section className="p-4 font-semi">
                    <DangerAlert>
                        You are currently not signed in. Please{" "}
                        <Link href="#" onClick={() => signIn()} className="font-semibold hover:text-blue-600 underline">
                            Sign in
                        </Link>{" "}
                        to access the Custom Tiles feature.
                    </DangerAlert>
                </section>
            </>
        );
    }

    return (
        <div className="font-inter">
            <TileProvider>{toRender}</TileProvider>
        </div>
    );
}
