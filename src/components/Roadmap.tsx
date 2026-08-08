import React from "react";

export default function Roadmap() {
  const steps = [
    {
      phase: "Week 1",
      title: "Audit & Discover",
      desc: "Audit current lead flows, tech stack, and mapping requirements.",
      img: "/images/connections.2t_cuong96vcxa17f.png",
      bullets: ["Lead Flow Mapping", "CRM Architecture Review", "API Connector Setup"],
      badgeColor: "bg-red-500 text-white",
    },
    {
      phase: "Week 2-3",
      title: "Build AI Engine",
      desc: "Develop AI qualification models, CRM hooks, and messaging triggers.",
      img: "/images/development.0peqb7smwvv8wa17f.png",
      bullets: ["AI Prompt Engineering", "Multi-channel Webhooks", "Automated Calendar Sync"],
      badgeColor: "bg-amber-500 text-white",
    },
    {
      phase: "Week 4",
      title: "Test & Refine",
      desc: "Simulate lead scenarios, test edge cases, and align sales alerts.",
      img: "/images/mailing.1c2_5sq3zru0oa17f.png",
      bullets: ["Scenario Stress-Testing", "Rep Handoff Drills", "Edge-Case Guardrails"],
      badgeColor: "bg-yellow-400 text-black",
    },
    {
      phase: "Week 5",
      title: "Launch & Scale",
      desc: "Go live with active monitoring, pipeline analytics, and fine-tuning.",
      img: "/images/platform.3j7aasmhn3ul1a17f.png",
      bullets: ["Live System Deployment", "Real-Time Dashboard", "Continuous Optimization"],
      badgeColor: "bg-lime text-black",
    },
  ];

  return (
    <section id="roadmap" className="py-12 md:py-20 flex flex-col justify-center relative overflow-hidden">
      <div className="max-w-6xl w-full mx-auto px-4 md:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase font-serif tracking-widest bg-black text-white px-4 py-1.5 rounded-full inline-block mb-4 font-bold shadow">
            5-Week Deployment Path
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-balance mb-4 font-light"
            style={{ color: "inherit", textShadow: "0 1px 3px rgba(0,0,0,0.15)" }}>
            Implementation Roadmap
          </h2>
          <p className="font-sans text-base md:text-lg max-w-lg mx-auto font-normal"
            style={{ color: "inherit", opacity: 0.85 }}>
            A structured, battle-tested path from initial audit to fully optimized AI automation.
          </p>
        </div>

        {/* Connected Progress Line */}
        <div className="hidden lg:block relative mb-6">
          <div className="absolute top-1/2 left-8 right-8 h-0.5 bg-gradient-to-r from-red-500 via-amber-400 to-lime -translate-y-1/2 z-0 rounded-full opacity-50" />
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="group relative p-5 rounded-2xl border border-white/60 shadow-lg flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] hover:border-amber-400 overflow-hidden"
              style={{ backgroundColor: "rgba(255,255,255,0.92)", backdropFilter: "blur(16px)" }}
            >
              {/* Ambient Glow */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-red-500/15 via-yellow-400/15 to-amber-500/15 opacity-0 group-hover:opacity-100 blur-lg transition-all duration-500 -z-10 pointer-events-none" />

              <div>
                {/* Badge row */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-4 py-1.5 rounded-full font-serif text-sm font-bold tracking-wide shadow-sm transition-all duration-300 group-hover:scale-105 ${step.badgeColor}`}>
                    {step.phase}
                  </span>
                  <span className="font-serif text-lg font-extrabold text-black tracking-wider">
                    0{idx + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl md:text-2xl font-semibold mb-3 text-black group-hover:text-amber-600 transition-colors leading-tight">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-black text-pretty mb-5 leading-relaxed font-normal">
                  {step.desc}
                </p>

                {/* Image */}
                <div className="relative rounded-xl overflow-hidden border border-stone-200 bg-stone-50 mb-4 aspect-video transition-transform duration-500 group-hover:scale-[1.03] shadow-sm">
                  <img
                    src={step.img}
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Checklist */}
                <ul className="space-y-2 pt-4 border-t border-stone-100 text-sm font-medium">
                  {step.bullets.map((b, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-amber-500 font-bold text-base">✓</span>
                      <span className="text-black font-semibold">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
