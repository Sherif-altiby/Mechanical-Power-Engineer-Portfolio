"use client";

import gsap from 'gsap';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { FaLinkedinIn, FaGithub, FaEnvelope, FaChevronRight } from 'react-icons/fa6';
import { SiAutocad, SiAutodeskrevit } from 'react-icons/si';
import { TbSettingsAutomation, TbActivity, TbBox,} from 'react-icons/tb';

const ModernHero = () => {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const userCardRef = useRef<HTMLDivElement>(null);

  const programs = [
    { name: "Revit", icon: <SiAutodeskrevit /> , color: "text-blue-500", pos: "top-[10%] -left-12" },
    { name: "AutoCAD", icon: <SiAutocad />, color: "text-red-500", pos: "top-[40%] -right-16" },
    { name: "Enscape", icon: <TbBox />, color: "text-orange-400", pos: "bottom-[10%] -left-10" },
  ];

  useEffect(() => {
    setMounted(true);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.5 } });

      // 1. Entrance Sequence
      tl.from(".hero-text", { x: -50, opacity: 0, stagger: 0.15 })
        .from(".bg-aura", { scale: 0, opacity: 0, duration: 2, ease: "elastic.out(1, 0.5)" }, "-=1")
        .from(userCardRef.current, { scale: 0.8, opacity: 0, y: 50 }, "-=1.2")
        .from(".program-badge", { scale: 0, opacity: 0, stagger: 0.1, ease: "back.out(1.7)" }, "-=0.8")
        .from(".floating-ui", { y: 20, opacity: 0, stagger: 0.2 }, "-=0.5");

      // 2. Background Continuous Animations
      // Fast inner ring
      gsap.to(".spin-ring-inner", { rotate: -360, duration: 15, repeat: -1, ease: "none" });
      // Slow outer ring
      gsap.to(".spin-ring-outer", { rotate: 360, duration: 30, repeat: -1, ease: "none" });
      
      // Floating Program Icons (Individual bobbing)
      programs.forEach((_, i) => {
        gsap.to(`.prog-${i}`, {
          y: "random(-20, 20)",
          x: "random(-10, 10)",
          duration: "random(3, 5)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
      });

      // Pulse the background aura
      gsap.to(".bg-aura", {
        scale: 1.2,
        opacity: 0.15,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

    }, containerRef);

    const handleMouseMove = (e: MouseEvent) => {
      if (!userCardRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const xPos = (clientX / innerWidth - 0.5);
      const yPos = (clientY / innerHeight - 0.5);

      // Card Tilt
      gsap.to(userCardRef.current, { 
        rotateX: yPos * -20, 
        rotateY: xPos * 20, 
        duration: 0.8, 
        ease: "power2.out" 
      });

      // Parallax for Background Elements (Aura and Rings)
      gsap.to(".bg-parallax", {
        x: xPos * -40,
        y: yPos * -40,
        duration: 1.5,
        ease: "power1.out"
      });

      // Parallax for Program Icons
      gsap.to(".program-badge", {
        x: xPos * -80,
        y: yPos * -80,
        duration: 1.2,
        stagger: 0.03
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      ctx.revert();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center bg-[#0a0a0a] text-white overflow-hidden font-sans">
      
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#d4ff3f]/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/5 blur-[120px] rounded-full" />

      <div className="container max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        
        {/* Left: Content Area */}
        <div className="space-y-6">
          <div className="hero-text inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#d4ff3f] animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-slate-300">System Active: Open to Work</span>
          </div>

          <h1 className="hero-text text-5xl md:text-8xl font-light tracking-tight leading-[0.9]">
            Sherif    <span className="font-bold text-white">Altiby</span>
          </h1>
          
          <div className="hero-text flex items-center gap-4">
            <div className="h-[1px] w-12 bg-[#d4ff3f]" />
            <p className="text-xl md:text-2xl text-slate-400 font-light tracking-wide">
              AEC <span className="text-white font-medium">Digital Lead</span> & Systems Engineer
            </p>
          </div>

          <p className="hero-text text-slate-500 text-lg max-w-lg leading-relaxed mb-4">
            Specializing in high-fidelity BIM workflows and mechanical thermal analysis. 
            Designing the future of smart infrastructure through digital precision.
          </p>

          <div className="hero-text flex flex-wrap items-center gap-8">
            <button className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:pr-12 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              <span className="relative z-10 flex items-center gap-2 text-sm uppercase tracking-widest">
                Explore Projects <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <div className="flex items-center gap-6">
              {[FaLinkedinIn, FaGithub, FaEnvelope].map((Icon, i) => (
                <a key={i} href="#" className="text-slate-500 hover:text-[#d4ff3f] transition-all hover:scale-110"><Icon /></a>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Interactive 3D Image & Enhanced Background Animation */}
        <div className="relative h-[700px] flex items-center justify-center perspective-[1500px]">
          
          {/* BACKGROUND ANIMATION LAYERS */}
          <div className="bg-parallax absolute inset-0 flex items-center justify-center pointer-events-none">
             {/* The Pulse Aura */}
             <div className="bg-aura absolute w-[500px] h-[500px] bg-[#d4ff3f]/10 rounded-full blur-[100px]" />
             
             {/* Dual Rotating Rings */}
             <div className="spin-ring-outer absolute w-[550px] h-[550px] border border-white/5 rounded-full border-dashed" />
             <div className="spin-ring-inner absolute w-[420px] h-[420px] border border-[#d4ff3f]/20 rounded-full border-dotted" />
             
             {/* Technical Grid Behind Image */}
             <div className="absolute w-[400px] h-[400px] opacity-20">
                <svg viewBox="0 0 200 200" className="w-full h-full text-white">
                  <defs>
                    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
             </div>
          </div>

          <div ref={userCardRef} className="relative w-full max-w-sm aspect-[4/5] transform-style-3d z-10">
            
            {/* Main Image Container */}
            <div className="relative w-full h-full bg-[#0d0d0d] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] group">
              <Image 
                src="/t-1.webp" 
                alt="Sherif Altiby" 
                fill 
                priority 
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />
            </div>

            {/* Orbiting Program Badges */}
            {programs.map((prog, i) => (
              <div key={i} className={`program-badge prog-${i} absolute ${prog.pos} z-20`}>
                <div className="p-4 bg-[#141414]/90 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl flex flex-col items-center group transition-transform hover:scale-110">
                  <div className={`text-3xl ${prog.color} mb-1`}>{prog.icon}</div>
                  <span className="text-[7px] font-mono font-bold text-slate-500 uppercase tracking-widest">{prog.name}</span>
                </div>
              </div>
            ))}

            {/* Floating Technical UI Details */}
            <div className="floating-ui absolute -top-12 right-1/4 p-4 bg-[#d4ff3f] text-black rounded-2xl z-20 shadow-[0_0_30px_rgba(212,255,63,0.4)]">
              <TbSettingsAutomation size={24} className="animate-spin-slow" />
            </div>
            
            <div className="floating-ui absolute -bottom-10 left-10 p-5 bg-[#141414]/80 backdrop-blur-xl border border-white/10 rounded-[2rem] z-20 flex items-center gap-4 shadow-2xl">
               <div className="relative">
                  <TbActivity className="text-[#d4ff3f] text-2xl" />
                  <div className="absolute inset-0 bg-[#d4ff3f]/20 blur-md rounded-full" />
               </div>
                
            </div>

          </div>
        </div>
      </div>

      <style jsx global>{`
        .perspective-[1500px] { perspective: 1500px; }
        .transform-style-3d { transform-style: preserve-3d; }
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spin-slow 10s linear infinite; }
      `}</style>
    </section>
  );
};

export default ModernHero;