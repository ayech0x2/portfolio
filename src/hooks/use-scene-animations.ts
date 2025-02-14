import gsap from "gsap";
import * as React from "react";
import * as THREE from "three";
import useRightAnimation from "./animations/use-right-animation";
import useSceneHelpers from "./use-scene-helpers";

export default function useSceneAnimations(
  sceneRef: React.RefObject<THREE.Group>
) {
  const rightAnimation = useRightAnimation(sceneRef);

  const { get3dObjectByName } = useSceneHelpers();

  const startWigglingGameBoy = (sceneRef: React.RefObject<THREE.Group>) => {
    const gameboy = get3dObjectByName(sceneRef, "gameboy");
    if (gameboy) {
      gsap.to(gameboy.rotation, {
        y: "-=0.05",
        x: "-=0.05",
        z: "-=0.05",
        duration: 5,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });
    }
  };

  const playEntranceAnimation = () => {
    const timelineAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#scroll-trigger",
        scrub: 2,
        start: "top top",
        end: "bottom bottom",
        markers: true,
        // toggleActions: "play none none reverse",
      },
    });
    timelineAnimation.add(rightAnimation);
  };

  return { startWigglingGameBoy, playEntranceAnimation };
}
