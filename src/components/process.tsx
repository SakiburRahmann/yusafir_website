'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1] as const;

const steps = [
  {
    n: '01',
    title: 'Register online',
    desc: 'Create your account on the official portal. Fill the form, upload your photograph, signature, and certificates. Keep everything scanned and legible.',
    img: 'https://picsum.photos/seed/shadinota-p1/1000/700',
    dur: '15–20 minutes',
  },
  {
    n: '02',
    title: 'Admit card',
    desc: 'Download your admit card from the portal once it opens. It carries your roll number, centre, date and time. Print it — and bring original ID.',
    img: 'https://picsum.photos/seed/shadinota-p2/1000/700',
    dur: '7 days before exam',
  },
  {
    n: '03',
    title: 'Written exam',
    desc: 'Bangla, English, mathematics, general knowledge — written across one morning. Results are published on the portal within weeks.',
    img: 'https://picsum.photos/seed/shadinota-p3/1000/700',
    dur: '2–3 hours',
  },
  {
    n: '04',
    title: 'Physical & medical',
    desc: 'Running, push-ups, sit-ups, and a full medical board at a military hospital. Category A is the standard for most entries.',
    img: 'https://picsum.photos/seed/shadinota-p4/1000/700',
    dur: '1–2 days',
  },
  {
    n: '05',
    title: 'ISSB',
    desc: 'Four days in the hills of Bhatiary or Mirpur. Psychological tests, group tasks, interviews. They are not measuring you — they are meeting you.',
    img: 'https://picsum.photos/seed/shadinota-p5/1000/700',
    dur: '4 days',
  },
  {
    n: '06',
    title: 'Joining',
    desc: 'The merit list. Then BMA, BNA, or BAF Academy — and the beginning of everything that follows.',
    img: 'https://picsum.photos/seed/shadinota-p6/1000/700',
    dur: 'Your first day',
  },
];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end center'],
  });

  return (
    <section id="process" className="relative bg-ink py-28 md:py-40">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="mb-16 md:mb-24">
          <div className="mb-5 flex items-center gap-4">
            <span className="font-mono text-[11px] tracking-[0.5em] text-gold uppercase">
              [ 03 — The road in ]
            </span>
            <span className="h-px w-16 bg-bone/15" />
          </div>
          <h2 className="max-w-3xl font-display text-4xl font-black leading-[1.02] tracking-tight text-bone uppercase md:text-6xl">
            Six steps between you
            <br />
            <span className="font-serif italic font-medium text-gold normal-case">
              and the uniform.
            </span>
          </h2>
        </div>

        <div ref={ref} className="relative">
          <div className="absolute top-0 bottom-0 left-[7px] w-px bg-bone/10 md:left-1/2" />

          <div className="flex flex-col gap-16 md:gap-28">
            {steps.map((step, i) => {
              const left = i % 2 === 0;
              return (
                <div key={step.n} className="relative md:grid md:grid-cols-2 md:gap-20">
                  <div className="absolute top-1 left-[7px] -translate-x-1/2 md:left-1/2">
                    <div className="size-3.5 rotate-45 border border-gold bg-ink" />
                  </div>

                  <motion.div
                    initial={{ opacity: 0, x: left ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-15% 0px' }}
                    transition={{ duration: 0.9, ease: EASE }}
                    className={`hidden pl-16 md:block ${left ? '' : 'md:order-2'} ${
                      left ? 'md:pr-0' : ''
                    }`}
                  >
                    <div className="group relative aspect-[10/7] overflow-hidden">
                      <div
                        className="military-img absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                        style={{ backgroundImage: `url(${step.img})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
                      <span className="absolute bottom-4 left-5 font-mono text-[10px] tracking-[0.3em] text-bone/70 uppercase">
                        {step.dur}
                      </span>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: left ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-15% 0px' }}
                    transition={{ duration: 0.9, ease: EASE }}
                    className={`pl-14 md:pl-0 md:pt-6 ${left ? 'md:order-1 md:pr-6 md:text-right' : 'md:pl-6'} ${
                      left ? '' : ''
                    }`}
                  >
                    <span className="font-display text-6xl font-black text-bone/10 md:text-8xl">
                      {step.n}
                    </span>
                    <h3 className="mt-2 font-display text-2xl font-extrabold tracking-tight text-bone uppercase md:text-3xl">
                      {step.title}
                    </h3>
                    <p
                      className={`mt-3 max-w-md text-sm leading-relaxed text-mute ${
                        left ? 'md:ml-auto' : ''
                      }`}
                    >
                      {step.desc}
                    </p>
                    <span className="mt-4 inline-block font-mono text-[10px] tracking-[0.3em] text-gold uppercase">
                      {step.dur}
                    </span>
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
