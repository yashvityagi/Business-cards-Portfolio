import React from 'react';

interface PricingSectionProps {
  onOrderClick: () => void;
}

export function PricingSection({ onOrderClick }: PricingSectionProps) {
  return (
    <section
      id="pricing"
      className="relative z-10 py-24 px-5 sm:px-8 md:px-12 max-w-5xl mx-auto text-white border-t border-white/10"
    >
      {/* Category marker */}
      <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-neutral-400 mb-4">
        <span>04 / Shop</span>
        <span className="text-neutral-600">—</span>
        <span className="text-white">Pricing &amp; Launch Offer</span>
      </div>

      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight">
          Transparent, Accessible Pricing
        </h2>
        <p className="text-neutral-400 text-sm sm:text-base mt-2 font-light">
          Agency-grade graphic design crafted specifically for small businesses, founders, and solopreneurs without traditional agency markups.
        </p>
      </div>

      {/* Main Pricing Box */}
      <div className="relative rounded-3xl bg-neutral-950 border-2 border-neutral-700/80 p-6 sm:p-10 backdrop-blur-xl shadow-2xl overflow-hidden">
        {/* Launch Badge */}
        <div className="absolute -top-3 right-6 sm:right-10 bg-white text-black text-xs font-mono uppercase tracking-widest font-semibold px-4 py-1.5 rounded-full shadow-lg">
          Limited Launch Offer • 50% OFF
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Price and Details */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-mono tracking-widest uppercase text-neutral-400">
                Custom Business Card Package
              </span>
              <div className="flex items-baseline gap-3 mt-2">
                <span className="text-5xl sm:text-6xl font-light tracking-tight text-white">
                  ₹199
                </span>
                <span className="text-2xl sm:text-3xl font-light text-neutral-500 line-through">
                  ₹399
                </span>
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest ml-2">
                  Flat One-Time Fee
                </span>
              </div>
            </div>

            {/* Checklist */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-sm">
                <span className="text-emerald-400 mt-0.5">✓</span>
                <span className="text-neutral-200">
                  <strong>Front + Back</strong> bespoke custom design
                </span>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <span className="text-emerald-400 mt-0.5">✓</span>
                <span className="text-neutral-200">
                  <strong>300 DPI Print-Ready PDF</strong> with 3mm bleed &amp; crop marks
                </span>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <span className="text-emerald-400 mt-0.5">✓</span>
                <span className="text-neutral-200">
                  <strong>High-Resolution PNG &amp; JPG</strong> for digital sharing
                </span>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <span className="text-emerald-400 mt-0.5">✓</span>
                <span className="text-neutral-200">
                  <strong>1 Included Revision</strong> for perfection
                </span>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <span className="text-emerald-400 mt-0.5">✓</span>
                <span className="text-neutral-200">
                  <strong>Express 1–2 Day Delivery</strong> turnaround
                </span>
              </div>
            </div>

            {/* Crucial Notice Required by User */}
            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200/90 leading-relaxed font-mono">
              <span className="font-bold uppercase tracking-wider block text-amber-300 mb-1">
                ⚠️ Important Notice: Printing Not Included
              </span>
              This fee covers complete custom graphic design and print-ready production files. Physical printing is <strong>not included</strong>. Your digital files can be uploaded directly to VistaPrint, Printland, or handed to any local commercial print shop.
            </div>
          </div>

          {/* Right: Quick Order Action Box */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-neutral-900/90 border border-neutral-800 flex flex-col justify-between space-y-6">
            <div>
              <h3 className="text-lg font-medium text-white mb-2">How It Works</h3>
              <ol className="space-y-3 text-xs text-neutral-300 font-mono">
                <li className="flex gap-3">
                  <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
                    1
                  </span>
                  <span>Share your business name, contact info, and preferred style (Minimal, Luxury, or Creative).</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
                    2
                  </span>
                  <span>I design your bespoke front &amp; back card layout within 24–48 hours.</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
                    3
                  </span>
                  <span>Review, refine if needed, and receive your print-ready PDF bundle.</span>
                </li>
              </ol>
            </div>

            <button
              type="button"
              onClick={onOrderClick}
              className="w-full py-3.5 px-6 rounded-full bg-white text-black font-medium text-sm hover:bg-neutral-200 transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-lg"
            >
              <span>Get Started for ₹199</span>
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
