import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import * as React from "react";
import styles from "../css/header.module.css";
import text from "../css/text.module.css";

function Header() {
  const containerRef = React.useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      containerRef.current,
      {
        y: -100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
      }
    );
  });

  return (
    <div ref={containerRef} className={styles.container}>
      <div
        className={[
          text.title,
          text.textUppercase,
          text.semiBold,
          text.preventSelect,
        ].join(" ")}
      >
        Hamza ayech
      </div>
      <div
        className={[text.subTitle, text.textUppercase, text.preventSelect].join(
          " "
        )}
      >
        Senior frontend developer
      </div>
      <span className={[text.subTitle, text.preventSelect].join(" ")}>
        Nintendo Switch-inspired portfolio built with Three.js, Blender 3D, and
        React Three Fiber
      </span>
    </div>
  );
}

export default React.memo(Header);
