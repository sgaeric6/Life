'use client';

import Link from 'next/link';

const locations = [
  'Victoria Island',
  'Lekki',
  'Ikoyi',
  'Surulere',
  'Yaba',
  'Ikeja',
  'Ajah',
  'Airport',
  'Beach',
  'Mall',
  'School',
  'Business District',
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-center min-h-[70vh]">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-blue-400/40 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-200">
              Lagos Life Sim
            </p>
            <h1 className="text-5xl font-black tracking-tight md:text-7xl">Welcome to Lagos</h1>
            <p className="mt-6 max-w-xl text-lg text-slate-300">
              Create your character, choose your path, travel across the city, meet players, work,
              study, earn money, and build your life empire in a realistic Lagos city simulation.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/create-character"
                className="rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-3 font-semibold text-white shadow-lg shadow-cyan-500/25 transition hover:scale-[1.02]"
              >
                Create Character
              </Link>
              <Link
                href="/map"
                className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Explore Map
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <Stat label="Players Online" value="2,480" />
              <Stat label="Average Income" value="₦1.2M" />
              <Stat label="Properties" value="18.4K" />
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-xl font-bold">Character Preview</h2>
              <span className="rounded-full bg-emerald-500/20 px-2 py-1 text-xs font-semibold text-emerald-300">
                Online
              </span>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-slate-800 to-slate-700 p-5">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 text-2xl font-bold">
                  A
                </div>
                <div>
                  <p className="text-xl font-bold">Aisha Bello</p>
                  <p className="text-sm text-slate-300">Level 12 • Business Owner</p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <ProgressRow label="Health" value={82} color="bg-emerald-500" />
                <ProgressRow label="Energy" value={64} color="bg-amber-500" />
                <ProgressRow label="Money" value={76} color="bg-blue-500" />
                <ProgressRow label="Reputation" value={91} color="bg-violet-500" />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-20">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Explore</p>
              <h2 className="mt-2 text-3xl font-bold">Top Lagos Districts</h2>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {locations.map((location) => (
              <div
                key={location}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-cyan-400/50 hover:bg-white/10"
              >
                <div className="mb-4 h-28 rounded-xl bg-gradient-to-br from-cyan-500/20 via-blue-500/15 to-slate-700" />
                <h3 className="text-lg font-semibold">{location}</h3>
                <p className="mt-2 text-sm text-slate-300">Live, travel, work, meet players, and grow your lifestyle here.</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <p className="text-2xl font-bold">{value}</p>
      <p className="mt-1 text-sm text-slate-400">{label}</p>
    </div>
  );
}

function ProgressRow({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div>
      <div className="mb-1 flex justify-between text-xs text-slate-300">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="h-2.5 rounded-full bg-slate-700">
        <div className={`h-2.5 rounded-full ${color}`} style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}
