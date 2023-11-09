import "@testing-library/react";
import "@testing-library/jest-dom";
import Canvas from "./Canvas";
import { render, screen } from "@testing-library/react";
import { loadModel } from "../../model/tfModelUtils";

jest.mock("../../model/tfModelUtils");

describe("Renders Canvas", () => {
    beforeEach(() => {
        (loadModel as jest.Mock).mockResolvedValue(null);
    });

    it("should render", () => {
        render(<Canvas />);
        //checking for all three elements on page
        const clearButton = screen.getByText("Clear canvas");
        expect(clearButton).toBeInTheDocument;
        const checkButton = screen.getByText("Check Image");
        expect(checkButton).toBeInTheDocument;
        const canvasElement = screen.getByTestId("my-canvas");
        expect(canvasElement).toBeInTheDocument;
    });
});
