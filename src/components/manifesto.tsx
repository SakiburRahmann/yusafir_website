"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const statement =
  "Websites are the closest thing to cinema that a brand will ever own. We direct them like films — pacing, light, sound and story — so your audience doesn't just scroll. They feel.";

export default function Manifesto() {
  const words = statement.split(" ");

  return (
    <section className="mx-auto max-w-[1400px] px-6 py-32 md:px-10 md:py-48">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: EASE }}
        className="mb-14 flex items-center gap-4"
      >
        <span className="font-sans text-[11px] tracking-[0.45em] text-gold uppercase">
          [ 00 — Manifesto ]
        </span>
        <span className="h-px flex-1 bg-line" />
      </motion.div>

      <p className="max-w-5xl font-display text-3xl leading-[1.3] font-bold tracking-tight text-bone uppercase md:text-5xl md:leading-[1.22]">
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden align-top">
            <motion.span
              className="inline-block"
              initial={{ y: "115%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, margin: "-12% 0px" }}
              transition={{ duration: 0.65, ease: EASE, delay: i * 0.018 }}
            >
              {word}
              {i < words.length - 1 ? "\u00A0" : ""}
            </motion.span>
          </span>
        ))}
      </p>

      <div className="mt-20 grid gap-10 border-t border-line pt-14 md:grid-cols-3">
        {[
          { n: "01", t: "Pace", d: "Scrolling is a camera movement. We choreograph speed so every reveal lands at the right moment." },
          { n: "02", t: "Light", d: "Grain, glow and gradients treated like a cinematographer treats a key light." },
          { n: "03", t: "Story", d: "Every section is a scene. Every scene moves the plot toward one feeling: this brand is different." },
        ].map((item, i) => (
          <motion.div
            key={item.n}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.8, ease: EASE, delay: i * 0.12 }}
            className="group"
          >
            <span className="font-display text-3xl font-black text-gold/40 transition-colors duration-500 group-hover:text-gold">
              {item.n}
            </span>
            <h3 className="mt-4 font-display text-xl font-extrabold text-bone uppercase">
              {item.t}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-mute">{item.d}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
