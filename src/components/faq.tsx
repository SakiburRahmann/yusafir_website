'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1] as const;

const faqs = [
  {
    q: 'What exactly does the AI evaluate?',
    a: 'Each response is read across several signals: stability of tone, structure, assertiveness, hesitation, and social orientation. Those are the same broad dimensions assessors observe. The output is feedback on patterns, never a guarantee of a result.',
  },
  {
    q: 'Is this a mock ISSB or actual practice?',
    a: 'Practice. The real board is conducted by the Bangladesh Armed Forces at Mirpur and Bhatiary. No platform can replace it — but rehearsal with feedback measurably reduces the unknown.',
  },
  {
    q: 'How are my responses stored?',
    a: 'Session data is used to build your personal progress profile and nothing else. You control the account, and the history is private to you.',
  },
  {
    q: 'Which ISSB stages can I practice?',
    a: 'Word association, sentence completion, group discussion, interview questioning, and leadership scenarios. Physical tests require a field — but the preparation guide covers the standards.',
  },
  {
    q: 'Do I need to type or can I speak?',
    a: 'Both. Written tracks take typed responses; discussion and interview tracks accept voice, and the engine evaluates the words and delivery it can read.',
  },
  {
    q: 'What does it cost?',
    a: 'The practice tracks are free to use. Nothing about this platform should be a barrier between you and the board.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-coal py-28 md:py-40">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:gap-24">
          <div>
            <div className="mb-5 flex items-center gap-4">
              <span className="font-mono text-[11px] tracking-[0.5em] text-gold uppercase">
                [ 05 — Questions ]
              </span>
              <span className="h-px w-16 bg-bone/15" />
            </div>
            <h2 className="font-display text-4xl font-black leading-[1.02] tracking-tight text-bone uppercase md:text-6xl">
              Straight
              <br />
              <span className="font-serif italic font-medium text-gold normal-case">
                answers.
              </span>
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-mute">
              No fine print games. If it is not answered here, the question is
              likely one the selection directorate should answer.
            </p>
          </div>

          <div className="border-t border-bone/10">
            {faqs.map((f, i) => (
              <div key={i} className="border-b border-bone/10">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  aria-expanded={open === i}
                >
                  <span className="font-display text-lg font-bold tracking-tight text-bone md:text-xl">
                    {f.q}
                  </span>
                  <span
                    className={`flex size-9 flex-shrink-0 items-center justify-center border border-bone/15 font-mono text-sm text-gold transition-transform duration-300 ${
                      open === i ? 'rotate-45' : ''
                    }`}
                  >
                    +
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl pb-6 text-sm leading-relaxed text-mute">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
