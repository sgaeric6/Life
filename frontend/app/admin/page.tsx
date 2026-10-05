'use client';

import { useState } from 'react';
import Link from 'next/link';

const ADMIN_PASSWORD = 'LagosAdmin2024'; // In production, use proper authentication

interface PendingTopUp {
  id: string;
  playerId: string;
  amount: number;
  gameCash: number;
  status: 'pending' | 'accepted' | 'rejected';
  createdAt: string;
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const [pendingTopUps] = useState<PendingTopUp[]>([
    {
      id: 'topup_001',
      playerId: 'player_1',
      amount: 5000,
      gameCash: 5000000,
      status: 'pending',
      createdAt: new Date().toISOString(),
    },
    {
      id: 'topup_002',
      playerId: 'player_2',
      amount: 10000,
      gameCash: 10000000,
      status: 'pending',
      createdAt: new Date().toISOString(),
    },
    {
      id: 'topup_003',
      playerId: 'player_3',
      amount: 1000,
      gameCash: 1000000,
      status: 'accepted',
      createdAt: new Date(Date.now() - 3600000).toISOString(),
    },
  ]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setError('');
      setPassword('');
    } else {
      setError('❌ Invalid password. Access denied.');
      setPassword('');
    }
  };

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-slate-950 via-red-950 to-slate-900 flex items-center justify-center px-6 text-white">
        <div className="rounded-3xl border border-red-500/30 bg-red-500/10 p-10 max-w-md w-full shadow-2xl backdrop-blur-xl">
          <h1 className="text-3xl font-black text-center mb-2">🔐 Admin Panel</h1>
          <p className="text-center text-slate-300 mb-8">Restricted Access - Password Required</p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="mb-2 block text-sm text-slate-300">Admin Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 outline-none transition focus:border-red-500/50"
              />
            </div>

            {error && <div className="rounded-lg bg-red-500/20 border border-red-500/50 p-3 text-sm text-red-200">{error}</div>}

            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-red-600 to-orange-600 px-6 py-3 font-bold transition hover:scale-105"
            >
              🔓 Unlock Admin Panel
            </button>
          </form>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-red-950 to-slate-900 px-6 py-10 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-red-300">⚙️ System</p>
            <h1 className="mt-2 text-4xl font-bold">Admin Control Panel</h1>
          </div>
          <button
            onClick={() => {
              setIsAuthenticated(false);
              setPassword('');
            }}
            className="rounded-xl border border-red-500/50 bg-red-500/10 px-4 py-2 text-sm hover:bg-red-500/20"
          >
            🚪 Logout
          </button>
        </div>

        {/* Stats Overview */}
        <div className="mb-8 grid gap-4 md:grid-cols-4">
          <StatCard label="Pending Requests" value={pendingTopUps.filter((t) => t.status === 'pending').length.toString()} color="amber" />
          <StatCard label="Approved" value={pendingTopUps.filter((t) => t.status === 'accepted').length.toString()} color="emerald" />
          <StatCard label="Total Revenue" value={`₦${(pendingTopUps.filter((t) => t.status === 'accepted').reduce((sum, t) => sum + t.amount, 0)).toLocaleString()}`} color="cyan" />
          <StatCard label="Active Players" value="1,240" color="violet" />
        </div>

        {/* Pending Top Ups */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="mb-6 text-2xl font-bold">Pending Top-Up Requests</h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10 text-left text-sm text-slate-400">
                  <th className="pb-3 font-semibold">ID</th>
                  <th className="pb-3 font-semibold">Player</th>
                  <th className="pb-3 font-semibold">Amount</th>
                  <th className="pb-3 font-semibold">Game Cash</th>
                  <th className="pb-3 font-semibold">Date</th>
                  <th className="pb-3 font-semibold">Status</th>
                  <th className="pb-3 font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {pendingTopUps.map((topup) => (
                  <tr key={topup.id} className="border-b border-white/5 hover:bg-white/5">
                    <td className="py-3 text-sm font-mono">{topup.id}</td>
                    <td className="py-3 text-sm">{topup.playerId}</td>
                    <td className="py-3 text-sm font-bold text-cyan-300">₦{topup.amount.toLocaleString()}</td>
                    <td className="py-3 text-sm font-bold text-emerald-300">{topup.gameCash.toLocaleString()} 🪙</td>
                    <td className="py-3 text-sm text-slate-400">{new Date(topup.createdAt).toLocaleDateString()}</td>
                    <td className="py-3 text-sm">
                      <span
                        className={`inline-block rounded-full px-3 py-1 text-xs font-bold ${
                          topup.status === 'pending'
                            ? 'bg-amber-500/20 text-amber-200'
                            : topup.status === 'accepted'
                            ? 'bg-emerald-500/20 text-emerald-200'
                            : 'bg-red-500/20 text-red-200'
                        }`}
                      >
                        {topup.status.toUpperCase()}
                      </span>
                    </td>
                    <td className="py-3 text-sm">
                      {topup.status === 'pending' ? (
                        <div className="flex gap-2">
                          <button className="rounded-lg bg-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-200 hover:bg-emerald-500/30">
                            ✅ Accept
                          </button>
                          <button className="rounded-lg bg-red-500/20 px-3 py-1 text-xs font-bold text-red-200 hover:bg-red-500/30">
                            ❌ Reject
                          </button>
                        </div>
                      ) : (
                        <span className="text-xs text-slate-400">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}

function StatCard({
  label,
  value,
  color,
}: {
  label: string;
  value: string;
  color: 'amber' | 'emerald' | 'cyan' | 'violet';
}) {
  const colorMap = {
    amber: 'from-amber-500/20 to-orange-500/20 border-amber-500/50',
    emerald: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/50',
    cyan: 'from-cyan-500/20 to-blue-500/20 border-cyan-500/50',
    violet: 'from-violet-500/20 to-purple-500/20 border-violet-500/50',
  };

  return (
    <div className={`rounded-2xl bg-gradient-to-br ${colorMap[color]} border p-6`}>
      <p className="text-sm text-slate-400">{label}</p>
      <p className="mt-3 text-3xl font-bold">{value}</p>
    </div>
  );
}
