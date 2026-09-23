import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import Logo from './Logo';
import { useScrollPosition } from '../hooks/useScrollPosition';

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Why SNACC', href: '#why-snacc' },
  { label: 'Process', href: '#process' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar({ onOpenContact }) {
  const { isScrolled } = useScrollPosition();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 90;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-3.5 bg-[#0A090F]/92 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/60'
            : 'py-5 sm:py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Prominent Large Logo */}
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, '#hero')}
            className="group focus:outline-none flex items-center transition-transform active:scale-95 flex-shrink-0"
            aria-label="SNACC MEDIA Home"
          >
            <Logo className="w-[135px] xs:w-[145px] sm:w-[160px] md:w-[175px] lg:w-[190px] h-auto" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 glass-panel rounded-full px-5 py-2 border border-white/10">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            <button
              onClick={onOpenContact}
              className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase font-bold tracking-wider text-white bg-gradient-to-r from-[#FF5C00] to-[#FF8A00] hover:from-[#FF7A00] hover:to-[#FFA000] shadow-lg shadow-[#FF5C00]/25 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer group"
            >
              <span>Work With Us</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center flex-shrink-0">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 active:scale-95 transition-all focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#0A090F]/98 backdrop-blur-3xl md:hidden pt-28 px-6 pb-8 flex flex-col justify-between overflow-y-auto"
          >
            <div className="flex flex-col gap-2">
              <p className="text-[11px] uppercase tracking-widest text-[#FF5C00] font-mono font-bold mb-3">
                Navigation Menu
              </p>
              {navItems.map((item, idx) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04 }}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="text-2xl font-display font-extrabold text-zinc-100 hover:text-[#FF5C00] active:text-[#FF5C00] transition-colors py-3 flex items-center justify-between border-b border-white/10"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-5 h-5 text-[#FF5C00] opacity-80" />
                </motion.a>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 pt-6 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#FF5C00] to-[#FF8A00] text-white text-center font-display font-bold text-base uppercase tracking-wider shadow-xl shadow-[#FF5C00]/30 active:scale-98 transition-all"
              >
                Work With Us
              </button>
              <div className="flex items-center justify-center gap-2 text-xs text-zinc-400 font-mono">
                <Sparkles className="w-3.5 h-3.5 text-[#FF5C00]" />
                <span>SNACC MEDIA — Impossible To Ignore</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
