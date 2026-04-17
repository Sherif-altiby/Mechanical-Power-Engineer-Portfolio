"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectAnimations() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Initial Header Entrance
      const tl = gsap.timeline();

      tl.to(".back-button", { x: 0, opacity: 1, duration: 0.8, delay: 0.2 })
        .to(".project-id", { y: 0, opacity: 1, duration: 0.5 }, "-=0.4")
        .to(".project-title", { y: 0, opacity: 1, duration: 1, ease: "power4.out" }, "-=0.3");

      // 2. Scroll-Triggered Reveal for Sections
      gsap.utils.toArray<HTMLElement>(".cat-section").forEach((section) => {
        gsap.to(section, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%", // Triggers when the section is 85% down the screen
            toggleActions: "play none none none",
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return null; // This component doesn't render HTML, it only runs logic
}