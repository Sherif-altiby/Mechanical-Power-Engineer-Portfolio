"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { projects } from "@/data";
import Link from "next/link";

const ExperienceFlexStack = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Auto-play functionality (optional - remove if not needed)
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div className="bg-[#050505] mt-15">
      <section className="w-full flex flex-col justify-center overflow-hidden relative">
        
        {/* Section Header */}
        <div className="max-w-6xl mx-auto w-full px-6 mb-12 z-50">
        <div className="flex items-center gap-6">
          <h2 className="text-white font-black md:text-3xl uppercase tracking-tighter italic">
            <span className="text-[#d4ff3f]">/</span> Selected Projects
          </h2>
          <div className="h-[1px] flex-1 bg-white/10" />
        </div>
      </div>

        {/* Carousel Container */}
        <div className="relative px-4 md:px-6">
          <div className="relative w-full max-w-5xl mx-auto">
            
            {/* Cards */}
            <div className="relative h-[600px] md:h-[400px] lg:h-[500px] overflow-hidden">
              {projects.map((project, i) => (
                <div
                  key={project.id}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
                    i === currentIndex
                      ? "opacity-100 translate-x-0 scale-100 z-20"
                      : i < currentIndex
                      ? "opacity-0 -translate-x-full scale-95 z-10"
                      : "opacity-0 translate-x-full scale-95 z-10"
                  }`}
                  style={{
                    animation: i === currentIndex 
                      ? direction > 0 
                        ? "slideInRight 0.7s ease-out" 
                        : "slideInLeft 0.7s ease-out"
                      : "none"
                  }}
                >
                  <div className="w-full h-full">
                    <div className="w-full h-full bg-[#0a0a0a] border border-white/5 rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-2">
                      
                      {/* Image Section */}
                      <div className="relative h-48 md:h-64 lg:h-full bg-zinc-900 overflow-hidden group">
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
                      <div className="p-2 md:p-8 lg:p-10 flex flex-col justify-center bg-[#0d0d0d] relative">
                        <span className="text-[#d4ff3f] font-mono text-[10px] mb-3 md:mb-4 tracking-[0.3em] uppercase">
                          Project {String(i + 1).padStart(2, '0')}
                        </span>
                        <h3 className="text-lg md:text-2xl lg:text-3xl font-black text-white uppercase tracking-tighter leading-none mb-3 md:mb-6">
                          {project.title}
                        </h3>
                        <p className="text-zinc-500 text-sm md:text-base leading-relaxed mb-6 md:mb-8 max-w-sm text-justify">
                          {project.description}
                        </p>
                        
                        {/* Link Button */}
                        <Link 
                          href={`/projects/${project.id}`} 
                          className="mt-auto h-10 md:h-12 w-32 md:w-36 border border-white/10 rounded-full flex items-center justify-center text-[10px] md:text-xs font-bold uppercase tracking-widest text-white hover:bg-[#d4ff3f] hover:text-black transition-all duration-300 cursor-pointer"
                        >
                          View Project
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute -left-4 md:left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 bg-white/5 hover:bg-[#d4ff3f] border border-white/10 rounded-full flex items-center justify-center text-white hover:text-black transition-all duration-300 backdrop-blur-sm group"
              aria-label="Previous project"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute -right-4 md:right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 bg-white/5 hover:bg-[#d4ff3f] border border-white/10 rounded-full flex items-center justify-center text-white hover:text-black transition-all duration-300 backdrop-blur-sm group"
              aria-label="Next project"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 md:gap-3 mt-6 md:mt-8">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === currentIndex
                    ? "w-8 md:w-10 h-2 bg-[#d4ff3f]"
                    : "w-2 h-2 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to project ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Add keyframe animations */}
      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100%) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-100%) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default ExperienceFlexStack;