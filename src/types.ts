import * as THREE from "three";
import { GLTF } from "three-stdlib";

export type GLTFResult = GLTF & {
  nodes: {
    battery: THREE.Mesh;
    charging_port: THREE.Mesh;
    circular_button: THREE.Mesh;
    home_button: THREE.Mesh;
    left_hand: THREE.Mesh;
    left_handhold: THREE.Mesh;
    LEFT_joystick: THREE.Mesh;
    left_mecanism: THREE.Mesh;
    main_container: THREE.Mesh;
    main_screen: THREE.Mesh;
    MINUS_button: THREE.Mesh;
    right_hand: THREE.Mesh;
    right_handgold: THREE.Mesh;
    right_mecanism: THREE.Mesh;
    screen_border: THREE.Mesh;
    screen_glass: THREE.Mesh;
    screws: THREE.Mesh;
    speakers: THREE.Mesh;
    top_left_button: THREE.Mesh;
    top_right_button: THREE.Mesh;
    utilities_buttons: THREE.Mesh;
    home_button_icon: THREE.Mesh;
    A_button_1: THREE.Mesh;
    A_button_2: THREE.Mesh;
    X_button_1: THREE.Mesh;
    X_button_2: THREE.Mesh;
    Y_button_1: THREE.Mesh;
    Y_button_2: THREE.Mesh;
    B_button_1: THREE.Mesh;
    B_button_2: THREE.Mesh;
    UP_button_1: THREE.Mesh;
    UP_button_2: THREE.Mesh;
    LEFT_button_1: THREE.Mesh;
    LEFT_button_2: THREE.Mesh;
    RIGHT_button_1: THREE.Mesh;
    RIGHT_button_2: THREE.Mesh;
    DOWN_button_1: THREE.Mesh;
    DOWN_button_2: THREE.Mesh;
    PLUS_button: THREE.Mesh;
    RIGHT_joystick: THREE.Mesh;
    right_hand_center: THREE.Mesh;
    left_hand_center: THREE.Mesh;
    stand: THREE.Mesh;
    circles: THREE.Mesh;
  };
  materials: {
    ["Plastic black material"]: THREE.MeshStandardMaterial;
    ["Black grain leather"]: THREE.MeshStandardMaterial;
    ["Plastic black material"]: THREE.MeshStandardMaterial;
    ["Plastic black material 2"]: THREE.MeshStandardMaterial;
    ["Material.001"]: THREE.MeshStandardMaterial;
    screen: THREE.MeshStandardMaterial;
    ["Frozen white metal"]: THREE.MeshStandardMaterial;
    ["Black grain leather"]: THREE.MeshStandardMaterial;
    Material: THREE.MeshStandardMaterial;
    plas: THREE.MeshStandardMaterial;
    ["Material.008"]: THREE.MeshStandardMaterial;
  };
};

export type CameraName =
  | "DEFAULT_CAMERA"
  | "FRONT_CAMERA"
  | "LEFT_CAMERA"
  | "RIGHT_CAMERA"
  | "BACK_CAMERA"
  | "SCREWS_CAMERA";

export type EntranceAnimationName =
  | "LEFT_HAND"
  | "SCREEN"
  | "RIGHT_HAND"
  | "SCREWS";
