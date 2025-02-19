import { Environment, OrbitControls, Stats } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import {
  Bloom,
  ChromaticAberration,
  DepthOfField,
  EffectComposer,
  Vignette,
} from "@react-three/postprocessing";
import gsap from "gsap";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import * as React from "react";
import { isMobile } from "react-device-detect";
import * as THREE from "three";
import {
  cameraZoomAtom,
  entranceAnimationFinishedAtom,
  mouseOnAtom,
  resetViewRequestAtom,
} from "../atoms";
import Lightformers from "./light-formers";
import Lights from "./lights";
import Particles from "./particles";

function SceneSetup() {
  const { camera } = useThree();

  const [resetViewRequest, setResetViewRequest] = useAtom(resetViewRequestAtom);

  const [cameraZoom, setCameraZoom] = useAtom(cameraZoomAtom);

  const setMouseOn = useSetAtom(mouseOnAtom);

  const entranceAnimationFinished = useAtomValue(entranceAnimationFinishedAtom);

  React.useEffect(() => {
    gsap.to(camera, {
      zoom: cameraZoom,
      duration: 1,
      ease: "power2.out",
      onUpdate: () => camera.updateProjectionMatrix(),
    });
  }, [camera, cameraZoom]);

  React.useEffect(() => {
    if (resetViewRequest) {
      gsap.to(camera.position, {
        x: 0,
        y: 0.169,
        z: 8,
        duration: 1,
        ease: "power2.out",
        onStart: () => {
          setCameraZoom(1);
        },
        onComplete: () => {
          camera.updateProjectionMatrix();
          setResetViewRequest(false);
        },
      });
    }
  }, [camera, resetViewRequest, setCameraZoom, setResetViewRequest]);

  return (
    <React.Fragment>
      <OrbitControls
        enabled={entranceAnimationFinished}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 1.5}
        enablePan={false}
        enableRotate={true}
        enableZoom={true}
        minDistance={2}
        maxDistance={11}
        dampingFactor={isMobile ? 0.05 : 0.01}
        zoomSpeed={0.1}
        onStart={() => setMouseOn("DROP")}
        onEnd={() => setMouseOn("DRAG")}
        touches={{
          ONE: THREE.TOUCH.ROTATE,
          TWO: THREE.TOUCH.DOLLY_PAN,
        }}
      />

      <Stats className="stats-panel" />
      <Particles />
      <Lights />
      {!isMobile && (
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
      )}
      <Environment resolution={1024}>
        <Lightformers />
      </Environment>
    </React.Fragment>
  );
}

export default React.memo(SceneSetup);
