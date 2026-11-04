import React from 'react';
import { ArrowUpRight, Bed, Bath, Maximize2, MapPin, Sparkles } from 'lucide-react';
import { ForestToIvoryWave } from './OrganicTransitions';
import { Property } from '../types';

interface FeaturedSectionProps {
  property: Property;
  onExploreProperty: (property: Property) => void;
  onToggleWishlist: (propertyId: string) => void;
  isWishlisted: boolean;
}

export const FeaturedSection: React.FC<FeaturedSectionProps> = ({
  property,
  onExploreProperty,
  onToggleWishlist,
  isWishlisted,
}) => {
  return (
    <section className="relative pt-20 md:pt-28 pb-0 bg-[#183B32] text-[#F7F5EF] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -right-24 w-96 h-96 rounded-full bg-[#C6A66B]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -left-20 w-80 h-80 rounded-full bg-emerald-950/40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Label & Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#C6A66B] inline-flex items-center gap-2 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            FEATURED PROPERTY
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-white">
            Made for extraordinary living.
          </h2>
        </div>

        {/* Layered Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Main Visual Display (Col 1-7) */}
          <div className="lg:col-span-7 relative group">
            {/* Large architectural canvas */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/40 border border-[#C6A66B]/20 aspect-16/10">
              <img
                src={property.primaryImage}
                alt={property.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#183B32]/80 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Overlapping Circular Architectural Detail (Bottom Right) */}
            <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-6 w-36 h-36 sm:w-48 sm:h-48 rounded-full p-2 bg-[#183B32] border-2 border-[#C6A66B]/40 shadow-2xl z-20 hidden sm:block">
              <div className="w-full h-full rounded-full overflow-hidden relative">
                <img
                  src={property.circularAccentImage}
                  alt={`${property.name} detail`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Details & Specs Panel (Col 8-12) */}
          <div className="lg:col-span-5 flex flex-col justify-center lg:pl-6">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C6A66B]">
              <MapPin className="w-3.5 h-3.5" />
              <span>{property.location}</span>
            </div>

            <h3 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-white mt-2 mb-3">
              {property.name}
            </h3>

            <p className="text-sm sm:text-base text-[#F7F5EF]/80 font-normal leading-relaxed mb-6">
              {property.tagline}
            </p>

            <div className="text-2xl sm:text-3xl font-light text-[#C6A66B] mb-8 tabular-nums">
              {property.formattedPrice}
            </div>

            {/* Architectural Specs Row */}
            <div className="grid grid-cols-3 gap-4 py-6 border-y border-[#F7F5EF]/15 mb-8">
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-xs text-[#F7F5EF]/60 uppercase tracking-wider mb-1">
                  <Bed className="w-3.5 h-3.5 text-[#C6A66B]" />
                  <span>Bedrooms</span>
                </div>
                <span className="text-lg font-semibold text-white tabular-nums">
                  {property.bedrooms} Beds
                </span>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-xs text-[#F7F5EF]/60 uppercase tracking-wider mb-1">
                  <Bath className="w-3.5 h-3.5 text-[#C6A66B]" />
                  <span>Bathrooms</span>
                </div>
                <span className="text-lg font-semibold text-white tabular-nums">
                  {property.bathrooms} Baths
                </span>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-xs text-[#F7F5EF]/60 uppercase tracking-wider mb-1">
                  <Maximize2 className="w-3.5 h-3.5 text-[#C6A66B]" />
                  <span>Living Area</span>
                </div>
                <span className="text-lg font-semibold text-white tabular-nums">
                  {property.areaSqFt.toLocaleString()} sq ft
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onExploreProperty(property)}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#C6A66B] text-[#183B32] text-xs font-semibold uppercase tracking-wider hover:bg-white hover:text-[#183B32] hover:shadow-lg transition-all cursor-pointer group"
              >
                <span>Explore Property</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <button
                onClick={() => onToggleWishlist(property.id)}
                className={`px-5 py-3.5 rounded-full border border-white/20 text-xs font-medium uppercase tracking-wider transition-all cursor-pointer ${
                  isWishlisted
                    ? 'bg-[#C6A66B]/20 border-[#C6A66B] text-[#C6A66B]'
                    : 'text-white/80 hover:bg-white/10'
                }`}
              >
                {isWishlisted ? 'Saved to Wishlist' : 'Add to Wishlist'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Organic Curved Wave Transition back to Warm Ivory */}
      <ForestToIvoryWave fillColor="#F7F5EF" className="mt-16 md:mt-24 -mb-1" />
    </section>
  );
};
