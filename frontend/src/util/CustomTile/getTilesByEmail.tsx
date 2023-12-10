import axios from "axios";
import { getBackendUrl } from "../backend-url";

export type GetTileData = {
    id: number;
    url: string;
    email: string;
    text: string;
    sound: string;
    tileColor: string;
};

export default async function getTilesByEmail(email: string) {
    const url = getBackendUrl();
    const getCustomTilesUrl = `${url}/custom-tile`;

    try {
        const resp = await axios.get<GetTileData[]>(getCustomTilesUrl, { params: { email } });
        const { data } = resp;

        return data;
    } catch (error) {
        console.error(error);
    }

    return null;
}
