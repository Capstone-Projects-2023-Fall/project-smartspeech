import { TileAssets } from "@/components/AAC/TileTypes";
import axios, { AxiosResponse } from "axios";

export interface RekognitionDetectLabelSingleResponse {
    name: string;
    confidence: number;
}

export interface RekognitionDetectLabelFailureResponse {
    error: string;
}

export type BackendRekognitionResponse = RekognitionDetectLabelSingleResponse[] | RekognitionDetectLabelFailureResponse;

export interface RekognitionState {
    items: RekognitionDetectLabelSingleResponse[];
}

export interface RekognitionProviderProps {
    children: React.ReactNode;
}

export async function sendImageToBackendForLabeling(base64: string, mime_type: string) {
    if (!process.env.NEXT_PUBLIC_BACKEND_URL || typeof process.env.NEXT_PUBLIC_BACKEND_URL !== "string") return null;

    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/rekognition`;
    const base64image = base64.split(",")[1];

    if (!base64image) return null;

    let resp: AxiosResponse<BackendRekognitionResponse>;

    try {
        resp = await axios.post<BackendRekognitionResponse>(url, {
            base64image,
        });
    } catch {
        return null;
    }

    const { data } = resp;

    if ("error" in data) {
        return null;
    }

    return data;
}