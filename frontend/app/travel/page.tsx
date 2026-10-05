import Link from 'next/link';

const districts = [
  { name: 'Victoria Island', type: 'Business', status: 'Active', accent: 'bg-cyan-500/20 text-cyan-200' },
  { name: 'Lekki', type: 'Lifestyle', status: 'Popular', accent: 'bg-violet-500/20 text-violet-200' },
  { name: 'Ikoyi', type: 'Luxury', status: 'High Value', accent: 'bg-amber-500/20 text-amber-200' },
  { name: 'Surulere', type: 'Community', status: 'Busy', accent: 'bg-emerald-500/20 text-emerald-200' },
  { name: 'Yaba', type: 'Student', status: 'Crowded', accent: 'bg-pink-500/20 text-pink-200' },
  { name: 'Ikeja', type: 'Commercial', status: 'Central', accent: 'bg-blue-500/20 text-blue-200' },
  { name: 'Ajah', type: 'Residential', status: 'Expanding', accent: 'bg-teal-500/20 text-teal-200' },
  { name: 'Airport', type: 'Travel', status: 'Fast', accent: 'bg-indigo-500/20 text-indigo-200' },
];

export default function MapPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">World</p>
            <h1 className="mt-2 text-4xl font-bold">Lagos City Map</h1>
          </div>
          <Link href="/travel" className="rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-5 py-3 font-semibold text-white">
            Travel
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-6">
            <div className="relative h-[520px] overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_center,_rgba(34,211,238,0.18),_transparent_35%),linear-gradient(135deg,#0f172a,#111827_45%,#1e293b)]">
              <div className="absolute inset-0 opacity-30">
                <div className="absolute left-[12%] top-[18%] h-32 w-32 rounded-full border border-cyan-400/40" />
                <div className="absolute right-[18%] top-[12%] h-36 w-36 rounded-full border border-violet-400/40" />
                <div className="absolute left-[30%] bottom-[12%] h-40 w-40 rounded-full border border-emerald-400/40" />
                <div className="absolute right-[28%] bottom-[20%] h-28 w-28 rounded-full border border-pink-400/40" />
              </div>

              {districts.map((district, index) => {
                const positions = [
                  'left-[12%] top-[18%]',
                  'left-[62%] top-[20%]',
                  'left-[46%] top-[36%]',
                  'left-[18%] top-[60%]',
                  'left-[64%] top-[62%]',
                  'left-[48%] top-[48%]',
                  'left-[26%] top-[42%]',
                  'left-[76%] top-[45%]',
                ];

                return (
                  <button
                    key={district.name}
                    className={`absolute ${positions[index % positions.length]} rounded-full border border-white/20 bg-slate-900/80 px-3 py-2 text-xs font-medium shadow-lg ${district.accent}`}
                  >
                    {district.name}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="space-y-4">
            {districts.map((district) => (
              <div key={district.name} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg font-semibold">{district.name}</p>
                    <p className="text-sm text-slate-300">{district.type}</p>
                  </div>
                  <span className={`rounded-full px-2 py-1 text-xs font-medium ${district.accent}`}>
                    {district.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
