import { useAtomValue } from "jotai";
import * as React from "react";
import { bgAudioAtom } from "../atoms";

export default function useSound() {
  const [muted, setMuted] = React.useState(false);

  const bgAudio = useAtomValue(bgAudioAtom);

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
    playBackgroundMusic,
    muteBackgroundMusic,
    unMuteBackgroundMusic,
  };
}
