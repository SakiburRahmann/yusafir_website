const words = [
  "Brand Strategy",
  "Art Direction",
  "Web Design",
  "Development",
  "Identity",
  "Motion",
  "E-Commerce",
];

export default function Marquee() {
  const row = [...words, ...words];
  return (
    <section className="relative overflow-hidden border-y border-line bg-coal py-6">
      <div className="animate-marquee flex w-max items-center whitespace-nowrap">
        {[0, 1].map((half) => (
          <div key={half} className="flex items-center">
            {row.map((word, i) => (
              <span
                key={`${half}-${i}`}
                className="flex items-center font-display text-3xl text-bone/80 md:text-4xl"
              >
                <span className="px-6">{word}</span>
                <span className="text-lg text-gold">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
