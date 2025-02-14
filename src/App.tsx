import { useGSAP } from "@gsap/react";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as React from "react";
import * as THREE from "three";
import Scene from "./components/scene";
import SceneSetup from "./components/scene-setup";
import "./index.css";

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.normalizeScroll(true);
gsap.registerPlugin(useGSAP);

function App() {
  return (
    <React.Fragment>
      <div id="scroll-trigger" />
      <div id="canvas-container">
        <Canvas
          camera={{ position: [0, 2, 2] }}
          gl={{
            toneMapping: THREE.ACESFilmicToneMapping,
            toneMappingExposure: 1.2,
          }}
        >
          <SceneSetup />
          <Scene />
        </Canvas>
      </div>
    </React.Fragment>
  );
}

export default App;
