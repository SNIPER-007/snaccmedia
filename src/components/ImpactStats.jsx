import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { siteConfig } from '../data/config';
import { TrendingUp, Award, Users, Rocket } from 'lucide-react';

function Counter({ targetValue, suffix = '+' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = targetValue;
    const duration = 2000;
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const currentCount = Math.round(end * (1 - Math.pow(1 - progress, 3)));
      setCount(currentCount);

      if (frame >= totalFrames) {
        clearInterval(counter);
        setCount(end);
      }
    }, frameRate);

    return () => clearInterval(counter);
  }, [isInView, targetValue]);

  return (
    <span ref={ref} className="font-display font-black text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl tracking-tight text-white leading-none inline-block">
      {count}{suffix}
    </span>
  );
}

export default function ImpactStats() {
  const icons = [Users, Rocket, TrendingUp, Award];

  return (
    <section className="py-16 sm:py-24 bg-[#09080E] border-y border-white/10 relative overflow-hidden">
      {/* Background Accent Lines */}
      <div className="absolute inset-0 bg-[radial-gradient(#FF5C00_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF5C00]/10 border border-[#FF5C00]/30 text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#FF5C00] mb-3">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Proven Track Record</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight uppercase">
            NUMBERS THAT <span className="text-[#FF5C00]">TALK.</span>
          </h2>
          <p className="mt-2 text-zinc-400 font-light text-xs sm:text-base">
            From grassroots startups to enterprise institutions, we deliver measurable creative impact.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {siteConfig.stats.map((stat, idx) => {
            const IconComponent = icons[idx % icons.length];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="glass-card p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl text-center border border-white/10 hover:border-[#FF5C00]/40 transition-all duration-300 hover:scale-[1.02] group flex flex-col justify-between overflow-hidden"
              >
                <div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4 text-[#FF5C00] group-hover:bg-[#FF5C00] group-hover:text-white transition-all duration-300">
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  
                  <div className="my-2 py-1 overflow-hidden">
                    <Counter targetValue={stat.value} suffix={stat.suffix} />
                  </div>

                  <h3 className="font-display font-bold text-xs sm:text-base text-zinc-200 uppercase tracking-wide group-hover:text-[#FF5C00] transition-colors line-clamp-1">
                    {stat.label}
                  </h3>
                </div>

                <p className="mt-2 text-[11px] sm:text-xs text-zinc-400 font-light line-clamp-2">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
