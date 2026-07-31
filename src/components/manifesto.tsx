"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

function RevealWords({ text, className }: { text: string; className?: string }) {
  const words = text.split(" ");
  return (
    <p className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-top">
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{
              duration: 0.7,
              ease: EASE,
              delay: i * 0.02,
            }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </p>
  );
}

export default function Manifesto() {
  return (
    <section id="studio" className="relative mx-auto max-w-[1600px] px-6 py-32 md:px-10 md:py-44">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: EASE }}
        className="mb-14 flex items-center gap-4"
      >
        <span className="font-mono text-[11px] tracking-[0.35em] text-gold uppercase">
          [ 01 — Philosophy ]
        </span>
        <span className="h-px flex-1 bg-line" />
      </motion.div>

      <RevealWords
        text="Good design is not decoration. It is strategy made visible — the quiet discipline of deciding what deserves attention, and what deserves silence."
        className="max-w-5xl font-display text-3xl leading-[1.25] font-normal text-bone sm:text-4xl md:text-[3.4rem] md:leading-[1.18]"
      />

      <div className="mt-20 grid gap-12 md:grid-cols-3 md:gap-8">
        {[
          {
            n: "I",
            t: "Clarity over noise",
            d: "Every pixel earns its place. We strip away until only the essential remains — and what remains must be flawless.",
          },
          {
            n: "II",
            t: "Craft is conviction",
            d: "A three-millisecond easing curve, a perfect optical metric, a hairline that holds at any size. Details are not details.",
          },
          {
            n: "III",
            t: "Motion with meaning",
            d: "Animation is not spectacle. It is a narrative tool that guides the eye, earns trust and makes the interface feel alive.",
          },
        ].map((item, i) => (
          <motion.div
            key={item.n}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.8, ease: EASE, delay: i * 0.12 }}
            className="group border-t border-line pt-8"
          >
            <span className="font-display text-5xl text-gold/50 transition-colors duration-500 group-hover:text-gold">
              {item.n}
            </span>
            <h3 className="mt-5 font-display text-2xl text-bone">{item.t}</h3>
            <p className="mt-3 text-sm leading-relaxed text-mute">{item.d}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
