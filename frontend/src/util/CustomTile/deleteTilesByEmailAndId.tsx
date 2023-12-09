import axios from "axios";
import { getBackendUrl } from "../backend-url";

type DeleteDataFailure = {
    detail: string;
};

type DeleteDataSuccess = {
    rowsDeleted: number;
};

export type DeleteTileData = DeleteDataFailure | DeleteDataSuccess;

export default async function deleteTilesByEmail(email: string, id: number) {
    const getCustomTilesUrl = `${getBackendUrl()}/custom-tile`;

    // let errors through
    const validateStatusFunction = (status: number) => true;

    return axios.get<DeleteTileData>(getCustomTilesUrl, { params: { email, tileId: id }, validateStatus: validateStatusFunction });
}
