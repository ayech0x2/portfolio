import { useTexture } from "@react-three/drei";
import { useAtomValue } from "jotai";
import * as React from "react";
import * as THREE from "three";
import { axisAtom, xAtom, yAtom } from "../atoms";
import SCREENS from "../screens";

export default function useScreenTexture() {
  const [isTexturesLoaded, setIsTexturesLoaded] = React.useState(false);

  const x = useAtomValue(xAtom);

  const y = useAtomValue(yAtom);

  const axis = useAtomValue(axisAtom);

  const texturesArray = () => {
    return SCREENS.map((screen) => {
      let subScreenTextures: Array<string> = [];
      if (screen.screens) {
        subScreenTextures = screen.screens.map((subScreen) => subScreen.src);
      }
      return [screen.src, ...subScreenTextures];
    }).reduce((acc, val) => {
      acc.push(...val);
      return acc;
    });
  };

  const textures = useTexture(texturesArray(), (loadedTextures) => {
    const names = texturesArray();
    loadedTextures.map((loadedTexture, index) => {
      loadedTexture.flipY = false;
      loadedTexture.colorSpace = THREE.SRGBColorSpace;
      return (loadedTexture.name = names[index]);
    });
    setIsTexturesLoaded(true);
  });

  return React.useCallback(() => {
    if (isTexturesLoaded) {
      let filename = SCREENS[x].src;
      if (axis === "HORIZONTAL") filename = SCREENS[x].src;
      else if (SCREENS[x].screens) filename = SCREENS[x].screens[y].src;

      return textures.find((texture) => texture.name === filename);
    }
    return null;
  }, [axis, isTexturesLoaded, textures, x, y]);
}
