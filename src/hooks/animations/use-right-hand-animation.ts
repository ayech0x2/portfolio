import gsap from "gsap";
import * as React from "react";
import * as THREE from "three";
import useSceneHelpers from "../use-scene-helpers";

export default function useRightHandAnimation(
  sceneRef: React.RefObject<THREE.Group>
) {
  const { get3dObjectByName } = useSceneHelpers();

  const animation = () => {
    const rightHand = get3dObjectByName(sceneRef, "right_hand_center");
    if (rightHand) {
      return gsap.fromTo(
        rightHand.position,
        { x: 4, z: -4 },
        {
          x: rightHand.position.x,
          z: rightHand.position.z,
          ease: "power1.inOut",
        }
      );
    }
  };

  return { animation };
}
