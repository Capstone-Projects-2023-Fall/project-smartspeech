import "@testing-library/jest-dom";

import userEvent from "@testing-library/user-event";
import ModalProvider from "@/react-state-management/providers/ManualModalProvider";
import TileProvider, { TileProviderProps } from "../../react-state-management/providers/tileProvider";
import { render, screen } from "@testing-library/react";
import ManualTilesPopup, { ManualPopupTestIds } from "./ManualTilesPopup";
import ManualModeButton, { ManualBtnTestIds } from "./ManualModeButton";
import data from "@/data/AAC/Tiles";
import { TilesTestIds } from "./Tiles";
import { actionBarDataTestIds } from "./SelectedTilesActionBar";

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
 * Tests for [ManualTilesPopup, ManualModeButton]
 * This test renders both with sample data and checks if all the required information was rendered and then checks for the model function accuracy
 *
 *
 * Test Count: 2
 * - `[ManualTilesPopup, ManualModeButton]` : should render
 * - `[ManualTilesPopup, ManualModeButton]` : should render <ManualTilesPopup/> when <ManualModeButton /> is clicked
 * - `[ManualTilesPopup, ManualModeButton]` : should close <ManualTilesPopup/> when return btn from <ManualTilesPopup/> is clicked
 */
export const tests = describe("Manual Mode: [ManualTilesPopup, ManualModeButton]", () => {
    it("should render", () => {
        render(
            <TileProvider>
                <ModalProvider>
                    <ManualTilesPopup />
                    <ManualModeButton />
                </ModalProvider>
            </TileProvider>
        );
    });

    it("should render <ManualTilesPopup/> when <ManualModeButton /> is clicked", async () => {
        const user = userEvent.setup();

        render(
            <TileProvider>
                <ModalProvider>
                    <ManualTilesPopup />
                    <ManualModeButton />
                </ModalProvider>
            </TileProvider>
        );

        const openModalFromHomeBtn = screen.getByTestId(ManualBtnTestIds.toggleManualBtn);
        expect(openModalFromHomeBtn).toBeInTheDocument();

        await user.click(openModalFromHomeBtn);

        // model should open with tile selector!
        const tilesContainer = screen.getByTestId(TilesTestIds.mainContainer);
        expect(tilesContainer).toBeInTheDocument();

        const actionBarContainer = screen.getByTestId(actionBarDataTestIds.container);
        expect(actionBarContainer).toBeInTheDocument();
    });

    it("should close <ManualTilesPopup/> when return is clicked", async () => {
        const user = userEvent.setup();

        render(
            <TileProvider>
                <ModalProvider>
                    <ManualTilesPopup />
                    <ManualModeButton />
                </ModalProvider>
            </TileProvider>
        );

        const openModalFromHomeBtn = screen.getByTestId(ManualBtnTestIds.toggleManualBtn);
        expect(openModalFromHomeBtn).toBeInTheDocument();

        await user.click(openModalFromHomeBtn);

        // model should open with tile selector!
        const tilesContainer = screen.getByTestId(TilesTestIds.mainContainer);
        expect(tilesContainer).toBeInTheDocument();

        const actionBarContainer = screen.getByTestId(actionBarDataTestIds.container);
        expect(actionBarContainer).toBeInTheDocument();

        // find exit button
        const returnBtn = screen.getByTestId(ManualPopupTestIds.exitManualBtn);
        expect(returnBtn).toBeInTheDocument();

        await user.click(returnBtn);

        expect(screen.queryByTestId(TilesTestIds.mainContainer)).not.toBeInTheDocument();
    });
});
