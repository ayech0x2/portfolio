import gsap from "gsap";
import * as React from "react";
import * as THREE from "three";
import useSceneHelpers from "../use-scene-helpers";

export default function useLeftHandAnimation(
  sceneRef: React.RefObject<THREE.Group>
) {
  const { get3dObjectByName } = useSceneHelpers();

  const animation = () => {
    const leftHand = get3dObjectByName(sceneRef, "left_hand_center");
    if (leftHand) {
      return gsap.fromTo(
        leftHand.position,
        { x: -4, z: -4 },
        {
          x: leftHand.position.x,
          z: leftHand.position.z,
          ease: "power1.inOut",
        }
      );
    }
  };

  return { animation };
}
