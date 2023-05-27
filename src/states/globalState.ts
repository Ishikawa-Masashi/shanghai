import {
  atom,
  useAtom,
  useAtomWithSelector,
} from '@ishikawa-masashi/react-atomic-state';

export const isEmpty = (obj: {}) => Object.keys(obj).length === 0;

enum Controller {
  Keyboard,
}

export const WIDTH = 320;

const state = atom({
  pixelRatio: 1,
});

export const setPixelRatio = (pixelRatio: number) =>
  state.set((state) => ({
    ...state,
    pixelRatio,
  }));

export const usePixelRatio = () =>
  useAtomWithSelector(state, (state) => state.pixelRatio);
