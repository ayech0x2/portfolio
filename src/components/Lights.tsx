export default function Lights() {
  return (
    <group>
      <pointLight intensity={1} position={[-1, 1.1, 0.5]} />
      <pointLight intensity={1.5} position={[1.9, 1, 0.3]} />
      <pointLight intensity={1} position={[-0.5, -0.1, 1.2]} />
      <pointLight intensity={0.5} position={[-0.3, 1, -0.2]} />
      <pointLight intensity={1} position={[0.5, 0.1, -1.2]} />
    </group>
  );
}
