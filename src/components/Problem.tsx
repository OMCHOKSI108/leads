import React from "react";

export default function Problem() {
  return (
    <section data-marketing-bg="lime" className="py-16 md:py-28 flex flex-col justify-center">
      <div className="max-w-md md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto w-full px-4">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-center text-balance mb-12">
          Your Leads Are Everywhere. Your System Isn&apos;t.
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Problem Card 01 */}
          <div className="group relative p-6 rounded-3xl bg-white/80 border border-text/10 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-amber-400/60 overflow-hidden">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-red-500/20 to-yellow-400/20 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500 -z-10" />
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-full bg-lime flex items-center justify-center font-serif text-lg font-bold">
                  01
                </div>
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-red-600 bg-red-100/70 px-2.5 py-0.5 rounded-full">
                  Integration Gap
                </span>
              </div>
              <h3 className="font-serif text-2xl font-light mb-2">Scattered Sources</h3>
              <p className="text-sm text-pretty text-text/80 mb-6">
                <strong className="font-semibold text-text">47% of leads</strong> are lost in transfer between platforms before reps reach them.
              </p>
            </div>
            {/* Visual Image Preview */}
            <div className="relative rounded-xl overflow-hidden border border-text/10 bg-sage/40 aspect-video mt-auto transition-transform duration-500 group-hover:scale-105">
              <img
                src="/images/connections.2t_cuong96vcxa17f.png"
                alt="Scattered Lead Connections"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Problem Card 02 */}
          <div className="group relative p-6 rounded-3xl bg-white/80 border border-text/10 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-amber-400/60 overflow-hidden">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-amber-500/20 to-yellow-400/20 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500 -z-10" />
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-full bg-lime flex items-center justify-center font-serif text-lg font-bold">
                  02
                </div>
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-700 bg-amber-100/70 px-2.5 py-0.5 rounded-full">
                  Response Delay
                </span>
              </div>
              <h3 className="font-serif text-2xl font-light mb-2">Delayed Response</h3>
              <p className="text-sm text-pretty text-text/80 mb-6">
                First response within 1 hour = <strong className="font-semibold text-text">7x higher conversion rate</strong> than manual follow-ups.
              </p>
            </div>
            {/* Visual Image Preview */}
            <div className="relative rounded-xl overflow-hidden border border-text/10 bg-sage/40 aspect-video mt-auto transition-transform duration-500 group-hover:scale-105">
              <img
                src="/images/mailing.1c2_5sq3zru0oa17f.png"
                alt="Mailing and Outreach Delays"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Problem Card 03 */}
          <div className="group relative p-6 rounded-3xl bg-white/80 border border-text/10 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-amber-400/60 overflow-hidden">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-yellow-500/20 to-red-400/20 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500 -z-10" />
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-full bg-lime flex items-center justify-center font-serif text-lg font-bold">
                  03
                </div>
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-stone-700 bg-stone-200/70 px-2.5 py-0.5 rounded-full">
                  Blindspots
                </span>
              </div>
              <h3 className="font-serif text-2xl font-light mb-2">No Visibility</h3>
              <p className="text-sm text-pretty text-text/80 mb-6">
                <strong className="font-semibold text-text">68% of sales managers</strong> report they lack real-time visibility into pipeline stages.
              </p>
            </div>
            {/* Visual Image Preview */}
            <div className="relative rounded-xl overflow-hidden border border-text/10 bg-sage/40 aspect-video mt-auto transition-transform duration-500 group-hover:scale-105">
              <img
                src="/images/pr.3qw2fsnkdo-lya17f.png"
                alt="Pipeline Visibility Dashboard"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
