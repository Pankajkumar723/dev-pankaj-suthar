import React, { useEffect, useState } from 'react';
import { Terminal, Zap } from './Icons';

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsExiting(true);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 200);
          return 100;
        }
        return Math.min(prev + 35, 100);
      });
    }, 20);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col justify-between p-6 md:p-12 bg-[#292524] text-[#FFF7ED] transition-transform duration-250 ease-[cubic-bezier(0.77,0,0.175,1)] ${
        isExiting ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      {/* Top Bar */}
      <div className="flex justify-between items-center text-xs font-mono uppercase tracking-wider text-[#D6D3D1] border-b border-[#D6D3D1]/20 pb-4">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-[#EA580C]" />
          <span className="text-[#FFF7ED] font-semibold">PANKAJ SUTHAR</span>
          <span>•</span>
          <span className="text-[#EA580C]">FULL STACK DEVELOPER</span>
        </div>
        <div className="text-[#D6D3D1]/80">
          2+ YRS EXP // AHMEDABAD
        </div>
      </div>

      {/* Center Editorial Visual */}
      <div className="my-auto flex flex-col items-center justify-center text-center">
        <div className="relative mb-5">
          <div className="w-16 h-16 rounded-2xl bg-[#EA580C]/15 border border-[#EA580C]/30 flex items-center justify-center shadow-lg shadow-[#EA580C]/10">
            <Zap className="w-8 h-8 text-[#EA580C] animate-pulse" />
          </div>
        </div>

        <h1 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-[#FFF7ED] tracking-tight uppercase">
          Distinctive Web Architecture
        </h1>
        <p className="mt-2 text-xs sm:text-sm text-[#D6D3D1] font-mono tracking-wide">
          React.js • Node.js • Express • MongoDB • MySQL
        </p>
      </div>

      {/* Bottom Counter */}
      <div className="border-t border-[#D6D3D1]/20 pt-4">
        <div className="flex justify-between items-center mb-2.5">
          <span className="text-xs font-mono uppercase tracking-wider text-[#D6D3D1]">
            INITIALIZING WORKSPACE
          </span>
          <span className="font-mono font-bold text-lg text-[#EA580C]">
            {progress}%
          </span>
        </div>

        <div className="w-full h-1.5 bg-[#FFF7ED]/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#EA580C] to-[#F97316] transition-all duration-150 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
