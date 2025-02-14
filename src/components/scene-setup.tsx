import { OrbitControls, Stats } from "@react-three/drei";
import {
  Bloom,
  ChromaticAberration,
  DepthOfField,
  EffectComposer,
  Vignette,
} from "@react-three/postprocessing";
import * as React from "react";
import * as THREE from "three";
import Lights from "./lights";
import Particles from "./particles";

export default function SceneSetup() {
  return (
    <React.Fragment>
      <OrbitControls
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 1.5}
        enablePan={false}
        zoomSpeed={1}
        minDistance={4}
        maxDistance={20}
        dampingFactor={0.01}
      />
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
        <Vignette eskil={false} offset={0.1} darkness={0.8} />
        <ChromaticAberration
          offset={new THREE.Vector2(0.0006, 0.0006)}
          radialModulation={false}
          modulationOffset={0}
        />
      </EffectComposer>
    </React.Fragment>
  );
}
