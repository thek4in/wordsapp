'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';

export default function ModeToggle() {
  const { setTheme, theme } = useTheme();

  function handleClick() {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  }

  return (
    <Button
      variant="secondary"
      size="icon"
      onClick={handleClick}
      className="flex items-center justify-center cursor-pointer"
    >
      {theme === 'dark' ? <Moon /> : <Sun />}
    </Button>
  );
}
