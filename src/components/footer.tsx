import { useGSAP } from "@gsap/react";
import * as React from "react";
import styles from "../css/footer.module.css";
import text from "../css/text.module.css";

import gsap from "gsap";
import { isMobile } from "react-device-detect";
import LampIcon from "./icons/lamp-icon";

const phrases = [
  "Click and drag to explore the scene!",
  "Hover over objects to learn more.",
  "Use the scroll wheel to zoom in and out.",
  "This scene was built with Three.js and React Three Fiber.",
  "Rotate to view the Switch from all angles.",
  "This scene uses GLTF models for high-quality assets.",
  "Lighting and shadows are dynamically calculated.",
  "Thanks for visiting my portfolio!",
];
function Footer() {
  const [helpContent, setHelpContent] = React.useState<string>(phrases[0]);

  const containerRef = React.useRef<HTMLDivElement>(null);
  const helpRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const setHelpContentRandomly = () => {
      setHelpContent(phrases[Math.floor(Math.random() * phrases.length)]);
    };
    const interval = setInterval(setHelpContentRandomly, 5000);
    return () => clearInterval(interval);
  }, []);

  useGSAP(() => {
    gsap.to(helpRef.current, {
      y: 10,
      yoyo: true,
      repeat: -1,
      duration: 1,
    });
  });

  useGSAP(() => {
    gsap.fromTo(
      containerRef.current,
      {
        y: 100,
        opacity: 0,
      },
      {
        delay: 0.5,
        y: 0,
        opacity: 1,
        duration: 1,
      }
    );
  });

  return (
    <div
      ref={containerRef}
      className={[styles.container, !isMobile ? styles.desktop : ""].join(" ")}
    >
      <div className={[text.p].join(" ")}>
        <a href="mailto:4yech.hamza@gmail.com">4yech.hamza@gmail.com</a>
      </div>
      <div className={[text.p].join(" ")}>
        <a href="tel:+21654071821">Phone: +216 54 07 18 21</a>
      </div>
      <div
        ref={helpRef}
        className={[text.p, styles.scrollDown, text.preventSelect].join(" ")}
      >
        <LampIcon />
        {helpContent}
      </div>
    </div>
  );
}

export default React.memo(Footer);
