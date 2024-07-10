import ModeToggle from '@/components/mode-toggle';

export default function Header() {
  return (
    <header className="h-20 shrink-0 border-b flex items-center justify-between px-20">
      <div>[LOGO]</div>
      <ModeToggle />
    </header>
  );
}
