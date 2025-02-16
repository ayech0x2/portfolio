import { useGSAP } from "@gsap/react";
import { useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { useAtomValue, useSetAtom } from "jotai";
import * as React from "react";
import * as THREE from "three";
import { entranceAnimationFinishedAtom, mouseOnAtom } from "../../atoms";
import useSceneAnimations from "../../hooks/use-scene-animations";
import useSceneInteractions from "../../hooks/use-scene-interactions";
import { GLTFResult } from "../../types";
import SceneSetup from "../scene-setup";
import Cameras from "./cameras";
import LeftHand from "./left-hand";
import RightHand from "./right-hand";
import Screen from "./screen";
import Screws from "./screws";
import Stand from "./stand";

export default function Scene(props: GroupProps) {
  const [isReady, setIsReady] = React.useState(false);

  const setMouseOn = useSetAtom(mouseOnAtom);

  const entranceAnimationFinished = useAtomValue(entranceAnimationFinishedAtom);

  const sceneRef = React.useRef<THREE.Group>(null!);

  const gLTFResult = useGLTF("/scene.glb") as unknown as GLTFResult;

  const { handleButtonPress } = useSceneInteractions();

  const { playEntranceAnimation, startWigglingGameBoy, startWigglingStand } =
    useSceneAnimations(sceneRef);

  React.useEffect(() => {
    if (sceneRef.current) {
      setIsReady(true);
    }
  }, []);

  React.useEffect(() => {
    if (!entranceAnimationFinished) {
      setMouseOn("SCROLL");
    }
  }, [entranceAnimationFinished, setMouseOn]);

  useGSAP(
    () => {
      if (isReady) {
        playEntranceAnimation();
        startWigglingGameBoy();
        startWigglingStand();
      }
    },
    { dependencies: [isReady] }
  );

  const buttonPress = (buttonName: string) => {
    handleButtonPress(sceneRef, buttonName);
  };

  return (
    <group {...props} dispose={null} ref={sceneRef}>
      <Cameras />
      {isReady && (
        <React.Fragment>
          <SceneSetup />
          <group name="gameboy">
            <LeftHand buttonPress={buttonPress} {...gLTFResult} />
            <Screen {...gLTFResult} />
            <RightHand buttonPress={buttonPress} {...gLTFResult} />
            <Screws {...gLTFResult} />
          </group>
          <group name="stand_container">
            <Stand {...gLTFResult} />
          </group>
        </React.Fragment>
      )}
    </group>
  );
}

useGLTF.preload("/scene.glb");
