import { atom } from "jotai";
import { MouseOn } from "./types";

export const entranceAnimationFinishedAtom = atom(false);

export const mouseOnAtom = atom<MouseOn>("DEFAULT");

export const loadingAtom = atom(true);

export const bgAudioAtom = atom(new Audio("bg_music.mp3"));
