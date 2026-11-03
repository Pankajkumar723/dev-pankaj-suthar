import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, X } from './Icons';
import { projects } from '../data/portfolioData';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="scroll-mt-24 py-20 md:py-28 px-4 md:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#D6D3D1] dark:border-[#D6D3D1]/20 pb-6 mb-12">
          <div>
            <span className="font-mono text-xs text-[#EA580C] uppercase tracking-wider block mb-1 font-semibold">
              (01) Portfolio Showcase
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl text-[#292524] dark:text-[#FFF7ED] tracking-tight">
              Featured Projects
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#78716C] dark:text-[#D6D3D1] max-w-md font-sans">
            Production builds engineered at Vaxa Infotech alongside full stack MERN web applications.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((proj, idx) => (
            <div
              key={proj.id}
              onClick={() => setSelectedProject(proj)}
              className="editorial-card group rounded-2xl p-6 sm:p-8 cursor-pointer flex flex-col justify-between bg-[#FFFFFF] dark:bg-[#292524] border border-[#D6D3D1] dark:border-[#D6D3D1]/20"
            >
              <div>
                <div className="flex justify-between items-start gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#EA580C] px-2.5 py-0.5 rounded-md bg-[#EA580C]/10 border border-[#EA580C]/20">
                      0{idx + 1}
                    </span>
                    <span className="font-mono text-xs uppercase tracking-wider text-[#78716C] dark:text-[#A8A29E]">
                      {proj.category}
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#EA580C]/10 border border-[#EA580C]/20 text-[#EA580C] font-mono text-[11px] font-medium">
                    <Sparkles className="w-3 h-3" />
                    <span>{proj.stats}</span>
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl sm:text-2xl text-[#292524] dark:text-[#FFF7ED] group-hover:text-[#EA580C] transition-colors tracking-tight mb-2">
                  {proj.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#78716C] dark:text-[#D6D3D1] leading-relaxed mb-6 font-sans">
                  {proj.tagline}
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-[#D6D3D1]/60 dark:border-[#D6D3D1]/20 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {proj.tech.slice(0, 4).map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded-md bg-[#FFF7ED] dark:bg-[#1C1917] text-[11px] font-mono text-[#292524] dark:text-[#FFF7ED] border border-[#D6D3D1] dark:border-[#D6D3D1]/30"
                    >
                      {t}
                    </span>
                  ))}
                  {proj.tech.length > 4 && (
                    <span className="px-1.5 py-0.5 text-[11px] font-mono text-[#EA580C] font-semibold">
                      +{proj.tech.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#EA580C] group-hover:translate-x-1 transition-transform">
                  <span>Architecture</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Popover */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#292524]/75 dark:bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
            <div className="relative w-full max-w-xl bg-[#FFFFFF] dark:bg-[#292524] border-2 border-[#EA580C] rounded-2xl p-6 sm:p-8 shadow-2xl text-[#292524] dark:text-[#FFF7ED] max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-1.5 rounded-lg bg-[#FFF7ED] dark:bg-[#1C1917] hover:bg-[#EA580C] hover:text-white text-[#78716C] dark:text-[#FFF7ED] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-3 flex items-center gap-2 font-mono text-xs text-[#EA580C]">
                <span>{selectedProject.category}</span>
                <span>•</span>
                <span className="font-semibold">{selectedProject.stats}</span>
              </div>

              <h3 className="font-display font-bold text-2xl text-[#292524] dark:text-[#FFF7ED] tracking-tight mb-3">
                {selectedProject.title}
              </h3>

              <p className="text-sm text-[#78716C] dark:text-[#D6D3D1] font-sans leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              <div className="mb-6">
                <h4 className="font-mono text-xs uppercase tracking-wider text-[#292524] dark:text-[#FFF7ED] mb-2 font-bold">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-[#FFF7ED] dark:bg-[#1C1917] border border-[#D6D3D1] dark:border-[#D6D3D1]/30 text-xs font-mono font-medium text-[#292524] dark:text-[#FFF7ED]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#D6D3D1] dark:border-[#D6D3D1]/20 flex justify-between items-center text-xs font-mono text-[#78716C] dark:text-[#D6D3D1]">
                <span>Pankaj Suthar • Full Stack</span>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-1.5 rounded-lg bg-[#EA580C] hover:bg-[#C2410C] text-white font-sans font-medium text-xs transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
