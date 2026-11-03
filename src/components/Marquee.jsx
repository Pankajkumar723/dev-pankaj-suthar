import React from 'react';

export default function Marquee() {
  const items = [
    'DevOps Technologies',
    'Next.js',
    'NestJS',
    'React.js',
    'Node.js',
    'Express.js',
    'PostgreSQL',
    'Prisma ORM',
    'Supabase',
    'MongoDB',
    'Redux Toolkit',
    'TanStack Query',
    'GraphQL',
    'Docker',
    'RESTful APIs',
    'Tailwind CSS',
    'Full Stack Developer',
  ];

  return (
    <div className="relative w-full py-3.5 bg-[#292524] border-y border-[#D6D3D1] overflow-hidden select-none">
      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
        {[...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center gap-8">
            <span className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-[#FFF7ED] hover:text-[#EA580C] transition-colors">
              {item}
            </span>
            <span className="text-[#EA580C] text-xs">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
