import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { useAtom, useSetAtom } from "jotai";
import * as React from "react";
import * as THREE from "three";
import { entranceAnimationFinishedAtom, mouseOnAtom } from "../atoms";
import useGameboyRotationAnimation from "./animations/use-gameboy-rotation-animation";
import useLeftHandAnimation from "./animations/use-left-hand-animation";
import useRightHandAnimation from "./animations/use-right-hand-animation";
import useScreenPartOneAnimation from "./animations/use-screen-part-one-animation";
import useScreenPartTwoAnimation from "./animations/use-screen-part-two-animation";
import useScrewsHandAnimation from "./animations/use-screws-animations";
import useStandAnimation from "./animations/use-stand-animation";
import useSceneHelpers from "./use-scene-helpers";

export default function useSceneAnimations(
  sceneRef: React.RefObject<THREE.Group>
) {
  const scroll = useScroll();

  const [entranceAnimationFinished, setEntranceAnimationFinished] = useAtom(
    entranceAnimationFinishedAtom
  );

  const timelineRef = React.useRef(
    gsap.timeline({
      paused: true,
      onComplete: function () {
        setEntranceAnimationFinished(true);
        setMouseOn("DRAG");
        this.kill();
      },
    })
  );

  useFrame(() => {
    if (scroll && scroll.offset) {
      if (!entranceAnimationFinished)
        timelineRef.current.progress(scroll.offset);
      else if (scroll.el.scrollTop !== 0 || scroll.fixed.scrollTop !== 0) {
        scroll.el.scrollTop = 0;
        scroll.fixed.scrollTop = 0;
      }
    }
  });

  const { get3dObjectByName } = useSceneHelpers();

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
    return;
    timelineRef.current.add(standAnimation() as gsap.core.Tween);
    timelineRef.current.add(screenPartTwoAnimation() as gsap.core.Tween);
    timelineRef.current.add(screenPartOneAnimation() as gsap.core.Tween);
    timelineRef.current.add(rightHandAnimation() as gsap.core.Tween);
    timelineRef.current.add(leftHandAnimation() as gsap.core.Tween);
    timelineRef.current.add(gameboyAnimation() as gsap.core.Tween);
    timelineRef.current.add(screwsAnimation() as gsap.core.Tween);
    timelineRef.current.add(gameboyAnimation("BACKWARD") as gsap.core.Tween);
  };

  return { startWigglingGameBoy, playEntranceAnimation, startWigglingStand };
}
