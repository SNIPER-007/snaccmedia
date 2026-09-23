import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactModal({ isOpen, onClose }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('Branding & Identity');
  const [budget, setBudget] = useState('Flexible / Undecided');
  const [message, setMessage] = useState('');

  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSent(true);
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 }
      });
    }, 800);
  };

  const handleClose = () => {
    setSent(false);
    setFullName('');
    setEmail('');
    setMessage('');
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-[#12101F] border border-white/15 rounded-3xl p-5 sm:p-10 shadow-2xl z-10 my-auto text-left max-h-[90vh] overflow-y-auto"
        >
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 sm:top-5 sm:right-5 w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[#FF5C00] active:scale-95 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {!sent ? (
            <div>
              <div className="mb-6 pr-8">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF5C00]/15 text-[#FF5C00] text-[10px] sm:text-xs font-mono font-bold uppercase mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Start A Project</span>
                </div>
                <h3 className="font-display font-extrabold text-2xl sm:text-4xl text-white tracking-tight uppercase">
                  LET'S WORK <span className="text-[#FF5C00]">TOGETHER.</span>
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 font-light mt-1">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-mono uppercase text-zinc-300 font-bold mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-[#FF5C00]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-zinc-300 font-bold mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="john@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-[#FF5C00]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-mono uppercase text-zinc-300 font-bold mb-1">Primary Service</label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#1B182B] border border-white/10 text-white focus:outline-none focus:border-[#FF5C00]"
                    >
                      <option>Branding & Identity</option>
                      <option>Social Media Management</option>
                      <option>PR & Marketing</option>
                      <option>Web Design & Development</option>
                      <option>Content Creation</option>
                      <option>Photography & Videography</option>
                      <option>Campaigns & Events</option>
                      <option>Creative Strategy</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-zinc-300 font-bold mb-1">Estimated Budget</label>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#1B182B] border border-white/10 text-white focus:outline-none focus:border-[#FF5C00]"
                    >
                      <option>Flexible / Undecided</option>
                      <option>$1,000 - $3,000</option>
                      <option>$3,000 - $10,000</option>
                      <option>$10,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-zinc-300 font-bold mb-1">Project Details *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your brand, goals, and target timeline..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-[#FF5C00] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#FF5C00] to-[#FF8A00] text-white font-display font-bold text-sm uppercase tracking-wider shadow-xl shadow-[#FF5C00]/30 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {submitting ? (
                    <span>SENDING...</span>
                  ) : (
                    <>
                      <span>SUBMIT INQUIRY</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          ) : (
            <div className="text-center py-6 sm:py-8 space-y-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-[#FF5C00] to-[#FF8A00] flex items-center justify-center text-white mx-auto shadow-2xl shadow-[#FF5C00]/50 animate-bounce">
                <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
                INQUIRY RECEIVED!
              </h3>
              <p className="text-zinc-300 font-light text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                Thank you for reaching out to SNACC MEDIA. Our strategy lead will contact you shortly at <span className="text-[#FF5C00] font-bold">{email}</span>.
              </p>
              <button
                onClick={handleClose}
                className="mt-4 px-8 py-3 rounded-full bg-white/10 text-white font-display font-bold text-xs uppercase tracking-wider hover:bg-white/20 active:scale-95 transition-all cursor-pointer"
              >
                Done
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
