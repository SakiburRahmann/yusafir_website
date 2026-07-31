const logos = [
  { name: "Vercel", icon: "▲" },
  { name: "Raycast", icon: "⌘" },
  { name: "Ramp", icon: "◐" },
  { name: "Retool", icon: "❑" },
  { name: "Framer", icon: "✦" },
  { name: "Notion", icon: "▦" },
  { name: "Intercom", icon: "◍" },
  { name: "Webflow", icon: "⌗" },
  { name: "Warp", icon: "➤" },
  { name: "Dub", icon: "⊕" },
  { name: "Resend", icon: "✉" },
  { name: "Loops", icon: "∞" },
];

export default function Logos() {
  return (
    <section className="border-y border-white/[0.06] bg-[#101010] py-10">
      <p className="mb-8 text-center font-mono text-[13px] font-medium tracking-tight text-sec">
        Trusted by high-velocity teams around the world
      </p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
        <div className="animate-marquee flex w-max items-center">
          {[0, 1].map((half) => (
            <div key={half} className="flex items-center">
              {logos.map((logo) => (
                <span
                  key={`${half}-${logo.name}`}
                  className="mx-10 flex items-center gap-2.5 text-lg font-semibold whitespace-nowrap text-zinc-500 transition-colors hover:text-zinc-200"
                >
                  <span className="text-xl">{logo.icon}</span>
                  {logo.name}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
