"use client";
import React, { useState, useEffect } from 'react';
import { FaFilePdf, FaArrowRight } from 'react-icons/fa6';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
      isScrolled ? 'py-3 bg-[#020202]/90 backdrop-blur-xl border-b border-zinc-900' : 'py-6 md:py-8 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between">
        
        {/* LOGO: RESPONSIVE TYPOGRAPHY */}
        <div className="group cursor-pointer">
          <div className="flex items-baseline gap-1">
            <span className="text-white font-black tracking-tighter text-lg sm:text-2xl uppercase italic leading-none group-hover:text-orange-500 transition-colors duration-300">
              Mohamed
            </span>
            <span className="text-zinc-500 font-light tracking-tighter text-lg sm:text-2xl uppercase italic leading-none">
              Hadhoud
            </span>
          </div>
          {/* Hide sub-text on mobile to keep the header clean */}
          <div className="hidden sm:flex items-center gap-2 mt-1">
            <div className="h-[1px] w-4 bg-orange-500 group-hover:w-12 transition-all duration-500" />
            <span className="text-[8px] font-mono text-zinc-600 tracking-[0.4em] uppercase">
              Systems_Engineer.v4
            </span>
          </div>
        </div>

        {/* REDESIGNED RESPONSIVE CV BUTTON */}
        <div className="flex items-center">
          <a 
            href="/cv.pdf" 
            target="_blank"
            className="group relative flex items-center gap-2 sm:gap-4 p-1 pr-3 sm:pr-6 border border-zinc-800 rounded-full hover:border-orange-500/50 transition-colors duration-500"
          >
            {/* Kinetic Icon Box */}
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-zinc-900 rounded-full flex items-center justify-center border border-zinc-800 group-hover:bg-orange-500 group-hover:border-orange-400 transition-all duration-500">
              <FaFilePdf className="text-zinc-400 group-hover:text-black transition-colors" size={12} />
            </div>

            {/* Label Text - Primary shows on mobile, secondary only on desktop */}
            <div className="flex flex-col">
              <span className="text-[9px] sm:text-[10px] font-black text-white uppercase tracking-widest leading-none">
                Access_CV
              </span>
              <span className="hidden sm:block text-[7px] font-mono text-zinc-600 uppercase tracking-tight mt-1 group-hover:text-zinc-400 transition-colors">
                Format: PDF_Stable
              </span>
            </div>

            {/* Hover Arrow - Hidden on mobile for space */}
            <FaArrowRight 
              className="hidden sm:block text-zinc-800 group-hover:text-orange-500 group-hover:translate-x-1 transition-all duration-500" 
              size={12} 
            />
          </a>
        </div>

      </div>

      {/* SCANLINE DECOR */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] overflow-hidden opacity-20">
        <div className="w-full h-full bg-gradient-to-r from-transparent via-orange-500 to-transparent animate-scan" />
      </div>

      <style jsx>{`
        @keyframes scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-scan {
          animation: scan 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;