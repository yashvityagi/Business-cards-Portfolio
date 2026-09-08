import React from 'react';

interface VisualProps {
  className?: string;
}

// 1. PRETTY THINGS INSIDE
export function PrettyThingsFront({ className = '' }: VisualProps) {
  return (
    <div className={`relative w-full h-full bg-[#F5C7CD] text-[#C9184A] p-5 sm:p-6 flex flex-col items-center justify-between select-none overflow-hidden ${className}`}>
      {/* Floating Sparkle Dots */}
      <div className="absolute top-4 left-6 w-1.5 h-1.5 rounded-full bg-[#C9184A] opacity-75" />
      <div className="absolute top-8 left-12 w-1 h-1 rounded-full bg-[#C9184A] opacity-60" />
      <div className="absolute top-6 right-8 w-1.5 h-1.5 rounded-full bg-[#C9184A] opacity-75" />
      <div className="absolute top-9 right-16 w-1 h-1 rounded-full bg-[#C9184A] opacity-60" />

      {/* Ribbon Bow */}
      <div className="mt-1 flex flex-col items-center">
        <svg viewBox="0 0 120 50" className="w-16 sm:w-20 h-auto text-[#C9184A]" fill="currentColor">
          {/* Bow Center Knot */}
          <ellipse cx="60" cy="22" rx="4.5" ry="4" />
          {/* Left Loop */}
          <path d="M57 20 C45 6, 20 10, 24 23 C27 32, 53 24, 57 22 Z" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
          {/* Right Loop */}
          <path d="M63 20 C75 6, 100 10, 96 23 C93 32, 67 24, 63 22 Z" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
          {/* Left Ribbon Tail */}
          <path d="M57 24 Q45 35 34 45 Q36 43 42 41" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          {/* Right Ribbon Tail */}
          <path d="M63 24 Q75 35 86 45 Q84 43 78 41" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        </svg>
      </div>

      {/* Main Bold Title */}
      <div className="text-center my-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-[1.05] font-serif">
          pretty things
          <br />
          inside
        </h2>
      </div>

      {/* Subtitle */}
      <div className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.25em] text-[#C9184A]/80 mb-1">
        BUSINESS NAME
      </div>
    </div>
  );
}

export function PrettyThingsBack({ className = '' }: VisualProps) {
  return (
    <div className={`relative w-full h-full bg-[#F5C7CD] text-[#C9184A] p-4 sm:p-5 flex flex-col justify-between select-none overflow-hidden ${className}`}>
      {/* Top Section with Bow and Headline */}
      <div className="flex items-start gap-3">
        {/* Left hanging ribbon */}
        <div className="shrink-0 pt-0.5">
          <svg viewBox="0 0 50 80" className="w-8 sm:w-10 h-auto text-[#C9184A]" fill="none" stroke="currentColor">
            <ellipse cx="22" cy="14" rx="3.5" ry="3" fill="currentColor" />
            <path d="M20 12 C12 2, 2 5, 4 14 C6 20, 18 16, 20 14" strokeWidth="3" />
            <path d="M24 12 C32 2, 42 5, 40 14 C38 20, 26 16, 24 14" strokeWidth="3" />
            <path d="M20 15 Q14 38 16 65 Q18 58 20 54" strokeWidth="3" strokeLinecap="round" />
            <circle cx="8" cy="28" r="1.5" fill="currentColor" stroke="none" />
            <circle cx="24" cy="42" r="1.2" fill="currentColor" stroke="none" />
          </svg>
        </div>
        <div className="flex-1">
          <h3 className="text-lg sm:text-2xl font-black font-serif leading-tight">
            thank you
            <br />
            for your order
          </h3>
          <p className="text-[9px] sm:text-[10px] text-[#A0143B] uppercase tracking-wider font-sans leading-tight mt-1 max-w-[260px]">
            Your support of our small business means the world to us. We hope your order brings some extra joy to your day!
          </p>
        </div>
      </div>

      <div className="w-full h-px bg-[#C9184A]/30 my-1" />

      {/* Bottom Row */}
      <div className="flex items-end justify-between gap-2 text-[9px] sm:text-[10px]">
        {/* QR Code */}
        <div className="flex items-center gap-1.5">
          <span className="text-[8px] font-mono font-bold tracking-widest [writing-mode:vertical-rl] rotate-180 opacity-75">
            SCAN ME
          </span>
          <div className="w-11 h-11 sm:w-12 sm:h-12 bg-white p-1 rounded-sm flex flex-col justify-between shadow-sm">
            <div className="flex justify-between">
              <div className="w-3.5 h-3.5 border-2 border-[#C9184A] p-0.5"><div className="w-full h-full bg-[#C9184A]" /></div>
              <div className="w-3.5 h-3.5 border-2 border-[#C9184A] p-0.5"><div className="w-full h-full bg-[#C9184A]" /></div>
            </div>
            <div className="flex justify-between items-end">
              <div className="w-3.5 h-3.5 border-2 border-[#C9184A] p-0.5"><div className="w-full h-full bg-[#C9184A]" /></div>
              <div className="w-1.5 h-1.5 bg-[#C9184A]" />
            </div>
          </div>
        </div>

        {/* Socials */}
        <div className="flex flex-col items-center text-center text-[8px] sm:text-[9px] font-mono leading-tight">
          <div className="flex items-center gap-1.5 mb-0.5">
            <span className="w-3.5 h-3.5 rounded-full bg-[#C9184A] text-white flex items-center justify-center font-bold text-[7px]">IG</span>
            <span className="w-3.5 h-3.5 rounded-full bg-[#C9184A] text-white flex items-center justify-center font-bold text-[7px]">P</span>
            <span className="w-3.5 h-3.5 rounded-full bg-[#C9184A] text-white flex items-center justify-center font-bold text-[7px]">f</span>
          </div>
          <span className="font-bold">@yourhandle</span>
          <span className="opacity-80">yourwebsite.com</span>
          <span className="opacity-70 text-[7px] uppercase tracking-wider">BUSINESS NAME</span>
        </div>

        {/* Coupon Box */}
        <div className="border border-[#C9184A] p-1 sm:p-1.5 text-center rounded-sm bg-white/40">
          <div className="text-[7px] uppercase font-bold tracking-tight leading-none text-[#A0143B]">
            Save on your next order with code:
          </div>
          <div className="text-[10px] sm:text-[11px] font-black tracking-widest text-[#C9184A] mt-0.5 font-mono">
            THANKS15
          </div>
        </div>
      </div>
    </div>
  );
}


// 2. BUNNY'S BAKESHOP
export function BunnysBakeshopFront({ className = '' }: VisualProps) {
  return (
    <div className={`relative w-full h-full bg-[#FBF5DC] text-[#7A5438] p-4 sm:p-6 flex flex-col items-center justify-center select-none overflow-hidden border border-[#D5C29E] ${className}`}>
      {/* Victorian Ornate Outer Border */}
      <div className="absolute inset-2 sm:inset-3 border-2 border-[#C2A57C] rounded-sm pointer-events-none" />
      <div className="absolute inset-3 sm:inset-4 border border-[#C2A57C]/60 rounded-sm pointer-events-none" />

      {/* Corner Scroll Flourishes */}
      <svg className="absolute top-3 left-3 w-8 h-8 text-[#C2A57C]" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 20 C4 10, 10 4, 20 4 C15 4, 10 10, 10 16 C10 24, 22 22, 28 14" />
      </svg>
      <svg className="absolute top-3 right-3 w-8 h-8 text-[#C2A57C] -scale-x-100" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 20 C4 10, 10 4, 20 4 C15 4, 10 10, 10 16 C10 24, 22 22, 28 14" />
      </svg>
      <svg className="absolute bottom-3 left-3 w-8 h-8 text-[#C2A57C] -scale-y-100" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 20 C4 10, 10 4, 20 4 C15 4, 10 10, 10 16 C10 24, 22 22, 28 14" />
      </svg>
      <svg className="absolute bottom-3 right-3 w-8 h-8 text-[#C2A57C] -scale-x-100 -scale-y-100" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 20 C4 10, 10 4, 20 4 C15 4, 10 10, 10 16 C10 24, 22 22, 28 14" />
      </svg>

      {/* Flanking Bunnies & Center Cartouche */}
      <div className="relative z-10 flex items-center justify-between w-full max-w-sm px-2">
        {/* Left Bunny Baker */}
        <div className="hidden sm:flex flex-col items-center text-[#966E48] scale-90">
          <svg viewBox="0 0 60 90" className="w-12 h-auto" fill="none" stroke="currentColor" strokeWidth="1.6">
            {/* Chef Hat & Ears */}
            <path d="M22 22 C18 10, 12 10, 16 26" />
            <path d="M38 22 C42 10, 48 10, 44 26" />
            <path d="M20 22 C16 16, 44 16, 40 22" />
            {/* Face */}
            <ellipse cx="30" cy="34" rx="12" ry="10" />
            <circle cx="26" cy="33" r="1.5" fill="currentColor" />
            <circle cx="34" cy="33" r="1.5" fill="currentColor" />
            {/* Dress / Apron */}
            <path d="M20 44 L14 74 L46 74 L40 44 Z" />
            {/* Holding Tiered Cake */}
            <rect x="42" y="38" width="14" height="6" rx="1" fill="#FFF5D6" />
            <rect x="44" y="32" width="10" height="6" rx="1" fill="#FFF5D6" />
            <circle cx="49" cy="30" r="1.5" fill="currentColor" />
          </svg>
        </div>

        {/* Center Cartouche */}
        <div className="relative px-6 py-4 rounded-full border-2 border-[#C2A57C] text-center bg-[#FDF8E4]/80 shadow-sm flex-1 mx-2">
          {/* Top cartouche crest */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-[#C2A57C]">
            <svg viewBox="0 0 30 14" className="w-6 h-3" fill="currentColor">
              <path d="M15 0 L18 8 L28 4 L20 12 L15 14 L10 12 L2 4 L12 8 Z" />
            </svg>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif tracking-tight text-[#6D492D] font-bold leading-tight">
            Bunny&apos;s
            <br />
            Bakeshop
          </h2>
          <div className="text-[11px] font-serif italic text-[#966E48] mt-0.5">
            Full of love and sugar
          </div>
        </div>

        {/* Right Bunny Baker */}
        <div className="hidden sm:flex flex-col items-center text-[#966E48] scale-90 -scale-x-100">
          <svg viewBox="0 0 60 90" className="w-12 h-auto" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M22 22 C18 10, 12 10, 16 26" />
            <path d="M38 22 C42 10, 48 10, 44 26" />
            <path d="M20 22 C16 16, 44 16, 40 22" />
            <ellipse cx="30" cy="34" rx="12" ry="10" />
            <circle cx="26" cy="33" r="1.5" fill="currentColor" />
            <circle cx="34" cy="33" r="1.5" fill="currentColor" />
            <path d="M20 44 L14 74 L46 74 L40 44 Z" />
            <rect x="42" y="38" width="14" height="6" rx="1" fill="#FFF5D6" />
            <rect x="44" y="32" width="10" height="6" rx="1" fill="#FFF5D6" />
            <circle cx="49" cy="30" r="1.5" fill="currentColor" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export function BunnysBakeshopBack({ className = '' }: VisualProps) {
  return (
    <div className={`relative w-full h-full bg-[#FBF5DC] text-[#7A5438] p-4 sm:p-5 flex flex-col justify-between select-none overflow-hidden border border-[#D5C29E] ${className}`}>
      {/* Top Header & Postcard Stamp */}
      <div className="flex items-start justify-between">
        <div className="pt-1">
          <h3 className="text-lg sm:text-xl font-serif font-bold text-[#6D492D]">
            Bunny&apos;s Bakeshop
          </h3>
        </div>

        {/* Postage Stamp */}
        <div className="border border-dashed border-[#DE7896] bg-[#FFEBF0] p-1.5 rounded-sm flex items-center gap-1.5 shadow-sm">
          <svg viewBox="0 0 30 30" className="w-6 h-6 text-[#DE7896]" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="15" cy="15" r="12" />
            <path d="M11 11 C11 6, 19 6, 19 11" />
            <rect x="9" y="17" width="12" height="6" rx="1" />
          </svg>
          <div className="text-[8px] font-mono text-[#DE7896] leading-none">
            POSTAGE
            <br />
            STAMP
          </div>
        </div>
      </div>

      {/* Middle Postcard Grid */}
      <div className="grid grid-cols-2 gap-3 items-center my-auto">
        {/* Seal Medallion */}
        <div className="flex flex-col items-center justify-center p-2 rounded-full border border-[#C2A57C]/70 text-center scale-90">
          <div className="text-[8px] font-serif font-bold uppercase tracking-wider text-[#6D492D]">
            Bunny&apos;s Bakeshop
          </div>
          <div className="w-8 h-8 rounded-full border border-[#C2A57C] my-1 flex items-center justify-center text-[10px]">
            🐰
          </div>
          <div className="text-[7px] italic text-[#966E48]">Full of love and sugar</div>
        </div>

        {/* Postcard Lines & Address */}
        <div className="border-l border-[#C2A57C]/50 pl-3 space-y-1 text-[9px] sm:text-[10px] font-serif">
          <div className="border-b border-dashed border-[#C2A57C]/60 pb-0.5">
            1234 Patisserie ST., Charleston, SC
          </div>
          <div className="border-b border-dashed border-[#C2A57C]/60 pb-0.5 text-[#966E48]">
            @bunnysbakeshop
          </div>
          <div className="border-b border-dashed border-[#C2A57C]/60 pb-0.5">
            www.bunnysbakeshop.com
          </div>
          <div className="border-b border-dashed border-[#C2A57C]/60 pb-0.5">
            555 - 555 - 5555
          </div>
          <div className="text-right pt-0.5 font-serif italic text-xs text-[#6D492D]">
            Bridget Smith
          </div>
        </div>
      </div>

      {/* Bottom Row of Vintage Baking Icons */}
      <div className="flex items-center justify-between border-t border-[#C2A57C]/40 pt-1 text-[11px] opacity-75">
        <span title="Flour">🌾</span>
        <span title="Milk">🥛</span>
        <span title="Teacup">☕</span>
        <span title="Cupcake">🧁</span>
        <span title="Timer">⏳</span>
        <span title="Croissant">🥐</span>
        <span title="Cake">🎂</span>
        <span title="Dessert">🍨</span>
      </div>
    </div>
  );
}


// 3. SOPHIA BENNETT (Interior Designer)
export function SophiaBennettFront({ className = '' }: VisualProps) {
  return (
    <div className={`relative w-full h-full bg-[#4A1521] text-[#F3EAE0] p-5 sm:p-6 flex flex-col items-center justify-center select-none overflow-hidden ${className}`}>
      {/* Fluid Curves */}
      <svg className="absolute top-0 left-0 w-32 h-32 text-white/20" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M 0,20 Q 30,10 50,40 T 100,20" />
      </svg>
      <svg className="absolute bottom-0 right-0 w-32 h-32 text-white/20" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M 0,80 Q 40,60 60,90 T 100,70" />
      </svg>

      {/* Butterfly Illustration */}
      <div className="mb-2">
        <svg viewBox="0 0 100 60" className="w-16 sm:w-20 h-auto text-white/95" fill="none" stroke="currentColor" strokeWidth="1.5">
          {/* Wings */}
          <path d="M 50,30 Q 30,5 5,10 Q 0,28 35,38 Q 20,55 35,55 Q 45,45 50,30 Z" />
          <path d="M 50,30 Q 70,5 95,10 Q 100,28 65,38 Q 80,55 65,55 Q 55,45 50,30 Z" />
          {/* Internal Wing Struts */}
          <path d="M 50,30 Q 25,18 15,16 M 50,30 Q 30,26 22,30 M 50,30 Q 38,40 32,48" strokeWidth="0.8" opacity="0.7" />
          <path d="M 50,30 Q 75,18 85,16 M 50,30 Q 70,26 78,30 M 50,30 Q 62,40 68,48" strokeWidth="0.8" opacity="0.7" />
          {/* Body & Antennae */}
          <line x1="50" y1="20" x2="50" y2="44" strokeWidth="2" strokeLinecap="round" />
          <path d="M 50,20 Q 44,14 42,10 M 50,20 Q 56,14 58,10" strokeWidth="1" />
        </svg>
      </div>

      {/* Typography */}
      <h2 className="text-xl sm:text-2xl font-serif tracking-tight text-white font-medium">
        Sophia Bennett
      </h2>
      <p className="text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-[#D2B5A5] mt-1 font-mono">
        INTERIOR DESIGNER
      </p>
    </div>
  );
}

export function SophiaBennettBack({ className = '' }: VisualProps) {
  return (
    <div className={`relative w-full h-full bg-[#EFE6DB] text-[#4A1521] p-5 flex items-center justify-between select-none overflow-hidden ${className}`}>
      {/* Large delicate butterfly wing background on left */}
      <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-44 h-44 opacity-25 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full text-[#4A1521]" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M 90,50 Q 50,10 10,20 Q 0,55 60,70 Q 30,95 60,95 Q 80,75 90,50 Z" />
          <path d="M 90,50 Q 45,30 25,28 M 90,50 Q 55,42 40,50 M 90,50 Q 65,70 55,85" strokeWidth="0.8" />
        </svg>
      </div>

      {/* Wavy Accent Line */}
      <svg className="absolute bottom-2 right-4 w-20 h-20 text-[#4A1521]/20 pointer-events-none" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M 0,90 Q 40,70 60,100 T 100,80" />
      </svg>

      <div className="relative z-10 w-full flex flex-col items-end text-right space-y-2 text-[10px] sm:text-[11px] font-sans">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[#381018] font-medium">+1 (415) 782-9643</span>
          <span className="w-5 h-5 rounded-full bg-[#4A1521] text-white flex items-center justify-center text-[9px]">📞</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-mono text-[#381018]">hello@aurainteriors.com</span>
          <span className="w-5 h-5 rounded-full bg-[#4A1521] text-white flex items-center justify-center text-[9px]">✉️</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-mono text-[#381018]">www.aurainteriors.com</span>
          <span className="w-5 h-5 rounded-full bg-[#4A1521] text-white flex items-center justify-center text-[9px]">🌐</span>
        </div>
        <div className="flex items-start gap-2 max-w-[200px] text-right">
          <span className="text-[9px] text-[#5A2C35] leading-tight">
            125 Harmony Street, Suite 204
            <br />
            San Francisco, CA 94107
          </span>
          <span className="w-5 h-5 rounded-full bg-[#4A1521] text-white flex items-center justify-center text-[9px] shrink-0">📍</span>
        </div>
      </div>
    </div>
  );
}


// 4. COFFEE CO.
export function CoffeeCoFront({ className = '' }: VisualProps) {
  return (
    <div className={`relative w-full h-full bg-[#C79C71] text-[#3E2314] p-5 flex items-center justify-between select-none overflow-hidden ${className}`}>
      {/* Dark Brown Organic Wave on Right */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-[#5A351E] rounded-l-[40px] pointer-events-none" />

      {/* Left Iced Coffee Illustration */}
      <div className="relative z-10 flex items-center gap-4">
        <div className="w-14 sm:w-16 h-20 bg-white/40 border-2 border-[#3E2314] rounded-b-xl rounded-t-sm p-1 flex flex-col justify-between shadow-md relative">
          {/* Green Straw */}
          <div className="absolute -top-4 right-5 w-2 h-7 bg-emerald-600 border border-[#3E2314] -rotate-12 rounded-sm" />
          <div className="w-full h-2 bg-[#3E2314] rounded-t-xs" />
          {/* Ice Cubes inside */}
          <div className="flex-1 bg-[#6A4026] rounded-b-md p-1.5 flex flex-wrap gap-1 content-center">
            <div className="w-3 h-3 border border-white/60 bg-white/20 rounded-xs" />
            <div className="w-3 h-3 border border-white/60 bg-white/20 rounded-xs" />
            <div className="w-3.5 h-3.5 border border-white/60 bg-white/20 rounded-xs" />
          </div>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-black tracking-tight font-serif text-[#3E2314]">
            Coffee Co.
          </h2>
          <span className="text-[10px] font-mono tracking-widest uppercase font-bold text-[#5A351E]">
            OWNER
          </span>
        </div>
      </div>

      {/* Right Contact Details */}
      <div className="relative z-10 text-right text-[9px] sm:text-[10px] text-white/90 font-mono space-y-1 pr-1">
        <div>+123-456-7890</div>
        <div className="text-[8px] opacity-80">123 Anywhere St., Any City</div>
        <div className="text-[8px] opacity-90">www.reallygreatsite.com</div>
      </div>
    </div>
  );
}

export function CoffeeCoBack({ className = '' }: VisualProps) {
  return (
    <div className={`relative w-full h-full bg-[#C79C71] text-[#3E2314] p-5 flex flex-col items-center justify-center select-none overflow-hidden ${className}`}>
      {/* Dark Brown Wave on Left */}
      <div className="absolute left-0 top-0 bottom-0 w-1/4 bg-[#5A351E] rounded-r-[50px] pointer-events-none" />

      {/* Center Iced Coffee */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-16 h-22 bg-white/40 border-2 border-[#3E2314] rounded-b-xl rounded-t-sm p-1 flex flex-col justify-between shadow-md relative mb-2">
          <div className="absolute -top-4 right-5 w-2 h-7 bg-emerald-600 border border-[#3E2314] -rotate-12 rounded-sm" />
          <div className="w-full h-2 bg-[#3E2314] rounded-t-xs" />
          <div className="flex-1 bg-[#6A4026] rounded-b-md p-1.5 flex flex-wrap gap-1 content-center">
            <div className="w-3.5 h-3.5 border border-white/60 bg-white/20 rounded-xs" />
            <div className="w-3.5 h-3.5 border border-white/60 bg-white/20 rounded-xs" />
            <div className="w-3.5 h-3.5 border border-white/60 bg-white/20 rounded-xs" />
          </div>
        </div>
        <h3 className="text-xl font-black font-serif text-[#3E2314]">
          Coffee Co.
        </h3>
        <span className="text-[10px] font-mono tracking-widest uppercase font-bold text-[#5A351E]">
          OWNER
        </span>
      </div>
    </div>
  );
}


// 5. SWEET CRUMBE (Cookies & Bakery)
export function SweetCrumbeFront({ className = '' }: VisualProps) {
  return (
    <div className={`relative w-full h-full bg-white text-[#4A2612] p-4 sm:p-5 flex items-center justify-between select-none overflow-hidden ${className}`}>
      {/* Yellow Wave Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-7 bg-[#FDE27F] rounded-t-full pointer-events-none opacity-80" />

      {/* Realistic Cookie on Left */}
      <div className="relative z-10 shrink-0">
        <div className="w-20 sm:w-24 h-20 sm:h-24 rounded-full bg-[#D49855] border-2 border-[#915B25] p-2 flex flex-wrap gap-1.5 items-center justify-center shadow-lg relative -left-4">
          <div className="w-3.5 h-3.5 rounded-full bg-[#3B1E0E]" />
          <div className="w-4 h-3 rounded-full bg-[#3B1E0E]" />
          <div className="w-3 h-4 rounded-full bg-[#3B1E0E]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#3B1E0E]" />
          <div className="w-3 h-3 rounded-full bg-[#3B1E0E]" />
        </div>
      </div>

      {/* Center Title */}
      <div className="relative z-10 text-center flex-1 px-2">
        <h2 className="text-xl sm:text-2xl font-serif font-black tracking-tight leading-none text-[#4A2612]">
          SWEET
          <br />
          CRUMBE
        </h2>
        <p className="text-[9px] sm:text-[10px] font-serif italic text-[#7C4824] mt-1">
          Fresh bakery happiness in every bite
        </p>
      </div>

      {/* QR Code & Cashews */}
      <div className="relative z-10 flex flex-col items-center gap-1">
        <div className="w-12 h-12 bg-white border border-[#4A2612] p-1 rounded-sm shadow-sm flex flex-col justify-between">
          <div className="flex justify-between">
            <div className="w-3 h-3 bg-[#4A2612]" />
            <div className="w-3 h-3 bg-[#4A2612]" />
          </div>
          <div className="flex justify-between items-end">
            <div className="w-3 h-3 bg-[#4A2612]" />
            <div className="w-1.5 h-1.5 bg-[#4A2612]" />
          </div>
        </div>
        <div className="text-[12px]" title="Cashews">
          🥜
        </div>
      </div>
    </div>
  );
}

export function SweetCrumbeBack({ className = '' }: VisualProps) {
  return (
    <div className={`relative w-full h-full bg-white text-[#4A2612] p-4 sm:p-5 flex items-center justify-between select-none overflow-hidden ${className}`}>
      {/* Top Yellow Butter Wave */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-[#FDE27F] rounded-b-full pointer-events-none opacity-80" />

      {/* Contact Details on Left */}
      <div className="relative z-10 space-y-1 text-[9px] sm:text-[10px] font-mono">
        <div className="flex items-center gap-1.5">
          <span>📞</span>
          <span>1912345678</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span>✉️</span>
          <span>sweetcrumbs@emil.com</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span>🌐</span>
          <span>www.sweetcrume</span>
        </div>
        <div className="flex items-center gap-1.5 text-[8px] opacity-80">
          <span>📍</span>
          <span>99 street name, city CA,12345</span>
        </div>
      </div>

      {/* Cookie on Right */}
      <div className="relative z-10 shrink-0">
        <div className="w-20 sm:w-24 h-20 sm:h-24 rounded-full bg-[#D49855] border-2 border-[#915B25] p-2 flex flex-wrap gap-1.5 items-center justify-center shadow-lg relative -right-3">
          <div className="w-3 h-3 rounded-full bg-[#3B1E0E]" />
          <div className="w-3.5 h-3.5 rounded-full bg-[#3B1E0E]" />
          <div className="w-4 h-3.5 rounded-full bg-[#3B1E0E]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#3B1E0E]" />
        </div>
      </div>
    </div>
  );
}


// 6. ALISON BROWN (70s Retro Nail Tech)
export function AlisonBrownFront({ className = '' }: VisualProps) {
  return (
    <div className={`relative w-full h-full bg-[#FCE6E9] p-5 flex flex-col items-center justify-center select-none overflow-hidden ${className}`}>
      {/* Retro 70s Wavy Stripes */}
      <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-90">
        <div className="w-full h-1/4 bg-[#B9445C] rounded-b-[60px]" />
        <div className="w-full h-1/4 bg-[#DE758E] rounded-b-[50px]" />
        <div className="w-full h-1/4 bg-[#F59EB0] rounded-b-[40px]" />
      </div>

      {/* Sparkles */}
      <div className="absolute top-4 left-6 text-[#781F34] text-sm">✦</div>
      <div className="absolute bottom-5 right-8 text-[#781F34] text-sm">✦</div>

      {/* Center 70s Bubble Typography */}
      <div className="relative z-10 text-center drop-shadow-md">
        <h2 className="text-3xl sm:text-4xl font-black font-serif italic text-white tracking-tight stroke-[#781F34]">
          Alison Brown
        </h2>
        <div className="inline-block mt-2 px-3 py-0.5 rounded-full bg-[#781F34] text-white text-[9px] sm:text-[10px] font-mono uppercase tracking-widest font-bold">
          NAIL TECH
        </div>
      </div>
    </div>
  );
}

export function AlisonBrownBack({ className = '' }: VisualProps) {
  return (
    <div className={`relative w-full h-full bg-[#FFF6F3] text-[#781F34] p-4 sm:p-5 flex flex-col justify-between select-none overflow-hidden ${className}`}>
      {/* Bottom Retro Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-r from-[#B9445C] via-[#DE758E] to-[#F59EB0]" />

      {/* Top Header */}
      <div className="text-center">
        <h3 className="text-lg sm:text-xl font-serif font-black italic">
          ✦ Alison Brown ✦
        </h3>
        <div className="text-[8px] font-mono tracking-widest uppercase opacity-75">
          NAIL TECHNICIAN
        </div>
      </div>

      {/* Middle Grid */}
      <div className="grid grid-cols-2 gap-3 items-center border-t border-[#781F34]/20 pt-2">
        {/* Left QR & Socials */}
        <div className="flex items-center gap-2">
          <div className="w-11 h-11 bg-white border border-[#781F34] p-1 rounded-sm shadow-sm flex flex-col justify-between">
            <div className="flex justify-between">
              <div className="w-3 h-3 bg-[#781F34]" />
              <div className="w-3 h-3 bg-[#781F34]" />
            </div>
            <div className="flex justify-between items-end">
              <div className="w-3 h-3 bg-[#781F34]" />
              <div className="w-1.5 h-1.5 bg-[#781F34]" />
            </div>
          </div>
          <div className="text-[8px] font-mono leading-tight opacity-90">
            <div>IG • FB • TikTok</div>
            <div className="font-bold">@supercuteusername</div>
          </div>
        </div>

        {/* Right Info */}
        <div className="border-l border-[#781F34]/20 pl-2 space-y-0.5 text-[8px] sm:text-[9px] font-sans">
          <div className="font-serif font-bold text-[#781F34]">Your Business Name</div>
          <div>📍 Street Name, City, State</div>
          <div>🌐 supercutewebsite.com</div>
          <div>✉️ supercute@email.com</div>
          <div>📞 123-456-7890</div>
        </div>
      </div>
    </div>
  );
}


// 7. THANK YOU FOR YOUR ORDER (Blush Nude)
export function ThankYouFront({ className = '' }: VisualProps) {
  return (
    <div className={`relative w-full h-full bg-[#DAC2BB] text-[#543224] p-5 sm:p-6 flex flex-col items-center justify-center select-none overflow-hidden ${className}`}>
      {/* Palm Shadow Simulation */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/10 pointer-events-none" />

      {/* Layered Typography: Large White Serif + Cursive Script Overlay */}
      <div className="relative text-center">
        {/* White Base Serif */}
        <div className="text-4xl sm:text-5xl md:text-6xl font-serif font-black text-white/90 tracking-tight leading-[0.9]">
          thank
          <br />
          you
        </div>

        {/* Cursive Bronze Script Overlay */}
        <div className="absolute inset-0 flex items-center justify-center text-xl sm:text-2xl font-serif italic text-[#543224] tracking-normal -rotate-6 pt-2 font-bold drop-shadow-sm">
          for your order ♥
        </div>
      </div>
    </div>
  );
}

export function ThankYouBack({ className = '' }: VisualProps) {
  return (
    <div className={`relative w-full h-full bg-[#DAC2BB] text-[#543224] p-4 sm:p-5 flex flex-col justify-between select-none overflow-hidden ${className}`}>
      {/* Top Header & Bronze QR */}
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-base sm:text-lg font-serif font-black text-white/90 leading-tight">
            thank you
          </div>
          <div className="text-xs font-serif italic text-[#543224] font-bold">
            for your order ♥
          </div>
        </div>

        {/* Bronze QR */}
        <div className="w-11 h-11 bg-white/90 border border-[#543224] p-1 rounded-sm shadow-sm flex flex-col justify-between shrink-0">
          <div className="flex justify-between">
            <div className="w-3 h-3 bg-[#543224]" />
            <div className="w-3 h-3 bg-[#543224]" />
          </div>
          <div className="flex justify-between items-end">
            <div className="w-3 h-3 bg-[#543224]" />
            <div className="w-1.5 h-1.5 bg-[#543224]" />
          </div>
        </div>
      </div>

      {/* Middle Support Text */}
      <p className="text-[8px] sm:text-[9px] uppercase tracking-wider font-sans leading-relaxed text-[#543224]/90 max-w-[280px]">
        YOUR ORDER MEANS THE WORLD-THANK YOU FOR SUPPORTING SMALL BUSINESSES LIKE MINE AND ENABLING ME TO DO WHAT I LOVE.
      </p>

      {/* Bottom Review & Stars */}
      <div className="flex items-end justify-between border-t border-[#543224]/20 pt-1 text-[8px] sm:text-[9px]">
        <div>
          <div className="font-mono">@socialmedianame</div>
          <div className="italic font-serif text-[10px]">business name</div>
        </div>
        <div className="text-right">
          <div className="text-[8px] font-serif">love what you got? leave us a review!</div>
          <div className="text-amber-700 text-[10px]">★★★★★</div>
        </div>
      </div>
    </div>
  );
}


// 8. BEAUTY SALON (Navya Jain)
export function BeautySalonFront({ className = '' }: VisualProps) {
  return (
    <div className={`relative w-full h-full bg-[#FDE2DF] text-[#3B1218] p-5 flex flex-col items-center justify-center select-none overflow-hidden ${className}`}>
      {/* Pastel Pink Curved Shapes */}
      <div className="absolute top-0 right-0 w-48 h-32 bg-[#F9BCB6] rounded-bl-full pointer-events-none opacity-80" />
      <div className="absolute bottom-0 left-0 w-36 h-24 bg-[#E78D87] rounded-tr-full pointer-events-none opacity-60" />

      {/* Elegant Swash Typography */}
      <div className="relative z-10 text-center">
        <h2 className="text-3xl sm:text-4xl font-serif tracking-tight leading-tight font-normal text-[#3B1218]">
          Beauty
          <br />
          Salon
        </h2>
        <div className="text-[9px] sm:text-[10px] font-mono tracking-widest text-[#7C353E] mt-3">
          www.seekgraphics.com
        </div>
      </div>
    </div>
  );
}

export function BeautySalonBack({ className = '' }: VisualProps) {
  return (
    <div className={`relative w-full h-full bg-[#FFF5F2] text-[#3B1218] flex select-none overflow-hidden ${className}`}>
      {/* Left Pink Block */}
      <div className="w-1/3 bg-[#FDE2DF] p-3 flex flex-col justify-between border-r border-[#E78D87]/40">
        <div className="text-base sm:text-lg font-serif leading-tight font-normal text-[#3B1218] mt-auto">
          Beauty
          <br />
          Salon
        </div>
      </div>

      {/* Right Cream Contact Block */}
      <div className="w-2/3 p-3 sm:p-4 flex flex-col justify-between text-[9px] sm:text-[10px]">
        <div>
          <div className="text-sm sm:text-base font-serif font-bold text-[#A83842]">
            Navya Jain
          </div>
          <div className="text-[8px] uppercase tracking-wider text-neutral-600 font-mono">
            Beautician
          </div>
        </div>

        <div className="space-y-1 font-mono text-[8px] sm:text-[9px] opacity-90 my-1">
          <div>📞 +91 99999-99999</div>
          <div>📍 ADDRESS</div>
          <div>✉️ EMAIL ID</div>
          <div>🌐 seekgraphics.com</div>
        </div>

        <div className="text-[7px] font-mono tracking-widest uppercase border-t border-[#A83842]/20 pt-1 text-[#A83842]">
          FACIAL • BRIDAL • MANICURE • PEDICURE
        </div>
      </div>
    </div>
  );
}


// 9. FRESH BAR (Citrus & Juice)
export function FreshBarFront({ className = '' }: VisualProps) {
  return (
    <div className={`relative w-full h-full bg-[#FDF7E7] text-[#4A2D18] p-5 flex flex-col items-center justify-center select-none overflow-hidden ${className}`}>
      {/* Leaves in corners */}
      <div className="absolute top-2 left-2 text-emerald-700 text-xl rotate-45">🍃</div>
      <div className="absolute bottom-2 right-2 text-emerald-700 text-xl -rotate-45">🍃</div>

      {/* Sliced Orange Citrus Wheel */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-20 sm:w-24 h-20 sm:h-24 rounded-full bg-[#FFA01C] border-4 border-[#E07E00] p-1.5 flex items-center justify-center shadow-md relative">
          {/* Segments */}
          <div className="w-full h-full rounded-full border-2 border-white/80 grid grid-cols-2 grid-rows-2 p-1 gap-1">
            <div className="bg-[#FFB952] rounded-tl-full" />
            <div className="bg-[#FFB952] rounded-tr-full" />
            <div className="bg-[#FFB952] rounded-bl-full" />
            <div className="bg-[#FFB952] rounded-br-full" />
          </div>
          {/* Inset Title Banner */}
          <div className="absolute inset-x-0 h-6 bg-[#FDF7E7] flex items-center justify-center shadow-xs">
            <span className="text-xs sm:text-sm font-black font-sans tracking-widest uppercase text-[#4A2D18]">
              FRESH BAR
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FreshBarBack({ className = '' }: VisualProps) {
  return (
    <div className={`relative w-full h-full bg-[#FDF7E7] text-[#4A2D18] p-4 sm:p-5 flex items-center justify-between select-none overflow-hidden ${className}`}>
      {/* Sliced Oranges and Leaves on Left */}
      <div className="relative shrink-0 flex items-center -ml-2">
        <div className="w-16 h-16 rounded-full bg-[#FFA01C] border-2 border-[#E07E00] flex items-center justify-center shadow-sm">
          <div className="w-12 h-12 rounded-full border border-white/80 bg-[#FFB952]" />
        </div>
        <div className="w-12 h-12 rounded-full bg-[#FFA01C] border-2 border-[#E07E00] -ml-6 mt-6 flex items-center justify-center shadow-sm">
          <div className="w-8 h-8 rounded-full border border-white/80 bg-[#FFB952]" />
        </div>
        <div className="text-emerald-700 text-base -ml-3 -mt-6">🌿</div>
      </div>

      {/* Right Coordinates */}
      <div className="text-right space-y-1 text-[9px] sm:text-[10px] font-sans">
        <h3 className="text-base sm:text-lg font-black font-sans uppercase tracking-wider text-[#4A2D18]">
          FRESH BAR
        </h3>
        <div className="text-[8px] text-neutral-600 leading-tight">
          3954 Avenue
          <br />
          New York, PA 5879
        </div>
        <div className="font-mono">+17344548894</div>
        <div className="font-mono text-[8px] text-neutral-700">company@name.com</div>
      </div>
    </div>
  );
}

// Visual Dispatchers
export function renderCardFront(cardId: string): React.ReactNode {
  switch (cardId) {
    case 'pretty-things':
      return <PrettyThingsFront />;
    case 'bunnys-bakeshop':
      return <BunnysBakeshopFront />;
    case 'sophia-bennett':
      return <SophiaBennettFront />;
    case 'coffee-co':
      return <CoffeeCoFront />;
    case 'sweet-crumbe':
      return <SweetCrumbeFront />;
    case 'alison-brown':
      return <AlisonBrownFront />;
    case 'thank-you-luxe':
      return <ThankYouFront />;
    case 'beauty-salon':
      return <BeautySalonFront />;
    case 'fresh-bar':
      return <FreshBarFront />;
    default:
      return null;
  }
}

export function renderCardBack(cardId: string): React.ReactNode {
  switch (cardId) {
    case 'pretty-things':
      return <PrettyThingsBack />;
    case 'bunnys-bakeshop':
      return <BunnysBakeshopBack />;
    case 'sophia-bennett':
      return <SophiaBennettBack />;
    case 'coffee-co':
      return <CoffeeCoBack />;
    case 'sweet-crumbe':
      return <SweetCrumbeBack />;
    case 'alison-brown':
      return <AlisonBrownBack />;
    case 'thank-you-luxe':
      return <ThankYouBack />;
    case 'beauty-salon':
      return <BeautySalonBack />;
    case 'fresh-bar':
      return <FreshBarBack />;
    default:
      return null;
  }
}

