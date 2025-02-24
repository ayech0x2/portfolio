import { useSetAtom } from "jotai";
import * as React from "react";
import { mouseOnAtom } from "../../atoms";
import styles from "../../css/hint.module.css";
import useHintAnimation from "../../hooks/animations/use-hint-animation";

export default function Hint() {
  const [hidden, setHidden] = React.useState(false);

  const setMouseOn = useSetAtom(mouseOnAtom);

  const containerRef = React.useRef<HTMLDivElement>(null);

  useHintAnimation(containerRef, () => setHidden(true));

  if (hidden) return null;

  return (
    <div ref={containerRef} className={styles.container}>
      <div className={styles.circle} />
      <div className={styles.line} />
      <span className={[styles.hint, styles.preventSelect].join(" ")}>
        CONTROLS
      </span>
      <span
        onMouseEnter={() => setMouseOn("HIDE")}
        onMouseLeave={() => setMouseOn("DRAG")}
        className={[styles.hide, styles.preventSelect].join(" ")}
        onClick={() => setHidden(true)}
      >
        HIDE
      </span>
    </div>
  );
}
