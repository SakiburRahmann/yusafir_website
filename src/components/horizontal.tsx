"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const panels = [
  {
    seed: "vanguard-s1",
    w: 1200,
    h: 1500,
    title: "SENTINEL-9",
    cat: "Autonomous air platform",
    tall: true,
  },
  {
    seed: "vanguard-s2",
    w: 1600,
    h: 1000,
    title: "BULLFROG-X",
    cat: "Ground mobility system",
    tall: false,
  },
  {
    seed: "vanguard-s3",
    w: 1200,
    h: 1500,
    title: "HALO-NET",
    cat: "Domain awareness",
    tall: true,
  },
  {
    seed: "vanguard-s4",
    w: 1600,
    h: 1000,
    title: "TITAN-7",
    cat: "Command & control",
    tall: false,
  },
  {
    seed: "vanguard-s5",
    w: 1200,
    h: 1500,
    title: "GHOST-LINK",
    cat: "Secure communications",
    tall: true,
  },
];

export default function Horizontal() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-68%"]);

  return (
    <section ref={ref} className="relative h-[360vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="absolute top-12 left-0 z-10 w-full px-6 md:px-14">
          <p className="font-mono text-[11px] tracking-[0.45em] text-amber uppercase">
            [ 02 — Systems ]
          </p>
        </div>

        <motion.div style={{ x }} className="flex items-center gap-8 pl-6 md:pl-14">
          <div className="w-[70vw] shrink-0 pr-4 md:w-[38vw]">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: EASE }}
              className="font-display text-6xl leading-[0.9] tracking-wide text-bone uppercase md:text-8xl"
            >
              Platforms
              <span className="text-amber">.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: EASE, delay: 0.15 }}
              className="mt-6 max-w-sm text-base leading-relaxed text-mute"
            >
              Five classes of systems, one standard. Keep scrolling — the
              arsenal moves sideways.
            </motion.p>
            <p className="mt-8 font-mono text-[10px] tracking-[0.4em] text-faint uppercase">
              ↓ Continue scroll
            </p>
          </div>

          {panels.map((p, i) => (
            <Panel key={p.seed} {...p} index={i} />
          ))}

          <div className="w-[40vw] shrink-0 md:w-[22vw]">
            <a
              href="#contact"
              data-hover
              className="group flex size-36 items-center justify-center rounded-full border border-line transition-colors duration-500 hover:border-amber md:size-44"
            >
              <span className="text-center font-mono text-[10px] tracking-[0.3em] text-mute uppercase transition-colors group-hover:text-amber">
                Full catalog
                <br />
                <span className="text-lg">→</span>
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Panel({
  seed,
  w,
  h,
  title,
  cat,
  tall,
  index,
}: {
  seed: string;
  w: number;
  h: number;
  title: string;
  cat: string;
  tall: boolean;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);

  return (
    <motion.figure
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.9, ease: EASE, delay: index * 0.06 }}
      data-hover
      className={`group relative h-[52vh] w-[78vw] shrink-0 overflow-hidden sm:w-[55vw] md:w-[34vw] ${
        tall ? "md:h-[62vh]" : "md:h-[46vh]"
      }`}
    >
      <motion.div style={{ scale }} className="absolute inset-0">
        <img
          src={`https://picsum.photos/seed/${seed}/${w}/${h}`}
          alt={title}
          className="military-img h-full w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-transparent" />

      <span className="absolute top-4 left-4 size-4 border-t-2 border-l-2 border-amber/80" />
      <span className="absolute top-4 right-4 size-4 border-t-2 border-r-2 border-amber/80" />
      <span className="absolute bottom-4 left-4 size-4 border-b-2 border-l-2 border-amber/80" />
      <span className="absolute right-4 bottom-4 size-4 border-r-2 border-b-2 border-amber/80" />

      <figcaption className="absolute bottom-0 left-0 flex w-full items-end justify-between p-6">
        <div>
          <p className="font-mono text-[10px] tracking-[0.35em] text-bone/60 uppercase">
            SYS-{String(index + 1).padStart(2, "0")} — {cat}
          </p>
          <h3 className="mt-2 font-display text-4xl tracking-wide text-bone uppercase">
            {title}
          </h3>
          <div className="mt-3 flex items-center gap-3 font-mono text-[9px] tracking-[0.3em] text-bone/50 uppercase">
            <span className="text-amber">STATUS: DEPLOYED</span>
            <span>·</span>
            <span>MTBF 9,500H</span>
          </div>
        </div>
        <span className="flex size-11 items-center justify-center rounded-full border border-bone/25 font-mono text-bone opacity-0 backdrop-blur transition-all duration-500 group-hover:opacity-100 group-hover:border-amber group-hover:text-amber">
          ↗
        </span>
      </figcaption>
    </motion.figure>
  );
}
