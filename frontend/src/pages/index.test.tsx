import "@testing-library/react";
import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import Home, { ManualModeTestIds } from "./index";

/**
 * @testDescription
 * Test for Home Component
 *
 * Test Count: 2
 * - `<Home/>` : should displays the Home and shows manual tiles if pressed
 * - `<Home/>` : should exit manual mode when return is pressed
 */
export const tests = describe("Home Component", () => {
    it("should displays the Home and shows manual tiles if pressed", () => {
        render(<Home />);
        // Check if the button is displayed
        const buttonElement = screen.getByTestId(ManualModeTestIds.manualBtn);
        expect(buttonElement).toBeInTheDocument;
        // Simulate a button click
        fireEvent.click(buttonElement);

        // After clicking button, check if the Tile component is on screen by checking return button
        const returnButtonElement = screen.getByTestId(ManualModeTestIds.exitManualBtn);
        expect(returnButtonElement).toBeInTheDocument;
    });

    it("should exit manual mode when return is pressed", () => {
        render(<Home />);
        // Check if the button is displayed
        const buttonElement = screen.getByTestId(ManualModeTestIds.manualBtn);
        expect(buttonElement).toBeInTheDocument;
        // Simulate a button click
        fireEvent.click(buttonElement);

        // After clicking button, check if the Tile component is on screen by checking return button
        const returnButtonElement = screen.getByTestId(ManualModeTestIds.exitManualBtn);
        expect(returnButtonElement).toBeInTheDocument;

        // manual mode activate button gets hidden
        expect(screen.queryByTestId(ManualModeTestIds.manualBtn)).not.toBeInTheDocument();

        //tile manu should appear
        expect(screen.getByTestId("tiles-container")).toBeInTheDocument();

        //attempt to go back
        fireEvent.click(returnButtonElement);

        // there should be no return button left
        expect(screen.queryByTestId(ManualModeTestIds.manualBtn)).toBeInTheDocument();
        expect(screen.queryByTestId(ManualModeTestIds.exitManualBtn)).not.toBeInTheDocument();
    });
});
