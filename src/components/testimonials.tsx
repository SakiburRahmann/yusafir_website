const quotes = [
  {
    text: "Linear changed the way our entire company works. We ship twice as fast with half the meetings.",
    name: "Karri Saarinen",
    role: "CEO & Co-founder, Linear",
  },
  {
    text: "The only tool we genuinely miss when we use anything else. It's fast, focused and beautiful.",
    name: "Guillermo Rauch",
    role: "CEO, Vercel",
  },
  {
    text: "Switching to Linear cut our issue clutter by 70%. It's the calmest our team has ever been.",
    name: "Tom Blomfield",
    role: "Founder, Monzo",
  },
  {
    text: "We replaced three tools with one. Linear is the backbone of how we build products.",
    name: "Amy Chen",
    role: "VP Engineering, Ramp",
  },
  {
    text: "The keyboard-driven workflow is unmatched. Our engineers refuse to go back.",
    name: "Pete Hunt",
    role: "CTO, Warp",
  },
  {
    text: "It just feels inevitable. Linear is what software should be.",
    name: "Sam Altman",
    role: "CEO, OpenAI",
  },
];

export default function Testimonials() {
  const row = [...quotes, ...quotes];
  return (
    <section className="overflow-hidden border-t border-white/[0.06] bg-[#101010] py-28">
      <div className="mx-auto mb-14 max-w-2xl px-6 text-center">
        <h2 className="text-4xl font-semibold tracking-[-0.02em] text-white md:text-5xl">
          Loved by{" "}
          <span className="gradient-text">high-velocity teams</span>
        </h2>
      </div>

      <div className="relative space-y-6 [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
        <div className="animate-marquee flex w-max gap-6">
          {[0, 1].map((half) => (
            <div key={half} className="flex gap-6">
              {quotes.map((q, i) => (
                <figure
                  key={`${half}-${i}`}
                  className="w-[380px] shrink-0 rounded-xl border border-white/[0.08] bg-[#141416] p-7"
                >
                  <div className="mb-4 flex gap-1 text-sm text-[#f59e0b]">
                    {"★★★★★".split("").map((s, j) => (
                      <span key={j}>{s}</span>
                    ))}
                  </div>
                  <blockquote className="text-[15px] leading-relaxed text-zinc-200">
                    “{q.text}”
                  </blockquote>
                  <figcaption className="mt-5 flex items-center gap-3">
                    <span className="flex size-9 items-center justify-center rounded-full bg-gradient-to-br from-[#5e6ad2] to-[#8b5cf6] text-[11px] font-bold text-white">
                      {q.name
                        .split(" ")
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join("")}
                    </span>
                    <div>
                      <p className="text-[13px] font-semibold text-white">
                        {q.name}
                      </p>
                      <p className="text-[12px] text-zinc-500">{q.role}</p>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
