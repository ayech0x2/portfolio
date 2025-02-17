import { Environment, OrbitControls, Stats } from "@react-three/drei";
import {
  Bloom,
  ChromaticAberration,
  DepthOfField,
  EffectComposer,
  Vignette,
} from "@react-three/postprocessing";
import { useAtomValue, useSetAtom } from "jotai";
import * as React from "react";
import * as THREE from "three";
import { entranceAnimationFinishedAtom, mouseOnAtom } from "../atoms";
import Lightformers from "./light-formers";
import Lights from "./lights";
import Particles from "./particles";

export default function SceneSetup() {
  const setMouseOn = useSetAtom(mouseOnAtom);

  const entranceAnimationFinished = useAtomValue(entranceAnimationFinishedAtom);

  return (
    <React.Fragment>
      <OrbitControls
        enabled={entranceAnimationFinished}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 1.5}
        enablePan={false}
        minDistance={2}
        maxDistance={11}
        dampingFactor={0.01}
        zoomSpeed={0.1}
        onStart={() => setMouseOn("DROP")}
        onEnd={() => setMouseOn("DRAG")}
      />

      <Stats className="stats-panel" />
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
