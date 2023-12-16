import { isBackendActive } from "@/util/backend-url";
import React, { createContext, useContext, useEffect, useState } from "react";

export type HealthCheckContextData = {
    backendActive: boolean;
};

export type HealthCheckProviderProps = {
    children: React.ReactNode;
};

const HealthCheckContext = createContext<HealthCheckContextData>({ backendActive: false });

export const useHealthCheckContext = () => useContext(HealthCheckContext);

export default function HealthCheckProvider({ children }: HealthCheckProviderProps) {
    const [backendActive, setBackendActive] = useState(false);

    useEffect(() => {
        isBackendActive()
            .then((backendStatus) => {setBackendActive(backendStatus); console.log(backendStatus)})
            .catch((err) => console.error());
    }, []);

    const value: HealthCheckContextData = {
        backendActive,
    };

    return <HealthCheckContext.Provider value={value}>{children}</HealthCheckContext.Provider>;
}
