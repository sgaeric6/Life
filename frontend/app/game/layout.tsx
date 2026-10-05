import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lagos Life Sim - Game',
  description: 'Play Lagos Life Sim multiplayer game',
};

export default function GameLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
