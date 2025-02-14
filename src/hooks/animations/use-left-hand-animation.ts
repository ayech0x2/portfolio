import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import * as React from "react";
import * as THREE from "three";
import useSceneHelpers from "../use-scene-helpers";

export default function useLeftHandAnimation(
  sceneRef: React.RefObject<THREE.Group>
) {
  const { get3dObjectByName } = useSceneHelpers();
  const leftHandAnimationTimeline = gsap.timeline();

  useGSAP(() => {
    const left_hand = get3dObjectByName(sceneRef, "full_left_hand");

    if (left_hand) {
      leftHandAnimationTimeline.fromTo(
        left_hand.position,
        { x: -4, z: -4 },
        {
          x: left_hand.position.x,
          z: left_hand.position.z,
          ease: "power1.inOut",
        }
      );
    }
  });

  return leftHandAnimationTimeline;
}
