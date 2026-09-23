import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Sparkles } from 'lucide-react';

export default function ReviewCard({ review, index }) {
  // Generate tasteful initials avatar if no avatar image is provided
  const getInitials = (name) => {
    if (!name) return 'SM';
    const parts = name.trim().split(' ');
    if (parts.length >= 2) return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    return parts[0].slice(0, 2).toUpperCase();
  };

  // Color gradient generator based on name for initials avatar
  const getAvatarGradient = (name) => {
    const gradients = [
      'from-amber-500 to-orange-600',
      'from-purple-600 to-indigo-600',
      'from-pink-500 to-rose-600',
      'from-blue-600 to-cyan-600',
      'from-emerald-500 to-teal-600'
    ];
    let hash = 0;
    for (let i = 0; i < (name || '').length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return gradients[Math.abs(hash) % gradients.length];
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="group relative rounded-3xl p-6 sm:p-8 bg-[#13111F] border border-white/10 hover:border-[#FF5C00]/50 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] flex flex-col justify-between mb-6 break-inside-avoid"
    >
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF5C00]/5 rounded-bl-full pointer-events-none group-hover:bg-[#FF5C00]/10 transition-colors" />

      <div>
        {/* Star Rating Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < (review.rating || 5)
                    ? 'fill-[#FF9F00] text-[#FF9F00]'
                    : 'fill-zinc-700 text-zinc-700'
                }`}
              />
            ))}
          </div>

          <Quote className="w-6 h-6 text-white/10 group-hover:text-[#FF5C00]/30 transition-colors" />
        </div>

        {/* Review Text */}
        <p className="text-sm sm:text-base text-zinc-200 font-light leading-relaxed italic mb-6">
          "{review.review}"
        </p>
      </div>

      {/* User Info Footer */}
      <div className="pt-4 border-t border-white/10 flex items-center gap-3.5">
        {review.avatarUrl ? (
          <img
            src={review.avatarUrl}
            alt={review.name}
            className="w-11 h-11 rounded-full object-cover border border-white/20 shadow-md flex-shrink-0"
          />
        ) : (
          <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${getAvatarGradient(review.name)} flex items-center justify-center text-white font-display font-bold text-xs shadow-md border border-white/20 flex-shrink-0`}>
            {getInitials(review.name)}
          </div>
        )}

        <div className="overflow-hidden">
          <h4 className="font-display font-bold text-sm text-white group-hover:text-[#FF5C00] transition-colors truncate">
            {review.name}
          </h4>
          <p className="text-xs text-zinc-400 truncate">
            {review.role}{review.company ? ` | ${review.company}` : ''}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
