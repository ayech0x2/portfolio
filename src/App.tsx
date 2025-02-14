import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import Scene from "./components/scene";
import SceneSetup from "./components/scene-setup";
import "./index.css";

function App() {
  return (
    <div id="canvas-container" onClick={() => {}}>
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
  );
}

export default App;
