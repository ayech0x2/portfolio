import { useGSAP } from "@gsap/react";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReactLenis from "lenis/react";
import * as React from "react";
import * as THREE from "three";
import Scene from "./components/scene";
import "./index.css";

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.normalizeScroll(true);
gsap.registerPlugin(useGSAP);

function App() {
  return (
    <React.Fragment>
      <ReactLenis
        root
        options={{
          smoothWheel: true,
          lerp: 0.05,
          wheelMultiplier: 0.7,
          touchMultiplier: 0.7,
        }}
      >
        <div id="scroll-trigger" />
      </ReactLenis>
      <div id="canvas-container">
        <Canvas
          gl={{
            toneMapping: THREE.ACESFilmicToneMapping,
            toneMappingExposure: 1.2,
          }}
        >
          <Scene />
        </Canvas>
      </div>
    </React.Fragment>
  );
}

export default App;
