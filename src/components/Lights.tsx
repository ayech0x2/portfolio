export default function Lights() {
  return (
    <group>
      <pointLight
        intensity={1}
        position={[-0.733132004737854, 1, 0.5]} // Adjust position as needed
        rotation={[-1.7138244961074722, 0, 0]}
      />
      <pointLight
        intensity={1}
        position={[1.310068964958191, 0.909714937210083, 0.3185810148715973]} // Adjust position as needed
        rotation={[-1.7138244961074722, 0, 0]}
      />
      <pointLight
        intensity={1}
        position={[1.3492575883865356, -0.7556701898574829, 0.4988487660884857]}
        rotation={[1.7471839571600574, 0.6226827501956262, 3.0380121576261696]}
      />
      <pointLight
        intensity={1}
        position={[
          -0.5815072655677795, -0.008714079856872559, 1.1628460884094238,
        ]} // Adjust position as needed
        rotation={[0.3297934002502259, -0.3816346895677042, 2.3059210758727193]} // Rotate if necessary
      />
      <pointLight
        intensity={0.5}
        position={[
          2.2421510219573975, -0.008714079856872559, -1.1785615682601929,
        ]} // Adjust position as needed
        rotation={[-3.072920768296241, 0.8016682978737345, 1.601065067170026]} // Rotate if necessary
      />
      <pointLight
        intensity={0.5}
        position={[-1.622774362564087, 0, 0.12780606746673584]} // Adjust position as needed
        rotation={[-1.5707964460041863, -1.5707963267948966, 0]} // Rotate if necessary
      />
      <pointLight
        intensity={0.5}
        position={[-0.3715713948, 1, -0.27319374084472656]}
        rotation={[
          -1.5707964014024443, 2.174037927460404e-8, 0.26888990095023213,
        ]}
      />
      <pointLight
        intensity={0.5}
        position={[-0.05, 1.1, -0.47319374084472656]}
        rotation={[
          -1.5707964014024443, 2.174037927460404e-8, 0.26888990095023213,
        ]}
      />
      <pointLight
        intensity={10}
        position={[0, -1.2944204807281494, 0.8772613406181335]}
        rotation={[1.0473738985808339, 0, 0]}
      />
    </group>
  );
}
