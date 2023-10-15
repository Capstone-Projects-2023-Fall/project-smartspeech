import "@testing-library/react"
import "@testing-library/jest-dom";
import page from "./Canvas"
import{render, screen} from "@testing-library/react"

describe("Renders Canvas", ()=>{
    it("should render", ()=>{
       render(page)
    })
})
