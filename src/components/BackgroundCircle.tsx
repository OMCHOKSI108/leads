"use client";

import React, { useEffect, useState } from "react";

export default function BackgroundCircle() {
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updatePosition = () => {
      // Parallax movement formula: moves down smoothly as user scrolls
      const scrollY = window.scrollY;
      setTranslateY(scrollY * 0.55);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updatePosition);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    updatePosition();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed top-[10vh] left-1/2 -translate-x-1/2 z-[1] w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] md:w-[900px] md:h-[900px] lg:w-[1050px] lg:h-[1050px] rounded-full bg-white shadow-[0_0_140px_rgba(255,255,255,1),0_0_220px_rgba(213,255,122,0.9)] blur-xl opacity-95 transition-transform duration-75 ease-out"
      style={{
        transform: `translate(-50%, ${translateY}px)`,
        willChange: "transform",
      }}
    />
  );
}
