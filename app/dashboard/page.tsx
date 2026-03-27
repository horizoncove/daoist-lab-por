'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShieldCheck, Compass, Sparkles, User, ExternalLink, Calendar, MapPin, Activity } from 'lucide-react';

const ORDERS = [
  {
    id: 'ORDER-001',
    ritualName: 'Celestial Treasury Alignment',
    spiritualName: 'Jiang Qing Lin (江清林)',
    status: 'Completed',
    temple: 'Wudang Mountain',
    date: 'Mar 15, 2026',
    txHash: '0x7a8b9c1d2e3f4g5h6i7j8k9l0m1n2o3p',
    progress: 100
  },
  {
    id: 'ORDER-002',
    ritualName: 'Five Elements Harmonization',
    spiritualName: 'Mu Xi (沐曦)',
    status: 'In Progress',
    temple: 'Longhu Mountain',
    date: 'Pending',
    txHash: null,
    progress: 45
  }
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#121212] text-[#F8F4E3] p-6 md:p-12 font-sans selection:bg-[#E30B5C]/30">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-12 border-b border-white/5">
          <div className="space-y-2">
            <h2 className="text-[#D4AF37] text-xs uppercase tracking-[0.5em] font-light">Daoist Lab / Portal</h2>
            <h1 className="text-4xl font-serif">My Altar / 个人祭坛</h1>
          </div>
          <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
            <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 flex items-center justify-center">
              <User size={18} color="#D4AF37" />
            </div>
            <div>
              <p className="text-[10px] text-[#757575] uppercase tracking-widest">Logged in as</p>
              <p className="text-xs font-mono">HorizonCove.eth</p>
            </div>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10 space-y-4">
            <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
              <Sparkles size={18} color="#D4AF37" />
            </div>
            <h3 className="text-[10px] uppercase tracking-widest text-[#757575]">Active Blessings</h3>
            <p className="text-3xl font-serif">2</p>
          </div>
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10 space-y-4">
            <div className="w-10 h-10 rounded-full bg-blue/10 flex items-center justify-center">
              <Compass size={18} color="#3B82F6" />
            </div>
            <h3 className="text-[10px] uppercase tracking-widest text-[#757575]">Verified Rituals</h3>
            <p className="text-3xl font-serif">1</p>
          </div>
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10 space-y-4">
            <div className="w-10 h-10 rounded-full bg-red/10 flex items-center justify-center">
              <ShieldCheck size={18} color="#E30B5C" />
            </div>
            <h3 className="text-[10px] uppercase tracking-widest text-[#757575]">Talisman Auth</h3>
            <p className="text-3xl font-serif">100% Secure</p>
          </div>
        </div>

        {/* Orders Table */}
        <div className="space-y-6">
          <h3 className="text-xl font-serif">Sacred Orders / 加持记录</h3>
          <div className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="bg-white/5 text-[#757575] uppercase tracking-widest">
                    <th className="px-8 py-6 font-medium">Ritual</th>
                    <th className="px-8 py-6 font-medium">Spiritual Name</th>
                    <th className="px-8 py-6 font-medium">Status / Progress</th>
                    <th className="px-8 py-6 font-medium">Location</th>
                    <th className="px-8 py-6 font-medium">PoR Proof</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {ORDERS.map((order) => (
                    <tr key={order.id} className="hover:bg-white/5 transition-colors">
                      <td className="px-8 py-8">
                        <p className="font-serif text-sm">{order.ritualName}</p>
                        <p className="text-[10px] text-[#757575] mt-1">{order.id}</p>
                      </td>
                      <td className="px-8 py-8">
                        <span className="bg-[#D4AF37]/10 text-[#D4AF37] px-3 py-1 rounded-full text-[10px] tracking-widest">
                          {order.spiritualName}
                        </span>
                      </td>
                      <td className="px-8 py-8 space-y-3">
                        <div className="flex justify-between items-center mb-1">
                          <span className={order.status === 'Completed' ? 'text-green-500' : 'text-[#D4AF37] animate-pulse'}>
                            {order.status}
                          </span>
                          <span className="text-[10px] text-[#757575]">{order.progress}%</span>
                        </div>
                        <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${order.progress}%` }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="h-full bg-[#D4AF37]" 
                          />
                        </div>
                      </td>
                      <td className="px-8 py-8">
                        <div className="flex items-center gap-2 text-[#757575]">
                          <MapPin size={12} />
                          <span>{order.temple}</span>
                        </div>
                        <div className="flex items-center gap-2 text-[#757575] mt-2">
                          <Calendar size={12} />
                          <span>{order.date}</span>
                        </div>
                      </td>
                      <td className="px-8 py-8">
                        {order.status === 'Completed' ? (
                          <Link href={`/verify/${order.id}`}>
                            <button className="flex items-center gap-2 text-[#D4AF37] hover:text-white transition-colors group">
                              <ShieldCheck size={14} />
                              <span className="border-b border-[#D4AF37]/30 pb-0.5">View Proof</span>
                              <ExternalLink size={10} className="group-hover:translate-x-0.5 transition-transform" />
                            </button>
                          </Link>
                        ) : (
                          <div className="flex items-center gap-2 text-[#757575] italic">
                            <Activity size={14} className="animate-pulse" />
                            <span>Aligning...</span>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Dashboard Actions */}
        <div className="flex flex-col md:flex-row gap-6">
          <Link href="/nfc" className="flex-1">
            <div className="bg-[#D4AF37]/5 border border-[#D4AF37]/20 p-8 rounded-2xl flex items-center justify-between hover:bg-[#D4AF37]/10 transition-colors group">
              <div className="space-y-2">
                <h4 className="text-sm font-serif">Authenticate New Talisman</h4>
                <p className="text-[10px] text-[#757575] uppercase tracking-widest">Connect physical Lei Ji Mu via NFC</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Activity size={18} color="#D4AF37" />
              </div>
            </div>
          </Link>
          <Link href="/rituals" className="flex-1">
            <div className="bg-[#E30B5C]/5 border border-[#E30B5C]/20 p-8 rounded-2xl flex items-center justify-between hover:bg-[#E30B5C]/10 transition-colors group">
              <div className="space-y-2">
                <h4 className="text-sm font-serif">Request New Alignment</h4>
                <p className="text-[10px] text-[#757575] uppercase tracking-widest">Commission a master ritual</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#E30B5C]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Sparkles size={18} color="#E30B5C" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
