import * as React from "react";
import * as THREE from "three";
import useSceneAnimations from "../../hooks/use-scene-animations";

function Animations({
  sceneRef,
  isReady,
}: {
  sceneRef: React.RefObject<THREE.Group>;
  isReady: boolean;
}) {
  useSceneAnimations(sceneRef, isReady);

  return <group />;
}

export default React.memo(Animations);
