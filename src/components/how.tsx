'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1] as const;

const steps = [
  {
    n: '01',
    title: 'Practice',
    desc: 'Pick a track — WAT, SCT, group discussion, or interview. Answer the way you would on the real board.',
    detail: '5–30 minutes per session',
  },
  {
    n: '02',
    title: 'AI evaluates',
    desc: 'The engine reads every response across tone, structure, hesitation, and substance.',
    detail: 'Instant, session by session',
  },
  {
    n: '03',
    title: 'See your profile',
    desc: 'A clear view of your patterns — what reads strong, what reads rehearsed, what needs work.',
    detail: 'Updated after every session',
  },
  {
    n: '04',
    title: 'Improve & repeat',
    desc: 'Target the weak points, retrain, and watch your own curve move before the real four days.',
    detail: 'Your pace, your schedule',
  },
];

export default function How() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="how" className="relative bg-ink py-28 md:py-40">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="mb-16 md:mb-24">
          <div className="mb-5 flex items-center gap-4">
            <span className="font-mono text-[11px] tracking-[0.5em] text-gold uppercase">
              [ 03 — How it works ]
            </span>
            <span className="h-px w-16 bg-bone/15" />
          </div>
          <h2 className="max-w-3xl font-display text-4xl font-black leading-[1.02] tracking-tight text-bone uppercase md:text-6xl">
            Practice. Be graded.
            <br />
            <span className="font-serif italic font-medium text-gold normal-case">
              Then go again.
            </span>
          </h2>
        </div>

        <div ref={ref} className="relative">
          <div className="absolute top-0 bottom-0 left-[7px] w-px bg-bone/10 md:left-1/2">
            <motion.div
              style={{ scaleY: lineScale }}
              className="h-full w-full origin-top bg-gradient-to-b from-gold to-army"
            />
          </div>

          <div className="flex flex-col gap-14 md:gap-20">
            {steps.map((s, i) => {
              const left = i % 2 === 0;
              return (
                <div
                  key={s.n}
                  className="relative md:grid md:grid-cols-2 md:gap-24"
                >
                  <div className="absolute top-0 left-[7px] -translate-x-1/2 md:left-1/2">
                    <div className="size-4 rotate-45 border border-gold bg-ink" />
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-15% 0px' }}
                    transition={{ duration: 0.9, ease: EASE }}
                    className={`pl-12 md:pl-0 ${
                      left ? 'md:order-1 md:pr-10 md:text-right' : 'md:order-2 md:pl-10'
                    }`}
                  >
                    <div
                      className={`mb-3 flex flex-wrap items-center gap-x-4 gap-y-2 ${
                        left ? 'md:justify-end' : ''
                      }`}
                    >
                      <span className="font-display text-6xl font-black text-bone/10 md:text-8xl">
                        {s.n}
                      </span>
                      <span className="font-mono text-[9px] tracking-[0.3em] text-gold uppercase">
                        {s.detail}
                      </span>
                    </div>
                    <h3 className="font-display text-3xl font-extrabold tracking-tight text-bone uppercase">
                      {s.title}
                    </h3>
                    <p
                      className={`mt-3 max-w-md text-sm leading-relaxed text-mute ${
                        left ? 'md:ml-auto' : ''
                      }`}
                    >
                      {s.desc}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
