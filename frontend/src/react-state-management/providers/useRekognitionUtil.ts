import { TileProps } from "@/components/AAC/Tile";
import { getBackendUrl } from "@/util/backend-url";
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
    items: TileProps[];
    toggle: boolean;
    toggleCamera: () => void
}

export interface RekognitionProviderProps {
    children: React.ReactNode;
}

export async function sendImageToBackendForLabeling(base64: string, mime_type: string) {
    const backendUrl = getBackendUrl();

    const url = `${backendUrl}/rekognition`;
    const base64image = base64.split(",")[1];

    if (!base64image) return null;

    let resp: AxiosResponse<BackendRekognitionResponse>;

    try {
        resp = await axios.post<BackendRekognitionResponse>(url, {
            base64image,
            max_labels: 2,
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
