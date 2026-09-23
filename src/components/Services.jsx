import React from 'react';
import { motion } from 'framer-motion';
import { servicesData } from '../data/services';
import ServiceCard from './ServiceCard';
import { Sparkles, Layers } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-[#0E0C15] relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-[#7C3AED]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#FF5C00]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-widest text-[#FF5C00] mb-4">
              <Layers className="w-3.5 h-3.5" />
              <span>Full-Spectrum Capabilities</span>
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl text-white tracking-tight uppercase">
              WHAT WE <span className="text-[#FF5C00]">DO.</span>
            </h2>
          </div>
          <p className="text-zinc-400 max-w-md font-light text-sm sm:text-base leading-relaxed">
            We operate at the intersection of strategic brand identity, high-octane content, custom engineering, and viral performance marketing.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
