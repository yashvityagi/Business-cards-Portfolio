import React, { useState } from 'react';
import { CardSample } from '../types';
import { renderCardFront, renderCardBack } from './SampleCardVisuals';

interface CardMockupProps {
  key?: React.Key;
  card: CardSample;
  onInspect?: (card: CardSample) => void;
}

export function CardMockup({ card, onInspect }: CardMockupProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="group flex flex-col bg-neutral-950/80 border border-neutral-800/80 rounded-2xl p-5 sm:p-6 backdrop-blur-md transition-all duration-300 hover:border-neutral-700 hover:shadow-2xl">
      {/* Header Info */}
      <div className="flex items-center justify-between gap-2 mb-4">
        <div>
          <span className="text-[11px] font-mono tracking-widest uppercase text-neutral-400">
            {card.categoryLabel}
          </span>
          <h3 className="text-xl font-medium text-white tracking-tight mt-0.5">
            {card.title}
          </h3>
        </div>
        <button
          type="button"
          onClick={toggleFlip}
          aria-label={`Flip card to see ${isFlipped ? 'front' : 'back'} side`}
          className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-full border border-neutral-700 bg-neutral-900/90 text-neutral-300 hover:text-white hover:border-white transition-colors cursor-pointer select-none"
        >
          <svg
            className={`w-3.5 h-3.5 transition-transform duration-300 ${isFlipped ? 'rotate-180' : ''}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.19" />
          </svg>
          <span>{isFlipped ? 'View Front' : 'View Back'}</span>
        </button>
      </div>

      {/* Card Visual Stage (3.5 : 2 ratio = 1.75 : 1) */}
      <div
        onClick={toggleFlip}
        className="relative w-full aspect-[1.75/1] rounded-xl cursor-pointer select-none perspective-[1000px] transition-transform duration-300 group-hover:scale-[1.01]"
        title="Click to flip front/back"
      >
        <div
          className={`relative w-full h-full rounded-xl transition-all duration-700 preserve-3d shadow-xl ${
            isFlipped ? '[transform:rotateY(180deg)]' : ''
          }`}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* FRONT OF CARD */}
          <div
            className="absolute inset-0 w-full h-full rounded-xl overflow-hidden [backface-visibility:hidden] border shadow-inner"
            style={{
              backgroundColor: card.frontColor.bg,
              color: card.frontColor.text,
              borderColor: card.frontColor.border || '#333',
            }}
          >
            {renderCardFront(card.id) ? (
              <div className="w-full h-full relative">
                {renderCardFront(card.id)}
              </div>
            ) : (
              <div className="w-full h-full p-5 sm:p-6 flex flex-col justify-between relative">
                {/* Subtle paper grain / foil shimmer simulation */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.03] to-transparent pointer-events-none" />

                {/* Top Bar of Front */}
                <div className="flex justify-between items-start z-10">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-5 h-5 rounded-full border flex items-center justify-center text-[10px] font-bold"
                      style={{ borderColor: card.frontColor.accent, color: card.frontColor.accent }}
                    >
                      {card.title.charAt(0)}
                    </span>
                    <span
                      className="text-xs font-mono uppercase tracking-widest opacity-80"
                      style={{ color: card.frontColor.accent }}
                    >
                      {card.clientType}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono opacity-60 tracking-wider">
                    SIDE A • FRONT
                  </span>
                </div>

                {/* Center Monogram / Brand Name */}
                <div className="my-auto z-10">
                  <h4
                    className="text-2xl sm:text-3xl font-normal tracking-tight"
                    style={{
                      fontFamily:
                        card.category === 'luxury'
                          ? 'Georgia, serif'
                          : card.category === 'minimal'
                          ? 'var(--font-heading)'
                          : 'var(--font-body)',
                    }}
                  >
                    {card.title}
                  </h4>
                  <p
                    className="text-xs sm:text-sm mt-1 opacity-75 font-light"
                    style={{ color: card.frontColor.accent }}
                  >
                    {card.subtitle}
                  </p>
                </div>

                {/* Bottom Tagline & Spec */}
                <div className="flex justify-between items-end z-10 pt-2 border-t border-current/10">
                  <span className="text-[11px] italic opacity-70 font-light truncate max-w-[70%]">
                    &ldquo;{card.tagline}&rdquo;
                  </span>
                  <span className="text-[9px] font-mono tracking-widest uppercase opacity-50">
                    {card.aspectRatio}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* BACK OF CARD */}
          <div
            className="absolute inset-0 w-full h-full rounded-xl overflow-hidden [backface-visibility:hidden] [transform:rotateY(180deg)] border shadow-inner"
            style={{
              backgroundColor: card.backColor.bg,
              color: card.backColor.text,
              borderColor: card.backColor.border || '#333',
            }}
          >
            {renderCardBack(card.id) ? (
              <div className="w-full h-full relative">
                {renderCardBack(card.id)}
              </div>
            ) : (
              <div className="w-full h-full p-5 sm:p-6 flex flex-col justify-between relative">
                {/* Subtle back sheen */}
                <div className="absolute inset-0 bg-gradient-to-bl from-white/[0.04] to-transparent pointer-events-none" />

                {/* Top Bar of Back */}
                <div className="flex justify-between items-center z-10">
                  <div>
                    <div
                      className="text-base sm:text-lg font-medium tracking-tight"
                      style={{ color: card.backColor.text }}
                    >
                      {card.personName}
                    </div>
                    <div
                      className="text-xs font-mono tracking-wider opacity-75"
                      style={{ color: card.backColor.accent }}
                    >
                      {card.personRole}
                    </div>
                  </div>
                  <span className="text-[10px] font-mono opacity-60 tracking-wider">
                    SIDE B • BACK
                  </span>
                </div>

                {/* Details & Coordinates */}
                <div className="flex justify-between items-end gap-3 z-10">
                  <div className="space-y-1 text-[11px] sm:text-xs opacity-85 font-mono">
                    <div className="flex items-center gap-2">
                      <span className="opacity-50">E:</span>
                      <span>{card.contactEmail}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="opacity-50">T:</span>
                      <span>{card.contactPhone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="opacity-50">W:</span>
                      <span>{card.contactWebsite}</span>
                    </div>
                    <div className="flex items-center gap-2 opacity-60 text-[10px] truncate max-w-[200px]">
                      <span>{card.contactAddress}</span>
                    </div>
                  </div>

                  {/* Minimal QR simulation square */}
                  <div
                    className="w-12 h-12 p-1.5 rounded-lg border flex flex-col justify-between shrink-0 bg-white/5"
                    style={{ borderColor: card.backColor.border || '#444' }}
                    title="Simulated scan-ready vector QR"
                  >
                    <div className="flex justify-between">
                      <div className="w-2.5 h-2.5 bg-current" />
                      <div className="w-2.5 h-2.5 bg-current" />
                    </div>
                    <div className="flex justify-between items-end">
                      <div className="w-2.5 h-2.5 bg-current" />
                      <div className="w-1.5 h-1.5 bg-current opacity-80" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Card Specifications & Controls */}
      <div className="mt-4 pt-3 border-t border-neutral-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div>
          <div className="text-neutral-400 font-mono text-[11px]">Finish / Paper Stock:</div>
          <div className="text-neutral-200 font-medium">{card.finish}</div>
        </div>
        <button
          type="button"
          onClick={() => onInspect && onInspect(card)}
          className="self-start sm:self-center inline-flex items-center gap-1.5 text-neutral-300 hover:text-white underline underline-offset-4 cursor-pointer"
        >
          <span>Inspect Specifications</span>
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  );
}
