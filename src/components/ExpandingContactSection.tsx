"use client";

import React, { useEffect, useRef, useState } from "react";

export default function ExpandingContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [expandProgress, setExpandProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Smooth scroll progress: 0 when top enters viewport, 1 when section is fully centered
      const rawProgress = (windowHeight - rect.top) / (windowHeight * 0.85);
      const progress = Math.min(Math.max(rawProgress, 0), 1);

      if (!ticking) {
        window.requestAnimationFrame(() => {
          setExpandProgress(progress);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Compute smooth scale and max-width based on scroll progress
  const currentScale = 0.85 + expandProgress * 0.15; // 0.85 -> 1.0
  const currentMaxWidth = 820 + expandProgress * 560; // 820px -> 1380px
  const currentOpacity = 0.8 + expandProgress * 0.2; // 0.8 -> 1.0

  return (
    <div className="w-full flex justify-center py-8">
      <section
        id="contact"
        ref={sectionRef}
        data-marketing-bg="black"
        style={{
          maxWidth: `${currentMaxWidth}px`,
          transform: `scale(${currentScale})`,
          opacity: currentOpacity,
          willChange: "transform, max-width, opacity",
        }}
        className="w-full min-h-[max(600px,90dvh)] py-20 md:py-32 xl:py-40 flex flex-col justify-center relative bg-black text-white my-6 border border-white/20 shadow-[0_30px_90px_rgba(0,0,0,0.85)] rounded-3xl md:rounded-[3rem] transition-all duration-300 ease-out px-6 md:px-14"
      >
        <div className="max-w-md md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto my-auto text-center px-4">
          <div className="grid gap-8 text-center">
            <h2 className="font-serif font-light text-center text-4xl md:text-6xl xl:text-7xl text-balance tracking-tight leading-tight">
              Ready to Automate Your Lead Management?
            </h2>
            <p className="font-sans text-lg md:text-2xl text-stone-300 max-w-3xl mx-auto text-pretty font-light">
              <strong className="text-white font-semibold">Step 1:</strong> Tell us about your lead volume. <br className="hidden sm:inline" />
              <strong className="text-white font-semibold">Step 2:</strong> Receive your custom AI automation roadmap.
            </p>
            <a
              href="https://www.aceintelligence.systems/contact"
              className="w-full sm:w-auto inline-flex font-serif uppercase justify-self-center relative items-center justify-center text-center cursor-pointer rounded-2xl transition-all duration-300 ease-in-out py-4 px-8 sm:px-10 gap-3 bg-lime text-text hover:bg-lime/90 hover:scale-105 shadow-xl text-base sm:text-lg md:text-xl font-bold tracking-wide leading-snug max-w-full"
            >
              <span>Start Your Customized Plan</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="fill-current svg-inline flex-shrink-0 -mt-0.5 h-5 w-5 md:h-6 md:w-6"
              >
                <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM289 361l88-88c9.4-9.4 9.4-24.6 0-33.9l-88-88c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l47 47L152 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l150.1 0-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0z" />
              </svg>
            </a>
          </div>
        </div>

        <footer className="mt-24 pt-10 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-6xl mx-auto px-6 text-base text-stone-400">
            <div className="flex items-center gap-4">
              <a
                href="https://aceintelligence.systems"
                target="_blank"
                rel="noreferrer"
                className="text-lime hover:text-white transition-colors font-semibold tracking-wide"
              >
                aceintelligence.systems
              </a>
            </div>

            <div className="flex items-center gap-8 font-medium">
              <a
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
                href="https://www.instagram.com/aceintelligence_ai"
              >
                Instagram
              </a>
            </div>

            <div className="flex items-center gap-6 text-sm text-stone-500">
              <span>© 2026 aceintelligence.systems</span>
              <a className="hover:text-white transition-colors" href="/privacy">
                Privacy
              </a>
              <a className="hover:text-white transition-colors" href="/terms">
                Terms
              </a>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
}
