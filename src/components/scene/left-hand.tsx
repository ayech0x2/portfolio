import { GLTFResult } from "../../types";

export default function LeftHand({
  nodes,
  materials,
}: GLTFResult & {
  buttonPress: (buttonName: string) => void;
}) {
  return (
    <group name="left_hand_center">
      <mesh
        name="circular_button"
        geometry={nodes.circular_button.geometry}
        material={materials["Black grain leather"]}
        position={[-0.814, 0.118, 0.484]}
        rotation={[1.391, 0.095, -0.357]}
      />
      <mesh
        name="top_left_button"
        geometry={nodes.top_left_button.geometry}
        material={materials["Black grain leather"]}
        position={[-1.011, 0.749, 0.36]}
        rotation={[-0.215, 0.356, 0.101]}
      />

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
        name="MINUS_button"
        geometry={nodes.MINUS_button.geometry}
        material={materials["Black grain leather"]}
        position={[-0.834, 0.722, 0.352]}
        rotation={[-0.215, 0.356, 0.101]}
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
        name="left_hand"
        geometry={nodes.left_hand.geometry}
        material={materials["Plastic black material"]}
        position={[-0.911, 0.298, 0.403]}
        rotation={[0.281, 0.099, -0.014]}
      />
    </group>
  );
}
