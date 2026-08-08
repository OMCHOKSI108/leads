"use client";

import React, { useState } from "react";
import { motion } from "motion/react";

export default function FinalCTA() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="w-full py-12 md:py-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        {/* Animated Background Blur */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <motion.div
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.5 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-lime/20 rounded-full blur-[100px]"
          />
        </div>

        {/* Main Content Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Top Hook - Attention Grabber */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4"
            >
              
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-serif font-light text-balance mb-4 leading-tight"
            >
              Your Competitors Are Already Automating.
              <br />
              <span className="text-lime font-semibold">Don&apos;t Get Left Behind.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-2xl text-white max-w-3xl mx-auto mb-8 font-light"
            >
              Get your custom automation roadmap in the next <span className="font-bold text-white">48 hours</span>. Join companies already capturing <span className="font-bold text-lime">67% more leads</span> and closing <span className="font-bold text-lime">72% faster</span>.
            </motion.p>
          </div>

          {/* Stats Row - Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-3 gap-4 md:gap-6 mb-12 max-w-3xl mx-auto"
          >
            <div className="text-center p-4 rounded-2xl bg-white/40 border border-text/10 backdrop-blur-sm">
              <div className="text-2xl md:text-4xl font-bold text-lime mb-1">100+</div>
              <div className="text-xs md:text-sm font-medium text-text/70">Businesses Automated</div>
            </div>
            <div className="text-center p-4 rounded-2xl bg-white/40 border border-text/10 backdrop-blur-sm">
              <div className="text-2xl md:text-4xl font-bold text-lime mb-1">$2.5+</div>
              <div className="text-xs md:text-sm font-medium text-text/70">Revenue Unlocked</div>
            </div>
            <div className="text-center p-4 rounded-2xl bg-white/40 border border-text/10 backdrop-blur-sm">
              <div className="text-2xl md:text-4xl font-bold text-lime mb-1">4 mins</div>
              <div className="text-xs md:text-sm font-medium text-text/70">Avg Response Time</div>
            </div>
          </motion.div>

          {/* Primary CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex justify-center mb-8"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <a
              href="https://forms.gle/ohQKBrH1FoY9nj5L6"
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex font-serif uppercase items-center justify-center text-center cursor-pointer rounded-2xl transition-all duration-300 ease-in-out py-5 px-10 md:px-16 bg-lime text-text hover:bg-lime/90 hover:scale-110 shadow-2xl text-lg md:text-2xl font-extrabold tracking-widest leading-snug border-2 border-lime hover:border-text"
            >
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-lime via-yellow-300 to-lime opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300 -z-10" />
              Get Your Free Automation Roadmap
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="fill-current ml-3 h-6 w-6 transition-transform"
                animate={{ x: isHovered ? 4 : 0 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM289 361l88-88c9.4-9.4 9.4-24.6 0-33.9l-88-88c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l47 47L152 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l150.1 0-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0z" />
              </motion.svg>
            </a>
          </motion.div>

          {/* Secondary CTA + Value Props */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="text-center"
          >
            <p className="text-text/60 text-sm md:text-base mb-6 font-light">
              💡 What you&apos;ll get: Industry-specific strategy, integration plan, ROI projection, 30-day quick-start guide
            </p>

            {/* Urgency Element */}
            <div className="inline-block px-6 py-3 rounded-xl bg-amber-400/20 border border-amber-400/40 mb-6">
              <p className="text-sm md:text-base font-medium text-white">
                ⏱️ <strong>6-7 Day Setup</strong> | Zero Risk | Money-Back Guarantee*
              </p>
            </div>

            {/* Footer Text */}
          </motion.div>
        </motion.div>
      </div>

      {/* Footer - Minimal but Effective */}
      <footer className="mt-20 pt-12 border-t border-text/10">
        <div className="max-w-5xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-text/50 text-sm">
          <div className="flex items-center gap-3">
            <a href="https://aceintelligence.systems" target="_blank" rel="noreferrer" className="text-lime hover:text-text transition-colors font-semibold">
              ACEINTELLIGENCE AI | 
              ELEVATEXIS DIGITAL | 
              NEXORA . AI

            </a>
          </div>

          <div className="flex items-center gap-4 relative z-10">
            <a
              href="/privacy"
              className="inline-flex items-center justify-center rounded-full border-2 border-lime bg-transparent px-5 py-2.5 text-sm font-semibold text-lime transition-all duration-200 hover:bg-lime hover:text-text pointer-events-auto cursor-pointer"
            >
              Privacy
            </a>
            <a
              href="/terms"
              className="inline-flex items-center justify-center rounded-full border-2 border-lime bg-transparent px-5 py-2.5 text-sm font-semibold text-lime transition-all duration-200 hover:bg-lime hover:text-text pointer-events-auto cursor-pointer"
            >
              Terms
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
}
