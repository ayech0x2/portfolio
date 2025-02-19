import { Environment, OrbitControls, Stats } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import {
  Bloom,
  EffectComposer,
  HueSaturation,
} from "@react-three/postprocessing";
import gsap from "gsap";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import * as React from "react";
import { isMobile } from "react-device-detect";
import * as THREE from "three";
import { OrbitControls as OrbitControlsType } from "three-stdlib";
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

  const orbitControlRef = React.useRef<OrbitControlsType>(null);

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

  useFrame(() => {
    if (orbitControlRef.current) {
      orbitControlRef.current.target.set(0, 0.35, 0);
      orbitControlRef.current.update();
    }
  });

  return (
    <React.Fragment>
      <OrbitControls
        ref={orbitControlRef}
        enabled={entranceAnimationFinished}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 1.5}
        enablePan={false}
        enableRotate={true}
        enableZoom={true}
        minDistance={3}
        maxDistance={10}
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
      <EffectComposer>
        <Bloom
          intensity={0.2}
          luminanceThreshold={0.4}
          luminanceSmoothing={0.05}
        />
        <HueSaturation hue={0} saturation={0.35} />
      </EffectComposer>
      <Environment resolution={1024}>
        <Lightformers />
      </Environment>
    </React.Fragment>
  );
}

export default React.memo(SceneSetup);
