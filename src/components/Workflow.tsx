"use client";

import React, { useState } from "react";

export default function Workflow() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { num: "01", title: "Meta Lead Form", desc: "Lead submits details via ad or site form", tag: "Ingestion", icon: "📥" },
    { num: "02", title: "Instant CRM Capture", desc: "Data immediately synced to central system", tag: "Sync", icon: "⚡" },
    { num: "03", title: "AI Tags Lead", desc: "AI assesses intent, budget, and priority", tag: "AI Scoring", icon: "🤖" },
    { num: "04", title: "Instant Reply", desc: "Personalized reply delivered in seconds", tag: "Speed", icon: "🚀" },
    { num: "05", title: "Sales Alert", desc: "Rep notified with complete context", tag: "Handoff", icon: "🔔" },
    { num: "06", title: "AI Follow-up", desc: "Nurtures non-responsive leads automatically", tag: "Nurture", icon: "🔄" },
    { num: "07", title: "Prospect Replies", desc: "AI parses reply for booking readiness", tag: "Intent", icon: "💬" },
    { num: "08", title: "Calendar Link", desc: "Instant booking link sent to qualified lead", tag: "Booking", icon: "📅" },
    { num: "09", title: "Deal Pipeline", desc: "Deal created & assigned automatically", tag: "CRM", icon: "💼" },
    { num: "10", title: "Manager Dashboard", desc: "Real-time analytics and tracking", tag: "Visibility", icon: "📊" },
  ];

  return (
    <section id="workflow" className="scroll-mt-20 py-16 md:py-32 flex flex-col justify-center relative overflow-hidden">
      <div className="max-w-md md:max-w-5xl lg:max-w-6xl xl:max-w-7xl w-full max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-serif tracking-widest text-amber-700 bg-amber-100/80 px-3.5 py-1 rounded-full border border-amber-200 inline-block mb-3">
            Interactive 3D Pipeline
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-balance mb-4">
            Sales Engine Workflow
          </h2>
          <p className="font-sans text-lg md:text-xl text-text-medium">
            How our 10-step automated workflow turns raw leads into booked meetings seamlessly.
          </p>
        </div>

        {/* 3D Interactive Pipeline Grid Container */}
        <div className="[perspective:1200px] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
          {steps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <div
                key={idx}
                onMouseEnter={() => setActiveStep(idx)}
                className={`group relative p-6 rounded-[2rem] bg-white/90 border-2 transition-all duration-500 cursor-pointer transform-gpu preserve-3d flex flex-col justify-between ${
                  isActive
                    ? "border-amber-400 [transform:rotateX(8deg)_rotateY(-6deg)_translateZ(20px)] shadow-[0_25px_60px_rgba(255,140,0,0.4)] bg-white"
                    : "border-text/10 hover:[transform:rotateX(8deg)_rotateY(-6deg)_translateZ(15px)] hover:border-amber-400/80 hover:shadow-xl"
                }`}
              >
                {/* Explosive Red & Yellow Hover Glowing Aura */}
                <div className="absolute -inset-2 rounded-[2.5rem] bg-gradient-to-r from-red-600 via-yellow-400 to-amber-500 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 -z-10 pointer-events-none animate-pulse" />
                <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-red-500 via-amber-400 to-yellow-300 opacity-0 group-hover:opacity-90 blur-md transition-all duration-300 -z-10 pointer-events-none" />

                <div>
                  {/* Step Icon & Number Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-2xl bg-amber-100/80 border border-amber-200 flex items-center justify-center text-xl shadow-xs transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                      {step.icon}
                    </div>
                    <span className="font-serif text-xs font-extrabold text-amber-700 tracking-widest bg-lime/60 px-2.5 py-1 rounded-full border border-lime">
                      STEP {step.num}
                    </span>
                  </div>

                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-full inline-block mb-3 border border-amber-200/60">
                    {step.tag}
                  </span>

                  <h3 className="font-serif text-xl font-medium mb-2 leading-snug text-text group-hover:text-amber-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-text/80 text-pretty leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Animated 3D Flow Arrow Node */}
                <div className="mt-6 pt-3 border-t border-text/10 flex items-center justify-between text-xs text-text-medium">
                  <span className="font-mono text-[10px] font-semibold text-stone-400">
                    PHASE {idx + 1}/10
                  </span>
                  <div className="w-6 h-6 rounded-full bg-lime/40 group-hover:bg-amber-400 group-hover:text-black flex items-center justify-center text-xs font-bold transition-all duration-300 group-hover:translate-x-1">
                    ➔
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
