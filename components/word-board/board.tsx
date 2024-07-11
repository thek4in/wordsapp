'use client';

import Row from './row';

import { useBoard } from '@/providers/board-provider';

export default function Board() {
  const { state, guessesAmount } = useBoard();

  return (
    <div className="bg-secondary text-secondary-foreground p-10 rounded flex flex-col gap-5">
      {Array.from({ length: guessesAmount }, (_, i) => i).map((i) => (
        <Row key={i} data={state[i]} />
      ))}
    </div>
  );
}
