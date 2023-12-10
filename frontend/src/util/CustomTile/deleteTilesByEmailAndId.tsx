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
    const deleteCustomTilesUrl = `${getBackendUrl()}/custom-tile`;

    // let errors through
    return axios.delete<DeleteTileData>(deleteCustomTilesUrl, { params: { email, tileId: id }, validateStatus: (status) => true });
}
