import React from "react";

export default function SolutionTiers() {
  return (
    <section className="py-16 md:py-28 flex flex-col justify-center">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-center text-balance mb-4">
          Tailored AI Automation Solutions
        </h2>
        <p className="text-center font-sans text-lg md:text-xl text-text-medium max-w-xl mx-auto mb-14">
          Select the solution tier engineered for your lead volume and business goals.
        </p>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {/* Tier 1 */}
          <div className="group p-6 md:p-8 lg:p-10 rounded-[2.5rem] bg-sage/50 border border-text/10 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-amber-400/60 overflow-hidden">
            <div>
              <span className="text-xs uppercase font-serif tracking-widest text-text-medium mb-2 block">Starter</span>
              <h3 className="font-serif text-3xl md:text-4xl font-light mb-2">Lead Capture</h3>
              <p className="text-sm font-semibold text-text-medium mb-6">&lt;50 leads / month</p>
              
              {/* Image Preview */}
              <div className="relative rounded-2xl overflow-hidden border border-text/10 bg-white mb-6 aspect-[16/10] transition-transform duration-500 group-hover:scale-105">
                <img
                  src="/images/development.0peqb7smwvv8wa17f.png"
                  alt="Starter Lead Capture"
                  className="w-full h-full object-cover"
                />
              </div>

              <ul className="space-y-3.5 text-sm text-text/80 leading-snug">
                <li className="flex items-start gap-2.5">
                  <span className="text-amber-600 font-bold flex-shrink-0 mt-0.5">✓</span>
                  <span>Automated Lead Ingestion</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-amber-600 font-bold flex-shrink-0 mt-0.5">✓</span>
                  <span>Instant Email Acknowledgment</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-amber-600 font-bold flex-shrink-0 mt-0.5">✓</span>
                  <span>Basic CRM Notification</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Tier 2 (Recommended - Fitted Green Box) */}
          <div className="group p-6 md:p-8 lg:p-10 rounded-[2.5rem] bg-lime/30 border-2 border-lime flex flex-col justify-between relative transform md:-translate-y-3 shadow-2xl hover:shadow-[0_30px_70px_rgba(255,165,0,0.35)] hover:border-amber-400 transition-all duration-500 overflow-hidden">
            <div className="absolute top-4 right-4 bg-lime text-text text-xs uppercase font-serif font-bold tracking-wider px-3.5 py-1 rounded-full border border-text/15 shadow-xs whitespace-nowrap">
              Recommended ⭐
            </div>
            <div>
              <span className="text-xs uppercase font-serif tracking-widest text-text-medium mb-2 block">Mid-Market</span>
              <h3 className="font-serif text-3xl md:text-4xl font-light mb-2">AI Lead Conversion</h3>
              <p className="text-sm font-semibold text-text-medium mb-6">50-500 leads / month</p>
              
              {/* Image Preview */}
              <div className="relative rounded-2xl overflow-hidden border border-lime/60 bg-white mb-6 aspect-[16/10] transition-transform duration-500 group-hover:scale-105">
                <img
                  src="/images/websites.31m8ohlb0c_dma17f.png"
                  alt="Mid-Market AI Conversion"
                  className="w-full h-full object-cover"
                />
              </div>

              <ul className="space-y-3.5 text-sm text-text/90 leading-snug">
                <li className="flex items-start gap-2.5 font-medium">
                  <span className="text-amber-700 font-bold flex-shrink-0 mt-0.5">✓</span>
                  <span>AI Lead Qualification &amp; Tagging</span>
                </li>
                <li className="flex items-start gap-2.5 font-medium">
                  <span className="text-amber-700 font-bold flex-shrink-0 mt-0.5">✓</span>
                  <span>Instant Multi-channel Reply</span>
                </li>
                <li className="flex items-start gap-2.5 font-medium">
                  <span className="text-amber-700 font-bold flex-shrink-0 mt-0.5">✓</span>
                  <span>Automated AI Follow-up Sequences</span>
                </li>
                <li className="flex items-start gap-2.5 font-medium">
                  <span className="text-amber-700 font-bold flex-shrink-0 mt-0.5">✓</span>
                  <span>Direct Calendar Booking Integration</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Tier 3 */}
          <div className="group p-6 md:p-8 lg:p-10 rounded-[2.5rem] bg-sage/50 border border-text/10 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-amber-400/60 overflow-hidden">
            <div>
              <span className="text-xs uppercase font-serif tracking-widest text-text-medium mb-2 block">Enterprise</span>
              <h3 className="font-serif text-3xl md:text-4xl font-light mb-2">Full Sales Engine</h3>
              <p className="text-sm font-semibold text-text-medium mb-6">500+ leads / month</p>

              {/* Image Preview */}
              <div className="relative rounded-2xl overflow-hidden border border-text/10 bg-white mb-6 aspect-[16/10] transition-transform duration-500 group-hover:scale-105">
                <img
                  src="/images/platform.3j7aasmhn3ul1a17f.png"
                  alt="Enterprise Full Sales Engine"
                  className="w-full h-full object-cover"
                />
              </div>

              <ul className="space-y-3.5 text-sm text-text/80 leading-snug">
                <li className="flex items-start gap-2.5">
                  <span className="text-amber-600 font-bold flex-shrink-0 mt-0.5">✓</span>
                  <span>Full Custom Pipeline Automation</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-amber-600 font-bold flex-shrink-0 mt-0.5">✓</span>
                  <span>Real-time Manager Dashboard</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-amber-600 font-bold flex-shrink-0 mt-0.5">✓</span>
                  <span>Custom AI Voice &amp; Messaging Models</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-amber-600 font-bold flex-shrink-0 mt-0.5">✓</span>
                  <span>Dedicated SLA &amp; Priority Support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
