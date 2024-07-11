'use client';

import { WordLineType } from '@/types/types';
import { useState, useRef, ChangeEvent } from 'react';

import { Input } from './ui/input';

function RowInput({ i }: { i: number }) {
  const [value, setValue] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const newValue = e.target.value;
    setValue(newValue);
    newValue.length > 0 ? setIsDisabled(true) : setIsDisabled(false);
  }

  function handleFocus() {
    console.log('clicked');
    if (value.length > 0) {
      setValue('');
      setIsDisabled(false);
    }
  }

  return (
    <Input
      className="h-20 w-20 border border-foreground flex justify-center items-center text-center text-3xl uppercase"
      type="text"
      value={value}
      onChange={handleChange}
      onFocus={handleFocus}
      onClick={handleFocus}
      disabled={isDisabled}
    />
  );
}

export default function RowGuess({ data }: { data: WordLineType }) {
  const rowLength = Object.keys(data).length;

  return (
    <div className="flex gap-3">
      {Array.from({ length: rowLength }, (_, i) => i).map((i) => (
        // <div key={i} className="h-20 w-20 border border-foreground flex justify-center items-center">
        //   {JSON.stringify(data[i])}
        // </div>
        <RowInput i={i} key={i} />
      ))}
    </div>
  );
}
