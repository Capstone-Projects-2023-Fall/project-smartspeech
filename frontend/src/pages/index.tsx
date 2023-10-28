import SelectedTilesActionBar from "@/components/AAC/SelectedTilesActionBar";
import Tiles from "@/components/AAC/Tiles";
import UtteredTilesProvider from "@/react-state-management/providers/useUtteredTiles";
import Canvas from "@/components/AAC/Canvas";
import SuggestedTiles from "@/components/AAC/SuggestedTile";
import RecentlyClickedTiles from "@/components/AAC/RecentlyClickedTiles";
import RekognitionProvider from "@/react-state-management/providers/useRekognition";

/**
 *
 * @returns the homepage for this app
 */
export default function Home() {
    return (
        <section className="font-inter">
            <RekognitionProvider>
                <UtteredTilesProvider>
                    <SelectedTilesActionBar />
                    <Canvas />
                    <RecentlyClickedTiles />
                    <SuggestedTiles />
                    <Tiles />
                </UtteredTilesProvider>
            </RekognitionProvider>
        </section>
    );
}
