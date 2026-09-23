import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, Heart, CheckCircle, Send } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ReviewModal({ isOpen, onClose, onSubmitReview }) {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [company, setCompany] = useState('');
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [review, setReview] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !role.trim() || !review.trim()) {
      setErrorMsg('Please fill in your name, designation, and review text.');
      return;
    }

    try {
      setSubmitting(true);
      setErrorMsg('');

      await onSubmitReview({
        name,
        role,
        company,
        rating,
        review,
        avatarUrl
      });

      setSubmitting(false);
      setSubmitted(true);

      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      console.error(err);
      setSubmitting(false);
      setErrorMsg('Failed to submit review. Please try again.');
    }
  };

  const handleResetAndClose = () => {
    setName('');
    setRole('');
    setCompany('');
    setRating(5);
    setReview('');
    setAvatarUrl('');
    setSubmitted(false);
    setErrorMsg('');
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleResetAndClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-xl bg-[#12101F] border border-white/15 rounded-3xl p-5 sm:p-8 shadow-2xl z-10 my-auto text-left max-h-[90vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={handleResetAndClose}
            className="absolute top-4 right-4 sm:top-5 sm:right-5 w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[#FF5C00] active:scale-95 transition-all"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div>
              <div className="mb-6 pr-8">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF5C00]/15 text-[#FF5C00] text-[10px] sm:text-xs font-mono font-bold uppercase mb-2">
                  <Heart className="w-3.5 h-3.5 fill-[#FF5C00]" />
                  <span>Share Your Experience</span>
                </div>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight uppercase">
                  LEAVE A <span className="text-[#FF5C00]">REVIEW.</span>
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 font-light mt-1">
                  Tell us how SNACC MEDIA helped bring your vision to life.
                </p>
              </div>

              {errorMsg && (
                <div className="mb-4 p-3 rounded-xl bg-red-500/20 border border-red-500/40 text-red-300 text-xs font-medium">
                  {errorMsg}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Star Rating Input */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-300 font-bold mb-2">
                    Rating
                  </label>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="p-1 text-2xl focus:outline-none transition-transform hover:scale-125 active:scale-110"
                      >
                        <Star
                          className={`w-6 h-6 sm:w-7 sm:h-7 ${
                            star <= (hoverRating || rating)
                              ? 'fill-[#FF9F00] text-[#FF9F00]'
                              : 'fill-zinc-800 text-zinc-700'
                          }`}
                        />
                      </button>
                    ))}
                    <span className="ml-2 text-xs font-mono text-amber-400 font-bold">
                      {rating} / 5 Stars
                    </span>
                  </div>
                </div>

                {/* Name & Role */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-300 font-bold mb-1">
                      Full Name <span className="text-[#FF5C00]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Shaan Shah"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-[#FF5C00]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-300 font-bold mb-1">
                      Designation / Role <span className="text-[#FF5C00]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Co-Founder"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-[#FF5C00]"
                    />
                  </div>
                </div>

                {/* Company & Avatar */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-300 font-bold mb-1">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Freakins"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-[#FF5C00]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-300 font-bold mb-1">
                      Profile Image URL (Optional)
                    </label>
                    <input
                      type="url"
                      placeholder="https://..."
                      value={avatarUrl}
                      onChange={(e) => setAvatarUrl(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-[#FF5C00]"
                    />
                  </div>
                </div>

                {/* Review Text Area */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-300 font-bold mb-1">
                    Your Review <span className="text-[#FF5C00]">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Share the results and your experience working with SNACC MEDIA..."
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-[#FF5C00] resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#FF5C00] to-[#FF8A00] text-white font-display font-bold text-sm uppercase tracking-wider shadow-xl shadow-[#FF5C00]/30 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {submitting ? (
                      <span>SUBMITTING...</span>
                    ) : (
                      <>
                        <span>SUBMIT REVIEW</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="text-center py-6 sm:py-8 space-y-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-[#FF5C00] to-[#FF8A00] flex items-center justify-center text-white mx-auto shadow-2xl shadow-[#FF5C00]/50 animate-bounce">
                <CheckCircle className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>

              <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
                THANK YOU FOR THE LOVE.
              </h3>

              <p className="text-zinc-300 font-light text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                Your review has been successfully submitted and added to our client wall of fame!
              </p>

              <button
                onClick={handleResetAndClose}
                className="mt-4 px-8 py-3 rounded-full bg-white/10 text-white font-display font-bold text-xs uppercase tracking-wider hover:bg-white/20 active:scale-95 transition-all cursor-pointer"
              >
                Back To Website
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
