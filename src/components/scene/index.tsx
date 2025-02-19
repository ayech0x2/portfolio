import { Scroll, ScrollControls, useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { useAtomValue } from "jotai";
import * as React from "react";
import * as THREE from "three";
import { entranceAnimationFinishedAtom } from "../../atoms";
import useSceneInteractions from "../../hooks/use-scene-interactions";
import { GLTFResult } from "../../types";
import SceneSetup from "../scene-setup";
import Cameras from "./cameras";
import LeftHand from "./left-hand";
import RightHand from "./right-hand";
import Screen from "./screen";
import Screws from "./screws";
import ScrollHandler from "./scroll-handler";
import Stand from "./stand";

function Scene(props: GroupProps) {
  const [isReady, setIsReady] = React.useState(false);

  const entranceAnimationFinished = useAtomValue(entranceAnimationFinishedAtom);

  const sceneRef = React.useRef<THREE.Group>(null!);

  const gLTFResult = useGLTF("/scene.glb") as unknown as GLTFResult;

  const { buttons, direction } = useSceneInteractions(sceneRef);

  React.useEffect(() => {
    if (sceneRef.current) {
      setIsReady(true);
    }
  }, []);

  return (
    <group {...props} dispose={null} ref={sceneRef}>
      <Cameras />
      {isReady && (
        <React.Fragment>
          <SceneSetup />
          <group name="gameboy">
            <LeftHand {...direction} {...gLTFResult} />
            <Screen {...gLTFResult} />
            <RightHand {...buttons} {...gLTFResult} />
            <Screws {...gLTFResult} />
          </group>
          <group name="stand_container">
            <Stand {...gLTFResult} />
          </group>
        </React.Fragment>
      )}
      <ScrollControls
        pages={8}
        maxSpeed={0.1}
        enabled={!entranceAnimationFinished}
      >
        <Scroll>
          <ScrollHandler sceneRef={sceneRef} isReady={isReady} />
        </Scroll>
      </ScrollControls>
    </group>
  );
}

export default React.memo(Scene);

useGLTF.preload("/scene.glb");
