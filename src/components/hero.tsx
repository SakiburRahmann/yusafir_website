"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Magnetic from "@/components/magnetic";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const [tele, setTele] = useState({ alt: 11840, hdg: 274, spd: 218 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTele({
        alt: 11840 + Math.floor(Math.random() * 520),
        hdg: 274 + Math.floor(Math.random() * 24),
        spd: 218 + Math.floor(Math.random() * 38),
      });
    }, 1600);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="scanlines relative flex min-h-screen flex-col overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="hero-grid absolute inset-0" />
        <div className="animate-pulse-soft absolute -top-1/4 left-1/2 h-[70vh] w-[100vw] -translate-x-1/2 rounded-full bg-olive/[0.1] blur-[150px]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-[1500px] flex-1 gap-10 px-6 pt-36 pb-10 md:grid-cols-[1fr_420px] md:items-center md:px-10">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 2.7 }}
            className="mb-6 flex items-center gap-4"
          >
            <span className="h-px w-10 bg-amber" />
            <span className="font-mono text-[10px] tracking-[0.4em] text-mute uppercase">
              Live feed — UAV Delta-7
            </span>
          </motion.div>

          <h1 className="font-display text-[20vw] leading-[0.82] tracking-[0.01em] uppercase select-none sm:text-[15vw] lg:text-[12vw]">
            <span className="block overflow-hidden">
              <motion.span
                className="inline-block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: EASE, delay: 2.8 }}
              >
                Vanguard
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                className="glitch inline-block text-outline"
                data-text="Defense"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: EASE, delay: 2.92 }}
              >
                Defense
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 3.1 }}
            className="mt-7 max-w-xl text-base leading-relaxed text-mute md:text-lg"
          >
            Precision systems for land, air and domain awareness. Built to
            protect, engineered to endure —{" "}
            <span className="text-bone">for those who protect the rest of us.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 3.25 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <Magnetic>
              <a
                href="#timeline"
                data-hover
                className="cut-corner-sm group inline-flex items-center gap-3 bg-amber px-8 py-4 font-mono text-[12px] font-bold tracking-[0.25em] text-ink uppercase transition-colors duration-300 hover:bg-bone"
              >
                Enter operations
                <span className="inline-block transition-transform duration-500 group-hover:translate-y-0.5">
                  ↓
                </span>
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#contact"
                data-hover
                className="cut-corner-sm inline-flex items-center gap-3 border border-line px-8 py-4 font-mono text-[12px] font-bold tracking-[0.25em] text-bone uppercase transition-colors duration-300 hover:border-amber hover:text-amber"
              >
                Request briefing
              </a>
            </Magnetic>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: EASE, delay: 3.2 }}
          className="relative mx-auto w-full max-w-[420px]"
        >
          <div className="scanlines relative aspect-square overflow-hidden border border-line bg-[#0d110a]">
            <div className="absolute inset-0">
              <svg className="h-full w-full" viewBox="0 0 400 400" fill="none">
                <circle cx="200" cy="200" r="190" stroke="rgba(232,228,216,0.14)" />
                <circle cx="200" cy="200" r="142" stroke="rgba(232,228,216,0.14)" strokeDasharray="4 6" />
                <circle cx="200" cy="200" r="95" stroke="rgba(232,228,216,0.16)" />
                <circle cx="200" cy="200" r="47" stroke="rgba(232,228,216,0.18)" />
                <line x1="200" y1="10" x2="200" y2="390" stroke="rgba(232,228,216,0.12)" />
                <line x1="10" y1="200" x2="390" y2="200" stroke="rgba(232,228,216,0.12)" />
                <line x1="60" y1="60" x2="340" y2="340" stroke="rgba(232,228,216,0.07)" />
                <line x1="340" y1="60" x2="60" y2="340" stroke="rgba(232,228,216,0.07)" />
              </svg>
            </div>

            <div className="animate-spin-slow radar absolute inset-0 m-auto size-[92%] rounded-full" />

            {[
              { top: "24%", left: "30%" },
              { top: "62%", left: "68%" },
              { top: "70%", left: "26%" },
              { top: "38%", left: "72%" },
            ].map((blip, i) => (
              <motion.span
                key={i}
                className="absolute size-1.5 rounded-full bg-amber"
                style={{ top: blip.top, left: blip.left }}
                animate={{
                  opacity: [0.15, 1, 0.15],
                  boxShadow: ["0 0 0px rgba(232,163,61,0)", "0 0 14px rgba(232,163,61,0.9)", "0 0 0px rgba(232,163,61,0)"],
                }}
                transition={{ duration: 2.4 + i * 0.5, repeat: Infinity, delay: i * 0.6 }}
              />
            ))}

            <motion.div
              initial={{ opacity: 0, scale: 1.4 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: EASE, delay: 3.6 }}
              className="absolute top-[26%] left-[46%] border border-amber/90"
            >
              <span className="absolute -top-[3px] -left-[3px] h-[6px] w-[6px] border-t-2 border-l-2 border-amber" />
              <span className="absolute -top-[3px] -right-[3px] h-[6px] w-[6px] border-t-2 border-r-2 border-amber" />
              <span className="absolute -bottom-[3px] -left-[3px] h-[6px] w-[6px] border-b-2 border-l-2 border-amber" />
              <span className="absolute -right-[3px] -bottom-[3px] h-[6px] w-[6px] border-r-2 border-b-2 border-amber" />
              <span className="block px-5 py-3 font-mono text-[9px] tracking-[0.25em] text-amber uppercase">
                Target locked
              </span>
            </motion.div>

            <div className="animate-scan absolute right-0 left-0 h-px bg-amber/60 shadow-[0_0_12px_rgba(232,163,61,0.8)]" />

            <span className="absolute top-2 left-3 font-mono text-[9px] tracking-[0.2em] text-amber uppercase">
              ● REC ●
            </span>
            <span className="absolute top-2 right-3 font-mono text-[9px] tracking-[0.2em] text-faint uppercase">
              FEED 07
            </span>
          </div>

          <div className="grid grid-cols-3 border border-t-0 border-line bg-panel font-mono">
            {[
              ["ALT", `${tele.alt.toLocaleString()} M`],
              ["HDG", `${tele.hdg}°`],
              ["SPD", `${tele.spd} KM/H`],
            ].map(([label, value]) => (
              <div key={label} className="border-r border-line px-4 py-3 last:border-r-0">
                <p className="text-[9px] tracking-[0.3em] text-faint uppercase">{label}</p>
                <p className="mt-1 text-[13px] font-semibold text-bone">{value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 3.5 }}
        className="relative border-t border-line"
      >
        <div className="tick-edge h-2 w-full opacity-40" />
        <div className="grid grid-cols-2 gap-y-2 px-6 py-4 font-mono text-[9px] tracking-[0.3em] text-faint uppercase md:grid-cols-4 md:px-10">
          <span>REF: VG-DOC-2026</span>
          <span className="hidden md:inline">RATING: A+ — DAS/OSD</span>
          <span className="hidden md:inline">EST. 2009</span>
          <span className="text-right text-amber">● ALL SECTORS OPERATIONAL</span>
        </div>
      </motion.div>
    </section>
  );
}
