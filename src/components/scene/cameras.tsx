import { PerspectiveCamera } from "@react-three/drei";
import * as React from "react";

export default function Cameras() {
  return (
    <React.Fragment>
      <PerspectiveCamera
        name="FRONT_CAMERA"
        makeDefault={true}
        far={1000}
        near={0.1}
        fov={20.862}
        position={[0, 0.169, 8]}
      />
      <PerspectiveCamera
        name="RIGHT_CAMERA"
        makeDefault={false}
        far={1000}
        near={0.1}
        fov={22.895}
        position={[6.288, 0.221, -0.005]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <PerspectiveCamera
        name="LEFT_CAMERA"
        makeDefault={false}
        far={1000}
        near={0.1}
        fov={22.895}
        position={[-5.147, 0.221, -2.452]}
        rotation={[Math.PI, -1.121, Math.PI]}
      />
      <PerspectiveCamera
        name="BACK_CAMERA"
        makeDefault={false}
        far={1000}
        near={0.1}
        fov={22.895}
        position={[0.292, 0.221, -6.114]}
        rotation={[-Math.PI, 0.022, -Math.PI]}
      />
    </React.Fragment>
  );
}
