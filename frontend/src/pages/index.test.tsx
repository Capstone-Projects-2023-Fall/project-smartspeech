import "@testing-library/react"
import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import Home from "./index";

describe("Home Component", () => {
    it("displays the button and handles click event", () => {
        render(<Home />);
        // Check if the button is displayed
        const buttonElement = screen.getByTestId("manual-button");
        expect(buttonElement).toBeInTheDocument
        // Simulate a button click
        fireEvent.click(buttonElement);

        // After clicking button, check if the Tile component is on screen by checking return button
        const returnButtonElement = screen.getByTestId("return-button");
        expect(returnButtonElement).toBeInTheDocument
    });
});