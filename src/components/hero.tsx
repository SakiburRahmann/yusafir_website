"use client";

import { motion } from "framer-motion";
import Magnetic from "@/components/magnetic";

const EASE = [0.16, 1, 0.3, 1] as const;

const marqueeWords = [
  "Air Systems",
  "Ground Systems",
  "Cyber Defense",
  "Command & Control",
  "Domain Awareness",
  "Field Logistics",
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="hero-grid absolute inset-0" />
        <div className="animate-pulse-soft absolute -top-1/4 left-1/2 h-[70vh] w-[100vw] -translate-x-1/2 rounded-full bg-olive/[0.09] blur-[150px]" />
        <div className="absolute right-[-10%] bottom-[-15%] h-[45vh] w-[40vw] rounded-full bg-amber/[0.05] blur-[130px]" />
        <div className="absolute top-10 left-10 hidden font-mono text-[10px] leading-5 tracking-[0.25em] text-faint uppercase md:block">
          31.2304° N
          <br />
          121.4737° E
        </div>
        <div className="absolute top-10 right-10 hidden text-right font-mono text-[10px] leading-5 tracking-[0.25em] text-faint uppercase md:block">
          SYS STATUS:
          <br />
          <span className="animate-blink text-amber">● OPERATIONAL</span>
        </div>
        <svg
          className="absolute top-1/2 left-1/2 h-[44rem] w-[44rem] -translate-x-1/2 -translate-y-1/2 opacity-[0.05]"
          viewBox="0 0 400 400"
          fill="none"
          stroke="#e8e4d8"
        >
          <circle cx="200" cy="200" r="60" />
          <circle cx="200" cy="200" r="130" strokeDasharray="6 8" />
          <circle cx="200" cy="200" r="195" strokeDasharray="2 10" />
          <line x1="200" y1="0" x2="200" y2="400" />
          <line x1="0" y1="200" x2="400" y2="200" />
        </svg>
      </div>

      <div className="relative mx-auto flex w-full max-w-[1400px] flex-1 flex-col items-center justify-center px-6 pt-36 pb-8 text-center md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 2.6 }}
          className="mb-8 flex items-center gap-4"
        >
          <span className="h-px w-8 bg-amber" />
          <span className="flex items-center gap-2.5 font-mono text-[10px] tracking-[0.4em] text-mute uppercase">
            <span className="animate-blink size-1.5 rounded-full bg-amber" />
            Defense &amp; Tactical Systems
          </span>
          <span className="h-px w-8 bg-amber" />
        </motion.div>

        <h1 className="font-display text-[19vw] leading-[0.85] tracking-[0.01em] uppercase select-none sm:text-[16vw] lg:text-[13.5vw]">
          <span className="block overflow-hidden">
            <motion.span
              className="inline-block"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, ease: EASE, delay: 2.7 }}
            >
              Vanguard
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              className="text-outline inline-block"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, ease: EASE, delay: 2.82 }}
            >
              Defense
            </motion.span>
          </span>
        </h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, ease: EASE, delay: 3.1 }}
          className="hazard-thin -mt-2 mb-8 h-2 w-[min(92vw,720px)] origin-center rounded-sm opacity-80 md:-mt-4"
        />

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 3.2 }}
          className="max-w-xl text-base leading-relaxed text-mute md:text-lg"
        >
          Precision systems for land, air and domain awareness. Built to
          protect, engineered to endure —{" "}
          <span className="text-bone">for those who protect the rest of us.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 3.35 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Magnetic>
            <a
              href="#work"
              data-hover
              className="group inline-flex items-center gap-3 border-2 border-amber bg-amber px-9 py-4 font-mono text-[12px] font-bold tracking-[0.25em] text-ink uppercase transition-colors duration-300 hover:bg-transparent hover:text-amber"
            >
              View capabilities
              <span className="inline-block transition-transform duration-500 group-hover:translate-y-0.5">
                ↓
              </span>
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="#contact"
              data-hover
              className="inline-flex items-center gap-3 border border-line px-9 py-4 font-mono text-[12px] font-bold tracking-[0.25em] text-bone uppercase transition-colors duration-300 hover:border-amber hover:text-amber"
            >
              Request briefing
            </a>
          </Magnetic>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3.5 }}
          className="mt-14 flex flex-col items-center gap-2 font-mono text-[10px] tracking-[0.35em] text-faint uppercase sm:flex-row sm:gap-6"
        >
          <span>RATING: A+ — DAS/OSD</span>
          <span className="hidden text-amber sm:inline">▸</span>
          <span>EST. 2009</span>
          <span className="hidden text-amber sm:inline">▸</span>
          <span>3 CONTINENTS · 12 THEATRES</span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 3.6 }}
        className="relative border-t border-line py-4"
      >
        <div className="mask-fade-x overflow-hidden">
          <div className="animate-marquee flex w-max items-center whitespace-nowrap">
            {[0, 1].map((half) => (
              <div key={half} className="flex items-center">
                {marqueeWords.map((word) => (
                  <span
                    key={`${half}-${word}`}
                    className="flex items-center font-mono text-[11px] font-semibold tracking-[0.4em] text-bone/40 uppercase"
                  >
                    <span className="px-8">{word}</span>
                    <span className="text-[8px] text-amber">■</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
