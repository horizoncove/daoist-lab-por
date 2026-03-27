'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Wind, Shield, Zap } from 'lucide-react';

const RITUALS = [
  {
    id: 'abundance',
    name: 'Celestial Treasury Alignment',
    nameCn: '天官赐福 · 补财库',
    temple: 'Wudang Mountain (武当山)',
    description: 'Ancient Daoist ritual to align your spiritual frequency with the vibration of abundance.',
    price: '$888',
    color: '#D4AF37',
    icon: Star
  },
  {
    id: 'harmony',
    name: 'Five Elements Harmonization',
    nameCn: '五行转运 · 调和',
    temple: 'Longhu Mountain (龙虎山天师府)',
    description: 'Restore balance to your internal elements and remove spiritual blockages.',
    price: '$666',
    color: '#E30B5C',
    icon: Wind
  },
  {
    id: 'protection',
    name: 'Thunder-Struck Wood Shield',
    nameCn: '雷击木 · 辟邪护身',
    temple: 'Maoshan Temple (茅山)',
    description: 'Special consecration for personal protection and spiritual warding.',
    price: '$1288',
    color: '#121212',
    icon: Shield
  }
];

export default function RitualsPage() {
  return (
    <main className="min-h-screen bg-[#121212] text-[#F8F4E3] p-8 md:p-20 font-sans">
      <nav className="mb-20">
        <Link href="/" className="text-[10px] uppercase tracking-[0.3em] text-[#757575] hover:text-[#D4AF37]">
          ← Return to Void
        </Link>
      </nav>

      <section className="max-w-6xl mx-auto space-y-20">
        <header className="space-y-4">
          <h2 className="text-[#D4AF37] text-xs uppercase tracking-[0.5em] font-light">The Sacred Inventory</h2>
          <h1 className="text-4xl md:text-6xl font-serif">Select Your Ritual</h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {RITUALS.map((ritual) => (
            <motion.div
              key={ritual.id}
              whileHover={{ y: -10 }}
              className="bg-white/5 border border-white/10 p-10 rounded-2xl space-y-8 flex flex-col justify-between hover:border-[#D4AF37]/30 transition-all group"
            >
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                    <ritual.icon size={20} color={ritual.color} />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-[#757575] font-mono">{ritual.price}</span>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-serif">{ritual.name}</h3>
                  <p className="text-xs text-[#D4AF37] tracking-widest uppercase">{ritual.nameCn}</p>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <p className="text-[10px] text-[#757575] uppercase tracking-widest mb-2 font-mono">Location</p>
                  <p className="text-xs font-light">{ritual.temple}</p>
                </div>

                <p className="text-xs text-[#757575] leading-relaxed font-light">
                  {ritual.description}
                </p>
              </div>

              <motion.button
                whileTap={{ scale: 0.95 }}
                className="w-full py-4 rounded-full border border-white/10 text-[10px] uppercase tracking-[0.2em] hover:bg-white/5 hover:border-[#D4AF37] transition-all flex items-center justify-center gap-2"
              >
                Request Alignment <ArrowRight size={12} />
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Verification Footer */}
        <footer className="pt-20 border-t border-white/5 text-center space-y-6">
          <p className="text-[10px] text-[#757575] uppercase tracking-[0.3em]">Already have an active order?</p>
          <Link href="/verify/ORDER-001" className="inline-flex items-center gap-4 group">
            <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center group-hover:bg-[#D4AF37]/20 transition-all">
              <Zap size={14} color="#D4AF37" />
            </div>
            <span className="text-xs tracking-widest text-[#D4AF37] border-b border-[#D4AF37]/30 pb-1">Check PoR Status</span>
          </Link>
        </footer>
      </section>
    </main>
  );
}
