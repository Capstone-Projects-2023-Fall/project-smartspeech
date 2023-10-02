import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import MiniTile from "./MiniTile";

describe("MiniTile", () => {
    it("Correctly renders MiniTile component", () => {
        const imagePath = "/AAC_assets/img/ai/ChatGPT.png";
        const text = "ChatGPT";

        render(<MiniTile image={imagePath} text={text} />);

        expect(screen.getByTestId(`mini-tile-container-${text}`)).toBeInTheDocument();
        expect(screen.getByTestId("mini-tile-text")).toBeInTheDocument();
        expect(screen.getByTestId("mini-tile-image")).toBeInTheDocument();

        expect(screen.getByTestId("mini-tile-text").textContent).toBe(text);
    });
});
