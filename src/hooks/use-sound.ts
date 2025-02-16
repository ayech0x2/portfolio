import { Howl } from "howler";

export default function useSound() {
  const playSound = (delay = 500) => {
    const sound = new Howl({
      src: ["sound.mp3"],
    });
    setTimeout(() => {
      sound.play();
    }, delay);
  };

  const playBackgroundMusic = () => {
    const sound = new Howl({
      src: ["background_music.mp3"],
      volume: 0.5,
    });

    sound.play();
  };
  return { playSound, playBackgroundMusic };
}
