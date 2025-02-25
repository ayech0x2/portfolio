import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useAtom, useSetAtom } from "jotai";
import * as React from "react";
import { isMobile } from "react-device-detect";
import screenfull from "screenfull";
import { cameraZoomAtom, mouseOnAtom, resetViewRequestAtom } from "../atoms";
import styles from "../css/utils.module.css";
import useSound from "../hooks/use-sound";
import CameraIcon from "./icons/camera-icon";
import FullScreenIcon from "./icons/full-screen-icon";
import MuteIcon from "./icons/mute-icon";
import UnmuteIcon from "./icons/unmute-icon";
import ZoomInIcon from "./icons/zoom-in-icon";
import ZoomOutIcon from "./icons/zoom-out-icon";

function Utils() {
  const containerRef = React.useRef<HTMLDivElement>(null);

  const setMouseOn = useSetAtom(mouseOnAtom);

  const [cameraZoom, setCameraZoom] = useAtom(cameraZoomAtom);

  const setResetViewRequest = useSetAtom(resetViewRequestAtom);

  const { muteBackgroundMusic, unMuteBackgroundMusic, muted } = useSound();

  useGSAP(() => {
    gsap.fromTo(
      containerRef.current,
      {
        x: isMobile ? -100 : 100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
      }
    );
  });

  const handleFullScreen = () => {
    if (screenfull.isEnabled) {
      if (screenfull.isFullscreen) screenfull.exit();
      else screenfull.request();
    }
  };

  const handleZoomIn = () => {
    if (cameraZoom < (isMobile ? 2.5 : 1.9)) setCameraZoom(cameraZoom + 0.1);
  };

  const handleZoomOut = () => {
    if (cameraZoom > 1) setCameraZoom(cameraZoom - 0.1);
  };

  const handleResetView = () => {
    setResetViewRequest(true);
  };

  return (
    <div
      ref={containerRef}
      className={[styles.container, isMobile ? styles.mobile : ""].join(" ")}
    >
      {muted ? (
        <div
          className={styles.child}
          onClick={unMuteBackgroundMusic}
          onMouseEnter={() => setMouseOn("PRESS")}
          onMouseLeave={() => setMouseOn("DRAG")}
        >
          <UnmuteIcon />
          <span>Unmute</span>
        </div>
      ) : (
        <div
          className={styles.child}
          onClick={muteBackgroundMusic}
          onMouseEnter={() => setMouseOn("PRESS")}
          onMouseLeave={() => setMouseOn("DRAG")}
        >
          <MuteIcon />
          <span>Mute</span>
        </div>
      )}
      <div
        className={styles.child}
        onMouseEnter={() => setMouseOn("PRESS")}
        onMouseLeave={() => setMouseOn("DRAG")}
        onClick={handleZoomIn}
      >
        <ZoomInIcon />
        <span>Zoom In</span>
      </div>
      <div
        className={styles.child}
        onMouseEnter={() => setMouseOn("PRESS")}
        onMouseLeave={() => setMouseOn("DRAG")}
        onClick={handleZoomOut}
      >
        <ZoomOutIcon />
        <span>Zoom out</span>
      </div>
      <div
        className={styles.child}
        onMouseEnter={() => setMouseOn("PRESS")}
        onMouseLeave={() => setMouseOn("DRAG")}
        onClick={handleResetView}
      >
        <CameraIcon />
        <span>Reset view</span>
      </div>
      <div
        className={styles.child}
        onClick={handleFullScreen}
        onMouseEnter={() => setMouseOn("PRESS")}
        onMouseLeave={() => setMouseOn("DRAG")}
      >
        <FullScreenIcon />
        <span>Full screen</span>
      </div>
    </div>
  );
}

export default React.memo(Utils);
