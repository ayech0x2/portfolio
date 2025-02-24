import { Html } from "@react-three/drei";
import { useAtomValue } from "jotai";
import { Color } from "three";
import { entranceAnimationFinishedAtom, showScreenAtom } from "../../atoms";
import useScreenTexture from "../../hooks/use-screen-texture";
import { GLTFResult } from "../../types";
import ScreenHint from "./screen-hint";
import * as React from "react";
export default function Screen({ nodes, materials }: GLTFResult) {
  const entranceAnimationFinished = useAtomValue(entranceAnimationFinishedAtom);

  const showScreen = useAtomValue(showScreenAtom);

  const texture = useScreenTexture();

  return (
    <group name="full_screen">
      <group name="screen_part_one">
        <mesh
          name="main_container"
          geometry={nodes.main_container.geometry}
          material={materials["Plastic black material 2"]}
          position={[0.044, 0.355, 0.022]}
          rotation={[0.281, 0.099, -0.014]}
        ></mesh>
        <mesh
          name="battery"
          geometry={nodes.battery.geometry}
          material={materials["Plastic black material"]}
          position={[0.013, 0.086, 0.035]}
          rotation={[1.391, 0.095, -0.357]}
        ></mesh>
        <mesh
          name="charging_port"
          geometry={nodes.charging_port.geometry}
          material={materials["Plastic black material"]}
          position={[0.093, -0.119, 0.117]}
          rotation={[1.391, 0.095, -0.357]}
        ></mesh>
        <mesh
          name="speakers"
          geometry={nodes.speakers.geometry}
          material={materials["Plastic black material"]}
          position={[0.15, 0.348, 0.02]}
          rotation={[1.391, 0.095, -0.357]}
        ></mesh>
        <mesh
          name="utilities_buttons"
          geometry={nodes.utilities_buttons.geometry}
          material={materials["Plastic black material"]}
          position={[-0.408, 0.826, 0.096]}
          rotation={[-0.215, 0.356, 0.101]}
        ></mesh>
      </group>

      <group name="screen_part_two">
        <mesh
          name="main_screen"
          geometry={nodes.main_screen.geometry}
          material={materials["Material.001"]}
          position={[0.068, 0.358, 0.084]}
          rotation={[1.391, 0.095, -0.357]}
        >
          {entranceAnimationFinished && (
            <React.Fragment>
              {showScreen && (
                <meshStandardMaterial
                  map={texture()}
                  color={new Color(1.5, 1.5, 1.5)}
                  emissiveMap={texture()}
                  emissive={"white"}
                  emissiveIntensity={0.4}
                />
              )}
              <Html
                center
                rotation-x={-Math.PI / 2}
                position={[0, 0.1, 0]}
                transform
                distanceFactor={1}
              >
                <ScreenHint />
              </Html>
            </React.Fragment>
          )}
        </mesh>

        <mesh
          name="screen_border"
          geometry={nodes.screen_border.geometry}
          material={materials["Plastic black material"]}
          position={[0.049, 0.345, 0.088]}
          rotation={[1.391, 0.095, -0.357]}
        ></mesh>
        <mesh
          name="screen_glass"
          geometry={nodes.screen_glass.geometry}
          material={materials.screen}
          position={[0.05, 0.347, 0.096]}
          rotation={[1.391, 0.095, -0.357]}
        >
          <meshStandardMaterial
            roughness={0}
            metalness={0.8}
            transparent
            opacity={0.1}
          />
        </mesh>
      </group>
    </group>
  );
}
