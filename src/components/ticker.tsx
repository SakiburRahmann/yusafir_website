const items = [
  "OP STEEL FOREST — COMPLETED",
  "SENTINEL-9 CLEARED FOR EXPORT",
  "HALO-NET DEPLOYED — NORTHERN BORDER",
  "GHOST-LINK V2.4 PATCHED",
  "FIELD LOGISTICS — NEW THEATRE OPEN",
  "BULLFROG-X FIELD TRIALS 100% PASS",
  "CYBER WATCH — THREAT LEVEL ELEVATED",
  "TITAN-7 COMMAND LINK UPGRADED",
];

export default function Ticker() {
  return (
    <div className="scanlines relative overflow-hidden border-y border-line bg-coal py-3">
      <div className="mask-fade-x overflow-hidden">
        <div className="animate-marquee flex w-max items-center whitespace-nowrap">
          {[0, 1].map((half) => (
            <div key={half} className="flex items-center">
              {items.map((item) => (
                <span
                  key={`${half}-${item}`}
                  className="flex items-center font-mono text-[10px] font-semibold tracking-[0.3em] text-mute uppercase"
                >
                  <span className="px-6">{item}</span>
                  <span className="text-[8px] text-amber">▮</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
