'use client';

import Link from 'next/link';

const steps = [
  {
    number: '01',
    title: 'Check Eligibility',
    description: 'Use our eligibility checker or visit the official website to verify you meet age, education, height, and medical standards for your chosen service and entry type.',
    icon: (
      <svg className="h-6 w-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Online Registration',
    description: 'Create an account on the official recruitment portal. Fill personal details, upload scanned documents (photo, signature, certificates), and submit the application before the deadline.',
    icon: (
      <svg className="h-6 w-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Admit Card Download',
    description: 'After successful registration, download your admit card from the portal within the specified window. It contains exam centre, date, time, and roll number. Bring printed copy + ID to the centre.',
    icon: (
      <svg className="h-6 w-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2m2 4h10a2 2 0 002-2V7a2 2 0 00-2-2h-2m0 10a2 2 0 012 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Written Examination',
    description: 'Attend the written test at your assigned centre. Subjects vary: General Knowledge, Mathematics, English, Bangla, and service-specific topics. Results published on the portal.',
    icon: (
      <svg className="h-6 w-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 5l3 3" />
      </svg>
    ),
  },
  {
    number: '05',
    title: 'Physical & Medical Tests',
    description: 'Qualified candidates undergo physical fitness tests (running, push-ups, sit-ups) and comprehensive medical examination at designated military hospitals. Standards are strict and non-negotiable.',
    icon: (
      <svg className="h-6 w-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    number: '06',
    title: 'ISSB / Viva Voce',
    description: 'Officer candidates attend the Inter Services Selection Board (ISSB) — 4-day assessment of personality, leadership, and intelligence. Other ranks face viva voce and practical tests.',
    icon: (
      <svg className="h-6 w-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    number: '07',
    title: 'Final Merit & Joining',
    description: 'Final merit list published. Selected candidates receive joining instructions, report to training academies (BMA, BNA, BAF Academy), and begin basic military training.',
    icon: (
      <svg className="h-6 w-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export default function ApplicationProcess() {
  return (
    <section id="process" className="section bg-gray-50" aria-labelledby="process-title">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-up">
          <h2 id="process-title" className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-4">
            Application Process
          </h2>
          <p className="text-gray-600 text-lg">
            Seven clear steps from registration to joining. Timelines vary by service and entry — check active notices for exact dates.
          </p>
        </div>

        <div className="relative">
          <div className="step-connector" aria-hidden="true" />

          <div className="space-y-8 md:space-y-12">
            {steps.map((step, index) => (
              <article
                key={step.number}
                className={`relative flex gap-6 animate-fade-up ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div
                  className={`relative flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-green-50 border-2 border-green-200 flex items-center justify-center z-10 ${
                    index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'
                  }`}
                  aria-hidden="true"
                >
                  <span className="font-display font-bold text-2xl md:text-3xl text-green-700">{step.number}</span>
                  {index < steps.length - 1 && (
                    <div
                      className={`absolute top-full left-1/2 w-0.5 h-24 -translate-x-1/2 ${
                        index % 2 === 0 ? 'md:left-auto md:right-0' : 'md:right-auto md:left-0'
                      } bg-gray-200`}
                      aria-hidden="true"
                    />
                  )}
                </div>

                <div
                  className={`flex-1 card p-6 md:p-8 ${
                    index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3 justify-end md:justify-end">
                    <div className="flex-shrink-0 p-2 bg-green-100 rounded-lg" aria-hidden="true">
                      {step.icon}
                    </div>
                    <h3 className="font-display font-bold text-xl md:text-2xl text-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center animate-fade-up">
          <Link
            href="/apply"
            className="btn-primary inline-flex items-center gap-2 px-8 py-3 text-lg"
          >
            Start Your Application
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}