"use client";

import React, { useState } from "react";
import { motion } from "motion/react";

// ── Data ────────────────────────────────────────────────────────────────────
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

// ── Image pairs ──────────────────────────────────────────────────────────────
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

// ── Interactive Image Box Component ──────────────────────────────────────────
function InteractiveImageBox({ src, label, alt, isAfter = false }: { src: string; label: string; alt: string; isAfter?: boolean }) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      className="relative w-full group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="relative w-full" style={{ paddingBottom: "66%" }}>
        {/* Glow effect on hover */}
        <motion.div
          className="absolute inset-0 rounded-xl bg-gradient-to-br from-lime/20 via-transparent to-transparent opacity-0 pointer-events-none"
          animate={{ opacity: isHovered ? 0.8 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Shadow on hover */}
        <motion.div
          className="absolute -inset-2 rounded-xl bg-black/0 blur-lg -z-10"
          animate={{
            boxShadow: isHovered
              ? "0 20px 40px rgba(0, 0, 0, 0.15)"
              : "0 4px 12px rgba(0, 0, 0, 0.05)",
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Main image container with border and transform */}
        <motion.div
          className="absolute inset-0 border-2 border-neutral-900 rounded-lg overflow-hidden bg-white"
          animate={{
            scale: isHovered ? 1.02 : 1,
            borderColor: isHovered ? (isAfter ? "rgb(214, 244, 100)" : "rgb(100, 100, 100)") : "rgb(10, 10, 10)",
          }}
          transition={{ duration: 0.3 }}
        >
          {!imageError ? (
            <motion.img
              src={src}
              alt={alt}
              className="w-full h-full object-contain p-3"
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.3 }}
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-neutral-50">
              <span className="text-neutral-400 text-sm">Image not available</span>
            </div>
          )}
        </motion.div>

        {/* Status indicator badge */}
        <motion.div
          className="absolute top-2 right-2 z-10 px-2 py-1 rounded-full text-xs font-bold tracking-wide"
          style={{
            backgroundColor: isAfter ? "rgb(214, 244, 100)" : "rgb(240, 240, 240)",
            color: isAfter ? "rgb(28, 27, 29)" : "rgb(100, 100, 100)",
            fontFamily: "Figtree, Arial, sans-serif",
          }}
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.2 }}
        >
          {isAfter ? "✓ After" : "✕ Before"}
        </motion.div>
      </div>

      {/* Label below image */}
      <motion.div
        className="mt-3 text-center"
        animate={{ opacity: isHovered ? 1 : 0.7 }}
        transition={{ duration: 0.3 }}
      >
        <p
          style={{ fontFamily: "Figtree, Arial, sans-serif", fontSize: "3rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#67787c" }}
        >
          {label}
        </p>
      </motion.div>
    </motion.div>
  );
}

// ── Case Study Card ──────────────────────────────────────────────────────────
function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <motion.div
      className="rounded-3xl border-2 border-neutral-900 bg-white p-6 md:p-10 overflow-hidden mt-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ boxShadow: "0 20px 60px rgba(0, 0, 0, 0.1)" }}
    >

      {/* Client logo pill */}
      <div className="mb-8">
        <motion.span
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-neutral-900 bg-neutral-50"
          style={{ fontFamily: "Figtree, Arial, sans-serif", fontWeight: 700, fontSize: "2.5rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "#1c1b1d" }}
          whileHover={{ scale: 1.05, backgroundColor: "rgb(214, 244, 100)" }}
          transition={{ duration: 0.2 }}
        >
          <motion.span className="w-2 h-2 rounded-full bg-neutral-900 inline-block" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} />
          {study.client}
        </motion.span>
      </div>

      {/* Column headers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-2 border-neutral-900 rounded-2xl overflow-hidden">

        {/* Before column */}
        <div className="md:border-r-2 border-neutral-900 border-b-2 md:border-b-0">
          <div
            className="px-6 py-4 border-b-2 border-neutral-900 bg-neutral-100"
            style={{ fontFamily: "Figtree, Arial, sans-serif", fontWeight: 800, fontSize: "1.5rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#22292b" }}
          >
            ✕ Before
          </div>
          <ul className="p-6 space-y-4">
            {study.before.map((item, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-3"
                style={{ fontFamily: "Figtree, Arial, sans-serif", fontWeight: 600, fontSize: "1.5rem", color: "#44403b" }}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.3 }}
                viewport={{ once: true }}
              >
                <XIcon />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* After column */}
        <div>
          <div
            className="px-6 py-4 border-b-2 border-neutral-900 bg-lime/40"
            style={{ fontFamily: "Figtree, Arial, sans-serif", fontWeight: 800, fontSize: "1.5rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#1c1b1d" }}
          >
            ✓ After
          </div>
          <ul className="p-6 space-y-4">
            {study.after.map((item, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-3"
                style={{ fontFamily: "Figtree, Arial, sans-serif", fontWeight: 600, fontSize: "1.5rem", color: "#1c1b1d" }}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.3 }}
                viewport={{ once: true }}
              >
                <StarIcon />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>

      </div>
    </motion.div>
  );
}

// ── Main Section ─────────────────────────────────────────────────────────────
export default function CaseStudies() {
  return (
    <section className="py-24 md:py-40">
      <div className="w-full max-w-[1480px] mx-auto px-4 md:px-8">

        {/* Section heading */}
        <motion.h2
          className="text-4xl md:text-6xl lg:text-7xl text-center text-balance mb-6"
          style={{ fontFamily: '"Please Display", Georgia, serif', fontWeight: 800, color: "#1c1b1d" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Real Transformations
        </motion.h2>
        <motion.p
          className="text-center text-xl md:text-2xl max-w-3xl mx-auto mb-16"
          style={{ fontFamily: "Figtree, Arial, sans-serif", fontWeight: 600, color: "#22292b" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          See how our automation system turned scattered Instagram leads into booked pipelines.
        </motion.p>

        {/* Enhanced Image Grid — 2 cols × 3 rows */}
        <motion.div
          className="mb-16 rounded-3xl border-2 border-neutral-900 bg-white overflow-hidden p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          whileHover={{ boxShadow: "0 25px 50px rgba(0, 0, 0, 0.08)" }}
        >
          {/* Headers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <span
                style={{ fontFamily: "Figtree, Arial, sans-serif", fontSize: "3rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#1c1b1d", display: "inline-block" }}
                className="px-4 py-2 rounded-lg border-2 border-neutral-900 bg-neutral-50"
              >
                <br />✕ Before
              </span>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <span
                style={{ fontFamily: "Figtree, Arial, sans-serif", fontSize: "3rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#1c1b1d", display: "inline-block" }}
                className="px-4 py-2 rounded-lg border-2 border-neutral-900 bg-lime/40"
              >
                <br />✓ After
              </span>
            </motion.div>
          </div>

          {/* Image pairs */}
            <div className="space-y-10">
            {imagePairs.map((pair, i) => (
              <motion.div
                key={i}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
              >
                <InteractiveImageBox src={pair.before} label={pair.label} alt={`Before: ${pair.label}`} isAfter={false} />
                <InteractiveImageBox src={pair.after} label={pair.label} alt={`After: ${pair.label}`} isAfter={true} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Case study cards — one per client */}
        <motion.div
          className="flex flex-col gap-16 mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {caseStudies.map((study, idx) => (
            <CaseStudyCard key={idx} study={study} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}
