import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";

type CameraFeedProps = {
  cameraNum: number;
};

export type GetScreenshotHandle = {
  getScreenshot: () => string;
};

/** Courtesy of https://codesandbox.io/p/sandbox/74pzm9lkq6?file=%2Fsrc%2Fcomponents%2Fcamera-feed.jsx%3A60%2C23 */
const CameraFeed = forwardRef<GetScreenshotHandle, CameraFeedProps>(function (
  props,
  ref
) {
  const videoPlayer = useRef<HTMLVideoElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);

  /**
   * Sets the active device and starts playing the feed
   */
  const setDevice = async (device: MediaDeviceInfo) => {
    if (!videoPlayer.current) return;

    const { deviceId } = device;
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: { deviceId },
    });

    videoPlayer.current.srcObject = stream;
    videoPlayer.current.play();
  };

  /**
   * Processes available devices and identifies one by the label
   */
  const processDevices = useCallback((devices: MediaDeviceInfo[]) => {
    const videoDevices = devices.filter((info) => info.kind == "videoinput");
    setDevice(videoDevices[props.cameraNum % videoDevices.length]);
  }, [props.cameraNum]);

  // On component mounting, we want to select a camera to take pictures from
  useEffect(() => {
    (async () => {
      const cameras = await navigator.mediaDevices.enumerateDevices();
      processDevices(cameras);
    })();
  }, []);

  /**
   * Handles taking a still image from the video feed on the camera
   */
  const getScreenshot = () => {
    if (!canvas.current) return;
    const context = canvas.current.getContext("2d");

    if (!videoPlayer.current) return;
    if (!context) return;
    context.drawImage(videoPlayer.current, 0, 0, 680, 360);
    const url = canvas.current.toDataURL();

    return url;
  };

  // https://stackoverflow.com/a/69292925
  // To allow the parent to call getScreenshot, we use a forwardRef
  useImperativeHandle(
    ref,
    () => ({
      getScreenshot() {
        return getScreenshot() ?? "";
      },
    }),
    []
  );

  return (
    <>
      <video
        ref={videoPlayer}
        width="1024"
        height="768"
        style={{ position: "absolute", top: "-10000px" }} // Hide from user's eyes
      />
      <canvas
        width="1024"
        height="768"
        ref={canvas}
        style={{ position: "absolute", top: "-10000px" }}
      />
    </>
  );
});

export default CameraFeed;