import React from 'react';

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 py-12 px-5 sm:px-8 md:px-12 max-w-7xl mx-auto text-neutral-400 text-xs font-mono select-none">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span
            className="text-white text-lg tracking-tight font-medium"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Mainframe®
          </span>
          <span className="text-white text-xl">✳︎</span>
          <span className="text-neutral-500">|</span>
          <span>Graphic Design &amp; Printable Brand Materials</span>
        </div>

        <div className="flex items-center gap-6 text-neutral-300">
          <a href="#hero" className="hover:text-white transition-colors">
            Top ↑
          </a>
          <a href="#samples" className="hover:text-white transition-colors">
            Samples
          </a>
          <a href="#deliverables" className="hover:text-white transition-colors">
            What You Get
          </a>
          <a href="#pricing" className="hover:text-white transition-colors">
            ₹199 Pricing
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            Contact
          </a>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-neutral-900 flex flex-col sm:flex-row justify-between items-center gap-3 text-neutral-500 text-[11px]">
        <div>
          © {new Date().getFullYear()} Mainframe Design. All rights reserved. Registered Trademark.
        </div>
        <div className="text-center sm:text-right">
          Digital Deliverables Only • Commercial Print-Ready Standards (300 DPI CMYK)
        </div>
      </div>
    </footer>
  );
}
