import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Flame, Play } from 'lucide-react';
import FloatingBadges from './FloatingBadges';

export default function Hero({ onOpenContact }) {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 800], [0, 100]);
  const opacityParallax = useTransform(scrollY, [0, 500], [1, 0.3]);

  const scrollToWork = (e) => {
    e.preventDefault();
    const workSection = document.querySelector('#work');
    if (workSection) {
      const offset = 80;
      const elementPosition = workSection.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 md:pt-40 md:pb-28 flex flex-col justify-between overflow-hidden bg-[#0A090F]">
      {/* Background Glow Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[600px] md:w-[900px] h-[340px] sm:h-[500px] bg-gradient-to-tr from-[#FF5C00]/20 via-[#7C3AED]/15 to-transparent rounded-full blur-[100px] sm:blur-[140px] pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        <motion.div style={{ y: yParallax, opacity: opacityParallax }} className="text-center max-w-5xl mx-auto">
          {/* Top Badge Pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full glass-card border border-[#FF5C00]/30 mb-6 sm:mb-8 shadow-inner max-w-full overflow-hidden"
          >
            <span className="flex h-2 w-2 relative flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5C00] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF5C00]"></span>
            </span>
            <span className="text-[10px] sm:text-xs uppercase font-mono tracking-widest text-zinc-300 truncate">
              Creative & Digital Agency
            </span>
            <span className="text-[#FF5C00] font-bold text-xs hidden sm:inline">///</span>
            <span className="text-[10px] sm:text-xs font-semibold text-amber-400 hidden sm:inline">Available For Q4 Projects</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display font-extrabold text-4xl sm:text-7xl md:text-8xl lg:text-[105px] tracking-tight leading-[1.02] sm:leading-[0.95] text-white uppercase text-balance"
          >
            WE MAKE BRANDS{' '}
            <span className="block mt-2 bg-gradient-to-r from-[#FF5C00] via-[#FF8A00] to-[#ECEE52] bg-clip-text text-transparent drop-shadow-sm">
              IMPOSSIBLE TO IGNORE.
            </span>
          </motion.h1>

          {/* Supporting Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 sm:mt-8 text-base sm:text-xl md:text-2xl text-zinc-300 max-w-3xl mx-auto font-light leading-relaxed text-balance px-2"
          >
            Strategy, creativity and execution that turn ideas into brands people remember.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-6"
          >
            <button
              onClick={onOpenContact}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#FF5C00] to-[#FF8A00] text-white font-display font-bold text-sm uppercase tracking-wider shadow-xl shadow-[#FF5C00]/30 hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 group cursor-pointer"
            >
              <span>WORK WITH US</span>
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>

            <a
              href="#work"
              onClick={scrollToWork}
              className="w-full sm:w-auto px-8 py-4 rounded-full glass-panel text-zinc-200 font-display font-bold text-sm uppercase tracking-wider hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex items-center justify-center gap-3 group cursor-pointer border border-white/10"
            >
              <span>VIEW OUR WORK</span>
              <Play className="w-4 h-4 text-[#FF5C00] fill-[#FF5C00] transition-transform group-hover:scale-110" />
            </a>
          </motion.div>
        </motion.div>

        {/* Creative Badges */}
        <FloatingBadges />
      </div>

      {/* Marquee Banner */}
      <div className="w-full border-y border-white/10 py-3 bg-black/40 backdrop-blur-md overflow-hidden select-none">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-6 sm:gap-8 text-[11px] sm:text-xs font-mono uppercase tracking-widest text-zinc-400">
          <span className="flex items-center gap-2 text-[#FF5C00] font-bold">
            <Flame className="w-3.5 h-3.5" /> BRANDING & IDENTITY
          </span>
          <span>•</span>
          <span>SOCIAL MEDIA MANAGEMENT</span>
          <span>•</span>
          <span className="text-purple-400 font-bold">PR & MARKETING</span>
          <span>•</span>
          <span>WEB DESIGN & DEVELOPMENT</span>
          <span>•</span>
          <span className="text-yellow-400 font-bold">CONTENT CREATION</span>
          <span>•</span>
          <span>PHOTOGRAPHY & VIDEOGRAPHY</span>
          <span>•</span>
          <span className="text-pink-400 font-bold">CAMPAIGNS & EVENTS</span>
          <span>•</span>
          <span>CREATIVE STRATEGY</span>
          <span>•</span>
          {/* Duplicate loop */}
          <span className="flex items-center gap-2 text-[#FF5C00] font-bold">
            <Flame className="w-3.5 h-3.5" /> BRANDING & IDENTITY
          </span>
          <span>•</span>
          <span>SOCIAL MEDIA MANAGEMENT</span>
          <span>•</span>
          <span className="text-purple-400 font-bold">PR & MARKETING</span>
          <span>•</span>
          <span>WEB DESIGN & DEVELOPMENT</span>
          <span>•</span>
          <span className="text-yellow-400 font-bold">CONTENT CREATION</span>
          <span>•</span>
          <span>PHOTOGRAPHY & VIDEOGRAPHY</span>
          <span>•</span>
          <span className="text-pink-400 font-bold">CAMPAIGNS & EVENTS</span>
          <span>•</span>
          <span>CREATIVE STRATEGY</span>
          <span>•</span>
        </div>
      </div>
    </section>
  );
}
