'use client';

import { WordLineType } from '@/types/types';
import Tile from './tile';

export default function Row({ data }: { data: WordLineType }) {
  const rowLength = Object.keys(data).length;

  return (
    <div className="flex gap-3">
      {Array.from({ length: rowLength }, (_, i) => i).map((i) => (
        // <div key={i} className="h-20 w-20 border border-foreground flex justify-center items-center">
        //   {JSON.stringify(data[i])}
        // </div>
        <Tile i={i} key={i} />
      ))}
    </div>
  );
}
