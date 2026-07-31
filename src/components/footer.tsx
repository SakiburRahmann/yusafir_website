export default function Footer() {
  const columns: [string, string[]][] = [
    ["Product", ["Features", "Method", "Pricing", "Changelog", "Integrations", "Download"]],
    ["Company", ["About", "Careers", "Blog", "Press", "Brand", "Contact"]],
    ["Resources", ["Docs", "Community", "Guides", "Status", "Security", "Templates"]],
    ["Legal", ["Privacy", "Terms", "DPA", "Subprocessors", "Cookies"]],
  ];

  return (
    <footer className="border-t border-white/[0.06] bg-black">
      <div className="mx-auto max-w-[1280px] px-6 pt-20 pb-10 md:px-10">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <span className="flex size-7 items-center justify-center rounded-[7px] bg-gradient-to-br from-[#5e6ad2] to-[#8b5cf6] text-[15px] font-bold text-white">
                L
              </span>
              <span className="text-[17px] font-semibold text-white">
                Linear
              </span>
            </a>
            <p className="mt-5 max-w-xs text-[14px] leading-relaxed text-sec">
              Linear is a purpose-built tool for planning and building
              products. Focus on what matters most — shipping.
            </p>
            <div className="mt-6 flex gap-3">
              {["X", "𝕏", "in", "GH"].map((s, i) => (
                <a
                  key={i}
                  href="#top"
                  className="flex size-9 items-center justify-center rounded-lg border border-white/10 text-[13px] font-semibold text-zinc-400 transition-colors hover:border-white/30 hover:text-white"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {columns.map(([title, links]) => (
            <div key={title}>
              <p className="text-[13px] font-semibold text-white">{title}</p>
              <ul className="mt-4 flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#top"
                      className="text-[13px] text-sec transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row">
          <p className="text-[13px] text-zinc-600">
            © 2026 Linear, Inc. All rights reserved.
          </p>
          <p className="font-mono text-[12px] text-zinc-600">
            Crafted with <span className="text-[#5e6ad2]">♥</span> in San
            Francisco &amp; Tallinn
          </p>
        </div>
      </div>
    </footer>
  );
}
