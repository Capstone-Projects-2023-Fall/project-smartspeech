import MiniTile from "@/components/AAC/MiniTile";
import SelectedTilesActionBar from "@/components/AAC/SelectedTilesActionBar";
import Tiles from "@/components/AAC/Tiles";
import UtteredTilesProvider from "@/react-state-management/providers/useUtteredTiles";

export default function Home() {
    return (
        <section className="font-inter">
            <UtteredTilesProvider>
                <SelectedTilesActionBar />
                <Tiles />
            </UtteredTilesProvider>
        </section>
    );
}
