"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const quote =
  "Nine years of continuous deployment across three continents. Zero critical failures. That is the standard Vanguard builds to — and the reason we keep renewing.";

export default function Quote() {
  const words = quote.split(" ");

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="animate-pulse-soft pointer-events-none absolute top-1/2 left-1/2 h-[55vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber/[0.05] blur-[140px]"
      />
      <div className="relative mx-auto max-w-5xl px-6 py-32 text-center md:px-10 md:py-48">
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE }}
          className="flex justify-center"
        >
          <span className="font-mono text-[10px] tracking-[0.4em] text-amber uppercase">
            FIELD REPORT — 2026
          </span>
        </motion.div>
        <p className="mt-8 font-display text-2xl leading-snug tracking-wide text-bone uppercase md:text-4xl md:leading-[1.35]">
          {words.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden align-top">
              <motion.span
                className="inline-block"
                initial={{ y: "115%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: "-12% 0px" }}
                transition={{ duration: 0.6, ease: EASE, delay: i * 0.012 }}
              >
                {word}
                {i < words.length - 1 ? "\u00A0" : ""}
              </motion.span>
            </span>
          ))}
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="mt-12"
        >
          <div className="mx-auto h-px w-24 bg-amber/50" />
          <p className="mt-6 font-display text-2xl tracking-wide text-bone uppercase">
            Col. M. Hassan <span className="text-amber">(Ret.)</span>
          </p>
          <p className="mt-2 font-mono text-[10px] tracking-[0.4em] text-faint uppercase">
            Director of Operations — Allied Command
          </p>
        </motion.div>
      </div>
    </section>
  );
}
