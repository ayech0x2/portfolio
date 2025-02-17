import { useFrame } from "@react-three/fiber";
import { GLTFResult } from "../../types";
import * as React from "react";
import * as THREE from "three";

export default function Stand({ nodes, materials }: GLTFResult) {
  const standRef = React.useRef<THREE.Group>(null!);
  useFrame((_state, delta) => {
    if (standRef.current) {
      standRef.current.rotation.y += delta * 0.3;
    }
  });
  return (
    <group ref={standRef}>
      <mesh
        name="stand"
        geometry={nodes.stand.geometry}
        material={materials.plas}
        position={[-0.026, 0.048, -0.049]}
        scale={0.672}
      />
      <mesh
        name="circles"
        geometry={nodes.circles.geometry}
        material={materials["Material.008"]}
        position={[-0.026, -0.813, -0.049]}
        scale={0.975}
      />
    </group>
  );
}
