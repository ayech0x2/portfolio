import { useGSAP } from "@gsap/react";
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
import { isMobile } from "react-device-detect";

export default function useSceneAnimations(
  sceneRef: React.RefObject<THREE.Group>,
  isReady: boolean
) {
  const scroll = useScroll();

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

  React.useEffect(() => {
    if (!entranceAnimationFinished) {
      setMouseOn("SCROLL");
    }
  }, [entranceAnimationFinished, setMouseOn]);

  useGSAP(
    () => {
      if (isReady) {
        startWigglingGameBoy();
        startWigglingStand();
      }
    },
    { dependencies: [isReady] }
  );

  useGSAP(
    () => {
      if (isReady) {
        playEntranceAnimation();
      }
    },
    { dependencies: [isReady] }
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

  const startWigglingGameBoy = () => {
    const gameboy = get3dObjectByName(sceneRef, "gameboy");
    if (gameboy) {
      gsap.to(gameboy.rotation, {
        x: "-=0.03",
        z: "-=0.03",
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
    timelineRef.current.add(standAnimation() as gsap.core.Tween, 0);
    timelineRef.current.add(screenPartTwoAnimation() as gsap.core.Tween, 1);
    timelineRef.current.add(screenPartOneAnimation() as gsap.core.Tween, 2);
    timelineRef.current.add(rightHandAnimation() as gsap.core.Tween, 3);
    timelineRef.current.add(leftHandAnimation() as gsap.core.Tween, 4);
    timelineRef.current.add(gameboyAnimation() as gsap.core.Tween, 5);
    timelineRef.current.add(screwsAnimation() as gsap.core.Tween, 6);
    timelineRef.current.add(gameboyAnimation("BACKWARD") as gsap.core.Tween, 7);
    if (isMobile) timelineRef.current.play().duration(12);
  };

  return { startWigglingGameBoy, playEntranceAnimation, startWigglingStand };
}
