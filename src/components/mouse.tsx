import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useAtomValue } from "jotai";
import * as React from "react";
import { mouseOnAtom } from "../atoms";
import styles from "../css/mouse.module.css";
import { MouseCoords } from "../types";

function Mouse({ x, y }: MouseCoords) {
  const mouseRef = React.useRef<HTMLDivElement>(null);

  const mouseOn = useAtomValue(mouseOnAtom);

  useGSAP(
    () => {
      gsap.to(mouseRef.current, {
        x: x - 60,
        y: y + 20,
        duration: 0.5,
      });
    },
    { dependencies: [x, y] }
  );

  const renderText = () => {
    switch (mouseOn) {
      case "SCROLL":
        return "SCROLL";
      case "DRAG":
        return "DRAG 3D SCENE";
      case "DROP":
        return "YOU CAN DROP IT";
      case "PRESS":
        return "PRESS BUTTON";
      case "HIDE":
        return "HIDE HINT";
      default:
        return "";
    }
  };
  return (
    <div ref={mouseRef} className={styles.container}>
      <span className={styles.text}>{renderText()}</span>
    </div>
  );
}

export default React.memo(Mouse);
