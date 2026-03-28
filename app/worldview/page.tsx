'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Shield, Network, Zap, Cpu, Hash, Globe, Database, Smartphone, UserCheck, ChevronDown } from 'lucide-react';

const CHAPTERS = [
  {
    id: '01',
    title: '第一章：天道的底层逻辑',
    subtitle: 'THE ULTIMATE PROTOCOL',
    content: '宇宙运转依靠一条永恒的协议。它不在经文里，不在庙堂上，在万物运行的规律里。道是一套规则，是宇宙这台计算机的操作系统。输入必然产生输出。',
    icon: Network,
    hash: '0xDE1...A90'
  },
  {
    id: '02',
    title: '第二章：灵境节点：道观',
    subtitle: 'SACRED API GATEWAY',
    content: '道观是信号发射塔。位置选择 = 能量汇聚点；建筑设计 = 天线结构；法事科仪 = 标准化的数据传输协议。灵境的使命是将这些封闭系统变为透明可证的全球网络。',
    icon: Globe,
    hash: '0x8B2...F11'
  },
  {
    id: '03',
    title: '第三章：法器：物理签名设备',
    subtitle: 'HARDWARE SIGNATURE',
    content: '法器不是工具，是物理世界的签名设备。雷击木令牌、桃木剑，对应着道观的子域名。当你手持法器参加法事，你在用自己的物理存在对一段灵性数据进行签名。',
    icon: Smartphone,
    hash: '0x4C5...D32'
  },
  {
    id: '04',
    title: '第四章：科仪：标准传输协议',
    subtitle: 'ENCODED INCANTATIONS',
    content: '法事不是表演，是精确的代码指令集。从焚香打开信道，到敕令完成封印，每一阶段都是一次完整的灵性交互传输。灵境制定全网通用的灵性交互协议。',
    icon: Cpu,
    hash: '0xE9A...C77'
  },
  {
    id: '05',
    title: '第五章：道长：认证节点运营者',
    subtitle: 'NODE OPERATORS',
    content: '道长是天道网络的节点运营者。他们的法名是公钥地址。当你参加法事，你的心愿被道长的公钥加密，通过法器签名写入区块链，全网广播，永久存证。',
    icon: UserCheck,
    hash: '0x1F2...E88'
  },
  {
    id: '06',
    title: '第六章：气运：链上记录的回执',
    subtitle: 'IMMUTABLE RECEIPT',
    content: '气运是天道网络的回执包。它包含了响应的时间戳和能量级别。气运不是玄学，是一个可以被节点见证但不能被篡改的信用记录，绑定在你唯一的灵性哈希地址下。',
    icon: Database,
    hash: '0x99D...B44'
  },
  {
    id: '07',
    title: '第七章：万神见证的技术实现',
    subtitle: 'GLOBAL CONSENSUS',
    content: '当所有道观接入灵境，每一次法事都是一次全网广播。不再是一个道观在通信，而是整个网络在同步。这就是“万神见证”在数字时代的逻辑实现。',
    icon: Zap,
    hash: '0x33A...F00'
  },
  {
    id: '08',
    title: '第八章：法名：灵魂加密地址',
    subtitle: 'SOUL ADDRESS',
    content: '法名是你在天道网络里的公钥地址。你所有的祈福、法事参与、气运变动都会记录在此地址下。匿名但透明，这就是灵性资产的区块链核心精神。',
    icon: Hash,
    hash: '0xA12...C55'
  },
  {
    id: '09',
    title: '最终章：天道操作系统，完成了',
    subtitle: 'OS COMPLETE',
    content: '天道从未改变。改变的是：我们向天道发送数据的方式。从纸质疏文进化到区块链存证，灵境让天道网络的接口，终于配得上这个时代。',
    icon: Shield,
    hash: '0x000...FFF'
  }
];

export default function WorldviewPage() {
  return (
    <main className="min-h-screen bg-[#121212] text-[#F8F4E3] font-serif selection:bg-[#E30B5C]/30 selection:text-white">
      {/* Immersive Background Particles */}
      <div className="fixed inset-0 pointer-events-none opacity-30">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
      </div>

      {/* Vertical Protocol Thread */}
      <div className="fixed left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#D4AF37]/20 to-transparent -translate-x-1/2 hidden md:block z-0" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-8 flex justify-between items-center bg-gradient-to-b from-[#121212] to-transparent">
        <Link href="/" className="text-[10px] uppercase tracking-[0.4em] text-[#757575] hover:text-[#D4AF37] transition-all">
          ← Return to Void
        </Link>
        <div className="text-[10px] uppercase tracking-[0.4em] text-[#D4AF37] font-mono">
          Protocol: v1.0.Alpha
        </div>
      </nav>

      {/* Hero Header */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
          className="space-y-8"
        >
          <div className="w-16 h-16 border border-[#D4AF37] rotate-45 mx-auto flex items-center justify-center mb-12">
            <div className="w-4 h-4 bg-[#E30B5C] rounded-full blur-[2px] animate-pulse" />
          </div>
          <h2 className="text-[#D4AF37] text-xs uppercase tracking-[0.6em] font-light">The Manifesto</h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tighter leading-tight">
            从天道到哈希
          </h1>
          <p className="text-[#757575] text-[10px] uppercase tracking-[0.5em] mt-4">
            A 3,000-Year Information Revolution
          </p>
        </motion.div>
        
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[#D4AF37]/40"
        >
          <ChevronDown size={24} />
        </motion.div>
      </section>

      {/* Narrative Chapters */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pb-40">
        <div className="space-y-64">
          {CHAPTERS.map((chapter, index) => (
            <motion.div 
              key={chapter.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24`}
            >
              {/* Content Side */}
              <div className={`flex-1 space-y-8 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                <div className="space-y-2">
                  <div className="flex items-center gap-4 text-[#757575] font-mono text-[9px] uppercase tracking-widest justify-start md:justify-start">
                    <span className="text-[#D4AF37]">CHAPTER_{chapter.id}</span>
                    <span className="opacity-30">/</span>
                    <span>{chapter.hash}</span>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-serif text-white tracking-tight">{chapter.title}</h3>
                  <p className="text-[#D4AF37] text-[10px] uppercase tracking-[0.4em] font-light italic">{chapter.subtitle}</p>
                </div>
                
                <p className="text-sm md:text-base text-[#757575] leading-loose font-light tracking-wide max-w-lg mx-auto md:mx-0">
                  {chapter.content}
                </p>
              </div>

              {/* Icon / Visual Side */}
              <div className="flex-shrink-0 relative">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-32 h-32 md:w-48 md:h-48 border border-[#D4AF37]/10 rounded-full flex items-center justify-center bg-[#121212] shadow-2xl shadow-gold/5 group relative z-10"
                >
                  <chapter.icon size={48} className="text-[#D4AF37] group-hover:text-white transition-colors" strokeWidth={1} />
                  
                  {/* Outer Orbit Decoration */}
                  <div className="absolute inset-0 border border-dashed border-[#D4AF37]/20 rounded-full animate-spin-slow" style={{ animationDuration: '20s' }} />
                </motion.div>
                
                {/* Connection to Axis */}
                <div className={`hidden md:block absolute top-1/2 w-32 h-px bg-gradient-to-r ${index % 2 === 0 ? 'from-[#D4AF37]/20 to-transparent left-full' : 'from-transparent to-[#D4AF37]/20 right-full'} -translate-y-1/2`} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* The Final Seal */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center bg-gradient-to-t from-[#D4AF37]/5 to-transparent">
        <div className="space-y-12">
          <div className="w-1 h-32 bg-gradient-to-b from-transparent via-[#D4AF37]/30 to-transparent mx-auto" />
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-serif">天道操作系统，已就绪</h2>
            <p className="text-[10px] uppercase tracking-[0.5em] text-[#D4AF37]">LINGJING | SPIRIT REALM PROTOCOL</p>
          </div>
          <Link href="/rituals">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#D4AF37] text-[#121212] px-12 py-5 rounded-full text-[10px] uppercase tracking-[0.3em] font-medium"
            >
              Enter The Portal 进入灵境
            </motion.button>
          </Link>
        </div>
      </section>

      {/* Global Style Inject for slow spin */}
      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </main>
  );
}
