import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import * as React from "react";
import styles from "../css/utils.module.css";
import useSound from "../hooks/use-sound";
import CameraIcon from "./icons/camera-icon";
import MuteIcon from "./icons/mute-icon";
import UnmuteIcon from "./icons/unmute-icon";
import ZoomInIcon from "./icons/zoom-in-icon";
import ZoomOutIcon from "./icons/zoom-out-icon";
import { useSetAtom } from "jotai";
import { mouseOnAtom } from "../atoms";

export default function Utils() {
  const containerRef = React.useRef<HTMLDivElement>(null);

  const setMouseOn = useSetAtom(mouseOnAtom);

  const { muteBackgroundMusic, unMuteBackgroundMusic, muted } = useSound();

  useGSAP(() => {
    gsap.fromTo(
      containerRef.current,
      {
        x: 100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
      }
    );
  });

  return (
    <div ref={containerRef} className={styles.container}>
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
      >
        <ZoomInIcon />
        <span>Zoom In</span>
      </div>
      <div
        className={styles.child}
        onMouseEnter={() => setMouseOn("PRESS")}
        onMouseLeave={() => setMouseOn("DRAG")}
      >
        <ZoomOutIcon />
        <span>Zoom out</span>
      </div>
      <div
        className={styles.child}
        onMouseEnter={() => setMouseOn("PRESS")}
        onMouseLeave={() => setMouseOn("DRAG")}
      >
        <CameraIcon />
        <span>Reset view</span>
      </div>
    </div>
  );
}
