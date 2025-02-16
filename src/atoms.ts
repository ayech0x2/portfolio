import { atom } from "jotai";
import { MouseOn } from "./types";

export const entranceAnimationFinishedAtom = atom(false);

export const mouseOnAtom = atom<MouseOn>("DEFAULT");
