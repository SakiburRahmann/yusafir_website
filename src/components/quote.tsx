"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const quote =
  "Halcyon didn't build us a website. They made our first trailer. Conversion doubled, and our team finally believes in the brand again.";

export default function Quote() {
  const words = quote.split(" ");

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="animate-pulse-soft pointer-events-none absolute top-1/2 left-1/2 h-[55vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.06] blur-[140px]"
      />
      <div className="relative mx-auto max-w-5xl px-6 py-32 text-center md:px-10 md:py-48">
        <motion.span
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE }}
          className="text-gradient-gold font-serif text-8xl italic md:text-9xl"
        >
          “
        </motion.span>
        <p className="-mt-8 font-serif text-2xl leading-snug text-bone italic md:text-4xl md:leading-[1.4]">
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
          <p className="font-display text-lg font-extrabold tracking-tight text-bone uppercase">
            Mara Lindqvist
          </p>
          <p className="mt-2 font-sans text-[10px] tracking-[0.4em] text-faint uppercase">
            CMO — Nordvik Group
          </p>
        </motion.div>
      </div>
    </section>
  );
}
