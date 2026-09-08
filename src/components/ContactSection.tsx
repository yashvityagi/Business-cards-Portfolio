import React, { useState } from 'react';

interface ContactSectionProps {
  initialStyle?: string;
}

export function ContactSection({ initialStyle = '' }: ContactSectionProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [clientName, setClientName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [selectedStyle, setSelectedStyle] = useState(initialStyle || 'Minimal & Professional');
  const [clientNotes, setClientNotes] = useState('');

  const emailAddress = 'ogmainframe01@gmail.com';

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  const handleEmailSend = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Business Card Design Order [₹199] - ${businessName || clientName || 'Client Inquiry'}`);
    const body = encodeURIComponent(
      `Hello,\n\nI want to order a custom business card design for ₹199.\n\n` +
      `My Name: ${clientName || 'Not specified'}\n` +
      `Business / Brand: ${businessName || 'Not specified'}\n` +
      `Preferred Style: ${selectedStyle}\n\n` +
      `Notes / Vision:\n${clientNotes || 'Standard setup'}\n\nThank you!`
    );
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="relative z-10 py-24 px-5 sm:px-8 md:px-12 max-w-6xl mx-auto text-white border-t border-white/10"
    >
      {/* Category marker */}
      <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-neutral-400 mb-4">
        <span>05 / Contact</span>
        <span className="text-neutral-600">—</span>
        <span className="text-white">Get in Touch &amp; Direct Order</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Direct Channels (Email) */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-normal tracking-tight">
              Let&rsquo;s Create Your Brand&rsquo;s Calling Card.
            </h2>
            <p className="text-neutral-400 text-sm mt-3 font-light leading-relaxed">
              Send an email inquiry or submit your brief directly using the order form. Orders are confirmed within a few hours, with your initial design draft ready in 1–2 days.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="space-y-3 pt-2">
            {/* Email */}
            <div className="p-4 rounded-2xl bg-neutral-950/80 border border-neutral-800 flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-mono text-neutral-400">Direct Email</div>
                  <div className="text-sm font-medium text-white break-all">{emailAddress}</div>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-full border border-neutral-700 bg-neutral-900 text-xs font-mono text-neutral-300 hover:text-white hover:border-white transition-colors cursor-pointer"
                >
                  {copiedEmail ? 'Copied!' : 'Copy'}
                </button>
                <a
                  href={`mailto:${emailAddress}`}
                  className="px-3 py-1.5 rounded-full border border-neutral-700 bg-white text-black text-xs font-mono hover:bg-neutral-200 transition-colors cursor-pointer"
                >
                  Compose
                </a>
              </div>
            </div>

            {/* Turnaround & Guarantee Pill */}
            <div className="p-4 rounded-2xl bg-neutral-950/40 border border-neutral-800/80 flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 text-xs shrink-0 mt-0.5 font-mono">
                ⚡
              </div>
              <div>
                <div className="text-xs font-mono text-neutral-300">Fast Turnaround &amp; Revisions</div>
                <div className="text-xs text-neutral-500 mt-0.5 leading-relaxed font-light">
                  Direct communication for feedback, revisions, and high-resolution export files (PDF, PNG, JPG at 300 DPI CMYK).
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Quick Order / Custom Inquiry Form */}
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-neutral-950/90 border border-neutral-800/90 backdrop-blur-md">
          <div className="flex justify-between items-center mb-6 pb-4 border-b border-neutral-800">
            <div>
              <h3 className="text-xl font-normal text-white">Start Your Order</h3>
              <p className="text-xs text-neutral-400 font-mono mt-0.5">
                Lock in the ₹199 launch rate
              </p>
            </div>
            <span className="text-xs font-mono bg-white/10 text-neutral-300 px-3 py-1 rounded-full border border-white/20">
              1–2 Day Delivery
            </span>
          </div>

          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-neutral-400 mb-1.5">
                  Your Full Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Elena Vane"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-neutral-900/90 border border-neutral-800 text-white text-sm focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-neutral-400 mb-1.5">
                  Business / Brand Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Atelier Forme"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-neutral-900/90 border border-neutral-800 text-white text-sm focus:outline-none focus:border-white transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-neutral-400 mb-1.5">
                Preferred Design Aesthetic
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {['Minimal & Professional', 'Luxury & Premium', 'Creative & Modern'].map((style) => (
                  <button
                    key={style}
                    type="button"
                    onClick={() => setSelectedStyle(style)}
                    className={`py-2 px-3 rounded-xl text-xs font-mono text-center border cursor-pointer transition-all ${
                      selectedStyle === style
                        ? 'bg-white text-black border-white font-medium'
                        : 'bg-neutral-900 text-neutral-400 border-neutral-800 hover:text-white'
                    }`}
                  >
                    {style}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-neutral-400 mb-1.5">
                Notes, Color Preferences or Contact Details to Include
              </label>
              <textarea
                rows={3}
                placeholder="Include details like phone, email, address, website, or specific color schemes..."
                value={clientNotes}
                onChange={(e) => setClientNotes(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-neutral-900/90 border border-neutral-800 text-white text-sm focus:outline-none focus:border-white transition-colors resize-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={handleEmailSend}
                className="w-full py-3.5 px-6 rounded-full bg-white hover:bg-neutral-200 text-black text-xs sm:text-sm font-mono font-medium tracking-wide flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-lg"
              >
                <span>Send Order Details via Email (₹199)</span>
                <span aria-hidden="true">✉</span>
              </button>
            </div>

            <div className="text-[11px] font-mono text-neutral-500 text-center pt-1">
              Includes Front + Back design, 300 DPI print-ready PDF, PNG/JPG, 1 revision. Printing not included.
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
