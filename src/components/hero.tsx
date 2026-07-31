"use client";

import { motion } from "framer-motion";
import Magnetic from "@/components/magnetic";

const EASE = [0.16, 1, 0.3, 1] as const;

const marqueeWords = [
  "Brand Identity",
  "Art Direction",
  "Web Design",
  "Motion",
  "Development",
  "Strategy",
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="hero-grid absolute inset-0" />
        <div className="animate-pulse-soft absolute -top-1/4 left-1/2 h-[80vh] w-[110vw] -translate-x-1/2 rounded-full bg-gold/[0.06] blur-[150px]" />
        <div className="absolute right-[-10%] bottom-[-20%] h-[50vh] w-[45vw] rounded-full bg-[#3b2a17]/[0.35] blur-[130px]" />
      </div>

      <div className="relative mx-auto flex w-full max-w-[1400px] flex-1 flex-col items-center justify-center px-6 pt-36 pb-10 text-center md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 2.6 }}
          className="mb-8 flex items-center gap-3 font-sans text-[11px] tracking-[0.4em] text-mute uppercase"
        >
          <span className="h-px w-8 bg-gold" />
          Creative Studio — Est. 2016
          <span className="h-px w-8 bg-gold" />
        </motion.p>

        <h1 className="font-display text-[17vw] leading-[0.9] font-black tracking-[-0.02em] uppercase select-none sm:text-[15vw] lg:text-[13vw]">
          {["Halcyon", "®"].map((word, li) => (
            <span key={word} className="block overflow-hidden">
              <motion.span
                className={`inline-block ${
                  li === 1
                    ? "text-gradient-gold align-top text-[0.22em]"
                    : ""
                }`}
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.1, ease: EASE, delay: 2.7 + li * 0.12 }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 3.1 }}
          className="mt-8 max-w-lg text-base leading-relaxed text-mute md:text-lg"
        >
          We make the internet feel{" "}
          <span className="font-serif text-bone italic">alive</span> — film-like
          websites, art direction and digital craft for brands that refuse to
          scroll by.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 3.25 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Magnetic>
            <a
              href="#work"
              data-hover
              className="group inline-flex items-center gap-3 rounded-full bg-bone px-9 py-4 font-sans text-[12px] font-semibold tracking-[0.2em] text-ink uppercase transition-colors duration-300 hover:bg-gold"
            >
              Enter the reel
              <span className="inline-block transition-transform duration-500 group-hover:translate-y-0.5">
                ↓
              </span>
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="#contact"
              data-hover
              className="inline-flex items-center gap-3 rounded-full border border-line px-9 py-4 font-sans text-[12px] font-semibold tracking-[0.2em] text-bone uppercase transition-colors duration-300 hover:border-gold hover:text-gold"
            >
              Start a project
            </a>
          </Magnetic>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3.5 }}
          className="mt-14 flex items-center gap-2.5"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-gold/60" />
            <span className="relative inline-flex size-2 rounded-full bg-gold" />
          </span>
          <span className="font-sans text-[10px] tracking-[0.35em] text-mute uppercase">
            Available for select projects — 2026
          </span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 3.6 }}
        className="relative border-t border-line py-5"
      >
        <div className="mask-fade-x overflow-hidden">
          <div className="animate-marquee flex w-max items-center whitespace-nowrap">
            {[0, 1].map((half) => (
              <div key={half} className="flex items-center">
                {marqueeWords.map((word) => (
                  <span
                    key={`${half}-${word}`}
                    className="flex items-center font-display text-xl font-bold tracking-wide text-bone/50 uppercase md:text-2xl"
                  >
                    <span className="px-8">{word}</span>
                    <span className="text-sm text-gold">✦</span>
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
