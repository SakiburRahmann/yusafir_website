const items = [
  'Word Association Test',
  'Sentence Completion Test',
  'Group Planning Exercise',
  'Group Discussion',
  'Interview Practice',
  'Leadership Assessment',
  'Self-description',
  'Physical Prep Guide',
];

export default function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-bone/10 bg-coal py-5">
      <div className="mask-fade-x overflow-hidden">
        <div className="animate-marquee flex w-max items-center whitespace-nowrap">
          {[0, 1].map((half) => (
            <div key={half} className="flex items-center">
              {items.map((item) => (
                <span
                  key={`${half}-${item}`}
                  className="flex items-center font-display text-sm font-semibold tracking-[0.25em] text-mute uppercase"
                >
                  <span className="px-8">{item}</span>
                  <span className="text-[10px] text-gold">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
