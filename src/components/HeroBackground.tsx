import React from "react";

export function HeroBackground() {
  return (
    <div
      aria-hidden="true"
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                 w-[550px] h-[550px] sm:w-[650px] sm:h-[650px] md:w-[750px] md:h-[750px] rounded-full
                 opacity-70 pointer-events-none -z-10 animate-pulse-glow"
      style={{
        background: "radial-gradient(circle, #dbeafe 0%, #eff6ff 55%, transparent 75%)",
        filter: "blur(40px)",
      }}
    />
  );
}
