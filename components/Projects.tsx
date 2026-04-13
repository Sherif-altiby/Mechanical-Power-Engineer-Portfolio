"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { FaArrowRight, FaGithub } from 'react-icons/fa6';
import { TbPointFilled } from 'react-icons/tb';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Thermal Grid Alpha",
    category: "Thermodynamics",
    description: "Optimized heat distribution for industrial-scale power plants using AI-driven predictive modeling.",
    tech: ["Next.js", "Python", "GSAP"],
    color: "bg-[#d4ff3f]"
  },
  {
    title: "Load-Balancer V2",
    category: "Power Systems",
    description: "Real-time monitoring and automated load balancing for high-voltage smart grids.",
    tech: ["TypeScript", "Node.js", "Prisma"],
    color: "bg-blue-500"
  },
  {
    title: "Eco-Generator",
    category: "Energy Conversion",
    description: "A digital twin interface for tracking energy efficiency in waste-to-power systems.",
    tech: ["Three.js", "React", "Tailwind"],
    color: "bg-purple-500"
  }
];

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      { translateX: 0 },
      {
        translateX: "-200vw", // Moves through 3 projects (100vw each)
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top", // Duration of the scroll
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <div className="bg-[#0a0a0a] overflow-hidden">
      <div ref={triggerRef}>
        <div 
          ref={sectionRef} 
          className="h-screen flex flex-row relative" 
          style={{ width: "300vw" }}
        >
          {projects.map((project, index) => (
            <section 
              key={index} 
              className="h-screen w-screen flex items-center justify-center px-6 md:px-24"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl items-center">
                
                {/* Project Image/Visual Side */}
                <div className="relative group">
                  <div className={`absolute -inset-2 ${project.color} opacity-20 blur-2xl group-hover:opacity-40 transition duration-500`} />
                  <div className="relative aspect-video bg-[#141414] border border-white/10 rounded-2xl overflow-hidden flex items-center justify-center">
                     <div className="text-white/5 font-black text-9xl uppercase select-none">
                       0{index + 1}
                     </div>
                     {/* Placeholder for project image or interactive GSAP element */}
                     <div className="absolute inset-0 flex items-center justify-center p-12">
                        <div className={`w-full h-1 ${project.color} opacity-30 blur-sm animate-pulse`} />
                     </div>
                  </div>
                </div>

                {/* Project Info Side */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <TbPointFilled className={project.color.replace('bg-', 'text-')} />
                    <span className="text-slate-500 font-mono text-sm uppercase tracking-widest">
                      {project.category}
                    </span>
                  </div>
                  
                  <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
                    {project.title}
                  </h2>
                  
                  <p className="text-slate-400 text-lg leading-relaxed max-w-md">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300 font-mono">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-6 pt-8">
                    <button className="flex items-center gap-2 text-white font-bold group">
                      View Live <FaArrowRight className="group-hover:translate-x-2 transition-transform text-[#d4ff3f]" />
                    </button>
                    <a href="#" className="text-slate-500 hover:text-white transition-colors">
                      <FaGithub size={24} />
                    </a>
                  </div>
                </div>

              </div>
            </section>
          ))}
        </div>
      </div>
      
      {/* Footer-like spacer to prevent snapping issues */}
      <div className="h-[20vh] bg-[#0a0a0a]" />
    </div>
  );
};

export default ProjectsSection;