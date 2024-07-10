'use client';

import { useState, KeyboardEvent } from 'react';

import RowGuess from '@/components/row-guess';

import { words } from '@/data/mockData';

interface SolutionCharObj {
  [key: number]: string;
}

export interface CharStateType {
  char: string;
  charMatch: boolean;
  position: boolean;
}

interface InitialStateType {
  [key: number]: WordLineType;
  solution: SolutionCharObj;
}

export interface WordLineType {
  [key: number]: null | CharStateType;
}

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

export default function HomePage() {
  const [state, setState] = useState<InitialStateType>(initialState);

  const guessesAmount: number = Object.keys(state).length - 1;

  return (
    <main className="flex items-center justify-center">
      <div className="bg-secondary text-secondary-foreground p-10 rounded flex flex-col gap-5">
        {Array.from({ length: guessesAmount }, (_, i) => i).map((i) => (
          <RowGuess key={i} data={state[i]} />
        ))}
      </div>
    </main>
  );
}
