"use client";

import { motion } from "framer-motion";
import Magnetic from "@/components/magnetic";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden border-t border-line">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="animate-pulse-soft absolute bottom-[-30%] left-1/2 h-[60vh] w-[90vw] -translate-x-1/2 rounded-full bg-amber/[0.06] blur-[150px]" />
        <div className="hero-grid absolute inset-0 opacity-40" />
        <svg
          className="absolute top-1/2 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 opacity-[0.04]"
          viewBox="0 0 400 400"
          fill="none"
          stroke="#e8e4d8"
        >
          <circle cx="200" cy="200" r="60" />
          <circle cx="200" cy="200" r="130" strokeDasharray="6 8" />
          <circle cx="200" cy="200" r="195" strokeDasharray="2 10" />
          <line x1="200" y1="0" x2="200" y2="400" />
          <line x1="0" y1="200" x2="400" y2="200" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 pt-32 md:px-10 md:pt-48">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mb-10 text-center font-mono text-[11px] tracking-[0.45em] text-amber uppercase"
        >
          [ 06 — Contact ]
        </motion.p>

        <h2 className="text-center font-display text-[12vw] leading-[0.9] tracking-[0.01em] uppercase select-none md:text-[9vw]">
          <span className="block overflow-hidden">
            <motion.span
              className="inline-block"
              initial={{ y: "110%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: EASE }}
            >
              Strength is
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
              precision
            </motion.span>
          </span>
        </h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: EASE, delay: 0.3 }}
          className="hazard-thin mx-auto mt-6 h-1.5 w-[min(80vw,560px)] rounded-sm opacity-80"
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.4 }}
          className="mt-14 flex flex-col items-center justify-center gap-6"
        >
          <Magnetic strength={0.45}>
            <a
              href="mailto:briefings@vanguard-def.com"
              data-hover
              className="group inline-flex items-center gap-4 border-2 border-amber bg-amber px-12 py-5 font-mono text-[12px] font-bold tracking-[0.25em] text-ink uppercase transition-colors duration-300 hover:bg-transparent hover:text-amber"
            >
              Request a briefing
              <span className="inline-block transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                ↗
              </span>
            </a>
          </Magnetic>
          <p className="font-mono text-[10px] tracking-[0.35em] text-faint uppercase">
            Classified correspondence handled via secure channel
          </p>
        </motion.div>

        <div className="mt-28 grid gap-10 border-t border-line py-12 md:grid-cols-4">
          <div>
            <p className="font-display text-3xl tracking-wide text-bone uppercase">
              Vanguard<span className="text-amber">®</span>
            </p>
            <p className="mt-3 font-mono text-[10px] leading-5 tracking-[0.25em] text-faint uppercase">
              Defense &amp; Tactical Systems
              <br />
              EST. 2009
            </p>
          </div>
          <div>
            <p className="font-mono text-[10px] tracking-[0.35em] text-faint uppercase">
              Command
            </p>
            <div className="mt-4 flex flex-col gap-2">
              {["Recon", "Platforms", "Capabilities", "Contact"].map((l) => (
                <a
                  key={l}
                  href={`#${l === "Recon" ? "work" : l === "Platforms" ? "work" : l.toLowerCase()}`}
                  className="w-fit font-mono text-[11px] tracking-[0.2em] text-mute uppercase transition-colors hover:text-amber"
                >
                  {l}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="font-mono text-[10px] tracking-[0.35em] text-faint uppercase">
              Network
            </p>
            <div className="mt-4 flex flex-col gap-2">
              {["LinkedIn", "X / Twitter", "YouTube", "RSS Feed"].map((s) => (
                <a
                  key={s}
                  href="#contact"
                  className="w-fit font-mono text-[11px] tracking-[0.2em] text-mute uppercase transition-colors hover:text-amber"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="font-mono text-[10px] tracking-[0.35em] text-faint uppercase">
              HQ
            </p>
            <p className="mt-4 font-mono text-[11px] leading-6 tracking-[0.15em] text-mute">
              Sector 11, Dhaka 1213
              <br />
              Bangladesh
              <br />
              <a
                href="mailto:briefings@vanguard-def.com"
                className="transition-colors hover:text-amber"
              >
                briefings@vanguard-def.com
              </a>
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-line py-6 md:flex-row">
          <p className="font-mono text-[10px] tracking-[0.2em] text-faint uppercase">
            © 2026 Vanguard Defense Systems — All rights reserved
          </p>
          <p className="font-mono text-[10px] tracking-[0.2em] text-faint uppercase">
            <span className="animate-blink text-amber">●</span> SYSTEMS
            OPERATIONAL — ALL SECTORS
          </p>
        </div>
      </div>
    </footer>
  );
}
