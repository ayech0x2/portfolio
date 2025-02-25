import { useAtomValue } from "jotai";
import * as React from "react";
import {
  areTexturesPreloadedAtom,
  axisAtom,
  preloadedTexturesAtom,
  xAtom,
  yAtom,
} from "../atoms";
import SCREENS from "../screens";

export default function useScreenTexture() {
  const preloadedTextures = useAtomValue(preloadedTexturesAtom);

  const areTexturesPreloaded = useAtomValue(areTexturesPreloadedAtom);

  const x = useAtomValue(xAtom);

  const y = useAtomValue(yAtom);

  const axis = useAtomValue(axisAtom);

  return React.useCallback(() => {
    if (areTexturesPreloaded) {
      let filename = SCREENS[x].src;
      if (axis === "HORIZONTAL") filename = SCREENS[x].src;
      else if (SCREENS[x].screens) filename = SCREENS[x].screens[y].src;

      return preloadedTextures.find(
        (texture) => texture.name === "screens/" + filename
      );
    }
    return null;
  }, [areTexturesPreloaded, axis, preloadedTextures, x, y]);
}
