import React, { createContext, useContext, useState, useRef, useCallback, useEffect } from "react";
import { RekognitionProviderProps, RekognitionState, sendImageToBackendForLabeling } from "./useRekognitionUtil";
import useTimedIncrement from "@/react-helpers/hooks/useTimedIncrement";
import { useTilesProvider } from "./tileProvider";
import { TileProps } from "@/components/AAC/Tile";
import CameraFeed, { GetScreenshotHandle } from "./CameraFeed";
import { useHealthCheckContext } from "./HealthCheckProvider";

const RekognitionContext = createContext<RekognitionState>({
    items: [],
    toggle: true,
    toggleCamera() {},
});

export const MIME_TYPE = "image/png";
export const INCREMENT_INTERVAL = 1000 * 3.5;

export const useRekognition = () => useContext(RekognitionContext);

export default function RekognitionProvider(props: RekognitionProviderProps) {
    // read tiles
    const { flatList } = useTilesProvider();

    // provider state
    const [items, setItems] = useState<TileProps[]>([]); // items reterived from image detection
    const refresh = useTimedIncrement(INCREMENT_INTERVAL);
    const [toggle, setCameraToggle] = useState(true);
    const toggleCamera = () => setCameraToggle((prev) => !prev);

    const { backendActive } = useHealthCheckContext();

    //! debug
    const [debug, setDebug] = useState<string>("");

    // webcam state
    const webcamRef = useRef<GetScreenshotHandle>(null);
    const [imgSrc, setImgSrc] = useState<string | null>(null);

    // switching cameras
    const [cameraNum, setCameraNum] = useState(0);

    // Disabling camera when user blocks permissions
    const [hasPermissions, setHasPermissions] = useState(true);

    // create a capture function
    const capture = useCallback(() => {
        if (!webcamRef.current) return;
        const imageSrc = webcamRef.current.getScreenshot();
        setImgSrc(imageSrc);
    }, [webcamRef]);

    useEffect(() => {
        if (!toggle || !hasPermissions) return;
        capture();
        setCameraNum((prevNum) => prevNum + 1);
    }, [refresh, toggle, hasPermissions]);

    useEffect(() => {
        if (!imgSrc) return;

        const labelDetectionAction = sendImageToBackendForLabeling(imgSrc, MIME_TYPE);

        labelDetectionAction.then((detectionResponse) => {
            if (!detectionResponse) return;

            // console.log("server detection resp:", detectionResponse);
            // setDebug(JSON.stringify(detectionResponse, null, 2));
            const detectedTiles = detectionResponse.map((item) => flatList[item.name]).filter((item) => item);

            setItems(detectedTiles);
        });
    }, [imgSrc]);

    const value = {
        items,
        toggle,
        toggleCamera,
    };

    return (
        <RekognitionContext.Provider value={value}>
            {backendActive && hasPermissions && toggle && (
                <CameraFeed ref={webcamRef} cameraNum={cameraNum} width={768} height={1024} setHasPermissions={setHasPermissions} />
            )}
            {props.children}
            <p>{debug}</p>
        </RekognitionContext.Provider>
    );
}
