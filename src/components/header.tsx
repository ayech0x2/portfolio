import gsap from "gsap";
import * as React from "react";
import styles from "../css/header.module.css";
import text from "../css/text.module.css";
import { useGSAP } from "@gsap/react";

export default function Header() {
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
        className={[text.title, text.textUppercase, text.semiBold].join(" ")}
      >
        Hamza ayech
      </div>
      <div className={[text.subTitle, text.textUppercase].join(" ")}>
        Senior frontend developer
      </div>
      <span className={[text.subTitle].join(" ")}>
        Nintendo Switch-inspired portfolio built with Three.js, Blender 3D, and
        React Three Fiber
      </span>
    </div>
  );
}
