import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Tag, Sparkles, ArrowRight, CheckCircle } from 'lucide-react';

export default function ProjectModal({ project, onClose, onOpenContact }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl bg-[#12101C] border border-white/15 rounded-3xl overflow-hidden shadow-2xl z-10 my-auto text-left"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-[#FF5C00] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Project Image Header */}
          <div className="relative h-64 sm:h-96 w-full overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#12101C] via-[#12101C]/40 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-mono uppercase bg-[#FF5C00] text-white font-bold">
                  {project.category}
                </span>
                {project.secondaryCategory && (
                  <span className="px-3 py-1 rounded-full text-xs font-mono uppercase bg-white/10 text-zinc-300 border border-white/10">
                    {project.secondaryCategory}
                  </span>
                )}
              </div>
              <h3 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
                {project.title}
              </h3>
              <p className="text-sm font-medium text-amber-400 mt-1">
                Client: {project.client} • Deliverables ({project.year})
              </p>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <h4 className="text-xs uppercase font-mono tracking-widest text-[#FF5C00] font-bold mb-2">
                Overview & Impact
              </h4>
              <p className="text-base sm:text-lg text-zinc-200 font-light leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Impact Metric Highlight */}
            {project.impact && (
              <div className="p-4 rounded-2xl bg-gradient-to-r from-[#FF5C00]/15 via-purple-500/10 to-transparent border border-[#FF5C00]/30 flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-[#FF5C00] flex-shrink-0" />
                <div>
                  <span className="text-xs font-mono uppercase text-zinc-400">Key Milestone Result</span>
                  <p className="text-base font-bold text-white">{project.impact}</p>
                </div>
              </div>
            )}

            {/* Tags */}
            <div>
              <h4 className="text-xs uppercase font-mono tracking-widest text-zinc-400 font-bold mb-3">
                Services Provided:
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-medium text-zinc-300 flex items-center gap-1.5">
                    <Tag className="w-3 h-3 text-[#FF5C00]" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={() => {
                  onClose();
                  onOpenContact();
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-[#FF5C00] to-[#FF8A00] text-white font-display font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#FF5C00]/30 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request Similar Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-white/10 text-zinc-300 font-display font-bold text-xs uppercase tracking-wider hover:bg-white/20 transition-all text-center cursor-pointer"
              >
                Close Project Preview
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
