'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { getSpiritualName } from '@/utils/naming';
import { Sparkles, ArrowRight, Calendar } from 'lucide-react';

export default function NamingPage() {
  const [month, setMonth] = useState(1);
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = () => {
    setLoading(true);
    setTimeout(() => {
      const name = getSpiritualName(month);
      setResult(name);
      setLoading(false);
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-[#121212] text-[#F8F4E3] p-8 md:p-20 font-sans flex flex-col items-center">
      <div className="max-w-xl w-full space-y-12">
        <nav>
          <Link href="/rituals" className="text-[10px] uppercase tracking-[0.3em] text-[#757575] hover:text-[#D4AF37]">
            ← Back to Rituals
          </Link>
        </nav>

        <header className="text-center space-y-4">
          <h2 className="text-[#D4AF37] text-xs uppercase tracking-[0.5em] font-light">Identity Alignment</h2>
          <h1 className="text-4xl font-serif">Receive Your Spiritual Name</h1>
          <p className="text-xs text-[#757575] leading-relaxed">
            Your Western identity is a vessel. We provide the essence to fill it, 
            calculated by the alignment of the stars at your birth.
          </p>
        </header>

        <section className="bg-white/5 p-8 rounded-2xl border border-white/10 space-y-8">
          <div className="space-y-4">
            <label className="text-[10px] uppercase tracking-widest text-[#757575] flex items-center gap-2">
              <Calendar size={12} /> Month of Birth
            </label>
            <select 
              value={month}
              onChange={(e) => setMonth(parseInt(e.target.value))}
              className="w-full bg-black/40 border border-white/10 rounded-lg p-4 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
            >
              {Array.from({ length: 12 }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {new Date(2000, i).toLocaleString('default', { month: 'long' })}
                </option>
              ))}
            </select>
          </div>

          <button 
            onClick={handleGenerate}
            disabled={loading}
            className="w-full bg-[#D4AF37] text-[#121212] py-4 rounded-full text-xs uppercase tracking-[0.2em] font-medium flex items-center justify-center gap-2"
          >
            {loading ? 'Aligning Frequencies...' : 'Calculate Alignment'}
          </button>
        </section>

        <AnimatePresence>
          {result && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#D4AF37]/10 p-10 rounded-2xl border border-[#D4AF37]/30 text-center space-y-6"
            >
              <Sparkles size={24} color="#D4AF37" className="mx-auto" />
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[#D4AF37] mb-2">Your Spiritual Essence</p>
                <h3 className="text-4xl font-serif text-white">{result.name}</h3>
              </div>
              <p className="text-xs text-[#757575] leading-relaxed px-4">
                {result.meaning}
              </p>
              <div className="pt-4">
                <Link href="/rituals">
                  <button className="text-[10px] uppercase tracking-widest text-[#D4AF37] border-b border-[#D4AF37]/30 pb-1 hover:text-white transition-colors">
                    Proceed to Consecration <ArrowRight size={10} className="inline ml-1" />
                  </button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
