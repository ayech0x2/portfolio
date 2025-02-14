import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import * as React from "react";
import * as THREE from "three";
import useSceneHelpers from "../use-scene-helpers";

export default function useRightHandAnimation(
  sceneRef: React.RefObject<THREE.Group>
) {
  const { get3dObjectByName } = useSceneHelpers();
  const rightHandAnimationTimeline = gsap.timeline();

  useGSAP(() => {
    const right_hand = get3dObjectByName(sceneRef, "full_right_hand");

    if (right_hand) {
      rightHandAnimationTimeline.fromTo(
        right_hand.position,
        { x: 4, z: -4 },
        {
          x: right_hand.position.x,
          z: right_hand.position.z,
          ease: "power1.inOut",
        }
      );
    }
  });

  return rightHandAnimationTimeline;
}
