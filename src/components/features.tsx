"use client";

import { useRef, type ReactNode } from "react";
import { motion } from "framer-motion";
import {
  ListTodo,
  Inbox,
  Map,
  Megaphone,
  Columns3,
  BarChart3,
  Puzzle,
  Zap,
  type LucideIcon,
} from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

function SpotlightCard({
  icon: Icon,
  color,
  title,
  desc,
}: {
  icon: LucideIcon;
  color: string;
  title: string;
  desc: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--sx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--sy", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      className="spotlight-card group relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#131315] p-7 transition-all duration-500 hover:border-white/[0.16] hover:-translate-y-1"
    >
      <span
        className="inline-flex size-10 items-center justify-center rounded-lg"
        style={{ background: `${color}1a`, color }}
      >
        <Icon size={19} strokeWidth={2.2} />
      </span>
      <h3 className="mt-5 text-[17px] font-semibold text-white">{title}</h3>
      <p className="mt-2 text-[14px] leading-relaxed text-sec">{desc}</p>
    </div>
  );
}

const features: {
  icon: LucideIcon;
  color: string;
  title: string;
  desc: string;
}[] = [
  {
    icon: ListTodo,
    color: "#5e6ad2",
    title: "Issues & Cycles",
    desc: "Planned sprints and structured workflows to keep your team moving in rhythm, week after week.",
  },
  {
    icon: Inbox,
    color: "#8b5cf6",
    title: "Inbox",
    desc: "A triage hub for all feedback, mentions and updates — so nothing important ever slips through.",
  },
  {
    icon: Map,
    color: "#22c55e",
    title: "Roadmaps",
    desc: "Visualize strategy and progress with beautiful project roadmaps your whole company understands.",
  },
  {
    icon: Megaphone,
    color: "#f59e0b",
    title: "Project updates",
    desc: "Share crisp async updates with stakeholders. One source of truth for what changed and why.",
  },
  {
    icon: Columns3,
    color: "#06b6d4",
    title: "Views",
    desc: "Boards, lists, timelines and more. Custom views for every role — without slowing the team down.",
  },
  {
    icon: BarChart3,
    color: "#ef4444",
    title: "Analytics",
    desc: "Insights on cycle time, throughput and workload. Real-time data your team actually uses.",
  },
  {
    icon: Puzzle,
    color: "#ec4899",
    title: "Integrations",
    desc: "GitHub, Slack, Figma, Sentry and 40+ tools connect natively — no duct tape required.",
  },
  {
    icon: Zap,
    color: "#a3e635",
    title: "Workflow automation",
    desc: "Automate repetitive tasks with rules and batch actions, so focus stays on the product.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative mx-auto max-w-[1280px] px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-2xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.9, ease: EASE }}
          className="text-4xl font-semibold tracking-[-0.02em] text-white md:text-5xl"
        >
          More than just a{" "}
          <span className="gradient-text">faster board</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.12 }}
          className="mt-5 text-lg leading-relaxed text-sec"
        >
          Linear is a beautiful, blazing-fast workflow tool that turns ideas
          into shipped products.
        </motion.p>
      </div>

      <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8% 0px" }}
            transition={{ duration: 0.8, ease: EASE, delay: (i % 4) * 0.09 }}
          >
            <SpotlightCard {...f} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
