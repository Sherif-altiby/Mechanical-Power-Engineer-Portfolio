"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { FaArrowRight } from "react-icons/fa6";
import { TbPointFilled } from "react-icons/tb";
import { projects } from "@/data";

gsap.registerPlugin(ScrollTrigger);

const ExperiencePinStack = () => {
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".project-card");

      ScrollTrigger.create({
        trigger: triggerRef.current,
        start: "top top",
        end: `+=${(cards.length - 1) * 100}%`,
        pin: true,
        scrub: 2,
      });

      cards.forEach((card, index) => {
        if (index > 0) {
          gsap.fromTo(
            card,
            { y: "110vh" },
            {
              y: "0vh",
              scrollTrigger: {
                trigger: triggerRef.current,
                start: () => `${index * (100 / (cards.length - 1))}% top`,
                end: () => `${(index + 1) * (100 / (cards.length - 1))}% top`,
                scrub: true,
              },
            },
          );
        }
      });
    }, triggerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={triggerRef} className="bg-[#050505] relative antialiased">
      <div className="h-screen w-full">
        <div className="flex items-center px-5 gap-4 mb-12 ">
          <div className="text-orange-500 font-black text-2xl italic tracking-tighter">
            / <span className="text-white"> Projects </span>
          </div>
        </div>
        <div className=" flex items-center justify-center px-6">
          <div className="relative w-full max-w-5xl h-[450px] lg:h-[500px]">
            {projects.map((project) => (
              <div
                key={project.id}
                className="project-card absolute inset-0 z-10"
              >
                <div className="w-full h-full bg-[#0a0a0a] border border-zinc-900 rounded-[1.5rem] overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-2">
                  {/* Visual Section: Refined Aspect */}
                  <Link
                    href={`/projects/${project.id}`}
                    className="relative group overflow-hidden border-b lg:border-b-0 lg:border-r border-zinc-900 cursor-pointer h-48 lg:h-full"
                  >
                    <Image
                      src={`/${project.image}`}
                      alt={project.title}
                      fill
                      className="object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-6 left-6">
                      <div className="flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/10 rounded-full">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                        <span className="text-white text-[9px] font-bold uppercase tracking-widest">
                          Open Case Study
                        </span>
                      </div>
                    </div>
                  </Link>

                  {/* Content Section: Tightened Typography */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center bg-[#0d0d0d]">
                    <div className="flex items-center gap-2 mb-4">
                      <TbPointFilled className="text-orange-600 size-3" />
                      <span className="text-zinc-600 font-mono text-[9px] uppercase tracking-[0.3em]">
                        System_Report
                      </span>
                    </div>

                    <h2 className="text-3xl lg:text-5xl font-black text-white uppercase tracking-tighter leading-tight mb-4">
                      {project.title}
                    </h2>

                    <p className="text-zinc-400 text-sm lg:text-base font-light leading-relaxed line-clamp-3 mb-8 border-l-2 border-orange-600/30 pl-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.category.slice(0, 3).map((cat, idx) => (
                        <span
                          key={idx}
                          className="text-[8px] font-mono text-zinc-500 border border-zinc-800 px-2 py-0.5 rounded uppercase"
                        >
                          {cat.name}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/projects/${project.id}`}
                      className="flex items-center gap-4 text-white text-[10px] font-bold uppercase tracking-[0.2em] group w-fit"
                    >
                      <span className="group-hover:text-orange-500 transition-colors">
                        Access_Technical_Dossier
                      </span>
                      <div className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center group-hover:bg-orange-500 group-hover:border-orange-500 transition-all duration-300">
                        <FaArrowRight
                          size={12}
                          className="group-hover:translate-x-0.5 transition-transform"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePinStack;
