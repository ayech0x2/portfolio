import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import * as React from "react";
import styles from "../css/landscape.module.css";
import MobileIcon from "./icons/mobile-icon";

export default function LandscapeMode() {
  const mobileIconRef = React.useRef(null);

  const containerRef = React.useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      containerRef.current,
      {
        y: -20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
      }
    );

    const tl = gsap.timeline({ repeat: -1 });
    tl.to(mobileIconRef.current, {
      rotation: "90_short",
    });
    tl.add(
      gsap.to(mobileIconRef.current, {
        rotation: "180_short",
      }),
      "+=1.5"
    );
    tl.add(
      gsap.to(mobileIconRef.current, {
        rotation: "270_short",
      })
    );
    tl.add(
      gsap.to(mobileIconRef.current, {
        rotation: "360_short",
      }),
      "+=1.5"
    );
  });

  return (
    <div className={styles.container} ref={containerRef}>
      <div ref={mobileIconRef}>
        <MobileIcon />
      </div>
      <span>
        For the best experience, please rotate your phone to landscape mode.
      </span>
    </div>
  );
}
