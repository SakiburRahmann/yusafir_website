'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1] as const;

const modules = [
  {
    n: '01',
    title: 'Word Association',
    tag: 'WAT',
    desc: 'Sixty words, sixty seconds each. Write your first response to "success", "danger", "mother", "war". The AI reads tone, speed, and stability.',
    type: 'Timed · Instant',
  },
  {
    n: '02',
    title: 'Sentence Completion',
    tag: 'SCT',
    desc: 'Half-formed sentences about family, work, and fear. Finish them the way you really think — then let the AI show you what you revealed.',
    type: 'Timed · Evaluated',
  },
  {
    n: '03',
    title: 'Group Discussion',
    tag: 'GD',
    desc: 'Practice articulating a position under pressure. The AI scores structure, assertion, and how you react when someone disagrees.',
    type: 'Voice · Simulated',
  },
  {
    n: '04',
    title: 'Interview',
    tag: 'IO',
    desc: 'Answer the questions that actually come up — family, education, motivation, current affairs. Get feedback on clarity and presence.',
    type: 'Voice · Evaluated',
  },
  {
    n: '05',
    title: 'Leadership Scenarios',
    tag: 'GTO',
    desc: 'Group planning situations from real terrain. Make the plan, defend it, and see how a board would weigh your decisions.',
    type: 'Scenario · Scored',
  },
  {
    n: '06',
    title: 'Progress Report',
    tag: 'AI',
    desc: 'Every session feeds one living profile — your strengths, your patterns, what to fix before the real four days.',
    type: 'Continuous',
  },
];

export default function Practice() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);

  return (
    <section id="practice" className="relative overflow-hidden bg-coal py-28 md:py-40">
      <div
        className="grid-lines pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            'radial-gradient(circle at 15% 30%, rgba(201,162,75,0.05), transparent 45%)',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-8 md:mb-24">
          <div>
            <div className="mb-5 flex items-center gap-4">
              <span className="font-mono text-[11px] tracking-[0.5em] text-gold uppercase">
                [ 02 — Practice ]
              </span>
              <span className="h-px w-16 bg-bone/15" />
            </div>
            <h2 className="max-w-2xl font-display text-4xl font-black leading-[1.02] tracking-tight text-bone uppercase md:text-6xl">
              Every test.
              <br />
              <span className="font-serif italic font-medium text-gold normal-case">
                Answered,
              </span>{' '}
              graded, improved.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-mute">
            Six practice tracks, one AI evaluator. Nothing here is scored by a
            person — every response is read by the engine and returned with
            feedback you can act on.
          </p>
        </div>

        <motion.div
          style={{ y }}
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {modules.map((m, i) => (
            <motion.article
              key={m.n}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8% 0px' }}
              transition={{ duration: 0.9, ease: EASE, delay: (i % 3) * 0.08 }}
              className="group relative border border-bone/10 bg-ink p-7 transition-colors duration-500 hover:border-gold/40 md:p-9"
            >
              <div className="flex items-start justify-between">
                <span className="font-display text-4xl font-black text-bone/10 transition-colors duration-500 group-hover:text-gold/40">
                  {m.n}
                </span>
                <span className="border border-bone/15 px-3 py-1 font-mono text-[9px] tracking-[0.35em] text-gold uppercase">
                  {m.tag}
                </span>
              </div>
              <h3 className="mt-6 font-display text-2xl font-extrabold tracking-tight text-bone uppercase">
                {m.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-mute">{m.desc}</p>
              <div className="mt-6 flex items-center justify-between border-t border-bone/10 pt-4">
                <span className="font-mono text-[9px] tracking-[0.3em] text-faint uppercase">
                  {m.type}
                </span>
                <span className="font-mono text-sm text-gold transition-transform duration-500 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
