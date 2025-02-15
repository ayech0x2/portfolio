import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import * as React from "react";
import * as THREE from "three";
import useSceneHelpers from "../use-scene-helpers";

export default function useScrewsHandAnimation(
  sceneRef: React.RefObject<THREE.Group>
) {
  const { get3dObjectByName } = useSceneHelpers();
  const screwsAnimationTimeline = gsap.timeline();

  useGSAP(() => {
    const screws = get3dObjectByName(sceneRef, "screws") as THREE.Mesh;
    if (screws.material instanceof Array) {
      screws.material.forEach((child) => {
        child.transparent = true;
        child.opacity = 0;
      });
    } else {
      screws.material.transparent = true;
      screws.material.opacity = 0;
    }
    if (screws) {
      screwsAnimationTimeline.fromTo(
        screws.position,
        { z: -4 },
        {
          z: screws.position.z,
          ease: "power1.inOut",
          duration: 1.5,
          onUpdate: () => {
            if (screws.material instanceof Array) {
              screws.material.forEach((child) => {
                child.transparent = true;
                child.opacity = screwsAnimationTimeline.progress();
              });
            } else {
              screws.material.transparent = true;
              screws.material.opacity = screwsAnimationTimeline.progress();
            }
          },
        }
      );
    }
  });

  return screwsAnimationTimeline;
}
