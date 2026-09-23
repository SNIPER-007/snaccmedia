import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function ProjectCard({ project, index, onSelect }) {
  const isLarge = index % 3 === 0;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className={`group relative rounded-3xl overflow-hidden bg-[#13111F] border border-white/10 hover:border-[#FF5C00]/50 transition-all duration-500 shadow-xl flex flex-col justify-between cursor-pointer ${
        isLarge ? 'md:col-span-2 md:row-span-2 h-[400px] sm:h-[500px] md:h-[580px]' : 'col-span-1 h-[380px] sm:h-[440px]'
      }`}
      onClick={() => onSelect(project)}
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-75 group-hover:opacity-85"
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-[#0A090F] via-[#0A090F]/65 to-transparent ${project.bgGradient}`} />
      </div>

      {/* Top Badges */}
      <div className="relative z-10 p-5 sm:p-8 flex items-center justify-between">
        <span className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider bg-black/60 text-white border border-white/10 backdrop-blur-md">
          {project.category}
        </span>
        
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-[#FF5C00] group-hover:border-[#FF5C00] transition-all duration-300 group-hover:scale-110">
          <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>

      {/* Bottom Content */}
      <div className="relative z-10 p-5 sm:p-8">
        <p className="text-[10px] sm:text-xs uppercase font-mono tracking-widest text-[#FF5C00] font-bold mb-1">
          {project.client}
        </p>
        
        <h3 className={`font-display font-extrabold text-white group-hover:text-amber-400 transition-colors ${
          isLarge ? 'text-2xl sm:text-4xl md:text-5xl' : 'text-xl sm:text-3xl'
        }`}>
          {project.title}
        </h3>

        <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-zinc-300 font-light line-clamp-2">
          {project.summary}
        </p>

        {/* Footer Tags */}
        <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap gap-1">
            {project.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="text-[9px] sm:text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/10 text-zinc-300">
                {tag}
              </span>
            ))}
          </div>

          <span className="text-[11px] sm:text-xs font-mono text-[#FF5C00] font-bold uppercase flex items-center gap-1">
            <span>View Project</span>
          </span>
        </div>
      </div>
    </motion.div>
  );
}
