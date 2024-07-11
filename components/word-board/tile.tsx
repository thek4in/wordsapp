'use client';

import { useState, ChangeEvent } from 'react';
import { Input } from '@/components/ui/input';

export default function Tile({ i }: { i: number }) {
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
