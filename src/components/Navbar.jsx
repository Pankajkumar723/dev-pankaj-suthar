import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Sun, Moon, ArrowUpRight, Zap, Mail, Phone, FileText, Download } from './Icons';
import { personalInfo } from '../data/portfolioData';
import PSLogo from './PSLogo';

export default function Navbar({ isDark, onToggleTheme, onOpenSecret }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const navLinks = [
    { label: 'Featured Projects', href: '#projects', num: '01' },
    { label: 'Work Experience', href: '#experience', num: '02' },
    { label: 'Technical Skills', href: '#skills', num: '03' },
    { label: 'Education & Values', href: '#education', num: '04' },
    { label: 'Contact Journey', href: '#contact', num: '05' },
  ];

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleLinkClick = (href) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      if (window.lenis) {
        window.lenis.scrollTo(element, { offset: -20 });
      } else {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-3.5">
      <div className="max-w-6xl mx-auto relative flex items-center justify-between bg-[#FFF7ED]/95 dark:bg-[#292524]/95 backdrop-blur-md border border-[#D6D3D1] dark:border-[#D6D3D1]/20 rounded-2xl px-4 sm:px-6 py-2 shadow-md shadow-[#292524]/5">
        
        {/* Left: Modern Luxury Interlocking Monogram (P + S) + Name */}
        <a href="#" className="flex items-center gap-3 group">
          {/* Modern Luxury Monogram Badge */}
          <PSLogo className="w-10 h-10 sm:w-11 sm:h-11 flex-shrink-0" />

          {/* Name Display */}
          <div className="flex flex-col text-left">
            <span className="font-display font-extrabold text-base sm:text-lg tracking-tight text-[#292524] dark:text-[#FFF7ED] group-hover:text-[#EA580C] transition-colors leading-tight">
              Pankaj Suthar
            </span>
          </div>
        </a>

        {/* Right: Dark/Light Mode Button & Compact Menu Toggle */}
        <div className="flex items-center gap-2 sm:gap-2.5" ref={menuRef}>
          {/* Download Resume Button in Navbar */}
          <a
            href={personalInfo.resumeUrl}
            download="Pankaj_Suthar_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="editorial-btn hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border border-[#EA580C]/40 bg-[#EA580C]/10 hover:bg-[#EA580C] text-[#EA580C] hover:text-white transition-all shadow-xs group"
            title="Download Resume (PDF)"
          >
            <FileText className="w-3.5 h-3.5" />
            <span className="font-mono text-[11px] uppercase tracking-wider font-bold">Resume</span>
            <Download className="w-3 h-3 group-hover:translate-y-0.5 transition-transform" />
          </a>

          {/* Dark / Light Mode Switcher */}
          <button
            onClick={onToggleTheme}
            className="editorial-btn flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold border border-[#D6D3D1] dark:border-[#D6D3D1]/30 bg-[#FFFFFF] dark:bg-[#1C1917] hover:bg-[#FFF7ED] dark:hover:bg-[#292524] text-[#292524] dark:text-[#FFF7ED] transition-colors shadow-xs"
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            aria-label="Toggle Dark/Light Mode"
          >
            {isDark ? (
              <>
                <Sun className="w-4 h-4 text-[#F97316] animate-spin-slow" />
                <span className="hidden sm:inline font-mono text-[11px] uppercase tracking-wider font-bold">
                  Light
                </span>
              </>
            ) : (
              <>
                <Moon className="w-4 h-4 text-[#EA580C]" />
                <span className="hidden sm:inline font-mono text-[11px] uppercase tracking-wider font-bold">
                  Dark
                </span>
              </>
            )}
          </button>

          {/* Secret Room Trigger */}
          <button
            onClick={onOpenSecret}
            className="editorial-btn hidden sm:flex items-center justify-center w-8 h-8 rounded-xl border border-[#D6D3D1] dark:border-[#D6D3D1]/30 bg-[#FFFFFF] dark:bg-[#1C1917] hover:bg-[#EA580C] hover:text-white text-[#292524] dark:text-[#FFF7ED] transition-colors"
            title="Dev Secret Room"
          >
            <Zap className="w-3.5 h-3.5" />
          </button>

          {/* Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="editorial-btn flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#292524] dark:bg-[#EA580C] hover:bg-[#EA580C] dark:hover:bg-[#C2410C] text-[#FFF7ED] font-semibold text-xs shadow-md transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X className="w-3.5 h-3.5" /> : <Menu className="w-3.5 h-3.5" />}
            <span>{isOpen ? 'Close' : 'Menu'}</span>
          </button>

          {/* Compact Dropdown / Popover Menu */}
          {isOpen && (
            <div className="absolute top-full right-4 sm:right-6 mt-3 w-72 sm:w-80 bg-[#FFFFFF] dark:bg-[#1C1917] text-[#292524] dark:text-[#FFF7ED] border border-[#D6D3D1] dark:border-[#D6D3D1]/30 rounded-2xl p-4 shadow-2xl shadow-[#292524]/20 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
              
              <div className="flex justify-between items-center pb-2.5 mb-2 border-b border-[#D6D3D1]/60 dark:border-[#D6D3D1]/20">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#78716C] dark:text-[#A8A29E] font-semibold">
                  Navigation Menu
                </span>
                <span className="text-[10px] font-mono text-[#EA580C] font-bold">
                  Pankaj Suthar
                </span>
              </div>

              {/* Prominent Resume Download Button inside dropdown */}
              <a
                href={personalInfo.resumeUrl}
                download="Pankaj_Suthar_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-[#EA580C] to-[#C2410C] hover:from-[#C2410C] hover:to-[#9A3412] text-white font-medium text-xs shadow-md transition-all mb-3 group"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-display font-bold text-xs leading-tight">Download Resume</span>
                    <span className="font-mono text-[10px] text-white/80">PDF Document (114 KB)</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[10px] font-mono font-bold bg-white/20 px-2 py-1 rounded-md">
                  <span>GET PDF</span>
                  <Download className="w-3 h-3 group-hover:translate-y-0.5 transition-transform" />
                </div>
              </a>

              {/* Compact Nav Links */}
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.num}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className="group flex items-center justify-between px-3 py-2 rounded-xl hover:bg-[#FFF7ED] dark:hover:bg-[#292524] text-xs sm:text-sm font-medium transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-[11px] text-[#EA580C] font-semibold">
                        {link.num}
                      </span>
                      <span className="text-[#292524] dark:text-[#FFF7ED] group-hover:text-[#EA580C] transition-colors font-semibold">
                        {link.label}
                      </span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#78716C] group-hover:text-[#EA580C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                ))}
              </div>

              {/* Quick Contact Bar inside compact menu */}
              <div className="mt-3 pt-3 border-t border-[#D6D3D1]/60 dark:border-[#D6D3D1]/20 flex flex-col gap-1.5 text-[11px] font-mono text-[#78716C] dark:text-[#A8A29E]">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-2 hover:text-[#EA580C] transition-colors"
                >
                  <Mail className="w-3 h-3 text-[#EA580C]" />
                  <span>{personalInfo.email}</span>
                </a>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center gap-2 hover:text-[#EA580C] transition-colors"
                >
                  <Phone className="w-3 h-3 text-[#EA580C]" />
                  <span>{personalInfo.phone}</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
