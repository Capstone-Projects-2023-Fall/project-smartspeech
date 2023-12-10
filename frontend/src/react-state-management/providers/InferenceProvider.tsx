import { InferenceData, processDrawing } from "@/model/tfModelUtils";
import { LoadModelResp } from "@/pages/api/model/load";
import { LayersModel, loadLayersModel } from "@tensorflow/tfjs";

import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useStrokeRecorderContext } from "./StrokeProvider";

export type InferenceContextType = {
    predict: (canvas: HTMLCanvasElement) => void;
    predictions: InferenceData[];
};

const InferenceContext = createContext<InferenceContextType>({
    predict(canvas) {},
    predictions: [],
});

export const useInferenceContext = () => useContext(InferenceContext);
export type InferenceProviderProps = { children: React.ReactNode };

/**
 * @param props props that contains the children to be rendered
 * @returns Provider with children rendered
 */
export default function InferenceProvider(props: InferenceProviderProps) {
    const [predictions, setPrediction] = useState<InferenceData[]>([]);

    // model params
    const [wordDict, setWordDict] = useState<string[] | null>(null);

    // model
    const [model, setModel] = useState<LayersModel | null>(null);

    // strokes
    const { points } = useStrokeRecorderContext();

    // load in model params
    useEffect(() => {
        const loadModelCall = axios.get<LoadModelResp>("api/model/load");

        loadModelCall
            .then((response) => {
                const { dictContents } = response.data;

                if (dictContents) setWordDict(dictContents);

                console.log("Dict Loaded:", dictContents);
            })
            .catch((error) => {
                console.log("Error fetching from data source");
                console.error(error);
            });
    }, []);

    useEffect(() => {
        if (model) return; //reject if model already loaded in mem

        const modelLoadPromise = loadLayersModel("/model_assets/model.json");

        modelLoadPromise
            .then((layerModel) => {
                setModel(layerModel);
                console.log("Model loaded");
            })
            .catch((error) => {
                console.log("Error Load Model from data source");
                console.error(error);
            });
    }, []);

    const predict = async (canvas: HTMLCanvasElement) => {
        //console.log({ model, wordDict, len });
        // return no preds if model is not yet loaded
        if (!model || !wordDict || (points.length === 0)) return [];
        const strokes = points; // flatten array

        // model prediction
        const prediction = await processDrawing(model, wordDict, strokes, canvas);
        //console.log(prediction);
        // use setter for predictions
        setPrediction([...prediction]);
    };

    const value: InferenceContextType = {
        predict,
        predictions,
    };

    return <InferenceContext.Provider value={value}>{props.children}</InferenceContext.Provider>;
}
