import React, { useState } from 'react';
import { Code2, Server, Database, Cloud, Layers } from './Icons';
import { skillsData } from '../data/portfolioData';
import TechIcon from './TechIcon';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Technologies', icon: Layers },
    { id: 'frontend', label: 'Frontend Development', icon: Code2 },
    { id: 'backend', label: 'Backend Development', icon: Server },
    { id: 'databases', label: 'Database & Tools', icon: Database },
    { id: 'deployment', label: 'Cloud & DevOps', icon: Cloud },
  ];

  const getFilteredSkills = () => {
    if (activeCategory === 'all') {
      return [
        ...skillsData.frontend.map(s => ({ ...s, group: 'Frontend' })),
        ...skillsData.backend.map(s => ({ ...s, group: 'Backend' })),
        ...skillsData.databases.map(s => ({ ...s, group: 'Database & Tools' })),
        ...skillsData.deployment.map(s => ({ ...s, group: 'Cloud & DevOps' })),
      ];
    }
    const groupName = 
      activeCategory === 'frontend' ? 'Frontend' :
      activeCategory === 'backend' ? 'Backend' :
      activeCategory === 'databases' ? 'Database & Tools' : 'Cloud & DevOps';
      
    return skillsData[activeCategory].map(s => ({ ...s, group: groupName }));
  };

  return (
    <section id="skills" className="scroll-mt-24 py-20 md:py-28 px-4 md:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#D6D3D1] dark:border-[#D6D3D1]/20 pb-6 mb-10">
          <div>
            <span className="font-mono text-xs text-[#EA580C] uppercase tracking-wider block mb-1 font-semibold">
              (03) Technical Arsenal
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl text-[#292524] dark:text-[#FFF7ED] tracking-tight">
              Skills &amp; Capabilities
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#78716C] dark:text-[#D6D3D1] max-w-md font-sans">
            Full Stack proficiency spanning front-of-the-frontend UI craft, server-side REST APIs, and database architecture.
          </p>
        </div>

        {/* Filter Category Pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => {
            const IconComponent = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`editorial-btn flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                  isActive
                    ? 'bg-[#EA580C] text-white shadow-md shadow-[#EA580C]/25'
                    : 'bg-[#FFFFFF] dark:bg-[#292524] hover:bg-[#FFF7ED] dark:hover:bg-[#1C1917] text-[#292524] dark:text-[#FFF7ED] border border-[#D6D3D1] dark:border-[#D6D3D1]/20'
                }`}
              >
                <IconComponent className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-[#EA580C]'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid with Authentic Brand / Language Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {getFilteredSkills().map((skill, index) => (
            <div
              key={index}
              className="editorial-card rounded-2xl p-5 flex flex-col justify-between bg-[#FFFFFF] dark:bg-[#292524] border border-[#D6D3D1] dark:border-[#D6D3D1]/20 hover:border-[#EA580C] transition-all group"
            >
              <div>
                {/* Top Row: Tech Icon + Tag Badge */}
                <div className="flex justify-between items-center mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF7ED] dark:bg-[#1C1917] border border-[#D6D3D1] dark:border-[#D6D3D1]/30 flex items-center justify-center p-2 shadow-xs group-hover:scale-110 group-hover:border-[#EA580C]/40 transition-transform">
                    <TechIcon name={skill.name} className="w-6 h-6 object-contain" />
                  </div>

                  <span className="px-2 py-0.5 rounded-md bg-[#EA580C]/10 border border-[#EA580C]/20 text-[10px] font-mono font-semibold text-[#EA580C]">
                    {skill.tag}
                  </span>
                </div>

                {/* Skill Name */}
                <h3 className="font-display font-bold text-base sm:text-lg text-[#292524] dark:text-[#FFF7ED] group-hover:text-[#EA580C] transition-colors tracking-tight mb-1">
                  {skill.name}
                </h3>
                <span className="font-mono text-[11px] text-[#78716C] dark:text-[#A8A29E] block mb-2">
                  {skill.group}
                </span>
              </div>

              {/* Proficiency Bar */}
              <div className="mt-4 pt-3 border-t border-[#D6D3D1]/60 dark:border-[#D6D3D1]/20">
                <div className="flex justify-between items-center text-[11px] font-mono mb-1.5">
                  <span className="text-[#78716C] dark:text-[#A8A29E]">Proficiency</span>
                  <span className="font-semibold text-[#EA580C]">{skill.level}</span>
                </div>
                <div className="w-full h-1.5 bg-[#FFF7ED] dark:bg-[#1C1917] border border-[#D6D3D1] dark:border-[#D6D3D1]/30 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#EA580C] to-[#F97316] rounded-full transition-all duration-500 ease-out"
                    style={{ width: skill.level }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-10 p-5 rounded-2xl bg-[#FFFFFF] dark:bg-[#292524] border border-[#D6D3D1] dark:border-[#D6D3D1]/20 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#EA580C] animate-ping" />
            <span className="font-semibold text-xs sm:text-sm text-[#292524] dark:text-[#FFF7ED]">
              Core Stack: Next.js • React.js • NestJS • Node.js • PostgreSQL • Prisma • MongoDB
            </span>
          </div>
          <span className="font-mono text-xs text-[#EA580C] font-semibold">
            2+ Years Continuous Experience
          </span>
        </div>
      </div>
    </section>
  );
}
