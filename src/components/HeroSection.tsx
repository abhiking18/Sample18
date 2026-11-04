import React from 'react';
import { ArrowDown, ArrowUpRight, Compass, Sparkles } from 'lucide-react';
import { HeroToSageWave, OrganicBlob } from './OrganicTransitions';
import { Property } from '../types';

interface HeroSectionProps {
  onExploreClick: () => void;
  onDiscoverMoreClick: () => void;
  onSelectProperty: (property: Property) => void;
  heroProperties: {
    central: Property;
    left: Property;
    right: Property;
  };
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreClick,
  onDiscoverMoreClick,
  onSelectProperty,
  heroProperties,
}) => {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 md:pt-32 md:pb-24 bg-[#F7F5EF] overflow-hidden flex flex-col justify-between"
    >
      {/* Organic Background Blobs */}
      <OrganicBlob
        color="#E5EBE1"
        size={550}
        className="-top-24 -left-20 transform -rotate-12"
      />
      <OrganicBlob
        color="#E5EBE1"
        size={600}
        className="top-1/3 -right-24 transform rotate-45"
      />
      <OrganicBlob
        color="#C6A66B"
        size={350}
        className="bottom-1/4 left-1/4 opacity-15"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full relative z-10 flex-1 flex flex-col justify-between">
        {/* Top 3 Minimal Columns (Exact Requirement) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 pb-10 border-b border-[#183B32]/10 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start group">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C6A66B] mb-1">
              01 / Curation
            </span>
            <p className="text-sm font-medium text-[#252A27]/90 tracking-wide">
              Carefully selected properties.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start group">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C6A66B] mb-1">
              02 / Destinations
            </span>
            <p className="text-sm font-medium text-[#252A27]/90 tracking-wide">
              Premium locations.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start group">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C6A66B] mb-1">
              03 / Advisory
            </span>
            <p className="text-sm font-medium text-[#252A27]/90 tracking-wide">
              Personal property assistance.
            </p>
          </div>
        </div>

        {/* Central Headline Block */}
        <div className="text-center max-w-3xl mx-auto pt-6 pb-8">
          <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#183B32] tracking-tight leading-[1.08] text-balance">
            Find a place to call yours.
          </h1>
          <p className="mt-3 text-base sm:text-lg text-[#252A27]/75 font-normal tracking-wide">
            Exceptional homes. Thoughtfully selected.
          </p>

          {/* Action Buttons */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onExploreClick}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#183B32] text-[#F7F5EF] text-xs font-semibold uppercase tracking-wider hover:bg-[#183B32]/90 hover:shadow-lg transition-all cursor-pointer group"
            >
              <span>Explore Properties</span>
              <ArrowUpRight className="w-4 h-4 text-[#C6A66B] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <button
              onClick={onDiscoverMoreClick}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-[#183B32]/30 text-[#183B32] text-xs font-semibold uppercase tracking-wider hover:bg-[#E5EBE1] transition-all cursor-pointer"
            >
              <span>Discover More</span>
              <ArrowDown className="w-3.5 h-3.5 opacity-60" />
            </button>
          </div>
        </div>

        {/* MAIN IMAGE COMPOSITION (Reference Inspired: 1 Large Center Circle + 2 Smaller Underneath Asymmetric) */}
        <div className="relative w-full max-w-5xl mx-auto my-6 sm:my-10 min-h-[460px] sm:min-h-[540px] md:min-h-[580px] flex items-center justify-center">
          {/* Subtle architectural compass accent behind composition */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
            <div className="w-[500px] h-[500px] sm:w-[620px] sm:h-[620px] rounded-full border border-dashed border-[#183B32]/30" />
            <div className="absolute w-[360px] h-[360px] sm:w-[450px] sm:h-[450px] rounded-full border border-[#C6A66B]/30" />
          </div>

          {/* 1. Large Central Circular Image (Upper-Middle Area) */}
          <div
            onClick={() => onSelectProperty(heroProperties.central)}
            className="absolute top-0 z-20 cursor-pointer group"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full p-2 bg-white/80 backdrop-blur-xs shadow-2xl shadow-[#183B32]/15 transition-transform duration-700 group-hover:scale-[1.03]">
              <div className="w-full h-full rounded-full overflow-hidden relative">
                <img
                  src={heroProperties.central.primaryImage}
                  alt={heroProperties.central.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                {/* Subtle vignette scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#183B32]/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end items-center pb-6 text-white text-center px-4">
                  <span className="text-[10px] uppercase tracking-widest text-[#C6A66B] font-semibold">
                    Featured Villa
                  </span>
                  <span className="font-editorial text-lg sm:text-xl">
                    {heroProperties.central.name}
                  </span>
                  <span className="text-xs text-white/80">{heroProperties.central.location}</span>
                </div>
              </div>
            </div>
            {/* Minimal floating pill tag */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#183B32] text-white px-4 py-1.5 rounded-full shadow-md text-[11px] font-medium tracking-wider flex items-center gap-1.5 whitespace-nowrap">
              <Sparkles className="w-3 h-3 text-[#C6A66B]" />
              <span>{heroProperties.central.formattedPrice}</span>
            </div>
          </div>

          {/* 2. Left Circle (Modern Apartment / Luxury Residence - Positioned lower left, asymmetric) */}
          <div
            onClick={() => onSelectProperty(heroProperties.left)}
            className="absolute left-2 sm:left-6 md:left-12 bottom-2 sm:bottom-4 z-10 cursor-pointer group transition-transform duration-500 hover:-translate-y-2"
          >
            <div className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-full p-2 bg-[#F7F5EF] shadow-xl shadow-[#183B32]/10 transition-transform duration-500 group-hover:scale-105">
              <div className="w-full h-full rounded-full overflow-hidden relative">
                <img
                  src={heroProperties.left.primaryImage}
                  alt={heroProperties.left.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#183B32]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end items-center pb-4 text-white text-center px-2">
                  <span className="font-editorial text-base sm:text-lg">
                    {heroProperties.left.name}
                  </span>
                  <span className="text-[10px] text-[#C6A66B]">
                    {heroProperties.left.location}
                  </span>
                </div>
              </div>
            </div>
            {/* Quick architectural spec tag */}
            <div className="mt-2 text-center">
              <span className="text-xs font-medium text-[#183B32] tracking-wide block">
                {heroProperties.left.name}
              </span>
              <span className="text-[11px] text-[#252A27]/60">
                {heroProperties.left.formattedPrice}
              </span>
            </div>
          </div>

          {/* 3. Right Circle (Contemporary House / Interior - Positioned lower right, different height for asymmetry) */}
          <div
            onClick={() => onSelectProperty(heroProperties.right)}
            className="absolute right-2 sm:right-6 md:right-12 bottom-12 sm:bottom-16 md:bottom-14 z-10 cursor-pointer group transition-transform duration-500 hover:-translate-y-2"
          >
            <div className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full p-2 bg-[#F7F5EF] shadow-xl shadow-[#183B32]/10 transition-transform duration-500 group-hover:scale-105">
              <div className="w-full h-full rounded-full overflow-hidden relative">
                <img
                  src={heroProperties.right.primaryImage}
                  alt={heroProperties.right.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#183B32]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end items-center pb-4 text-white text-center px-2">
                  <span className="font-editorial text-base sm:text-lg">
                    {heroProperties.right.name}
                  </span>
                  <span className="text-[10px] text-[#C6A66B]">
                    {heroProperties.right.location}
                  </span>
                </div>
              </div>
            </div>
            {/* Quick architectural spec tag */}
            <div className="mt-2 text-center">
              <span className="text-xs font-medium text-[#183B32] tracking-wide block">
                {heroProperties.right.name}
              </span>
              <span className="text-[11px] text-[#252A27]/60">
                {heroProperties.right.formattedPrice}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Organic Curved Wave Transition to Soft Sage Section */}
      <HeroToSageWave fillColor="#E5EBE1" className="mt-8 -mb-1" />
    </section>
  );
};
