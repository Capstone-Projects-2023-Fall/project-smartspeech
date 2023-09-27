'use-client'

import Tiles from "@/components/AAC/Tiles";
import Canvas from "@/components/AAC/Canvas";

export default function Home() {
    return (
        <section className="font-inter">
            <Canvas />
            <Tiles />
        </section>
    );
}