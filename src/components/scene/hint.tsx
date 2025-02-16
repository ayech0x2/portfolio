import { useGSAP } from "@gsap/react";
import styles from "../../css/hint.module.css";
import * as React from "react";
import gsap from "gsap";

export default function Hint() {
  const [hidden, setHidden] = React.useState(false);

  const containerRef = React.useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      containerRef.current,
      {
        opacity: 0,
        x: 50,
      },
      { x: 0, opacity: 1 }
    );
  });

  if (hidden) return null;
  return (
    <div ref={containerRef} className={styles.container}>
      <div className={styles.circle} />
      <div className={styles.line} />
      <span className={[styles.hint, styles.preventSelect].join(" ")}>
        CONTROLS
      </span>
      <span
        className={[styles.hide, styles.preventSelect].join(" ")}
        onClick={() => setHidden(true)}
      >
        HIDE
      </span>
    </div>
  );
}
