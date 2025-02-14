import { PerspectiveCamera, useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { GLTFResult } from "../types";
import useSceneInteractions from "../hooks/use-scene-interactions";

export default function Scene(props: GroupProps) {
  const {
    refs: { gameboyRef, X_ButtonRef, A_ButtonRef, Y_ButtonRef, B_ButtonRef },
    handlers: { handleButtonPress },
  } = useSceneInteractions();

  const { nodes, materials } = useGLTF("/scene.glb") as unknown as GLTFResult;

  return (
    <group {...props} dispose={null}>
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
      <group ref={gameboyRef}>
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
          position={[-0.026, 0.272, -0.049]}
          rotation={[0.281, 0.099, -0.014]}
        />
        <mesh
          name="left_handhold"
          geometry={nodes.left_handhold.geometry}
          material={materials["Black grain leather"]}
          position={[0.032, 0.541, 0.027]}
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
          position={[0.032, 0.541, 0.027]}
          rotation={[-0.215, 0.356, 0.101]}
        />
        <mesh
          name="main_container"
          geometry={nodes.main_container.geometry}
          material={materials["Plastic black material 2"]}
          position={[-0.026, 0.272, -0.049]}
          rotation={[0.281, 0.099, -0.014]}
        />
        <mesh
          name="main_screen"
          geometry={nodes.main_screen.geometry}
          material={materials["Material.001"]}
          position={[0.066, 0.357, 0.079]}
          rotation={[1.391, 0.095, -0.357]}
        />
        <mesh
          name="MINUS_button"
          geometry={nodes.MINUS_button.geometry}
          material={materials["Black grain leather"]}
          position={[0.032, 0.541, 0.027]}
          rotation={[-0.215, 0.356, 0.101]}
        />
        <mesh
          name="right_hand"
          geometry={nodes.right_hand.geometry}
          material={materials["Plastic black material"]}
          position={[-0.026, 0.272, -0.049]}
          rotation={[0.281, 0.099, -0.014]}
        />
        <mesh
          name="right_handgold"
          geometry={nodes.right_handgold.geometry}
          material={materials["Black grain leather"]}
          position={[0.032, 0.541, 0.027]}
          rotation={[-0.215, 0.356, 0.101]}
        />
        <mesh
          name="right_mecanism"
          geometry={nodes.right_mecanism.geometry}
          material={materials["Plastic black material"]}
          position={[0.032, 0.541, 0.027]}
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
          position={[0.05, 0.347, 0.096]}
          rotation={[1.391, 0.095, -0.357]}
        >
          <meshStandardMaterial
            transparent
            opacity={0.1}
            roughness={0}
            metalness={1}
            emissive={"white"}
            emissiveIntensity={0.2}
          />
        </mesh>
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
          position={[0.032, 0.541, 0.027]}
          rotation={[-0.215, 0.356, 0.101]}
        />
        <mesh
          name="top_right_button"
          geometry={nodes.top_right_button.geometry}
          material={materials["Black grain leather"]}
          position={[0.032, 0.541, 0.027]}
          rotation={[-0.215, 0.356, 0.101]}
        />
        <mesh
          name="utilities_buttons"
          geometry={nodes.utilities_buttons.geometry}
          material={materials["Plastic black material"]}
          position={[0.032, 0.541, 0.027]}
          rotation={[-0.215, 0.356, 0.101]}
        />
        <mesh
          name="home_button_icon"
          geometry={nodes.home_button_icon.geometry}
          material={materials["Black grain leather"]}
          position={[0.999, 0.162, -0.216]}
          rotation={[-0.215, 0.356, 0.101]}
        />
        <group
          onClick={() => handleButtonPress(A_ButtonRef)}
          ref={A_ButtonRef}
          name="A_button"
          position={[0.937, 0.623, -0.283]}
          rotation={[-0.215, 0.356, 0.101]}
        >
          <mesh
            name="Text001"
            geometry={nodes.Text001.geometry}
            material={materials["Black grain leather"]}
          />
          <mesh
            name="Text001_1"
            geometry={nodes.Text001_1.geometry}
            material={materials.Material}
          />
        </group>
        <group
          onClick={() => handleButtonPress(X_ButtonRef)}
          ref={X_ButtonRef}
          name="X_button"
          position={[0.937, 0.623, -0.283]}
          rotation={[-0.215, 0.356, 0.101]}
        >
          <mesh
            name="Text002"
            geometry={nodes.Text002.geometry}
            material={materials["Black grain leather"]}
          />
          <mesh
            name="Text002_1"
            geometry={nodes.Text002_1.geometry}
            material={materials.Material}
          />
        </group>
        <group
          onClick={() => handleButtonPress(Y_ButtonRef)}
          ref={Y_ButtonRef}
          name="Y_button"
          position={[0.937, 0.623, -0.283]}
          rotation={[-0.215, 0.356, 0.101]}
        >
          <mesh
            name="Text003"
            geometry={nodes.Text003.geometry}
            material={materials["Black grain leather"]}
          />
          <mesh
            name="Text003_1"
            geometry={nodes.Text003_1.geometry}
            material={materials.Material}
          />
        </group>
        <group
          onClick={() => handleButtonPress(B_ButtonRef)}
          ref={B_ButtonRef}
          name="B_button"
          position={[0.937, 0.623, -0.283]}
          rotation={[-0.215, 0.356, 0.101]}
        >
          <mesh
            name="Text004"
            geometry={nodes.Text004.geometry}
            material={materials["Black grain leather"]}
          />
          <mesh
            name="Text004_1"
            geometry={nodes.Text004_1.geometry}
            material={materials.Material}
          />
        </group>
        <group
          name="UP_button"
          position={[-0.953, 0.301, 0.506]}
          rotation={[-0.215, 0.356, 0.101]}
        >
          <mesh
            name="Text005"
            geometry={nodes.Text005.geometry}
            material={materials["Black grain leather"]}
          />
          <mesh
            name="Text005_1"
            geometry={nodes.Text005_1.geometry}
            material={materials.Material}
          />
        </group>
        <group
          name="LEFT_button"
          position={[-0.953, 0.301, 0.506]}
          rotation={[-0.215, 0.356, 0.101]}
        >
          <mesh
            name="Text006"
            geometry={nodes.Text006.geometry}
            material={materials["Black grain leather"]}
          />
          <mesh
            name="Text006_1"
            geometry={nodes.Text006_1.geometry}
            material={materials.Material}
          />
        </group>
        <group
          name="RIGHT_button"
          position={[-0.953, 0.301, 0.506]}
          rotation={[-0.215, 0.356, 0.101]}
        >
          <mesh
            name="Text007"
            geometry={nodes.Text007.geometry}
            material={materials["Black grain leather"]}
          />
          <mesh
            name="Text007_1"
            geometry={nodes.Text007_1.geometry}
            material={materials.Material}
          />
        </group>
        <group
          name="DOWN_button"
          position={[-0.953, 0.301, 0.506]}
          rotation={[-0.215, 0.356, 0.101]}
        >
          <mesh
            name="Text008"
            geometry={nodes.Text008.geometry}
            material={materials["Black grain leather"]}
          />
          <mesh
            name="Text008_1"
            geometry={nodes.Text008_1.geometry}
            material={materials.Material}
          />
        </group>
        <mesh
          name="PLUS_button"
          geometry={nodes.PLUS_button.geometry}
          material={materials["Black grain leather"]}
          position={[0.032, 0.541, 0.027]}
          rotation={[-0.215, 0.356, 0.101]}
        />
        <mesh
          name="RIGHT_joystick"
          geometry={nodes.RIGHT_joystick.geometry}
          material={materials["Black grain leather"]}
          position={[-0.892, 0.583, 0.465]}
          rotation={[-0.215, 0.356, 0.101]}
        />
      </group>
      <mesh
        name="BézierCircle"
        geometry={nodes.BézierCircle.geometry}
        material={materials.plas}
        position={[-0.026, 0.048, -0.049]}
        scale={0.672}
      />
      <mesh
        name="BézierCircle002"
        geometry={nodes.BézierCircle002.geometry}
        material={materials["Material.008"]}
        position={[-0.026, -0.813, -0.049]}
        scale={0.975}
      />
    </group>
  );
}

useGLTF.preload("/scene.glb");
