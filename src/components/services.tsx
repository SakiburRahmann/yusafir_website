"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const services = [
  {
    n: "01",
    title: "Identity & Brand Systems",
    desc: "Naming, logotypes, typographic systems and voice — a complete language that scales from favicon to flagship store.",
    tags: ["Brand", "Naming", "Guidelines"],
  },
  {
    n: "02",
    title: "Digital Product Design",
    desc: "Research, strategy and interface design for products people love to use. From first sketch to shipped system.",
    tags: ["Product", "UX/UI", "Design Systems"],
  },
  {
    n: "03",
    title: "Immersive Web Experiences",
    desc: "Award-calibre marketing sites with motion, 3D and narrative — engineered to make your brand unforgettable.",
    tags: ["WebGL", "Motion", "Frontend"],
  },
  {
    n: "04",
    title: "Art Direction & Content",
    desc: "Photography direction, editorial design and campaign systems that give your story a singular, cinematic voice.",
    tags: ["Editorial", "Campaign", "Photo"],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative border-t border-line bg-coal">
      <div className="mx-auto max-w-[1600px] px-6 py-32 md:px-10 md:py-44">
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
                [ 02 — Services ]
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
              What we do, <span className="italic text-gradient-gold">exquisitely.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.25 }}
            className="max-w-sm text-sm leading-relaxed text-mute"
          >
            Four disciplines, one standard: uncompromising. Every engagement
            is led by a senior partner, end to end.
          </motion.p>
        </div>

        <div className="border-t border-line">
          {services.map((service, i) => (
            <motion.div
              key={service.n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8% 0px" }}
              transition={{ duration: 0.8, ease: EASE, delay: i * 0.06 }}
              className="group relative border-b border-line"
            >
              <div className="absolute inset-0 origin-bottom scale-y-0 bg-gradient-to-r from-gold/[0.06] to-transparent transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100" />
              <div className="relative grid items-center gap-4 px-2 py-10 md:grid-cols-[80px_1fr_1.2fr_auto] md:gap-8 md:px-6 md:py-14">
                <span className="font-mono text-sm tracking-widest text-faint transition-colors duration-500 group-hover:text-gold">
                  {service.n}
                </span>
                <h3 className="font-display text-2xl font-normal text-bone transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-3 sm:text-3xl md:text-4xl">
                  {service.title}
                </h3>
                <p className="hidden text-sm leading-relaxed text-mute md:block">
                  {service.desc}
                </p>
                <div className="hidden items-center gap-2 md:flex">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-line px-3 py-1 font-mono text-[10px] tracking-[0.15em] text-mute uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
