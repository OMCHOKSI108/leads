"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import SocialProof from "@/components/SocialProof";
import Workflow from "@/components/Workflow";
import QuickWins from "@/components/QuickWins";
import CaseStudies from "@/components/CaseStudies";
import Roadmap from "@/components/Roadmap";
import FloatingCTA from "@/components/FloatingCTA";
import FinalCTA from "@/components/FinalCTA";
import SmoothScroll from "@/components/SmoothScroll";
import { HeroBackground } from "@/components/HeroBackground";

export default function Page() {
  const [bgColor, setBgColor] = useState("#eff3e7");
  const [textColor, setTextColor] = useState("#1c1b1d");

  useEffect(() => {
    // Eye pupil mouse movement tracking
    const handleMouseMove = (e: MouseEvent) => {
      const pupils = document.querySelectorAll(".eye-pupil-left, .eye-pupil-right");
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (e.clientX - cx) / cx;
      const dy = (e.clientY - cy) / cy;
      const moveX = dx * 8;
      const moveY = dy * 8;

      pupils.forEach((pupil) => {
        (pupil as HTMLElement).style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Multi-color scroll: Light Green → Bright Green → Yellow → Orange → Black
    const palette = [
      { at: 0.00, bg: [239, 243, 231], text: [28, 27, 29] },   // Sage Green
      { at: 0.22, bg: [214, 244, 100], text: [28, 27, 29] },   // Lime Yellow
      { at: 0.44, bg: [250, 204, 21],  text: [28, 27, 29] },   // Vibrant Yellow
      { at: 0.62, bg: [249, 115, 22],  text: [255, 255, 255] }, // Vivid Orange
      { at: 0.80, bg: [194, 65, 12],   text: [255, 255, 255] }, // Deep Burnt Orange
      { at: 1.00, bg: [28, 27, 29],    text: [255, 255, 255] }, // Black
    ];

    const lerpColor = (a: number[], b: number[], t: number) =>
      a.map((v, i) => Math.round(v + (b[i] - v) * t));

    const handleScrollColor = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll <= 0) return;
      const progress = Math.min(Math.max(window.scrollY / maxScroll, 0), 1);

      // Find the two palette stops to interpolate between
      let from = palette[0], to = palette[1];
      for (let i = 0; i < palette.length - 1; i++) {
        if (progress >= palette[i].at && progress <= palette[i + 1].at) {
          from = palette[i];
          to = palette[i + 1];
          break;
        }
      }
      const range = to.at - from.at || 1;
      const t = (progress - from.at) / range;

      const bg = lerpColor(from.bg, to.bg, t);
      const txt = lerpColor(from.text, to.text, t);
      setBgColor(`rgb(${bg[0]},${bg[1]},${bg[2]})`);
      setTextColor(`rgb(${txt[0]},${txt[1]},${txt[2]})`);
    };

    window.addEventListener("scroll", handleScrollColor, { passive: true });
    handleScrollColor();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScrollColor);
    };
  }, []);

  return (
    <SmoothScroll>
      <div id="top" className="scroll-smooth" suppressHydrationWarning>
        <div hidden suppressHydrationWarning></div>
        <div
          className="marketing-page min-h-screen relative overflow-hidden transition-colors duration-1000 ease-in-out"
          style={{ backgroundColor: bgColor, color: textColor }}
          suppressHydrationWarning
        >
          {/* --- Top Right Header CTA Button --- */}
          <header className="fixed top-6 right-6 md:top-8 md:right-10 z-[70]">
            <a
              href="https://forms.gle/ohQKBrH1FoY9nj5L6"
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex font-serif uppercase items-center justify-center cursor-pointer rounded-2xl transition-all duration-300 ease-in-out whitespace-nowrap h-12 md:h-13 px-6 md:px-8 bg-lime text-text hover:bg-lime/90 hover:scale-105 shadow-lg border border-text/10 text-base md:text-lg font-bold tracking-wide"
            >
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-red-500/30 via-yellow-400/40 to-amber-500/30 opacity-0 group-hover:opacity-100 blur-md transition-all duration-300 -z-10" />
              Let&apos;s Discuss
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="fill-current svg-inline ml-2 -mt-0.5 h-4 w-4 md:h-5 md:w-5"
              >
                <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM289 361l88-88c9.4-9.4 9.4-24.6 0-33.9l-88-88c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l47 47L152 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l150.1 0-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0z" />
              </svg>
            </a>
          </header>

          <main className="overflow-hidden px-6 md:px-10 antialiased">
            {/* --- Hero Section --- */}
            <section
              id="hero-section"
              data-section-bg="#eff3e7"
              data-section-text="#1c1b1d"
              className="relative min-h-[max(600px,100dvh)] py-32 md:py-40 flex flex-col justify-center max-md:justify-evenly"
            >
              {/* Soft Blurred Blue CSS Blob Background */}
              <HeroBackground />
              
              <div className="relative z-10 max-w-md sm:max-w-xl md:max-w-2xl xl:max-w-5xl mx-auto text-center">
                {/* Motion Animated Heading */}
                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="font-serif font-light text-center text-4xl sm:text-5xl md:text-6xl xl:text-7xl text-balance mb-6"
                >
                  Real Estate Growth, Automated.
From first inquiry to closed deal — AI handles the work, you handle the clients.
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  className="font-sans text-center text-lg sm:text-xl md:text-2xl text-pretty max-w-3xl mx-auto mb-10 text-text/90"
                >
                  Automated lead capture, instant responses, intelligent follow-up. <strong className="font-semibold text-text">67% faster response times.</strong> <strong className="font-semibold text-text">72% more qualified leads.</strong>
                </motion.p>

                {/* Large Hero Action Card Container Box with Motion entrance */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                  className="p-8 md:p-12 lg:p-14 rounded-[2.5rem] bg-white/90 border-2 border-text/10 shadow-2xl backdrop-blur-md max-w-3xl lg:max-w-4xl mx-auto my-6 transition-all duration-300 hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)]"
                >
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-8">
                    <a
                      href="#workflow"
                      className="w-full sm:w-auto inline-flex font-serif uppercase items-center justify-center text-center cursor-pointer rounded-2xl transition-all duration-300 ease-in-out py-5 px-8 sm:px-12 bg-lime text-text hover:bg-lime/90 hover:scale-105 shadow-xl text-lg sm:text-xl md:text-2xl font-extrabold tracking-wide leading-snug"
                    >
                      See How It Works
                    </a>
                    <a
                      href="https://forms.gle/ohQKBrH1FoY9nj5L6"
                      target="_blank"
                      rel="noreferrer"
                      className="w-full sm:w-auto inline-flex font-serif uppercase items-center justify-center text-center cursor-pointer rounded-2xl transition-all duration-300 ease-in-out py-5 px-8 sm:px-12 bg-white text-text hover:bg-white/90 border-2 border-text/15 hover:border-amber-400 hover:scale-105 shadow-xl text-lg sm:text-xl md:text-2xl font-extrabold tracking-wide leading-snug"
                    >
                      Start Your Customized Plan
                    </a>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* --- AI Automation Agency Sections --- */}
            <div id="social-proof" data-section-bg="#eff3e7" data-section-text="#1c1b1d">
              <SocialProof />
            </div>
            <div id="workflow-section" data-section-bg="#e2efe0" data-section-text="#1c1b1d">
              <Workflow />
            </div>
            <div id="quick-wins" data-section-bg="#eff3e7" data-section-text="#1c1b1d">
              <QuickWins />
            </div>
            <div id="case-studies" data-section-bg="#eaf2df" data-section-text="#1c1b1d">
              <CaseStudies />
            </div>

            {/* --- Final CTA & Footer Section --- */}
            <FinalCTA />
          </main>
        </div>

        <div aria-hidden="true" className="pointer-events-none fixed z-[60] hidden md:block" style={{ boxShadow: "0 0 0 9999px #f9fbfb", top: "32px", right: "32px", bottom: "32px", left: "32px", borderRadius: "24px" }} suppressHydrationWarning></div>
        <FloatingCTA />
      </div>
    </SmoothScroll>
  );
}