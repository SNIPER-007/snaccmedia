import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { processSteps } from '../data/process';
import { Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="py-24 md:py-32 bg-[#09080E] relative overflow-hidden border-t border-white/10">
      {/* Glow Effects */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#FF5C00]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-widest text-[#FF5C00] mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Our Secret Sauce</span>
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl text-white tracking-tight uppercase">
              HOW WE MAKE IT <span className="text-[#FF5C00]">HAPPEN.</span>
            </h2>
          </div>
          <p className="text-zinc-400 max-w-md font-light text-sm sm:text-base leading-relaxed">
            A battle-tested 4-step framework engineered to take brands from initial concept to high-converting cultural presence.
          </p>
        </div>

        {/* Timeline Navigation Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-12">
          {processSteps.map((item, idx) => (
            <button
              key={item.step}
              onClick={() => setActiveStep(idx)}
              className={`p-5 sm:p-6 rounded-2xl text-left border transition-all duration-300 cursor-pointer relative overflow-hidden ${
                activeStep === idx
                  ? 'bg-[#181528] border-[#FF5C00] shadow-xl shadow-[#FF5C00]/10 scale-[1.02]'
                  : 'glass-card border-white/10 hover:border-white/20 text-zinc-400'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className={`font-mono text-xs font-bold px-2.5 py-0.5 rounded ${
                  activeStep === idx ? 'bg-[#FF5C00] text-white' : 'bg-white/10 text-zinc-300'
                }`}>
                  {item.step}
                </span>
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.accent }} />
              </div>

              <h3 className={`font-display font-bold text-lg sm:text-xl uppercase ${
                activeStep === idx ? 'text-white' : 'text-zinc-300'
              }`}>
                {item.title}
              </h3>

              {activeStep === idx && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF5C00] to-amber-400"
                />
              )}
            </button>
          ))}
        </div>

        {/* Selected Step Expanded Showcase Box */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl p-8 sm:p-12 glass-panel border border-white/15 relative overflow-hidden shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5C00]/20 text-[#FF5C00] font-mono text-xs font-bold uppercase">
                  <span>Phase {processSteps[activeStep].step}</span>
                  <span>•</span>
                  <span>{processSteps[activeStep].subtitle}</span>
                </div>

                <h3 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
                  {processSteps[activeStep].title}
                </h3>

                <p className="text-zinc-300 font-light text-base sm:text-lg leading-relaxed">
                  {processSteps[activeStep].description}
                </p>

                <div className="pt-4 border-t border-white/10">
                  <p className="text-xs uppercase font-mono tracking-widest text-zinc-400 font-bold mb-4">
                    Key Outputs & Focus:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {processSteps[activeStep].highlights.map((highlight) => (
                      <div key={highlight} className="flex items-center gap-2.5 text-sm text-zinc-200">
                        <CheckCircle2 className="w-4 h-4 text-[#FF5C00] flex-shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative Visual Illustration Card */}
              <div className="lg:col-span-5 relative flex items-center justify-center p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 min-h-[260px]">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-[#FF5C00] to-[#7C3AED] mx-auto flex items-center justify-center shadow-2xl shadow-[#FF5C00]/30 font-display font-black text-3xl text-white">
                    {processSteps[activeStep].step}
                  </div>
                  <div>
                    <span className="font-display font-bold text-lg text-white block uppercase">
                      {processSteps[activeStep].title}
                    </span>
                    <span className="text-xs text-zinc-400 font-mono">
                      Step {activeStep + 1} of 4 Execution
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
