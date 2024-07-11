'use client';

import { useContext, createContext, useReducer, PropsWithChildren } from 'react';

import { words } from '@/data/mockData';
import { InitialStateType, SolutionCharObj } from '@/types/types';

const BoardContext = createContext({});

const initialState: InitialStateType = {
  0: { 0: null, 1: null, 2: null, 3: null, 4: null },
  1: { 0: null, 1: null, 2: null, 3: null, 4: null },
  2: { 0: null, 1: null, 2: null, 3: null, 4: null },
  3: { 0: null, 1: null, 2: null, 3: null, 4: null },
  4: { 0: null, 1: null, 2: null, 3: null, 4: null },
  5: { 0: null, 1: null, 2: null, 3: null, 4: null },
  solution: words[Math.floor(Math.random() * words.length)].split('').reduce<SolutionCharObj>((obj, char, i) => {
    obj[i] = char;
    return obj;
  }, {}),
};

function reducer(state, action) {
  switch (state.action) {
    default:
      return state;
  }
}

export default function BoardProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const guessesAmount = Object.keys(state).length - 1;

  return <BoardContext.Provider value={{ guessesAmount, state }}>{children}</BoardContext.Provider>;
}

export function useBoard() {
  const context = useContext(BoardContext);

  return context;
}
