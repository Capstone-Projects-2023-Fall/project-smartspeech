import "@testing-library/react";
import "@testing-library/jest-dom";
import { loadModel } from "./tfModelUtils";
import Canvas from "frontend/src/components/AAC/Canvas";
import { Point } from "frontend/src/util/types/typing.d";
import * as tf from '@tensorflow/tfjs';

// Mock TensorFlow.js loadLayersModel function
jest.mock('@tensorflow/tfjs', () => ({
    loadLayersModel: jest.fn(),
    zeros: jest.fn(() => []),
}));

// Mock return value for loadLayersModel
tf.loadLayersModel.mockResolvedValue({ predict: jest.fn() });

// Mock global fetch for loadDict
global.fetch = jest.fn(() =>
  Promise.resolve({
    text: () => Promise.resolve("class1\nclass2\nclass3\n"),
  })
);

// describe block for 'loadModel'
describe('loadModel', () => {
  beforeEach(() => {
    // Reset the mock calls and states before each test
    tf.loadLayersModel.mockClear();
    global.fetch.mockClear();
  });

  it("Should successfully load the model and dictionary file before parsing the dictionary into an array of strings.", async () => {
    await loadModel();

    expect(tf.loadLayersModel).toHaveBeenCalledWith('/model_assets/model.json');
    expect(global.fetch).toHaveBeenCalledWith('/model_assets/class_names.txt');
  });
}); // This closing brace was missing

// Other tests or code can follow here
