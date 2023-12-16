import useTimedIncrement from "@/react-helpers/hooks/useTimedIncrement";
import { isBackendActive } from "@/util/backend-url";
import React, { createContext, useContext, useEffect, useState } from "react";

export type HealthCheckContextData = {
    backendActive: boolean;
};

export type HealthCheckProviderProps = {
    children: React.ReactNode;
};

const HealthCheckContext = createContext<HealthCheckContextData>({ backendActive: false });
const HEALTH_PROVIDER_REFRESH_INTERVAL = 300 * 1000;

export const useHealthCheckContext = () => useContext(HealthCheckContext);

export default function HealthCheckProvider({ children }: HealthCheckProviderProps) {
    const [backendActive, setBackendActive] = useState(false);

    const refresh = useTimedIncrement(HEALTH_PROVIDER_REFRESH_INTERVAL);

    useEffect(() => {
        isBackendActive()
            .then((backendStatus) => {
                setBackendActive(backendStatus);
                console.log("[INFO] Backend Status:", backendStatus);
            })
            .catch((err) => console.error());
    }, [refresh]);

    const value: HealthCheckContextData = {
        backendActive,
    };

    return <HealthCheckContext.Provider value={value}>{children}</HealthCheckContext.Provider>;
}
