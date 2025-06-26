import { atom } from 'jotai';
import { countAtom } from './atoms';

export const doubleCountAtom = atom((get) => get(countAtom));
