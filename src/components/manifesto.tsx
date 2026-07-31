"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const statement =
  "Precision is the only luxury we believe in. Every tolerance measured twice, every system tested beyond its limit, every operator counted on. We do not sell equipment. We supply certainty.";

function Topo() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full text-bone/[0.045]"
      viewBox="0 0 800 500"
      fill="none"
      stroke="currentColor"
      preserveAspectRatio="xMidYMid slice"
    >
      {Array.from({ length: 9 }).map((_, i) => (
        <ellipse
          key={i}
          cx={400 + (i % 2 ? -30 : 40)}
          cy={250 + (i % 3) * 14}
          rx={70 + i * 46}
          ry={50 + i * 34}
          strokeWidth="1"
          transform={`rotate(${(i * 17) % 40 - 20} 400 250)`}
        />
      ))}
      <path
        d="M0 380 Q 200 330 400 390 T 800 360"
        strokeWidth="1"
        strokeDasharray="4 6"
      />
      <path
        d="M0 420 Q 250 390 450 430 T 800 415"
        strokeWidth="1"
        strokeDasharray="2 7"
      />
    </svg>
  );
}

export default function Manifesto() {
  const words = statement.split(" ");

  return (
    <section className="relative mx-auto max-w-[1400px] px-6 py-32 md:px-10 md:py-48">
      <Topo />
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mb-14 flex items-center gap-4"
        >
          <span className="font-mono text-[11px] tracking-[0.45em] text-amber uppercase">
            [ 00 — Doctrine ]
          </span>
          <span className="h-px flex-1 bg-line" />
          <span className="font-mono text-[10px] tracking-[0.3em] text-faint uppercase">
            REF: VG-DOC-2026
          </span>
        </motion.div>

        <p className="max-w-5xl font-display text-3xl leading-[1.25] tracking-wide text-bone uppercase md:text-[3.4rem] md:leading-[1.18]">
          {words.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden align-top">
              <motion.span
                className="inline-block"
                initial={{ y: "115%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: "-12% 0px" }}
                transition={{ duration: 0.6, ease: EASE, delay: i * 0.014 }}
              >
                {word}
                {i < words.length - 1 ? "\u00A0" : ""}
              </motion.span>
            </span>
          ))}
        </p>

        <div className="mt-20 grid gap-10 border-t border-line pt-14 md:grid-cols-3">
          {[
            { n: "01", t: "Tested beyond limits", d: "Every platform endures 2× its rated stress before it earns a serial number. Failure is a design input, not an outcome." },
            { n: "02", t: "Silence by design", d: "Low observability, low signature, low drama. The best system is the one you never notice working." },
            { n: "03", t: "Accountable to the mission", d: "Uptime commitments measured in nines. Field support in hours, not weeks. Your operation is our operation." },
          ].map((item, i) => (
            <motion.div
              key={item.n}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.8, ease: EASE, delay: i * 0.12 }}
              className="group relative border border-line bg-coal/60 p-8"
            >
              <span className="absolute top-0 left-0 size-3 border-t-2 border-l-2 border-amber" />
              <span className="absolute top-0 right-0 size-3 border-t-2 border-r-2 border-amber" />
              <span className="absolute bottom-0 left-0 size-3 border-b-2 border-l-2 border-amber" />
              <span className="absolute right-0 bottom-0 size-3 border-r-2 border-b-2 border-amber" />
              <span className="font-mono text-xs tracking-[0.3em] text-amber/70">
                {item.n}
              </span>
              <h3 className="mt-4 font-display text-3xl tracking-wide text-bone uppercase">
                {item.t}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-mute">{item.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
