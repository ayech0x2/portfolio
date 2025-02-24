import { atom } from "jotai";
import { MouseOn } from "./types";

export const defaultCameraOptionsAtom = atom({
  far: 1000,
  near: 0.1,
  fov: 20.862,
  position: [0, 0.169, 8],
});

export const cameraZoomAtom = atom(1);

export const resetViewRequestAtom = atom(false);

export const entranceAnimationFinishedAtom = atom(false);

export const mouseOnAtom = atom<MouseOn>("DEFAULT");

export const loadingAtom = atom(true);

export const bgAudioAtom = atom(new Audio("bg_music.mp3"));

export const clickAudioAtom = atom(new Audio("sound.mp3"));

export const xAtom = atom(0);

export const yAtom = atom(0);

export const axisAtom = atom<"HORIZONTAL" | "VERTICAL">("HORIZONTAL");

export const showScreenAtom = atom(false);
