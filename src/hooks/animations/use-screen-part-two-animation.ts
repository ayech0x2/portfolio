import gsap from "gsap";
import * as React from "react";
import * as THREE from "three";
import useSceneHelpers from "../use-scene-helpers";

export default function useScreenPartTwoAnimation(
  sceneRef: React.RefObject<THREE.Group>
) {
  const { get3dObjectByName } = useSceneHelpers();

  const animation = () => {
    const screenPartTwo = get3dObjectByName(
      sceneRef,
      "screen_part_two"
    ) as THREE.Group;
    if (screenPartTwo) {
      return gsap.fromTo(
        screenPartTwo.position,
        { x: 6, z: -4 },
        {
          x: screenPartTwo.position.x,
          z: screenPartTwo.position.z,
          ease: "power1.inOut",
        }
      );
    }
  };

  return { animation };
}
