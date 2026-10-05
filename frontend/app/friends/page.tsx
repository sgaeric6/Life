'use client';

import { useState } from 'react';
import Link from 'next/link';

const friends = [
  { name: 'Tolu', location: 'Victoria Island', status: 'Online', reputation: 95 },
  { name: 'Eve', location: 'Lekki', status: 'Online', reputation: 87 },
  { name: 'Kola', location: 'Yaba', status: 'Idle', reputation: 72 },
  { name: 'Ada', location: 'Surulere', status: 'Offline', reputation: 81 },
  { name: 'Boma', location: 'Ikoyi', status: 'Online', reputation: 93 },
];

const pendingRequests = [
  { name: 'Chioma', reputation: 88, timestamp: '2 hours ago' },
  { name: 'Hassan', reputation: 76, timestamp: '5 hours ago' },
];

export default function FriendsPage() {
  const [selectedFriend, setSelectedFriend] = useState<number | null>(null);
  const [transferAmount, setTransferAmount] = useState('');

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Social</p>
            <h1 className="mt-2 text-4xl font-bold">Friends & Network</h1>
          </div>
          <Link href="/dashboard" className="rounded-xl border border-white/20 px-4 py-2 text-sm hover:bg-white/10">
            Back
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="mb-4 text-2xl font-bold">Friend Requests</h2>
              <div className="space-y-3">
                {pendingRequests.map((req) => (
                  <div key={req.name} className="flex items-center justify-between rounded-2xl bg-slate-900 p-4">
                    <div>
                      <p className="font-bold">{req.name}</p>
                      <p className="text-xs text-slate-400">{req.timestamp}</p>
                    </div>
                    <div className="flex gap-2">
                      <button className="rounded-lg bg-emerald-500/20 px-3 py-2 text-sm text-emerald-200 hover:bg-emerald-500/30">
                        Accept
                      </button>
                      <button className="rounded-lg bg-slate-700 px-3 py-2 text-sm hover:bg-slate-600">
                        Decline
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="mb-4 text-2xl font-bold">Your Friends</h2>
              <div className="space-y-3">
                {friends.map((friend, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedFriend(idx)}
                    className={`w-full rounded-2xl border-2 p-4 text-left transition ${
                      selectedFriend === idx
                        ? 'border-cyan-500 bg-cyan-500/20'
                        : 'border-white/10 bg-white/5 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-bold">{friend.name}</p>
                        <p className="text-sm text-slate-300">{friend.location}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span
                          className={`h-3 w-3 rounded-full ${
                            friend.status === 'Online' ? 'bg-emerald-500' : friend.status === 'Idle' ? 'bg-amber-500' : 'bg-slate-500'
                          }`}
                        />
                        <span className="text-sm">{friend.reputation}</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 h-fit">
            <h2 className="text-2xl font-bold">Send Money</h2>
            {selectedFriend !== null ? (
              <div className="mt-6 space-y-4">
                <div>
                  <p className="text-sm text-slate-400">Recipient</p>
                  <p className="mt-1 text-xl font-bold">{friends[selectedFriend].name}</p>
                </div>
                <div>
                  <label className="text-sm text-slate-400">Amount (₦)</label>
                  <input
                    type="number"
                    value={transferAmount}
                    onChange={(e) => setTransferAmount(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 outline-none"
                    placeholder="Enter amount"
                  />
                </div>
                <button className="mt-8 w-full rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 py-3 font-bold">
                  Transfer Money
                </button>
              </div>
            ) : (
              <p className="mt-6 text-slate-400">Select a friend to send money</p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
