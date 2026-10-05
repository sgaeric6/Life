import Link from 'next/link';

const nearbyPlayers = [
  { name: 'Tolu', status: 'Nearby', mood: 'Looking for a ride' },
  { name: 'Eve', status: 'At beach', mood: 'Planning a meetup' },
  { name: 'Kola', status: 'Near mall', mood: 'Buying supplies' },
];

const messages = [
  { from: 'Tolu', text: 'Hey! Want to join me at Lekki?' },
  { from: 'You', text: 'Sure, I am on my way.' },
  { from: 'Tolu', text: 'Perfect, see you there.' },
];

export default function ChatPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Social</p>
            <h1 className="mt-2 text-4xl font-bold">Chat & Nearby Players</h1>
          </div>
          <Link href="/dashboard" className="rounded-xl border border-white/20 px-4 py-2 text-sm hover:bg-white/10">
            Back to Dashboard
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <h2 className="mb-4 text-xl font-bold">Nearby Players</h2>
            <div className="space-y-3">
              {nearbyPlayers.map((player) => (
                <div key={player.name} className="rounded-2xl bg-slate-900 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">{player.name}</p>
                      <p className="text-sm text-slate-300">{player.mood}</p>
                    </div>
                    <span className="rounded-full bg-emerald-500/20 px-2 py-1 text-xs text-emerald-200">{player.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-bold">Conversation with Tolu</h2>
              <span className="rounded-full bg-cyan-500/20 px-2 py-1 text-xs text-cyan-200">Online</span>
            </div>

            <div className="space-y-4 rounded-2xl bg-slate-900 p-4">
              {messages.map((message) => (
                <div key={message.text} className={message.from === 'You' ? 'text-right' : 'text-left'}>
                  <div className={`inline-block rounded-2xl px-4 py-2 ${message.from === 'You' ? 'bg-cyan-500 text-white' : 'bg-slate-700 text-slate-100'}`}>
                    <p className="text-xs uppercase tracking-wide text-white/70">{message.from}</p>
                    <p className="mt-1">{message.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 flex gap-3">
              <input className="flex-1 rounded-xl border border-white/10 bg-slate-900 px-4 py-3 outline-none" placeholder="Type a message..." />
              <button className="rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-5 py-3 font-semibold">Send</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
