'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { ShieldCheck, MapPin, Play, ExternalLink, Activity } from 'lucide-react';

// 页面色彩配置: 玄墨黑(#121212), 宣纸白(#F8F4E3), 朱砂红(#E30B5C), 哑光金(#D4AF37)
const COLORS = {
  ink: '#121212',
  white: '#F8F4E3',
  cinnabar: '#E30B5C',
  gold: '#D4AF37',
  stone: '#757575',
};

export default function VerificationPage() {
  const { orderId } = useParams();
  const [record, setRecord] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecord = async () => {
      try {
        // 实际应用中应调用后端接口查询数据库记录
        // 这里暂时模拟一个
        setTimeout(() => {
          setRecord({
            orderId: orderId,
            spiritualName: "Jiang Qing Lin (江清林)",
            templeName: "Wudang Mountain - Tai Chi Temple (武当山太极宫)",
            currentLat: 32.4042,
            currentLon: 111.0042,
            videoHash: "QmW2WQi7j6c...",
            txHash: "0x7a8b9c1d2e3f4g5h6i7j8k9l0m1n2o3p",
            createdAt: new Date().toISOString()
          });
          setLoading(false);
        }, 1500);
      } catch (error) {
        console.error("Fetch Error:", error);
      }
    };
    fetchRecord();
  }, [orderId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#121212]">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 border-t-2 border-[#D4AF37] rounded-full"
        />
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#121212] text-[#F8F4E3] p-6 md:p-12 selection:bg-[#E30B5C]/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto space-y-12"
      >
        {/* Header - Spiritual Name */}
        <section className="text-center space-y-4">
          <h2 className="text-[#D4AF37] text-sm uppercase tracking-widest font-light">Spiritual Alignment Profile</h2>
          <h1 className="text-4xl md:text-5xl font-serif tracking-tight leading-tight">
            {record.spiritualName}
          </h1>
        </section>

        {/* The Soul Lantern - Central Visual */}
        <div className="relative flex justify-center py-8">
          {/* Inner Glow */}
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.6, 0.9, 0.6] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute w-48 h-48 rounded-full blur-3xl"
            style={{ backgroundColor: COLORS.gold, opacity: 0.2 }}
          />
          {/* Main Artifact Circle */}
          <motion.div
            initial={{ scale: 0.8, rotate: -15 }}
            animate={{ scale: 1, rotate: 0 }}
            className="relative z-10 w-64 h-64 rounded-full border border-[#D4AF37]/30 flex flex-col items-center justify-center bg-[#121212] shadow-2xl shadow-gold/10"
          >
            <ShieldCheck size={48} color={COLORS.gold} />
            <p className="mt-4 text-[#D4AF37] font-serif tracking-widest text-xs">ALIGNMENT SECURED</p>
            <div className="mt-2 text-[10px] text-[#757575] uppercase font-mono tracking-tighter">
              Verified by Dao & Code
            </div>
          </motion.div>
        </div>

        {/* Proof Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Map Section */}
          <section className="bg-white/5 p-6 rounded-lg border border-white/10 space-y-4 hover:border-[#D4AF37]/50 transition-colors">
            <div className="flex items-center gap-3 text-[#D4AF37]">
              <MapPin size={18} />
              <h3 className="text-sm font-serif">Sacred Geography</h3>
            </div>
            <p className="text-xs text-[#757575] leading-relaxed">
              Located within the verified radius of <b>{record.templeName}</b>.
            </p>
            <div className="aspect-video bg-black/40 rounded flex items-center justify-center overflow-hidden grayscale hover:grayscale-0 transition-all">
              <span className="text-[10px] text-[#757575] uppercase tracking-widest">
                Lat: {record.currentLat} / Lon: {record.currentLon}
              </span>
            </div>
          </section>

          {/* Video Section */}
          <section className="bg-white/5 p-6 rounded-lg border border-white/10 space-y-4 hover:border-[#E30B5C]/50 transition-colors">
            <div className="flex items-center gap-3 text-[#E30B5C]">
              <Play size={18} />
              <h3 className="text-sm font-serif">Ritual Cinema</h3>
            </div>
            <p className="text-xs text-[#757575] leading-relaxed">
              Proprietary frequency recorded at the time of consecration.
            </p>
            <div className="aspect-video bg-black/40 rounded flex items-center justify-center group cursor-pointer border border-dashed border-white/10">
              <div className="w-10 h-10 rounded-full bg-[#E30B5C]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play size={16} color={COLORS.cinnabar} fill={COLORS.cinnabar} />
              </div>
            </div>
          </section>
        </div>

        {/* Blockchain Card */}
        <section className="p-8 bg-[#D4AF37]/5 border border-[#D4AF37]/20 rounded-lg text-center space-y-6">
          <div className="flex justify-center">
            <Activity size={24} color={COLORS.gold} />
          </div>
          <div>
            <h3 className="text-sm font-serif tracking-widest text-[#D4AF37] mb-2">Immutable Proof of Soul</h3>
            <p className="text-[10px] text-[#757575] font-mono break-all px-4">
              TX Hash: {record.txHash}
            </p>
          </div>
          <button className="text-[10px] uppercase tracking-widest text-[#D4AF37] border-b border-[#D4AF37]/30 pb-1 hover:text-white transition-colors inline-flex items-center gap-2">
            View on Solana Explorer <ExternalLink size={10} />
          </button>
        </section>

        {/* Footer */}
        <footer className="text-center pt-8 border-t border-white/5">
          <p className="text-[10px] text-[#757575] uppercase tracking-[0.3em]">The Daoist Lab &copy; 2026</p>
        </footer>
      </motion.div>
    </main>
  );
}
