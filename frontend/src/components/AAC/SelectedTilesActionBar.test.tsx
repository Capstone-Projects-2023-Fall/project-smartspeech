import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import * as SpeechModuleMock from "../../util/AAC/Speech";
import UtteredTilesProvider from "../../react-state-management/providers/useUtteredTiles";
import SelectedTilesActionBar, { actionBarDataTestIds } from "./SelectedTilesActionBar";
import Tiles from "./Tiles";
import { getAACAssets } from "@/util/AAC/getAACAssets";
import sampleData from "@/data/testing/AAC/Tiles";
import { computeTileContainerName } from "./Tile";

jest.mock("../../util/AAC/Speech", () => {
    return {
        ...jest.requireActual("../../util/AAC/Speech"),
        speakViaWebSpeechAPI: jest.fn(),
    };
});

jest.mock("../../util/AAC/getAACAssets");

describe("SelectedTilesActionBar", () => {
    // fake getAssets call
    beforeEach(() => {
        (getAACAssets as jest.Mock).mockReturnValue(sampleData);
    });

    it("should render properly", () => {
        // we need tiles to help add buttons into action bar
        render(
            <UtteredTilesProvider>
                <SelectedTilesActionBar />
                <Tiles />
            </UtteredTilesProvider>
        );

        const { container, wordBox, speakBtn, clearBtn } = actionBarDataTestIds;

        const containerElement = screen.getByTestId(container);
        const wordBoxElement = screen.getByTestId(wordBox);
        const speakBtnElement = screen.getByTestId(speakBtn);
        const clearBtnElement = screen.getByTestId(clearBtn);

        expect(containerElement).toBeInTheDocument();
        expect(wordBoxElement).toBeInTheDocument();
        expect(speakBtnElement).toBeInTheDocument();
        expect(clearBtnElement).toBeInTheDocument();
    });

    it("should add elements correctly", () => {
        // we need tiles to help add buttons into action bar
        render(
            <UtteredTilesProvider>
                <SelectedTilesActionBar />
                <Tiles />
            </UtteredTilesProvider>
        );

        const { container, wordBox, speakBtn, clearBtn } = actionBarDataTestIds;

        const containerElement = screen.getByTestId(container);
        const wordBoxElement = screen.getByTestId(wordBox);
        const speakBtnElement = screen.getByTestId(speakBtn);
        const clearBtnElement = screen.getByTestId(clearBtn);

        expect(containerElement).toBeInTheDocument();
        expect(wordBoxElement).toBeInTheDocument();
        expect(speakBtnElement).toBeInTheDocument();
        expect(clearBtnElement).toBeInTheDocument();

        // find random tile to click
        const sampleTileA = screen.getByTestId(computeTileContainerName(sampleData.good.text));
        const sampleTileB = screen.getByTestId(computeTileContainerName(sampleData.ai.text));

        expect(sampleTileA).toBeInTheDocument();
        expect(sampleTileB).toBeInTheDocument();

        // click it!
        fireEvent.click(sampleTileA);
        fireEvent.click(sampleTileB);

        // see if those same tiles were found in the action bar
        const actionBarTileVisualA = screen.getByTestId(`mini-tile-container-${sampleData.good.text}`);
        const actionBarTileVisualB = screen.getByTestId(`mini-tile-container-${sampleData.ai.text}`);

        expect(actionBarTileVisualA).toBeInTheDocument();
        expect(actionBarTileVisualB).toBeInTheDocument();
    });

    it("should add elements correctly and send them to webspeech API", () => {
        // we need tiles to help add buttons into action bar
        render(
            <UtteredTilesProvider>
                <SelectedTilesActionBar />
                <Tiles />
            </UtteredTilesProvider>
        );

        const { container, wordBox, speakBtn, clearBtn } = actionBarDataTestIds;

        const containerElement = screen.getByTestId(container);
        const wordBoxElement = screen.getByTestId(wordBox);
        const speakBtnElement = screen.getByTestId(speakBtn);
        const clearBtnElement = screen.getByTestId(clearBtn);

        expect(containerElement).toBeInTheDocument();
        expect(wordBoxElement).toBeInTheDocument();
        expect(speakBtnElement).toBeInTheDocument();
        expect(clearBtnElement).toBeInTheDocument();

        // find random tile to click
        const sampleTileA = screen.getByTestId(computeTileContainerName(sampleData.good.text));
        const sampleTileB = screen.getByTestId(computeTileContainerName(sampleData.ai.text));

        expect(sampleTileA).toBeInTheDocument();
        expect(sampleTileB).toBeInTheDocument();

        // click it!
        fireEvent.click(sampleTileA);
        fireEvent.click(sampleTileB);

        // see if those same tiles were found in the action bar
        const actionBarTileVisualA = screen.getByTestId(`mini-tile-container-${sampleData.good.text}`);
        const actionBarTileVisualB = screen.getByTestId(`mini-tile-container-${sampleData.ai.text}`);

        const textToBeSpoken = `${sampleData.good.sound} ${sampleData.ai.sound}`;

        expect(actionBarTileVisualA).toBeInTheDocument();
        expect(actionBarTileVisualB).toBeInTheDocument();

        // fire speak event
        fireEvent.click(speakBtnElement);

        expect(SpeechModuleMock.speakViaWebSpeechAPI).toBeCalledWith(textToBeSpoken);
    });

    it("should clear elements on the click of the clear button", () => {
        // we need tiles to help add buttons into action bar
        render(
            <UtteredTilesProvider>
                <SelectedTilesActionBar />
                <Tiles />
            </UtteredTilesProvider>
        );

        const { container, wordBox, speakBtn, clearBtn } = actionBarDataTestIds;

        const containerElement = screen.getByTestId(container);
        const wordBoxElement = screen.getByTestId(wordBox);
        const speakBtnElement = screen.getByTestId(speakBtn);
        const clearBtnElement = screen.getByTestId(clearBtn);

        expect(containerElement).toBeInTheDocument();
        expect(wordBoxElement).toBeInTheDocument();
        expect(speakBtnElement).toBeInTheDocument();
        expect(clearBtnElement).toBeInTheDocument();

        // find random tile to click
        const sampleTileA = screen.getByTestId(computeTileContainerName(sampleData.good.text));
        const sampleTileB = screen.getByTestId(computeTileContainerName(sampleData.ai.text));

        expect(sampleTileA).toBeInTheDocument();
        expect(sampleTileB).toBeInTheDocument();

        // click it!
        fireEvent.click(sampleTileA);
        fireEvent.click(sampleTileB);

        // see if those same tiles were found in the action bar
        const actionBarTileVisualA = screen.getByTestId(`mini-tile-container-${sampleData.good.text}`);
        const actionBarTileVisualB = screen.getByTestId(`mini-tile-container-${sampleData.ai.text}`);

        expect(actionBarTileVisualA).toBeInTheDocument();
        expect(actionBarTileVisualB).toBeInTheDocument();

        // fire clear event
        fireEvent.click(clearBtnElement);

        const actionBarTileVisualAAfterClear = screen.queryByTestId(`mini-tile-container-${sampleData.good.text}`);
        const actionBarTileVisualBAfterClear = screen.queryByTestId(`mini-tile-container-${sampleData.ai.text}`);

        expect(actionBarTileVisualAAfterClear).not.toBeInTheDocument();
        expect(actionBarTileVisualBAfterClear).not.toBeInTheDocument();
    });
});
