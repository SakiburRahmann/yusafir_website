'use client';

import Link from 'next/link';

const services = [
  {
    name: 'Bangladesh Army',
    tagline: 'Strength. Honour. Duty.',
    description: 'Defend the sovereignty and territorial integrity of Bangladesh. Join as Officer, Soldier, or Civilian.',
    href: '/army',
    color: 'green',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    textColor: 'text-green-800',
    icon: (
      <svg className="h-10 w-10 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343M12 2a5 5 0 110 10 5 5 0 010-10z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-3-3 3-3" />
      </svg>
    ),
    stats: [
      { label: 'Active Personnel', value: '200,000+' },
      { label: 'Corps & Divisions', value: '10+' },
    ],
  },
  {
    name: 'Bangladesh Navy',
    tagline: 'Guardians of the Sea.',
    description: 'Protect maritime interests across the Bay of Bengal. Join as Officer, Sailor, or Civilian.',
    href: '/navy',
    color: 'blue',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    textColor: 'text-blue-800',
    icon: (
      <svg className="h-10 w-10 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    stats: [
      { label: 'Active Personnel', value: '25,000+' },
      { label: 'Ships & Craft', value: '100+' },
    ],
  },
  {
    name: 'Bangladesh Air Force',
    tagline: 'Sky is the Limit.',
    description: 'Secure the airspace of Bangladesh. Join as Officer, Airman, or Civilian.',
    href: '/air-force',
    color: 'red',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
    textColor: 'text-red-800',
    icon: (
      <svg className="h-10 w-10 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    stats: [
      { label: 'Active Personnel', value: '22,000+' },
      { label: 'Aircraft', value: '150+' },
    ],
  },
];

export default function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 lg:pb-32 overflow-hidden" aria-labelledby="hero-title">
      <div className="absolute inset-0 bg-gradient-to-b from-green-50/50 via-transparent to-transparent" aria-hidden="true" />
      <div className="absolute inset-0 stripes opacity-50" aria-hidden="true" />

      <div className="container relative">
        <div className="max-w-3xl animate-fade-up">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-700 text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-pulse-soft absolute inset-0 h-2 w-2 rounded-full bg-green-500" />
              <span className="relative h-2 w-2 rounded-full bg-green-600" />
            </span>
            Official Recruitment Portal
          </span>
          <h1 id="hero-title" className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-tight text-gray-900 mb-6 text-balance">
            Serve with
            <br />
            <span className="gradient-text">Pride</span>
            <span className="text-gray-900">. Lead with</span>
            <br />
            <span className="gradient-red">Honour</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
            Bangladesh Army, Navy, and Air Force — three services, one mission. Find your path, check eligibility, and apply online.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/apply" className="btn-primary text-lg px-8 py-3">
              Start Application
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link href="/eligibility" className="btn-outline text-lg px-8 py-3">
              Check Eligibility
            </Link>
          </div>
        </div>

        <div className="mt-12 md:mt-16 grid gap-6 md:grid-cols-3" role="list" aria-label="Service branches">
          {services.map((service, index) => (
            <article
              key={service.name}
              className={`card relative overflow-hidden group animate-fade-up ${service.bgColor} ${service.borderColor}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-${service.color}-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} aria-hidden="true" />
              <div className="p-6 md:p-8">
                <div className="mb-4">{service.icon}</div>
                <h2 className="font-display font-bold text-xl md:text-2xl text-gray-900 mb-2">{service.name}</h2>
                <p className={`text-sm font-medium ${service.textColor} mb-4`}>{service.tagline}</p>
                <p className="text-gray-600 text-sm mb-6 line-clamp-3">{service.description}</p>
                <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-white/50 rounded-lg">
                  {service.stats.map((stat, i) => (
                    <div key={i} className="text-center">
                      <p className={`font-display font-bold text-2xl ${service.textColor}`}>{stat.value}</p>
                      <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
                <Link
                  href={service.href}
                  className={`inline-flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg font-medium text-sm transition-all focus-ring border-2 ${
                    service.color === 'green'
                      ? 'border-green-700 text-green-700 hover:bg-green-50'
                      : service.color === 'blue'
                      ? 'border-blue-700 text-blue-700 hover:bg-blue-50'
                      : 'border-red-700 text-red-700 hover:bg-red-50'
                  }`}
                >
                  Explore {service.name}
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}