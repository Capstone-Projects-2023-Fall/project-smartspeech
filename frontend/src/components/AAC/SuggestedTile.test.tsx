import "@testing-library/jest-dom";
import { render, screen} from "@testing-library/react";
import SuggestedTiles from "./SuggestedTile";
import { getAACAssets } from "@/util/AAC/getAACAssets";
import { computeTileContainerName } from "./Tile";
import sampleData from "@/data/testing/AAC/Tiles";

jest.mock("../../util/AAC/getAACAssets");
describe("Renders placeholder text for suggested tiles", ()=>{
    it("should render", ()=>{
        (getAACAssets as jest.Mock).mockReturnValue(sampleData);
        render(<SuggestedTiles />);

        const container = screen.getByTestId("tiles-container");
        const colorTileContainer = screen.getByTestId(computeTileContainerName(sampleData.colors.text));

        expect(container).toBeInTheDocument();
        expect(colorTileContainer).toBeInTheDocument();
        
    })
})