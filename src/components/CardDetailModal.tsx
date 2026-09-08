import React from 'react';
import { CardSample } from '../types';
import { renderCardFront, renderCardBack } from './SampleCardVisuals';

interface CardDetailModalProps {
  card: CardSample | null;
  onClose: () => void;
  onOrderStyle: (cardTitle: string) => void;
}

export function CardDetailModal({ card, onClose, onOrderStyle }: CardDetailModalProps) {
  if (!card) return null;

  return (
    <div
      id="card-detail-modal-backdrop"
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="card-detail-modal-panel"
        className="relative w-full max-w-4xl bg-neutral-950 border border-neutral-800 rounded-3xl p-6 sm:p-8 text-white shadow-2xl my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 w-10 h-10 rounded-full border border-neutral-800 bg-neutral-900 text-neutral-400 hover:text-white hover:border-neutral-600 flex items-center justify-center cursor-pointer transition-colors"
        >
          ✕
        </button>

        {/* Header */}
        <div className="mb-6 pr-12">
          <div className="inline-block text-xs font-mono tracking-widest uppercase text-emerald-400 mb-1">
            {card.categoryLabel}
          </div>
          <h2 className="text-2xl sm:text-3xl font-normal tracking-tight">
            {card.title}
          </h2>
          <p className="text-sm text-neutral-400 mt-1">
            {card.subtitle} — {card.tagline}
          </p>
        </div>

        {/* Dual Card Display (Front & Back Side-by-Side) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          {/* Side A Front */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs font-mono text-neutral-400">
              <span>SIDE A (FRONT)</span>
              <span>300 DPI CMYK</span>
            </div>
            <div
              className="aspect-[1.75/1] rounded-xl border shadow-lg relative overflow-hidden"
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
                <div className="w-full h-full p-5 flex flex-col justify-between">
                  <div className="flex justify-between items-start text-xs font-mono opacity-70">
                    <span>{card.clientType}</span>
                    <span>VECTOR CMYK</span>
                  </div>
                  <div className="my-auto">
                    <div
                      className="text-xl sm:text-2xl font-normal"
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
                    </div>
                    <div className="text-xs opacity-75 mt-0.5" style={{ color: card.frontColor.accent }}>
                      {card.subtitle}
                    </div>
                  </div>
                  <div className="text-[10px] italic opacity-60 truncate">
                    &ldquo;{card.tagline}&rdquo;
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Side B Back */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs font-mono text-neutral-400">
              <span>SIDE B (BACK)</span>
              <span>PRINT READY</span>
            </div>
            <div
              className="aspect-[1.75/1] rounded-xl border shadow-lg relative overflow-hidden"
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
                <div className="w-full h-full p-5 flex flex-col justify-between">
                  <div className="flex justify-between items-start text-xs font-mono opacity-70">
                    <div>
                      <div className="font-medium text-sm">{card.personName}</div>
                      <div className="text-[11px]" style={{ color: card.backColor.accent }}>
                        {card.personRole}
                      </div>
                    </div>
                    <span className="text-[10px]">3.5" × 2"</span>
                  </div>
                  <div className="text-[11px] font-mono opacity-85 space-y-0.5">
                    <div>{card.contactEmail}</div>
                    <div>{card.contactPhone}</div>
                    <div>{card.contactWebsite}</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Specifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800 text-xs mb-6 font-mono">
          <div>
            <div className="text-neutral-500 uppercase tracking-wider text-[10px] mb-1">
              Print Dimensions
            </div>
            <div className="text-neutral-200">{card.aspectRatio}</div>
            <div className="text-neutral-400 text-[10px] mt-0.5">+ 3mm Bleed / Safe Zone</div>
          </div>
          <div>
            <div className="text-neutral-500 uppercase tracking-wider text-[10px] mb-1">
              Stock Finish
            </div>
            <div className="text-neutral-200">{card.finish}</div>
            <div className="text-neutral-400 text-[10px] mt-0.5">{card.recommendedPaper}</div>
          </div>
          <div>
            <div className="text-neutral-500 uppercase tracking-wider text-[10px] mb-1">
              Files Delivered
            </div>
            <div className="text-neutral-200">PDF, PNG, JPG (Front+Back)</div>
            <div className="text-neutral-400 text-[10px] mt-0.5">Vector Typography (300 DPI)</div>
          </div>
        </div>

        {/* Design Notes */}
        <div className="mb-6 text-xs text-neutral-400 leading-relaxed">
          <strong className="text-neutral-300 font-normal">Design Breakdown:</strong> {card.designNotes}
        </div>

        {/* Footer Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-neutral-800">
          <div className="text-xs text-neutral-400 text-center sm:text-left">
            Launch Price: <span className="text-white font-bold text-base">₹199</span>{' '}
            <span className="line-through text-neutral-500">₹399</span> • 1–2 Day Delivery
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-full border border-neutral-700 text-xs font-mono text-neutral-300 hover:text-white hover:border-neutral-500 transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onOrderStyle(card.title);
              }}
              className="flex-1 sm:flex-none px-6 py-2.5 rounded-full bg-white text-black text-xs font-mono font-medium hover:bg-neutral-200 transition-colors cursor-pointer"
            >
              Order This Style (₹199)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
