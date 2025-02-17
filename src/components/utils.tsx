import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useAtom } from "jotai";
import * as React from "react";
import { sceneMutedAtom } from "../atoms";
import styles from "../css/utils.module.css";
import CameraIcon from "./icons/camera-icon";
import MuteIcon from "./icons/mute-icon";
import UnmuteIcon from "./icons/unmute-icon";
import ZoomInIcon from "./icons/zoom-in-icon";
import ZoomOutIcon from "./icons/zoom-out-icon";

export default function Utils() {
  const containerRef = React.useRef<HTMLDivElement>(null);

  const [sceneMuted, setSceneMuted] = useAtom(sceneMutedAtom);

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
      {sceneMuted ? (
        <div className={styles.child} onClick={() => setSceneMuted(false)}>
          <UnmuteIcon />
          <span>Unmute</span>
        </div>
      ) : (
        <div className={styles.child} onClick={() => setSceneMuted(true)}>
          <MuteIcon />
          <span>Mute</span>
        </div>
      )}
      <div className={styles.child}>
        <ZoomInIcon />
        <span>Zoom In</span>
      </div>
      <div className={styles.child}>
        <ZoomOutIcon />
        <span>Zoom out</span>
      </div>
      <div className={styles.child}>
        <CameraIcon />
        <span>Reset view</span>
      </div>
    </div>
  );
}
