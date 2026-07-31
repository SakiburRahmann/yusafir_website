"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

function Frame({
  seed,
  w,
  h,
  label,
  title,
  meta,
  reverse,
}: {
  seed: string;
  w: number;
  h: number;
  label: string;
  title: string;
  meta: string;
  reverse?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.3, 1.05, 1.3]);

  return (
    <div
      ref={ref}
      className={`grid items-center gap-8 md:grid-cols-2 md:gap-14 ${
        reverse ? "" : ""
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.9, ease: EASE }}
        className={reverse ? "order-2 md:order-2" : "order-2 md:order-1"}
      >
        <p className="font-mono text-[11px] tracking-[0.45em] text-amber uppercase">
          {label}
        </p>
        <h2 className="mt-5 font-display text-6xl leading-[0.95] tracking-wide text-bone uppercase md:text-7xl">
          {title}
        </h2>
        <p className="mt-6 max-w-md text-base leading-relaxed text-mute">
          {meta}
        </p>
        <div className="mt-8 flex items-center gap-4 font-mono text-[10px] tracking-[0.3em] text-faint uppercase">
          <span className="text-amber">● IN PRODUCTION</span>
          <span>·</span>
          <span>Q4 2026 DELIVERY</span>
        </div>
      </motion.div>

      <div
        className={`relative ${reverse ? "order-1 md:order-2" : "order-1 md:order-1"}`}
      >
        <div className="cut-corner scanlines relative aspect-[4/3] overflow-hidden border border-line bg-panel">
          <motion.img
            src={`https://picsum.photos/seed/${seed}/${w}/${h}`}
            alt={title}
            style={{ y, scale: imgScale }}
            className="military-img absolute inset-0 h-full w-full object-cover"
          />
          <span className="absolute top-4 left-4 size-5 border-t-2 border-l-2 border-amber" />
          <span className="absolute top-4 right-4 size-5 border-t-2 border-r-2 border-amber" />
          <span className="absolute bottom-4 left-4 size-5 border-b-2 border-l-2 border-amber" />
          <span className="absolute right-4 bottom-4 size-5 border-r-2 border-b-2 border-amber" />
          <span className="absolute bottom-4 left-5 font-mono text-[9px] tracking-[0.3em] text-bone/70 uppercase">
            CLASS: RESTRICTED
          </span>
        </div>
        <div className="hazard-thin absolute -bottom-4 -right-4 hidden h-16 w-16 md:block" />
      </div>
    </div>
  );
}

export default function Systems() {
  return (
    <section className="relative mx-auto max-w-[1400px] px-6 py-32 md:px-10 md:py-40">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: EASE }}
        className="mb-20 flex items-center gap-4"
      >
        <span className="font-mono text-[11px] tracking-[0.45em] text-amber uppercase">
          [ 03 — Systems ]
        </span>
        <span className="h-px flex-1 bg-line" />
        <span className="hidden font-mono text-[10px] tracking-[0.3em] text-faint uppercase md:inline">
          PRODUCTION LINES 01–03
        </span>
      </motion.div>

      <div className="flex flex-col gap-28 md:gap-40">
        <Frame
          seed="vanguard-sys1"
          w={1400}
          h={1000}
          label="SYS-01 — AERIAL"
          title={<>Sentinel-9</>}
          meta="Autonomous fixed-wing platform. 14-hour endurance, multi-spectral sensor swarm and zero-operator flight profiles. The long arm of a persistent overwatch doctrine."
        />
        <Frame
          seed="vanguard-sys2"
          w={1400}
          h={1000}
          label="SYS-02 — GROUND"
          title={<>Bullfrog-X</>}
          meta="Unmanned ground mobility system rated for contested terrain. Silent electric drive, modular payload bay and self-recovery beyond line of sight."
          reverse
        />
        <Frame
          seed="vanguard-sys3"
          w={1400}
          h={1000}
          label="SYS-03 — NETWORK"
          title={<>Ghost-Link</>}
          meta="Hardened mesh communications. End-to-end encryption, 60-second redeploy and resilience tested against persistent electronic attack."
        />
      </div>
    </section>
  );
}
