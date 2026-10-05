'use client';

import { useGameStore } from '@/lib/store';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function OnboardingPage() {
  const { character, setRoute } = useGameStore();
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!character) {
      // Redirect to create character if no character exists
      window.location.href = '/create-character';
    }
  }, [character]);

  if (!character) return null;

  const steps = [
    {
      title: 'Welcome to Lagos Life Sim',
      description: `Welcome ${character.name}! You've chosen the ${character.path} path.`,
      action: 'Next',
    },
    {
      title: 'Starting Your Journey',
      description:
        'You start with zero money. Top up real money to get game cash at 1:1000 ratio (1k Naira = 1M Game Cash).',
      action: 'Learn More',
    },
    {
      title: 'Your First Task',
      description: 'Visit the Top Up page to add funds and start building your empire!',
      action: 'Go to Top Up',
    },
  ];

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      setRoute('/dashboard');
      window.location.href = '/dashboard';
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 px-6 py-12 text-white">
      <div className="mx-auto max-w-2xl">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 shadow-2xl backdrop-blur-xl">
          <div className="mb-8 text-center">
            <h1 className="text-5xl font-black">{steps[step].title}</h1>
            <p className="mt-6 text-xl text-slate-300">{steps[step].description}</p>
          </div>

          {/* Character Preview */}
          <div className="mb-8 rounded-2xl bg-slate-900 p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-3xl font-bold">
                {character.name.charAt(0).toUpperCase()}
              </div>
              <div>
                <p className="text-2xl font-bold">{character.name}</p>
                <p className="text-slate-300">
                  Level {character.stats.level} • {character.path}
                </p>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="mb-2 flex justify-between text-sm text-slate-400">
              <span>Progress</span>
              <span>
                {step + 1} of {steps.length}
              </span>
            </div>
            <div className="h-2 rounded-full bg-slate-700">
              <div
                className="h-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all"
                style={{ width: `${((step + 1) / steps.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4">
            {step > 0 && (
              <button
                onClick={() => setStep(step - 1)}
                className="flex-1 rounded-xl border border-white/20 px-6 py-3 font-semibold transition hover:bg-white/10"
              >
                Back
              </button>
            )}
            <button
              onClick={handleNext}
              className="flex-1 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-3 font-semibold transition hover:scale-105"
            >
              {step === steps.length - 1 ? 'Start Game' : steps[step].action}
            </button>
          </div>

          {step === 2 && (
            <div className="mt-6">
              <Link
                href="/topup"
                className="block rounded-xl border border-emerald-500/50 bg-emerald-500/10 px-6 py-3 text-center font-semibold text-emerald-200 transition hover:bg-emerald-500/20"
              >
                💳 Go to Top Up Now
              </Link>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
