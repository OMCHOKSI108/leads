import React from "react";

export default function SocialProof() {
  const metrics = [
    { value: "12+", label: "Businesses Automated" },
    { value: "150K", label: "Leads Managed" },
    { value: "92%", label: "Success Rate" },
    { value: "8+", label: "Industries Served" },
  ];

  return (
    <section data-marketing-bg="sage" className="pb-8 md:pb-12 flex flex-col justify-center relative overflow-hidden">
      <div className="max-w-md md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto w-full px-4">
        {/* Compact Metrics Row with Reduced Numerical Values */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {metrics.map((m, idx) => (
            <div
              key={idx}
              className="group relative px-4 py-3 rounded-xl bg-white/70 border border-text/10 text-center flex flex-row items-center justify-center gap-2 transition-all duration-300 hover:scale-105 hover:border-amber-400/80 hover:shadow-md"
            >
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-red-500/20 via-yellow-400/20 to-amber-500/20 opacity-0 group-hover:opacity-100 blur-md transition-all duration-300 -z-10" />
              <span className="font-serif text-base md:text-lg font-bold text-text group-hover:text-amber-600 transition-colors">
                {m.value}
              </span>
              <span className="text-xs text-text-medium font-medium">
                {m.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
