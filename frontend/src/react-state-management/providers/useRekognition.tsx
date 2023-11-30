import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useCallback,
  useEffect,
} from "react";
import {
  RekognitionProviderProps,
  RekognitionState,
  sendImageToBackendForLabeling,
} from "./useRekognitionUtil";
import useTimedIncrement from "@/react-helpers/hooks/useTimedIncrement";
import { useTilesProvider } from "./tileProvider";
import { TileProps } from "@/components/AAC/Tile";
import CameraFeed, { GetScreenshotHandle } from "./CameraFeed";

const RekognitionContext = createContext<RekognitionState>({
  items: [],
});

export const useRekognition = () => useContext(RekognitionContext);

export const MIME_TYPE = "image/png";

export default function RekognitionProvider(props: RekognitionProviderProps) {
  // read tiles
  const { flatList } = useTilesProvider();

  // provider state
  const [items, setItems] = useState<TileProps[]>([]); // items reterived from image detection
  const refresh = useTimedIncrement(10000);

  //! debug
  const [debug, setDebug] = useState<string>("");

  // webcam state
  const webcamRef = useRef<GetScreenshotHandle>(null);
  const [imgSrc, setImgSrc] = useState<string | null>(null);

  // switching cameras
  const [cameraNum, setCameraNum] = useState(0);

  // create a capture function
  const capture = useCallback(() => {
    console.log("In capture");
    if (!webcamRef.current) return;

    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef]);

  useEffect(() => {
    capture();

    // After we capture, we want to increment the camera number to
    // signal CameraFeed to use a different device
    return function () {
      setCameraNum(cameraNum + 1);
    };
  }, [refresh]);

  useEffect(() => {
    if (!imgSrc) return;

    const labelDetectionAction = sendImageToBackendForLabeling(
      imgSrc,
      MIME_TYPE
    );

    labelDetectionAction.then((detectionResponse) => {
      if (!detectionResponse) return;

      console.log("server detection resp:", detectionResponse);
      setDebug(JSON.stringify(detectionResponse, null, 2));
      const detectedTiles = detectionResponse
        .map((item) => flatList[item.name])
        .filter((item) => item);

      setItems(detectedTiles);
    });
  }, [imgSrc]);

  const value = {
    items,
  };

  return (
    <RekognitionContext.Provider value={value}>
      <CameraFeed ref={webcamRef} cameraNum={cameraNum} />
      {props.children}
      <p>{debug}</p>
    </RekognitionContext.Provider>
  );
}
