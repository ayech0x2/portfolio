import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import * as React from "react";
import * as THREE from "three";
import useSceneHelpers from "../use-scene-helpers";

export default function useScreenAnimation(
  sceneRef: React.RefObject<THREE.Group>
) {
  const { get3dObjectByName } = useSceneHelpers();
  const screenAnimationTimeline = gsap.timeline();

  useGSAP(() => {
    const full_screen = get3dObjectByName(sceneRef, "full_screen");

    if (full_screen) {
      screenAnimationTimeline.fromTo(
        full_screen.position,
        { y: 3, z: -5 },
        {
          y: full_screen.position.y,
          z: full_screen.position.z,
          ease: "power1.inOut",
        }
      );
    }
  });

  return screenAnimationTimeline;
}
