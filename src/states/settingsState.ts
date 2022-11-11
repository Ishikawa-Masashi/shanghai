import {
  atom,
  useAtom,
  useAtomWithSelector,
} from '@ishikawa-masashi/react-atomic-state';

const initialState = {
  bgmVolume: 0,
  seVolume: 0.3,
};

const settingsState = atom(initialState);

export const setBgmVolume = (bgmVolume: number) =>
  settingsState.set((state) => ({ ...state, bgmVolume }));

export const setSeVolume = (seVolume: number) =>
  settingsState.set((state) => ({ ...state, seVolume }));

// const unsubscribe = count.subscribe((value) => {
//   console.log(value); // log every update
// });

export const useBgmVolume = () =>
  useAtomWithSelector(settingsState, (state) => state.bgmVolume);

export const useSeVolume = () =>
  useAtomWithSelector(settingsState, (state) => state.seVolume);
