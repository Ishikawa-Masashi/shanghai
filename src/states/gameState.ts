import {
  atom,
  useAtom,
  useAtomWithSelector,
} from '@ishikawa-masashi/react-atomic-state';

import { Board, getState, init, main } from '../mahjongSolitaire';
import { stages } from '../mahjongSolitaire/layouts';

const initialState = {
  board: [] as Board,
  rest: -1,
  stageIndex: 0,
  stage: stages[0],

  target: -1,
};

const gameState = atom(initialState);

const count = atom(0);

export const setBoard = (board: Board) => {
  const { rest } = getState();
  gameState.set((state) => ({ ...state, board, rest }));
};

export const setRest = (rest: number) =>
  gameState.set((state) => ({ ...state, rest }));

export const setStageIndex = (stageIndex: number) => {
  const stage = stages[stageIndex];

  const state = main(stage.layout);

  const { board, rest } = state;

  gameState.set((state) => ({ ...state, stageIndex, stage, board, rest }));
};

export const setTarget = (target: number) =>
  gameState.set((state) => ({ ...state, target }));

const unsubscribe = gameState.subscribe((state) => {
  console.log(state); // log every update
});

// create a custom hook
export const useCount = () => useAtom(count);

// create a custom hook with selector
export const useStringCount = () =>
  useAtomWithSelector(count, (count) => count.toString());

// create a custom hook with selector
export const useBoard = () =>
  useAtomWithSelector(gameState, (state) => state.board);

export const useRest = () =>
  useAtomWithSelector(gameState, (state) => state.rest);

export const useStageIndex = () =>
  useAtomWithSelector(gameState, (state) => state.stageIndex);

export const useStage = () =>
  useAtomWithSelector(gameState, (state) => state.stage);

export const useTarget = () =>
  useAtomWithSelector(gameState, (state) => state.target);

export const newGame = () => {
  const { board } = init();
  //   setTarget(-1);
  //   setBoard(state.board);
  const target = -1;
  gameState.set((state) => ({ ...state, target, board }));
};
