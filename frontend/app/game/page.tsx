import Link from 'next/link';

const achievements = ['Top 10% networker', 'Owns 3 properties', 'Built first business', 'Regular at the beach'];

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Profile</p>
            <h1 className="mt-2 text-4xl font-bold">Player Profile</h1>
          </div>
          <Link href="/dashboard" className="rounded-xl border border-white/20 px-4 py-2 text-sm hover:bg-white/10">
            Back to Dashboard
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-pink-500 text-3xl font-bold">
                A
              </div>
              <div>
                <p className="text-2xl font-bold">Aisha Bello</p>
                <p className="text-slate-300">Level 12 • Business Owner</p>
              </div>
            </div>

            <div className="mt-6 space-y-3 text-sm text-slate-300">
              <div className="flex items-center justify-between"><span>Location</span><span>Victoria Island</span></div>
              <div className="flex items-center justify-between"><span>Cash</span><span>₦1.45M</span></div>
              <div className="flex items-center justify-between"><span>Friends</span><span>206</span></div>
              <div className="flex items-center justify-between"><span>Reputation</span><span>91</span></div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-bold">Achievements</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {achievements.map((achievement) => (
                <div key={achievement} className="rounded-2xl bg-slate-900 p-4 text-sm text-slate-200">
                  {achievement}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
