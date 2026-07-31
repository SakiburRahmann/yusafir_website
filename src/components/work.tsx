"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const projects = [
  {
    title: "Obsidian",
    client: "Private Wealth Group",
    year: "2026",
    tags: ["Identity", "Web Platform"],
    art: (
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1c1c22] via-[#0d0d10] to-black" />
        <div className="absolute -top-1/4 -right-1/4 h-3/4 w-3/4 rounded-full bg-[#2a2a35] blur-[90px]" />
        <div className="absolute bottom-0 left-0 h-1/2 w-1/2 rounded-full bg-[#3b3b4a]/50 blur-[80px]" />
        <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:40px_40px]" />
        <span className="font-display absolute -right-6 -bottom-10 text-[11rem] leading-none font-medium text-white/[0.06] italic select-none md:text-[16rem]">
          O
        </span>
      </div>
    ),
  },
  {
    title: "Lumen",
    client: "Health & Wellness Co.",
    year: "2025",
    tags: ["Art Direction", "E-Commerce"],
    art: (
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2b2015] via-[#171009] to-black" />
        <div className="absolute -top-1/3 left-1/4 h-2/3 w-2/3 rounded-full bg-gold/[0.16] blur-[100px]" />
        <div className="absolute right-0 bottom-0 h-1/2 w-1/2 rounded-full bg-[#7a4e1f]/30 blur-[80px]" />
        <span className="font-display absolute -right-4 -bottom-12 text-[11rem] leading-none font-medium text-gold/10 italic select-none md:text-[16rem]">
          L
        </span>
      </div>
    ),
  },
  {
    title: "Aether",
    client: "Fintech Scale-up",
    year: "2025",
    tags: ["Product", "Design System"],
    art: (
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#121a20] via-[#0a0e12] to-black" />
        <div className="absolute -bottom-1/3 -left-1/4 h-2/3 w-2/3 rounded-full bg-[#1d5f7a]/25 blur-[100px]" />
        <div className="absolute top-0 right-1/4 h-1/2 w-1/2 rounded-full bg-[#2a3f52]/30 blur-[90px]" />
        <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:28px_28px]" />
        <span className="font-display absolute -right-4 -bottom-12 text-[11rem] leading-none font-medium text-white/[0.06] italic select-none md:text-[16rem]">
          A
        </span>
      </div>
    ),
  },
];

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-[1600px] px-6 py-32 md:px-10 md:py-44">
      <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE }}
            className="mb-6 flex items-center gap-4"
          >
            <span className="font-mono text-[11px] tracking-[0.35em] text-gold uppercase">
              [ 03 — Selected Work ]
            </span>
            <span className="h-px w-16 bg-line" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
            className="font-display text-4xl leading-tight font-medium text-bone sm:text-5xl md:text-6xl"
          >
            Proof, not <span className="italic text-gradient-gold">promises.</span>
          </motion.h2>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.25 }}
          className="max-w-sm text-sm leading-relaxed text-mute"
        >
          A fraction of the work behind a decade of quiet obsession. Each
          engagement, a relationship that outlived the contract.
        </motion.p>
      </div>

      <div className="grid gap-8 md:grid-cols-3 md:gap-6">
        {projects.map((project, i) => (
          <motion.a
            key={project.title}
            href="#contact"
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8% 0px" }}
            transition={{ duration: 0.9, ease: EASE, delay: i * 0.12 }}
            data-hover
            className="group block"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              {project.art}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute top-5 left-5 flex items-center gap-3">
                <span className="rounded-full bg-black/40 px-3 py-1 font-mono text-[10px] tracking-[0.2em] text-bone/90 uppercase backdrop-blur-md">
                  {project.year}
                </span>
              </div>
              <div className="absolute right-5 bottom-5 left-5 flex items-end justify-between">
                <div>
                  <h3 className="font-display text-2xl text-bone transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1">
                    {project.title}
                  </h3>
                  <p className="mt-1 font-mono text-[10px] tracking-[0.2em] text-bone/60 uppercase">
                    {project.client}
                  </p>
                </div>
                <span className="flex size-11 -translate-y-1 translate-x-1 items-center justify-center rounded-full border border-bone/25 text-bone opacity-0 backdrop-blur-md transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:border-gold group-hover:text-gold">
                  ↗
                </span>
              </div>
              <div className="absolute inset-0 border border-transparent transition-colors duration-500 group-hover:border-gold/30" />
            </div>
            <div className="mt-5 flex items-center gap-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] tracking-[0.2em] text-faint uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
