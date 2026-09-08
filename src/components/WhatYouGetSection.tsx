import React from 'react';

const DELIVERABLES = [
  {
    icon: '⇄',
    title: 'Front + Back Design',
    description:
      'Cohesive bilateral visual identity. Side A establishes brand presence and monogram; Side B organizes contact credentials, social links, and QR codes.',
    spec: 'Standard 3.5" × 2" (or 85 × 55 mm)',
  },
  {
    icon: '📄',
    title: 'Print-Ready PDF',
    description:
      'Engineered to commercial press standards. 300 DPI high-resolution CMYK color space with 3mm bleed margins and vector crop trim marks.',
    spec: 'Compatible with VistaPrint, local presses, & online vendors',
  },
  {
    icon: '🖼️',
    title: 'High-Res PNG & JPG',
    description:
      'Crisp digital export files with transparent and solid backgrounds. Ideal for virtual card sharing, email signatures, presentations, and social media.',
    spec: 'Ultra HD 3000 × 1714 px resolution',
  },
  {
    icon: '✏️',
    title: '1 Included Revision',
    description:
      'Fine-tune layout proportions, typographic weights, contact detail adjustments, or color tweaks to ensure 100% satisfaction before final export.',
    spec: 'Turnaround within hours of feedback',
  },
  {
    icon: '⚡',
    title: 'Express 1–2 Day Delivery',
    description:
      'Fast delivery directly to your Email. You get your initial layout proposal in 24–48 hours without compromising design quality.',
    spec: 'Direct cloud link with all assets bundled',
  },
  {
    icon: '📐',
    title: 'Print Guide & Paper Advice',
    description:
      'Detailed recommendations on paper weight (350–600 gsm), texture (Cotton Rag, Silk, Uncoated), and specialty finishes (Foil, Deboss, Spot UV).',
    spec: 'Complimentary production advice included',
  },
];

export function WhatYouGetSection() {
  return (
    <section
      id="deliverables"
      className="relative z-10 py-24 px-5 sm:px-8 md:px-12 max-w-6xl mx-auto text-white border-t border-white/10"
    >
      {/* Category marker */}
      <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-neutral-400 mb-4">
        <span>03 / Openings</span>
        <span className="text-neutral-600">—</span>
        <span className="text-white">What You Get</span>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight">
            Comprehensive Digital Deliverables
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-2xl font-light">
            Everything you need to send directly to your local printer or online vendor with zero technical headaches.
          </p>
        </div>
        <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 rounded-full self-start md:self-auto">
          All Included for ₹199
        </div>
      </div>

      {/* Deliverable Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {DELIVERABLES.map((item, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 backdrop-blur-md flex flex-col justify-between hover:border-neutral-700 transition-colors"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-lg">
                  {item.icon}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
                  FEATURE 0{idx + 1}
                </span>
              </div>
              <h3 className="text-xl font-normal text-white tracking-tight mb-2">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
                {item.description}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-800/80 text-[11px] font-mono text-neutral-300">
              {item.spec}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
