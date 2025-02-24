import gsap from "gsap";
import * as React from "react";
import * as THREE from "three";
import useSceneHelpers from "../use-scene-helpers";

export default function useGameboyRotationAnimation(
  gameboyRef: React.RefObject<THREE.Group>
) {
  const { get3dObjectByName } = useSceneHelpers();

  const animation = (direction: "FORWARD" | "BACKWARD" = "FORWARD") => {
    const gameboy = get3dObjectByName(gameboyRef, "gameboy");
    if (gameboy) {
      const forwardRotation = (Math.PI / 1.2) * -1;
      const backwardRotation = forwardRotation - forwardRotation;

      return gsap.to(gameboy.rotation, {
        y: direction === "FORWARD" ? forwardRotation : backwardRotation,
        ease: "power1.inOut",
      });
    }
  };

  return { animation };
}
