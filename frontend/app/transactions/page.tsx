'use client';

import Link from 'next/link';

const transactions = [
  { type: 'Salary', amount: '+₦75,000', date: 'Today 2:30 PM' },
  { type: 'Transfer to Tolu', amount: '-₦50,000', date: 'Today 1:15 PM' },
  { type: 'Property Purchase', amount: '-₦2,500,000', date: 'Yesterday 10:45 AM' },
  { type: 'Business Income', amount: '+₦150,000', date: 'Yesterday 8:20 AM' },
  { type: 'Study Fee', amount: '-₦50,000', date: '2 days ago' },
];

export default function TransactionPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Finance</p>
            <h1 className="mt-2 text-4xl font-bold">Transaction History</h1>
          </div>
          <Link href="/dashboard" className="rounded-xl border border-white/20 px-4 py-2 text-sm hover:bg-white/10">
            Back
          </Link>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="space-y-3">
            {transactions.map((txn, idx) => (
              <div key={idx} className="flex items-center justify-between rounded-2xl bg-slate-900 p-4">
                <div>
                  <p className="font-bold">{txn.type}</p>
                  <p className="text-sm text-slate-400">{txn.date}</p>
                </div>
                <span className={`text-lg font-bold ${txn.amount.includes('+') ? 'text-emerald-400' : 'text-red-400'}`}>
                  {txn.amount}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
