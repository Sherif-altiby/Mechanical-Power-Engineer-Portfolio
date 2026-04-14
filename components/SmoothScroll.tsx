"use client";

import { ReactLenis } from '@studio-freight/react-lenis';
import { useEffect, useRef, ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const SmoothScroll = ({ children }: { children: ReactNode }) => {
  const lenisRef = useRef<any>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => gsap.ticker.remove(update);
  }, []);

  return (
    <ReactLenis 
      root 
      ref={lenisRef}
      options={{ 
        // 0.05 - 0.08 provides that ultra-smooth, premium AEC software feel
        lerp: 0.07, 
        duration: 1.5, 
        smoothWheel: true,
        wheelMultiplier: 1.1, // Slightly boost the wheel for responsiveness
        touchMultiplier: 2,
        infinite: false,
      }}
    >
      {children as any}
    </ReactLenis>
  );
};