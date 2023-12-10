import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";

type CameraFeedProps = {
  cameraNum: number;
  width: number;
  height: number;
  setHasPermissions: (b: boolean) => void;
};

export type GetScreenshotHandle = {
  getScreenshot: () => string;
};

/** Courtesy of https://codesandbox.io/p/sandbox/74pzm9lkq6?file=%2Fsrc%2Fcomponents%2Fcamera-feed.jsx%3A60%2C23 
 * The CameraFeed sets up a video player and canvas, and provides a method for capturing a picture from the
 * video player ref.current.getScreenshot().
*/
const CameraFeed = forwardRef<GetScreenshotHandle, CameraFeedProps>(function (
  props,
  ref
) {
  const videoPlayer = useRef<HTMLVideoElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);

  /**
   * Sets the active device and starts playing the feed.
   * Returns 'false' if the user has disabled permissions,
   * and 'true' otherwise.
   */
  const setDevice = async (device: MediaDeviceInfo) => {
    if (!videoPlayer.current) return true;

    const { deviceId } = device;

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: { deviceId },
      });
  
      videoPlayer.current.srcObject = stream;
      videoPlayer.current.play().catch(e => console.log("Could not start video player"));
      return true;
    } catch (e: any) {
      console.log(e.message);
      if (e instanceof DOMException && e.name === "NotAllowedError") {
        console.log("Not given permission to use camera. Stopping video recognition.");
        return false;
      } else {
        console.log("There was some error trying to use image recognition. Trying again next loop...");
        return true;
      }
    }
  };

  // On component mounting, we want to select a camera to take pictures from
  useEffect(() => {
    (async () => {
      const cameras = await navigator.mediaDevices.enumerateDevices();

      const videoDevices = cameras.filter((info) => info.kind == "videoinput");
      setDevice(videoDevices[props.cameraNum % videoDevices.length]).then(b => {
        if (!b) props.setHasPermissions(false);
      });
    })();
  }, [props.cameraNum, props.setHasPermissions]);

  /**
   * Handles taking a still image from the video feed on the camera.
   * Returns a string if the image is captured successfully; otherwise,
   * it returns 'undefined'
   */
  const getScreenshot = () => {
    if (!canvas.current) return;
    const context = canvas.current.getContext("2d");

    if (!videoPlayer.current || !context) return;

    context.drawImage(
      videoPlayer.current,
      0,
      0,
      videoPlayer.current.videoWidth,
      videoPlayer.current.videoHeight
    );

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
        width={props.width}
        height={props.height}
        style={{ position: "absolute", top: "-10000px" }} // Hide from user's eyes
        playsInline={true}
      />
      <canvas
        width={props.width}
        height={props.height}
        ref={canvas}
        style={{ position: "absolute", top: "-10000px" }}
      />
    </>
  );
});

export default CameraFeed;
