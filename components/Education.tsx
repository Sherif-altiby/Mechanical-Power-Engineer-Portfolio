"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { education } from "@/data";

gsap.registerPlugin(ScrollTrigger);

const TechnicalAcademicLog: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);



  useEffect(() => {
    const ctx = gsap.context(() => {
      // reveal cards on scroll
      const nodes = gsap.utils.toArray(".edu-card");
      nodes.forEach((node: any) => {
        gsap.fromTo(
          node,
          { opacity: 0, x: -20, filter: "blur(10px)" },
          {
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
            duration: 1,
            ease: "expo.out",
            scrollTrigger: {
              trigger: node,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-[#020202]  py-10 px-6">
      
       <div className="max-w-6xl mx-auto w-full px-6 mb-12 z-50">
          <div className="flex items-center gap-6">
            <h2 className="text-white font-black md:text-3xl uppercase tracking-tighter italic">
              <span className="text-[#d4ff3f]">/</span> Education & Academic Log
            </h2>
            <div className="h-[1px] flex-1 bg-white/10" />
            
          </div>
        </div>
      
      <div className="max-w-6xl mx-auto">
        {/* SECTION HEADER */}

        <div className="space-y-12">
          {education.map((item, idx) => (
            <div
              key={idx}
              className="edu-card group grid grid-cols-1 lg:grid-cols-[120px_1fr] border border-zinc-900 bg-zinc-950/20 overflow-hidden"
            >
              {/* SIDEBAR METADATA */}
              <div className="bg-zinc-950 border-r border-zinc-900 flex flex-col items-center justify-between py-8 text-zinc-700 font-mono">
                
                <div className="w-1 h-12 bg-zinc-900 rounded-full overflow-hidden">
                  <div
                    className="w-full h-full origin-top transition-transform duration-700 group-hover:scale-y-100 scale-y-0"
                    style={{ backgroundColor: item.accent }}
                  />
                </div>
                <span className="text-xs font-bold text-zinc-800 italic">
                  0{idx + 1}
                </span>
              </div>

              {/* MAIN CONTENT */}
              <div className="p-3 md:p-8 lg:p-12 relative">
                {/* STATUS TAG */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_200px] gap-12 items-end">
                  <div className="space-y-6">
                    <div>
                      <h3 className="md:text-4xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-none group-hover:text-orange-500 transition-colors duration-500">
                        {item.uni}
                      </h3>
                      <p className="text-blue-500 font-mono text-xs tracking-[0.2em] mt-4 uppercase font-bold italic">
                        {item.degree}
                      </p>                                                         
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {item.details.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-zinc-900/50 border border-zinc-800 text-[9px] font-mono text-zinc-500 uppercase tracking-widest"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="lg:text-right border-l lg:border-l-0 lg:border-r border-zinc-900 pl-8 lg:pl-0 lg:pr-8">
                    <p className="text-[9px] font-mono text-zinc-600 mb-2 tracking-widest uppercase">
                      TEMPORAL_LOG
                    </p>
                    <p className="md:text-3xl font-black text-white italic tracking-tighter">
                      {item.period}
                    </p>
                  </div>
                </div>
              </div>

              {/* SCAN LINE DECOR */}
              <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-orange-500/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-1000" />
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default TechnicalAcademicLog;
