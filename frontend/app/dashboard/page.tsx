import Link from 'next/link';

const transportModes = [
  { name: 'Keke', time: '12 mins', cost: '₦800', status: 'Fast and local' },
  { name: 'Taxi', time: '9 mins', cost: '₦1,500', status: 'Comfortable' },
  { name: 'Bus', time: '18 mins', cost: '₦300', status: 'Budget option' },
  { name: 'Plane', time: '45 mins', cost: '₦45,000', status: 'Long distance' },
];

export default function TravelPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Travel</p>
            <h1 className="mt-2 text-4xl font-bold">Choose Your Route</h1>
          </div>
          <Link href="/map" className="rounded-xl border border-white/20 px-4 py-2 text-sm hover:bg-white/10">
            Back to Map
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="space-y-4">
            {transportModes.map((mode) => (
              <div key={mode.name} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-2xl font-bold">{mode.name}</p>
                    <p className="mt-1 text-slate-300">{mode.status}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-slate-400">Travel time</p>
                    <p className="text-lg font-semibold">{mode.time}</p>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-400">From</p>
                    <p className="font-medium">Lekki</p>
                  </div>
                  <div className="text-center text-slate-400">→</div>
                  <div>
                    <p className="text-sm text-slate-400">To</p>
                    <p className="font-medium">Victoria Island</p>
                  </div>
                  <div className="rounded-xl bg-cyan-500/20 px-3 py-2 text-cyan-200">{mode.cost}</div>
                </div>

                <div className="mt-5 flex justify-end">
                  <Link href="/dashboard" className="rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-5 py-3 font-semibold text-white">
                    Travel Now
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Loading</p>
            <h2 className="mt-3 text-3xl font-bold">Travel Progress</h2>

            <div className="mt-8 rounded-2xl bg-slate-900 p-5">
              <div className="mb-2 flex justify-between text-sm text-slate-300">
                <span>Destination</span>
                <span>72%</span>
              </div>
              <div className="h-3 rounded-full bg-slate-700">
                <div className="h-3 w-[72%] rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" />
              </div>

              <div className="mt-8 space-y-3 text-sm text-slate-300">
                <p>⚡ Traffic check completed</p>
                <p>🚕 Driver assigned</p>
                <p>📍 Arrival expected in 8 minutes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
