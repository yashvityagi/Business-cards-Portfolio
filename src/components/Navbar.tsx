import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onNavigate?: (sectionId: string) => void;
  onContactClick?: () => void;
}

export function Navbar({ onNavigate, onContactClick }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const handleLinkClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(sectionId);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleContactAction = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onContactClick) {
      onContactClick();
    } else {
      const el = document.getElementById('contact');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <nav
        id="main-navbar"
        className="fixed top-0 left-0 w-full z-10 px-5 sm:px-8 py-4 sm:py-5 flex justify-between items-center transition-colors duration-300"
      >
        {/* Logo (left) */}
        <a
          href="#hero"
          onClick={(e) => handleLinkClick(e, 'hero')}
          className="flex items-center gap-3 cursor-pointer select-none group"
          id="nav-logo"
        >
          <span
            className="text-[21px] sm:text-[26px] tracking-tight text-white transition-opacity group-hover:opacity-80"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Mainframe®
          </span>
          <span
            className="text-[25px] sm:text-[30px] text-white select-none inline-block transition-transform duration-500 group-hover:rotate-45"
            style={{ letterSpacing: '-0.02em' }}
            aria-hidden="true"
          >
            ✳︎
          </span>
        </a>

        {/* Desktop nav links (center, hidden below md) */}
        <div
          id="desktop-nav-links"
          className="hidden md:flex items-center text-[23px] text-white select-none font-normal"
        >
          <a
            href="#samples"
            onClick={(e) => handleLinkClick(e, 'samples')}
            className="hover:opacity-60 transition-opacity cursor-pointer"
          >
            Labs
          </a>
          <span className="mx-0">, </span>
          <a
            href="#about"
            onClick={(e) => handleLinkClick(e, 'about')}
            className="hover:opacity-60 transition-opacity cursor-pointer"
          >
            Studio
          </a>
          <span className="mx-0">, </span>
          <a
            href="#deliverables"
            onClick={(e) => handleLinkClick(e, 'deliverables')}
            className="hover:opacity-60 transition-opacity cursor-pointer"
          >
            Openings
          </a>
          <span className="mx-0">, </span>
          <a
            href="#pricing"
            onClick={(e) => handleLinkClick(e, 'pricing')}
            className="hover:opacity-60 transition-opacity cursor-pointer"
          >
            Shop
          </a>
        </div>

        {/* Desktop CTA (right, hidden below md) */}
        <div className="hidden md:flex items-center">
          <a
            id="desktop-cta-btn"
            href="#contact"
            onClick={handleContactAction}
            className="text-[23px] text-white underline underline-offset-2 hover:opacity-60 transition-opacity cursor-pointer"
          >
            Get in touch
          </a>
        </div>

        {/* Mobile hamburger (visible below md) */}
        <button
          id="mobile-hamburger-btn"
          type="button"
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col justify-center items-center gap-[5px] w-10 h-10 cursor-pointer focus:outline-none z-20"
        >
          {/* Top bar */}
          <span
            className={`w-6 h-[2px] bg-white transition-all duration-300 transform ${
              mobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
            }`}
          />
          {/* Middle bar */}
          <span
            className={`w-6 h-[2px] bg-white transition-all duration-300 ${
              mobileMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          {/* Bottom bar */}
          <span
            className={`w-6 h-[2px] bg-white transition-all duration-300 transform ${
              mobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile overlay (z-index: 9) */}
      <div
        id="mobile-nav-overlay"
        className={`fixed inset-0 z-9 bg-black/90 backdrop-blur-md flex flex-col justify-center items-start px-8 gap-8 md:hidden transition-all duration-300 ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="mb-2 text-xs uppercase tracking-widest text-neutral-400 font-mono">
          Mainframe Design Studio
        </div>
        <a
          href="#samples"
          onClick={(e) => handleLinkClick(e, 'samples')}
          className="text-[32px] font-medium text-white hover:opacity-70 transition-opacity"
        >
          Labs (Samples)
        </a>
        <a
          href="#about"
          onClick={(e) => handleLinkClick(e, 'about')}
          className="text-[32px] font-medium text-white hover:opacity-70 transition-opacity"
        >
          Studio (About)
        </a>
        <a
          href="#deliverables"
          onClick={(e) => handleLinkClick(e, 'deliverables')}
          className="text-[32px] font-medium text-white hover:opacity-70 transition-opacity"
        >
          Openings (What You Get)
        </a>
        <a
          href="#pricing"
          onClick={(e) => handleLinkClick(e, 'pricing')}
          className="text-[32px] font-medium text-white hover:opacity-70 transition-opacity"
        >
          Shop (Pricing ₹199)
        </a>
        <div className="pt-4 border-t border-white/20 w-full">
          <a
            href="#contact"
            onClick={handleContactAction}
            className="text-[32px] font-medium text-white underline underline-offset-4 hover:opacity-70 transition-opacity"
          >
            Get in touch
          </a>
        </div>
      </div>
    </>
  );
}
