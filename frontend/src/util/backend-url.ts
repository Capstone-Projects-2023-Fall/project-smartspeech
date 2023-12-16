import axios from "axios";

type HealthCheckSuccessResp = { message: string };

export function getBackendUrl() {
    const defaultUrl = "http://localhost:8000";

    if (!process.env.NEXT_PUBLIC_PROG_MODE || typeof process.env.NEXT_PUBLIC_PROG_MODE !== "string") return defaultUrl;
    if (!process.env.NEXT_PUBLIC_BACKEND_URL_DEV || typeof process.env.NEXT_PUBLIC_BACKEND_URL_DEV !== "string") return defaultUrl;
    if (!process.env.NEXT_PUBLIC_BACKEND_URL_PROD || typeof process.env.NEXT_PUBLIC_BACKEND_URL_PROD !== "string") return defaultUrl;

    if (process.env.NEXT_PUBLIC_PROG_MODE === "DEV") return process.env.NEXT_PUBLIC_BACKEND_URL_DEV;
    else if (process.env.NEXT_PUBLIC_PROG_MODE === "PROD") return process.env.NEXT_PUBLIC_BACKEND_URL_PROD;
    else return defaultUrl;
}

export async function isBackendActive() {
    const url = `${getBackendUrl()}/health-check`;

    try {
        await axios.get<HealthCheckSuccessResp>(url);
    } catch (error) {
        return false;
    }

    return true;
}
