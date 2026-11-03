import React from 'react';

/**
 * PSLogo - Modern Luxury Interlocking Monogram (P + S)
 * Styled in the portfolio's signature color palette:
 * - Ivory / Pure White (#FFF7ED / #FFFFFF) for 'P'
 * - Radiant Burnt Orange (#EA580C / #FB923C / #C2410C) for ribbon 'S'
 * - Charcoal (#292524 / #1C1917) luxury badge with subtle Burnt Orange ember rim
 */
export default function PSLogo({ 
  className = "w-11 h-11",
  colorTheme = "orange", // 'orange' (Portfolio Burnt Orange) | 'reference' (Sage Slate)
  withBadge = true 
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={`${className} select-none drop-shadow-md group-hover:scale-105 transition-all duration-300 flex-shrink-0`}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Pankaj Suthar Monogram PS Logo"
    >
      <defs>
        {/* Charcoal & Warm Obsidian Radial Background (Matching Portfolio #292524) */}
        <radialGradient id="psBadgeBg" cx="50%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#3A3430" />
          <stop offset="55%" stopColor="#292524" />
          <stop offset="100%" stopColor="#191615" />
        </radialGradient>

        {/* Signature Burnt Orange Satin Ribbon Gradient */}
        <linearGradient id="psRibbonOrange" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FDBA74" />
          <stop offset="25%" stopColor="#FB923C" />
          <stop offset="65%" stopColor="#EA580C" />
          <stop offset="100%" stopColor="#C2410C" />
        </linearGradient>

        {/* Sage / Slate Alternative */}
        <linearGradient id="psRibbonSage" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A3BBB8" />
          <stop offset="45%" stopColor="#8BA29E" />
          <stop offset="100%" stopColor="#6E8884" />
        </linearGradient>

      </defs>

      {/* Luxury Charcoal Badge with Warm Burnt Orange Accent Rim */}
      {withBadge && (
        <>
          <rect
            x="2"
            y="2"
            width="96"
            height="96"
            rx="22"
            fill="url(#psBadgeBg)"
            stroke="#EA580C"
            strokeOpacity="0.4"
            strokeWidth="1.5"
            className="group-hover:stroke-opacity-80 transition-all duration-300"
          />
          {/* Subtle Inner Highlight Ring */}
          <rect
            x="3.5"
            y="3.5"
            width="93"
            height="93"
            rx="20.5"
            fill="none"
            stroke="#FFFFFF"
            strokeOpacity="0.08"
            strokeWidth="0.8"
          />
        </>
      )}

      {/* Monogram Group */}
      <g>
        {/* 1. Roman Serif Vertical Stem of 'P' (Pure White / Ivory) */}
        <path
          d="M 33.5 24 
             H 43.5 
             V 26.5 
             C 43 27.5 43 29 43 31 
             V 59 
             C 43 61.5 43 63 44.5 66 
             H 33.5 
             C 33.5 63.5 34.5 61 36 59 
             V 31 
             C 34.5 29 33.5 26.5 33.5 24 Z"
          fill="#FFFFFF"
        />

        {/* 2. Detached Crescent Moon Bowl of 'P' (Pure White / Ivory) */}
        <path
          d="M 53.8 24 
             C 58 24 63.5 28 63.5 34.5 
             C 63.5 40.5 59 44 53 43.5 
             C 56.8 39.5 57.2 29.5 53.8 24 Z"
          fill="#FFFFFF"
        />

        {/* 3. Graceful Flowing Ribbon 'S' in Portfolio Signature Burnt Orange */}
        <path
          d="M 29.5 29.5 
             C 26.5 34 27 40.5 31.5 46.5 
             C 36 52 44.5 54.5 52.5 57 
             C 54.5 60 53.5 63 48.5 66 
             C 52 61.8 51.5 57.5 46.5 54 
             C 41.5 50 35 45.5 33 39.5 
             C 31.5 35 30.5 32 29.5 29.5 Z"
          fill={colorTheme === 'reference' ? "url(#psRibbonSage)" : "url(#psRibbonOrange)"}
        />
      </g>
    </svg>
  );
}
