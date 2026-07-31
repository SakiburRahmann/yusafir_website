"use client";

import { motion } from "framer-motion";
import Magnetic from "@/components/magnetic";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden border-t border-line"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
      >
        <div className="animate-pulse-soft absolute bottom-[-30%] left-1/2 h-[60vh] w-[90vw] -translate-x-1/2 rounded-full bg-gold/[0.08] blur-[150px]" />
        <div className="hero-grid absolute inset-0 opacity-40" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 pt-32 md:px-10 md:pt-48">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mb-10 text-center font-sans text-[11px] tracking-[0.45em] text-gold uppercase"
        >
          [ 06 — Contact ]
        </motion.p>

        <h2 className="text-center font-display text-[11.5vw] leading-[0.95] font-black tracking-[-0.02em] text-bone uppercase select-none md:text-[8vw]">
          <span className="block overflow-hidden">
            <motion.span
              className="inline-block"
              initial={{ y: "110%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: EASE }}
            >
              Let’s make
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              className="text-outline inline-block"
              initial={{ y: "110%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: EASE, delay: 0.12 }}
            >
              something
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              className="text-gradient-gold inline-block"
              initial={{ y: "110%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: EASE, delay: 0.24 }}
            >
              extraordinary.
            </motion.span>
          </span>
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.4 }}
          className="mt-14 flex flex-col items-center justify-center gap-6"
        >
          <Magnetic strength={0.45}>
            <a
              href="mailto:hello@halcyon.studio"
              data-hover
              className="group inline-flex items-center gap-4 rounded-full bg-bone px-12 py-5 font-sans text-[12px] font-bold tracking-[0.25em] text-ink uppercase transition-colors duration-300 hover:bg-gold"
            >
              hello@halcyon.studio
              <span className="inline-block transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                ↗
              </span>
            </a>
          </Magnetic>
          <p className="font-sans text-[10px] tracking-[0.35em] text-faint uppercase">
            Replies within 24 hours — always a human
          </p>
        </motion.div>

        <div className="mt-28 grid gap-10 border-t border-line py-12 md:grid-cols-4">
          <div>
            <p className="font-display text-lg font-black tracking-tight text-bone uppercase">
              Halcyon<span className="text-gold">®</span>
            </p>
            <p className="mt-3 font-sans text-[10px] leading-5 tracking-[0.25em] text-faint uppercase">
              Creative Studio
              <br />
              Dhaka — London — NY
            </p>
          </div>
          <div>
            <p className="font-sans text-[10px] tracking-[0.35em] text-faint uppercase">
              Studio
            </p>
            <div className="mt-4 flex flex-col gap-2">
              {["Work", "Services", "Manifesto", "Contact"].map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  className="w-fit font-sans text-[11px] font-medium tracking-[0.2em] text-mute uppercase transition-colors hover:text-gold"
                >
                  {l}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="font-sans text-[10px] tracking-[0.35em] text-faint uppercase">
              Social
            </p>
            <div className="mt-4 flex flex-col gap-2">
              {["Instagram", "Behance", "Dribbble", "LinkedIn"].map((s) => (
                <a
                  key={s}
                  href="#contact"
                  className="w-fit font-sans text-[11px] font-medium tracking-[0.2em] text-mute uppercase transition-colors hover:text-gold"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="font-sans text-[10px] tracking-[0.35em] text-faint uppercase">
              New business
            </p>
            <a
              href="mailto:hello@halcyon.studio"
              className="mt-4 block font-sans text-[11px] font-medium tracking-[0.15em] text-mute transition-colors hover:text-gold"
            >
              hello@halcyon.studio
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-line py-6 md:flex-row">
          <p className="font-sans text-[10px] tracking-[0.2em] text-faint uppercase">
            © 2026 Halcyon Studio — All rights reserved
          </p>
          <p className="font-sans text-[10px] tracking-[0.2em] text-faint uppercase">
            Shot on scroll · Edited in motion
          </p>
        </div>
      </div>
    </footer>
  );
}
