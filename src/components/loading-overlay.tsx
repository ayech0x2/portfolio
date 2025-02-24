import { useGSAP } from "@gsap/react";
import { useProgress } from "@react-three/drei";
import gsap from "gsap";
import { useSetAtom } from "jotai";
import * as React from "react";
import { loadingAtom } from "../atoms";
import styles from "../css/loading.module.css";
import useSound from "../hooks/use-sound";
import EnvironementIcon from "./icons/environement-icon";

export default function LoadingOverlay() {
  const { progress } = useProgress();

  const { playBackgroundMusic } = useSound();

  const buttonRef = React.useRef<HTMLButtonElement>(null);

  const setLoading = useSetAtom(loadingAtom);

  useGSAP(
    () => {
      if (progress >= 100 && buttonRef.current) {
        gsap.fromTo(
          buttonRef.current,
          {
            y: 10,
          },
          {
            opacity: 1,
            y: 0,
            display: "block",
            pointerEvents: "unset",
          }
        );
      }
    },
    { dependencies: [progress, buttonRef] }
  );

  const handleButtonPress = () => {
    if (progress >= 100) {
      playBackgroundMusic();
      setLoading(false);
    }
  };

  const renderProgress = () => {
    const _progress = progress.toFixed(0);
    if (progress < 10) return "00" + _progress;
    if (progress < 100) return "0" + _progress;
    return _progress;
  };

  return (
    <div className={styles.container}>
      <div className={styles.iconContainer}>
        <EnvironementIcon />
      </div>
      <span>
        Hey, I'm <span>Hamza Ayech</span>, a senior frontend developer with 8
        years of experience.
      </span>
      <p>Portfolio website</p>
      <button
        ref={buttonRef}
        className={styles.button}
        onClick={handleButtonPress}
      >
        Take a look
      </button>
      <div className={styles.progress}>{renderProgress()}</div>
    </div>
  );
}
