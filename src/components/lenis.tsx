import ReactLenis from "lenis/react";

export default function Lenis() {
  return (
    <ReactLenis
      root
      options={{
        smoothWheel: true,
        lerp: 0.05,
        wheelMultiplier: 0.7,
        touchMultiplier: 0.7,
      }}
    >
      <div id="scroll-trigger" />
    </ReactLenis>
  );
}
