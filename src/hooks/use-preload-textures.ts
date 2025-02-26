import { useSetAtom } from "jotai";
import * as React from "react";
import * as THREE from "three";
import SCREENS from "../screens";
import { areTexturesPreloadedAtom, preloadedTexturesAtom } from "./../atoms";

export default function usePreloadTextures() {
  const setPreloadedTextures = useSetAtom(preloadedTexturesAtom);

  const setAreTexturesPreloaded = useSetAtom(areTexturesPreloadedAtom);

  const texturesArray = () => {
    return SCREENS.map((screen) => {
      let subScreenTextures: Array<string> = [];
      if (screen.screens) {
        subScreenTextures = screen.screens.map(
          (subScreen) => "screens/" + subScreen.src
        );
      }
      return ["screens/" + screen.src, ...subScreenTextures];
    }).reduce((acc, val) => {
      acc.push(...val);
      return acc;
    });
  };

  React.useEffect(() => {
    const texturePaths = texturesArray();

    const loader = new THREE.TextureLoader();

    Promise.all(
      texturePaths.map(
        (path) =>
          new Promise<THREE.Texture>((resolve) => loader.load(path, resolve))
      )
    )
      .then((loadedTextures) => {
        const names = texturesArray();
        loadedTextures.map((loadedTexture, index) => {
          loadedTexture.flipY = false;
          loadedTexture.colorSpace = THREE.SRGBColorSpace;
          return (loadedTexture.name = names[index]);
        });
        setPreloadedTextures(loadedTextures);
        setAreTexturesPreloaded(true);
      })
      .catch(() => setAreTexturesPreloaded(false));
  }, [setAreTexturesPreloaded, setPreloadedTextures]);
}
