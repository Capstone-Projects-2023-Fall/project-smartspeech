import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import SuggestedTiles from "./SuggestedTile";
import { computeTileContainerName } from "./Tile";
import SuggestedTilesProvider, { SuggestedTilesProviderProps } from "../../react-state-management/providers/SuggestedTilesProvider";

const stopTile = {
    image: "/AAC_assets/img/standard/stop.png",
    text: "Stop",
    sound: "Stop",
    tileColor: "red",
};

const goTile = {
    image: "/AAC_assets/img/standard/go.png",
    text: "Go",
    sound: "Go",
    tileColor: "green",
};

jest.mock("../../react-state-management/providers/SuggestedTilesProvider", () => ({
    __esModule: true,
    default: ({ children }: SuggestedTilesProviderProps) => <div>{children}</div>,
    useSuggestedTilesContext: () => ({
        tiles: [stopTile, goTile],
    }),
}));

describe("Renders placeholder text for suggested tiles", () => {
    it("should render", () => {
        render(
            <SuggestedTilesProvider>
                <SuggestedTiles />
            </SuggestedTilesProvider>
        );

        const container = screen.getByTestId("tiles-container");
        expect(container).toBeInTheDocument();

        [stopTile, goTile].forEach((tile) => {
            const tileContainer = screen.queryByTestId(computeTileContainerName(tile.text));
            expect(tileContainer).toBeInTheDocument();
        });
    });
});
