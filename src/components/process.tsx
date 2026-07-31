"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const steps = [
  {
    n: "01",
    title: "Listen",
    desc: "We start with two weeks of discovery — your market, your audience, your ambition. No templates, no assumptions.",
  },
  {
    n: "02",
    title: "Distill",
    desc: "Strategy becomes a single, brutal point of view. One message, one visual idea, one direction to believe in.",
  },
  {
    n: "03",
    title: "Craft",
    desc: "Design and engineering in parallel. Weekly reviews, living prototypes, and a relentless pursuit of the last 1%.",
  },
  {
    n: "04",
    title: "Launch & Grow",
    desc: "We ship fast, measure honestly and stay on retainer. Great work is a beginning, not a deliverable.",
  },
];

export default function Process() {
  return (
    <section className="relative border-t border-line bg-coal">
      <div className="mx-auto max-w-[1600px] px-6 py-32 md:px-10 md:py-44">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mb-16 flex items-center gap-4"
        >
          <span className="font-mono text-[11px] tracking-[0.35em] text-gold uppercase">
            [ 04 — Process ]
          </span>
          <span className="h-px w-16 bg-line" />
        </motion.div>

        <div className="grid gap-x-10 gap-y-16 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.8, ease: EASE, delay: i * 0.1 }}
              className="relative border-t border-line pt-10"
            >
              <span className="absolute -top-px left-0 h-px w-16 bg-gold" />
              <div className="flex items-baseline justify-between">
                <span className="font-display text-4xl text-outline">{step.n}</span>
                <span className="font-mono text-[10px] tracking-[0.3em] text-faint uppercase">
                  Phase {step.n}
                </span>
              </div>
              <h3 className="mt-6 font-display text-2xl text-bone">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mute">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
