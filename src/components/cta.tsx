"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
      >
        <div className="animate-pulse-soft absolute top-1/2 left-1/2 h-[55vh] w-[85vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5e6ad2]/[0.12] blur-[130px]" />
        <div className="hero-grid absolute inset-0 opacity-50" />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-6 py-36 text-center md:px-10 md:py-52">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 1, ease: EASE }}
          className="mx-auto max-w-4xl text-4xl font-semibold tracking-[-0.03em] text-white sm:text-6xl md:text-[4.6rem] md:leading-[1.08]"
        >
          More than a
          <br />
          <span className="gradient-text">project management</span>
          <br />
          tool.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
          className="mx-auto mt-8 max-w-lg text-lg leading-relaxed text-sec"
        >
          Join 4,500+ teams building better products, faster. Set up takes
          minutes — not months.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.28 }}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#top"
            className="btn-primary w-full rounded-lg px-9 py-3.5 text-[15px] font-semibold text-white sm:w-auto"
          >
            Start now
          </a>
          <a
            href="mailto:hello@linear.app"
            className="w-full rounded-lg border border-white/15 bg-white/[0.03] px-9 py-3.5 text-[15px] font-semibold text-zinc-200 transition-colors hover:bg-white/[0.07] sm:w-auto"
          >
            Talk to sales →
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-8 font-mono text-[12px] text-zinc-500"
        >
          Free to get started · No credit card required
        </motion.p>
      </div>
    </section>
  );
}
