'use client';

import { useGameStore } from '@/lib/store';
import { useEffect, useState } from 'react';

export default function StatsBar() {
  const { character } = useGameStore();
  const [displayStats, setDisplayStats] = useState(character?.stats);

  useEffect(() => {
    setDisplayStats(character?.stats);
  }, [character?.stats]);

  if (!displayStats) return null;

  const stats = [
    { label: 'Health', value: displayStats.health, max: 100, color: 'bg-red-500' },
    { label: 'Energy', value: displayStats.energy, max: 100, color: 'bg-amber-500' },
    { label: 'Reputation', value: displayStats.reputation, max: 1000, color: 'bg-violet-500' },
  ];

  return (
    <div className="bg-slate-900 border-b border-white/10 px-6 py-4">
      <div className="grid gap-4 md:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label}>
            <div className="mb-1 flex justify-between text-xs text-slate-400">
              <span>{stat.label}</span>
              <span className="font-bold">
                {stat.value.toFixed(0)}/{stat.max}
              </span>
            </div>
            <div className="h-2 rounded-full bg-slate-700">
              <div
                className={`h-2 rounded-full ${stat.color} transition-all`}
                style={{ width: `${(stat.value / stat.max) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
