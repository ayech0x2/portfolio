import gsap from "gsap";
import * as React from "react";
import * as THREE from "three";
import useSceneHelpers from "../use-scene-helpers";

export default function useScreenPartOneAnimation(
  sceneRef: React.RefObject<THREE.Group>
) {
  const { get3dObjectByName } = useSceneHelpers();

  const animation = () => {
    const screenPartOne = get3dObjectByName(sceneRef, "screen_part_one");
    if (screenPartOne) {
      return gsap.fromTo(
        screenPartOne.position,
        { x: 6, z: -4 },
        {
          x: screenPartOne.position.x,
          z: screenPartOne.position.z,
          ease: "power1.inOut",
        }
      );
    }
  };

  return { animation };
}
