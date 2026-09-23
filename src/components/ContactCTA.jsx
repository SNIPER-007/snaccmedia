import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Flame, Sparkles } from 'lucide-react';

export default function ContactCTA({ onOpenContact }) {
  return (
    <section className="py-24 md:py-36 bg-[#0A090F] relative overflow-hidden border-t border-white/10">
      {/* Background Explosive Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-r from-[#FF5C00]/20 via-[#7C3AED]/15 to-amber-500/10 rounded-full blur-[170px] pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-[#FF5C00]/40 shadow-inner">
            <Flame className="w-4 h-4 text-[#FF5C00]" />
            <span className="text-xs uppercase font-mono tracking-widest text-zinc-300 font-bold">
              Let's Build Something Iconic
            </span>
          </div>

          <h2 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-[100px] tracking-tight leading-[0.95] text-white uppercase text-balance">
            READY TO MAKE{' '}
            <span className="bg-gradient-to-r from-[#FF5C00] via-[#FF8A00] to-[#ECEE52] bg-clip-text text-transparent block mt-2">
              SOME NOISE?
            </span>
          </h2>

          <p className="text-lg sm:text-2xl text-zinc-300 font-light max-w-2xl mx-auto leading-relaxed text-balance">
            Let's turn your next idea into something people can't stop talking about.
          </p>

          <div className="pt-4">
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-[#FF5C00] to-[#FF8A00] text-white font-display font-extrabold text-base sm:text-lg uppercase tracking-wider shadow-2xl shadow-[#FF5C00]/40 hover:shadow-[#FF5C00]/60 hover:scale-105 active:scale-95 transition-all duration-300 group cursor-pointer"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-6 h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
