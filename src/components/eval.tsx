'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1] as const;

const traits = [
  { label: 'Responses per session', value: 48, width: '82%' },
  { label: 'Consistency', value: 71, width: '71%' },
  { label: 'Leadership signals', value: 64, width: '64%' },
  { label: 'Hesitation rate', value: 22, width: '22%' },
];

const notes = [
  'Strong, direct tone under time pressure — kept it in WAT.',
  'Stories repeat the same theme; vary the material.',
  'Group discussion: assertive, but lets pressure shorten answers.',
  'Sentence completion reveals stable family anchors — good.',
];

export default function Eval() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['8%', '-8%']);

  return (
    <section id="why" className="relative overflow-hidden bg-coal py-28 md:py-40">
      <div className="scanlines pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-24">
          <div>
            <div className="mb-5 flex items-center gap-4">
              <span className="font-mono text-[11px] tracking-[0.5em] text-gold uppercase">
                [ 04 — The evaluation ]
              </span>
              <span className="h-px w-16 bg-bone/15" />
            </div>
            <h2 className="font-display text-4xl font-black leading-[1.02] tracking-tight text-bone uppercase md:text-6xl">
              You answer.
              <br />
              <span className="font-serif italic font-medium text-gold normal-case">
                The engine
              </span>{' '}
              reads.
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-mute md:text-base">
              Every session is broken into signals the ISSB assessors themselves
              look for — stability, assertion, adaptability, and social
              adjustment. The AI watches them change across your sessions, and
              reports the trend, not just the moment.
            </p>

            <div className="mt-10 space-y-4">
              {notes.map((n, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-10% 0px' }}
                  transition={{ duration: 0.7, ease: EASE, delay: i * 0.08 }}
                  className="flex gap-3 border-l border-gold/40 pl-4"
                >
                  <span className="text-gold">▸</span>
                  <p className="text-sm leading-relaxed text-bone/70">{n}</p>
                </motion.div>
              ))}
            </div>

            <p className="mt-10 max-w-md border border-bone/10 bg-ink p-4 font-mono text-[10px] leading-relaxed tracking-[0.15em] text-faint uppercase">
              The engine never says who you are. It says what you keep showing.
              That is where training begins.
            </p>
          </div>

          <motion.div style={{ y }} className="relative">
            <div className="absolute -inset-4 border border-bone/10 bg-ink/60" />
            <div className="relative bg-ink p-7 md:p-10">
              <div className="flex items-center justify-between border-b border-bone/10 pb-5">
                <div>
                  <p className="font-mono text-[9px] tracking-[0.4em] text-gold uppercase">
                    Session report — candidate
                  </p>
                  <p className="mt-1 font-display text-2xl font-extrabold text-bone uppercase">
                    Progress profile
                  </p>
                </div>
                <span className="border border-bone/15 px-3 py-1.5 font-mono text-[9px] tracking-[0.3em] text-army uppercase">
                  Auto-generated
                </span>
              </div>

              <div className="space-y-6 pt-6">
                {traits.map((t, i) => (
                  <div key={t.label}>
                    <div className="mb-2 flex items-center justify-between">
                      <span className="font-mono text-[10px] tracking-[0.25em] text-mute uppercase">
                        {t.label}
                      </span>
                      <span className="font-display text-sm font-black text-bone">
                        {t.value}
                        <span className="text-gold">%</span>
                      </span>
                    </div>
                    <div className="h-1 w-full bg-pine">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: t.width }}
                        viewport={{ once: true, margin: '-10% 0px' }}
                        transition={{
                          duration: 1.2,
                          ease: EASE,
                          delay: 0.2 + i * 0.12,
                        }}
                        className={`h-full ${
                          t.value >= 70
                            ? 'bg-army'
                            : t.value >= 40
                            ? 'bg-gold'
                            : 'bg-blood'
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t border-bone/10 pt-6">
                <p className="font-mono text-[9px] tracking-[0.4em] text-faint uppercase">
                  Next session suggestion
                </p>
                <p className="mt-2 font-display text-lg font-bold text-bone">
                  Retake Group Discussion — pressure drills
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
