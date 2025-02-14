import gsap from "gsap";
import * as React from "react";
import * as THREE from "three";
import useSound from "./use-sound";
import useSceneHelpers from "./use-scene-helpers";

export default function useSceneInteractions() {
  const { playSound } = useSound();

  const { get3dObjectByName } = useSceneHelpers();

  const handleButtonPress = (
    sceneRef: React.RefObject<THREE.Group>,
    buttonName: string
  ) => {
    const button = get3dObjectByName(sceneRef, buttonName);

    if (button) {
      playSound(500);
      gsap.to(button.position, {
        z: "-=0.025",
        duration: 0.4,
        ease: "power2.in",
        yoyo: true,
        repeat: 1,
      });
    }
  };

  return {
    handleButtonPress,
  };
}
