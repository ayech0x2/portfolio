import gsap from "gsap";
import * as React from "react";
import * as THREE from "three";
import useSceneHelpers from "./use-scene-helpers";
import useRightHandAnimation from "./animations/use-right-hand-animation";
import useLeftHandAnimation from "./animations/use-left-hand-animation";
import useScreenAnimation from "./animations/use-screen-animation";
import useScrewsHandAnimation from "./animations/use-screws-animations";

export default function useSceneAnimations(
  sceneRef: React.RefObject<THREE.Group>
) {
  const rightHandAnimation = useRightHandAnimation(sceneRef);
  const leftHandAnimation = useLeftHandAnimation(sceneRef);
  const screenAnimation = useScreenAnimation(sceneRef);
  const screwsAnimation = useScrewsHandAnimation(sceneRef);

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
    // const timelineAnimation = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: "#scroll-trigger",
    //     scrub: 1,
    //     start: "top top",
    //     end: "bottom bottom",
    //     snap: 0.1,
    //   },
    // });
    // timelineAnimation.add(screwsAnimation);
    // timelineAnimation.add(screenAnimation);
    // timelineAnimation.add(rightHandAnimation);
    // timelineAnimation.add(leftHandAnimation);
  };

  return { startWigglingGameBoy, playEntranceAnimation };
}
