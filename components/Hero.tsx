"use client";

import gsap from 'gsap';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { FaLinkedinIn, FaGithub, FaEnvelope, FaChevronRight } from 'react-icons/fa6';
import { SiAutocad, SiAutodeskrevit } from 'react-icons/si';
import { TbSettingsAutomation, TbActivity, TbBox } from 'react-icons/tb';

const BIMIcon = () => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
);

const ModernHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const userCardRef = useRef<HTMLDivElement>(null);

  const programs = [
    { name: "Revit", icon: <SiAutodeskrevit />, color: "text-blue-500", pos: "top-0 -left-6 md:-left-12" },
    { name: "AutoCAD", icon: <SiAutocad />, color: "text-red-500", pos: "top-1/3 -right-6 md:-right-16" },
    { name: "Enscape", icon: <TbBox />, color: "text-orange-400", pos: "bottom-10 -left-4 md:-left-10" },
    { name: "BIM", icon: <BIMIcon />, color: "text-[#d4ff3f]", pos: "bottom-0 -right-4 md:-right-8" }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.5 } });

      tl.from(".hero-text", { x: -50, opacity: 0, stagger: 0.15 })
        .from(".bg-aura", { scale: 0, opacity: 0, duration: 2 }, "-=1")
        .from(userCardRef.current, { scale: 0.8, opacity: 0, y: 50 }, "-=1.2")
        .from(".program-badge", { scale: 0, opacity: 0, stagger: 0.1 }, "-=0.8");

      gsap.to(".spin-ring-inner", { rotate: -360, duration: 15, repeat: -1, ease: "none" });
      gsap.to(".spin-ring-outer", { rotate: 360, duration: 30, repeat: -1, ease: "none" });

      programs.forEach((_, i) => {
        gsap.to(`.prog-${i}`, {
          y: "random(-10, 10)",
          x: "random(-5, 5)",
          duration: "random(3, 5)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
      });
    }, containerRef);

    const handleMouseMove = (e: MouseEvent) => {
      if (!userCardRef.current || window.innerWidth < 1024) return;
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5);
      const yPos = (clientY / window.innerHeight - 0.5);

      gsap.to(userCardRef.current, { rotateX: yPos * -15, rotateY: xPos * 15, duration: 0.8 });
      gsap.to(".program-badge", { x: xPos * -40, y: yPos * -40, duration: 1.2, stagger: 0.02 });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      ctx.revert();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center bg-[#0a0a0a] text-white overflow-hidden py-20 lg:py-0">
      
      {/* Background Atmosphere */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#d4ff3f]/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="container max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center z-10">
        
        {/* Left: Content */}
        <div className="order-2 lg:order-1 space-y-6 text-center lg:text-left">
          <div className="hero-text inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mx-auto lg:mx-0">
            <span className="w-2 h-2 rounded-full bg-[#d4ff3f] animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-slate-300">Open to Work</span>
          </div>

          <h1 className="hero-text text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-light tracking-tight leading-[0.9]">
            Mohamed <span className="font-bold block sm:inline">Hadhoud</span>
          </h1>
          
          <div className="hero-text flex items-center justify-center lg:justify-start gap-4">
            <div className="hidden sm:block h-[1px] w-12 bg-[#d4ff3f]" />
            <p className="text-lg md:text-2xl text-slate-400 font-light tracking-wide">
              AEC <span className="text-white font-medium">Digital Lead</span> & Systems Engineer
            </p>
          </div>

          <p className="hero-text text-slate-500 text-base md:text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Specializing in high-fidelity BIM workflows and mechanical thermal analysis. 
            Designing the future of smart infrastructure through digital precision.
          </p>

          <div className="hero-text flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8 pt-4">
            <button className="group relative w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)]">
              <span className="relative z-10 flex items-center justify-center gap-2 text-xs uppercase tracking-widest">
                Explore Projects <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <div className="flex items-center gap-8">
              {[FaLinkedinIn, FaGithub, FaEnvelope].map((Icon, i) => (
                <a key={i} href="#" className="text-slate-500 hover:text-[#d4ff3f] transition-all text-xl hover:scale-110"><Icon /></a>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Interactive 3D Card Area */}
        <div className="order-1 lg:order-2 relative min-h-[450px] sm:min-h-[600px] flex items-center justify-center perspective-[1500px]">
          
          {/* Parallax Background Layers */}
          <div className="bg-parallax absolute inset-0 flex items-center justify-center pointer-events-none scale-75 sm:scale-100">
             <div className="bg-aura absolute w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#d4ff3f]/10 rounded-full blur-[80px] sm:blur-[120px]" />
             <div className="spin-ring-outer absolute w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] border border-white/5 rounded-full border-dashed" />
             <div className="spin-ring-inner absolute w-[280px] sm:w-[420px] h-[280px] sm:h-[420px] border border-[#d4ff3f]/20 rounded-full border-dotted" />
          </div>

          <div ref={userCardRef} className="relative w-full max-w-[280px] sm:max-w-sm aspect-[4/5] transform-style-3d z-10 transition-transform duration-500 scale-90 sm:scale-100">
            
            {/* Main Image Container */}
            <div className="relative w-full h-full bg-[#0d0d0d] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl group">
              <Image 
                src="/t-1.webp" 
                alt="Mohamed Hadhoud" 
                fill 
                priority 
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />
            </div>

            {/* Orbiting Program Badges */}
            {programs.map((prog, i) => (
              <div key={i} className={`program-badge prog-${i} absolute ${prog.pos} z-20`}>
                <div className="p-3 sm:p-4 bg-[#141414]/90 backdrop-blur-2xl border border-white/10 rounded-xl sm:rounded-2xl shadow-2xl flex flex-col items-center group transition-transform">
                  <div className={`text-xl sm:text-3xl ${prog.color} mb-1`}>{prog.icon}</div>
                  <span className="text-[6px] sm:text-[7px] font-mono font-bold text-slate-500 uppercase tracking-widest">{prog.name}</span>
                </div>
              </div>
            ))}

            {/* Tech UI Elements */}
            <div className="floating-ui absolute -top-6 sm:-top-12 right-10 p-3 sm:p-4 bg-[#d4ff3f] text-black rounded-xl sm:rounded-2xl z-20 shadow-lg">
              <TbSettingsAutomation size={20} className="animate-spin-slow" />
            </div>
            
            <div className="floating-ui absolute -bottom-6 sm:-bottom-10 left-6 p-4 bg-[#141414]/80 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-[2rem] z-20 flex items-center gap-4 shadow-2xl">
              <TbActivity className="text-[#d4ff3f] text-xl" />
              <div className="h-2 w-16 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full w-2/3 bg-[#d4ff3f] animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .transform-style-3d { transform-style: preserve-3d; }
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spin-slow 10s linear infinite; }
      `}</style>
    </section>
  );
};

export default ModernHero;