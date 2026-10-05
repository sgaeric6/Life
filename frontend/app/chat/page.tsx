import Link from 'next/link';

const stats = [
  { label: 'Cash', value: '₦1,450,000' },
  { label: 'Health', value: '82%' },
  { label: 'Energy', value: '64%' },
  { label: 'Reputation', value: '91' },
];

const tasks = ['Work shift at a digital agency', 'Pay rent', 'Visit the beach', 'Invest in a shop'];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Life</p>
            <h1 className="mt-2 text-4xl font-bold">Life Dashboard</h1>
          </div>
          <Link href="/chat" className="rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-5 py-3 font-semibold text-white">
            Open Chat
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm text-slate-400">{stat.label}</p>
              <p className="mt-3 text-3xl font-bold">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-bold">Daily Life</h2>
            <div className="mt-5 space-y-4">
              {tasks.map((task, index) => (
                <div key={task} className="flex items-center justify-between rounded-2xl bg-slate-900 p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-200">
                      {index + 1}
                    </div>
                    <p>{task}</p>
                  </div>
                  <button className="rounded-lg border border-white/10 px-3 py-2 text-sm hover:bg-white/10">Do task</button>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-bold">Property Portfolio</h3>
              <div className="mt-4 space-y-3">
                <PropertyItem name="Lekki Apartment" value="₦320,000" />
                <PropertyItem name="Yaba Shop" value="₦220,000" />
                <PropertyItem name="Ikoyi Villa" value="₦1,100,000" />
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-bold">Business Growth</h3>
              <div className="mt-4">
                <p className="text-sm text-slate-400">Monthly income</p>
                <p className="mt-2 text-3xl font-bold text-emerald-400">₦980,000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function PropertyItem({ name, value }: { name: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-slate-900 p-3">
      <p>{name}</p>
      <span className="font-semibold text-cyan-300">{value}</span>
    </div>
  );
}
