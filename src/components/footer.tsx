"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden border-t border-line">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-1/3 left-1/2 h-[60vh] w-[90vw] -translate-x-1/2 rounded-full bg-gold/[0.08] blur-[140px]"
      />
      <div className="relative mx-auto max-w-[1600px] px-6 pt-32 md:px-10 md:pt-44">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mb-12 flex items-center gap-4"
        >
          <span className="font-mono text-[11px] tracking-[0.35em] text-gold uppercase">
            [ 05 — Contact ]
          </span>
          <span className="h-px flex-1 bg-line" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: EASE, delay: 0.1 }}
          className="font-display text-[13vw] leading-[0.95] font-medium tracking-[-0.02em] text-bone sm:text-[10vw] lg:text-[8.5vw]"
        >
          <span className="block overflow-hidden">
            <motion.span
              className="inline-block"
              initial={{ y: "108%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: EASE, delay: 0.15 }}
            >
              Let’s make it
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              className="inline-block italic text-gradient-gold"
              initial={{ y: "108%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: EASE, delay: 0.28 }}
            >
              inevitable.
            </motion.span>
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.4 }}
          className="mt-12 flex flex-col gap-10 md:flex-row md:items-center md:justify-between"
        >
          <p className="max-w-md text-sm leading-relaxed text-mute">
            Tell us what you’re building. A reply within 24 hours — usually
            faster, always honest, never templated.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:hello@aurum.studio"
              data-hover
              className="group inline-flex items-center gap-3 rounded-full bg-gold px-8 py-4 font-mono text-[11px] tracking-[0.25em] text-ink uppercase transition-all duration-500 hover:bg-gold-bright"
            >
              hello@aurum.studio
              <span className="inline-block transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-0.5">
                ↗
              </span>
            </a>
            <a
              href="#top"
              data-hover
              className="inline-flex items-center gap-3 rounded-full border border-bone/20 px-8 py-4 font-mono text-[11px] tracking-[0.25em] text-bone uppercase transition-all duration-500 hover:border-bone"
            >
              Back to top ↑
            </a>
          </div>
        </motion.div>

        <div className="mt-28 grid gap-10 border-t border-line py-12 md:grid-cols-4">
          <div>
            <p className="font-display text-lg text-bone">
              AURUM<span className="text-gold">®</span>
            </p>
            <p className="mt-3 font-mono text-[10px] leading-5 tracking-[0.2em] text-faint uppercase">
              Digital Atelier
              <br />
              Est. 2016
            </p>
          </div>
          <div>
            <p className="font-mono text-[10px] tracking-[0.3em] text-faint uppercase">
              Sitemap
            </p>
            <div className="mt-4 flex flex-col gap-2">
              {["Work", "Services", "Studio", "Contact"].map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  className="w-fit font-mono text-[11px] tracking-[0.2em] text-mute uppercase transition-colors hover:text-gold"
                >
                  {l}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="font-mono text-[10px] tracking-[0.3em] text-faint uppercase">
              Social
            </p>
            <div className="mt-4 flex flex-col gap-2">
              {["Instagram", "Behance", "Dribbble", "LinkedIn"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-fit font-mono text-[11px] tracking-[0.2em] text-mute uppercase transition-colors hover:text-gold"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="font-mono text-[10px] tracking-[0.3em] text-faint uppercase">
              Studio
            </p>
            <p className="mt-4 font-mono text-[11px] leading-6 tracking-[0.15em] text-mute">
              Banani, Dhaka 1213
              <br />
              Bangladesh
              <br />
              <a href="mailto:hello@aurum.studio" className="transition-colors hover:text-gold">
                hello@aurum.studio
              </a>
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-line py-6 md:flex-row">
          <p className="font-mono text-[10px] tracking-[0.2em] text-faint uppercase">
            © 2026 Aurum Atelier — All rights reserved
          </p>
          <p className="font-mono text-[10px] tracking-[0.2em] text-faint uppercase">
            Designed with obsession · Built to endure
          </p>
        </div>
      </div>
    </footer>
  );
}
