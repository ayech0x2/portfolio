import * as React from "react";
import useSound from "./use-sound";
import * as THREE from "three";
import gsap from "gsap";

export default function useSceneInteractions() {
  const gameboyRef = React.useRef<THREE.Group>(null!);

  const A_ButtonRef = React.useRef(null!);
  const X_ButtonRef = React.useRef(null!);
  const Y_ButtonRef = React.useRef(null!);
  const B_ButtonRef = React.useRef(null!);

  const { playSound } = useSound();

  React.useEffect(() => {
    if (gameboyRef.current) {
      gsap.to(gameboyRef.current.rotation, {
        y: "-=0.05",
        x: "-=0.05",
        z: "-=0.05",
        duration: 5,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });
    }
  }, []);

  const handleButtonPress = (ref: React.RefObject<THREE.Group>) => {
    if (ref.current) {
      playSound(500);
      gsap.to(ref.current.position, {
        z: "-=0.025",
        duration: 0.4,
        ease: "power2.in",
        yoyo: true,
        repeat: 1,
      });
    }
  };

  return {
    refs: {
      gameboyRef,
      A_ButtonRef,
      X_ButtonRef,
      Y_ButtonRef,
      B_ButtonRef,
    },
    handlers: {
      handleButtonPress,
    },
  };
}
