import * as THREE from "three";

export default function useSceneHelpers() {
  const get3dObjectByName = (
    sceneRef: React.RefObject<THREE.Group>,
    name: string
  ) => {
    return sceneRef.current?.getObjectByName(name);
  };

  const setGroupChildrenOpacity = (group: THREE.Object3D, opacity: number) => {
    group.children.forEach((child) => {
      if (child instanceof THREE.Mesh && child.material) {
        if (!child.material.isClone) {
          child.material = child.material.clone();
          child.material.isClone = true;
        }
        child.material.opacity = opacity;
        child.material.transparent = true;
      }
    });
  };

  return { get3dObjectByName, setGroupChildrenOpacity };
}
