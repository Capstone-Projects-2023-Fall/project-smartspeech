import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import MiniTile from "./MiniTile";

describe("MiniTile", () => {
    it("Correctly renders MiniTile component", () => {
        const imagePath = "/AAC_assets/img/ai/ChatGPT.png";
        const text = "ChatGPT";

        render(<MiniTile image={imagePath} text={text} />);
        // check if all components are rendered
        expect(screen.getByTestId("mini-tile-container")).toBeInTheDocument();
        expect(screen.getByTestId("mini-tile-test")).toBeInTheDocument();
        expect(screen.getByTestId("mini-tile-test").textContent).toBe(text);
    });
});
