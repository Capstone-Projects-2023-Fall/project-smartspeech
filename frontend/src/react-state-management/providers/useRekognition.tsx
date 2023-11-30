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
import { getAACAssets } from "@/util/AAC/getAACAssets";
import { useTilesProvider } from "./tileProvider";
import { TileProps } from "@/components/AAC/Tile";
import CameraFeed from "./CameraFeed";

const RekognitionContext = createContext<RekognitionState>({
  items: [],
});

export const useRekognition = () => useContext(RekognitionContext);

const FACING_MODE_USER = "user";
const FACING_MODE_ENVIRONMENT = "environment";
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
  const webcamRef = useRef<Webcam>(null);
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  const facingMode =
    refresh % 2 == 0 ? FACING_MODE_USER : FACING_MODE_ENVIRONMENT; //swap cams every image

  // create a capture function
  const capture = useCallback(() => {
    console.log("In capture");
    if (!webcamRef.current) return;

    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef]);

  useEffect(() => {
    capture();
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
      <CameraFeed sendFile={() => {}} />
      {props.children}
      <p>{debug}</p>
    </RekognitionContext.Provider>
  );
}
