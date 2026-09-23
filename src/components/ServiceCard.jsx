import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ServiceCard({ service, index }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`group relative rounded-3xl p-6 sm:p-8 border border-white/10 bg-gradient-to-b ${service.bgClass} bg-[#12101C]/90 hover:border-white/25 transition-all duration-300 hover:shadow-2xl shadow-black/40 flex flex-col justify-between overflow-hidden`}
    >
      {/* Background Accent Pill Glow */}
      <div
        className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none"
        style={{ backgroundColor: service.accentColor }}
      />

      <div>
        {/* Header row */}
        <div className="flex items-center justify-between mb-6">
          <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-white/10 text-zinc-300 border border-white/10">
            {service.id}
          </span>
          <span
            className="text-xs uppercase font-bold tracking-widest px-3 py-1 rounded-full text-white/90"
            style={{ backgroundColor: `${service.accentColor}25`, border: `1px solid ${service.accentColor}50` }}
          >
            {service.badgeText}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl sm:text-3xl font-display font-bold text-white group-hover:text-[#FF5C00] transition-colors mb-3">
          {service.title}
        </h3>

        {/* Short Description */}
        <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed mb-6">
          {service.shortDesc}
        </p>

        {/* Expandable Details */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-4 pt-4 border-t border-white/10 mb-6"
            >
              <p className="text-sm text-zinc-300 leading-relaxed font-light">
                {service.fullDesc}
              </p>

              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold mb-2.5">
                  Key Deliverables:
                </p>
                <div className="space-y-2">
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-zinc-200">
                      <CheckCircle2 className="w-4 h-4 text-[#FF5C00] flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer Toggle Button */}
      <div className="pt-4 border-t border-white/5 flex items-center justify-between mt-auto">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="inline-flex items-center gap-2 text-xs uppercase font-mono tracking-wider text-zinc-300 hover:text-white transition-colors cursor-pointer py-1"
        >
          <span>{isExpanded ? 'Less Info' : 'Explore Capabilities'}</span>
          <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white">
            {isExpanded ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
          </div>
        </button>

        <span
          className="w-2 h-2 rounded-full transition-transform group-hover:scale-150"
          style={{ backgroundColor: service.accentColor }}
        />
      </div>
    </motion.div>
  );
}
