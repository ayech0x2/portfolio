import { Canvas } from "@react-three/fiber";
import * as React from "react";
import * as THREE from "three";
import Footer from "./components/footer";
import Header from "./components/header";
import Lenis from "./components/lenis";
import Scene from "./components/scene";

function App() {
  return (
    <React.Fragment>
      <Lenis />
      <Header />
      <Footer />
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
