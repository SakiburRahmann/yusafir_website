"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const data = [
  ["THREAT LEVEL", "ELEVATED", "text-amber"],
  ["ACTIVE THEATRES", "12", "text-bone"],
  ["UNITS FIELDED", "48,200", "text-bone"],
  ["MEAN TIME BETWEEN FAILURE", "9,500 H", "text-bone"],
  ["RESPONSE WINDOW", "UNDER 60 SEC", "text-bone"],
];

export default function Intel() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-32 md:px-10 md:py-44">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: EASE }}
        className="mb-16 flex items-center gap-4"
      >
        <span className="font-mono text-[11px] tracking-[0.45em] text-amber uppercase">
          [ 02 — Intel ]
        </span>
        <span className="h-px flex-1 bg-line" />
        <span className="font-mono text-[10px] tracking-[0.3em] text-faint uppercase">
          LIVE DATA
        </span>
      </motion.div>

      <div className="grid grid-cols-12 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-8% 0px" }}
          transition={{ duration: 0.9, ease: EASE }}
          className="scanlines relative col-span-12 overflow-hidden border border-line md:col-span-7 md:row-span-2"
        >
          <img
            src="https://picsum.photos/seed/vanguard-intel1/1400/1400"
            alt="Surveillance frame"
            className="military-img h-full min-h-[380px] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-ink/30" />
          <span className="absolute top-4 left-4 size-5 border-t-2 border-l-2 border-amber" />
          <span className="absolute top-4 right-4 size-5 border-t-2 border-r-2 border-amber" />
          <span className="absolute bottom-4 left-4 size-5 border-b-2 border-l-2 border-amber" />
          <span className="absolute right-4 bottom-4 size-5 border-r-2 border-b-2 border-amber" />
          <div className="absolute right-4 bottom-4 left-4 flex items-end justify-between">
            <div>
              <p className="font-mono text-[9px] tracking-[0.3em] text-amber uppercase">
                SATELLITE IMAGERY — REGION 7
              </p>
              <p className="mt-1 font-display text-3xl tracking-wide text-bone uppercase">
                Persistent overwatch
              </p>
            </div>
            <span className="animate-blink font-mono text-[10px] text-amber">● LIVE</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-8% 0px" }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
          className="relative col-span-12 overflow-hidden border border-line bg-[#0e120b] p-6 md:col-span-5"
        >
          <div className="absolute inset-0">
            <svg className="h-full w-full" viewBox="0 0 300 300" fill="none">
              <circle cx="150" cy="150" r="140" stroke="rgba(232,228,216,0.1)" />
              <circle cx="150" cy="150" r="95" stroke="rgba(232,228,216,0.1)" strokeDasharray="4 6" />
              <circle cx="150" cy="150" r="50" stroke="rgba(232,228,216,0.12)" />
              <line x1="150" y1="10" x2="150" y2="290" stroke="rgba(232,228,216,0.08)" />
              <line x1="10" y1="150" x2="290" y2="150" stroke="rgba(232,228,216,0.08)" />
            </svg>
            <div className="animate-spin-slow radar absolute inset-0 m-auto size-[82%] rounded-full" />
          </div>
          <div className="relative flex h-full flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[9px] tracking-[0.3em] text-faint uppercase">
                UHF SCAN
              </span>
              <span className="animate-blink font-mono text-[10px] text-amber">●</span>
            </div>
            <p className="font-display text-2xl tracking-wide text-bone uppercase">
              Spectral sweep
              <span className="text-amber"> active</span>
            </p>
            <p className="font-mono text-[10px] leading-5 tracking-[0.15em] text-faint uppercase">
              3 SIGNALS CLASSIFIED
              <br />
              1 UNKNOWN — TRACKING
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-8% 0px" }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.18 }}
          className="col-span-12 border border-line bg-panel md:col-span-5"
        >
          {data.map(([label, value, cls], i) => (
            <div
              key={label}
              className={`flex items-center justify-between gap-4 px-5 py-3.5 ${
                i > 0 ? "border-t border-line" : ""
              }`}
            >
              <span className="font-mono text-[9px] tracking-[0.25em] text-faint uppercase">
                {label}
              </span>
              <span className={`font-mono text-[12px] font-bold tracking-[0.15em] ${cls}`}>
                {value}
              </span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-8% 0px" }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.26 }}
          className="scanlines relative col-span-12 overflow-hidden border border-line md:col-span-7"
        >
          <img
            src="https://picsum.photos/seed/vanguard-intel2/1400/700"
            alt="Terrain frame"
            className="military-img h-64 w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-transparent to-transparent" />
          <div className="absolute top-1/2 left-6 -translate-y-1/2">
            <p className="font-mono text-[9px] tracking-[0.3em] text-amber uppercase">
              TERRAIN ANALYSIS
            </p>
            <p className="mt-1 font-display text-3xl tracking-wide text-bone uppercase">
              Contested ground
            </p>
            <p className="mt-1 font-mono text-[10px] tracking-[0.2em] text-faint uppercase">
              DRONE-LAID · 1:50,000 · UPDATED 04:00Z
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
