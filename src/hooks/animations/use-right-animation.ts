import gsap from "gsap";
import * as THREE from "three";
import useSceneHelpers from "../use-scene-helpers";
import * as React from "react";
import { useGSAP } from "@gsap/react";

export default function useRightAnimation(
  sceneRef: React.RefObject<THREE.Group>
) {
  const { get3dObjectByName } = useSceneHelpers();
  const rightAnimationTimeline = gsap.timeline();

  useGSAP(() => {
    const Y_button = get3dObjectByName(sceneRef, "Y_button");

    if (Y_button) {
      rightAnimationTimeline
        .fromTo(
          Y_button.rotation,
          { x: Math.PI * 4 },
          { x: Y_button.rotation.x },
          0
        )
        .fromTo(Y_button.position, { x: 4 }, { x: Y_button.position.x }, 0);
    }
  });

  return rightAnimationTimeline;
}
