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
  return { playSound };
}
