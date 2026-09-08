import React, { useState } from 'react';
import { CARD_SAMPLES } from '../data/samples';
import { CardCategory, CardSample } from '../types';
import { CardMockup } from './CardMockup';

interface SamplesSectionProps {
  onInspectCard: (card: CardSample) => void;
}

export function SamplesSection({ onInspectCard }: SamplesSectionProps) {
  const [activeCategory, setActiveCategory] = useState<CardCategory>('all');

  const filteredSamples = CARD_SAMPLES.filter((card) => {
    if (activeCategory === 'all') return true;
    return card.category === activeCategory;
  });

  return (
    <section
      id="samples"
      className="relative z-10 py-24 px-5 sm:px-8 md:px-12 max-w-7xl mx-auto text-white border-t border-white/10"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-neutral-400 mb-3">
            <span>02 / Labs</span>
            <span className="text-neutral-600">—</span>
            <span className="text-white">Design Samples &amp; Archetypes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight">
            Curated Business Card Samples
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-2xl font-light">
            Interactive front &amp; back previews. Click any card to flip it, or click &ldquo;Inspect Specifications&rdquo; to view print dimensions and material recommendations.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-full bg-neutral-950/80 border border-neutral-800 self-start md:self-auto backdrop-blur-md">
          <button
            type="button"
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-1.5 rounded-full text-xs font-mono cursor-pointer transition-all ${
              activeCategory === 'all'
                ? 'bg-white text-black font-medium'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            All Samples ({CARD_SAMPLES.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory('minimal')}
            className={`px-4 py-1.5 rounded-full text-xs font-mono cursor-pointer transition-all ${
              activeCategory === 'minimal'
                ? 'bg-white text-black font-medium'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Minimal &amp; Professional (3)
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory('luxury')}
            className={`px-4 py-1.5 rounded-full text-xs font-mono cursor-pointer transition-all ${
              activeCategory === 'luxury'
                ? 'bg-white text-black font-medium'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Luxury &amp; Premium (3)
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory('creative')}
            className={`px-4 py-1.5 rounded-full text-xs font-mono cursor-pointer transition-all ${
              activeCategory === 'creative'
                ? 'bg-white text-black font-medium'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Creative &amp; Modern (3)
          </button>
        </div>
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredSamples.map((card) => (
          <CardMockup
            key={card.id}
            card={card}
            onInspect={onInspectCard}
          />
        ))}
      </div>

      {/* Bottom note */}
      <div className="mt-12 p-6 rounded-2xl bg-neutral-950/60 border border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-400">
        <div className="flex items-center gap-3">
          <span className="text-emerald-400 text-base font-bold">✳︎</span>
          <span>Have a specific custom color palette or existing brand guidelines? We adapt all designs seamlessly.</span>
        </div>
        <a
          href="#pricing"
          className="text-white underline underline-offset-4 hover:opacity-80 shrink-0"
        >
          View ₹199 Pricing &amp; Inclusions →
        </a>
      </div>
    </section>
  );
}
