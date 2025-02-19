import { useSetAtom } from "jotai";
import * as React from "react";
import { mouseOnAtom } from "../../atoms";
import styles from "../../css/screen-hint.module.css";
import useHintAnimation from "../../hooks/animations/use-hint-animation";

export default function ScreenHint() {
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
        SCREEN
      </span>
      <p className={styles.helper}>
        The screen is not touch-enabled, so interactions are handled using
        buttons instead.
      </p>
      <span
        onMouseEnter={() => setMouseOn("HIDE")}
        onMouseLeave={() => setMouseOn("DRAG")}
        className={[styles.hide, styles.preventSelect].join(" ")}
        onClick={() => setHidden(true)}
      >
        GOT IT
      </span>
    </div>
  );
}
