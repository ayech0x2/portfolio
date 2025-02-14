import { useFrame } from "@react-three/fiber";
import * as React from "react";

const Particles = () => {
  const particlesRef = React.useRef(null!);

  const particleCount = 250;
  const positions = new Float32Array(particleCount * 10);

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
  }

  useFrame((state, delta) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          itemSize={3}
          count={particleCount}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color={0xffffff}
        transparent
        opacity={0.1}
        sizeAttenuation
      />
    </points>
  );
};

export default Particles;
