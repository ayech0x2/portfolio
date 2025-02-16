import { useGSAP } from "@gsap/react";
import * as React from "react";
import styles from "../css/footer.module.css";
import text from "../css/text.module.css";

import gsap from "gsap";
import { useAtomValue } from "jotai";
import { entranceAnimationFinishedAtom } from "../atoms";
import MouseIcon from "./icons/mouse-icon";
import EnvironementIcon from "./icons/environement-icon";

export default function Footer() {
  const entranceAnimationFinished = useAtomValue(entranceAnimationFinishedAtom);

  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrolldownRef = React.useRef<HTMLDivElement>(null);
  const moveAroundRef = React.useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      containerRef.current,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
      }
    );
  });

  useGSAP(
    () => {
      if (entranceAnimationFinished) {
        gsap.killTweensOf(scrolldownRef.current);
        const tl = gsap.timeline();
        tl.fromTo(scrolldownRef.current, { y: 0, opacity: 1 }, { opacity: 0 });
        tl.fromTo(
          moveAroundRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1 }
        );
      }
    },
    { dependencies: [entranceAnimationFinished] }
  );

  useGSAP(() => {
    if (scrolldownRef.current) {
      gsap.to(scrolldownRef.current, {
        y: -10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }
  });
  return (
    <div ref={containerRef} className={styles.container}>
      <div className={[text.subTitle, text.preventSelect].join(" ")}>
        4yech.hamza@gmail.com
      </div>
      <div className={[text.subTitle, text.preventSelect].join(" ")}>
        Phone: +216 54 07 18 21
      </div>
      {entranceAnimationFinished && (
        <div
          ref={moveAroundRef}
          className={[
            styles.environement,
            text.subTitle,
            text.preventSelect,
          ].join(" ")}
        >
          <EnvironementIcon />
          Now you can rotate around.
        </div>
      )}
      {!entranceAnimationFinished && (
        <div
          ref={scrolldownRef}
          className={[
            text.subTitle,
            styles.scrollDown,
            text.preventSelect,
          ].join(" ")}
        >
          <MouseIcon />
          Scroll down
        </div>
      )}
    </div>
  );
}
