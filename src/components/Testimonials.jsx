import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useReviews } from '../hooks/useReviews';
import { featuredQuote } from '../data/reviews';
import ReviewCard from './ReviewCard';
import ReviewModal from './ReviewModal';
import { MessageSquare, Star, Plus, Quote, Sparkles } from 'lucide-react';

export default function Testimonials() {
  const { reviews, loading, addReview } = useReviews();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="reviews" className="py-24 md:py-32 bg-[#0A090F] relative overflow-hidden border-t border-white/10">
      {/* Background Accent Gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-[#FF5C00]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-widest text-[#FF5C00] mb-4">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Verified Client Testimonials</span>
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl text-white tracking-tight uppercase">
              CLIENTS TALK.{' '}
              <span className="block text-[#FF5C00]">WE LISTEN.</span>
            </h2>
            <p className="mt-3 text-zinc-300 font-light text-base sm:text-lg max-w-xl">
              Real experiences from the people we've had the privilege to work with.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button
              onClick={() => setModalOpen(true)}
              className="px-7 py-4 rounded-full bg-gradient-to-r from-[#FF5C00] to-[#FF8A00] text-white font-display font-bold text-xs uppercase tracking-wider shadow-xl shadow-[#FF5C00]/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-2.5 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>LEAVE A REVIEW</span>
            </button>
          </div>
        </div>

        {/* Featured Quote Card Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 p-8 sm:p-12 rounded-3xl glass-panel border border-[#FF5C00]/30 relative overflow-hidden text-center max-w-4xl mx-auto shadow-2xl"
        >
          <div className="flex items-center justify-center gap-1 text-[#FF9F00] mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#FF9F00]" />
            ))}
          </div>

          <p className="font-display font-bold text-xl sm:text-3xl text-white leading-relaxed max-w-3xl mx-auto">
            "{featuredQuote.quote}"
          </p>

          <p className="mt-4 text-xs font-mono uppercase tracking-widest text-[#FF5C00] font-bold">
            — {featuredQuote.author}
          </p>
        </motion.div>

        {/* 3-Column Responsive Masonry Grid */}
        {loading ? (
          <div className="text-center py-12 text-zinc-500 font-mono text-xs uppercase">
            Loading reviews...
          </div>
        ) : (
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {reviews.map((review, idx) => (
              <ReviewCard key={review.id} review={review} index={idx} />
            ))}
          </div>
        )}
      </div>

      {/* Review Modal */}
      <ReviewModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmitReview={addReview}
      />
    </section>
  );
}
