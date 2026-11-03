import React, { useState } from 'react';
import { MessageCircle, Phone, Copy, Check, X, ArrowUpRight } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Popover Card */}
      {isOpen && (
        <div className="mb-3.5 w-72 sm:w-80 bg-[#FFFFFF] dark:bg-[#1C1917] text-[#292524] dark:text-[#FFF7ED] border-2 border-[#EA580C] rounded-2xl p-5 shadow-2xl animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex justify-between items-center border-b border-[#D6D3D1] dark:border-[#D6D3D1]/20 pb-3 mb-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#EA580C] animate-pulse" />
              <span className="font-display font-bold text-xs tracking-wider text-[#292524] dark:text-[#FFF7ED] uppercase">
                Direct Contact
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg hover:bg-[#FFF7ED] dark:hover:bg-[#292524] text-[#78716C] dark:text-[#A8A29E] hover:text-[#292524] dark:hover:text-[#FFF7ED] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-[#78716C] dark:text-[#D6D3D1] mb-4 leading-relaxed font-sans">
            Let's connect regarding full-stack roles, web application development, or technical opportunities.
          </p>

          <div className="flex flex-col gap-2">
            {/* WhatsApp Link */}
            <a
              href={personalInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-btn flex items-center justify-between p-2.5 rounded-xl bg-[#EA580C] hover:bg-[#C2410C] text-white font-medium text-xs shadow-md shadow-[#EA580C]/25"
            >
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Direct Call */}
            <a
              href={`tel:${personalInfo.phone}`}
              className="editorial-btn flex items-center justify-between p-2.5 rounded-xl bg-[#FFF7ED] dark:bg-[#292524] hover:bg-[#292524] dark:hover:bg-[#FFF7ED] hover:text-white dark:hover:text-[#292524] text-[#292524] dark:text-[#FFF7ED] font-medium text-xs border border-[#D6D3D1] dark:border-[#D6D3D1]/30 transition-colors"
            >
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#EA580C]" />
                <span>{personalInfo.phone}</span>
              </div>
              <span className="text-[10px] text-[#78716C] dark:text-[#A8A29E] font-mono">CALL</span>
            </a>

            {/* Copy Phone Button */}
            <button
              onClick={handleCopyPhone}
              className="flex items-center justify-center gap-1.5 py-1.5 text-[11px] font-mono text-[#78716C] dark:text-[#A8A29E] hover:text-[#EA580C] transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3 text-[#EA580C]" />
                  <span className="text-[#EA580C] font-semibold">Copied (+91-7023285164)</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  <span>Copy number (+91-7023285164)</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="editorial-btn group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#EA580C] hover:bg-[#C2410C] text-white shadow-xl shadow-[#EA580C]/30 border-2 border-[#FFF7ED]"
        aria-label="Contact on WhatsApp"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#292524] rounded-full border-2 border-[#FFF7ED] animate-ping" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#292524] rounded-full border-2 border-[#FFF7ED]" />
        
        {isOpen ? (
          <X className="w-5 h-5 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </button>
    </div>
  );
}
