'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShieldCheck, Compass, Sparkles, ArrowRight } from 'lucide-react';

const COLORS = {
  ink: '#121212',
  white: '#F8F4E3',
  cinnabar: '#E30B5C',
  gold: '#D4AF37',
};

export default function DaoistHomePage() {
  return (
    <main className="min-h-screen bg-[#121212] text-[#F8F4E3] overflow-hidden font-sans">
      {/* Background Zen Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full md:w-[800px] h-[600px] bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Navigation */}
      <nav className="relative z-50 flex justify-between items-center px-8 py-10 md:px-20 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4"
        >
          <div className="w-8 h-8 border border-[#D4AF37] rotate-45 flex items-center justify-center">
            <div className="w-4 h-4 bg-[#E30B5C] rounded-full blur-[2px]" />
          </div>
          <span className="text-xl tracking-[0.3em] font-light">LINGJING | 灵境</span>
        </motion.div>
        
        <div className="hidden md:flex gap-12 text-[10px] uppercase tracking-[0.2em] font-light text-[#757575]">
          <Link href="/worldview" className="hover:text-[#D4AF37] transition-colors">Manifesto</Link>
          <Link href="/rituals" className="hover:text-[#D4AF37] transition-colors">Portal</Link>
          <Link href="/talismans" className="hover:text-[#D4AF37] transition-colors">Manifest</Link>
          <Link href="/verify/ORDER-001" className="text-[#D4AF37]">Verify PoR</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center pt-32 pb-48 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="space-y-8 max-w-4xl"
        >
          <h2 className="text-[#D4AF37] text-xs uppercase tracking-[0.5em] font-light mb-4">
            Where Spirit Meets Code
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.1] font-serif">
            LINGJING <br /> 
            <span className="italic font-light opacity-80 text-[#D4AF37]">The Spirit Realm</span>
          </h1>
          
          <p className="max-w-xl mx-auto text-[#757575] text-sm md:text-base leading-relaxed font-light tracking-wide py-8">
            LINGJING | 灵境 是一个将千年道家仪式与 Web3 技术融合的现代灵性实验室。
            我们通过 PoR 系统与智能雷击木，为您提供可验证、不可篡改的远程祭祀与灵性加持。
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 pt-6">
            <Link href="/rituals">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#D4AF37] text-[#121212] px-10 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-medium flex items-center gap-3 group"
              >
                Enter The Altar 进入祭坛
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
            
            <Link href="/verify/ORDER-001">
              <motion.button
                whileHover={{ opacity: 0.8 }}
                className="border border-white/10 px-10 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-light flex items-center gap-3"
              >
                Verify Ritual 存证查询
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Core Loop / Value Chain */}
      <section className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-16 border-t border-white/5 py-32 opacity-80">
        <div className="space-y-6">
          <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
            <Compass size={18} color={COLORS.gold} />
          </div>
          <h3 className="text-lg font-serif">Remote Ritual</h3>
          <p className="text-xs text-[#757575] leading-loose font-light">
            由认证道长在武当山、龙虎山等祖庭通过地理围栏（Geofencing）技术完成祭祀。
          </p>
        </div>

        <div className="space-y-6">
          <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
            <Sparkles size={18} color={COLORS.cinnabar} />
          </div>
          <h3 className="text-lg font-serif">Smart Talismans</h3>
          <p className="text-xs text-[#757575] leading-loose font-light">
            通过 NTAG 424 DNA 芯片，将仪式能量与区块链数字证书永久绑定在实体雷击木中。
          </p>
        </div>

        <div className="space-y-6">
          <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
            <ShieldCheck size={18} color={COLORS.gold} />
          </div>
          <h3 className="text-lg font-serif">PoR System</h3>
          <p className="text-xs text-[#757575] leading-loose font-light">
            每一场仪式都拥有唯一的 GPS 坐标、时间戳和区块链哈希值，确保真实可信。
          </p>
        </div>
      </section>

      {/* Footer Decoration */}
      <footer className="py-20 text-center border-t border-white/5">
        <div className="text-[10px] text-[#757575] uppercase tracking-[0.5em] mb-4">LINGJING | 灵境 &copy; 2026</div>
        <div className="flex flex-wrap justify-center gap-8 opacity-40 grayscale px-6">
          <span className="text-[9px] uppercase tracking-widest font-mono">Wudang Sanfeng Academy</span>
          <span className="text-[9px] uppercase tracking-widest font-mono">NFC Secure Protocol</span>
          <span className="text-[9px] uppercase tracking-widest font-mono">Solana Network</span>
        </div>
      </footer>
    </main>
  );
}
