"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { projects } from "@/data";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const ExperienceFlexStack = () => {
  const componentRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".project-card");
      
      // 1. Master Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          // Giving enough scroll room for all cards to cycle
          end: `+=${cards.length * 1000}`, 
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        }
      });

      // 2. Build the stacking sequence
      cards.forEach((card, i) => {
        const isLast = i === cards.length - 1;
        const cardInner = card.querySelector(".card-content");

        // ENTRY: All cards (except the first one) fly in from the left
        if (i > 0) {
          tl.fromTo(card, 
            { x: "-120vw", rotate: -10, opacity: 0 },
            { x: "0vw", rotate: 0, opacity: 1, ease: "power2.inOut" },
            `card-${i}` // Label ensures this starts when the previous exit starts
          );
        }

        // EXIT: Current card shrinks as the next one arrives
        if (!isLast) {
          tl.to(cardInner, {
            scale: 0.75,
            x: "20vw",
            opacity: 0,
            filter: "blur(12px)",
            ease: "power2.inOut"
          }, 
          `card-${i + 1}` // Sequenced with the next card's entry
          );
        }
      });
    }, componentRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={componentRef} className="bg-[#050505]">
      <section ref={triggerRef} className="h-screen w-full flex flex-col justify-center overflow-hidden relative">
        
        {/* Section Header */}
        <div className="max-w-6xl mx-auto w-full px-6 mb-12 z-50">
          <div className="flex items-center gap-6">
            <h2 className="text-white font-black text-3xl uppercase tracking-tighter italic">
              <span className="text-[#d4ff3f]">/</span> Selected Projects
            </h2>
            <div className="h-[1px] flex-1 bg-white/10" />
            
          </div>
        </div>

        {/* Stacking Deck */}
        <div className="relative flex items-center justify-center px-6">
          <div className="relative w-full max-w-5xl h-[500px] lg:h-[600px]">
            {projects.map((project, i) => (
              <div
                key={project.id}
                className="project-card absolute inset-0 will-change-transform"
                style={{ zIndex: i }}
              >
                <div className="card-content w-full h-100">
                  <div className="w-full h-full bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-2">
                    
                    {/* Image Section */}
                    <div className="relative h-48 lg:h-full bg-zinc-900 overflow-hidden group">
                      <Image 
                        src={`/${project.image}`} 
                        alt={project.title} 
                        fill 
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        priority={i === 0} 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>

                    {/* Content Section */}
                    <div className="p-10 lg:p-16 flex flex-col justify-center bg-[#0d0d0d] relative">
                      <span className="text-[#d4ff3f] font-mono text-[10px] mb-4 tracking-[0.3em]">
                        DATA_SLOT_0{i + 1}
                      </span>
                      <h3 className="text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter leading-none mb-6">
                        {project.title}
                      </h3>
                      <p className="text-zinc-500 text-sm leading-relaxed mb-8 max-w-sm">
                        {project.description}
                      </p>
                      
                      {/* Link UI Placeholder */}
                      <Link href={`/projects/${project.id}`} className="mt-auto h-10 w-32 border border-white/10 rounded-full flex items-center justify-center text-[10px] font-bold uppercase tracking-widest text-white hover:bg-[#d4ff3f] hover:text-black transition-all cursor-pointer">
                        View Project
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Scroll Buffer for the following section */}
      <div className="h-[20vh] bg-[#050505]" />
    </div>
  );
};

export default ExperienceFlexStack;