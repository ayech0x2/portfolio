import { Html } from "@react-three/drei";
import { useAtomValue } from "jotai";
import { entranceAnimationFinishedAtom } from "../../atoms";
import { GLTFResult } from "../../types";
import Hint from "./hint";

export default function RightHand({
  nodes,
  materials,
  buttonPress,
}: GLTFResult & {
  buttonPress: (buttonName: string) => void;
}) {
  const entranceAnimationFinished = useAtomValue(entranceAnimationFinishedAtom);

  return (
    <group name="right_hand_center">
      <mesh
        name="top_right_button"
        geometry={nodes.top_right_button.geometry}
        material={materials["Black grain leather"]}
        position={[1.033, 0.804, -0.43]}
        rotation={[-0.215, 0.356, 0.101]}
      ></mesh>
      <mesh
        name="right_hand"
        geometry={nodes.right_hand.geometry}
        material={materials["Plastic black material"]}
        position={[1.009, 0.348, -0.338]}
        rotation={[0.281, 0.099, -0.014]}
      ></mesh>
      <mesh
        name="right_handgold"
        geometry={nodes.right_handgold.geometry}
        material={materials["Black grain leather"]}
        position={[0.939, 0.748, -0.486]}
        rotation={[-0.215, 0.356, 0.101]}
      ></mesh>
      <mesh
        name="right_mecanism"
        geometry={nodes.right_mecanism.geometry}
        material={materials["Plastic black material"]}
        position={[0.845, 0.357, -0.276]}
        rotation={[-0.215, 0.356, 0.101]}
      ></mesh>
      <mesh
        name="PLUS_button"
        geometry={nodes.PLUS_button.geometry}
        material={materials["Black grain leather"]}
        position={[0.898, 0.768, -0.317]}
        rotation={[-0.215, 0.356, 0.101]}
      ></mesh>
      <mesh
        name="RIGHT_joystick"
        geometry={nodes.RIGHT_joystick.geometry}
        material={materials["Black grain leather"]}
        position={[1.049, 0.359, -0.227]}
        rotation={[-0.215, 0.356, 0.101]}
      ></mesh>
      <mesh
        name="home_button"
        geometry={nodes.home_button.geometry}
        material={materials["Black grain leather"]}
        position={[0.999, 0.162, -0.216]}
        rotation={[-0.215, 0.356, 0.101]}
      ></mesh>

      <mesh
        name="home_button_icon"
        geometry={nodes.home_button_icon.geometry}
        material={materials["Black grain leather"]}
        position={[1.001, 0.159, -0.212]}
        rotation={[-0.215, 0.356, 0.101]}
      ></mesh>
      <group
        name="A_button"
        position={[1.083, 0.627, -0.339]}
        rotation={[-0.215, 0.356, 0.101]}
        onPointerDown={() => buttonPress("A_button")}
        onClick={() => buttonPress("A_button")}
      >
        <mesh
          name="A_button_1"
          geometry={nodes.A_button_1.geometry}
          material={materials["Black grain leather"]}
        ></mesh>
        <mesh
          name="A_button_2"
          geometry={nodes.A_button_2.geometry}
          material={materials.Material}
        >
          {entranceAnimationFinished && (
            <Html position={[-0.05, 0, 0.1]} transform distanceFactor={1}>
              <Hint />
            </Html>
          )}
        </mesh>
      </group>
      <group
        name="X_button"
        position={[1.003, 0.699, -0.324]}
        rotation={[-0.215, 0.356, 0.101]}
        onClick={() => buttonPress("X_button")}
      >
        <mesh
          name="X_button_1"
          geometry={nodes.X_button_1.geometry}
          material={materials["Black grain leather"]}
        ></mesh>
        <mesh
          name="X_button_2"
          geometry={nodes.X_button_2.geometry}
          material={materials.Material}
        ></mesh>
      </group>
      <group
        name="Y_button"
        position={[0.937, 0.623, -0.283]}
        rotation={[-0.215, 0.356, 0.101]}
        onClick={() => buttonPress("Y_button")}
      >
        <mesh
          name="Y_button_1"
          geometry={nodes.Y_button_1.geometry}
          material={materials["Black grain leather"]}
        ></mesh>

        <mesh
          name="Y_button_2"
          geometry={nodes.Y_button_2.geometry}
          material={materials.Material}
        ></mesh>
      </group>
      <group
        name="B_button"
        position={[1.019, 0.551, -0.297]}
        rotation={[-0.215, 0.356, 0.101]}
        onClick={() => buttonPress("B_button")}
      >
        <mesh
          name="B_button_1"
          geometry={nodes.B_button_1.geometry}
          material={materials["Black grain leather"]}
        ></mesh>
        <mesh
          name="B_button_2"
          geometry={nodes.B_button_2.geometry}
          material={materials.Material}
        ></mesh>
      </group>
    </group>
  );
}
