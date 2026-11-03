import React, { useState } from 'react';
import { X, Zap, Terminal, Sparkles, Lock, Unlock } from './Icons';
import confetti from 'canvas-confetti';

export default function SecretDoorModal({ isOpen, onClose }) {
  const [doorOpen, setDoorOpen] = useState(false);

  if (!isOpen) return null;

  const handleDoorClick = () => {
    setDoorOpen(!doorOpen);
    if (!doorOpen) {
      confetti({
        particleCount: 80,
        spread: 65,
        origin: { y: 0.5 },
        colors: ['#EA580C', '#F97316', '#292524', '#FFF7ED', '#FFFFFF'],
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      {/* Darker, richer modal card container */}
      <div className="relative w-full max-w-md bg-[#141211] border border-[#EA580C]/40 rounded-3xl p-6 sm:p-8 shadow-2xl text-[#FFF7ED] text-center overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-xl bg-white/5 hover:bg-[#EA580C] text-[#D6D3D1] hover:text-white transition-colors"
          title="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Badge */}
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EA580C]/15 border border-[#EA580C]/30 text-[#EA580C] font-mono text-[11px] font-semibold uppercase mb-3">
          <Sparkles className="w-3 h-3" />
          <span>Interactive Dev Easter Egg</span>
        </span>

        <h3 className="font-display font-extrabold text-2xl uppercase tracking-tight mb-1 text-white">
          Developer Secret Room
        </h3>
        <p className="text-xs text-[#A8A29E] max-w-xs mx-auto mb-6 font-sans">
          Click the door below to unlock the inner developer chamber &amp; philosophy.
        </p>

        {/* 3D Perspective Interactive Door Chamber */}
        <div
          className="relative w-48 h-64 mx-auto perspective-[800px] cursor-pointer group mb-6 select-none"
          onClick={handleDoorClick}
        >
          {/* Deep Dark Chamber Room (Inside) */}
          <div className="w-full h-full rounded-2xl bg-[#090807] border border-[#EA580C]/30 flex flex-col items-center justify-center p-4 relative overflow-hidden shadow-inner">
            
            {/* Subtle Amber Glow behind mascot */}
            <div className="absolute inset-0 bg-radial from-[#EA580C]/15 via-transparent to-transparent pointer-events-none" />

            {/* Inner Content - ONLY visible when door swings open, completely hidden when closed to prevent overlapping */}
            <div
              className={`relative z-10 flex flex-col items-center transition-all duration-500 ease-out ${
                doorOpen
                  ? 'opacity-100 scale-100 translate-y-0'
                  : 'opacity-0 scale-90 translate-y-2 pointer-events-none'
              }`}
            >
              {/* Mascot Emblem */}
              <div className="w-14 h-14 rounded-2xl bg-[#EA580C] text-white flex items-center justify-center font-display font-black text-2xl shadow-lg shadow-[#EA580C]/30 mb-2.5 animate-bounce">
                <Terminal className="w-7 h-7" />
              </div>

              {/* Name */}
              <span className="font-display font-extrabold text-base text-white tracking-tight">
                Pankaj Suthar
              </span>

              {/* Role Badge */}
              <span className="px-2 py-0.5 rounded-md bg-[#EA580C]/20 text-[#EA580C] font-mono text-[10px] font-bold uppercase tracking-wider mt-0.5">
                Co-Founder &amp; Full Stack
              </span>

              {/* Quote */}
              <p className="text-[11px] text-[#D6D3D1] mt-2.5 max-w-[140px] italic leading-relaxed text-center font-sans">
                "Writing clean code, architecting scalable systems &amp; learning every day."
              </p>
            </div>
          </div>

          {/* Solid 3D Hinged Door (Dark Burnt Terracotta / Charcoal) */}
          <div
            className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-[#C2410C] via-[#9A3412] to-[#7C2D12] border-2 border-[#EA580C]/50 flex flex-col items-center justify-between p-5 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] origin-left shadow-2xl z-20 ${
              doorOpen
                ? '[transform:rotateY(-88deg)] shadow-none opacity-80'
                : '[transform:rotateY(0deg)] hover:[transform:rotateY(-8deg)] opacity-100'
            }`}
            style={{ backfaceVisibility: 'hidden' }}
          >
            {/* Door Top Lock Icon */}
            <div className="w-full flex justify-end">
              <div className="p-1.5 rounded-lg bg-black/30 border border-white/10 text-white/80">
                {doorOpen ? <Unlock className="w-3.5 h-3.5 text-[#FFF7ED]" /> : <Lock className="w-3.5 h-3.5 text-[#FFF7ED]" />}
              </div>
            </div>

            {/* Door Center Knock / Enter Title */}
            <div className="flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full border-2 border-[#FFF7ED]/30 flex items-center justify-center mb-2 bg-black/20">
                <Zap className="w-5 h-5 text-[#FFF7ED] animate-pulse" />
              </div>
              <span className="font-display font-black text-sm tracking-widest text-white uppercase">
                {doorOpen ? 'ROOM UNLOCKED' : 'CLICK TO OPEN'}
              </span>
              <span className="font-mono text-[10px] text-[#FFF7ED]/80 tracking-wider mt-0.5">
                {doorOpen ? 'Secret Chamber' : 'Knock Knock'}
              </span>
            </div>

            {/* Golden Metallic Doorknob */}
            <div className="w-full flex justify-end items-center pr-1">
              <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-amber-400 to-amber-200 border border-white shadow-md shadow-black/50" />
            </div>
          </div>
        </div>

        {/* Toggle Button */}
        <button
          onClick={handleDoorClick}
          className="editorial-btn px-5 py-2 rounded-xl bg-white/10 hover:bg-[#EA580C] text-white font-sans text-xs font-semibold tracking-wide transition-all shadow-md"
        >
          {doorOpen ? 'Close Door' : 'Open Secret Door'}
        </button>
      </div>
    </div>
  );
}
