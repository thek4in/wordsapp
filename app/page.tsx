import Board from '@/components/word-board/board';
import BoardProvider from '@/providers/board-provider';

export default function HomePage() {
  return (
    <main className="flex items-center justify-center">
      <div className="bg-secondary text-secondary-foreground p-10 rounded flex flex-col gap-5">
        <BoardProvider>
          <Board />
        </BoardProvider>
      </div>
    </main>
  );
}
