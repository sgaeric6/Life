import Navigation from '@/components/Navigation';
import StatsBar from '@/components/StatsBar';

export default function GameLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation />
      <StatsBar />
      {children}
    </div>
  );
}
