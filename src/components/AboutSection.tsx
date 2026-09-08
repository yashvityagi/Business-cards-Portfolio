import React from 'react';

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative z-10 py-24 px-5 sm:px-8 md:px-12 max-w-6xl mx-auto text-white border-t border-white/10"
    >
      {/* Category marker */}
      <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-neutral-400 mb-4">
        <span>01 / Studio</span>
        <span className="text-neutral-600">—</span>
        <span className="text-white">About &amp; What I Do</span>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Big Statement */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono px-3.5 py-1.5 rounded-full border border-white/20 bg-white/5 text-neutral-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Business Card Design • Starting at ₹199</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight leading-tight">
            Tactile, high-contrast business cards engineered for memorable first impressions.
          </h2>

          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed font-light">
            I am a freelance graphic designer crafting printable brand collateral and bespoke business card designs for small businesses, founders, architects, doctors, consultants, and creative studios.
          </p>

          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Every business card is custom-built with vector-perfect typography, strict print bleed margins (300 DPI CMYK), and tailored paper finishes. Whether you need an understated Swiss minimalist grid, an opulent foil-stamped luxury card, or a cutting-edge creative layout, I deliver print-ready files directly to your inbox in 1–2 days.
          </p>

          {/* Key Differentiators */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
            <div className="p-4 rounded-xl bg-neutral-950/60 border border-neutral-800">
              <div className="text-2xl font-light text-white mb-1">100%</div>
              <div className="text-xs text-neutral-400 font-mono">Custom Vector Typography</div>
            </div>
            <div className="p-4 rounded-xl bg-neutral-950/60 border border-neutral-800">
              <div className="text-2xl font-light text-white mb-1">300 DPI</div>
              <div className="text-xs text-neutral-400 font-mono">CMYK Print-Ready Files</div>
            </div>
            <div className="p-4 rounded-xl bg-neutral-950/60 border border-neutral-800 col-span-2 sm:col-span-1">
              <div className="text-2xl font-light text-white mb-1">1–2 Days</div>
              <div className="text-xs text-neutral-400 font-mono">Express Delivery Window</div>
            </div>
          </div>
        </div>

        {/* Right Column: Specializations Card */}
        <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-neutral-950/90 border border-neutral-800/90 backdrop-blur-md space-y-6">
          <div className="flex justify-between items-center pb-4 border-b border-neutral-800">
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
              Core Design Styles
            </span>
            <span className="text-xs font-mono text-emerald-400">₹199 Flat Fee</span>
          </div>

          <div className="space-y-4 text-sm">
            <div className="p-3.5 rounded-xl bg-neutral-900/50 border border-neutral-800/60 transition-colors hover:border-neutral-700">
              <div className="font-medium text-white flex items-center justify-between">
                <span>Minimal &amp; Professional</span>
                <span className="text-[10px] font-mono text-neutral-400">Swiss Grid</span>
              </div>
              <p className="text-neutral-400 text-xs mt-1">
                Monochrome palettes, generous whitespace, subtle blind deboss textures, and clean QR code integration.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-neutral-900/50 border border-neutral-800/60 transition-colors hover:border-neutral-700">
              <div className="font-medium text-white flex items-center justify-between">
                <span>Luxury &amp; Premium</span>
                <span className="text-[10px] font-mono text-neutral-400">Foil &amp; Velvet</span>
              </div>
              <p className="text-neutral-400 text-xs mt-1">
                Obsidian black, deep emerald &amp; navy cardstocks with hot-stamped gold/silver foil simulation and royal crests.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-neutral-900/50 border border-neutral-800/60 transition-colors hover:border-neutral-700">
              <div className="font-medium text-white flex items-center justify-between">
                <span>Creative &amp; Modern</span>
                <span className="text-[10px] font-mono text-neutral-400">Vibrant &amp; Bold</span>
              </div>
              <p className="text-neutral-400 text-xs mt-1">
                Contemporary color pops, terracotta stamps, brutalist barcode details, and eye-catching asymmetric layouts.
              </p>
            </div>
          </div>

          <div className="pt-2">
            <a
              href="#samples"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-white text-black text-xs font-mono uppercase tracking-wider font-medium hover:bg-neutral-200 transition-colors"
            >
              <span>Explore All 9 Card Samples</span>
              <span>↓</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
