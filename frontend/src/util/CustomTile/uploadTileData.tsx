import axios from "axios";
import { getBackendUrl } from "../backend-url";

type UploadDataFailure = {
    detail: string;
};

type UploadDataSuccess = {
    w: string;
    newTileId: number;
};

export type UploadDataResp = UploadDataSuccess | UploadDataFailure

export type UploadTileData = {
    email: string;
    text: string;
    sound: string;
    tileColor: string;
    image: string;
    imageExt: string;
};

export default async function uploadTileData(uploadTileData: UploadTileData) {
    const getCustomTilesUrl = `${getBackendUrl()}/custom-tile`;

    try {
        const resp = await axios.post<UploadDataResp>(getCustomTilesUrl, uploadTileData);
        const { data } = resp;

        return data;
    } catch (error) {
        console.error(error);
    }

    return null;
}
