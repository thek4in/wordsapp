import Board from '@/components/word-board/board';
import BoardProvider from '@/providers/board-provider';

export default function HomePage() {
  return (
    <main className="flex items-center justify-center">
      <BoardProvider>
        <Board />
      </BoardProvider>
    </main>
  );
}
