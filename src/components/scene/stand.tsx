import { GLTFResult } from "../../types";

export default function Stand({ nodes, materials }: GLTFResult) {
  return (
    <group>
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
