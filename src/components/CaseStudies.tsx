import React from "react";

// ── Data ────────────────────────────────────────────────────────────────────
// Each case study is a flat object: client name + before[] + after[].
// Add more clients below by following the same shape.
//
// NOTE: the "before" copy for charitylavs is inferred from the existing
// "after" content — swap in the real client pain points once confirmed.

interface CaseStudy {
  client: string;
  before: string[];
  after: string[];
}

const caseStudies: CaseStudy[] = [
  {
    client: "charitylavs",
    before: [
      "Manually replying to every Instagram DM lead one by one",
      "Leads scattered across spreadsheets with no central tracking",
      "No automated follow-up — hot leads went cold waiting on manual outreach",
      "No dashboard or visibility into who was handling which lead",
      "Slow, inconsistent response times losing potential customers",
    ],
    after: [
      "AI auto-responder connected straight to Instagram DMs, auto-qualifying every lead",
      "Instant automated follow-up sequences the moment a lead comes in — no delay",
      "One unified real-time dashboard tracking every lead and interaction",
      "52% lift in conversion from faster, warmer follow-ups",
      "Stopped 40% of hot leads from ever going cold, with full visibility into who's handling what",
    ],
  },
];

// ── Image pairs (kept from previous version) ────────────────────────────────
const imagePairs = [
  { before: "/images/case-studies/1-1.png", after: "/images/case-studies/1-2.png", label: "Social Media" },
  { before: "/images/case-studies/2-1.png", after: "/images/case-studies/2-2.png", label: "Follow-Ups" },
  { before: "/images/case-studies/3-1.png", after: "/images/case-studies/3-2.png", label: "Dashboard" },
];

// ── Icons ────────────────────────────────────────────────────────────────────
function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
      className="h-4 w-4 flex-shrink-0 mt-0.5"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-16.9 16.6-8.1 25l105 102.3-24.8 144.5c-2 12 10.7 21.2 21.4 15.4L288 384l129.1 74.6c10.7 6.2 23.4-3.4 21.4-15.4L413.7 298.7l105-102.3c8.8-8.4 3.9-23.2-8.1-25L381.3 150.3 316.9 18z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 384 512"
      className="h-4 w-4 flex-shrink-0 mt-0.5"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S.2 70.9 11.5 84.5L150.3 256 11.5 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
    </svg>
  );
}

// ── Case Study Card ──────────────────────────────────────────────────────────
function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <div className="rounded-3xl border-2 border-neutral-900 bg-white p-6 md:p-10">

      {/* Client logo pill */}
      <div className="mb-8">
        <span
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-neutral-900 bg-neutral-50"
          style={{ fontFamily: "Figtree, Arial, sans-serif", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "#1c1b1d" }}
        >
          <span className="w-2 h-2 rounded-full bg-neutral-900 inline-block" />
          {study.client}
        </span>
      </div>

      {/* Column headers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-2 border-neutral-900 rounded-2xl overflow-hidden">

        {/* Before column */}
        <div className="md:border-r-2 border-neutral-900 border-b-2 md:border-b-0">
          <div
            className="px-6 py-4 border-b-2 border-neutral-900 bg-neutral-100"
            style={{ fontFamily: "Figtree, Arial, sans-serif", fontWeight: 800, fontSize: "0.8rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#22292b" }}
          >
            ✕ Before
          </div>
          <ul className="p-6 space-y-4">
            {study.before.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3"
                style={{ fontFamily: "Figtree, Arial, sans-serif", fontWeight: 600, fontSize: "0.95rem", color: "#44403b" }}
              >
                <XIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* After column */}
        <div>
          <div
            className="px-6 py-4 border-b-2 border-neutral-900 bg-lime/40"
            style={{ fontFamily: "Figtree, Arial, sans-serif", fontWeight: 800, fontSize: "0.8rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#1c1b1d" }}
          >
            ✓ After
          </div>
          <ul className="p-6 space-y-4">
            {study.after.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3"
                style={{ fontFamily: "Figtree, Arial, sans-serif", fontWeight: 600, fontSize: "0.95rem", color: "#1c1b1d" }}
              >
                <StarIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}

// ── Main Section ─────────────────────────────────────────────────────────────
export default function CaseStudies() {
  return (
    <section className="py-24 md:py-40">
      <div className="w-full max-w-[1480px] mx-auto px-4 md:px-8">

        {/* Section heading */}
        <h2
          className="text-4xl md:text-6xl lg:text-7xl text-center text-balance mb-6"
          style={{ fontFamily: '"Please Display", Georgia, serif', fontWeight: 800, color: "#1c1b1d" }}
        >
          Real Transformations
        </h2>
        <p
          className="text-center text-xl md:text-2xl max-w-3xl mx-auto mb-16"
          style={{ fontFamily: "Figtree, Arial, sans-serif", fontWeight: 600, color: "#22292b" }}
        >
          See how our automation system turned scattered Instagram leads into booked pipelines.
        </p>

        {/* Image grid — 2 cols × 3 rows */}
        <div className="mb-16 rounded-3xl border-2 border-neutral-900 bg-white overflow-hidden">
          <div className="grid grid-cols-2 border-b-2 border-neutral-900">
            <div
              className="text-center py-3 border-r-2 border-neutral-900"
              style={{ fontFamily: "Figtree, Arial, sans-serif", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#1c1b1d" }}
            >
              Before
            </div>
            <div
              className="text-center py-3"
              style={{ fontFamily: "Figtree, Arial, sans-serif", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#1c1b1d" }}
            >
              After
            </div>
          </div>
          {imagePairs.map((pair, i) => (
            <div key={i} className={`grid grid-cols-2${i < imagePairs.length - 1 ? " border-b-2 border-neutral-900" : ""}`}>
              <div className="relative border-r-2 border-neutral-900">
                <div
                  className="text-center py-1 px-3 border-b border-neutral-200"
                  style={{ fontFamily: "Figtree, Arial, sans-serif", fontSize: "0.7rem", fontWeight: 600, color: "#67787c", textTransform: "uppercase", letterSpacing: "0.1em" }}
                >
                  {pair.label}
                </div>
                <div className="relative w-full" style={{ paddingBottom: "66%" }}>
                  <img src={pair.before} alt={`Before: ${pair.label}`} className="absolute inset-0 w-full h-full object-contain p-3" />
                </div>
              </div>
              <div className="relative">
                <div
                  className="text-center py-1 px-3 border-b border-neutral-200"
                  style={{ fontFamily: "Figtree, Arial, sans-serif", fontSize: "0.7rem", fontWeight: 600, color: "#67787c", textTransform: "uppercase", letterSpacing: "0.1em" }}
                >
                  {pair.label}
                </div>
                <div className="relative w-full" style={{ paddingBottom: "66%" }}>
                  <img src={pair.after} alt={`After: ${pair.label}`} className="absolute inset-0 w-full h-full object-contain p-3" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Case study cards — one per client */}
        <div className="flex flex-col gap-10">
          {caseStudies.map((study, idx) => (
            <CaseStudyCard key={idx} study={study} />
          ))}
        </div>

      </div>
    </section>
  );
}
