import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Share2, Layout, Megaphone, Sparkles } from 'lucide-react';

const badges = [
  { icon: Palette, label: "Branding", color: "from-orange-500 to-amber-500", text: "text-orange-400", pos: "top-4 left-2 sm:left-8 md:left-12", delay: 0 },
  { icon: Share2, label: "Social Media", color: "from-purple-500 to-indigo-500", text: "text-purple-400", pos: "top-14 right-2 sm:right-8 md:right-16", delay: 0.4 },
  { icon: Layout, label: "Web Design", color: "from-blue-500 to-cyan-500", text: "text-blue-400", pos: "bottom-4 left-4 sm:left-16 md:left-24", delay: 0.8 },
  { icon: Megaphone, label: "PR & Marketing", color: "from-pink-500 to-rose-500", text: "text-pink-400", pos: "bottom-2 right-4 sm:right-16 md:right-28", delay: 1.2 },
  { icon: Sparkles, label: "Creative Direction", color: "from-yellow-400 to-orange-400", text: "text-yellow-400", pos: "-top-4 left-1/2 -translate-x-1/2 hidden md:flex", delay: 0.6 },
];

export default function FloatingBadges() {
  return (
    <div className="w-full max-w-5xl mx-auto my-6">
      {/* Mobile Horizontal Carousel / Chips for touch screens */}
      <div className="flex sm:hidden overflow-x-auto no-scrollbar gap-2.5 py-3 px-2">
        {badges.map((badge) => {
          const IconComponent = badge.icon;
          return (
            <div
              key={badge.label}
              className="glass-card px-3.5 py-2 rounded-xl flex items-center gap-2 flex-shrink-0 border border-white/10 active:scale-95 transition-transform"
            >
              <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${badge.color} p-0.5 flex items-center justify-center`}>
                <div className="w-full h-full bg-[#0A090F]/70 rounded-[6px] flex items-center justify-center">
                  <IconComponent className={`w-3.5 h-3.5 ${badge.text}`} />
                </div>
              </div>
              <span className="text-xs font-semibold text-zinc-200">
                {badge.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Desktop / Tablet Floating Parallax Badges */}
      <div className="hidden sm:block relative w-full h-36 md:h-44 pointer-events-none">
        {badges.map((badge, idx) => {
          const IconComponent = badge.icon;
          return (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: badge.delay }}
              className={`absolute ${badge.pos} pointer-events-auto group`}
            >
              <motion.div
                animate={{
                  y: [0, idx % 2 === 0 ? -10 : 10, 0],
                  rotate: [0, idx % 2 === 0 ? 2 : -2, 0]
                }}
                transition={{
                  duration: 5 + idx,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="glass-card px-4 py-2.5 rounded-2xl flex items-center gap-2.5 shadow-lg border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105 cursor-pointer backdrop-blur-md"
              >
                <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${badge.color} p-0.5 flex items-center justify-center shadow-md`}>
                  <div className="w-full h-full bg-[#0A090F]/70 rounded-[10px] flex items-center justify-center">
                    <IconComponent className={`w-4 h-4 ${badge.text}`} />
                  </div>
                </div>
                <span className="text-xs md:text-sm font-semibold tracking-wide text-zinc-200 group-hover:text-white transition-colors">
                  {badge.label}
                </span>
                <div className="w-2 h-2 rounded-full bg-[#FF5C00] animate-pulse" />
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
