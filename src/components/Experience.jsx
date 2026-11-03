import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, GraduationCap, Languages, Sparkles, ChevronRight, FileText, Download } from './Icons';
import { workExperience, education, keyStrengths, languagesSpoken, personalInfo } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-20 md:py-28 px-4 md:px-8 relative bg-[#FAF5EF] dark:bg-[#1C1917]/50 border-t border-[#D6D3D1]/60 dark:border-[#D6D3D1]/20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#D6D3D1] dark:border-[#D6D3D1]/20 pb-6 mb-12">
          <div>
            <span className="font-mono text-xs text-[#EA580C] uppercase tracking-wider block mb-1 font-semibold">
              (02) Professional Journey
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl text-[#292524] dark:text-[#FFF7ED] tracking-tight">
              2 Years Experience
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#78716C] dark:text-[#D6D3D1] max-w-md font-sans">
            Full Stack Developer building scalable digital solutions, business automation, and enterprise web applications.
          </p>
        </div>

        {/* Big Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Experience Column (8 cols) */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            {workExperience.map((exp, index) => (
              <div
                key={index}
                className="editorial-card rounded-2xl p-6 sm:p-8 bg-[#FFFFFF] dark:bg-[#292524] border border-[#D6D3D1] dark:border-[#D6D3D1]/20 shadow-sm"
              >
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#EA580C]/10 border border-[#EA580C]/20 text-[#EA580C] text-xs font-mono font-medium mb-1.5">
                      {exp.badge || exp.type}
                    </span>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-[#292524] dark:text-[#FFF7ED] tracking-tight">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium text-[#78716C] dark:text-[#A8A29E] mt-1">
                      <span className="text-[#292524] dark:text-[#FFF7ED] font-semibold">{exp.company}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#EA580C]" />
                        {exp.location}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1 font-mono text-xs text-[#78716C] dark:text-[#A8A29E]">
                        <Calendar className="w-3.5 h-3.5 text-[#EA580C]" />
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <div className="px-3 py-1 rounded-full bg-[#EA580C]/10 border border-[#EA580C]/20 text-[11px] font-medium text-[#EA580C] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C] animate-pulse" />
                    <span>{exp.company}</span>
                  </div>
                </div>

                <p className="text-[#78716C] dark:text-[#D6D3D1] text-xs sm:text-sm leading-relaxed mb-6 font-sans">
                  {exp.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2.5 mb-6">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-[#EA580C] font-semibold">
                    Key Deliverables &amp; Impact:
                  </h4>
                  {exp.highlights.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#292524] dark:text-[#FFF7ED]">
                      <CheckCircle2 className="w-4 h-4 text-[#EA580C] flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed text-[#292524] dark:text-[#FFF7ED]">{point}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-[#292524] dark:text-[#FFF7ED] mb-2 font-semibold">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg bg-[#FFF7ED] dark:bg-[#1C1917] border border-[#D6D3D1] dark:border-[#D6D3D1]/30 text-xs font-mono text-[#292524] dark:text-[#FFF7ED]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Focus Areas (if any) */}
                {exp.focusAreas && (
                  <div className="pt-3 border-t border-[#D6D3D1]/40 dark:border-[#D6D3D1]/20">
                    <h4 className="font-mono text-xs uppercase tracking-wider text-[#EA580C] mb-2 font-semibold">
                      Focus Areas &amp; Solutions:
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.focusAreas.map((area, aIdx) => (
                        <span
                          key={aIdx}
                          className="px-2.5 py-0.5 rounded-md bg-[#EA580C]/10 text-xs font-mono text-[#EA580C] border border-[#EA580C]/20"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Pathway to Education */}
            <div className="editorial-card rounded-2xl p-5 sm:p-6 bg-[#FFFFFF] dark:bg-[#292524] flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-[#D6D3D1] dark:border-[#D6D3D1]/20">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#EA580C]/10 border border-[#EA580C]/20 text-[#EA580C]">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#EA580C] font-bold block">
                    Academic Background
                  </span>
                  <h4 className="font-display font-bold text-sm sm:text-base text-[#292524] dark:text-[#FFF7ED]">
                    {education.degree} ({education.duration})
                  </h4>
                  <p className="font-mono text-xs text-[#78716C] dark:text-[#A8A29E]">
                    {education.fullDegree}
                  </p>
                </div>
              </div>
              <a
                href="#education"
                className="editorial-btn inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#FFF7ED] dark:bg-[#1C1917] hover:bg-[#EA580C] hover:text-white border border-[#D6D3D1] dark:border-[#D6D3D1]/30 text-[#292524] dark:text-[#FFF7ED] text-xs font-semibold transition-colors self-start sm:self-auto"
              >
                <span>View Full Academic Foundation &amp; Values</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Sidebar Column: Strengths & Languages (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            {/* Strengths */}
            <div className="editorial-card rounded-2xl p-6 bg-[#FFFFFF] dark:bg-[#292524] border border-[#D6D3D1] dark:border-[#D6D3D1]/20">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-4 h-4 text-[#EA580C]" />
                <h3 className="font-display font-bold text-base text-[#292524] dark:text-[#FFF7ED]">
                  Core Strengths
                </h3>
              </div>

              <div className="space-y-3">
                {keyStrengths.map((str, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-3 rounded-xl bg-[#FFF7ED] dark:bg-[#1C1917] border border-[#D6D3D1] dark:border-[#D6D3D1]/30"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono text-xs text-[#EA580C] font-bold">0{sIdx + 1}.</span>
                      <h4 className="font-display font-bold text-xs sm:text-sm text-[#292524] dark:text-[#FFF7ED]">
                        {str.title}
                      </h4>
                    </div>
                    <p className="text-[11px] sm:text-xs text-[#78716C] dark:text-[#D6D3D1] leading-relaxed font-sans">
                      {str.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages Card */}
            <div className="editorial-card rounded-2xl p-6 bg-[#FFFFFF] dark:bg-[#292524] border border-[#D6D3D1] dark:border-[#D6D3D1]/20">
              <div className="flex items-center gap-2 mb-3">
                <Languages className="w-4 h-4 text-[#EA580C]" />
                <h3 className="font-display font-bold text-base text-[#292524] dark:text-[#FFF7ED]">
                  Languages
                </h3>
              </div>

              <div className="space-y-2">
                {languagesSpoken.map((lang, lIdx) => (
                  <div
                    key={lIdx}
                    className="flex justify-between items-center p-2.5 rounded-lg bg-[#FFF7ED] dark:bg-[#1C1917] border border-[#D6D3D1] dark:border-[#D6D3D1]/30 text-xs"
                  >
                    <span className="font-semibold text-[#292524] dark:text-[#FFF7ED]">{lang.lang}</span>
                    <span className="font-mono text-[11px] text-[#EA580C] font-semibold">{lang.proficiency}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Opportunity Pitch Card (Bold Charcoal Accent) */}
            <div className="rounded-2xl p-6 bg-[#292524] dark:bg-[#1C1917] border border-[#EA580C]/40 text-[#FFF7ED] shadow-xl">
              <h4 className="font-display font-bold text-lg mb-1.5 leading-snug text-[#FFF7ED]">
                Ready to Contribute
              </h4>
              <p className="text-xs text-[#D6D3D1] mb-4 leading-relaxed">
                2 years hands-on coding, live product deployment, and rapid framework mastery ready for your engineering team.
              </p>
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href="#contact"
                  className="editorial-btn inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#EA580C] hover:bg-[#C2410C] text-white font-medium text-xs shadow-md shadow-[#EA580C]/30 transition-colors"
                >
                  <span>Discuss Opportunities</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href={personalInfo.resumeUrl}
                  download="Pankaj_Suthar_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-btn inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-[#FFF7ED] border border-white/20 font-medium text-xs transition-colors group"
                  title="Download Resume (PDF)"
                >
                  <FileText className="w-3.5 h-3.5 text-[#EA580C]" />
                  <span>Resume</span>
                  <Download className="w-3 h-3 group-hover:translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
