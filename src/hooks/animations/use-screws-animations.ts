import gsap from "gsap";
import * as React from "react";
import * as THREE from "three";
import useSceneHelpers from "../use-scene-helpers";

export default function useScrewsHandAnimation(
  sceneRef: React.RefObject<THREE.Group>
) {
  const { get3dObjectByName } = useSceneHelpers();

  const animation = () => {
    const screws = get3dObjectByName(sceneRef, "screws") as THREE.Mesh;

    if (!screws) {
      return;
    }

    if (screws.material) {
      if (Array.isArray(screws.material)) {
        screws.material.forEach((child) => {
          child.transparent = true;
          child.opacity = 0;
        });
      } else {
        screws.material.transparent = true;
        screws.material.opacity = 0;
      }
    } else {
      console.warn("Screws material not found!");
    }

    return gsap.fromTo(
      screws.position,
      {
        x: screws.position.x - 0.1,
        y: screws.position.y,
        z: screws.position.z - 0.5,
      },
      {
        x: screws.position.x,
        y: screws.position.y,
        z: screws.position.z,
        ease: "power1.inOut",
        onUpdate: function () {
          const progress = this.progress();
          if (screws.material) {
            if (Array.isArray(screws.material)) {
              screws.material.forEach((child) => {
                child.transparent = true;
                child.opacity = progress;
              });
            } else {
              screws.material.transparent = true;
              screws.material.opacity = progress;
            }
          }
        },
      }
    );
  };

  return { animation };
}
