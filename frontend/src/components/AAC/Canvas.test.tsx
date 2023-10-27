import "@testing-library/react"
import "@testing-library/jest-dom";
import Canvas from "./Canvas"
import{render, screen} from "@testing-library/react"

describe("Renders Canvas", ()=>{
    it("should render", ()=>{
       render(<Canvas/>)
       //checking for all three elements on page
       const clearButton = screen.getByText("Clear canvas")
       expect(clearButton).toBeInTheDocument
       const checkButton = screen.getByText("Check Image")
       expect(checkButton).toBeInTheDocument
       const canvasElement = screen.getByTestId("my-canvas")
       expect(canvasElement).toBeInTheDocument
    })
})
