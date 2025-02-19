import gsap from "gsap";
import { useAtom, useSetAtom } from "jotai";
import * as React from "react";
import * as THREE from "three";
import { axisAtom, xAtom, yAtom } from "../atoms";
import SCREENS from "../screens";
import useSceneHelpers from "./use-scene-helpers";
import useSound from "./use-sound";

export default function useSceneInteractions(
  sceneRef: React.RefObject<THREE.Group>
) {
  const { playSound } = useSound();

  const { get3dObjectByName } = useSceneHelpers();

  const [x, setX] = useAtom(xAtom);

  const [axis, setAxis] = useAtom(axisAtom);

  const setY = useSetAtom(yAtom);

  const handleButtonPress = (buttonName: string) => {
    const button = get3dObjectByName(sceneRef, buttonName);
    if (button) {
      playSound(500);
      gsap.to(button.position, {
        z: "-=0.025",
        duration: 0.4,
        ease: "power2.in",
        yoyo: true,
        repeat: 1,
      });
    }
  };

  const pressOK = () => {
    setAxis("VERTICAL");
    handleButtonPress("A_button");
  };

  const pressBack = () => {
    setAxis("HORIZONTAL");
    handleButtonPress("B_button");
  };

  const goRight = () => {
    setX((old) => {
      if (old < SCREENS.length - 1) return old + 1;
      return old;
    });
    handleButtonPress("RIGHT_button");
  };

  const goLeft = () => {
    if (axis === "HORIZONTAL")
      setX((old) => {
        if (old > 0) return old - 1;
        return old;
      });
    handleButtonPress("LEFT_button");
  };

  const goUp = () => {
    if (axis === "VERTICAL")
      setY((old) => {
        if (old > 0) return old - 1;
        return old;
      });
    handleButtonPress("UP_button");
  };

  const goDown = () => {
    if (axis === "VERTICAL")
      setY((old) => {
        if (SCREENS[x].screens && old < SCREENS[x].screens.length - 1)
          return old + 1;
        return old;
      });
    handleButtonPress("DOWN_button");
  };

  return {
    direction: { goUp, goDown, goLeft, goRight },
    buttons: { pressOK, pressBack },
  };
}
