import SelectedTilesActionBar from "@/components/AAC/SelectedTilesActionBar";
import Tiles from "@/components/AAC/Tiles";
import UtteredTilesProvider from "@/react-state-management/providers/useUtteredTiles";
import Canvas from "@/components/AAC/Canvas";

import React from 'react'

export default async function Home() {
    // const session = await getServerSession(options)
    //const [session, loading] = useSession()
    return (
        <div>
            <section className="font-inter">
                    <UtteredTilesProvider>
                        <SelectedTilesActionBar />
                        <Tiles />
                    </UtteredTilesProvider>
                    <Canvas />
            </section>
        </div>
    )
}