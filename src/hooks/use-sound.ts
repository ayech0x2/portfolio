import { useAtomValue } from "jotai";
import * as React from "react";
import { bgAudioAtom, clickAudioAtom } from "../atoms";

export default function useSound() {
  const [muted, setMuted] = React.useState(false);

  const bgAudio = useAtomValue(bgAudioAtom);

  const clickAudio = useAtomValue(clickAudioAtom);

  const playSound = (delay = 500) => {
    setTimeout(() => {
      clickAudio.play();
    }, delay);
  };

  const playBackgroundMusic = () => {
    bgAudio.volume = 0.5;
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
