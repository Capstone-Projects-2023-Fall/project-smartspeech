import "@testing-library/jest-dom";
import { render, screen, fireEvent, act } from "@testing-library/react";
import * as SpeechModuleMock from "../../util/AAC/Speech";
import UtteredTilesProvider from "../../react-state-management/providers/useUtteredTiles";
import SelectedTilesActionBar, { actionBarDataTestIds } from "./SelectedTilesActionBar";
import Tiles from "./Tiles";
import { getAACAssets } from "@/util/AAC/getAACAssets";
import sampleData from "@/data/testing/AAC/Tiles";
import { computeTileContainerName } from "./Tile";
import TileProvider, { TileProviderProps } from "../../react-state-management/providers/tileProvider";
import RekognitionProvider from "@/react-state-management/providers/useRekognition";
import HealthCheckProvider, { HealthCheckProviderProps } from "@/react-state-management/providers/HealthCheckProvider";

jest.mock("../../react-state-management/providers/CameraFeed");

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
            tiles: sampleData,
            flatList: {},
        };
    },
}));

jest.mock("../../react-state-management/providers/HealthCheckProvider", () => ({
    __esModule: true,
    default: ({ children }: HealthCheckProviderProps) => <div>{children}</div>,
    useHealthCheckContext: () => {
        return {
            backendActive: true,
        };
    },
}));

jest.mock("../../util/AAC/getAACAssets");

/**
 * @testDescription
 * Test for SelectedTilesActionBar
 * This test renders a SelectedTilesActionBar with **mocked** TileData and checks if all the required information was rendered and the effects of clicking tiles.
 *
 * *Note* : This test requires the provider `UtteredTilesProvider` to register tile presses.
 *
 * Test Count: 4
 * - `<SelectedTilesActionBar/>` : should render properly
 * - `<SelectedTilesActionBar/>` : should add tiles correctly when tiles are pressed
 * - `<SelectedTilesActionBar/>` : should add elements correctly and send them to webspeech API
 * - `<SelectedTilesActionBar/>` : should clear elements on the click of the clear button
 */
export const tests = describe("SelectedTilesActionBar", () => {
    // fake getAssets call
    beforeEach(() => {
        (getAACAssets as jest.Mock).mockReturnValue(sampleData);
    });

    it("should render properly", () => {
        // we need tiles to help add buttons into action bar
        render(
            <TileProvider>
                <UtteredTilesProvider>
                    <SelectedTilesActionBar />
                    <Tiles />
                </UtteredTilesProvider>
            </TileProvider>
        );

        const { container, wordBox, speakBtn, clearBtn, toggleCamBtn, backspaceBtn } = actionBarDataTestIds;

        const containerElement = screen.getByTestId(container);
        const wordBoxElement = screen.getByTestId(wordBox);
        const speakBtnElement = screen.getByTestId(speakBtn);
        const clearBtnElement = screen.getByTestId(clearBtn);

        expect(containerElement).toBeInTheDocument();
        expect(wordBoxElement).toBeInTheDocument();
        expect(speakBtnElement).toBeInTheDocument();
        expect(clearBtnElement).toBeInTheDocument();
    });

    it("should add tiles correctly when tiles are pressed", () => {
        // we need tiles to help add buttons into action bar
        render(
            <TileProvider>
                <UtteredTilesProvider>
                    <SelectedTilesActionBar />
                    <Tiles />
                </UtteredTilesProvider>
            </TileProvider>
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
            <HealthCheckProvider>
                <TileProvider>
                    <UtteredTilesProvider>
                        <SelectedTilesActionBar />
                        <Tiles />
                    </UtteredTilesProvider>
                </TileProvider>
            </HealthCheckProvider>
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

        expect(SpeechModuleMock.speak).toBeCalledWith(textToBeSpoken, true);
    });

    it("should remove the last element on the click of the backspace button", () => {
        // we need tiles to help add buttons into action bar
        render(
            <TileProvider>
                <UtteredTilesProvider>
                    <SelectedTilesActionBar />
                    <Tiles />
                </UtteredTilesProvider>
            </TileProvider>
        );

        const { container, wordBox, speakBtn, backspaceBtn } = actionBarDataTestIds;

        const containerElement = screen.getByTestId(container);
        const wordBoxElement = screen.getByTestId(wordBox);
        const speakBtnElement = screen.getByTestId(speakBtn);
        const backspaceBtnElement = screen.getByTestId(backspaceBtn);

        expect(containerElement).toBeInTheDocument();
        expect(wordBoxElement).toBeInTheDocument();
        expect(speakBtnElement).toBeInTheDocument();
        expect(backspaceBtnElement).toBeInTheDocument();

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

        // fire backspace event
        fireEvent.click(backspaceBtnElement);

        const actionBarTileVisualAAfterBackspace = screen.queryByTestId(`mini-tile-container-${sampleData.good.text}`);
        const actionBarTileVisualBAfterBackspace = screen.queryByTestId(`mini-tile-container-${sampleData.ai.text}`);

        expect(actionBarTileVisualAAfterBackspace).toBeInTheDocument();
        expect(actionBarTileVisualBAfterBackspace).not.toBeInTheDocument();

        // One more backspace event
        fireEvent.click(backspaceBtnElement);

        const actionBarTileVisualAAfter2Backspace = screen.queryByTestId(`mini-tile-container-${sampleData.good.text}`);
        const actionBarTileVisualBAfter2Backspace = screen.queryByTestId(`mini-tile-container-${sampleData.ai.text}`);

        expect(actionBarTileVisualAAfter2Backspace).not.toBeInTheDocument();
        expect(actionBarTileVisualBAfter2Backspace).not.toBeInTheDocument();
    });

    it("should clear elements on the click of the clear button", () => {
        // we need tiles to help add buttons into action bar
        render(
            <TileProvider>
                <UtteredTilesProvider>
                    <SelectedTilesActionBar />
                    <Tiles />
                </UtteredTilesProvider>
            </TileProvider>
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

    it("should toggle the camera feature off, then on", () => {
        render(
            <HealthCheckProvider>
                <TileProvider>
                    <RekognitionProvider>
                        <UtteredTilesProvider>
                            <SelectedTilesActionBar />
                            <Tiles />
                        </UtteredTilesProvider>
                    </RekognitionProvider>
                </TileProvider>
            </HealthCheckProvider>
        );

        const { toggleCamBtn, cameraIconOn, cameraIconOff } = actionBarDataTestIds;

        const toggleCamBtnElement = screen.getByTestId(toggleCamBtn);
        let cameraOnElement = screen.getByTestId(cameraIconOn);

        expect(toggleCamBtnElement).toBeInTheDocument();
        expect(cameraOnElement).toBeInTheDocument();

        act(() => fireEvent.click(toggleCamBtnElement));

        const cameraOffElement = screen.getByTestId(cameraIconOff);

        expect(cameraOffElement).toBeInTheDocument();
        expect(cameraOnElement).not.toBeInTheDocument();

        fireEvent.click(toggleCamBtnElement);

        cameraOnElement = screen.getByTestId(cameraIconOn);

        expect(cameraOnElement).toBeInTheDocument();
        expect(cameraOffElement).not.toBeInTheDocument();
    });
});
