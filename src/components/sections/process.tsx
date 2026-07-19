"use client";

import { motion } from "framer-motion";
import { Icon } from "@/components/icon";
import { PROCESS_STEPS, whatsappLink } from "@/lib/site-data";
import { SectionHeader } from "./services";

export function Process() {
  return (
    <section
      id="process"
      className="relative scroll-mt-24 overflow-hidden bg-surface-alt py-24 lg:py-32"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-dot-grid opacity-40" />
        <div className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-brand/30 to-transparent" />
      </div>

      <div className="container-wide">
        <SectionHeader
          eyebrow="The Process"
          title={
            <>
              Four steps from <span className="text-gradient-brand">inquiry to airport.</span>
            </>
          }
          subtitle="A structured, accountable pipeline that keeps you and your family informed at every milestone."
        />

        {/* Pipeline */}
        <div className="relative mt-16">
          {/* Horizontal connector — desktop */}
          <div className="pointer-events-none absolute left-0 right-0 top-[64px] hidden lg:block">
            <div className="relative mx-auto h-[2px] max-w-6xl bg-gradient-to-r from-brand/0 via-brand/30 to-brand/0">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="absolute inset-0 origin-left bg-gradient-to-r from-brand via-brand-accent to-brand-light"
              />
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {PROCESS_STEPS.map((step, i) => (
              <ProcessStep key={step.id} step={step} index={i} />
            ))}
          </div>
        </div>

        {/* CTA strip below */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-16 flex max-w-3xl flex-col items-center gap-3 rounded-3xl border border-brand/15 bg-white p-6 text-center shadow-[0_4px_24px_-12px_rgba(1,64,167,0.18)] sm:flex-row sm:justify-between sm:text-left"
        >
          <div>
            <h3 className="text-base font-semibold text-ink">
              Not sure which step you are on?
            </h3>
            <p className="mt-1 text-sm text-ink-soft">
              Book a free 30-minute consultation — we will map out your personalised timeline.
            </p>
          </div>
          <a
            href={whatsappLinkWithDefault()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-none items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-brand-deep"
          >
            Start step 01
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function ProcessStep({
  step,
  index,
}: {
  step: (typeof PROCESS_STEPS)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: index * 0.12 }}
      className="relative flex flex-col items-center text-center"
    >
      {/* Numbered node */}
      <div className="relative z-10 flex h-32 w-32 items-center justify-center">
        {/* outer ring */}
        <div className="absolute inset-0 rounded-full border border-dashed border-brand/20" />
        <div className="absolute inset-3 rounded-full bg-white shadow-[0_8px_24px_-8px_rgba(1,64,167,0.35)] ring-1 ring-brand/10" />

        {/* Big ghost number */}
        <span className="absolute -bottom-2 right-2 select-none text-5xl font-black leading-none text-brand/10">
          {String(step.id).padStart(2, "0")}
        </span>

        {/* icon */}
        <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-brand-deep text-white shadow-[0_10px_24px_-8px_rgba(1,64,167,0.55)]">
          <Icon name={step.icon} className="h-7 w-7" strokeWidth={1.6} />
        </div>
      </div>

      <span className="mt-4 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
        Step {String(step.id).padStart(2, "0")}
      </span>
      <h3 className="mt-2 text-lg font-bold tracking-tight text-ink">
        {step.title}
      </h3>
      <p className="mt-2 max-w-xs text-sm leading-relaxed text-ink-soft">
        {step.summary}
      </p>
    </motion.div>
  );
}

function whatsappLinkWithDefault() {
  return whatsappLink(
    "Hello Yusafir Bangladesh, I would like to start with a free consultation."
  );
}
