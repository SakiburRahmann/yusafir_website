"use client";

import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const services = [
  {
    n: "01",
    title: "Brand Identity",
    desc: "Names, logotypes, systems and voice — a language your audience remembers.",
    img: "https://picsum.photos/seed/halcyon-s1/700/900",
  },
  {
    n: "02",
    title: "Art Direction",
    desc: "Photography, editorial and campaign systems directed like film sets.",
    img: "https://picsum.photos/seed/halcyon-s2/700/900",
  },
  {
    n: "03",
    title: "Web Design & Motion",
    desc: "Award-calibre sites where scrolling feels like watching cinema.",
    img: "https://picsum.photos/seed/halcyon-s3/700/900",
  },
  {
    n: "04",
    title: "Development",
    desc: "Hand-built, blazing-fast frontends. No templates, no compromise.",
    img: "https://picsum.photos/seed/halcyon-s4/700/900",
  },
  {
    n: "05",
    title: "Strategy",
    desc: "Positioning and narrative that make everything else inevitable.",
    img: "https://picsum.photos/seed/halcyon-s5/700/900",
  },
];

export default function Services() {
  const [active, setActive] = useState<number | null>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 180, damping: 22, mass: 0.7 });
  const sy = useSpring(my, { stiffness: 180, damping: 22, mass: 0.7 });

  return (
    <section id="services" className="relative border-y border-line bg-coal">
      <motion.div
        style={{ x: sx, y: sy }}
        className="pointer-events-none fixed top-0 left-0 z-[60] hidden md:block"
        aria-hidden
      >
        <AnimatePresence>
          {active !== null && (
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.75, rotate: -4 }}
              animate={{ opacity: 1, scale: 1, rotate: 2 }}
              exit={{ opacity: 0, scale: 0.85, rotate: 6 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="size-[300px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl shadow-[0_30px_80px_rgba(0,0,0,0.7)]"
            >
              <img
                src={services[active].img}
                alt={services[active].title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 border border-gold/30 rounded-xl" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <div
        className="mx-auto max-w-[1400px] px-6 py-32 md:px-10 md:py-44"
        onMouseMove={(e) => {
          mx.set(e.clientX);
          my.set(e.clientY);
        }}
        onMouseLeave={() => setActive(null)}
      >
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: EASE }}
              className="font-sans text-[11px] tracking-[0.45em] text-gold uppercase"
            >
              [ 05 — Services ]
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
              className="mt-6 font-display text-5xl font-black tracking-tight text-bone uppercase md:text-7xl"
            >
              What we
              <span className="text-gradient-gold font-serif lowercase italic">
                {" "}
                direct
              </span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="max-w-sm text-sm leading-relaxed text-mute"
          >
            Hover the list — the frame follows your cursor. Five disciplines,
            one standard: everything we ship feels like a feature film.
          </motion.p>
        </div>

        <div className="border-t border-line">
          {services.map((service, i) => (
            <motion.div
              key={service.n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8% 0px" }}
              transition={{ duration: 0.8, ease: EASE, delay: i * 0.05 }}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              data-hover
              className="group relative cursor-pointer border-b border-line"
            >
              <div className="absolute inset-0 origin-bottom scale-y-0 bg-gradient-to-r from-gold/[0.07] to-transparent transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100" />
              <div className="relative grid items-center gap-3 px-2 py-9 md:grid-cols-[90px_1fr_1.3fr] md:gap-10 md:px-6 md:py-12">
                <span className="font-display text-sm font-black text-faint transition-colors duration-500 group-hover:text-gold">
                  {service.n}
                </span>
                <h3 className="font-display text-2xl font-extrabold tracking-tight text-bone uppercase transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-4 group-hover:text-gold sm:text-3xl md:text-5xl">
                  {service.title}
                </h3>
                <p className="hidden max-w-sm text-sm leading-relaxed text-mute md:block">
                  {service.desc}
                </p>
                <span className="hidden justify-self-end font-display text-2xl text-bone/0 transition-all duration-500 group-hover:text-bone md:block">
                  →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
