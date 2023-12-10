import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import UtteredTilesProvider, { UtteredTilesProviderProps } from "../../react-state-management/providers/useUtteredTiles";
import RecentlyClickedTiles, { recentlyClickedTilesIds } from "./RecentlyClickedTiles";
import { TileHistoryTileProps } from "@/react-state-management/reducers/tileHistoryReducer";
import { computeTileContainerName } from "./Tile";

const tileHistory: TileHistoryTileProps[] = [
    {
        image: "/AAC_assets/img/feelings/love.png",
        sound: "Love",
        text: "Love",
        tileColor: "blue",
        rank: 1698173549922,
    },
    {
        image: "/AAC_assets/img/clothes/pants.png",
        sound: "Pants",
        text: "Pants",
        tileColor: "purple",
        rank: 1698173545016,
    },
    {
        image: "/AAC_assets/img/this/could.png",
        sound: "Could",
        text: "Could",
        tileColor: "blue",
        rank: 1698173540440,
    },
];

jest.mock("../../react-state-management/providers/useUtteredTiles", () => ({
    __esModule: true,
    default: ({ children }: UtteredTilesProviderProps) => <div>{children}</div>,
    useUtteredTiles: () => ({
        tileHistory,
    }),
}));


/**
 * @testDescription
 * Test for RecentlyClickedTiles
 * This tests attempts to render RecentlyClickedTiles using a predefined `tileHistory`. Notice we do not have to text the addition and removal of items since its direct dependency: `tileHistoryReducer` is fully tested.
 *
 *
 * Test Count: 2
 * - `<RecentlyClickedTiles/>` : should render
 * - `<RecentlyClickedTiles/>` : should render recently clicked tiles in correct order
 */
const tests = describe("RecentlyClickedTiles", () => {
    it("should render", () => {
        render(
            <UtteredTilesProvider>
                <RecentlyClickedTiles />
            </UtteredTilesProvider>
        );

        const container = screen.getByTestId(recentlyClickedTilesIds.container);
        const tileContainer = screen.getByTestId(recentlyClickedTilesIds.tileContainer);
        const title = screen.getByTestId(recentlyClickedTilesIds.title);

        expect(container).toBeInTheDocument();
        expect(tileContainer).toBeInTheDocument();
        expect(title).toBeInTheDocument();
    });

    it("should render recently clicked tiles in correct order", () => {
        render(
            <UtteredTilesProvider>
                <RecentlyClickedTiles />
            </UtteredTilesProvider>
        );

        const container = screen.getByTestId(recentlyClickedTilesIds.container);

        const tileSelector = computeTileContainerName(""); //each subtile will start with this prefix for data-id attr

        // find all rendered subtiles under recently clicked container
        const renderedTiles = container.querySelectorAll(`[data-testid^=${tileSelector}]`);

        expect(renderedTiles.length).toBe(3);

        //ensure they are all correct renders
        renderedTiles.forEach((node, i) => {
            const theTileThisNodeRepresents = tileHistory[i];

            // text is enough to ensure this is the tile we are looking for
            const text = node.querySelector(`[data-testid='tile-text'`)?.textContent;
            expect(text).toBeDefined();
            expect(text).toEqual(theTileThisNodeRepresents.text);
        });
    });
});
