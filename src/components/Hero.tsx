import React, { useState, useEffect } from 'react';
import { useTypewriter } from '../hooks/useTypewriter';

interface HeroProps {
  onActionClick?: (action: string) => void;
}

export function Hero({ onActionClick }: HeroProps) {
  const [pillsVisible, setPillsVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  const typewriter = useTypewriter(
    'Glad you stopped in. Good taste tends to find us. Now, what are we building?',
    38,
    600
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setPillsVisible(true);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  const handleCopyEmail = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText('ogmainframe01@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handlePillClick = (actionName: string) => {
    if (onActionClick) {
      onActionClick(actionName);
    }
  };

  return (
    <section
      id="hero"
      className="relative z-1 min-h-screen w-full flex flex-col justify-end pb-12 md:justify-center md:pb-0 px-5 sm:px-8 md:px-10 overflow-hidden select-none"
    >
      {/* Portfolio badge overlay in top corner on desktop */}
      <div className="hidden lg:flex items-center gap-3 absolute top-24 right-8 z-10 text-xs font-mono tracking-widest text-neutral-300 uppercase bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span>Business Card Design • Starting at ₹199</span>
      </div>

      {/* Main Hero Content Container */}
      <div className="max-w-xl relative z-10 w-full">
        {/* 1. Blurred intro label */}
        <div
          id="hero-intro-label"
          className="pointer-events-none select-none mb-5 sm:mb-6 text-white font-normal"
          style={{
            fontSize: 'clamp(18px, 4vw, 26px)',
            lineHeight: '1.3',
            fontWeight: 400,
            color: '#fff',
            filter: 'blur(4px)',
            willChange: 'filter',
          }}
        >
          Hey there, meet A.R.I.A,
          <br />
          Mainframe's Adaptive Response Interface Agent
        </div>

        {/* 2. Typewriter text */}
        <p
          id="hero-typewriter-text"
          className="text-white mb-5 sm:mb-6 font-normal min-h-[54px]"
          style={{
            fontSize: 'clamp(18px, 4vw, 26px)',
            lineHeight: '1.35',
            fontWeight: 400,
          }}
        >
          {typewriter.displayed}
          {!typewriter.done && (
            <span
              id="hero-typewriter-cursor"
              className="inline-block w-[2px] h-[1.1em] bg-white align-middle ml-[2px] animate-cursor-blink"
              aria-hidden="true"
            />
          )}
        </p>

        {/* 3. Action pill buttons */}
        <div
          id="hero-action-pills"
          className="flex flex-wrap gap-y-1 transition-all duration-400 ease-out"
          style={{
            opacity: pillsVisible ? 1 : 0,
            transform: pillsVisible ? 'translateY(0px)' : 'translateY(8px)',
          }}
        >
          {/* White Pill 1 */}
          <button
            id="pill-pitch-idea"
            type="button"
            onClick={() => handlePillClick('Pitch us an idea')}
            className="inline-flex items-center justify-center bg-white text-black border border-black/10 rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.3em] mx-[0.2em] mb-[0.4em] whitespace-nowrap hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer"
          >
            Pitch us an idea
          </button>

          {/* White Pill 2 */}
          <button
            id="pill-come-work"
            type="button"
            onClick={() => handlePillClick('Come work here')}
            className="inline-flex items-center justify-center bg-white text-black border border-black/10 rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.3em] mx-[0.2em] mb-[0.4em] whitespace-nowrap hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer"
          >
            Come work here
          </button>

          {/* White Pill 3 */}
          <button
            id="pill-send-hello"
            type="button"
            onClick={() => handlePillClick('Send a brief hello')}
            className="inline-flex items-center justify-center bg-white text-black border border-black/10 rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.3em] mx-[0.2em] mb-[0.4em] whitespace-nowrap hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer"
          >
            Send a brief hello
          </button>

          {/* White Pill 4 */}
          <button
            id="pill-see-operate"
            type="button"
            onClick={() => handlePillClick('See how we operate')}
            className="inline-flex items-center justify-center bg-white text-black border border-black/10 rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.3em] mx-[0.2em] mb-[0.4em] whitespace-nowrap hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer"
          >
            See how we operate
          </button>

          {/* Outline Pill Button */}
          <button
            id="pill-reach-us"
            type="button"
            onClick={handleCopyEmail}
            title="Click to copy email address"
            className="inline-flex items-center justify-center text-white bg-transparent border border-white rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.3em] mx-[0.2em] mb-[0.4em] whitespace-nowrap gap-2 sm:gap-3 hover:bg-white hover:text-black transition-colors duration-200 cursor-pointer group"
          >
            <span>
              {copied ? (
                <span className="text-emerald-300 font-medium">Copied to clipboard!</span>
              ) : (
                <>
                  Reach us: <span className="underline underline-offset-1">ogmainframe01@gmail.com</span>
                </>
              )}
            </span>
            {/* 12x12 copy icon (inline SVG of two overlapping rectangles) */}
            <svg
              className="w-[12px] h-[12px] shrink-0 text-current opacity-80 group-hover:opacity-100"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {/* Back rectangle */}
              <rect
                x="3.5"
                y="1.5"
                width="7"
                height="7"
                rx="1"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              {/* Front overlapping rectangle */}
              <path
                d="M1.5 3.5V9.5C1.5 10.0523 1.94772 10.5 2.5 10.5H8.5"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Down indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 opacity-70 hover:opacity-100 transition-opacity">
        <a
          href="#about"
          className="text-xs font-mono tracking-widest uppercase text-neutral-400 flex items-center gap-2"
        >
          <span>Explore Portfolio &amp; Pricing</span>
          <span className="animate-bounce inline-block text-sm">↓</span>
        </a>
      </div>
    </section>
  );
}
