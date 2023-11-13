import { Point, Points } from "@/util/types/typing";
import { loadLayersModel, zeros, browser, image, scalar, tidy } from "@tensorflow/tfjs";

//tests
import { LayersModel, Tensor } from "@tensorflow/tfjs";

type BoundingBox = {
    min: Point;
    max: Point;
};
export type InferenceData = { name: string; prob: number };

/**
 * Input the array of drawing coordinates.
 */
function getBoundingBox(coords: Point[]): BoundingBox {
    // Get coordinate arrays
    const coorX = coords.map((p) => p.x);
    const coorY = coords.map((p) => p.y);

    // Find top left and bottom right corners
    const min_coords: Point = {
        x: Math.min(...coorX),
        y: Math.min(...coorY),
    };
    const max_coords: Point = {
        x: Math.max(...coorX),
        y: Math.max(...coorY),
    };

    // Return as struct
    return {
        min: min_coords,
        max: max_coords,
    };
}

function getImageData(bb: BoundingBox, canvas: HTMLCanvasElement): ImageData {
    const dpi = window.devicePixelRatio;

    const ctx = canvas.getContext("2d");
    if (!ctx) {
        throw new Error("CanvasRenderingContext2D is not available");
    }

    // Calculate the coordinates and size respecting the DPI
    const x = bb.min.x * dpi;
    const y = bb.min.y * dpi;
    const width = (bb.max.x - bb.min.x) * dpi;
    const height = (bb.max.y - bb.min.y) * dpi;

    if (!Number.isFinite(x) || !Number.isFinite(y) || !Number.isFinite(width) || !Number.isFinite(height)) {
        console.error("Invalid canvas dimensions", { x, y, width, height });
    }

    if (width <= 0 || height <= 0) {
        console.error("Canvas dimensions must be positive", { width, height });
    }

    // Get the image data from the context
    const imgData = ctx.getImageData(x, y, width, height);
    return imgData;
}

function preprocess(imgData: ImageData) {
    return tidy(() => {
        // Convert to a tensor
        let tensor = browser.fromPixels(imgData, 1);

        // Resize
        const resized = image.resizeBilinear(tensor, [28, 28]).toFloat();

        // Normalize
        const offset = scalar(255.0);
        const normalized = scalar(1.0).sub(resized.div(offset));

        // We add a dimension to get a batch shape
        const batched = normalized.expandDims(0);
        console.log("BSC", batched.dataSync());
        return batched;
    });
}

function performInference(model: LayersModel, processedData: Tensor): Tensor {
    const pred = model.predict(processedData);
    return pred;
}

function getInferenceData(wordDict: string[], inferenceResult: Tensor): InferenceData[] {
    // Convert the inference tensor into an array
    const probabilities = Array.from(inferenceResult.dataSync() as Float32Array);

    // Map each probability to an object with its value and class name
    const inferenceDataWithProb = probabilities.map((prob, index) => ({
        name: wordDict[index],
        prob: prob,
    }));
    console.log(inferenceDataWithProb);
    // Sort the array by probability in descending order
    const sortedInferenceData = inferenceDataWithProb.sort((a, b) => b.prob - a.prob);

    // Slice the array to get the top 5
    const top5InferenceData = sortedInferenceData.slice(0, 5);

    // Return the top 5 inference data
    return top5InferenceData.map((data) => ({ name: data.name, prob: Math.round(data.prob * 100) / 100 }));
}

function convertCoords(coords: Points[]): Points {
    const allPoints: Point[] = [];
    coords.forEach((points) => {
        allPoints.push(...points);
    });
    return allPoints;
}

/**
 * Process a drawing from coordinates and canvas object.
 * Return predictions as an array of classes and probabilities.
 */
export async function processDrawing(model: LayersModel, wordDict: string[], coords: Points[], canvas: HTMLCanvasElement): Promise<InferenceData[]> {
    // Get minimum bounding box from coordinate array.
    const flat_coords = convertCoords(coords);
    const bb = getBoundingBox(flat_coords);
    // Get image data from minimum bounding box and canvas element.
    const imgData = getImageData(bb, canvas);
    // Preprocess data for model inference.
    const processedData = preprocess(imgData);
    // Rest of the function remains the same...

    // Perform inference with processed data.
    const inferenceResult = performInference(model, processedData);

    // Return inference data
    const infData = getInferenceData(wordDict, inferenceResult);
    console.log(infData);
    return infData;
}
