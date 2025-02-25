import { useAtomValue } from "jotai";
import * as React from "react";
import { bgAudioAtom, clickAudioAtom } from "../atoms";

export default function useSound() {
  const [muted, setMuted] = React.useState(false);

  const bgAudio = useAtomValue(bgAudioAtom);

  const clickAudio = useAtomValue(clickAudioAtom);

  const playSound = React.useCallback(
    (delay: number = 500) => {
      setTimeout(() => {
        clickAudio.play();
      }, delay);
    },
    [clickAudio]
  );

  const playBackgroundMusic = () => {
    bgAudio.volume = 0.3;
    bgAudio.loop = true;
    bgAudio.play();
  };

  const muteBackgroundMusic = () => {
    bgAudio.muted = true;
    setMuted(true);
  };

  const unMuteBackgroundMusic = () => {
    bgAudio.muted = false;
    setMuted(false);
  };

  return {
    muted,
    playSound,
    playBackgroundMusic,
    muteBackgroundMusic,
    unMuteBackgroundMusic,
  };
}
