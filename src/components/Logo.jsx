import React, { useState } from 'react';

/**
 * Logo Component
 * Renders the official SNACC MEDIA logo image (/snaccmedia-logo.png) instead of plain text.
 */
export default function Logo({ className = "h-8 sm:h-9", forceVector = false }) {
  const [imageError, setImageError] = useState(false);

  if (!forceVector && !imageError) {
    return (
      <div className={`flex items-center ${className}`}>
        <img
          src="/snaccmedia-logo.png"
          alt="SNACC MEDIA Logo"
          onError={() => setImageError(true)}
          className="h-full w-auto object-contain select-none filter drop-shadow-sm"
        />
      </div>
    );
  }

  // Fallback SVG mark
  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      <div className="relative w-8 h-8 flex-shrink-0 flex items-center justify-center">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_2px_8px_rgba(255,92,0,0.4)]">
          <defs>
            <linearGradient id="snaccBeanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF7A00" />
              <stop offset="50%" stopColor="#FF5C00" />
              <stop offset="100%" stopColor="#FF3D00" />
            </linearGradient>
            <linearGradient id="snaccInnerHighlight" x1="20%" y1="0%" x2="80%" y2="100%">
              <stop offset="0%" stopColor="#FFE500" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#FF5C00" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <path
            d="M32 15 C 65 5, 90 28, 82 58 C 74 85, 45 95, 22 80 C 2 65, 8 30, 32 15 Z"
            fill="url(#snaccBeanGrad)"
          />
          <path
            d="M40 28 C 60 22, 74 36, 68 56 C 63 72, 42 78, 30 68 C 18 58, 22 36, 40 28 Z"
            fill="url(#snaccInnerHighlight)"
            opacity="0.75"
          />
        </svg>
      </div>

      <div className="flex items-center font-display font-black text-xl tracking-tight leading-none">
        <span className="text-white drop-shadow-sm">snacc</span>
        <span className="text-[#FF9F00] ml-0.5">media</span>
      </div>
    </div>
  );
}
