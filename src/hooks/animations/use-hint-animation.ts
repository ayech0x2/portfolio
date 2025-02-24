import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import * as React from "react";

export default function useHintAnimation(
  ref: React.RefObject<HTMLDivElement>,
  onComplete: VoidFunction
) {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ref.current,
      {
        opacity: 0,
        x: 50,
      },
      { x: 0, opacity: 1 }
    ).add(
      gsap.to(ref.current, {
        x: 20,
        opacity: 0,
        duration: 1,
        onComplete,
      }),
      "+=10"
    );
  });
}
