import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Tile, { TileProps } from "./Tile";
import * as SpeechModuleMock from "../../util/AAC/Speech";

// mock the import and the internal function
jest.mock("../../util/AAC/Speech", () => {
    return {
        ...jest.requireActual("../../util/AAC/Speech"),
        speakViaWebSpeechAPI: jest.fn(),
    };
});

const sampleTileProps: TileProps = {
    image: "/AAC_assets/img/ai/ChatGPT.png",
    text: "ChatGPT",
    sound: "Chat G P T",
    tileColor: "red",
};

describe("Tile", () => {
    it("Correctly renders MiniTile component with sound", () => {
        const { image, text, sound, tileColor } = sampleTileProps;

        render(<Tile image={image} text={text} sound={sound} tileColor={tileColor} />);

        const tileContainer = screen.getByTestId("tile-container");

        expect(tileContainer).toBeInTheDocument();
        expect(screen.getByTestId("tile-image")).toBeInTheDocument();
        expect(screen.getByTestId("tile-text")).toBeInTheDocument();

        expect(screen.getByTestId("tile-text").textContent).toBe(text);

        // fire event that will trigger webspeech api
        fireEvent.click(tileContainer);

        expect(SpeechModuleMock.speakViaWebSpeechAPI).toHaveBeenCalled();
    });

    it("Correctly renders MiniTile component without sound", () => {
        const { image, text, sound, tileColor } = { ...sampleTileProps, sound: "No Sound" };

        render(<Tile image={image} text={text} tileColor={tileColor} />);

        const tileContainer = screen.getByTestId("tile-container");

        expect(tileContainer).toBeInTheDocument();
        expect(screen.getByTestId("tile-image")).toBeInTheDocument();
        expect(screen.getByTestId("tile-text")).toBeInTheDocument();

        expect(screen.getByTestId("tile-text").textContent).toBe(text);

        // fire event that will trigger webspeech api
        fireEvent.click(tileContainer);

        expect(SpeechModuleMock.speakViaWebSpeechAPI).not.toHaveBeenCalled();
    });
});
