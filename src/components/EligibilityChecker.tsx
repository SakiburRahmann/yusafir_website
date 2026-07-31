'use client';

import { useState } from 'react';

const eligibilityData = {
  army: {
    officer: {
      age: '17-21 years (varies by entry)',
      education: 'HSC/Equivalent with min. GPA 3.5 (Science) or 3.0 (Non-Science)',
      height: 'Min. 162.5 cm (Male), 157 cm (Female)',
      medical: 'Category A/B medical fitness',
    },
    soldier: {
      age: '17-21 years',
      education: 'SSC/Equivalent pass',
      height: 'Min. 165 cm (varies by region)',
      medical: 'Category A/B medical fitness',
    },
  },
  navy: {
    officer: {
      age: '17-21 years',
      education: 'HSC/Equivalent with Physics, Chemistry, Mathematics (min. GPA 4.0)',
      height: 'Min. 158 cm',
      medical: 'Category A medical fitness (incl. eyesight 6/6)',
    },
    sailor: {
      age: '17-21 years',
      education: 'SSC/Equivalent with Science (Physics, Chemistry, Math)',
      height: 'Min. 158 cm',
      medical: 'Category A medical fitness',
    },
  },
  airforce: {
    officer: {
      age: '17-21 years (Pilot: 17-20)',
      education: 'HSC/Equivalent with Physics, Chemistry, Mathematics (min. GPA 4.5 for Pilot)',
      height: 'Min. 163 cm (Pilot: 162.5-196 cm)',
      medical: 'Category A medical fitness (Pilot: stringent eyesight/anthropometric)',
    },
    airman: {
      age: '17-21 years',
      education: 'SSC/Equivalent with Science (min. GPA 3.5)',
      height: 'Min. 157.5 cm',
      medical: 'Category A/B medical fitness',
    },
  },
};

type ServiceType = 'army' | 'navy' | 'airforce';
type EntryType = 'officer' | 'soldier' | 'sailor' | 'airman';

export default function EligibilityChecker() {
  const [service, setService] = useState<ServiceType>('army');
  const [entry, setEntry] = useState<EntryType>('officer');
  const [age, setAge] = useState('');
  const [education, setEducation] = useState('');
  const [height, setHeight] = useState('');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [result, setResult] = useState<{ eligible: boolean; details: string[] } | null>(null);

  const currentCriteria = eligibilityData[service][entry === 'soldier' || entry === 'sailor' || entry === 'airman' ? (entry === 'soldier' ? 'soldier' : entry === 'sailor' ? 'sailor' : 'airman') : 'officer'];

  const checkEligibility = () => {
    if (!age || !education || !height) {
      setResult({ eligible: false, details: ['Please fill all fields.'] });
      return;
    }
    const details: string[] = [];
    let eligible = true;
    const ageNum = parseInt(age, 10);
    const heightNum = parseInt(height, 10);
    const ageRange = currentCriteria.age.match(/(\d+)-(\d+)/);
    if (ageRange) {
      const minAge = parseInt(ageRange[1], 10);
      const maxAge = parseInt(ageRange[2], 10);
      if (ageNum < minAge || ageNum > maxAge) {
        eligible = false;
        details.push(`Age: ${ageNum} — outside range (${minAge}-${maxAge})`);
      } else {
        details.push(`Age: ${ageNum} ✓`);
      }
    }
    const heightMatch = currentCriteria.height.match(/(\d+\.?\d*)/);
    if (heightMatch) {
      const minHeight = parseFloat(heightMatch[1]);
      if (heightNum < minHeight) {
        eligible = false;
        details.push(`Height: ${heightNum} cm — below minimum (${minHeight} cm)`);
      } else {
        details.push(`Height: ${heightNum} cm ✓`);
      }
    }
    details.push(`Education: ${education}`);
    details.push(`Medical: ${currentCriteria.medical}`);
    setResult({ eligible, details });
  };

  const entryOptions: Record<ServiceType, { value: EntryType; label: string }[]> = {
    army: [{ value: 'officer', label: 'Officer' }, { value: 'soldier', label: 'Soldier' }],
    navy: [{ value: 'officer', label: 'Officer' }, { value: 'sailor', label: 'Sailor' }],
    airforce: [{ value: 'officer', label: 'Officer' }, { value: 'airman', label: 'Airman' }],
  };

  return (
    <section id="eligibility" className="section bg-white" aria-labelledby="eligibility-title">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-up">
          <h2 id="eligibility-title" className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-4">
            Check Your Eligibility
          </h2>
          <p className="text-gray-600 text-lg">
            Quick assessment — official criteria apply at selection.
          </p>
        </div>

        <div className="max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <div className="card p-6 md:p-8">
            <div className="grid gap-6">
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Service Branch
                </label>
                <select
                  id="service"
                  value={service}
                  onChange={(e) => setService(e.target.value as ServiceType)}
                  className="select-field"
                  aria-required="true"
                >
                  <option value="army">Bangladesh Army</option>
                  <option value="navy">Bangladesh Navy</option>
                  <option value="airforce">Bangladesh Air Force</option>
                </select>
              </div>

              <div>
                <label htmlFor="entry" className="block text-sm font-medium text-gray-700 mb-2">
                  Entry Type
                </label>
                <select
                  id="entry"
                  value={entry}
                  onChange={(e) => setEntry(e.target.value as EntryType)}
                  className="select-field"
                  aria-required="true"
                >
                  {entryOptions[service].map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-2">
                    Age (years)
                  </label>
                  <input
                    id="age"
                    type="number"
                    min="16"
                    max="30"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="input-field"
                    placeholder="e.g., 19"
                    aria-required="true"
                  />
                </div>
                <div>
                  <label htmlFor="height" className="block text-sm font-medium text-gray-700 mb-2">
                    Height (cm)
                  </label>
                  <input
                    id="height"
                    type="number"
                    min="140"
                    max="210"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="input-field"
                    placeholder="e.g., 168"
                    aria-required="true"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-2">
                  Gender
                </label>
                <select
                  id="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value as 'male' | 'female')}
                  className="select-field"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              <div>
                <label htmlFor="education" className="block text-sm font-medium text-gray-700 mb-2">
                  Highest Education
                </label>
                <select
                  id="education"
                  value={education}
                  onChange={(e) => setEducation(e.target.value)}
                  className="select-field"
                  aria-required="true"
                >
                  <option value="">Select...</option>
                  <option value="SSC/Science">SSC (Science)</option>
                  <option value="SSC/Non-Science">SSC (Non-Science)</option>
                  <option value="HSC/Science">HSC (Science)</option>
                  <option value="HSC/Non-Science">HSC (Non-Science)</option>
                  <option value="Bachelor/Science">Bachelor (Science/Engineering)</option>
                  <option value="Bachelor/Non-Science">Bachelor (Non-Science)</option>
                  <option value="Master+">Master or above</option>
                </select>
              </div>

              <button
                onClick={checkEligibility}
                className="btn-primary w-full py-3 text-lg mt-2"
                disabled={!age || !education || !height}
              >
                Check Eligibility
              </button>
            </div>

            {result && (
              <div
                className={`mt-6 p-4 rounded-lg ${result.eligible ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}
                role="status"
                aria-live="polite"
              >
                <div className="flex items-start gap-3">
                  <svg
                    className={`h-6 w-6 flex-shrink-0 mt-0.5 ${result.eligible ? 'text-green-600' : 'text-red-600'}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    {result.eligible ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    )}
                  </svg>
                  <div>
                    <p className={`font-semibold ${result.eligible ? 'text-green-800' : 'text-red-800'}`}>
                      {result.eligible ? 'Likely Eligible' : 'Likely Not Eligible'}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      {result.eligible
                        ? 'You meet basic criteria. Final eligibility determined at selection centre.'
                        : 'Review the details below. Some criteria may have waivers — consult a recruitment office.'}
                    </p>
                    <ul className="mt-3 space-y-1 text-sm">
                      {result.details.map((d, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-700">
                          <span className="text-green-600">•</span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-6 pt-6 border-t border-gray-100">
              <h3 className="font-medium text-gray-900 mb-3">Official Requirements for {service === 'army' ? 'Army' : service === 'navy' ? 'Navy' : 'Air Force'} — {entry.charAt(0).toUpperCase() + entry.slice(1)}</h3>
              <dl className="space-y-3 text-sm">
                <div className="flex justify-between gap-4 py-2 bg-gray-50 rounded-lg px-3">
                  <dt className="text-gray-600">Age</dt>
                  <dd className="font-medium text-gray-900">{currentCriteria.age}</dd>
                </div>
                <div className="flex justify-between gap-4 py-2 bg-gray-50 rounded-lg px-3">
                  <dt className="text-gray-600">Education</dt>
                  <dd className="font-medium text-gray-900">{currentCriteria.education}</dd>
                </div>
                <div className="flex justify-between gap-4 py-2 bg-gray-50 rounded-lg px-3">
                  <dt className="text-gray-600">Height (Min.)</dt>
                  <dd className="font-medium text-gray-900">{currentCriteria.height}</dd>
                </div>
                <div className="flex justify-between gap-4 py-2 bg-gray-50 rounded-lg px-3">
                  <dt className="text-gray-600">Medical Standard</dt>
                  <dd className="font-medium text-gray-900">{currentCriteria.medical}</dd>
                </div>
              </dl>
            </div>
          </div>

          <p className="mt-6 text-center text-sm text-gray-500">
            <strong>Disclaimer:</strong> This is a preliminary check. Final eligibility is determined by the respective
            recruitment authorities at selection centres. Criteria may vary by entry scheme and are subject to change.
          </p>
        </div>
      </div>
    </section>
  );
}