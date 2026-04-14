"use client";
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const TabbedTerminalExperience: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const detailRef = useRef<HTMLDivElement>(null);

  const experience = [
    { 
      role: "Mechanical Design Engineer", 
      company: "ASECBIM", 
      location: "Remote",
      time: "10/2025 — Present", 
      desc: "Architected high-precision MEP revisions and BIM structural logic. Engineered automated clash detection workflows and structural integrity audits.",
      skills: ["MEP Design", "Revit MEP", "BIM", "Coordination"] 
    },
    { 
      role: "Automotive Specialist", 
      company: "MCV", 
      location: "Egypt",
      time: "08/2024 — 09/2024", 
      desc: "Developed and maintained car systems including engine architecture, electrical diagnostics, and control sensors. Collaborated with cross-functional teams to optimize PFMEA protocols.",
      skills: ["OBD", "Electric Systems", "PFMEA", "Diagnostics"] 
    },
    { 
      role: "Mechanical Design Engineer", 
      company: "ASEC", 
      location: "Egypt",
      time: "07/2024 — 09/2024", 
      desc: "Master CAD designer for large-scale HVAC, firefighting, and plumbing infrastructures. Deep integration with BIM technology using Revit for complex systems.",
      skills: ["AutoCAD", "HVAC", "Plumbing", "Firefighting"] 
    },
    { 
      role: "Quality Control Engineer", 
      company: "U.S. Chamber", 
      location: "Egypt",
      time: "08/2023 — 09/2023", 
      desc: "Implemented statistical quality improvement methodologies and measurement systems. Detected failure modes and optimized solutions for process management.",
      skills: ["PFMEA", "Statistical Quality", "Process Design"] 
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entry animation for content
      gsap.fromTo(".data-readout", 
        { opacity: 0, x: 10, filter: "blur(5px)" },
        { opacity: 1, x: 0, filter: "blur(0px)", duration: 0.4, ease: "power2.out" }
      );
      
      // Vertical accent line animation
      gsap.fromTo(".nav-accent", 
        { height: 0, top: "50%" },
        { height: "100%", top: "0%", duration: 0.5, ease: "expo.out" }
      );
    }, detailRef);
    return () => ctx.revert();
  }, [activeIdx]);

  return (
    <section className="min-h-[600px] bg-[#0A0A0A] text-zinc-400 p-6 font-sans">
      
      {/* HEADER SECTION */}
      <div className="flex items-center  gap-4 mb-12 ">
        <div className="text-orange-500 font-black text-2xl italic tracking-tighter">/ <span className="text-white" > Experience </span></div>
      </div>

      <div className="flex flex-col md:flex-row gap-12 max-w-6xl mx-auto min-h-[400px]">
        
        {/* LEFT NAV RAIL */}
        <div className="w-full md:w-64 flex flex-col border-l border-zinc-800 relative">
          
          <div className="flex flex-col gap-1">
            {experience.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIdx(idx)}
                className={`text-left py-4 pl-6 relative transition-all duration-300 group ${
                  activeIdx === idx ? "text-white bg-zinc-900/40" : "hover:text-zinc-200"
                }`}
              >
                {activeIdx === idx && (
                  <div className="nav-accent absolute left-0 w-[2px] bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]" />
                )}
                <span className={`text-sm font-bold uppercase tracking-widest ${activeIdx === idx ? "opacity-100" : "opacity-40 group-hover:opacity-100"}`}>
                  {item.company}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT DATA PANE */}
        <div ref={detailRef} className="flex-1 relative">
          <div className="data-readout space-y-6">
            
            {/* ROLE HEADER */}
            <div>
              <h2 className="text-3xl font-black text-white uppercase tracking-tighter leading-none mb-2">
                {experience[activeIdx].role} <span className="text-orange-500">@ {experience[activeIdx].company}</span>
              </h2>
              <p className="text-xs font-mono text-zinc-500 tracking-widest uppercase">
                {experience[activeIdx].time} | {experience[activeIdx].location}
              </p>
            </div>

            {/* DESCRIPTION BULLET */}
            <div className="flex gap-4 items-start py-8 border-y border-zinc-900">
               <span className="text-orange-500 text-lg mt-1">▹</span>
               <p className="text-zinc-400 text-lg leading-relaxed font-light max-w-3xl italic">
                 {experience[activeIdx].desc}
               </p>
            </div>

            {/* SKILLS CHIPS */}
            <div className="flex flex-wrap gap-2 pt-4">
              {experience[activeIdx].skills.map(skill => (
                <span key={skill} className="px-4 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-[10px] font-bold text-zinc-300 uppercase tracking-widest">
                  {skill}
                </span>
              ))}
            </div>

          </div>

       
        </div>

      </div>
    </section>
  );
};

export default TabbedTerminalExperience;