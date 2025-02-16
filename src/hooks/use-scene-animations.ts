import gsap from "gsap";
import * as React from "react";
import * as THREE from "three";
import useGameboyRotationAnimation from "./animations/use-gameboy-rotation-animation";
import useLeftHandAnimation from "./animations/use-left-hand-animation";
import useRightHandAnimation from "./animations/use-right-hand-animation";
import useScreenPartOneAnimation from "./animations/use-screen-part-one-animation";
import useScreenPartTwoAnimation from "./animations/use-screen-part-two-animation";
import useScrewsHandAnimation from "./animations/use-screws-animations";
import useStandAnimation from "./animations/use-stand-animation";
import useSceneHelpers from "./use-scene-helpers";
import { useSetAtom } from "jotai";
import { entranceAnimationFinishedAtom, mouseOnAtom } from "../atoms";

export default function useSceneAnimations(
  sceneRef: React.RefObject<THREE.Group>
) {
  const { get3dObjectByName } = useSceneHelpers();

  const setEntranceAnimationFinished = useSetAtom(
    entranceAnimationFinishedAtom
  );

  const setMouseOn = useSetAtom(mouseOnAtom);

  const { animation: rightHandAnimation } = useRightHandAnimation(sceneRef);
  const { animation: leftHandAnimation } = useLeftHandAnimation(sceneRef);
  const { animation: screenPartOneAnimation } =
    useScreenPartOneAnimation(sceneRef);
  const { animation: screenPartTwoAnimation } =
    useScreenPartTwoAnimation(sceneRef);
  const { animation: screwsAnimation } = useScrewsHandAnimation(sceneRef);
  const { animation: gameboyAnimation } = useGameboyRotationAnimation(sceneRef);
  const { animation: standAnimation } = useStandAnimation(sceneRef);

  const startWigglingGameBoy = () => {
    const gameboy = get3dObjectByName(sceneRef, "gameboy");
    if (gameboy) {
      gsap.to(gameboy.rotation, {
        x: "-=0.05",
        z: "-=0.05",
        duration: 3,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });
    }
  };

  const startWigglingStand = () => {
    const stand = get3dObjectByName(sceneRef, "stand_container");
    if (stand) {
      gsap.to(stand.rotation, {
        x: "-=0.06",
        z: "-=0.03",
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
        scrub: 1,
        start: "top top",
        end: "bottom bottom",
      },
      onComplete: function () {
        setEntranceAnimationFinished(true);
        setMouseOn("DRAG");
        this.kill();
        const element = document.getElementById("scroll-trigger");
        if (element) element.style.height = "0px";
      },
    });

    timelineAnimation.add(standAnimation() as gsap.core.Tween);
    timelineAnimation.add(screenPartTwoAnimation() as gsap.core.Tween);
    timelineAnimation.add(screenPartOneAnimation() as gsap.core.Tween);
    timelineAnimation.add(rightHandAnimation() as gsap.core.Tween);
    timelineAnimation.add(leftHandAnimation() as gsap.core.Tween);
    timelineAnimation.add(gameboyAnimation() as gsap.core.Tween);
    timelineAnimation.add(screwsAnimation() as gsap.core.Tween);
    timelineAnimation.add(gameboyAnimation("BACKWARD") as gsap.core.Tween);
  };

  return { startWigglingGameBoy, playEntranceAnimation, startWigglingStand };
}
