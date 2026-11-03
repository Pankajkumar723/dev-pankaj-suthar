import React, { useState, useEffect } from 'react';
import { ArrowDownRight, Zap, Terminal, FileText, Download } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  // Animated Typewriter / Rotating Title
  const roles = [
    'Full Stack Developer',
    'Next.js & NestJS Specialist',
    'MERN & PostgreSQL Architect',
  ];
  
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState(roles[0]);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = roles[currentRoleIndex];
    let timeout;

    if (!isDeleting) {
      if (displayedText.length < currentFullText.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentFullText.slice(0, displayedText.length + 1));
        }, 85);
      } else {
        // Pause at full word (allow initial page load to complete with 0 main thread interruptions)
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 5000);
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(currentFullText.slice(0, displayedText.length - 1));
        }, 45);
      } else {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentRoleIndex]);

  return (
    <section className="relative min-h-[90vh] pt-28 sm:pt-36 pb-16 px-4 md:px-8 flex flex-col justify-center overflow-hidden">
      {/* Background Subtle Warm Editorial Glow with subtle pulse */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(234,88,12,0.12)_0%,rgba(234,88,12,0)_70%)] rounded-full pointer-events-none animate-shimmer" />
      <div className="absolute top-1/3 right-1/4 w-[350px] h-[250px] bg-[radial-gradient(ellipse_at_center,rgba(234,88,12,0.06)_0%,rgba(234,88,12,0)_70%)] rounded-full pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04] bg-[linear-gradient(to_right,#292524_1px,transparent_1px),linear-gradient(to_bottom,#292524_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]" />

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        {/* Main Heading with Animated Elements */}
        <div className="relative">
          {/* Rotating Stamp with Floating Animation */}
          <div className="hidden lg:block absolute -top-4 right-0 z-20 animate-float">
            <div className="relative w-28 h-28">
              <svg
                viewBox="0 0 200 200"
                className="w-full h-full animate-spin-slow origin-center"
              >
                <path
                  id="circlePathHero"
                  d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                  fill="none"
                />
                <text className="font-mono text-[11px] font-bold uppercase fill-[#EA580C] tracking-[0.22em]">
                  <textPath href="#circlePathHero" startOffset="0%">
                    ★ FULL STACK DEV ★ 2 YEARS EXP ★ PANKAJ SUTHAR ★
                  </textPath>
                </text>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-[#EA580C]/15 border border-[#EA580C]/30 text-[#EA580C] flex items-center justify-center shadow-md">
                  <Terminal className="w-5 h-5 text-[#EA580C]" />
                </div>
              </div>
            </div>
          </div>

          {/* Line 1: Greeting + Animated Waving Hand */}
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-[#292524] dark:text-[#FFF7ED] tracking-tight leading-[1.1] mb-2 flex items-center flex-wrap">
            <span>Hi, I'm Pankaj Suthar.</span>
            <span className="animate-wave ml-3 text-3xl sm:text-5xl select-none" role="img" aria-label="wave">
              👋
            </span>
          </h1>

          {/* Line 2: Animated Role (Web Architect REMOVED, Animated Typewriter ADDED) */}
          <div className="min-h-[2.8rem] sm:min-h-[3.6rem] md:min-h-[4.2rem] flex items-center mb-6">
            <h2 className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl tracking-tight leading-[1.1] text-[#EA580C] flex items-center flex-wrap">
              <span>{displayedText}</span>
              {/* Blinking Cursor */}
              <span className="inline-block w-1 sm:w-1.5 h-7 sm:h-10 md:h-12 bg-[#EA580C] ml-1.5 rounded-full animate-cursor align-middle" />
            </h2>
          </div>
        </div>

        {/* Objective & Description */}
        <p className="text-sm sm:text-base md:text-lg text-[#78716C] dark:text-[#D6D3D1] font-sans leading-relaxed max-w-2xl mb-8">
          {personalInfo.objective}
        </p>

        {/* Tech Badges Row with Subtle Interactive Hover */}
        <div className="flex flex-wrap gap-2 mb-10">
          {['React.js', 'Next.js', 'NestJS', 'Node.js', 'PostgreSQL', 'Prisma ORM', 'MongoDB', 'Redux', 'Docker'].map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-lg bg-[#FFFFFF] dark:bg-[#1C1917] border border-[#D6D3D1] dark:border-[#D6D3D1]/30 text-xs font-mono font-medium text-[#292524] dark:text-[#FFF7ED] shadow-xs hover:border-[#EA580C] hover:text-[#EA580C] hover:-translate-y-0.5 transition-all cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          <a
            href="#projects"
            className="editorial-btn inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#EA580C] hover:bg-[#C2410C] text-white font-medium text-sm shadow-lg shadow-[#EA580C]/25"
          >
            <span>View Featured Projects</span>
            <ArrowDownRight className="w-4 h-4" />
          </a>

          <a
            href={personalInfo.resumeUrl}
            download="Pankaj_Suthar_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="editorial-btn inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#292524] dark:bg-[#EA580C] hover:bg-[#EA580C] dark:hover:bg-[#C2410C] text-[#FFF7ED] font-medium text-sm shadow-md transition-colors group"
            title="Download Pankaj Suthar's Resume (PDF)"
          >
            <FileText className="w-4 h-4 text-[#EA580C] dark:text-[#FFF7ED] group-hover:text-white transition-colors" />
            <span>Download Resume</span>
            <Download className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
          </a>

          <a
            href={personalInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="editorial-btn inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#FFFFFF] dark:bg-[#1C1917] hover:bg-[#FFF7ED] dark:hover:bg-[#292524] border border-[#D6D3D1] dark:border-[#D6D3D1]/30 text-[#292524] dark:text-[#FFF7ED] font-medium text-sm shadow-xs"
          >
            <Zap className="w-4 h-4 text-[#EA580C]" />
            <span>Connect on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
