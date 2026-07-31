"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

function ParallaxImage({
  src,
  alt,
  ratio,
  className = "",
}: {
  src: string;
  alt: string;
  ratio: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.25, 1.05, 1.25]);

  return (
    <div
      ref={ref}
      className={`scanlines relative overflow-hidden ${ratio} ${className}`}
    >
      <motion.img
        src={src}
        alt={alt}
        style={{ y, scale }}
        className="military-img absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
      <div className="absolute top-4 left-4 size-5 border-t-2 border-l-2 border-amber/70" />
      <div className="absolute top-4 right-4 size-5 border-t-2 border-r-2 border-amber/70" />
      <div className="absolute bottom-4 left-4 size-5 border-b-2 border-l-2 border-amber/70" />
      <div className="absolute right-4 bottom-4 size-5 border-r-2 border-b-2 border-amber/70" />
    </div>
  );
}

export default function Showcase() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
      <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 1, ease: EASE }}
          className="order-2 md:order-1"
        >
          <p className="font-mono text-[11px] tracking-[0.45em] text-amber uppercase">
            [ 03 — Engineering ]
          </p>
          <h2 className="mt-6 font-display text-6xl leading-[0.95] tracking-wide text-bone uppercase md:text-7xl">
            Built in
            <br />
            <span className="text-outline">silence</span>
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-mute">
            Design and manufacturing under a single roof in Dhaka and
            Rotterdam. Each unit is hand-assembled, machine-verified and
            signed by its build team before it ships.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {["ISO 9001", "MIL-STD-810H", "IP68"].map((tag) => (
              <span
                key={tag}
                className="border border-line px-4 py-1.5 font-mono text-[10px] tracking-[0.25em] text-mute uppercase"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
        <ParallaxImage
          src="https://picsum.photos/seed/vanguard-eng1/1400/1000"
          alt="Engineering frame"
          ratio="aspect-[4/3]"
          className="order-1 md:order-2"
        />
      </div>

      <div className="mt-24 grid items-center gap-10 md:grid-cols-2 md:gap-16">
        <ParallaxImage
          src="https://picsum.photos/seed/vanguard-eng2/1400/1800"
          alt="Field deployment"
          ratio="aspect-[3/4]"
        />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 1, ease: EASE }}
        >
          <p className="font-mono text-[11px] tracking-[0.45em] text-amber uppercase">
            [ 04 — Deployment ]
          </p>
          <h2 className="mt-6 font-display text-6xl leading-[0.95] tracking-wide text-bone uppercase md:text-7xl">
            Ready at
            <br />
            <span className="text-amber">dawn</span>
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-mute">
            Field teams on standby in 12 time zones. Spares pre-positioned.
            Remote diagnostics in under a minute. When your window opens, we
            are already there.
          </p>
          <a
            href="#contact"
            data-hover
            className="group mt-8 inline-flex items-center gap-3 font-mono text-[11px] font-bold tracking-[0.3em] text-bone uppercase"
          >
            <span className="border-b border-amber pb-1 transition-colors group-hover:text-amber">
              Request deployment dossier
            </span>
            <span className="transition-transform duration-500 group-hover:translate-x-1.5">
              →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
