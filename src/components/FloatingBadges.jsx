import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Share2, Layout, Megaphone } from 'lucide-react';

const badges = [
  // Left side safely in upper hero region
  { icon: Palette, label: "Branding", color: "from-orange-500 to-amber-500", text: "text-orange-400", pos: "top-4 left-1 md:-left-4 lg:-left-10 xl:-left-14", delay: 0 },
  { icon: Layout, label: "Web Design", color: "from-blue-500 to-cyan-500", text: "text-blue-400", pos: "top-28 left-2 md:-left-2 lg:-left-6 xl:-left-10", delay: 0.6 },
  
  // Right side safely in upper hero region
  { icon: Share2, label: "Social Media", color: "from-purple-500 to-indigo-500", text: "text-purple-400", pos: "top-6 right-1 md:-right-4 lg:-right-10 xl:-right-14", delay: 0.3 },
  { icon: Megaphone, label: "PR & Marketing", color: "from-pink-500 to-rose-500", text: "text-pink-400", pos: "top-32 right-2 md:-right-2 lg:-right-6 xl:-right-10", delay: 0.9 },
];

export default function FloatingBadges() {
  return (
    <>
      {/* Mobile Horizontal Pill Row */}
      <div className="flex sm:hidden overflow-x-auto no-scrollbar gap-2.5 py-2 px-1 justify-start mt-4 relative z-20 pointer-events-auto">
        {badges.map((badge) => {
          const IconComponent = badge.icon;
          return (
            <div
              key={badge.label}
              className="glass-card px-3 py-1.5 rounded-xl flex items-center gap-2 flex-shrink-0 border border-white/10 active:scale-95 transition-transform"
            >
              <div className={`w-5 h-5 rounded-lg bg-gradient-to-br ${badge.color} p-0.5 flex items-center justify-center`}>
                <div className="w-full h-full bg-[#0A090F]/70 rounded-[5px] flex items-center justify-center">
                  <IconComponent className={`w-3 h-3 ${badge.text}`} />
                </div>
              </div>
              <span className="text-xs font-semibold text-zinc-300">
                {badge.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Desktop & Tablet Upper Side Badges (Positioned strictly in upper hero area) */}
      <div className="hidden sm:block absolute inset-0 pointer-events-none z-10 overflow-visible">
        {badges.map((badge, idx) => {
          const IconComponent = badge.icon;
          return (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: badge.delay }}
              className={`absolute ${badge.pos} pointer-events-auto`}
            >
              <motion.div
                animate={{
                  y: [0, idx % 2 === 0 ? -6 : 6, 0],
                  rotate: [0, idx % 2 === 0 ? 1.5 : -1.5, 0]
                }}
                transition={{
                  duration: 4.5 + idx,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="glass-card px-3.5 py-2 rounded-2xl flex items-center gap-2.5 shadow-xl border border-white/15 hover:border-white/35 transition-all duration-300 hover:scale-105 cursor-pointer backdrop-blur-sm"
              >
                <div className={`w-7 h-7 rounded-xl bg-gradient-to-br ${badge.color} p-0.5 flex items-center justify-center shadow-md`}>
                  <div className="w-full h-full bg-[#0A090F]/80 rounded-[9px] flex items-center justify-center">
                    <IconComponent className={`w-3.5 h-3.5 ${badge.text}`} />
                  </div>
                </div>
                <span className="text-xs font-semibold tracking-wide text-zinc-200 hover:text-white transition-colors">
                  {badge.label}
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-[#FF5C00] animate-pulse" />
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </>
  );
}
