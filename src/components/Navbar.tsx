import React, { useState, useEffect } from 'react';
import { Heart, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  wishlistCount: number;
  onOpenWishlist: () => void;
  onExploreHomes: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  wishlistCount,
  onOpenWishlist,
  onExploreHomes,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Properties', href: '#properties' },
    { name: 'Showcase', href: '#showcase' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F7F5EF]/90 backdrop-blur-md shadow-xs py-3.5 border-b border-[#183B32]/5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between gap-8">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-2 group whitespace-nowrap shrink-0"
        >
          <div className="w-8 h-8 rounded-full border border-[#183B32] flex items-center justify-center transition-transform group-hover:scale-105">
            <div className="w-3.5 h-3.5 rounded-full bg-[#183B32]" />
          </div>
          <span className="font-editorial text-2xl tracking-[0.2em] font-medium text-[#183B32]">
            TAREX
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-[#252A27]/80">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="hover:text-[#183B32] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#183B32] hover:after:w-full after:transition-all whitespace-nowrap shrink-0"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Actions: Wishlist & CTA */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenWishlist}
            aria-label={`Wishlist (${wishlistCount} items)`}
            className="relative p-2.5 rounded-full hover:bg-[#E5EBE1] text-[#183B32] transition-colors flex items-center justify-center cursor-pointer"
          >
            <Heart className={`w-5 h-5 ${wishlistCount > 0 ? 'fill-[#C6A66B] text-[#C6A66B]' : ''}`} />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#183B32] text-white text-[11px] font-semibold flex items-center justify-center tabular-nums">
                {wishlistCount}
              </span>
            )}
          </button>

          <button
            onClick={onExploreHomes}
            className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#F7F5EF] bg-[#183B32] rounded-full hover:bg-[#183B32]/90 hover:shadow-md transition-all whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>Explore Homes</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#C6A66B]" />
          </button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 text-[#183B32] hover:bg-[#E5EBE1] rounded-full transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[65px] bg-[#F7F5EF] z-50 flex flex-col justify-between p-8 border-t border-[#183B32]/10 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-6 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-editorial text-3xl text-[#183B32] hover:text-[#C6A66B] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4 pb-8 border-t border-[#183B32]/10 pt-6">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWishlist();
              }}
              className="flex items-center justify-between w-full py-3 px-4 rounded-xl bg-[#E5EBE1] text-[#183B32] font-medium text-sm"
            >
              <span className="flex items-center gap-2">
                <Heart className="w-4 h-4 fill-[#C6A66B] text-[#C6A66B]" />
                Saved Homes
              </span>
              <span className="text-xs font-semibold tabular-nums">{wishlistCount} saved</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onExploreHomes();
              }}
              className="w-full py-4 text-center text-xs font-semibold uppercase tracking-wider text-[#F7F5EF] bg-[#183B32] rounded-xl hover:bg-[#183B32]/90 transition-all flex items-center justify-center gap-2"
            >
              <span>Explore Collection</span>
              <ArrowUpRight className="w-4 h-4 text-[#C6A66B]" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
