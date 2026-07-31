"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const ops = [
  {
    year: "2009",
    title: "Founding",
    desc: "A three-person workshop in Dhaka begins building field radios for border patrol units.",
    tag: "GENESIS",
  },
  {
    year: "2013",
    title: "First airframe",
    desc: "Delta-1, our first fixed-wing reconnaissance platform, enters service with 400 flight hours logged.",
    tag: "AIR",
  },
  {
    year: "2017",
    title: "Cyber division",
    desc: "Threat-hunting unit stands up to protect critical infrastructure across the region.",
    tag: "CYBER",
  },
  {
    year: "2021",
    title: "HALO-NET",
    desc: "Unified domain-awareness mesh deployed across three continents, 12 theatres.",
    tag: "AWARENESS",
  },
  {
    year: "2024",
    title: "Autonomy",
    desc: "SENTINEL-9 achieves autonomous swarm operations with zero-operator flight profiles.",
    tag: "AUTONOMY",
  },
  {
    year: "2026",
    title: "Current ops",
    desc: "Active contracts in 14 countries. Field support in 12 time zones. Uptime in nine nines.",
    tag: "ACTIVE",
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="relative bg-coal">
      <div className="slant-t pointer-events-none absolute inset-0 bg-ink" />
      <div className="relative mx-auto max-w-[1400px] px-6 pt-40 pb-28 md:px-10 md:pt-48">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mb-20 flex items-center gap-4"
        >
          <span className="font-mono text-[11px] tracking-[0.45em] text-amber uppercase">
            [ 01 — Operations ]
          </span>
          <span className="h-px flex-1 bg-line" />
          <span className="hidden font-mono text-[10px] tracking-[0.3em] text-faint uppercase md:inline">
            17 YEARS — 6 PHASES
          </span>
        </motion.div>

        <div className="relative">
          <div className="absolute top-0 bottom-0 left-[7px] w-px bg-line md:left-1/2" />
          <div className="hazard-thin absolute top-0 left-[7px] h-3 w-[3px] md:left-1/2" />

          <div className="flex flex-col gap-14">
            {ops.map((op, i) => {
              const left = i % 2 === 0;
              return (
                <motion.div
                  key={op.year}
                  initial={{ opacity: 0, y: 44 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-12% 0px" }}
                  transition={{ duration: 0.85, ease: EASE, delay: 0.06 }}
                  className={`relative flex md:items-center ${
                    left ? "md:justify-start" : "md:justify-end"
                  } pl-10 md:w-1/2 md:pl-0 ${
                    left ? "md:pr-14 md:text-right" : "md:pl-14"
                  }`}
                >
                  <span
                    className={`absolute top-1.5 left-0 flex size-4 items-center justify-center md:top-1/2 md:-translate-y-1/2 ${
                      left ? "md:-right-2" : "md:-left-2"
                    } ${left ? "md:translate-x-0" : ""} ${
                      i % 2 === 0
                        ? "md:right-auto md:left-full md:-ml-2"
                        : "md:right-full md:left-auto md:-mr-2"
                    }`}
                  >
                    <span className="size-4 rotate-45 border border-amber bg-ink" />
                  </span>

                  <div className="group w-full border border-line bg-[#0e120b] p-6 transition-colors duration-500 hover:border-amber/50 md:p-8">
                    <div
                      className={`flex items-baseline gap-4 ${
                        left ? "md:flex-row-reverse" : ""
                      }`}
                    >
                      <span className="font-display text-5xl tracking-wide text-amber md:text-6xl">
                        {op.year}
                      </span>
                      <span className="font-mono text-[9px] tracking-[0.35em] text-faint uppercase">
                        {op.tag}
                      </span>
                    </div>
                    <h3 className="mt-4 font-display text-3xl tracking-wide text-bone uppercase">
                      {op.title}
                    </h3>
                    <p className="mt-2.5 max-w-md text-sm leading-relaxed text-mute">
                      {op.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
