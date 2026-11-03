import React from 'react';
import { ArrowUp, ArrowUpRight, FileText, Download } from './Icons';
import { personalInfo } from '../data/portfolioData';
import PSLogo from './PSLogo';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-16 pb-10 px-4 md:px-8 bg-[#292524] text-[#FFF7ED] border-t border-[#D6D3D1]/20 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Callout Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 font-mono text-xs text-[#EA580C] uppercase tracking-wider mb-2 font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#EA580C] animate-pulse" />
            <span>Available for Full-time Roles &amp; Engineering Projects</span>
          </div>

          <h2 className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl text-[#FFF7ED] tracking-tight leading-tight">
            Let's build scalable web applications together.
          </h2>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-y border-[#D6D3D1]/20 py-10 mb-8">
          {/* Bio (5 cols) */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-3 group">
              <PSLogo className="w-10 h-10 flex-shrink-0" />
              <span className="font-display font-bold text-lg text-[#FFF7ED]">
                Pankaj Suthar
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#D6D3D1] font-sans leading-relaxed max-w-sm mb-4">
              Full Stack Developer at DevOps Technologies. Experienced in React.js, Next.js, NestJS, Node.js, Express, PostgreSQL, MongoDB, and scalable enterprise web applications.
            </p>
            <div className="font-mono text-xs text-[#D6D3D1]/80 space-y-1">
              <p>📍 Sanchore, Rajasthan &amp; Ahmedabad, Gujarat, India</p>
              <p>🎓 BCA in Computer Science (2022–2025)</p>
            </div>
          </div>

          {/* Direct Channels (4 cols) */}
          <div className="md:col-span-4 flex flex-col gap-2.5 font-sans text-sm">
            <span className="font-mono text-xs uppercase tracking-wider text-[#EA580C] mb-1 font-semibold">
              Direct Channels
            </span>
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center justify-between text-[#FFF7ED] hover:text-[#EA580C] transition-colors group"
            >
              <span>Email Inbox</span>
              <ArrowUpRight className="w-4 h-4 text-[#D6D3D1] group-hover:text-[#EA580C] transition-colors" />
            </a>
            <a
              href={personalInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between text-[#FFF7ED] hover:text-[#EA580C] transition-colors group"
            >
              <span>WhatsApp Chat</span>
              <ArrowUpRight className="w-4 h-4 text-[#D6D3D1] group-hover:text-[#EA580C] transition-colors" />
            </a>
            <a
              href={`tel:${personalInfo.phone}`}
              className="flex items-center justify-between text-[#FFF7ED] hover:text-[#EA580C] transition-colors group"
            >
              <span>Phone ({personalInfo.phone})</span>
              <ArrowUpRight className="w-4 h-4 text-[#D6D3D1] group-hover:text-[#EA580C] transition-colors" />
            </a>
            <a
              href={personalInfo.resumeUrl}
              download="Pankaj_Suthar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between text-[#EA580C] hover:text-[#F97316] font-semibold transition-colors group pt-1"
            >
              <span className="flex items-center gap-1.5">
                <FileText className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </span>
              <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Socials & Back to Top (3 cols) */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-[#EA580C] block mb-2 font-semibold">
                Profiles
              </span>
              <div className="flex flex-col gap-1 font-mono text-xs">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D6D3D1] hover:text-[#FFF7ED] transition-colors flex items-center gap-1.5 py-2.5 min-h-[44px]"
                  aria-label="Visit Pankaj Suthar's GitHub Profile (opens in new tab)"
                >
                  <span>GitHub Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#EA580C]" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D6D3D1] hover:text-[#FFF7ED] transition-colors flex items-center gap-1.5 py-2.5 min-h-[44px]"
                  aria-label="Visit Pankaj Suthar's LinkedIn Profile (opens in new tab)"
                >
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#EA580C]" />
                </a>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="editorial-btn mt-6 flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#FFF7ED]/10 hover:bg-[#EA580C] text-[#FFF7ED] transition-all text-xs font-medium"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-[#D6D3D1]/80">
          <div>
            © {new Date().getFullYear()} Dev Pankaj Suthar. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Ivory • Charcoal • Burnt Orange</span>
            <span>•</span>
            <span className="text-[#EA580C]">React 19 &amp; Lenis</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
