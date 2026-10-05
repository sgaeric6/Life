'use client';

import Link from 'next/link';

const activities = [
  { action: 'Work', reward: '₦75,000', energy: '-12', health: '-4' },
  { action: 'Study', reward: '+5 Knowledge', energy: '-10', health: '0' },
  { action: 'Socialize', reward: '+4 Reputation', energy: '-4', health: '+2' },
  { action: 'Travel', reward: '+1 Reputation', energy: '-8', health: '0' },
  { action: 'Relax', reward: '+18 Energy', energy: '+18', health: '+8' },
  { action: 'Shop', reward: '-₦12,000', energy: '-2', health: '+1' },
];

export default function ActivitiesPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Daily Life</p>
            <h1 className="mt-2 text-4xl font-bold">Daily Activities</h1>
          </div>
          <Link href="/game" className="rounded-xl border border-white/20 px-4 py-2 text-sm hover:bg-white/10">
            Back to Game
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity) => (
            <div key={activity.action} className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
              <h3 className="text-2xl font-bold">{activity.action}</h3>
              <div className="mt-4 space-y-2 text-sm text-slate-300">
                <div className="flex items-center justify-between">
                  <span>Reward:</span>
                  <span className="font-semibold text-emerald-400">{activity.reward}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Energy:</span>
                  <span className={activity.energy.includes('-') ? 'text-red-400' : 'text-emerald-400'}>
                    {activity.energy}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Health:</span>
                  <span className={activity.health.includes('-') ? 'text-red-400' : 'text-emerald-400'}>
                    {activity.health}
                  </span>
                </div>
              </div>
              <button className="mt-6 w-full rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 py-2 font-bold">
                Do Activity
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
