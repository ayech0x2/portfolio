import { useGSAP } from "@gsap/react";
import { useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import * as React from "react";
import * as THREE from "three";
import { GLTFResult } from "../../types";
import Cameras from "./cameras";
import LeftHand from "./left-hand";
import RightHand from "./right-hand";
import Screen from "./screen";
import Screws from "./screws";
import Stand from "./stand";
import useSceneInteractions from "../../hooks/use-scene-interactions";
import useSceneAnimations from "../../hooks/use-scene-animations";

export default function Scene(props: GroupProps) {
  const sceneRef = React.useRef<THREE.Group>(null!);

  const gLTFResult = useGLTF("/scene.glb") as unknown as GLTFResult;

  const { handleButtonPress } = useSceneInteractions();

  const buttonPress = (buttonName: string) => {
    handleButtonPress(sceneRef, buttonName);
  };
  // const { get3dObjectByName } = useSceneHelpers();

  const { playEntranceAnimation } = useSceneAnimations(sceneRef);

  useGSAP(() => {
    playEntranceAnimation();
    // const camera = get3dObjectByName(sceneRef, "main_camera");
    // const camera2 = get3dObjectByName(sceneRef, "A_camera");
    // const screws = get3dObjectByName(sceneRef, "screws");
  });

  return (
    <group {...props} dispose={null} ref={sceneRef}>
      <Cameras />
      <LeftHand buttonPress={buttonPress} {...gLTFResult} />
      <Screen {...gLTFResult} />
      <RightHand buttonPress={buttonPress} {...gLTFResult} />
      <Screws {...gLTFResult} />
      <Stand {...gLTFResult} />
    </group>
  );
}

useGLTF.preload("/scene.glb");
