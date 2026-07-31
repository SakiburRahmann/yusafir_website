'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1] as const;

const criteria: Record<string, Record<string, { age: string; edu: string; height: string; medical: string }>> = {
  army: {
    officer: {
      age: '17–21 years',
      edu: 'HSC/equiv., min GPA 3.5 (science) or 3.0 (non-science)',
      height: '162.5 cm (M) / 157 cm (F)',
      medical: 'Category A',
    },
    soldier: {
      age: '17–21 years',
      edu: 'SSC/equiv. pass',
      height: '165 cm (varies by region)',
      medical: 'Category A/B',
    },
  },
  navy: {
    officer: {
      age: '17–21 years',
      edu: 'HSC with Physics, Chemistry, Maths — min GPA 4.0',
      height: '158 cm',
      medical: 'Category A, eyesight 6/6',
    },
    sailor: {
      age: '17–21 years',
      edu: 'SSC science (Physics, Chemistry, Maths)',
      height: '158 cm',
      medical: 'Category A',
    },
  },
  airforce: {
    officer: {
      age: '17–21 years (pilot 17–20)',
      edu: 'HSC with PCM — min GPA 4.5 for pilot',
      height: '163 cm (pilot 162.5–196 cm)',
      medical: 'Category A, stringent for pilots',
    },
    airman: {
      age: '17–21 years',
      edu: 'SSC science, min GPA 3.5',
      height: '157.5 cm',
      medical: 'Category A/B',
    },
  },
};

type Service = keyof typeof criteria;

const entries: Record<Service, { value: string; label: string }[]> = {
  army: [
    { value: 'officer', label: 'Officer' },
    { value: 'soldier', label: 'Soldier' },
  ],
  navy: [
    { value: 'officer', label: 'Officer' },
    { value: 'sailor', label: 'Sailor' },
  ],
  airforce: [
    { value: 'officer', label: 'Officer' },
    { value: 'airman', label: 'Airman' },
  ],
};

export default function Eligibility() {
  const [service, setService] = useState<Service>('army');
  const [entry, setEntry] = useState('officer');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [edu, setEdu] = useState('');
  const [result, setResult] = useState<null | { pass: boolean; notes: string[] }>(null);

  const c = criteria[service][entry as keyof (typeof criteria)['army']];

  const check = () => {
    const notes: string[] = [];
    let pass = true;
    const a = parseInt(age, 10);
    const h = parseInt(height, 10);

    if (!a) {
      notes.push('Enter your age.');
      pass = false;
    } else if (a < 17 || a > 21) {
      notes.push('Age outside the 17–21 window for most entries.');
      pass = false;
    } else {
      notes.push('Age within range.');
    }

    const hm = c.height.match(/(\d+\.?\d*)/);
    if (hm && !h) {
      notes.push('Enter your height.');
      pass = false;
    } else if (hm && h < parseFloat(hm[1])) {
      notes.push(`Height below the ${c.height.split('(')[0].trim()} minimum.`);
      pass = false;
    } else if (hm) {
      notes.push('Height meets the standard.');
    }

    if (!edu) {
      notes.push('Select your education level.');
      pass = false;
    } else {
      notes.push(`Education recorded: ${edu}.`);
    }
    notes.push(`Medical: ${c.medical}.`);

    setResult({ pass, notes });
  };

  return (
    <section id="eligibility" className="relative overflow-hidden bg-coal py-28 md:py-40">
      <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(201,162,39,0.06), transparent 40%)' }} />
      <div className="relative mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
          <div>
            <div className="mb-5 flex items-center gap-4">
              <span className="font-mono text-[11px] tracking-[0.5em] text-gold uppercase">
                [ 02 — Eligibility ]
              </span>
              <span className="h-px w-16 bg-bone/15" />
            </div>
            <h2 className="font-display text-4xl font-black leading-[1.02] tracking-tight text-bone uppercase md:text-6xl">
              Do you
              <br />
              <span className="font-serif italic font-medium text-gold normal-case">
                qualify?
              </span>
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-mute">
              A quick, honest pre-check against the published standards. The
              final word always belongs to the selection board — but this tells
              you whether it&apos;s worth the trip to the cantonment.
            </p>
            <div className="mt-10 space-y-3 border-l border-bone/10 pl-6">
              {(['Age', 'Education', 'Height', 'Medical'] as const).map((k) => (
                <div key={k} className="flex justify-between gap-6 font-mono text-[11px] tracking-[0.25em]">
                  <span className="uppercase text-faint">{k}</span>
                  <span className="uppercase text-bone/80">
                    {k === 'Age'
                      ? c.age
                      : k === 'Education'
                      ? 'HSC / SSC per entry'
                      : k === 'Height'
                      ? '158–165 cm min'
                      : 'Category A / B'}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="scanlines absolute -inset-3 border border-bone/10 bg-ink/60" />
            <div className="relative bg-ink p-7 md:p-10">
              <div className="mb-8 flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-[0.4em] text-faint uppercase">
                  Preliminary assessment
                </span>
                <span className="flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] text-army uppercase">
                  <span className="size-1.5 animate-pulse-soft rounded-full bg-army" />
                  Live
                </span>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block font-mono text-[10px] tracking-[0.3em] text-faint uppercase">
                    Service
                  </label>
                  <select
                    value={service}
                    onChange={(e) => {
                      setService(e.target.value as Service);
                      setResult(null);
                    }}
                    className="w-full appearance-none rounded-none border border-bone/15 bg-coal px-4 py-3.5 font-mono text-xs tracking-[0.15em] text-bone uppercase outline-none transition-colors focus:border-gold"
                  >
                    <option value="army">Army</option>
                    <option value="navy">Navy</option>
                    <option value="airforce">Air Force</option>
                  </select>
                </div>
                <div>
                  <label className="mb-2 block font-mono text-[10px] tracking-[0.3em] text-faint uppercase">
                    Entry
                  </label>
                  <select
                    value={entry}
                    onChange={(e) => {
                      setEntry(e.target.value);
                      setResult(null);
                    }}
                    className="w-full appearance-none rounded-none border border-bone/15 bg-coal px-4 py-3.5 font-mono text-xs tracking-[0.15em] text-bone uppercase outline-none transition-colors focus:border-gold"
                  >
                    {entries[service].map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-2 block font-mono text-[10px] tracking-[0.3em] text-faint uppercase">
                    Age
                  </label>
                  <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="19"
                    className="w-full appearance-none rounded-none border border-bone/15 bg-coal px-4 py-3.5 font-mono text-xs tracking-[0.15em] text-bone placeholder:text-faint outline-none transition-colors focus:border-gold"
                  />
                </div>
                <div>
                  <label className="mb-2 block font-mono text-[10px] tracking-[0.3em] text-faint uppercase">
                    Height (cm)
                  </label>
                  <input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder="168"
                    className="w-full appearance-none rounded-none border border-bone/15 bg-coal px-4 py-3.5 font-mono text-xs tracking-[0.15em] text-bone placeholder:text-faint outline-none transition-colors focus:border-gold"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="mb-2 block font-mono text-[10px] tracking-[0.3em] text-faint uppercase">
                    Education
                  </label>
                  <select
                    value={edu}
                    onChange={(e) => setEdu(e.target.value)}
                    className="w-full appearance-none rounded-none border border-bone/15 bg-coal px-4 py-3.5 font-mono text-xs tracking-[0.15em] text-bone uppercase outline-none transition-colors focus:border-gold"
                  >
                    <option value="">Select your level</option>
                    <option>SSC / equivalent</option>
                    <option>HSC / equivalent</option>
                    <option>Bachelor (science)</option>
                    <option>Bachelor (non-science)</option>
                    <option>Master&apos;s or above</option>
                  </select>
                </div>
              </div>

              <button
                onClick={check}
                className="mt-8 w-full bg-gold py-4 font-display text-sm font-bold tracking-[0.25em] text-ink uppercase transition-colors duration-300 hover:bg-bone"
              >
                Run the check
              </button>

              <AnimatePresence>
                {result && (
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: EASE }}
                    className={`mt-6 border p-5 ${
                      result.pass
                        ? 'border-army/40 bg-army/10'
                        : 'border-blood/40 bg-blood/10'
                    }`}
                  >
                    <p
                      className={`font-display text-xl font-black uppercase tracking-wide ${
                        result.pass ? 'text-army' : 'text-blood'
                      }`}
                    >
                      {result.pass ? 'Likely eligible' : 'Holds, for now'}
                    </p>
                    <ul className="mt-3 space-y-1.5">
                      {result.notes.map((n, i) => (
                        <li
                          key={i}
                          className="flex gap-2 font-mono text-[11px] leading-relaxed tracking-[0.1em] text-bone/70"
                        >
                          <span className={result.pass ? 'text-army' : 'text-blood'}>▸</span>
                          {n}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
