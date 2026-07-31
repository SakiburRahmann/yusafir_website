"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useSpring, useMotionValueEvent } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const steps = [
  {
    n: "01",
    title: "Collect",
    desc: "Feedback from customers, teammates and support flows into Inbox automatically. Nothing gets lost, everything gets seen.",
    tag: "Inbox triage",
  },
  {
    n: "02",
    title: "Plan",
    desc: "Prioritize with estimates and roadmap views. Cycles keep the team committed to a sustainable, predictable pace.",
    tag: "Cycles & roadmaps",
  },
  {
    n: "03",
    title: "Build",
    desc: "Track progress in real time. Views, integrations and automations keep the work flowing without ceremony.",
    tag: "Views & automation",
  },
  {
    n: "04",
    title: "Ship",
    desc: "Announce updates, measure impact and loop learnings back into planning. Momentum becomes a habit.",
    tag: "Updates & analytics",
  },
];

export default function Method() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "end 0.55"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });
  const [active, setActive] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(Math.min(3, Math.floor(v * 4.05)));
  });

  return (
    <section
      id="method"
      ref={ref}
      className="relative border-y border-white/[0.06] bg-[#101010]"
    >
      <div className="mx-auto grid max-w-[1280px] gap-16 px-6 py-28 md:grid-cols-2 md:px-10 md:py-40">
        <div className="md:sticky md:top-32 md:self-start">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE }}
            className="font-mono text-[13px] font-medium text-[#8b5cf6]"
          >
            The workflow
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
            className="mt-4 text-4xl font-semibold tracking-[-0.02em] text-white md:text-5xl"
          >
            One tool for the
            <br />
            entire product{" "}
            <span className="gradient-text">lifecycle</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
            className="mt-6 max-w-md text-lg leading-relaxed text-sec"
          >
            From first customer call to shipped feature, Linear keeps your
            team in one focused workflow — no context switching, no ceremony.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.35 }}
            className="mt-9"
          >
            <a
              href="#cta"
              className="inline-flex items-center gap-2 text-[15px] font-semibold text-white"
            >
              See how it works
              <span className="flex size-6 items-center justify-center rounded-full border border-white/20 text-xs transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </motion.div>
        </div>

        <div className="relative">
          <div className="absolute top-0 bottom-0 left-[5px] w-px bg-white/[0.08]" />
          <motion.div
            style={{ scaleY }}
            className="absolute top-0 bottom-0 left-[5px] w-px origin-top bg-gradient-to-b from-[#5e6ad2] to-[#8b5cf6]"
          />
          <div className="flex flex-col gap-16">
            {steps.map((step, i) => {
              const isActive = active === i;
              return (
                <motion.div
                  key={step.n}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-15% 0px" }}
                  transition={{ duration: 0.8, ease: EASE, delay: 0.08 * i }}
                  className="relative pl-12"
                >
                  <motion.span
                    animate={{
                      scale: isActive ? 1.35 : 1,
                      boxShadow: isActive
                        ? "0 0 20px rgba(139,92,246,0.8)"
                        : "0 0 0px rgba(139,92,246,0)",
                    }}
                    transition={{ duration: 0.4 }}
                    className="absolute top-1.5 left-0 flex size-[11px] items-center justify-center rounded-full border-2 border-[#8b5cf6] bg-[#101010]"
                  />
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[13px] font-medium text-zinc-500">
                      {step.n}
                    </span>
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-[11px] font-medium transition-colors ${
                        isActive
                          ? "bg-gradient-to-r from-[#5e6ad2] to-[#8b5cf6] text-white"
                          : "bg-white/[0.06] text-zinc-400"
                      }`}
                    >
                      {step.tag}
                    </span>
                  </div>
                  <h3 className="mt-3 text-2xl font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 max-w-md text-[15px] leading-relaxed text-sec">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
