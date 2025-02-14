import { useGSAP } from "@gsap/react";
import { PerspectiveCamera, useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import * as React from "react";
import * as THREE from "three";
import useSceneAnimations from "../hooks/use-scene-animations";
import useSceneInteractions from "../hooks/use-scene-interactions";
import { GLTFResult } from "../types";

export default function Scene(props: GroupProps) {
  const sceneRef = React.useRef<THREE.Group>(null!);

  const { nodes, materials } = useGLTF("/scene.glb") as unknown as GLTFResult;

  const { handleButtonPress } = useSceneInteractions();

  const { playEntranceAnimation } = useSceneAnimations(sceneRef);

  useGSAP(() => {
    playEntranceAnimation();
  });

  return (
    <group {...props} dispose={null} ref={sceneRef}>
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
        position={[0.002, 0.169, 6.53]}
      />
      <mesh
        name="battery"
        geometry={nodes.battery.geometry}
        material={materials["Plastic black material"]}
        position={[0.013, 0.086, 0.035]}
        rotation={[1.391, 0.095, -0.357]}
      />
      <mesh
        name="charging_port"
        geometry={nodes.charging_port.geometry}
        material={materials["Plastic black material"]}
        position={[0.093, -0.119, 0.117]}
        rotation={[1.391, 0.095, -0.357]}
      />
      <mesh
        name="circular_button"
        geometry={nodes.circular_button.geometry}
        material={materials["Black grain leather"]}
        position={[-0.814, 0.118, 0.484]}
        rotation={[1.391, 0.095, -0.357]}
      />
      <mesh
        name="home_button"
        geometry={nodes.home_button.geometry}
        material={materials["Black grain leather"]}
        position={[0.999, 0.162, -0.216]}
        rotation={[-0.215, 0.356, 0.101]}
      />
      <mesh
        name="left_hand"
        geometry={nodes.left_hand.geometry}
        material={materials["Plastic black material"]}
        position={[-0.911, 0.298, 0.403]}
        rotation={[0.281, 0.099, -0.014]}
      />
      <mesh
        name="left_handhold"
        geometry={nodes.left_handhold.geometry}
        material={materials["Black grain leather"]}
        position={[-0.978, 0.698, 0.254]}
        rotation={[-0.215, 0.356, 0.101]}
      />
      <mesh
        name="LEFT_joystick"
        geometry={nodes.LEFT_joystick.geometry}
        material={materials["Black grain leather"]}
        position={[-0.892, 0.583, 0.465]}
        rotation={[-0.215, 0.356, 0.101]}
      />
      <mesh
        name="left_mecanism"
        geometry={nodes.left_mecanism.geometry}
        material={materials["Plastic black material"]}
        position={[-0.748, 0.315, 0.339]}
        rotation={[-0.215, 0.356, 0.101]}
      />
      <mesh
        name="main_container"
        geometry={nodes.main_container.geometry}
        material={materials["Plastic black material 2"]}
        position={[0.044, 0.355, 0.022]}
        rotation={[0.281, 0.099, -0.014]}
      />
      <mesh
        name="main_screen"
        geometry={nodes.main_screen.geometry}
        material={materials["Material.001"]}
        position={[0.068, 0.358, 0.084]}
        rotation={[1.391, 0.095, -0.357]}
      />
      <mesh
        name="MINUS_button"
        geometry={nodes.MINUS_button.geometry}
        material={materials["Black grain leather"]}
        position={[-0.834, 0.722, 0.352]}
        rotation={[-0.215, 0.356, 0.101]}
      />
      <mesh
        name="right_hand"
        geometry={nodes.right_hand.geometry}
        material={materials["Plastic black material"]}
        position={[1.009, 0.348, -0.338]}
        rotation={[0.281, 0.099, -0.014]}
      />
      <mesh
        name="right_handgold"
        geometry={nodes.right_handgold.geometry}
        material={materials["Black grain leather"]}
        position={[0.939, 0.748, -0.486]}
        rotation={[-0.215, 0.356, 0.101]}
      />
      <mesh
        name="right_mecanism"
        geometry={nodes.right_mecanism.geometry}
        material={materials["Plastic black material"]}
        position={[0.845, 0.357, -0.276]}
        rotation={[-0.215, 0.356, 0.101]}
      />
      <mesh
        name="screen_border"
        geometry={nodes.screen_border.geometry}
        material={materials["Plastic black material"]}
        position={[0.049, 0.345, 0.088]}
        rotation={[1.391, 0.095, -0.357]}
      />
      <mesh
        name="screen_glass"
        geometry={nodes.screen_glass.geometry}
        material={materials.screen}
        position={[0.05, 0.347, 0.096]}
        rotation={[1.391, 0.095, -0.357]}
      />
      <mesh
        name="screws"
        geometry={nodes.screws.geometry}
        material={materials["Frozen white metal"]}
        position={[0.035, 0.319, -0.006]}
        rotation={[1.391, 0.095, -0.357]}
      />
      <mesh
        name="speakers"
        geometry={nodes.speakers.geometry}
        material={materials["Plastic black material"]}
        position={[0.15, 0.348, 0.02]}
        rotation={[1.391, 0.095, -0.357]}
      />
      <mesh
        name="top_left_button"
        geometry={nodes.top_left_button.geometry}
        material={materials["Black grain leather"]}
        position={[-1.011, 0.749, 0.36]}
        rotation={[-0.215, 0.356, 0.101]}
      />
      <mesh
        name="top_right_button"
        geometry={nodes.top_right_button.geometry}
        material={materials["Black grain leather"]}
        position={[1.033, 0.804, -0.43]}
        rotation={[-0.215, 0.356, 0.101]}
      />
      <mesh
        name="utilities_buttons"
        geometry={nodes.utilities_buttons.geometry}
        material={materials["Plastic black material"]}
        position={[-0.408, 0.826, 0.096]}
        rotation={[-0.215, 0.356, 0.101]}
      />
      <mesh
        name="home_button_icon"
        geometry={nodes.home_button_icon.geometry}
        material={materials["Black grain leather"]}
        position={[1.001, 0.159, -0.212]}
        rotation={[-0.215, 0.356, 0.101]}
      />
      <group
        name="A_button"
        position={[1.083, 0.627, -0.339]}
        rotation={[-0.215, 0.356, 0.101]}
        onClick={() => handleButtonPress(sceneRef, "A_button")}
      >
        <mesh
          name="A_button_1"
          geometry={nodes.A_button_1.geometry}
          material={materials["Black grain leather"]}
        />
        <mesh
          name="A_button_2"
          geometry={nodes.A_button_2.geometry}
          material={materials.Material}
        />
      </group>
      <group
        name="X_button"
        position={[1.003, 0.699, -0.324]}
        rotation={[-0.215, 0.356, 0.101]}
        onClick={() => handleButtonPress(sceneRef, "X_button")}
      >
        <mesh
          name="X_button_1"
          geometry={nodes.X_button_1.geometry}
          material={materials["Black grain leather"]}
        />
        <mesh
          name="X_button_2"
          geometry={nodes.X_button_2.geometry}
          material={materials.Material}
        />
      </group>
      <group
        name="Y_button"
        position={[0.937, 0.623, -0.283]}
        rotation={[-0.215, 0.356, 0.101]}
        onClick={() => handleButtonPress(sceneRef, "Y_button")}
      >
        <mesh
          name="Y_button_1"
          geometry={nodes.Y_button_1.geometry}
          material={materials["Black grain leather"]}
        />
        <mesh
          name="Y_button_2"
          geometry={nodes.Y_button_2.geometry}
          material={materials.Material}
        />
      </group>
      <group
        name="B_button"
        position={[1.019, 0.551, -0.297]}
        rotation={[-0.215, 0.356, 0.101]}
        onClick={() => handleButtonPress(sceneRef, "B_button")}
      >
        <mesh
          name="B_button_1"
          geometry={nodes.B_button_1.geometry}
          material={materials["Black grain leather"]}
        />
        <mesh
          name="B_button_2"
          geometry={nodes.B_button_2.geometry}
          material={materials.Material}
        />
      </group>
      <group
        name="UP_button"
        position={[-0.887, 0.377, 0.464]}
        rotation={[-0.215, 0.356, 0.101]}
      >
        <mesh
          name="UP_button_1"
          geometry={nodes.UP_button_1.geometry}
          material={materials["Black grain leather"]}
        />
        <mesh
          name="UP_button_2"
          geometry={nodes.UP_button_2.geometry}
          material={materials.Material}
        />
      </group>
      <group
        name="LEFT_button"
        position={[-0.953, 0.301, 0.506]}
        rotation={[-0.215, 0.356, 0.101]}
      >
        <mesh
          name="LEFT_button_1"
          geometry={nodes.LEFT_button_1.geometry}
          material={materials["Black grain leather"]}
        />
        <mesh
          name="LEFT_button_2"
          geometry={nodes.LEFT_button_2.geometry}
          material={materials.Material}
        />
      </group>
      <group
        name="RIGHT_button"
        position={[-0.807, 0.305, 0.449]}
        rotation={[-0.215, 0.356, 0.101]}
      >
        <mesh
          name="RIGHT_button_1"
          geometry={nodes.RIGHT_button_1.geometry}
          material={materials["Black grain leather"]}
        />
        <mesh
          name="RIGHT_button_2"
          geometry={nodes.RIGHT_button_2.geometry}
          material={materials.Material}
        />
      </group>
      <group
        name="DOWN_button"
        position={[-0.873, 0.229, 0.491]}
        rotation={[-0.215, 0.356, 0.101]}
      >
        <mesh
          name="DOWN_button_1"
          geometry={nodes.DOWN_button_1.geometry}
          material={materials["Black grain leather"]}
        />
        <mesh
          name="DOWN_button_2"
          geometry={nodes.DOWN_button_2.geometry}
          material={materials.Material}
        />
      </group>
      <mesh
        name="PLUS_button"
        geometry={nodes.PLUS_button.geometry}
        material={materials["Black grain leather"]}
        position={[0.898, 0.768, -0.317]}
        rotation={[-0.215, 0.356, 0.101]}
      />
      <mesh
        name="RIGHT_joystick"
        geometry={nodes.RIGHT_joystick.geometry}
        material={materials["Black grain leather"]}
        position={[1.049, 0.359, -0.227]}
        rotation={[-0.215, 0.356, 0.101]}
      />
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

useGLTF.preload("/scene.glb");
