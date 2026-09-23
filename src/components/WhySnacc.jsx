import React from 'react';
import { motion } from 'framer-motion';
import { whySnaccPillars } from '../data/whySnacc';
import { Lightbulb, Target, Sparkles, Eye, Zap, Handshake } from 'lucide-react';

export default function WhySnacc() {
  const icons = [Lightbulb, Target, Sparkles, Eye, Zap, Handshake];

  return (
    <section id="why-snacc" className="py-24 md:py-32 bg-[#0E0C15] relative overflow-hidden border-t border-white/10">
      {/* Background Accent Lines */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF5C00]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-widest text-[#FF5C00] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The SNACC Advantage</span>
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl text-white tracking-tight uppercase">
            WHY <span className="text-[#FF5C00]">SNACC?</span>
          </h2>
          <p className="mt-4 text-zinc-300 font-light text-base sm:text-lg">
            We don't fit into traditional agency boxes. Here is why ambitious brands choose to partner with us.
          </p>
        </div>

        {/* 6 Large Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {whySnaccPillars.map((pillar, idx) => {
            const IconComponent = icons[idx % icons.length];
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group relative rounded-3xl p-8 bg-[#13111F] border border-white/10 hover:border-white/25 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] flex flex-col justify-between overflow-hidden"
              >
                {/* Background Number Watermark */}
                <span className="absolute -bottom-4 -right-2 text-8xl font-display font-black text-white/[0.03] group-hover:text-white/[0.07] transition-colors select-none">
                  {pillar.number}
                </span>

                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg"
                      style={{ backgroundColor: `${pillar.color}25`, border: `1px solid ${pillar.color}60` }}
                    >
                      <IconComponent className="w-6 h-6" style={{ color: pillar.color }} />
                    </div>
                    <span className="font-mono text-xs font-bold text-zinc-400">
                      {pillar.number}
                    </span>
                  </div>

                  <h3 className="text-2xl font-display font-bold text-white group-hover:text-[#FF5C00] transition-colors mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-zinc-300 font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-400">
                    SNACC Pillar
                  </span>
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: pillar.color }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
