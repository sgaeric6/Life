'use client';

import { useGameStore } from '@/lib/store';
import Link from 'next/link';
import { useState } from 'react';

export default function TopUpPage() {
  const { character, requestTopUp, addMoney } = useGameStore();
  const [amount, setAmount] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [requestId, setRequestId] = useState<string | null>(null);

  const conversionRate = 1000; // 1 Naira = 1000 game cash

  const handleTopUp = (e: React.FormEvent) => {
    e.preventDefault();
    const numAmount = parseFloat(amount);
    
    if (numAmount <= 0) {
      alert('Please enter a valid amount');
      return;
    }

    const id = requestTopUp(numAmount);
    setRequestId(id);
    setSubmitted(true);
    setAmount('');
  };

  const gameCash = amount ? (parseFloat(amount) * conversionRate).toLocaleString() : '0';

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 px-6 py-10 text-white">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Finance</p>
            <h1 className="mt-2 text-4xl font-bold">Top Up Game Cash</h1>
          </div>
          <Link href="/dashboard" className="rounded-xl border border-white/20 px-4 py-2 text-sm hover:bg-white/10">
            Back to Dashboard
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Left: Top Up Form */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl">
            <h2 className="mb-6 text-2xl font-bold">Purchase Game Cash</h2>

            <div className="mb-8 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/50 p-4">
              <p className="text-sm text-emerald-200">💰 Exchange Rate</p>
              <p className="mt-2 text-2xl font-bold text-emerald-300">1 Naira = {conversionRate.toLocaleString()} Game Cash</p>
            </div>

            {!submitted ? (
              <form onSubmit={handleTopUp} className="space-y-5">
                <div>
                  <label className="mb-2 block text-sm text-slate-300">Amount in Naira (₦)</label>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount"
                    className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 outline-none transition focus:border-cyan-500/50 focus:bg-slate-900/80"
                    min="1"
                  />
                  <p className="mt-2 text-xs text-slate-400">Minimum: ₦1</p>
                </div>

                <div className="rounded-2xl bg-slate-900 p-4">
                  <div className="mb-3 flex justify-between text-sm text-slate-400">
                    <span>Game Cash You'll Get:</span>
                    <span className="text-lg font-bold text-emerald-400">{gameCash}</span>
                  </div>
                  <div className="flex justify-between text-sm text-slate-400">
                    <span>Status:</span>
                    <span className="text-amber-300">Pending Admin Approval</span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-3 font-bold transition hover:scale-105 disabled:opacity-50"
                  disabled={!amount || parseFloat(amount) <= 0}
                >
                  💳 Request Top Up
                </button>
              </form>
            ) : (
              <div className="rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/50 p-6 text-center">
                <div className="mb-4 text-5xl">✅</div>
                <p className="text-xl font-bold">Request Submitted!</p>
                <p className="mt-2 text-sm text-slate-300">Request ID: {requestId}</p>
                <p className="mt-4 text-sm text-slate-300">
                  An admin will review your payment and credit your account shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setRequestId(null);
                  }}
                  className="mt-6 w-full rounded-xl bg-emerald-500/30 px-4 py-2 text-sm hover:bg-emerald-500/40"
                >
                  Make Another Request
                </button>
              </div>
            )}
          </div>

          {/* Right: Current Balance & Pending */}
          <div className="space-y-6">
            {/* Current Balance */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm text-slate-400">Current Balance</p>
              <p className="mt-3 text-4xl font-black text-cyan-400">
                ₦{character?.stats.money.toLocaleString() || '0'}
              </p>
            </div>

            {/* Quick Presets */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="mb-4 text-sm text-slate-400">Quick Amounts</p>
              <div className="space-y-2">
                {[1000, 5000, 10000, 50000].map((preset) => (
                  <button
                    key={preset}
                    onClick={() => setAmount(preset.toString())}
                    className="w-full rounded-lg bg-slate-900 px-4 py-2 text-left text-sm transition hover:bg-cyan-500/20"
                  >
                    <span className="font-bold">₦{preset.toLocaleString()}</span>
                    <span className="float-right text-cyan-300">
                      → {(preset * conversionRate).toLocaleString()} Cash
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Info Box */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm text-slate-400">📋 How It Works</p>
              <ul className="mt-3 space-y-2 text-xs text-slate-300">
                <li>✓ Send payment proof</li>
                <li>✓ Admin verifies payment</li>
                <li>✓ Cash credited instantly</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
