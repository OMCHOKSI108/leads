"use client";

import React, { useState } from "react";

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
      className="h-4 w-4 flex-shrink-0 fill-none stroke-current"
      strokeWidth={24}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-16.9 16.6-8.1 25l105 102.3-24.8 144.5c-2 12 10.7 21.2 21.4 15.4L288 384l129.1 74.6c10.7 6.2 23.4-3.4 21.4-15.4L413.7 298.7l105-102.3c8.8-8.4 3.9-23.2-8.1-25L381.3 150.3 316.9 18z" />
    </svg>
  );
}

function SkeletonFallback({ label }: { label: string }) {
  return (
    <div className="w-full h-full bg-neutral-100 flex items-center justify-center p-6">
      <div className="w-full max-w-sm bg-white rounded-2xl p-5 border border-neutral-200 flex flex-col gap-3">
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

function ImageBox({ src, label, alt }: { src: string; label: string; alt: string }) {
  const [error, setError] = useState(false);

  return (
    <div className="relative w-full h-48 md:h-56 rounded-2xl overflow-hidden border-2 border-neutral-300 bg-white">
      {!error ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-contain"
          onError={() => setError(true)}
        />
      ) : (
        <SkeletonFallback label={label} />
      )}
    </div>
  );
}

export default function ComparisonCard({
  title,
  images,
  whatThisIs,
  whatItBrought,
}: ComparisonCardProps) {
  return (
    <div className="bg-white border-2 md:border-4 border-neutral-900 rounded-3xl p-6 md:p-10 lg:p-12">
      <h3 className="font-serif font-medium text-2xl md:text-4xl lg:text-5xl text-neutral-900 mb-8 md:mb-10 text-balance">
        {title}
      </h3>

      <div className="hidden md:grid grid-cols-2 gap-6 lg:gap-12 mb-6">
        <span className="text-center font-serif font-bold uppercase tracking-[0.2em] text-neutral-900">
          Before
        </span>
        <span className="text-center font-serif font-bold uppercase tracking-[0.2em] text-neutral-900">
          After
        </span>
      </div>

      <div className="flex flex-col gap-8 lg:gap-10">
        {images.map((pair, idx) => (
          <div
            key={idx}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-12"
          >
            <div className="flex flex-col gap-2">
              <span className="md:hidden text-center text-xs font-semibold uppercase tracking-widest text-neutral-500">
                Before
              </span>
              <ImageBox
                src={pair.before}
                label="Manual System"
                alt={`Before: ${title}`}
              />
            </div>
            <div className="flex flex-col gap-2">
              <span className="md:hidden text-center text-xs font-semibold uppercase tracking-widest text-neutral-500">
                After
              </span>
              <ImageBox
                src={pair.after}
                label="AI Automated"
                alt={`After: ${title}`}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 border-t-2 border-neutral-200 pt-8 md:pt-10">
        <div>
          <h4 className="font-serif font-semibold text-lg md:text-xl text-neutral-900 mb-4">
            What this is
          </h4>
          <ul className="space-y-3">
            {whatThisIs.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-neutral-700 text-base md:text-lg">
                <StarIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-serif font-semibold text-lg md:text-xl text-neutral-900 mb-4">
            What it brought
          </h4>
          <ul className="space-y-3">
            {whatItBrought.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-neutral-700 text-base md:text-lg">
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
