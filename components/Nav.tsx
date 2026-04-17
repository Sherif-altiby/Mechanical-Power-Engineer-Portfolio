"use client";
import React, { useState, useEffect } from 'react';
import { TbFileDownload } from 'react-icons/tb';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
      isScrolled ? 'py-4 bg-black/80 backdrop-blur-md border-b border-white/5' : 'py-8 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between">
        
        {/* LOGO: Minimal & Clean */}
        <div className="group cursor-pointer">
          <div className="flex items-center gap-1.5">
            <span className="text-white font-bold tracking-tighter text-xl uppercase leading-none">
              Mohamed
            </span>
            <span className="text-zinc-500 font-light tracking-tighter text-xl uppercase leading-none">
              Hadhoud
            </span>
          </div>
          <p className="text-[8px] font-mono text-zinc-600 tracking-[0.3em] uppercase mt-1 group-hover:text-[#d4ff3f] transition-colors">
            Mechanical_BIM
          </p>
        </div>

        {/* SIMPLIFIED CTA */}
        <div className="flex items-center">
          <a 
            href="/cv.pdf" 
            target="_blank"
            className="group flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 hover:border-[#d4ff3f]/40 transition-all duration-300"
          >
            <span className="text-[10px] font-bold text-zinc-400 group-hover:text-white uppercase tracking-widest">
              Resume
            </span>
            <TbFileDownload className="text-zinc-500 group-hover:text-[#d4ff3f] transition-colors" size={16} />
          </a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;