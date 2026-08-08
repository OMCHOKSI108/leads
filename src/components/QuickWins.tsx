import React from "react";

export default function QuickWins() {
  const tableData = [
    { metric: "Avg Response Time", before: "24+ hours", after: "4 minutes" },
    { metric: "Lead Qualification Rate", before: "60%", after: "92%" },
    { metric: "Leads Followed Up", before: "47%", after: "99%" },
    { metric: "Conversion Rate Lift", before: "Baseline", after: "+52% average" },
  ];

  return (
    <section className="py-16 md:py-28 flex flex-col justify-center">
      <div className="max-w-md md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto w-full px-4">

        {/* Section heading */}
        <h2
          className="text-4xl md:text-5xl lg:text-6xl text-center text-balance mb-4"
          style={{ fontFamily: '"Please Display", Georgia, serif', fontWeight: 800, color: "#1c1b1d" }}
        >
          What You&apos;ll See in Week 1
        </h2>
        <p
          className="text-center text-lg max-w-xl mx-auto mb-12"
          style={{ fontFamily: "Figtree, Arial, sans-serif", fontWeight: 600, color: "#22292b" }}
        >
          Immediate transformation in response times, qualification quality, and team efficiency.
        </p>

        {/* 3 Quick Wins Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">

          {/* Card 1 */}
          <div className="group relative p-6 rounded-3xl bg-sage/40 border border-text/10 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-amber-400/60 overflow-hidden">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-red-500/20 via-amber-400/20 to-yellow-400/20 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500 -z-10" />
            <div>
              <h3
                className="text-2xl mb-2"
                style={{ fontFamily: '"Please Display", Georgia, serif', fontWeight: 800, color: "#1c1b1d" }}
              >
                Instant Visibility
              </h3>
              <p
                className="text-sm text-pretty mb-6"
                style={{ fontFamily: "Figtree, Arial, sans-serif", fontWeight: 600, color: "#22292b" }}
              >
                Real-time pipeline tracking and full lead status transparency across all channels.
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-text/10 bg-white aspect-video mt-auto transition-transform duration-500 group-hover:scale-105">
              <img
                src="/images/social.3a0jnbhwck07da17f.png"
                alt="Instant Visibility Dashboard"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative p-6 rounded-3xl bg-sage/40 border border-text/10 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-amber-400/60 overflow-hidden">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-amber-500/20 via-yellow-400/20 to-red-400/20 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500 -z-10" />
            <div>
              <h3
                className="text-2xl mb-2"
                style={{ fontFamily: '"Please Display", Georgia, serif', fontWeight: 800, color: "#1c1b1d" }}
              >
                Faster Response
              </h3>
              <p
                className="text-sm text-pretty mb-6"
                style={{ fontFamily: "Figtree, Arial, sans-serif", fontWeight: 600, color: "#22292b" }}
              >
                Sub-5-minute initial contact with leads while interest and intent are highest.
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-text/10 bg-white aspect-video mt-auto transition-transform duration-500 group-hover:scale-105">
              <img
                src="/images/mailing.1c2_5sq3zru0oa17f.png"
                alt="Faster Response Automation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative p-6 rounded-3xl bg-sage/40 border border-text/10 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-amber-400/60 overflow-hidden">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-yellow-500/20 via-red-400/20 to-amber-500/20 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500 -z-10" />
            <div>
              <h3
                className="text-2xl mb-2"
                style={{ fontFamily: '"Please Display", Georgia, serif', fontWeight: 800, color: "#1c1b1d" }}
              >
                Better Handoff
              </h3>
              <p
                className="text-sm text-pretty mb-6"
                style={{ fontFamily: "Figtree, Arial, sans-serif", fontWeight: 600, color: "#22292b" }}
              >
                Pre-qualified, enriched lead profiles delivered directly to sales representatives.
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-text/10 bg-white aspect-video mt-auto transition-transform duration-500 group-hover:scale-105">
              <img
                src="/images/platform.3j7aasmhn3ul1a17f.png"
                alt="Better Handoff Platform"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Before / After Table */}
        <div className="overflow-hidden rounded-3xl border-2 border-neutral-900 bg-white p-6 md:p-8 shadow-sm">
          <h3
            className="text-2xl text-center mb-6"
            style={{ fontFamily: '"Please Display", Georgia, serif', fontWeight: 800, color: "#1c1b1d" }}
          >
            Before vs. After Automation
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-neutral-900">
                  <th
                    className="py-4 px-4 text-lg"
                    style={{ fontFamily: "Figtree, Arial, sans-serif", fontWeight: 800, color: "#1c1b1d" }}
                  >
                    Metric
                  </th>
                  <th
                    className="py-4 px-4 text-lg"
                    style={{ fontFamily: "Figtree, Arial, sans-serif", fontWeight: 800, color: "#22292b" }}
                  >
                    Before Automation
                  </th>
                  <th
                    className="py-4 px-4 text-lg"
                    style={{ fontFamily: "Figtree, Arial, sans-serif", fontWeight: 800, color: "#008138" }}
                  >
                    With AI Engine
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, i) => (
                  <tr key={i} className="border-b border-neutral-200 last:border-0 hover:bg-sage/30 transition-colors">
                    <td
                      className="py-4 px-4 text-base"
                      style={{ fontFamily: "Figtree, Arial, sans-serif", fontWeight: 700, color: "#1c1b1d" }}
                    >
                      {row.metric}
                    </td>
                    <td
                      className="py-4 px-4 text-base line-through"
                      style={{ fontFamily: "Figtree, Arial, sans-serif", fontWeight: 600, color: "#67787c" }}
                    >
                      {row.before}
                    </td>
                    <td
                      className="py-4 px-4 text-base"
                      style={{ fontFamily: "Figtree, Arial, sans-serif", fontWeight: 800, color: "#008138" }}
                    >
                      {row.after}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
