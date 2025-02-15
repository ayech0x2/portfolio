import gsap from "gsap";
import * as React from "react";
import * as THREE from "three";
import useSceneHelpers from "../use-scene-helpers";

export default function useStandAnimation(
  sceneRef: React.RefObject<THREE.Group>
) {
  const { get3dObjectByName } = useSceneHelpers();

  const animation = () => {
    const stand = get3dObjectByName(sceneRef, "stand_container");
    if (stand) {
      return gsap.fromTo(
        stand.position,
        { y: -2 },
        {
          y: stand.position.y,
          ease: "power1.inOut",
        }
      );
    }
  };

  return { animation };
}
