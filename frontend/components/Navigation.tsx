'use client';

import { useGameStore } from '@/lib/store';
import Link from 'next/link';
import { useEffect } from 'react';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: '🏠' },
  { name: 'Work', href: '/work', icon: '💼' },
  { name: 'Study', href: '/study', icon: '📚' },
  { name: 'Properties', href: '/property', icon: '🏢' },
  { name: 'Friends', href: '/friends', icon: '👥' },
  { name: 'Chat', href: '/chat', icon: '💬' },
  { name: 'Top Up', href: '/topup', icon: '💳' },
];

export default function Navigation() {
  const { character, currentRoute } = useGameStore();

  if (!character) return null;

  return (
    <nav className="bg-gradient-to-r from-slate-900 to-slate-800 border-b border-white/10 sticky top-0 z-40 shadow-lg">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between mb-4">
          <Link href="/dashboard" className="flex items-center gap-3">
            <span className="text-3xl">🎮</span>
            <div>
              <p className="text-sm font-bold text-cyan-300">Lagos Life Sim</p>
              <p className="text-xs text-slate-400">{character.name} • Level {character.stats.level}</p>
            </div>
          </Link>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-xs text-slate-400">Balance</p>
              <p className="font-bold text-emerald-400">₦{character.stats.money.toLocaleString()}</p>
            </div>
            <button className="rounded-lg bg-slate-700 hover:bg-slate-600 px-3 py-2 text-sm">
              ⚙️
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium transition ${
                currentRoute === item.href
                  ? 'bg-cyan-500/20 text-cyan-200 border border-cyan-500/50'
                  : 'text-slate-300 hover:bg-white/5 border border-transparent'
              }`}
            >
              {item.icon} {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
