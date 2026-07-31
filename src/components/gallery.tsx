'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1] as const;

const col1 = ['army', 'navy', 'air', 'army2', 'navy2', 'air2'];
const col2 = ['navy3', 'army3', 'air3', 'navy4', 'army4', 'air4'];

function Column({ seeds }: { seeds: string[] }) {
  return (
    <div className="flex flex-col gap-5">
      {seeds.map((seed) => (
        <div key={seed} className="relative aspect-[3/4] overflow-hidden">
          <div
            className="military-img absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-110"
            style={{ backgroundImage: `url(https://picsum.photos/seed/shadinota-${seed}/800/1000)` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 hover:opacity-100" />
        </div>
      ))}
    </div>
  );
}

export default function Gallery() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], ['4%', '-4%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['-4%', '4%']);

  return (
    <section ref={ref} className="relative bg-ink py-28 md:py-40">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-8 md:mb-20">
          <div>
            <div className="mb-5 flex items-center gap-4">
              <span className="font-mono text-[11px] tracking-[0.5em] text-gold uppercase">
                [ Life in service ]
              </span>
              <span className="h-px w-16 bg-bone/15" />
            </div>
            <h2 className="font-display text-4xl font-black leading-[1.02] tracking-tight text-bone uppercase md:text-6xl">
              The work is hard.
              <br />
              <span className="font-serif italic font-medium text-gold normal-case">
                So is everything worth it.
              </span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-mute">
            Parades before dawn, mountain trails, sea watches, and sky. A life
            of structure and of people who become family.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          <motion.div style={{ y: y1 }} className="col-span-1">
            <Column seeds={col1} />
          </motion.div>
          <motion.div style={{ y: y2 }} className="col-span-1 hidden md:block">
            <Column seeds={col2} />
          </motion.div>
          <motion.div style={{ y: y2 }} className="col-span-1">
            <Column seeds={col2} />
          </motion.div>
          <motion.div style={{ y: y1 }} className="col-span-1 hidden md:block">
            <Column seeds={col1} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
