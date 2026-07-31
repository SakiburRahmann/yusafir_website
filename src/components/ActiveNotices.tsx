'use client';

import { useState } from 'react';

const notices = [
  {
    id: 1,
    service: 'Army',
    title: 'BMA Long Course 80 — Officer Cadet Recruitment',
    type: 'Officer',
    status: 'Open',
    deadline: '2025-02-15',
    published: '2025-01-10',
    applyLink: '/apply',
  },
  {
    id: 2,
    service: 'Army',
    title: 'Direct Entry Officer (Technical) — 52nd Batch',
    type: 'Officer (Technical)',
    status: 'Open',
    deadline: '2025-02-28',
    published: '2025-01-20',
    applyLink: '/apply',
  },
  {
    id: 3,
    service: 'Army',
    title: 'Soldier General Duty & Tradesmen Recruitment 2025',
    type: 'Soldier',
    status: 'Open',
    deadline: '2025-03-10',
    published: '2025-02-01',
    applyLink: '/apply',
  },
  {
    id: 4,
    service: 'Navy',
    title: 'BNA Long Course 2025 — Officer Cadet',
    type: 'Officer',
    status: 'Open',
    deadline: '2025-02-20',
    published: '2025-01-15',
    applyLink: '/apply',
  },
  {
    id: 5,
    service: 'Navy',
    title: 'Sailor Entry — Technical & Non-Technical Branches',
    type: 'Sailor',
    status: 'Open',
    deadline: '2025-03-05',
    published: '2025-02-05',
    applyLink: '/apply',
  },
  {
    id: 6,
    service: 'Air Force',
    title: 'BAF Officer Cadet — GD(P) & Ground Duty Branches',
    type: 'Officer',
    status: 'Open',
    deadline: '2025-02-25',
    published: '2025-01-18',
    applyLink: '/apply',
  },
  {
    id: 7,
    service: 'Air Force',
    title: 'Airman Recruitment — Technical & Non-Technical Trades',
    type: 'Airman',
    status: 'Open',
    deadline: '2025-03-15',
    published: '2025-02-10',
    applyLink: '/apply',
  },
];

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

function daysUntil(dateStr: string) {
  const target = new Date(dateStr);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const diff = target.getTime() - today.getTime();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

export default function ActiveNotices() {
  const services = ['All', 'Army', 'Navy', 'Air Force'] as const;
  const [filter, setFilter] = useState<typeof services[number]>('All');

  const filtered = filter === 'All' ? notices : notices.filter(n => n.service === filter);

  return (
    <section id="notices" className="section bg-white" aria-labelledby="notices-title">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 animate-fade-up">
          <div>
            <h2 id="notices-title" className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-2">
              Active Recruitment Notices
            </h2>
            <p className="text-gray-600">Official advertisements currently accepting applications.</p>
          </div>
          <div className="flex gap-2" role="tablist" aria-label="Filter by service">
            {services.map((svc) => (
              <button
                key={svc}
                role="tab"
                aria-selected={filter === svc}
                aria-controls="notices-panel"
                onClick={() => setFilter(svc)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all focus-ring ${
                  filter === svc
                    ? 'bg-green-700 text-white shadow-sm'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {svc}
              </button>
            ))}
          </div>
        </div>

        <div id="notices-panel" role="tabpanel" className="space-y-4">
          {filtered.map((notice, index) => (
            <article
              key={notice.id}
              className="card p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 animate-fade-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className={`badge ${notice.service === 'Army' ? 'badge-green' : notice.service === 'Navy' ? 'badge-blue' : 'badge-red'}`}>
                    {notice.service}
                  </span>
                  <span className="badge badge-gray">{notice.type}</span>
                  <span className={`badge ${notice.status === 'Open' ? 'badge-green' : 'badge-gray'}`}>
                    {notice.status}
                  </span>
                </div>
                <h3 className="font-display font-bold text-xl md:text-2xl text-gray-900 mb-2">{notice.title}</h3>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Published: {formatDate(notice.published)}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Deadline: <strong className="text-gray-900">{formatDate(notice.deadline)}</strong>
                  </span>
                  <span className={`flex items-center gap-1 ${daysUntil(notice.deadline) <= 7 ? 'text-red-600' : 'text-green-600'}`}>
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5a2 2 0 012 2v7.586l2.293 2.293a1 1 0 010 1.414A2 2 0 0115.414 21H8.586a2 2 0 01-1.414-.586L7 17.586V7a2 2 0 012-2h6z" />
                    </svg>
                    {daysUntil(notice.deadline) > 0 ? `${daysUntil(notice.deadline)} days left` : 'Deadline passed'}
                  </span>
                </div>
              </div>
              <div className="flex-shrink-0 md:ml-8">
                <a
                  href={notice.applyLink}
                  className="btn-primary whitespace-nowrap"
                >
                  Apply Now
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center animate-fade-up">
          <a href="/notices" className="btn-outline">
            View All Notices & Archives
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}