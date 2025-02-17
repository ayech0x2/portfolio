import { GLTFResult } from "../../types";

export default function Screws({ nodes, materials }: GLTFResult) {
  return (
    <mesh
      name="screws"
      geometry={nodes.screws.geometry}
      material={materials["Frozen white metal"]}
      position={[0.035, 0.319, -0.006]}
      rotation={[1.391, 0.095, -0.357]}
    ></mesh>
  );
}
