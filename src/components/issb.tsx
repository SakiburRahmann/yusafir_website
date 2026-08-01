'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1] as const;

const days = [
  {
    n: 'Day 1',
    title: 'Screening',
    desc: 'Word association, sentence completion, and story writing. The first gate — most candidates know it by the acronyms WAT and SCT.',
    tag: 'Psych',
  },
  {
    n: 'Day 2',
    title: 'Psychological',
    desc: 'Thematic apperception, self-description, and a battery of written psych tests read by trained assessors.',
    tag: 'Psych',
  },
  {
    n: 'Day 3',
    title: 'Group tasks',
    desc: 'Group planning exercise, group discussion, group obstacle race, command tasks, and the progressive group task.',
    tag: 'GTO',
  },
  {
    n: 'Day 4',
    title: 'Interview & IO',
    desc: 'The personal interview, military officer interview, and final board review. Your full picture is assembled.',
    tag: 'IO',
  },
];

export default function Issb() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['10%', '-10%']);

  return (
    <section id="issb" className="relative bg-ink py-28 md:py-40">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-8 md:mb-24">
          <div>
            <div className="mb-5 flex items-center gap-4">
              <span className="font-mono text-[11px] tracking-[0.5em] text-gold uppercase">
                [ 01 — The selection ]
              </span>
              <span className="h-px w-16 bg-bone/15" />
            </div>
            <h2 className="max-w-2xl font-display text-4xl font-black leading-[1.02] tracking-tight text-bone uppercase md:text-6xl">
              Four days that
              <br />
              <span className="font-serif italic font-medium text-gold normal-case">
                decide
              </span>{' '}
              the officer.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-mute">
            The Inter Services Selection Board — Mirpur and Bhatiary — assesses
            officer candidates over four days. No marksheet can predict it.
            Practice can.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div className="relative order-2 lg:order-1">
            <motion.div
              style={{ y }}
              className="scanlines absolute -inset-4 border border-bone/10 bg-coal"
            />
            <div className="relative grid gap-4">
              {days.map((day, i) => (
                <motion.div
                  key={day.n}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-10% 0px' }}
                  transition={{ duration: 0.8, ease: EASE, delay: i * 0.08 }}
                  className="group flex items-start gap-5 border border-bone/10 bg-coal p-5 transition-colors duration-500 hover:border-gold/40 md:p-6"
                >
                  <span className="font-display text-3xl font-black text-gold/50 transition-colors duration-500 group-hover:text-gold md:text-4xl">
                    {day.n.split(' ')[1]}
                  </span>
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="font-display text-lg font-bold tracking-tight text-bone uppercase md:text-xl">
                        {day.title}
                      </h3>
                      <span className="font-mono text-[9px] tracking-[0.3em] text-faint uppercase">
                        {day.tag}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-mute">
                      {day.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative aspect-[4/5] overflow-hidden">
              <motion.img
                src="https://picsum.photos/seed/agaami-issb/1000/1250"
                alt="ISSB preparation"
                className="military-img absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
              <div className="absolute right-4 bottom-4 left-4 border border-bone/10 bg-ink/70 p-5 backdrop-blur-sm">
                <p className="font-mono text-[9px] tracking-[0.35em] text-gold uppercase">
                  The unknown
                </p>
                <p className="mt-1 font-display text-xl font-bold text-bone uppercase">
                  The ISSB does not reward memorisation.
                </p>
                <p className="mt-2 text-sm leading-relaxed text-mute">
                  It reads personality, reaction, and leadership under pressure.
                  That is exactly what our AI trains.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
