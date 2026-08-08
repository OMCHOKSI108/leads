"use client";

import React, { useState } from "react";
import { motion } from "motion/react";

interface ImagePair {
  before: string;
  after: string;
}

interface ComparisonCardProps {
  title: string;
  images: ImagePair[];
  whatThisIs: string[];
  whatItBrought: string[];
}

function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
      className="h-4 w-4 flex-shrink-0 fill-current"
      aria-hidden="true"
    >
      <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-16.9 16.6-8.1 25l105 102.3-24.8 144.5c-2 12 10.7 21.2 21.4 15.4L288 384l129.1 74.6c10.7 6.2 23.4-3.4 21.4-15.4L413.7 298.7l105-102.3c8.8-8.4 3.9-23.2-8.1-25L381.3 150.3 316.9 18z" />
    </svg>
  );
}

function SkeletonFallback({ label }: { label: string }) {
  return (
    <div className="w-full h-full bg-neutral-100 flex items-center justify-center p-6">
      <div className="w-full max-w-sm bg-white rounded-2xl p-5 border-2 border-neutral-200 flex flex-col gap-3">
        <div className="flex items-center gap-2 border-b border-neutral-200 pb-2">
          <div className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
          <span className="ml-2 text-xs font-mono text-neutral-400 uppercase tracking-wide">
            {label}
          </span>
        </div>
        <div className="space-y-2.5">
          <div className="h-3.5 bg-neutral-200 rounded-full w-3/4 animate-pulse" />
          <div className="h-3.5 bg-neutral-200 rounded-full w-1/2 animate-pulse" />
          <div className="h-3.5 bg-neutral-200 rounded-full w-5/6 animate-pulse" />
        </div>
      </div>
    </div>
  );
}

function ImageBox({ src, label, alt, isAfter = false }: { src: string; label: string; alt: string; isAfter?: boolean }) {
  const [error, setError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative w-full h-48 md:h-56 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      {/* Shadow on hover */}
      <motion.div
        className="absolute -inset-1 rounded-2xl bg-black/0 blur-lg -z-10"
        animate={{
          boxShadow: isHovered
            ? "0 16px 32px rgba(0, 0, 0, 0.12)"
            : "0 2px 8px rgba(0, 0, 0, 0.04)",
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-lime/20 via-transparent to-transparent opacity-0 pointer-events-none"
        animate={{ opacity: isHovered ? 0.7 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Image container with enhanced border */}
      <motion.div
        className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-neutral-300 bg-white"
        animate={{
          scale: isHovered ? 1.02 : 1,
          borderColor: isHovered ? (isAfter ? "rgb(214, 244, 100)" : "rgb(120, 120, 120)") : "rgb(200, 200, 200)",
        }}
        transition={{ duration: 0.3 }}
      >
        {!error ? (
          <motion.img
            src={src}
            alt={alt}
            className="w-full h-full object-contain"
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.3 }}
            onError={() => setError(true)}
          />
        ) : (
          <SkeletonFallback label={label} />
        )}
      </motion.div>

      {/* Status badge */}
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
    </motion.div>
  );
}

export default function ComparisonCard({
  title,
  images,
  whatThisIs,
  whatItBrought,
}: ComparisonCardProps) {
  return (
    <motion.div
      className="bg-white border-2 md:border-4 border-neutral-900 rounded-3xl p-6 md:p-10 lg:p-12 overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ boxShadow: "0 25px 50px rgba(0, 0, 0, 0.1)" }}
    >
      <motion.h3
        className="font-serif font-medium text-2xl md:text-4xl lg:text-5xl text-neutral-900 mb-8 md:mb-10 text-balance"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h3>

      <motion.div
        className="hidden md:grid grid-cols-2 gap-6 lg:gap-12 mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <motion.span
          className="text-center font-serif font-bold uppercase tracking-[0.2em] text-neutral-900 px-4 py-2 rounded-lg border-2 border-neutral-900 bg-neutral-50"
          whileHover={{ scale: 1.05, backgroundColor: "rgb(240, 240, 240)" }}
        >
          Before
        </motion.span>
        <motion.span
          className="text-center font-serif font-bold uppercase tracking-[0.2em] text-neutral-900 px-4 py-2 rounded-lg border-2 border-neutral-900 bg-lime/40"
          whileHover={{ scale: 1.05 }}
        >
          After
        </motion.span>
      </motion.div>

      <motion.div
        className="flex flex-col gap-8 lg:gap-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {images.map((pair, idx) => (
          <motion.div
            key={idx}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-12"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.12 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col gap-2">
              <motion.span
                className="md:hidden text-center text-xs font-semibold uppercase tracking-widest text-neutral-500"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                Before
              </motion.span>
              <ImageBox
                src={pair.before}
                label="Manual System"
                alt={`Before: ${title}`}
                isAfter={false}
              />
            </div>
            <div className="flex flex-col gap-2">
              <motion.span
                className="md:hidden text-center text-xs font-semibold uppercase tracking-widest text-neutral-500"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                After
              </motion.span>
              <ImageBox
                src={pair.after}
                label="AI Automated"
                alt={`After: ${title}`}
                isAfter={true}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 border-t-2 border-neutral-200 pt-8 md:pt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.45 }}
          viewport={{ once: true }}
        >
          <h4 className="font-serif font-semibold text-lg md:text-xl text-neutral-900 mb-4">
            What this is
          </h4>
          <ul className="space-y-3">
            {whatThisIs.map((item, idx) => (
              <motion.li
                key={idx}
                className="flex items-start gap-3 text-neutral-700 text-base md:text-lg"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.45 + idx * 0.08 }}
                viewport={{ once: true }}
              >
                <StarIcon />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.45 }}
          viewport={{ once: true }}
        >
          <h4 className="font-serif font-semibold text-lg md:text-xl text-neutral-900 mb-4">
            What it brought
          </h4>
          <ul className="space-y-3">
            {whatItBrought.map((item, idx) => (
              <motion.li
                key={idx}
                className="flex items-start gap-3 text-neutral-700 text-base md:text-lg"
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.45 + idx * 0.08 }}
                viewport={{ once: true }}
              >
                <StarIcon />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
