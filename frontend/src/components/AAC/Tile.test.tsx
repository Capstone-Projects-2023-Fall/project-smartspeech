import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Tile, { TileProps, computeTileContainerName } from "./Tile";
import * as SpeechModuleMock from "../../util/AAC/Speech";
import UtteredTilesProvider, {
  UtteredTilesProviderProps,
} from "../../react-state-management/providers/useUtteredTiles";

const mockClear = jest.fn();
const mockAddTile = jest.fn();

jest.mock("../../react-state-management/providers/useUtteredTiles", () => ({
  __esModule: true,
  default: ({ children }: UtteredTilesProviderProps) => <div>{children}</div>,
  useUtteredTiles: () => ({
    tiles: [],
    clear: mockClear,
    addTile: mockAddTile,
  }),
}));

// mock the import and the internal function
jest.mock("../../util/AAC/Speech", () => {
  return {
    ...jest.requireActual("../../util/AAC/Speech"),
    speak: jest.fn(),
  };
});

const sampleTileProps: TileProps = {
  image: "/AAC_assets/img/ai/ChatGPT.png",
  text: "ChatGPT",
  sound: "Chat G P T",
  tileColor: "red",
};

/**
 * @testDescription
 * Test for Tile
 * This test renders a Tile with sample data and checks if all the required information was rendered and the effect of clicking on a tile
 *
 * *Note* : This test requires the provider `UtteredTilesProvider` to register tile presses.
 *
 * Test Count: 2
 * - `<Tile/>` : Correctly renders MiniTile component with sound
 * - `<Tile/>` : Correctly renders MiniTile component without sound
 */
export const tests = describe("Tile", () => {
  it("Correctly renders MiniTile component with sound", () => {
    const { image, text, sound, tileColor } = sampleTileProps;
    render(
      <UtteredTilesProvider>
        <Tile image={image} text={text} sound={sound} tileColor={tileColor} />
      </UtteredTilesProvider>
    );

    const tileContainer = screen.getByTestId(computeTileContainerName(text));

    expect(tileContainer).toBeInTheDocument();
    expect(screen.getByTestId("tile-image")).toBeInTheDocument();
    expect(screen.getByTestId("tile-text")).toBeInTheDocument();

    expect(screen.getByTestId("tile-text").textContent).toBe(text);

    // fire event that will trigger webspeech api
    fireEvent.click(tileContainer);

    expect(SpeechModuleMock.speak).toHaveBeenCalled();
    expect(mockAddTile).toBeCalledWith({
      image,
      sound,
      text,
      tileColor,
    });
  });

  it("Correctly renders MiniTile component without sound", () => {
    const { image, text, sound, tileColor } = { ...sampleTileProps };

    render(
      <UtteredTilesProvider>
        <Tile image={image} text={text} tileColor={tileColor} />
      </UtteredTilesProvider>
    );

    const tileContainer = screen.getByTestId(computeTileContainerName(text));

    expect(tileContainer).toBeInTheDocument();
    expect(screen.getByTestId("tile-image")).toBeInTheDocument();
    expect(screen.getByTestId("tile-text")).toBeInTheDocument();

    expect(screen.getByTestId("tile-text").textContent).toBe(text);

    // fire event that will trigger webspeech api
    fireEvent.click(tileContainer);

    expect(SpeechModuleMock.speak).not.toHaveBeenCalled();
    expect(mockAddTile).not.toHaveBeenCalled();
  });
});
