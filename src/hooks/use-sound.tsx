export default function useSound() {
  const playSound = () => {
    const sound = new Howl({
      src: ["sound.mp3"],
    });
    sound.play();
  };
  return { playSound };
}
