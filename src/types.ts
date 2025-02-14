import * as THREE from "three";

export interface GLTFResult extends THREE.Object3D {
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
    PLUS_button: THREE.Mesh;
    RIGHT_joystick: THREE.Mesh;
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
    stand: THREE.Mesh;
    circles: THREE.Mesh;
  };
  materials: {
    ["Plastic black material"]: THREE.Material;
    ["Plastic black material 2"]: THREE.Material;
    ["Black grain leather"]: THREE.Material;
    ["Material.001"]: THREE.Material;
    ["Frozen white metal"]: THREE.Material;
    ["plas"]: THREE.Material;
    ["Material"]: THREE.Material;
    ["screen"]: THREE.Material;
    ["Material.008"]: THREE.Material;
  };
}
