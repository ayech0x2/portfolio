import gsap from "gsap";
import { useAtom } from "jotai";
import * as React from "react";
import * as THREE from "three";
import { axisAtom, xAtom, yAtom } from "../atoms";
import SCREENS from "../screens";
import { OngoingClick } from "../types";
import useSceneHelpers from "./use-scene-helpers";
import useSound from "./use-sound";

const CLICK_ANIMATION_DURATION = 0.3;

export default function useSceneInteractions(
  sceneRef: React.RefObject<THREE.Group>
) {
  const { playSound } = useSound();

  const { get3dObjectByName } = useSceneHelpers();

  const [ongoingClicks, setOngoingClicks] = React.useState<Array<OngoingClick>>(
    []
  );

  const [x, setX] = useAtom(xAtom);

  const [axis, setAxis] = useAtom(axisAtom);

  const [y, setY] = useAtom(yAtom);

  const isClickOngoing = React.useCallback(
    (click: OngoingClick) => ongoingClicks.includes(click),
    [ongoingClicks]
  );

  const setAsOngoingClick = React.useCallback(
    (click: OngoingClick) => {
      setOngoingClicks([...ongoingClicks, click]);
      setTimeout(() => {
        setOngoingClicks(
          ongoingClicks.filter((ongoingClick) => ongoingClick !== click)
        );
      }, CLICK_ANIMATION_DURATION * 1000);
    },
    [ongoingClicks]
  );

  const handleButtonPress = React.useCallback(
    (
      buttonName: string,
      onComplete: VoidFunction,
      shouldPlaySound: boolean
    ) => {
      const button = get3dObjectByName(sceneRef, buttonName);
      if (button) {
        const tl = gsap.timeline({
          onComplete,
          onStart: () => {
            if (shouldPlaySound) playSound(500);
          },
        });
        tl.to(button.position, {
          z: "-=0.020",
          duration: CLICK_ANIMATION_DURATION / 2,
          ease: "power2.in",
        }).to(button.position, {
          z: "+=0.020",
          duration: CLICK_ANIMATION_DURATION / 2,
          ease: "power2.in",
        });
      }
    },
    [get3dObjectByName, playSound, sceneRef]
  );

  const pressOK = React.useCallback(() => {
    if (isClickOngoing("A")) return;
    setAsOngoingClick("A");
    handleButtonPress(
      "A_button",
      () => setAxis("VERTICAL"),
      axis === "HORIZONTAL"
    );
  }, [axis, handleButtonPress, isClickOngoing, setAsOngoingClick, setAxis]);

  const pressBack = React.useCallback(() => {
    if (isClickOngoing("B")) return;
    setAsOngoingClick("B");
    handleButtonPress(
      "B_button",
      () => {
        if (x === 6) setX(0);
        setAxis("HORIZONTAL");
        setY(0);
      },
      axis === "VERTICAL"
    );
  }, [
    axis,
    handleButtonPress,
    isClickOngoing,
    setAsOngoingClick,
    setAxis,
    setX,
    setY,
    x,
  ]);

  const pressGallery = React.useCallback(() => {
    if (isClickOngoing("X")) return;
    setAsOngoingClick("X");
    handleButtonPress(
      "X_button",
      () => {
        if (axis === "VERTICAL") return;
        setAxis("VERTICAL");
        setX(6);
        setY(0);
      },
      axis === "HORIZONTAL"
    );
  }, [
    axis,
    handleButtonPress,
    isClickOngoing,
    setAsOngoingClick,
    setAxis,
    setX,
    setY,
  ]);

  const pressHome = React.useCallback(() => {
    if (isClickOngoing("Y")) return;
    setAsOngoingClick("Y");
    handleButtonPress(
      "Y_button",
      () => {
        setAxis("HORIZONTAL");
        setY(0);
        setX(0);
      },
      axis === "VERTICAL"
    );
  }, [
    axis,
    handleButtonPress,
    isClickOngoing,
    setAsOngoingClick,
    setAxis,
    setX,
    setY,
  ]);

  const goRight = React.useCallback(() => {
    if (isClickOngoing("RIGHT")) return;
    setAsOngoingClick("RIGHT");
    handleButtonPress(
      "RIGHT_button",
      () => {
        if (axis === "VERTICAL") return;
        setX((old) => {
          if (old < SCREENS.length - 2) return old + 1;
          return old;
        });
      },
      axis === "HORIZONTAL" && x < SCREENS.length - 2
    );
  }, [axis, handleButtonPress, isClickOngoing, setAsOngoingClick, setX, x]);

  const goLeft = React.useCallback(() => {
    if (isClickOngoing("LEFT")) return;
    setAsOngoingClick("LEFT");
    handleButtonPress(
      "LEFT_button",
      () => {
        if (axis === "VERTICAL") return;
        setX((old) => {
          if (old > 0) return old - 1;
          return old;
        });
      },
      axis === "HORIZONTAL" && x > 0
    );
  }, [axis, handleButtonPress, isClickOngoing, setAsOngoingClick, setX, x]);

  const goUp = React.useCallback(() => {
    if (isClickOngoing("UP")) return;
    setAsOngoingClick("UP");
    handleButtonPress(
      "UP_button",
      () => {
        if (axis === "HORIZONTAL") return;
        setY((old) => {
          if (old > 0) return old - 1;
          return old;
        });
      },
      axis === "VERTICAL" && y > 0
    );
  }, [axis, handleButtonPress, isClickOngoing, setAsOngoingClick, setY, y]);

  const goDown = React.useCallback(() => {
    if (isClickOngoing("DOWN")) return;
    setAsOngoingClick("DOWN");
    handleButtonPress(
      "DOWN_button",
      () => {
        if (axis === "HORIZONTAL") return;
        setY((old) => {
          if (SCREENS[x].screens && old < SCREENS[x].screens.length - 1)
            return old + 1;
          return old;
        });
      },
      axis === "VERTICAL" && y < SCREENS[x].screens.length - 1
    );
  }, [axis, handleButtonPress, isClickOngoing, setAsOngoingClick, setY, x, y]);

  return {
    direction: { goUp, goDown, goLeft, goRight },
    buttons: { pressOK, pressBack, pressHome, pressGallery },
  };
}
