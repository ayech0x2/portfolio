import { useProgress } from "@react-three/drei";
import styles from "../css/loading.module.css";
import EnvironementIcon from "./icons/environement-icon";
import { useSetAtom } from "jotai";
import { loadingAtom } from "../atoms";
import * as React from "react";

export default function LoadingOverlay() {
  const { progress } = useProgress();

  const setLoading = useSetAtom(loadingAtom);

  React.useEffect(() => {
    if (progress >= 100) {
      setLoading(false);
    }
  }, [progress, setLoading]);

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

      <div className={styles.progress}>{renderProgress()}</div>
    </div>
  );
}
