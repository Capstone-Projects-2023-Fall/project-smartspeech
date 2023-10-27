import SelectedTilesActionBar from "@/components/AAC/SelectedTilesActionBar";
import Tiles from "@/components/AAC/Tiles";
import UtteredTilesProvider from "@/react-state-management/providers/useUtteredTiles";
import Canvas from "@/components/AAC/Canvas";
import SuggestedTiles from "@/components/AAC/SuggestedTile";
import RecentlyClickedTiles from "@/components/AAC/RecentlyClickedTiles";
import ManualTile from "@/components/AAC/ManualTile";


/**
 *
 * @returns the homepage for this app
 */
export default function Home() {
    return (
        <section className="font-inter">
            <UtteredTilesProvider>
                <SelectedTilesActionBar />
                <Canvas />
                <RecentlyClickedTiles />
                <ManualTile />
                <SuggestedTiles />
                <Tiles />
            </UtteredTilesProvider>
        </section>
    );
}
