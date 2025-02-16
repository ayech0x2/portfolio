import { Environment, OrbitControls } from "@react-three/drei";
import {
  Bloom,
  ChromaticAberration,
  DepthOfField,
  EffectComposer,
  Vignette,
} from "@react-three/postprocessing";
import * as React from "react";
import * as THREE from "three";
import Lightformers from "./light-formers";
import Lights from "./lights";
import Particles from "./particles";

export default function SceneSetup() {
  return (
    <React.Fragment>
      <OrbitControls
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 1.5}
        enablePan={false}
        minDistance={6}
        maxDistance={10}
        dampingFactor={0.01}
      />
      <Particles />
      <Lights />
      <EffectComposer>
        <Bloom
          intensity={0.1}
          luminanceThreshold={0.4}
          luminanceSmoothing={0.05}
        />
        <DepthOfField focusDistance={1} focalLength={0.1} bokehScale={0.1} />
        <Vignette eskil={false} offset={0.1} darkness={0.8} />
        <ChromaticAberration
          offset={new THREE.Vector2(0.0006, 0.0006)}
          radialModulation={false}
          modulationOffset={0}
        />
      </EffectComposer>
      <Environment resolution={1024}>
        <Lightformers />
      </Environment>
    </React.Fragment>
  );
}
