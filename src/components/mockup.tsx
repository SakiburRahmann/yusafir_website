"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useMotionTemplate,
} from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const avatars = [
  { ini: "AR", cls: "bg-[#5e6ad2]" },
  { ini: "MK", cls: "bg-[#8b5cf6]" },
  { ini: "JL", cls: "bg-[#22c55e]" },
  { ini: "SW", cls: "bg-[#f59e0b]" },
  { ini: "DT", cls: "bg-[#ef4444]" },
];

function BoardCard({
  title,
  tag,
  tagCls,
  progress,
  people,
  done,
}: {
  title: string;
  tag?: string;
  tagCls?: string;
  progress?: number;
  people?: number;
  done?: boolean;
}) {
  return (
    <div className="rounded-md border border-white/[0.06] bg-[#1c1c1f] p-3">
      <div className="flex items-start justify-between gap-2">
        <p className="text-[12px] leading-snug font-medium text-[#e4e4e7]">
          {title}
        </p>
        {done && (
          <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-[#22c55e]">
            <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
              <path
                d="M1.5 5.5L4 8L8.5 2.5"
                stroke="#0e0e0e"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        )}
      </div>
      {tag && (
        <span
          className={`mt-2 inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[10px] font-medium ${
            tagCls ?? "bg-white/[0.06] text-zinc-400"
          }`}
        >
          {tag}
        </span>
      )}
      {progress !== undefined && (
        <div className="mt-2.5 h-1 w-full overflow-hidden rounded-full bg-white/[0.08]">
          <div
            className="gradient-bg h-full rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
      {people !== undefined && (
        <div className="mt-2.5 flex -space-x-1.5">
          {Array.from({ length: people }).map((_, i) => (
            <span
              key={i}
              className={`flex size-4 items-center justify-center rounded-full text-[7px] font-semibold text-white ring-1 ring-[#1c1c1f] ${avatars[i % avatars.length].cls}`}
            >
              {avatars[i % avatars.length].ini}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

function Board() {
  return (
    <div className="grid grid-cols-4 gap-3 p-4">
      {[
        { name: "Backlog", dot: "bg-zinc-500", cards: [
          { title: "Collect feedback from users", tag: "Research", tagCls: "bg-zinc-500/20 text-zinc-300", people: 2 },
          { title: "Prioritize Q4 roadmap", tag: "Roadmap", tagCls: "bg-zinc-500/20 text-zinc-300", people: 3 },
        ]},
        { name: "Todo", dot: "bg-[#5e6ad2]", cards: [
          { title: "Design onboarding flow", tag: "Design", tagCls: "bg-[#5e6ad2]/20 text-[#9aa3e8]", progress: 40, people: 2 },
          { title: "Write API documentation", progress: 0, people: 1 },
        ]},
        { name: "In Progress", dot: "bg-[#8b5cf6]", cards: [
          { title: "Build issue tracker", tag: "Frontend", tagCls: "bg-[#8b5cf6]/20 text-[#c4b5fd]", progress: 72, people: 4 },
          { title: "Ship real-time sync", progress: 35, people: 3 },
        ]},
        { name: "Done", dot: "bg-[#22c55e]", cards: [
          { title: "Fix auth edge cases", done: true, people: 2 },
          { title: "Deploy analytics module", done: true, people: 2 },
        ]},
      ].map((col) => (
        <div key={col.name} className="rounded-lg bg-[#161618] p-2.5">
          <div className="mb-2.5 flex items-center gap-1.5 px-1">
            <span className={`size-1.5 rounded-full ${col.dot}`} />
            <span className="text-[10px] font-semibold tracking-wide text-zinc-400 uppercase">
              {col.name}
            </span>
            <span className="ml-auto rounded-full bg-white/[0.06] px-1.5 text-[9px] font-medium text-zinc-500">
              {col.cards.length}
            </span>
          </div>
          <div className="flex flex-col gap-2">
            {col.cards.map((card, i) => (
              <BoardCard key={i} {...card} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Mockup() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rX = useSpring(my, { stiffness: 120, damping: 18 });
  const rY = useSpring(mx, { stiffness: 120, damping: 18 });

  const onMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    mx.set(px * 10);
    my.set(-py * 8);
  };

  const onMouseLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <div
      className="relative mx-auto w-full max-w-5xl [perspective:1600px]"
      style={{ perspective: 1600 }}
    >
      <motion.div
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -inset-x-24 -top-24 -bottom-16 -z-10"
      >
        <div className="animate-spin-slow absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,#5e6ad2_120deg,#8b5cf6_200deg,transparent_280deg)] opacity-25 blur-[90px]" />
        <div className="animate-pulse-soft absolute inset-0 m-auto size-3/4 rounded-full bg-[#5e6ad2]/25 blur-[120px]" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: EASE, delay: 0.5 }}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        ref={ref}
        style={{ rotateX: rX, rotateY: rY, transformStyle: "preserve-3d" }}
        className="relative rounded-2xl"
      >
        <div className="gradient-border absolute -inset-px rounded-2xl opacity-70" />

        <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#131315] shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9)]">
          <div className="flex items-center gap-2 border-b border-white/[0.06] bg-[#18181b] px-4 py-3">
            <span className="size-2.5 rounded-full bg-[#ff5f57]" />
            <span className="size-2.5 rounded-full bg-[#febc2e]" />
            <span className="size-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-4 rounded-md bg-white/[0.05] px-16 py-1 text-[10px] font-medium text-zinc-500">
              linear.app
            </span>
            <span className="ml-auto flex items-center gap-1.5 rounded-md bg-gradient-to-r from-[#5e6ad2] to-[#8b5cf6] px-2 py-0.5 text-[9px] font-semibold text-white">
              + New issue
            </span>
          </div>

          <div className="flex">
            <aside className="hidden w-40 shrink-0 flex-col gap-1 border-r border-white/[0.06] bg-[#101012] p-3 md:flex">
              {[
                { icon: "◆", label: "Inbox", active: false },
                { icon: "▣", label: "Issues", active: true },
                { icon: "◉", label: "Cycles", active: false },
                { icon: "▲", label: "Roadmap", active: false },
                { icon: "✧", label: "Views", active: false },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`flex items-center gap-2.5 rounded-md px-2.5 py-1.5 text-[11px] ${
                    item.active
                      ? "bg-white/[0.08] font-medium text-white"
                      : "text-zinc-500"
                  }`}
                >
                  <span className="text-[9px]">{item.icon}</span>
                  {item.label}
                </div>
              ))}
              <div className="mt-4 border-t border-white/[0.06] pt-3">
                <p className="px-2.5 pb-2 text-[9px] font-semibold tracking-wider text-zinc-600 uppercase">
                  Projects
                </p>
                {["Q3 Release", "Mobile App"].map((p) => (
                  <div
                    key={p}
                    className="flex items-center gap-2.5 rounded-md px-2.5 py-1.5 text-[11px] text-zinc-500"
                  >
                    <span className="size-2 rounded-[3px] bg-[#5e6ad2]" />
                    {p}
                  </div>
                ))}
              </div>
            </aside>
            <Board />
          </div>
        </div>

        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-8 -top-8 hidden rounded-xl border border-white/10 bg-[#1c1c1f]/90 p-4 shadow-2xl backdrop-blur-xl lg:block"
          style={{ transform: "translateZ(60px)" }}
        >
          <p className="text-[10px] font-semibold tracking-wide text-zinc-500 uppercase">
            Sprint 42
          </p>
          <p className="mt-1.5 font-mono text-2xl font-medium text-white">
            92%
          </p>
          <div className="mt-2 h-1 w-32 overflow-hidden rounded-full bg-white/[0.08]">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-[#5e6ad2] to-[#8b5cf6]"
              initial={{ width: "0%" }}
              animate={{ width: "92%" }}
              transition={{ duration: 2, ease: EASE, delay: 1.2 }}
            />
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 9, 0] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-8 -left-8 hidden items-center gap-3 rounded-xl border border-white/10 bg-[#1c1c1f]/90 p-3.5 shadow-2xl backdrop-blur-xl lg:flex"
          style={{ transform: "translateZ(50px)" }}
        >
          <span className="flex size-9 items-center justify-center rounded-full bg-[#22c55e]/15 text-sm">
            ✅
          </span>
          <div>
            <p className="text-[11px] font-semibold text-white">Shipped today</p>
            <p className="text-[10px] text-zinc-500">3 issues closed · 2 reviews</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
