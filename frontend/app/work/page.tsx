'use client';

import { useState } from 'react';
import Link from 'next/link';

const workJobs = [
  { title: 'Digital Agency Job', pay: '₦75,000', time: '4 hours', location: 'Victoria Island' },
  { title: 'Freelance Design', pay: '₦45,000', time: '3 hours', location: 'Yaba' },
  { title: 'Retail Staff', pay: '₦25,000', time: '8 hours', location: 'Lekki' },
  { title: 'Delivery Driver', pay: '₦35,000', time: '6 hours', location: 'Anywhere' },
];

export default function WorkPage() {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Income</p>
            <h1 className="mt-2 text-4xl font-bold">Find Work</h1>
          </div>
          <Link href="/game" className="rounded-xl border border-white/20 px-4 py-2 text-sm hover:bg-white/10">
            Back
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            {workJobs.map((job, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedJob(idx)}
                className={`w-full rounded-2xl border-2 p-5 text-left transition ${
                  selectedJob === idx
                    ? 'border-cyan-500 bg-cyan-500/20'
                    : 'border-white/10 bg-white/5 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xl font-bold">{job.title}</p>
                    <p className="mt-1 text-sm text-slate-300">{job.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-emerald-400">{job.pay}</p>
                    <p className="text-xs text-slate-400">{job.time}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-bold">Job Details</h2>
            {selectedJob !== null ? (
              <div className="mt-6 space-y-4">
                <div>
                  <p className="text-sm text-slate-400">Position</p>
                  <p className="mt-1 text-xl font-bold">{workJobs[selectedJob].title}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-400">Payment</p>
                  <p className="mt-1 text-2xl font-bold text-emerald-400">{workJobs[selectedJob].pay}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-400">Duration</p>
                  <p className="mt-1 text-lg">{workJobs[selectedJob].time}</p>
                </div>
                <button className="mt-8 w-full rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 py-3 font-bold">
                  Start Work
                </button>
              </div>
            ) : (
              <p className="mt-6 text-slate-400">Select a job to see details</p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
