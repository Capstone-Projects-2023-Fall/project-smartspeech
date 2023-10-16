import "@testing-library/jest-dom";
import { render, screen} from "@testing-library/react";
import SuggestedTiles from "./SuggestedTile";
import { computeTileContainerName } from "./Tile";
import { mockSuggestedTileData } from "@/data/AAC/Tiles";

jest.mock("../../util/AAC/getAACAssets");
describe("Renders placeholder text for suggested tiles", ()=>{
    it("should render", ()=>{
        render(<SuggestedTiles />);

        const container = screen.getByTestId("tiles-container");
        const stopTileContainer = screen.getByTestId(computeTileContainerName(mockSuggestedTileData.stop.text));

        expect(container).toBeInTheDocument();
        expect(stopTileContainer).toBeInTheDocument();
        
    })
})