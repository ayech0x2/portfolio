import * as THREE from "three";

export default function useSceneHelpers() {
  const get3dObjectByName = (
    sceneRef: React.RefObject<THREE.Group>,
    name: string
  ) => {
    return sceneRef.current?.getObjectByName(name);
  };

  return { get3dObjectByName };
}
