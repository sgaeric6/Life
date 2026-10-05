import Link from 'next/link';

const options = ['Business', 'Student', 'Creative', 'Executive'];

export default function CreateCharacterPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Character</p>
            <h1 className="mt-2 text-4xl font-bold">Create Your Character</h1>
          </div>
          <Link href="/" className="rounded-xl border border-white/20 px-4 py-2 text-sm hover:bg-white/10">
            Back Home
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-3xl font-bold">
                A
              </div>
              <div>
                <p className="text-xl font-semibold">Character Preview</p>
                <p className="text-slate-300">Starting cash: ₦1,000,000</p>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <div>
                <label className="mb-2 block text-sm text-slate-300">Name</label>
                <input className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 outline-none ring-0" defaultValue="Aisha Bello" />
              </div>
              <div>
                <label className="mb-2 block text-sm text-slate-300">Age</label>
                <input type="number" className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 outline-none" defaultValue={24} />
              </div>
              <div>
                <label className="mb-2 block text-sm text-slate-300">Style</label>
                <input className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 outline-none" defaultValue="Clean and professional" />
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-4 text-2xl font-bold">Choose Your Life Path</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {options.map((option) => (
                <button
                  key={option}
                  className="rounded-2xl border border-cyan-500/30 bg-cyan-500/10 px-4 py-5 text-left hover:bg-cyan-500/20"
                >
                  <p className="text-lg font-semibold">{option}</p>
                  <p className="mt-2 text-sm text-slate-300">Build your future in Lagos with this route.</p>
                </button>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-slate-900 p-4">
              <p className="text-sm text-slate-300">Starting bonus</p>
              <p className="mt-2 text-2xl font-bold text-emerald-400">₦1,000,000</p>
            </div>

            <div className="mt-8 flex justify-end gap-3">
              <Link href="/map" className="rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-3 font-semibold text-white">
                Start Game
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
