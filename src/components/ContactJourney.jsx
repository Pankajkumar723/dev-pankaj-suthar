import React, { useState } from 'react';
import { MessageCircle, Mail, Phone, MapPin, Send, CheckCircle2, Copy, Sparkles, ArrowUpRight, FileText, Download } from './Icons';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function ContactJourney() {
  const [selectedIntent, setSelectedIntent] = useState('fulltime');
  const [selectedTopic, setSelectedTopic] = useState('Full Stack / MERN');
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [senderMessage, setSenderMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const intents = [
    {
      id: 'fulltime',
      title: 'Hire for Full-Time Role',
      desc: 'Looking for a dedicated Full Stack Engineer with 2 years of proven delivery.',
      badge: 'High Priority',
    },
    {
      id: 'contract',
      title: 'Contract / Project Build',
      desc: 'Web application development, UI design, or MERN stack implementation.',
      badge: 'Flexible',
    },
    {
      id: 'chat',
      title: 'Quick Tech Discussion',
      desc: 'Discuss software architecture, engineering opportunities, or networking.',
      badge: 'Casual',
    },
  ];

  const topics = [
    'React.js & Frontend',
    'Node.js & REST APIs',
    'Full Stack / MERN',
    'Database & Schema Design',
    'Live App Maintenance',
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    confetti({
      particleCount: 110,
      spread: 75,
      origin: { y: 0.6 },
      colors: ['#EA580C', '#292524', '#FFF7ED', '#F97316', '#FFFFFF'],
    });
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="scroll-mt-24 py-20 md:py-28 px-4 md:px-8 relative bg-[#FAF5EF] dark:bg-[#1C1917]/50 border-t border-[#D6D3D1]/60 dark:border-[#D6D3D1]/20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#D6D3D1] dark:border-[#D6D3D1]/20 pb-6 mb-12">
          <div>
            <span className="font-mono text-xs text-[#EA580C] uppercase tracking-wider block mb-1 font-semibold">
              (05) Get In Touch
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl text-[#292524] dark:text-[#FFF7ED] tracking-tight">
              Start a Conversation
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#EA580C] animate-pulse" />
            <span className="font-mono text-xs text-[#292524] dark:text-[#FFF7ED] font-medium">
              {personalInfo.status}
            </span>
          </div>
        </div>

        {/* Step 01: Intent Cards */}
        <div className="mb-10">
          <h3 className="font-mono text-xs uppercase tracking-wider text-[#EA580C] mb-3 font-semibold">
            Step 01: Select Your Inquiry Intent
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {intents.map((item) => {
              const isSelected = selectedIntent === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedIntent(item.id)}
                  className={`editorial-card cursor-pointer p-5 rounded-2xl transition-all ${
                    isSelected
                      ? 'border-[#EA580C] dark:border-[#EA580C] bg-[#FFF7ED] dark:bg-[#292524] shadow-md shadow-[#EA580C]/10 scale-[1.01]'
                      : 'border-[#D6D3D1] dark:border-[#D6D3D1]/20 bg-[#FFFFFF] dark:bg-[#292524] hover:border-[#EA580C]/50'
                  }`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="px-2 py-0.5 rounded-md bg-[#EA580C]/10 border border-[#EA580C]/20 text-[10px] font-mono text-[#EA580C] font-semibold">
                      {item.badge}
                    </span>
                    {isSelected && (
                      <CheckCircle2 className="w-4 h-4 text-[#EA580C]" />
                    )}
                  </div>
                  <h4 className="font-display font-bold text-base text-[#292524] dark:text-[#FFF7ED] mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#78716C] dark:text-[#D6D3D1] leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Step 02: Topic Selection */}
        <div className="mb-12">
          <h3 className="font-mono text-xs uppercase tracking-wider text-[#EA580C] mb-3 font-semibold">
            Step 02: Select Area of Focus
          </h3>
          <div className="flex flex-wrap gap-2">
            {topics.map((topic, idx) => {
              const isSelected = selectedTopic === topic;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedTopic(topic)}
                  className={`editorial-btn px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    isSelected
                      ? 'bg-[#EA580C] text-white shadow-md shadow-[#EA580C]/25'
                      : 'bg-[#FFFFFF] dark:bg-[#292524] hover:bg-[#FFF7ED] dark:hover:bg-[#1C1917] text-[#292524] dark:text-[#FFF7ED] border border-[#D6D3D1] dark:border-[#D6D3D1]/20'
                  }`}
                >
                  {topic}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Channels (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-3.5">
            {/* WhatsApp */}
            <a
              href={personalInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-card group p-5 rounded-2xl flex items-center justify-between bg-[#FFFFFF] dark:bg-[#292524] border border-[#D6D3D1] dark:border-[#D6D3D1]/20 hover:border-[#EA580C]"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#EA580C]/10 border border-[#EA580C]/20 text-[#EA580C] flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-[#EA580C] uppercase tracking-wider block font-semibold">
                    Fastest Response
                  </span>
                  <h4 className="font-display font-bold text-sm text-[#292524] dark:text-[#FFF7ED]">
                    WhatsApp Direct
                  </h4>
                  <p className="text-xs text-[#78716C] dark:text-[#D6D3D1] font-mono">{personalInfo.phoneFormatted}</p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#EA580C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Email */}
            <div className="editorial-card p-5 rounded-2xl flex flex-col justify-between bg-[#FFFFFF] dark:bg-[#292524] border border-[#D6D3D1] dark:border-[#D6D3D1]/20">
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#292524]/10 dark:bg-[#1C1917] border border-[#D6D3D1] dark:border-[#D6D3D1]/30 text-[#292524] dark:text-[#FFF7ED] flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[#EA580C]" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-[#EA580C] uppercase tracking-wider block font-semibold">
                      Official Email
                    </span>
                    <h4 className="font-display font-bold text-sm text-[#292524] dark:text-[#FFF7ED]">
                      Email Pankaj
                    </h4>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-lg bg-[#FFF7ED] dark:bg-[#1C1917] hover:bg-[#EA580C] hover:text-white text-[#78716C] dark:text-[#D6D3D1] transition-colors"
                  title="Copy Email"
                >
                  {copiedEmail ? <CheckCircle2 className="w-4 h-4 text-[#EA580C]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="flex justify-between items-center pt-2 border-t border-[#D6D3D1]/60 dark:border-[#D6D3D1]/20">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="font-mono text-xs text-[#292524] dark:text-[#FFF7ED] hover:text-[#EA580C] transition-colors"
                >
                  {personalInfo.email}
                </a>
                <span className="font-mono text-[11px] text-[#EA580C] font-semibold">
                  {copiedEmail ? 'Copied!' : 'Click to send'}
                </span>
              </div>
            </div>

            {/* Phone */}
            <a
              href={`tel:${personalInfo.phone}`}
              className="editorial-card group p-5 rounded-2xl flex items-center justify-between bg-[#FFFFFF] dark:bg-[#292524] border border-[#D6D3D1] dark:border-[#D6D3D1]/20"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#FFF7ED] dark:bg-[#1C1917] border border-[#D6D3D1] dark:border-[#D6D3D1]/30 text-[#EA580C] flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-[#78716C] dark:text-[#A8A29E] uppercase tracking-wider block">
                    Phone Call
                  </span>
                  <h4 className="font-display font-bold text-sm text-[#292524] dark:text-[#FFF7ED]">
                    Direct Call
                  </h4>
                  <p className="text-xs text-[#78716C] dark:text-[#D6D3D1] font-mono">{personalInfo.phoneFormatted}</p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#78716C] dark:text-[#D6D3D1] group-hover:text-[#EA580C] transition-colors" />
            </a>

            {/* Location */}
            <div className="editorial-card p-5 rounded-2xl flex items-center gap-3.5 bg-[#FFFFFF] dark:bg-[#292524] border border-[#D6D3D1] dark:border-[#D6D3D1]/20">
              <div className="w-10 h-10 rounded-xl bg-[#FFF7ED] dark:bg-[#1C1917] border border-[#D6D3D1] dark:border-[#D6D3D1]/30 text-[#EA580C] flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-[10px] text-[#78716C] dark:text-[#A8A29E] uppercase tracking-wider block">
                  Location
                </span>
                <p className="font-display font-semibold text-xs sm:text-sm text-[#292524] dark:text-[#FFF7ED]">
                  Ahmedabad, Gujarat (Current)
                </p>
                <p className="text-[11px] text-[#78716C] dark:text-[#D6D3D1] font-sans">
                  Hometown: Rajasthan, India
                </p>
              </div>
            </div>

            {/* Resume Download Card */}
            <a
              href={personalInfo.resumeUrl}
              download="Pankaj_Suthar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-card group p-5 rounded-2xl flex items-center justify-between bg-gradient-to-r from-[#EA580C]/10 via-[#FFF7ED] to-[#FFFFFF] dark:from-[#EA580C]/15 dark:via-[#292524] dark:to-[#1C1917] border-2 border-[#EA580C]/40 hover:border-[#EA580C] shadow-sm transition-all"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#EA580C] text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-[#EA580C]/25">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-[#EA580C] uppercase tracking-wider block font-bold">
                    Official Document
                  </span>
                  <h4 className="font-display font-bold text-sm text-[#292524] dark:text-[#FFF7ED]">
                    Download Resume (PDF)
                  </h4>
                  <p className="text-xs text-[#78716C] dark:text-[#D6D3D1] font-mono">114 KB • Verified 2+ Yrs Exp</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#EA580C] text-white text-xs font-semibold group-hover:bg-[#C2410C] transition-colors shadow-xs">
                <span>Download</span>
                <Download className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
              </div>
            </a>
          </div>

          {/* Form (7 cols) */}
          <div className="lg:col-span-7 editorial-card rounded-2xl p-6 sm:p-8 bg-[#FFFFFF] dark:bg-[#292524] border border-[#D6D3D1] dark:border-[#D6D3D1]/20">
            {isSubmitted ? (
              <div className="py-10 text-center animate-in zoom-in-95 duration-200">
                <div className="w-14 h-14 rounded-2xl bg-[#EA580C]/10 border border-[#EA580C]/30 text-[#EA580C] flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-7 h-7" />
                </div>
                <h3 className="font-display font-bold text-2xl text-[#292524] dark:text-[#FFF7ED] mb-2">
                  Message Dispatched!
                </h3>
                <p className="text-xs sm:text-sm text-[#78716C] dark:text-[#D6D3D1] max-w-sm mx-auto mb-6 font-sans">
                  Thank you for reaching out. I usually reply within a couple of hours. Feel free to connect directly on WhatsApp as well.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="editorial-btn px-4 py-2 rounded-xl bg-[#292524] dark:bg-[#EA580C] hover:bg-[#EA580C] text-[#FFF7ED] font-medium text-xs transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-[#EA580C] block mb-1 font-semibold">
                    Step 03: Your Message
                  </span>
                  <h3 className="font-display font-bold text-xl text-[#292524] dark:text-[#FFF7ED] mb-4">
                    Send a Direct Note
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-mono text-[#78716C] dark:text-[#A8A29E] uppercase mb-1.5 font-medium">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      placeholder="Enter your name"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#FFF7ED] dark:bg-[#1C1917] border border-[#D6D3D1] dark:border-[#D6D3D1]/30 focus:border-[#EA580C] focus:outline-none text-[#292524] dark:text-[#FFF7ED] text-xs sm:text-sm transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#78716C] dark:text-[#A8A29E] uppercase mb-1.5 font-medium">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#FFF7ED] dark:bg-[#1C1917] border border-[#D6D3D1] dark:border-[#D6D3D1]/30 focus:border-[#EA580C] focus:outline-none text-[#292524] dark:text-[#FFF7ED] text-xs sm:text-sm transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#78716C] dark:text-[#A8A29E] uppercase mb-1.5 font-medium">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={senderMessage}
                    onChange={(e) => setSenderMessage(e.target.value)}
                    placeholder={`Hi Pankaj, I reviewed your 2 years experience and would like to discuss ${selectedTopic}...`}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FFF7ED] dark:bg-[#1C1917] border border-[#D6D3D1] dark:border-[#D6D3D1]/30 focus:border-[#EA580C] focus:outline-none text-[#292524] dark:text-[#FFF7ED] text-xs sm:text-sm transition-colors resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                  <div className="text-[11px] font-mono text-[#78716C] dark:text-[#A8A29E]">
                    Topic: <span className="text-[#EA580C] font-semibold">{selectedTopic}</span>
                  </div>

                  <button
                    type="submit"
                    className="editorial-btn w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-[#EA580C] hover:bg-[#C2410C] text-white font-medium text-xs shadow-lg shadow-[#EA580C]/25 transition-all"
                  >
                    <span>Submit Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
