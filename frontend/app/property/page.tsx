'use client';

import { useState } from 'react';
import Link from 'next/link';

const properties = [
  { name: 'Lekki Studio', price: '₦2,500,000', income: '₦150,000/month', type: 'Residential' },
  { name: 'Victoria Island Shop', price: '₦5,000,000', income: '₦350,000/month', type: 'Commercial' },
  { name: 'Yaba Mini Mart', price: '₦1,800,000', income: '₦120,000/month', type: 'Business' },
  { name: 'Ikoyi Penthouse', price: '₦25,000,000', income: '₦1,200,000/month', type: 'Luxury' },
  { name: 'Ajah Land', price: '₦3,500,000', income: '₦200,000/month', type: 'Investment' },
  { name: 'Surulere Office', price: '₦4,200,000', income: '₦280,000/month', type: 'Commercial' },
];

export default function PropertyPage() {
  const [selectedProperty, setSelectedProperty] = useState<number | null>(null);
  const [ownedProperties] = useState<number[]>([0, 2]);

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Real Estate</p>
            <h1 className="mt-2 text-4xl font-bold">Property Market</h1>
          </div>
          <Link href="/dashboard" className="rounded-xl border border-white/20 px-4 py-2 text-sm hover:bg-white/10">
            Back
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-4">
            {properties.map((prop, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedProperty(idx)}
                disabled={ownedProperties.includes(idx)}
                className={`w-full rounded-2xl border-2 p-5 text-left transition ${
                  ownedProperties.includes(idx)
                    ? 'border-emerald-500/50 bg-emerald-500/10 opacity-75 cursor-not-allowed'
                    : selectedProperty === idx
                    ? 'border-amber-500 bg-amber-500/20'
                    : 'border-white/10 bg-white/5 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xl font-bold">{prop.name}</p>
                    <p className="mt-1 text-sm text-slate-300">{prop.type}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-amber-300">{prop.price}</p>
                    <p className="text-xs text-slate-400">Income: {prop.income}</p>
                    {ownedProperties.includes(idx) && <p className="mt-1 text-xs text-emerald-300">✓ Owned</p>}
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 h-fit">
            <h2 className="text-2xl font-bold">Property Details</h2>
            {selectedProperty !== null ? (
              <div className="mt-6 space-y-4">
                <div>
                  <p className="text-sm text-slate-400">Property</p>
                  <p className="mt-1 text-xl font-bold">{properties[selectedProperty].name}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-400">Purchase Price</p>
                  <p className="mt-1 text-2xl font-bold text-amber-300">{properties[selectedProperty].price}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-400">Monthly Income</p>
                  <p className="mt-1 text-lg font-bold text-emerald-300">{properties[selectedProperty].income}</p>
                </div>
                <button className="mt-8 w-full rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 py-3 font-bold disabled:opacity-50">
                  {ownedProperties.includes(selectedProperty) ? 'Already Owned' : 'Buy Property'}
                </button>
              </div>
            ) : (
              <p className="mt-6 text-slate-400">Select a property to view details</p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
