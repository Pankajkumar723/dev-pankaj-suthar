import React from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Sparkles, 
  Languages, 
  CheckCircle2, 
  Award, 
  Calendar, 
  MapPin, 
  Building2,
  Clock,
  MessageSquare,
  Brain,
  ShieldCheck
} from './Icons';
import { education, keyStrengths, languagesSpoken } from '../data/portfolioData';

export default function Education() {
  const valueIcons = [Clock, MessageSquare, Brain, ShieldCheck];

  const coursework = [
    { title: 'Data Structures & Algorithms', tag: 'Core CS' },
    { title: 'Database Management Systems (DBMS / SQL)', tag: 'Databases' },
    { title: 'Object-Oriented Programming (OOP / Java / C++)', tag: 'Programming' },
    { title: 'Modern Web Development & Scripting', tag: 'Web Technologies' },
    { title: 'Operating Systems & System Architecture', tag: 'Systems' },
    { title: 'Computer Networks & Security Basics', tag: 'Networking' },
  ];

  return (
    <section id="education" className="scroll-mt-24 py-20 md:py-28 px-4 md:px-8 relative bg-[#FAF5EF] dark:bg-[#1C1917]/50 border-t border-[#D6D3D1]/60 dark:border-[#D6D3D1]/20">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#D6D3D1] dark:border-[#D6D3D1]/20 pb-6 mb-12">
          <div>
            <span className="font-mono text-xs text-[#EA580C] uppercase tracking-wider block mb-1 font-semibold">
              (04) Academic Foundation &amp; Values
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl text-[#292524] dark:text-[#FFF7ED] tracking-tight">
              Education &amp; Core Values
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#78716C] dark:text-[#A8A29E] max-w-md font-sans leading-relaxed">
            Theoretical computer science foundations blended with relentless work ethics, agile problem-solving, and multilingual communication.
          </p>
        </div>

        {/* Top Feature: Formal Academic Degree Showcase */}
        <div className="editorial-card rounded-3xl p-6 sm:p-10 bg-[#FFFFFF] dark:bg-[#292524] border border-[#D6D3D1] dark:border-[#D6D3D1]/20 shadow-md shadow-[#292524]/5 mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Degree Summary (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EA580C]/10 border border-[#EA580C]/20 text-xs font-mono font-semibold text-[#EA580C]">
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>Graduated / Formal Degree</span>
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#FFF7ED] dark:bg-[#1C1917] border border-[#D6D3D1] dark:border-[#D6D3D1]/30 text-xs font-mono text-[#78716C] dark:text-[#A8A29E]">
                    <Calendar className="w-3 h-3 text-[#EA580C]" />
                    <span>Session: {education.duration}</span>
                  </span>
                </div>

                {/* Degree Title */}
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#292524] dark:text-[#FFF7ED] tracking-tight mb-1">
                  {education.degree}
                </h3>

                {/* Full Form Explicit Display */}
                <div className="inline-block px-3 py-1 rounded-lg bg-[#EA580C]/10 border border-[#EA580C]/20 text-xs sm:text-sm font-mono font-bold text-[#EA580C] mb-4">
                  Full Form: {education.fullDegree}
                </div>

                {/* College & University Info */}
                <div className="space-y-2 mb-6 text-xs sm:text-sm text-[#78716C] dark:text-[#A8A29E]">
                  <div className="flex items-center gap-2 text-[#292524] dark:text-[#FFF7ED] font-semibold">
                    <Building2 className="w-4 h-4 text-[#EA580C] flex-shrink-0" />
                    <span>{education.college}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#EA580C] flex-shrink-0" />
                    <span>Affiliated with {education.university}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#78716C] dark:text-[#A8A29E] leading-relaxed font-sans mb-6 pt-4 border-t border-[#D6D3D1]/60 dark:border-[#D6D3D1]/20">
                  {education.focus}
                </p>
              </div>

              {/* Status Indicator */}
              <div className="flex items-center gap-2 pt-2">
                <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
                <span className="font-mono text-xs text-[#22C55E] font-semibold">
                  Successfully Completed (2022 – 2025)
                </span>
              </div>
            </div>

            {/* Coursework & Competencies (5 cols) */}
            <div className="lg:col-span-5 bg-[#FFF7ED] dark:bg-[#1C1917] rounded-2xl p-5 sm:p-6 border border-[#D6D3D1] dark:border-[#D6D3D1]/30">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-4 h-4 text-[#EA580C]" />
                <h4 className="font-display font-bold text-sm text-[#292524] dark:text-[#FFF7ED]">
                  Key Academic Coursework
                </h4>
              </div>

              <div className="space-y-2.5">
                {coursework.map((course, idx) => (
                  <div
                    key={idx}
                    className="flex items-start justify-between gap-2 p-2.5 rounded-xl bg-[#FFFFFF] dark:bg-[#292524] border border-[#D6D3D1]/80 dark:border-[#D6D3D1]/20 text-xs"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#EA580C] flex-shrink-0" />
                      <span className="font-medium text-[#292524] dark:text-[#FFF7ED] leading-tight">
                        {course.title}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#EA580C]/10 text-[#EA580C] font-semibold flex-shrink-0">
                      {course.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Split: Core Values (8 cols) + Multilingual Communication (4 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Engineering Core Values (8 cols) */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#EA580C]" />
                <h3 className="font-display font-bold text-lg text-[#292524] dark:text-[#FFF7ED]">
                  Professional Engineering Values
                </h3>
              </div>
              <span className="font-mono text-xs text-[#78716C] dark:text-[#A8A29E]">
                Work Ethics &amp; Mindset
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {keyStrengths.map((str, sIdx) => {
                const IconComponent = valueIcons[sIdx % valueIcons.length];
                return (
                  <div
                    key={sIdx}
                    className="editorial-card rounded-2xl p-5 bg-[#FFFFFF] dark:bg-[#292524] border border-[#D6D3D1] dark:border-[#D6D3D1]/20 hover:border-[#EA580C] transition-colors group"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-9 h-9 rounded-xl bg-[#FFF7ED] dark:bg-[#1C1917] border border-[#D6D3D1] dark:border-[#D6D3D1]/30 flex items-center justify-center text-[#EA580C] group-hover:scale-110 transition-transform">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className="font-mono text-xs font-bold text-[#EA580C]">
                        0{sIdx + 1}.
                      </span>
                    </div>

                    <h4 className="font-display font-bold text-base text-[#292524] dark:text-[#FFF7ED] mb-1.5 group-hover:text-[#EA580C] transition-colors">
                      {str.title}
                    </h4>

                    <p className="text-xs text-[#78716C] dark:text-[#A8A29E] leading-relaxed font-sans">
                      {str.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Multilingual Communication & Practical Edge (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            {/* Languages Card */}
            <div className="editorial-card rounded-2xl p-5 sm:p-6 bg-[#FFFFFF] dark:bg-[#292524] border border-[#D6D3D1] dark:border-[#D6D3D1]/20">
              <div className="flex items-center gap-2 mb-4">
                <Languages className="w-4 h-4 text-[#EA580C]" />
                <h3 className="font-display font-bold text-base text-[#292524] dark:text-[#FFF7ED]">
                  Languages &amp; Communication
                </h3>
              </div>

              <div className="space-y-2.5">
                {languagesSpoken.map((lang, lIdx) => (
                  <div
                    key={lIdx}
                    className="flex justify-between items-center p-3 rounded-xl bg-[#FFF7ED] dark:bg-[#1C1917] border border-[#D6D3D1] dark:border-[#D6D3D1]/30 text-xs"
                  >
                    <span className="font-semibold text-[#292524] dark:text-[#FFF7ED]">
                      {lang.lang}
                    </span>
                    <span className="font-mono text-[11px] text-[#EA580C] font-semibold">
                      {lang.proficiency}
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-[11px] text-[#78716C] dark:text-[#A8A29E] mt-4 pt-3 border-t border-[#D6D3D1]/60 dark:border-[#D6D3D1]/20">
                Seamless daily collaboration with regional teams in Gujarat and Rajasthan, as well as national and global engineering teams in English.
              </p>
            </div>

            {/* Continuous Learning Callout */}
            <div className="rounded-2xl p-5 sm:p-6 bg-[#292524] text-[#FFF7ED] border border-[#EA580C]/40 shadow-lg">
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#EA580C]/20 border border-[#EA580C]/30 text-[#EA580C] font-mono text-[10px] font-bold uppercase tracking-wider mb-2">
                Continuous Growth
              </span>
              <h4 className="font-display font-bold text-base mb-1.5 leading-snug">
                Beyond Academic Theory
              </h4>
              <p className="text-xs text-[#D6D3D1] leading-relaxed mb-4">
                Supplemented university coursework with 2+ years of production experience shipping modern React, Next.js, NestJS, and cloud infrastructure.
              </p>
              <a
                href="#projects"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[#EA580C] hover:text-[#F97316] font-semibold transition-colors"
              >
                <span>Explore Featured Projects</span>
                <span>→</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
