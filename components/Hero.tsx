"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { SiAutocad, SiAutodeskrevit } from "react-icons/si";
import {
  TbActivity,
  TbBox,
  TbBrandFacebook,
  TbBrandLinkedin,
  TbMail,
} from "react-icons/tb";
import { gsap } from "gsap";
import Link from "next/link";


const BIMIcon = () => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
);

const ModernHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const title1Ref = useRef<HTMLDivElement>(null);
  const title2Ref = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const socialRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const imageCardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const badgeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const progressRef = useRef<HTMLDivElement>(null);

  const programs = [
    {
      name: "Revit",
      icon: <SiAutodeskrevit />,
      color: "text-blue-500",
      pos: "top-0 -left-6 md:-left-12",
    },
    {
      name: "AutoCAD",
      icon: <SiAutocad />,
      color: "text-red-500",
      pos: "top-1/4 -right-8 md:-right-16",
    },
    {
      name: "Enscape",
      icon: <TbBox />,
      color: "text-orange-400",
      pos: "bottom-12 -left-6 md:-left-14",
    },
    {
      name: "BIM",
      icon: <BIMIcon />,
      color: "text-[#d4ff3f]",
      pos: "bottom-2 -right-6 md:-right-10",
    },
  ];

  const socialLinks = [
    { icon: <TbBrandLinkedin />, href: "https://www.linkedin.com/in/mohamed-hadhoud-360844293/", label: "LinkedIn" },
    { icon: <TbBrandFacebook />, href: "https://www.facebook.com/share/1GQuQ8fbxZ/", label: "Facebook" },
    { icon: <TbMail />, href: "mailto:meltiebe@gmail.com", label: "Gmail" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([title1Ref.current, title2Ref.current], { opacity: 0, y: 100 });
      gsap.set(badgeRef.current, { opacity: 0, scale: 0.5 });
      gsap.set([subtitleRef.current, descriptionRef.current], {
        opacity: 0,
        y: 30,
      });
      gsap.set(socialRefs.current, { opacity: 0, y: 20, scale: 0.8 });
      gsap.set(imageCardRef.current, { opacity: 0, scale: 0.8, rotateY: -15 });
      gsap.set(badgeRefs.current, { opacity: 0, scale: 0, rotate: -180 });
      gsap.set(progressRef.current, { opacity: 0, x: -50 });
      gsap.set(glowRef.current, { opacity: 0, scale: 0.5 });

      // Create master timeline
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Badge entrance
      tl.to(badgeRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
      });

      // Title animations with stagger
      tl.to(
        title1Ref.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power4.out",
        },
        "-=0.3",
      ).to(
        title2Ref.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power4.out",
        },
        "-=0.6",
      );

      // Subtitle and description
      tl.to(
        [subtitleRef.current, descriptionRef.current],
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.2,
        },
        "-=0.4",
      );

      // Social icons with bounce
      tl.to(
        socialRefs.current,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "back.out(1.7)",
        },
        "-=0.3",
      );

      // Glow effect
      tl.to(
        glowRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
        },
        0,
      );

      // Image card entrance
      tl.to(
        imageCardRef.current,
        {
          opacity: 1,
          scale: 1,
          rotateY: 0,
          duration: 1.2,
          ease: "power2.out",
        },
        0.3,
      );

      // Software badges with rotation
      tl.to(
        badgeRefs.current,
        {
          opacity: 1,
          scale: 1,
          rotate: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "back.out(1.7)",
        },
        "-=0.8",
      );

      // Progress bar
      tl.to(
        progressRef.current,
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.4",
      );

      // Continuous animations
      // Float animation for image
      gsap.to(imageCardRef.current, {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      // Rotate badges subtly
      badgeRefs.current.forEach((badge, i) => {
        if (badge) {
          gsap.to(badge, {
            rotate: i % 2 === 0 ? 5 : -5,
            duration: 2 + i * 0.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        }
      });

      // Pulse glow effect
      gsap.to(glowRef.current, {
        scale: 1.2,
        opacity: 0.8,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Hover effects for social icons
      socialRefs.current.forEach((social) => {
        if (social) {
          social.addEventListener("mouseenter", () => {
            gsap.to(social, {
              scale: 1.15,
              y: -5,
              duration: 0.3,
              ease: "back.out(1.7)",
            });
          });

          social.addEventListener("mouseleave", () => {
            gsap.to(social, {
              scale: 1,
              y: 0,
              duration: 0.3,
              ease: "power2.out",
            });
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center bg-[#050505] text-white overflow-hidden py-16 lg:py-0"
    >
      {/* Animated Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        {/* Left Side */}
        <div className="order-2 lg:order-1 space-y-8 text-center lg:text-left">
          <div
            ref={badgeRef}
            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mx-auto lg:mx-0"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4ff3f] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#d4ff3f]"></span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#d4ff3f]">
              Available for Projects
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] uppercase">
            <div ref={title1Ref}>Mohamed</div>
            <div
              ref={title2Ref}
              className="text-transparent stroke-white translate-x-14 mt-2"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.8)" }}
            >
              Hadhoud
            </div>
          </h1>

          <div className="flex flex-col gap-4">
            <p
              ref={subtitleRef}
              className="text-xl md:text-3xl text-slate-200 font-light tracking-tight"
            >
              Mechanical Engineer <span className="text-zinc-600 px-2">//</span>{" "}
              <span className="text-[#d4ff3f]">BIM Modeler</span>
            </p>
            <p
              ref={descriptionRef}
              className="text-slate-500 text-base md:text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed font-light"
            >
              I am a passionate Mechanical Power Engineer with experience in MEP
              systems, including HVAC, Firefighting, and Plumbing. Skilled in
              AutoCAD, Revit, and Navisworks, and always eager to learn and
              develop my engineering skills through real projects.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
            {socialLinks.map((social, i) => (
              <Link
                key={i}
                ref={(el) => {
                  socialRefs.current[i] = el;
                }}
                href={social.href}
                className="relative p-4 bg-zinc-900 border border-white/10 rounded-2xl hover:border-[#d4ff3f]/50 transition-colors cursor-pointer"
              >
                <div className="text-xl text-white hover:text-[#d4ff3f] transition-colors">
                  {social.icon}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Right Side - Animated Card */}
        <div className="order-1 lg:order-2 relative min-h-[500px] flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div
              ref={glowRef}
              className="absolute w-[400px] h-[400px] bg-[#d4ff3f]/10 rounded-full blur-[100px]"
            />
          </div>

          <div className="relative w-full max-w-[300px] sm:max-w-sm aspect-[3/4]">
            <div
              ref={imageCardRef}
              className="relative w-full h-full bg-[#0a0a0a] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl group"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div ref={imageRef} className="relative w-full h-full">
                <Image
                  src="/hero.png"
                  alt="Mohamed"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
              </div>
            </div>

            {/* Animated Software Badges */}
            {programs.map((prog, i) => (
              <div
                key={i}
                ref={(el) => {
                  badgeRefs.current[i] = el;
                }}
                className={`absolute ${prog.pos} z-20`}
              >
                <div className="p-4 bg-[#111]/90 backdrop-blur-xl border border-white/10 rounded-2xl flex flex-col items-center hover:border-[#d4ff3f]/30 transition-colors cursor-pointer">
                  <div className={`text-2xl ${prog.color}`}>{prog.icon}</div>
                  <span className="text-[7px] font-mono font-bold text-zinc-500 uppercase tracking-[0.2em]">
                    {prog.name}
                  </span>
                </div>
              </div>
            ))}

            <div
              ref={progressRef}
              className="absolute -bottom-8 left-6 p-5 bg-[#0f0f0f]/90 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] z-20 flex items-center gap-5"
            >
              <TbActivity className="text-[#d4ff3f] text-2xl" />
              <div className="h-1.5 w-24 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full w-[98%] bg-[#d4ff3f] animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .stroke-white {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </section>
  );
};

export default ModernHero;
