"use client";

import React, { useState, useEffect } from "react";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-xl">
      <div className="p-4 rounded-2xl bg-black/90 text-white backdrop-blur border border-white/10 shadow-2xl flex items-center justify-between gap-4">
        <span className="font-serif text-sm md:text-base font-light text-balance">
          See How We Automate Lead Management
        </span>
        <a
          href="https://www.aceintelligence.systems/contact"
          className="inline-flex font-serif uppercase items-center justify-center cursor-pointer rounded-lg bg-lime text-text hover:bg-lime/90 text-sm font-semibold h-10 px-5 whitespace-nowrap shrink-0 transition-colors"
        >
          Get Started
        </a>
      </div>
    </div>
  );
}
