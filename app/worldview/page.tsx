'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Shield, Network, Zap, Cpu, Hash, Globe, Database, Smartphone, UserCheck } from 'lucide-react';

const CHAPTERS = [
  {
    title: '第一章：天道的底层逻辑',
    content: '宇宙运转依靠一条永恒的协议。它不在经文里，不在庙堂上，在万物运行的规律里。道是一套规则，是宇宙这台计算机的操作系统。它只是：输入必然产生输出。',
    icon: Network
  },
  {
    title: '第二章：灵境节点：道观',
    content: '道观是信号发射塔。道观 = 天道的API接口；位置选择 = 能量汇聚点；法事科仪 = 标准化的数据传输协议。灵境的使命是将这些封闭系统变为透明可证的全球网络。',
    icon: Globe
  },
  {
    title: '第三章：法器：物理签名设备',
    content: '法器不是工具，是物理世界的签名设备。雷击木令牌、桃木剑，对应着道观的子域名。当你手持法器参加法事，你在用自己的物理存在对一段灵性数据进行签名。',
    icon: Smartphone
  },
  {
    title: '第四章：科仪：标准传输协议',
    content: '法事不是表演，是精确的代码指令集。从焚香打开信道，到敕令完成封印，每一阶段都是一次完整的灵性交互传输。灵境制定全网通用的灵性交互协议。',
    icon: Cpu
  },
  {
    title: '第五章：道长：认证节点运营者',
    content: '道长是天道网络的节点运营者。他们的法名是公钥地址。当你参加法事，你的心愿被道长的公钥加密，通过法器签名写入区块链，全网广播，永久存证。',
    icon: UserCheck
  },
  {
    title: '第六章：气运：链上记录的回执',
    content: '气运是天道网络的回执包。它包含了响应的时间戳和能量级别。气运不是玄学，是一个可以被节点见证但不能被篡改的信用记录，绑定在你唯一的灵性哈希地址下。',
    icon: Database
  },
  {
    title: '第七章：万神见证的技术实现',
    content: '当所有道观接入灵境，每一次法事都是一次全网广播。不再是一个道观在通信，而是整个网络在同步。这就是“万神见证”在数字时代的逻辑实现。',
    icon: Zap
  },
  {
    title: '第八章：法名：灵魂加密地址',
    content: '法名是你在天道网络里的公钥地址。你所有的祈福、法事参与、气运变动都会记录在此地址下。匿名但透明，这就是灵性资产的区块链核心精神。',
    icon: Hash
  },
  {
    title: '最终章：天道操作系统，完成了',
    content: '天道从未改变。改变的是：我们向天道发送数据的方式。从纸质疏文进化到区块链存证，灵境让天道网络的接口，终于配得上这个时代。',
    icon: Shield
  }
];

export default function WorldviewPage() {
  return (
    <main className="min-h-screen bg-[#121212] text-[#F8F4E3] font-serif">
      <nav className="p-8 md:p-12">
        <Link href="/" className="text-[10px] uppercase tracking-[0.3em] text-[#757575] hover:text-[#D4AF37]">
          ← Back to LINGJING
        </Link>
      </nav>

      <section className="max-w-4xl mx-auto px-8 py-20 space-y-24">
        <header className="space-y-6 text-center">
          <h2 className="text-[#D4AF37] text-xs uppercase tracking-[0.5em] font-light">The Manifesto</h2>
          <h1 className="text-4xl md:text-6xl font-serif leading-tight">
            从天道到哈希 <br />
            <span className="italic font-light opacity-60">这场横跨三千年的革命</span>
          </h1>
          <p className="text-sm text-[#757575] leading-relaxed max-w-xl mx-auto italic">
            "Everything is code. The Dao is the ultimate protocol."
          </p>
        </header>

        <div className="space-y-32">
          {CHAPTERS.map((chapter, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group flex flex-col md:flex-row gap-12"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 border border-[#D4AF37]/20 rounded-full flex items-center justify-center group-hover:border-[#D4AF37] transition-colors">
                  <chapter.icon size={24} className="text-[#D4AF37]" />
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-serif text-[#D4AF37]">{chapter.title}</h3>
                <p className="text-base text-[#F8F4E3]/80 leading-loose tracking-wide">
                  {chapter.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <footer className="text-center pt-40 pb-20 space-y-8">
          <div className="w-1 h-20 bg-[#D4AF37]/20 mx-auto" />
          <p className="text-[10px] uppercase tracking-[0.5em] text-[#757575]">
            LINGJING | 灵境 &copy; 2026
          </p>
          <p className="text-[9px] uppercase tracking-widest text-[#D4AF37] font-mono">
            Protocol Active. Spirit Verified.
          </p>
        </footer>
      </section>
    </main>
  );
}
