import { PerspectiveCamera } from "@react-three/drei";
import * as React from "react";

export default function Cameras() {
  return (
    <React.Fragment>
      <PerspectiveCamera
        name="A_camera"
        makeDefault={false}
        far={1000}
        near={0.1}
        fov={20.862}
        position={[1.63, 0.619, -0.173]}
        rotation={[0.024, 1.271, -0.023]}
      />
      <PerspectiveCamera
        name="main_camera"
        makeDefault={true}
        far={1000}
        near={0.1}
        fov={20.862}
        position={[0, 0.169, 8]}
      />
      <PerspectiveCamera
        name="right_camera"
        makeDefault={false}
        far={1000}
        near={0.1}
        fov={22.895}
        position={[6.288, 0.221, -0.005]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <PerspectiveCamera
        name="left_camera"
        makeDefault={false}
        far={1000}
        near={0.1}
        fov={22.895}
        position={[-5.147, 0.221, -2.452]}
        rotation={[Math.PI, -1.121, Math.PI]}
      />
      <PerspectiveCamera
        name="back_camera"
        makeDefault={false}
        far={1000}
        near={0.1}
        fov={22.895}
        position={[0.292, 0.221, -6.114]}
        rotation={[-Math.PI, 0.022, -Math.PI]}
      />
      <PerspectiveCamera
        name="screws_camera"
        makeDefault={false}
        far={1000}
        near={0.1}
        fov={22.895}
        position={[0.879, -0.632, -1.214]}
        rotation={[2.594, -0.101, 3.08]}
      />
    </React.Fragment>
  );
}
