import { WordLineType } from '@/app/page';

import { Input } from './ui/input';

export default function RowGuess({ data }: { data: WordLineType }) {
  const rowLength = Object.keys(data).length;

  console.log(data);

  return (
    <div className="flex gap-3">
      {Array.from({ length: rowLength }, (_, i) => i).map((i) => (
        // <div key={i} className="h-20 w-20 border border-foreground flex justify-center items-center">
        //   {JSON.stringify(data[i])}
        // </div>
        <Input
          key={i}
          className="h-20 w-20 border border-foreground flex justify-center items-center text-center text-3xl"
          type="text"
        />
      ))}
    </div>
  );
}
