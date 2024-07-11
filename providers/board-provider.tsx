'use client';

import { useContext, createContext, useReducer, PropsWithChildren } from 'react';

import { words } from '@/data/mockData';
import { InitialStateType, SolutionCharObj, BoardContextType, ActionType } from '@/types/types';

const word = words[Math.floor(Math.random() * words.length)];

const initialState: InitialStateType = {
  guesses: {
    0: { 0: null, 1: null, 2: null, 3: null, 4: null },
    1: { 0: null, 1: null, 2: null, 3: null, 4: null },
    2: { 0: null, 1: null, 2: null, 3: null, 4: null },
    3: { 0: null, 1: null, 2: null, 3: null, 4: null },
    4: { 0: null, 1: null, 2: null, 3: null, 4: null },
    5: { 0: null, 1: null, 2: null, 3: null, 4: null },
  },
  solution: word,
  solutionChars: word.split('').reduce<SolutionCharObj>((obj, char, i) => {
    obj[i] = char;
    return obj;
  }, {}),
};

const BoardContext = createContext<BoardContextType | null>(null);

function reducer(state: InitialStateType, action: ActionType) {
  switch (action.type) {
    case 'reset': {
      return initialState;
    }

    default:
      return state;
  }
}

export default function BoardProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const guessesAmount = Object.keys(state.guesses).length;

  function resetState() {
    dispatch({ type: 'reset' });
  }

  function addChar({ rowIndex, tileIndex, char }: { rowIndex: number; tileIndex: number; char: string }) {}

  return <BoardContext.Provider value={{ state, guessesAmount, resetState }}>{children}</BoardContext.Provider>;
}

export function useBoard() {
  const context = useContext(BoardContext);

  if (!context) {
    throw new Error('useBoard must be used within a BoardProvider');
  }

  return context;
}
