'use client';

import { useState } from 'react';
import Link from 'next/link';

const courses = [
  { name: 'Business 101', cost: '₦50,000', duration: '30 days', level: 'Beginner' },
  { name: 'Advanced Trading', cost: '₦150,000', duration: '60 days', level: 'Intermediate' },
  { name: 'Tech Bootcamp', cost: '₦200,000', duration: '90 days', level: 'Advanced' },
  { name: 'Creative Writing', cost: '₦75,000', duration: '45 days', level: 'Beginner' },
];

export default function StudyPage() {
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Education</p>
            <h1 className="mt-2 text-4xl font-bold">Learn & Grow</h1>
          </div>
          <Link href="/game" className="rounded-xl border border-white/20 px-4 py-2 text-sm hover:bg-white/10">
            Back
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            {courses.map((course, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCourse(idx)}
                className={`w-full rounded-2xl border-2 p-5 text-left transition ${
                  selectedCourse === idx
                    ? 'border-violet-500 bg-violet-500/20'
                    : 'border-white/10 bg-white/5 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xl font-bold">{course.name}</p>
                    <p className="mt-1 text-sm text-slate-300">{course.level}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-violet-300">{course.cost}</p>
                    <p className="text-xs text-slate-400">{course.duration}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-bold">Course Overview</h2>
            {selectedCourse !== null ? (
              <div className="mt-6 space-y-4">
                <div>
                  <p className="text-sm text-slate-400">Course</p>
                  <p className="mt-1 text-xl font-bold">{courses[selectedCourse].name}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-400">Tuition Fee</p>
                  <p className="mt-1 text-2xl font-bold text-violet-300">{courses[selectedCourse].cost}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-400">Duration</p>
                  <p className="mt-1 text-lg">{courses[selectedCourse].duration}</p>
                </div>
                <button className="mt-8 w-full rounded-xl bg-gradient-to-r from-violet-500 to-pink-500 py-3 font-bold">
                  Enroll Now
                </button>
              </div>
            ) : (
              <p className="mt-6 text-slate-400">Select a course to learn more</p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
