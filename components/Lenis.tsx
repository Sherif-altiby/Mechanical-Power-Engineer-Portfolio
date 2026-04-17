// components/SmoothScroll.tsx
"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function SmoothScroll({ children }: { children: any }) {
  const lenisRef = useRef<any>(null);

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);
    return () => gsap.ticker.remove(update);
  }, []);

  return (
    <ReactLenis
      ref={lenisRef}
      root
      options={{
        lerp: 0.05, // Changed from 0.08 to 0.05 for more "weight"
        duration: 1.8, // Increased for a longer, smoother glide
        smoothWheel: true,
        wheelMultiplier: 0.9, // Slightly reduce speed for more control
        touchMultiplier: 2,
        infinite: false,
      }}
    >
      {children}
    </ReactLenis>
  );
}
