import { OrbitControls, Stats } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import {
  Bloom,
  ChromaticAberration,
  DepthOfField,
  EffectComposer,
  Vignette,
} from "@react-three/postprocessing";
import { Howl } from "howler";
import * as THREE from "three";
import "./App.css";
import Lights from "./components/Lights";
import Particles from "./components/Particles";
import Scene from "./components/Scene";

function App() {
  return (
    <div
      id="canvas-container"
      onClick={() => {
        const sound = new Howl({
          src: ["sound.mp3"],
        });
        sound.play();
      }}
    >
      <Canvas
        camera={{ position: [0, 2, 2] }}
        gl={{
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.2,
        }}
      >
        <OrbitControls
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 1.5}
          enablePan={false}
          zoomSpeed={1}
          minDistance={4}
          maxDistance={20}
          dampingFactor={0.01}
        />
        <Scene />
        <Stats />
        <Particles />
        <Lights />
        <axesHelper scale={4} />
        <EffectComposer>
          <Bloom
            intensity={0.1}
            luminanceThreshold={0.1}
            luminanceSmoothing={0.05}
          />
          <DepthOfField focusDistance={1} focalLength={0.1} bokehScale={0.1} />
          <Vignette eskil={false} offset={0.2} darkness={0.8} />
          <ChromaticAberration offset={[0.0005, 0.0005]} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}

export default App;
