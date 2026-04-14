"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { FaArrowRight, FaGithub } from "react-icons/fa6";
import { TbPointFilled } from "react-icons/tb";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Thermal Grid Alpha",
    category: "Thermodynamics",
    id: "XP_01",
    description:
      "Optimized heat distribution for industrial-scale power plants using AI-driven predictive modeling.",
    tech: ["Next.js", "Python", "GSAP"],
    accent: "#d4ff3f",
  },
  {
    title: "Load-Balancer V2",
    category: "Power Systems",
    id: "XP_02",
    description:
      "Real-time monitoring and automated load balancing for high-voltage smart grids.",
    tech: ["TypeScript", "Node.js", "Prisma"],
    accent: "#3b82f6",
  },
  {
    title: "Eco-Generator",
    category: "Energy Conversion",
    id: "XP_03",
    description:
      "A digital twin interface for tracking energy efficiency in waste-to-power systems.",
    tech: ["Three.js", "React", "Tailwind"],
    accent: "#a855f7",
  },
];

const ExperiencePinStack = () => {
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".project-card");

      // Pin the main container
      ScrollTrigger.create({
        trigger: triggerRef.current,
        start: "top 5%",
        end: `+=${(cards.length - 1) * 100}%`, // Scroll duration based on card count
        pin: true,
        scrub: 2,
        anticipatePin: 1,
      });

      cards.forEach((card, index) => {
        if (index > 0) {
          // Slide cards UP from the bottom
          gsap.fromTo(
            card,
            { y: "100vh" },
            {
              y: "0vh",
              ease: "none",
              duration: 2,
              scrollTrigger: {
                trigger: triggerRef.current,
                start: () => `${index * (100 / (cards.length - 1))}% top`,
                end: () => `${(index + 1) * (100 / (cards.length - 1))}% top`,
                scrub: true,
              },
            },
          );
        }

        // Scale down the PREVIOUS card as the NEW one arrives
        if (index < cards.length - 1) {
          gsap.to(card, {
            scale: 0.9,
            opacity: 0.4,
            filter: "blur(10px)",
            ease: "none",
            scrollTrigger: {
              trigger: triggerRef.current,
              start: () => `${(index + 1) * (100 / (cards.length - 1))}% top`,
              end: () => `${(index + 2) * (100 / (cards.length - 1))}% top`,
              scrub: 3,
            },
          });
        }
      });
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={triggerRef} className="bg-[#050505] overflow-hidden">
      <div className="h-screen w-full relative flex items-center justify-center overflow-hidden">
        {/* BACKGROUND UI ELEMENTS */}
        <div className="absolute top-12 left-12 flex items-center gap-4  ">
          <div className="text-orange-500 font-black text-xl italic tracking-tighter">
            / <span className="text-white"> Projects </span>
          </div>
        </div>

        {/* CARDS CONTAINER */}
        <div className="relative w-full max-w-6xl h-[600px] flex items-center justify-center">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card absolute inset-0 px-6"
              style={{ zIndex: index }}
            >
              <div className="bg-[#0a0a0a] border border-zinc-800 rounded-3xl overflow-hidden h-full shadow-[0_-20px_60px_rgba(0,0,0,0.9)] grid grid-cols-1 lg:grid-cols-2">
                {/* LEFT SIDE: VISUAL */}
                <div className="relative bg-[#0d0d0d] flex items-center justify-center border-r border-zinc-900 overflow-hidden">
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:20px_20px]" />
                  <span className="text-white/5 font-black text-[12vw] italic select-none">
                    {project.id}
                  </span>
                  <div
                    className="absolute w-40 h-40 rounded-full blur-[100px] opacity-20"
                    style={{ backgroundColor: project.accent }}
                  />
                </div>

                {/* RIGHT SIDE: CONTENT */}
                <div className="p-8 lg:p-16 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-6">
                    <TbPointFilled style={{ color: project.accent }} />
                    <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-[0.4em]">
                      {project.category}
                    </span>
                  </div>

                  <h2 className="text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-6">
                    {project.title}
                  </h2>

                  <p className="text-zinc-400 text-lg font-light leading-relaxed italic mb-8 border-l border-zinc-800 pl-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-[9px] text-zinc-500 font-mono uppercase tracking-widest"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-8">
                    <button className="flex items-center gap-3 text-white text-[11px] font-bold uppercase tracking-widest group">
                      <span>Launch_Project</span>
                      <FaArrowRight
                        className="group-hover:translate-x-2 transition-transform"
                        style={{ color: project.accent }}
                      />
                    </button>
                    <a
                      href="#"
                      className="text-zinc-700 hover:text-white transition-colors border-l border-zinc-900 pl-8"
                    >
                      <FaGithub size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM UI ELEMENTS */}
        <div className="absolute bottom-12 right-12 opacity-30">
          <p className="text-[9px] font-mono text-zinc-600 uppercase tracking-[0.5em]">
            2026_SHERIF_ALTIBY // DEV_CORE
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePinStack;
