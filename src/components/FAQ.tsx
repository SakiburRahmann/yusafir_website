'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1] as const;

const faqs = [
  {
    q: 'What is the age limit for officer entry?',
    a: 'Most entries sit within 17–21 years, measured on the date of joining. Technical and specialist entries can extend to 23. Always check the current advertisement — the limit moves and it is absolute.',
  },
  {
    q: 'Can women apply for combat roles?',
    a: 'Yes. Female officers serve in the Army across artillery, signals, engineers and more; the Navy and Air Force recruit women into operational branches as well. Standards are equal, and so is the uniform.',
  },
  {
    q: 'What documents do I need for online registration?',
    a: 'A recent photo (300×300 px), a scanned signature (300×100 px), your SSC/HSC certificates and mark sheets, NID or birth certificate, and any quota certificates you hold. Scan them clearly — illegible uploads get rejected.',
  },
  {
    q: 'How does the ISSB work?',
    a: 'Four days, normally at Bhatiary or Mirpur. Psychological tests, group tasks, an interview, and physical testing. There is no fixed passing score — the board builds a picture of you. Be honest, be fit, be rested.',
  },
  {
    q: 'Can I wear glasses?',
    a: 'Ground-duty officers may qualify with glasses within limits (typically ±2.5D). Pilot and GD(P) entries require 6/6 unaided — no exceptions. Get your eyes checked before you apply, not after.',
  },
  {
    q: 'Can I apply to more than one service?',
    a: 'Yes — separate applications for Army, Navy and Air Force, each with its own fee and exam. Watch the schedules; written exams can land on the same day.',
  },
  {
    q: 'What are the quotas?',
    a: 'Children of freedom fighters hold reserved seats in most entries, alongside district and tribal quotas. Quota candidates still face the full selection process — the quota reserves places, not standards.',
  },
  {
    q: 'What is the portal when it goes live?',
    a: 'Recruitment is announced in national newspapers and on the official armed forces websites. The application window is short — register early, download your admit card early, arrive early.',
  },
];

function FaqItem({ q, a, open, onClick }: { q: string; a: string; open: boolean; onClick: () => void }) {
  return (
    <div className="border-b border-bone/10">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
        aria-expanded={open}
      >
        <span className="font-display text-lg font-bold tracking-tight text-bone md:text-xl">
          {q}
        </span>
        <span
          className={`flex size-9 flex-shrink-0 items-center justify-center border border-bone/15 font-mono text-sm text-gold transition-transform duration-300 ${
            open ? 'rotate-45' : ''
          }`}
        >
          +
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="overflow-hidden"
          >
            <p className="max-w-2xl pb-6 text-sm leading-relaxed text-mute">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

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
              Ask before
              <br />
              <span className="font-serif italic font-medium text-gold normal-case">
                you enlist.
              </span>
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-mute">
              The questions every applicant asks — answered plainly. If yours is
              missing, the selection directorate is the authority on all of it.
            </p>
          </div>

          <div className="border-t border-bone/10">
            {faqs.map((f, i) => (
              <FaqItem
                key={i}
                q={f.q}
                a={f.a}
                open={open === i}
                onClick={() => setOpen(open === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
