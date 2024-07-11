'use client';

import Row from './row';

import { Button } from '../ui/button';
import { RotateCcw } from 'lucide-react';

import { useBoard } from '@/providers/board-provider';

export default function Board() {
  const { state, guessesAmount, resetState } = useBoard();

  function handleClick() {
    console.log(state);
  }

  function handleReset() {
    resetState();
  }

  return (
    <div className="bg-secondary text-secondary-foreground p-5 rounded">
      <div className="flex items-center justify-between mb-7">
        <div className="flex gap-3">
          <Button onClick={handleClick}>Log State</Button>
          <Button onClick={handleReset}>
            Reset
            <RotateCcw className="h-4 w-4 ml-1" />
          </Button>
        </div>
        <span>Word: {state.solution}</span>
      </div>
      <div className="flex gap-5 flex-col">
        {Array.from({ length: guessesAmount }, (_, i) => i).map((i) => (
          <Row key={i} data={state.guesses[i]} />
        ))}
      </div>
    </div>
  );
}
