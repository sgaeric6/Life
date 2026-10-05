import Link from 'next/link';

export default function GamePage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Game</p>
            <h1 className="mt-2 text-4xl font-bold">Live City Experience</h1>
          </div>
          <Link href="/dashboard" className="rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-5 py-3 font-semibold text-white">
            Back to Life
          </Link>
        </div>

        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-8">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-400">Current zone</p>
              <p className="text-2xl font-bold">Victoria Island</p>
            </div>
            <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-sm text-emerald-200">Active</span>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <ActionCard title="Work" detail="Office job • ₦75,000" />
            <ActionCard title="Study" detail="Business course • +5 knowledge" />
            <ActionCard title="Relax" detail="Beach walk • +12 energy" />
            <ActionCard title="Invest" detail="Buy mini shop • ₦250k" />
            <ActionCard title="Travel" detail="Go to Lekki • 12 mins" />
            <ActionCard title="Socialize" detail="Meet players nearby" />
          </div>
        </div>
      </div>
    </main>
  );
}

function ActionCard({ title, detail }: { title: string; detail: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <p className="text-xl font-bold">{title}</p>
      <p className="mt-2 text-sm text-slate-300">{detail}</p>
    </div>
  );
}
