'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Smartphone, Wifi, Loader2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function NFCSimulator() {
  const [stage, setStage] = useState(0); // 0: Start, 1: Scanning, 2: Decrypting, 3: Verified
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (stage === 1) {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => setStage(2), 500);
            return 100;
          }
          return prev + 2;
        });
      }, 30);
      return () => clearInterval(interval);
    } else if (stage === 2) {
      setTimeout(() => setStage(3), 2000);
    }
  }, [stage]);

  const startScan = () => setStage(1);

  return (
    <main className="min-h-screen bg-[#121212] text-[#F8F4E3] p-8 md:p-20 font-sans flex flex-col items-center justify-center">
      <div className="max-w-md w-full space-y-12 text-center">
        <header className="space-y-4">
          <h2 className="text-[#D4AF37] text-xs uppercase tracking-[0.5em] font-light">NTAG 424 DNA Verification</h2>
          <h1 className="text-4xl font-serif">Smart Talisman Auth</h1>
          <p className="text-xs text-[#757575] leading-relaxed px-12">
            Bring your device close to the Thunder-Struck wood to decrypt the spiritual signature.
          </p>
        </header>

        <div className="relative h-80 flex items-center justify-center">
          {/* Phone Mockup */}
          <motion.div 
            animate={stage === 1 ? { y: [0, -20, 0] } : {}}
            transition={{ repeat: Infinity, duration: 2 }}
            className="z-20 w-32 h-64 border-2 border-white/20 rounded-[2.5rem] bg-[#121212] flex items-center justify-center relative overflow-hidden"
          >
            <div className="absolute top-4 w-12 h-4 bg-white/10 rounded-full" />
            <AnimatePresence mode="wait">
              {stage === 0 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <Smartphone size={32} color="#757575" />
                </motion.div>
              )}
              {stage === 1 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center">
                  <Wifi size={32} color="#D4AF37" className="animate-pulse" />
                  <p className="mt-4 text-[10px] text-[#D4AF37] font-mono">{progress}%</p>
                </motion.div>
              )}
              {stage === 2 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center">
                  <Loader2 size={32} color="#E30B5C" className="animate-spin" />
                  <p className="mt-4 text-[8px] text-[#E30B5C] font-mono text-center">AES-128 DECRYPTING...</p>
                </motion.div>
              )}
              {stage === 3 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center">
                  <ShieldCheck size={32} color="#D4AF37" />
                  <p className="mt-4 text-[10px] text-[#D4AF37] font-mono tracking-widest uppercase">Verified</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Wooden Token Mockup (Bottom) */}
          <div className="absolute bottom-0 z-10 w-48 h-32 bg-[#2a1b0a] rounded-xl border border-[#D4AF37]/30 shadow-2xl overflow-hidden opacity-80">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 border-2 border-[#D4AF37]/40 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-[#E30B5C]/20 rounded-full animate-ping" />
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8">
          {stage === 0 && (
            <button 
              onClick={startScan}
              className="w-full bg-[#D4AF37] text-[#121212] py-4 rounded-full text-xs uppercase tracking-[0.2em] font-medium"
            >
              Start Verification
            </button>
          )}
          {stage === 3 && (
            <Link href="/verify/ORDER-001">
              <motion.button 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="w-full bg-[#E30B5C] text-white py-4 rounded-full text-xs uppercase tracking-[0.2em] font-medium flex items-center justify-center gap-2"
              >
                Access Ritual Proof <ArrowRight size={14} />
              </motion.button>
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}
