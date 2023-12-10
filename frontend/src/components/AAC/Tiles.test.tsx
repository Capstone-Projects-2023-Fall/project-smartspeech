import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Tiles, { BACK_BTN_TEXT } from "./Tiles";
import { computeTileContainerName } from "./Tile";
import sampleData from "@/data/testing/AAC/Tiles";
import TileProvider, { TileProviderProps } from "../../react-state-management/providers/tileProvider";
import data from "@/data/AAC/Tiles";

jest.mock("../../util/AAC/getAACAssets");

// mock the import and the internal function
jest.mock("../../util/AAC/Speech", () => {
    return {
        ...jest.requireActual("../../util/AAC/Speech"),
        speak: jest.fn(),
    };
});

jest.mock("../../react-state-management/providers/tileProvider", () => ({
    __esModule: true,
    default: ({ children }: TileProviderProps) => <div>{children}</div>,
    useTilesProvider: () => {
        return {
            tiles: data,
            flatList: {},
        };
    },
}));

/**
 * @testDescription
 * Test for Tile**s**
 * This test renders a 'Tiles' with sample data and checks if all the required information was rendered and the effect of clicking on a random tile
 *
 * Test Count: 4
 * - `<Tiles/>` : should render properly with initial state
 * - `<Tiles/>` : should render properly with a tile with a sub menu is clicked
 * - `<Tiles/>` : should render properly with a tile with a sub menu is clicked and then subtiles should disappear when back button is clicked
 * - `<Tiles/>` : should snap back to main menu when a submenu is opened and an element is clicked
 */
export const tests = describe("Tiles", () => {
    it("should render properly with initial state", () => {
        // Set up vars
        render(
            <TileProvider>
                <Tiles />
            </TileProvider>
        );

        const container = screen.getByTestId("tiles-container");
        const colorTileContainer = screen.getByTestId(computeTileContainerName(sampleData.colors.text));

        // assert
        expect(container).toBeInTheDocument();
        expect(colorTileContainer).toBeInTheDocument();
    });

    it("should render properly with a tile with a sub menu is clicked", () => {
        // Set up vars
        render(
            <TileProvider>
                <Tiles />
            </TileProvider>
        );

        const container = screen.getByTestId("tiles-container");
        const colorTileContainer = screen.getByTestId(computeTileContainerName(sampleData.colors.text));

        // assert
        expect(container).toBeInTheDocument();
        expect(colorTileContainer).toBeInTheDocument();

        // "explore" color subtiles:
        fireEvent.click(colorTileContainer);

        // collect what each tile should be
        const subtiles = sampleData.colors.subTiles;

        if (!subtiles) throw new Error("error: sampleData.colors.subTiles undefined");

        // ensure each tile exists
        Object.keys(subtiles).forEach((colorName) => {
            const { text } = subtiles[colorName];
            const colorTileContainerName = computeTileContainerName(text);
            const colorTile = screen.getByTestId(colorTileContainerName);

            expect(colorTile).toBeInTheDocument();
        });
    });

    it("should render properly with a tile with a sub menu is clicked and then subtiles should disappear when back button is clicked", () => {
        // Set up vars
        render(
            <TileProvider>
                <Tiles />
            </TileProvider>
        );

        const container = screen.getByTestId("tiles-container");
        const colorTileContainer = screen.getByTestId(computeTileContainerName(sampleData.colors.text));

        // assert
        expect(container).toBeInTheDocument();
        expect(colorTileContainer).toBeInTheDocument();

        // "explore" color subtiles:
        fireEvent.click(colorTileContainer);

        // collect what each tile should be
        const subtiles = sampleData.colors.subTiles;

        if (!subtiles) throw new Error("error: sampleData.colors.subTiles undefined");

        const backBtn = screen.getByTestId(computeTileContainerName(BACK_BTN_TEXT));
        expect(backBtn).toBeInTheDocument();

        fireEvent.click(backBtn);

        // ensure each subtile DOES NOT exists anymore
        Object.keys(subtiles).forEach((colorName) => {
            const { text } = subtiles[colorName];
            const colorTileContainerName = computeTileContainerName(text);
            const colorTile = screen.queryByTestId(colorTileContainerName);

            expect(colorTile).not.toBeInTheDocument();
        });
    });

    it("should snap back to main menu when a submenu is opened and an element is clicked", () => {
        // Set up vars
        render(
            <TileProvider>
                <Tiles />
            </TileProvider>
        );

        const container = screen.getByTestId("tiles-container");
        const colorTileContainer = screen.getByTestId(computeTileContainerName(sampleData.colors.text));

        // assert
        expect(container).toBeInTheDocument();
        expect(colorTileContainer).toBeInTheDocument();

        // "explore" color subtiles:
        fireEvent.click(colorTileContainer);

        // collect what each tile should be
        const subtiles = sampleData.colors.subTiles;

        if (!subtiles) throw new Error("error: sampleData.colors.subTiles undefined");

        // when submenu spawns check for a back button
        const backBtnInSubMenu = screen.getByTestId(computeTileContainerName(BACK_BTN_TEXT));
        expect(backBtnInSubMenu).toBeInTheDocument();

        // select random tile
        const randomColorTile = subtiles[Object.keys(subtiles)[0]];

        const randomColorTileContainer = screen.getByTestId(computeTileContainerName(randomColorTile.text));
        expect(randomColorTileContainer).toBeInTheDocument();

        // click it!
        fireEvent.click(randomColorTileContainer);

        // ensure we are back to the main menu
        const backBtnInMainMenu = screen.queryByTestId(computeTileContainerName(BACK_BTN_TEXT));
        expect(backBtnInMainMenu).not.toBeInTheDocument();

        // check if our main menu tiles have respawned
        const colorTileContainerInMainMenu = screen.getByTestId(computeTileContainerName(sampleData.colors.text));
        expect(colorTileContainerInMainMenu).toBeInTheDocument();

        // ensure our color submenu has despawned
        const randomColorTileContainerInMainMenu = screen.queryByTestId(computeTileContainerName(randomColorTile.text));
        expect(randomColorTileContainerInMainMenu).not.toBeInTheDocument();
    });
});
