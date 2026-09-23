import React from 'react';
import { siteConfig } from '../data/config';
import Logo from './Logo';
import { InstagramIcon, LinkedinIcon, YoutubeIcon } from './SocialIcons';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

export default function Footer({ onOpenContact }) {
  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#06050A] text-white border-t border-white/10 pt-20 pb-10 relative overflow-hidden select-none">
      {/* Background Subtle Gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-gradient-to-t from-[#FF5C00]/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-6">
            <Logo className="h-9" />
            <p className="text-zinc-400 font-light text-sm leading-relaxed max-w-sm">
              {siteConfig.description}
            </p>
            <div className="flex items-center gap-3 text-xs font-mono text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-[#FF5C00] animate-ping" />
              <span>{siteConfig.location}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase font-mono tracking-widest text-[#FF5C00] font-bold mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm font-medium text-zinc-300">
              <li>
                <a href="#hero" onClick={(e) => scrollToSection(e, '#hero')} className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => scrollToSection(e, '#services')} className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#work" onClick={(e) => scrollToSection(e, '#work')} className="hover:text-white transition-colors">
                  Work
                </a>
              </li>
              <li>
                <a href="#why-snacc" onClick={(e) => scrollToSection(e, '#why-snacc')} className="hover:text-white transition-colors">
                  Why SNACC
                </a>
              </li>
              <li>
                <a href="#reviews" onClick={(e) => scrollToSection(e, '#reviews')} className="hover:text-white transition-colors">
                  Reviews
                </a>
              </li>
              <li>
                <button onClick={onOpenContact} className="hover:text-[#FF5C00] transition-colors cursor-pointer">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-xs uppercase font-mono tracking-widest text-[#FF5C00] font-bold mb-4">
              Socials
            </h4>
            <ul className="space-y-2.5 text-sm font-medium text-zinc-300">
              <li>
                <a
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[#FF5C00] transition-colors"
                >
                  <InstagramIcon className="w-4 h-4 text-[#FF5C00]" />
                  <span>Instagram</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[#FF5C00] transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4 text-[#FF5C00]" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.socials.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[#FF5C00] transition-colors"
                >
                  <YoutubeIcon className="w-4 h-4 text-[#FF5C00]" />
                  <span>YouTube</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div>
            <h4 className="text-xs uppercase font-mono tracking-widest text-[#FF5C00] font-bold mb-4">
              Get In Touch
            </h4>
            <ul className="space-y-3 text-xs text-zinc-300 font-mono">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#FF5C00]" />
                <a href={`mailto:${siteConfig.email}`} className="hover:underline">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#FF5C00]" />
                <a href={`tel:${siteConfig.phone}`} className="hover:underline">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-2 pt-1 text-zinc-400">
                <MapPin className="w-4 h-4 text-[#FF5C00] flex-shrink-0 mt-0.5" />
                <span>{siteConfig.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Oversized Footer Wordmark Banner */}
        <div className="py-12 text-center border-b border-white/5">
          <h1 className="font-display font-black text-6xl sm:text-9xl md:text-[140px] lg:text-[180px] leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/20 via-white/5 to-transparent uppercase drop-shadow-sm pointer-events-none">
            SNACC MEDIA
          </h1>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>© {new Date().getFullYear()} SNACC MEDIA. All rights reserved.</p>
          <div className="flex items-center gap-6 text-zinc-400">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
