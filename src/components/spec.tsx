"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const specs = [
  {
    model: "SENTINEL-9",
    rows: [
      ["Endurance", "14 H"],
      ["Ceiling", "18,000 M"],
      ["Payload", "SWARM-X SENSOR SUITE"],
      ["Radius", "1,200 KM"],
    ],
  },
  {
    model: "BULLFROG-X",
    rows: [
      ["Payload", "1,800 KG"],
      ["Drive", "SILENT ELECTRIC"],
      ["Gradient", "60%"],
      ["Range", "340 KM"],
    ],
  },
  {
    model: "HALO-NET",
    rows: [
      ["Nodes", "50,000+"],
      ["Latency", "< 40 MS"],
      ["Security", "AES-512 E2EE"],
      ["Uptime", "99.9999%"],
    ],
  },
];

export default function Spec() {
  return (
    <section className="relative border-y border-line bg-coal">
      <div className="tick-edge absolute top-0 right-0 left-0 h-2 opacity-30" />
      <div className="mx-auto max-w-[1400px] px-6 py-32 md:px-10 md:py-40">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mb-16 flex items-center gap-4"
        >
          <span className="font-mono text-[11px] tracking-[0.45em] text-amber uppercase">
            [ 04 — Spec Sheets ]
          </span>
          <span className="h-px flex-1 bg-line" />
        </motion.div>

        <div className="grid gap-4 md:grid-cols-3">
          {specs.map((spec, i) => (
            <motion.div
              key={spec.model}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8% 0px" }}
              transition={{ duration: 0.85, ease: EASE, delay: i * 0.12 }}
              className="group relative border border-line bg-[#0e120b] p-7 transition-colors duration-500 hover:border-amber/50"
            >
              <span className="absolute top-0 left-0 size-4 border-t-2 border-l-2 border-amber" />
              <span className="absolute top-0 right-0 size-4 border-t-2 border-r-2 border-amber" />
              <span className="absolute bottom-0 left-0 size-4 border-b-2 border-l-2 border-amber" />
              <span className="absolute right-0 bottom-0 size-4 border-r-2 border-b-2 border-amber" />

              <div className="flex items-center justify-between">
                <h3 className="font-display text-3xl tracking-wide text-bone uppercase transition-colors group-hover:text-amber">
                  {spec.model}
                </h3>
                <span className="font-mono text-[9px] tracking-[0.3em] text-faint uppercase">
                  SHEET {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="mt-6 border-t border-line">
                {spec.rows.map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between border-b border-line py-3 font-mono text-[10px] tracking-[0.2em]"
                  >
                    <span className="text-faint uppercase">{label}</span>
                    <span className="font-semibold text-bone">{value}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                data-hover
                className="mt-6 inline-flex items-center gap-2 font-mono text-[10px] font-bold tracking-[0.3em] text-mute uppercase transition-colors group-hover:text-amber"
              >
                Request full sheet
                <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
