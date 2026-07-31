"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const links = {
  "Operations": ["Sentinel-9", "Bullfrog-X", "Ghost-Link", "Halo-Net"],
  "Company": ["Mission", "Theatres", "Careers", "Newsroom"],
  "Field Support": ["Contact", "Documentation", "Service Requests", "Status"],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-line bg-ink">
      <section id="contact" className="scroll-mt-24">
        <div className="mx-auto max-w-[1400px] px-6 pt-28 pb-16 md:px-10 md:pt-36">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE }}
            className="mb-16 flex items-center gap-4"
          >
            <span className="font-mono text-[11px] tracking-[0.45em] text-amber uppercase">
              [ 06 — Establish Contact ]
            </span>
            <span className="h-px flex-1 bg-line" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-faint uppercase">
              CHANNEL OPEN
            </span>
          </motion.div>

          <div className="grid gap-12 md:grid-cols-2 md:gap-20">
            <div>
              <h2 className="font-display text-5xl leading-[0.95] tracking-wide text-bone uppercase md:text-7xl">
                Clear
                <br />
                for action.
              </h2>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-mute">
                Direct line to operations. We respond within the hour —
                encrypted, priority one.
              </p>
            </div>

            <div className="grid gap-3 self-center">
              {["ops@vanguard-systems.global", "+880 1700 000 004", "CLEARANCE / FIELD FORM"].map(
                (row, i) => (
                  <a
                    key={row}
                    href={i === 2 ? "#" : `mailto:ops@vanguard-systems.global`}
                    data-hover
                    className="group flex items-center justify-between border border-line bg-[#0e120b] px-5 py-4 transition-colors duration-500 hover:border-amber/50"
                  >
                    <span className="font-mono text-[11px] tracking-[0.25em] text-bone uppercase">
                      {row}
                    </span>
                    <span className="text-amber transition-transform duration-500 group-hover:translate-x-1.5">
                      →
                    </span>
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-line">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-6 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:px-10">
          <div>
            <p className="font-display text-2xl tracking-wide text-bone uppercase">
              VANGUARD
            </p>
            <p className="mt-2 font-mono text-[10px] tracking-[0.25em] text-faint uppercase">
              DEFENSE &amp; TACTICAL SYSTEMS
            </p>
            <div className="mt-5 flex items-center gap-3">
              <span className="animate-blink size-1.5 rounded-full bg-emerald" />
              <span className="font-mono text-[10px] tracking-[0.25em] text-bone/70 uppercase">
                Systems nominal
              </span>
            </div>
          </div>

          {Object.entries(links).map(([col, items]) => (
            <div key={col}>
              <p className="font-mono text-[10px] tracking-[0.35em] text-faint uppercase">
                {col}
              </p>
              <ul className="mt-4 space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#contact"
                      data-hover
                      className="font-mono text-[11px] tracking-[0.15em] text-mute uppercase transition-colors hover:text-amber"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-4 px-6 py-6 md:px-10">
          <p className="font-mono text-[9px] tracking-[0.3em] text-faint uppercase">
            © 2026 VANGUARD DEFENSE &amp; TACTICAL SYSTEMS
          </p>
          <p className="font-mono text-[9px] tracking-[0.3em] text-faint uppercase">
            SITE IS A CONCEPT DEMO — ALL DATA FICTIONAL
          </p>
        </div>
      </div>
    </footer>
  );
}
