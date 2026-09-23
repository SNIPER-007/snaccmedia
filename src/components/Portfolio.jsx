import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioCategories, portfolioProjects } from '../data/portfolio';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { Briefcase } from 'lucide-react';

export default function Portfolio({ onOpenContact }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === 'All'
    ? portfolioProjects
    : portfolioProjects.filter(p => p.category === activeCategory || p.secondaryCategory === activeCategory);

  return (
    <section id="work" className="py-20 md:py-32 bg-[#0A090F] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[700px] h-[340px] sm:h-[500px] bg-[#FF5C00]/5 rounded-full blur-[120px] sm:blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-12 gap-4 sm:gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#FF5C00] mb-3 sm:mb-4">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Selected Client Case Studies</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-6xl md:text-7xl text-white tracking-tight uppercase">
              WORK WE'VE <span className="text-[#FF5C00]">MADE.</span>
            </h2>
          </div>
          <p className="text-zinc-400 max-w-md font-light text-xs sm:text-base leading-relaxed">
            From brand identity revamps to viral campaign launches and enterprise websites, explore how we transform ambitious clients into category leaders.
          </p>
        </div>

        {/* Category Filter Tabs with Touch Swiping */}
        <div className="flex items-center gap-2 mb-10 pb-3 border-b border-white/10 overflow-x-auto no-scrollbar scroll-smooth">
          {portfolioCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer whitespace-nowrap flex-shrink-0 active:scale-95 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-[#FF5C00] to-[#FF8A00] text-white shadow-lg shadow-[#FF5C00]/30 scale-105'
                  : 'glass-card text-zinc-400 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={idx}
                onSelect={(proj) => setSelectedProject(proj)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenContact={onOpenContact}
      />
    </section>
  );
}
