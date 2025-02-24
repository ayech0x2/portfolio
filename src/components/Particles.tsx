import { useFrame } from "@react-three/fiber";
import * as React from "react";
import * as THREE from "three";

const Particles = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const particlesRef = React.useRef<THREE.Points>(null!);

  const particleCount = 250;
  const positions = new Float32Array(particleCount * 10);

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
  }

  useFrame((_state, delta) => {
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
        size={0.03}
        color={0xffffff}
        transparent
        opacity={0.1}
        sizeAttenuation
      />
    </points>
  );
};

export default Particles;
