import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#183B32] text-[#F7F5EF] pt-20 pb-12 border-t border-[#C6A66B]/20 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-[#C6A66B]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#F7F5EF]/15">
          {/* Brand & Tagline */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full border border-[#C6A66B] flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-[#C6A66B]" />
              </div>
              <span className="font-editorial text-2xl tracking-[0.2em] font-medium text-white">
                TAREX
              </span>
            </div>
            <p className="text-sm text-[#F7F5EF]/75 font-normal max-w-sm leading-relaxed">
              Exceptional homes. Thoughtfully selected. A bespoke real estate atelier curating sculptural residences and timeless estates across the globe.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C6A66B] block">
              Navigation
            </span>
            <ul className="space-y-2 text-sm text-[#F7F5EF]/80">
              <li>
                <button
                  onClick={() => scrollTo('#home')}
                  className="hover:text-[#C6A66B] transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#properties')}
                  className="hover:text-[#C6A66B] transition-colors cursor-pointer"
                >
                  Properties
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#showcase')}
                  className="hover:text-[#C6A66B] transition-colors cursor-pointer"
                >
                  Showcase
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#about')}
                  className="hover:text-[#C6A66B] transition-colors cursor-pointer"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#contact')}
                  className="hover:text-[#C6A66B] transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Social Links & WhatsApp */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C6A66B] block">
              Connect & Inquiries
            </span>
            <ul className="space-y-2 text-sm text-[#F7F5EF]/80">
              <li>
                <a
                  href="https://wa.me/33612345678?text=Hello%20Tarex%20Estates"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-[#C6A66B] transition-colors"
                >
                  <span>WhatsApp Concierge</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#C6A66B]" />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-[#C6A66B] transition-colors"
                >
                  <span>Instagram (@tarexestates)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#C6A66B]" />
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-[#C6A66B] transition-colors"
                >
                  <span>Facebook</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#C6A66B]" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#F7F5EF]/60 gap-4">
          <p>© {new Date().getFullYear()} TAREX Architectural Estates. All rights reserved.</p>
          <p className="tracking-wide">
            Curated for architectural clarity & enduring luxury.
          </p>
        </div>
      </div>
    </footer>
  );
};
