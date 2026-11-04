import React, { useState, useEffect } from 'react';
import { PROPERTIES } from './data/properties';
import { Property } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ShowcaseSection } from './components/ShowcaseSection';
import { FeaturedSection } from './components/FeaturedSection';
import { PropertyCollection } from './components/PropertyCollection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PropertyDetailModal } from './components/PropertyDetailModal';
import { WishlistDrawer } from './components/WishlistDrawer';
import { CheckCircle2, Heart } from 'lucide-react';

export default function App() {
  const [properties] = useState<Property[]>(PROPERTIES);
  const [wishlistIds, setWishlistIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('tarex_wishlist');
      return saved ? JSON.parse(saved) : ['villa-solaria'];
    } catch {
      return ['villa-solaria'];
    }
  });

  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [prefilledContactProperty, setPrefilledContactProperty] = useState('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync wishlist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('tarex_wishlist', JSON.stringify(wishlistIds));
    } catch {
      // ignore
    }
  }, [wishlistIds]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 3200);
  };

  const handleToggleWishlist = (propertyId: string) => {
    setWishlistIds((prev) => {
      const exists = prev.includes(propertyId);
      const prop = properties.find((p) => p.id === propertyId);
      const propName = prop ? prop.name : 'Estate';
      if (exists) {
        showToast(`Removed "${propName}" from your wishlist`);
        return prev.filter((id) => id !== propertyId);
      } else {
        showToast(`Added "${propName}" to your wishlist`);
        return [...prev, propertyId];
      }
    });
  };

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenContactForProperty = (propertyName: string) => {
    setPrefilledContactProperty(propertyName);
    setSelectedProperty(null);
    scrollToSection('#contact');
  };

  const handleInquireAllWishlist = () => {
    const wishlistNames = properties
      .filter((p) => wishlistIds.includes(p.id))
      .map((p) => p.name)
      .join(', ');
    setPrefilledContactProperty(wishlistNames || 'Saved Estates Portfolio');
    setIsWishlistOpen(false);
    scrollToSection('#contact');
    showToast('Saved portfolio prepared for advisory inquiry.');
  };

  const heroProperties = {
    central: properties[0], // Villa Solaria
    left: properties[1],    // The Atrium
    right: properties[2],   // Casa de la Luz
  };

  const featuredProperty = properties[4]; // The Monolith Villa (or 0)

  const wishlistProperties = properties.filter((p) => wishlistIds.includes(p.id));

  return (
    <div className="min-h-screen bg-[#F7F5EF] text-[#252A27] flex flex-col font-sans relative selection:bg-[#183B32] selection:text-[#F7F5EF]">
      {/* Top Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#183B32] text-white px-5 py-3 rounded-full shadow-2xl flex items-center gap-3 border border-[#C6A66B]/30 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <Heart className="w-4 h-4 text-[#C6A66B] fill-[#C6A66B]" />
          <span className="text-xs font-medium tracking-wide">{toastMessage}</span>
        </div>
      )}

      {/* Navigation Bar */}
      <Navbar
        wishlistCount={wishlistIds.length}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onExploreHomes={() => scrollToSection('#properties')}
      />

      {/* 1. HERO SECTION (1 Large Center Circle + 2 Asymmetric Underneath) */}
      <HeroSection
        heroProperties={heroProperties}
        onExploreClick={() => scrollToSection('#properties')}
        onDiscoverMoreClick={() => scrollToSection('#showcase')}
        onSelectProperty={(property) => setSelectedProperty(property)}
      />

      {/* 2. ORGANIC IMAGE SHOWCASE SECTION */}
      <ShowcaseSection
        properties={properties}
        onSelectProperty={(property) => setSelectedProperty(property)}
      />

      {/* 3. FEATURED PROPERTY (Deep Forest Green Background) */}
      <FeaturedSection
        property={featuredProperty}
        onExploreProperty={(property) => setSelectedProperty(property)}
        onToggleWishlist={handleToggleWishlist}
        isWishlisted={wishlistIds.includes(featuredProperty.id)}
      />

      {/* 4. PROPERTY COLLECTION & SEARCH */}
      <PropertyCollection
        properties={properties}
        onSelectProperty={(property) => setSelectedProperty(property)}
        onToggleWishlist={handleToggleWishlist}
        wishlistIds={wishlistIds}
      />

      {/* 5. ABOUT SECTION */}
      <AboutSection />

      {/* 6. CONTACT SECTION */}
      <ContactSection
        properties={properties}
        prefilledProperty={prefilledContactProperty}
      />

      {/* 7. FOOTER */}
      <Footer />

      {/* Property Detail Modal */}
      <PropertyDetailModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
        onToggleWishlist={handleToggleWishlist}
        isWishlisted={selectedProperty ? wishlistIds.includes(selectedProperty.id) : false}
        onOpenContactForProperty={handleOpenContactForProperty}
      />

      {/* Wishlist Drawer */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistProperties={wishlistProperties}
        onRemoveFromWishlist={handleToggleWishlist}
        onSelectProperty={(property) => setSelectedProperty(property)}
        onInquireAll={handleInquireAllWishlist}
      />
    </div>
  );
}
