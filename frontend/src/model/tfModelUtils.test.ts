import "@testing-library/react";
import "@testing-library/jest-dom";
import { loadModel } from "./tfModelUtils";
import Canvas from "./Canvas";

jest.mock("../../model/tfModelUtils");