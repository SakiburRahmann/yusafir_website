"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

function RotatingBadge() {
  return (
    <div className="relative hidden size-28 lg:block">
      <svg
        viewBox="0 0 100 100"
        className="animate-spin-slow absolute inset-0 size-full"
      >
        <defs>
          <path
            id="circlePath"
            d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
          />
        </defs>
        <text className="fill-mute font-mono text-[8.2px] tracking-[0.32em] uppercase">
          <textPath href="#circlePath">
            Est. 2016 — Design & Digital —
          </textPath>
        </text>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="animate-pulse-glow size-2.5 rounded-full bg-gold" />
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen flex-col overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -top-1/4 left-1/2 h-[70vh] w-[90vw] -translate-x-1/2 rounded-full bg-gold/[0.07] blur-[140px]" />
        <div className="absolute bottom-0 left-[-20%] h-[50vh] w-[50vw] rounded-full bg-[#3b2a17]/[0.35] blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.35] [background-image:linear-gradient(rgba(244,241,234,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(244,241,234,0.04)_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]" />
      </div>

      <div className="relative mx-auto flex w-full max-w-[1600px] flex-1 flex-col justify-center px-6 pt-40 pb-16 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.55 }}
          className="mb-8 flex items-center gap-4"
        >
          <span className="h-px w-10 bg-gold" />
          <span className="font-mono text-[11px] tracking-[0.35em] text-gold uppercase">
            Digital Atelier — Dhaka · London · NY
          </span>
        </motion.div>

        <h1 className="font-display text-[13.5vw] leading-[0.95] font-medium tracking-[-0.02em] text-bone sm:text-[11vw] lg:text-[9vw]">
          {[
            { text: "We craft", cls: "block" },
            { text: "digital", cls: "block italic text-gradient-gold pr-2" },
            { text: "presence", cls: "block text-outline pr-2" },
            { text: "that feels", cls: "block" },
            { text: "inevitable.", cls: "block italic text-gradient-gold" },
          ].map((line, i) => (
            <span key={i} className={`${line.cls} overflow-hidden`}>
              <motion.span
                className="inline-block"
                initial={{ y: "108%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1.1,
                  ease: EASE,
                  delay: 0.6 + i * 0.09,
                }}
              >
                {line.text}
              </motion.span>
            </span>
          ))}
        </h1>

        <div className="mt-12 flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 1.25 }}
            className="max-w-md text-base leading-relaxed text-mute md:text-lg"
          >
            Aurum is a senior collective of designers and engineers building
            identities, products and websites for brands that refuse to be
            ordinary.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 1.4 }}
            className="flex items-center gap-8"
          >
            <div className="hidden h-24 w-px bg-line sm:block" />
            <div className="font-mono text-[11px] leading-6 tracking-[0.2em] text-faint uppercase">
              01 / 02 — Visual Identity
              <br />
              02 / 02 — Digital Product
            </div>
            <RotatingBadge />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
        className="relative border-t border-line"
      >
        <div className="flex items-center justify-between px-6 py-6 md:px-10">
          <div className="flex items-center gap-3">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-gold/60" />
              <span className="relative inline-flex size-2 rounded-full bg-gold" />
            </span>
            <span className="font-mono text-[10px] tracking-[0.3em] text-mute uppercase">
              Accepting projects — Q3 2026
            </span>
          </div>
          <a
            href="#work"
            data-hover
            className="group flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] text-mute uppercase transition-colors hover:text-bone"
          >
            Scroll
            <span className="inline-block size-8 rounded-full border border-line text-center leading-8 transition-all duration-500 group-hover:border-gold group-hover:text-gold">
              ↓
            </span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
