"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Testimonial() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 h-[60vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.05] blur-[130px]"
      />
      <div className="relative mx-auto max-w-5xl px-6 py-32 text-center md:px-10 md:py-44">
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          className="font-display text-7xl leading-none text-gold/70"
        >
          “
        </motion.span>
        <motion.blockquote
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
          className="-mt-6 font-display text-2xl leading-snug font-normal text-bone sm:text-3xl md:text-[2.6rem] md:leading-[1.3]"
        >
          Aurum didn’t redesign our brand — they redesigned how the world
          <span className="italic text-gradient-gold"> sees us</span>. Revenue
          up 38% in the first quarter. The best investment we’ve ever made.
        </motion.blockquote>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.3 }}
          className="mt-10"
        >
          <p className="font-mono text-[11px] tracking-[0.3em] text-bone uppercase">
            Sarah Linden
          </p>
          <p className="mt-2 font-mono text-[10px] tracking-[0.3em] text-faint uppercase">
            CEO — Meridian Group
          </p>
        </motion.div>
      </div>
    </section>
  );
}
