import React, { useState, useMemo } from 'react';
import {
  Heart,
  Search,
  SlidersHorizontal,
  RotateCcw,
  Bed,
  Bath,
  Maximize2,
  MapPin,
  ArrowUpRight,
} from 'lucide-react';
import { Property, PropertyCategory } from '../types';

interface PropertyCollectionProps {
  properties: Property[];
  onSelectProperty: (property: Property) => void;
  onToggleWishlist: (propertyId: string) => void;
  wishlistIds: string[];
}

export const PropertyCollection: React.FC<PropertyCollectionProps> = ({
  properties,
  onSelectProperty,
  onToggleWishlist,
  wishlistIds,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<PropertyCategory>('All');
  const [locationQuery, setLocationQuery] = useState('');
  const [maxBudget, setMaxBudget] = useState<number | 'all'>('all');
  const [minBedrooms, setMinBedrooms] = useState<number | 'all'>('all');
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);

  const categories: PropertyCategory[] = [
    'All',
    'Villas',
    'Apartments',
    'Houses',
    'Commercial',
  ];

  // Dynamic filtering
  const filteredProperties = useMemo(() => {
    return properties.filter((prop) => {
      // Category check
      if (selectedCategory !== 'All' && prop.category !== selectedCategory) {
        return false;
      }
      // Location text check
      if (
        locationQuery.trim() !== '' &&
        !prop.location.toLowerCase().includes(locationQuery.toLowerCase()) &&
        !prop.country.toLowerCase().includes(locationQuery.toLowerCase()) &&
        !prop.name.toLowerCase().includes(locationQuery.toLowerCase())
      ) {
        return false;
      }
      // Budget check
      if (maxBudget !== 'all' && prop.price > maxBudget) {
        return false;
      }
      // Bedroom check
      if (minBedrooms !== 'all' && prop.bedrooms < minBedrooms) {
        return false;
      }
      return true;
    });
  }, [properties, selectedCategory, locationQuery, maxBudget, minBedrooms]);

  const hasActiveFilters =
    selectedCategory !== 'All' ||
    locationQuery !== '' ||
    maxBudget !== 'all' ||
    minBedrooms !== 'all';

  const resetFilters = () => {
    setSelectedCategory('All');
    setLocationQuery('');
    setMaxBudget('all');
    setMinBedrooms('all');
  };

  return (
    <section id="properties" className="py-20 md:py-28 bg-[#F7F5EF] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C6A66B] block mb-2">
              Curated Estates
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#183B32] font-normal tracking-tight">
              Explore our collection.
            </h2>
          </div>
          <div className="text-sm text-[#252A27]/60 tabular-nums">
            Showing {filteredProperties.length} of {properties.length} properties
          </div>
        </div>

        {/* Category Filter Pills / Segmented Buttons */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-[#183B32] text-[#F7F5EF] shadow-md'
                    : 'bg-white text-[#252A27]/80 hover:bg-[#E5EBE1] border border-[#183B32]/10'
                }`}
              >
                {category === 'All' ? 'All Properties' : category}
              </button>
            );
          })}

          <button
            onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
            className={`ml-auto flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider border transition-all cursor-pointer whitespace-nowrap shrink-0 ${
              showAdvancedFilters
                ? 'bg-[#E5EBE1] border-[#183B32] text-[#183B32]'
                : 'bg-white border-[#183B32]/10 text-[#252A27]/70 hover:bg-[#E5EBE1]'
            }`}
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Search & Filters</span>
          </button>
        </div>

        {/* Search & Filter Interface */}
        <div
          className={`bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#183B32]/10 mb-12 transition-all duration-300 ${
            showAdvancedFilters ? 'block' : 'hidden md:block'
          }`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 1. Location Input */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-semibold uppercase tracking-wider text-[#183B32]/70">
                Location or Name
              </label>
              <div className="relative">
                <Search className="w-4 h-4 text-[#252A27]/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="e.g. Cannes, London, Kyoto..."
                  value={locationQuery}
                  onChange={(e) => setLocationQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#183B32]/15 bg-[#F7F5EF]/50 text-sm text-[#252A27] placeholder:text-[#252A27]/40 focus:outline-none focus:border-[#183B32] focus:bg-white transition-all"
                />
              </div>
            </div>

            {/* 2. Property Type */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-semibold uppercase tracking-wider text-[#183B32]/70">
                Property Type
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value as PropertyCategory)}
                className="w-full px-4 py-2.5 rounded-xl border border-[#183B32]/15 bg-[#F7F5EF]/50 text-sm text-[#252A27] focus:outline-none focus:border-[#183B32] focus:bg-white transition-all cursor-pointer"
              >
                <option value="All">All Types</option>
                <option value="Villas">Villas</option>
                <option value="Apartments">Apartments</option>
                <option value="Houses">Houses</option>
                <option value="Commercial">Commercial</option>
              </select>
            </div>

            {/* 3. Budget */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-semibold uppercase tracking-wider text-[#183B32]/70">
                Maximum Budget
              </label>
              <select
                value={maxBudget}
                onChange={(e) =>
                  setMaxBudget(e.target.value === 'all' ? 'all' : Number(e.target.value))
                }
                className="w-full px-4 py-2.5 rounded-xl border border-[#183B32]/15 bg-[#F7F5EF]/50 text-sm text-[#252A27] focus:outline-none focus:border-[#183B32] focus:bg-white transition-all cursor-pointer"
              >
                <option value="all">Any Price</option>
                <option value="8000000">Up to $8,000,000</option>
                <option value="10000000">Up to $10,000,000</option>
                <option value="15000000">Up to $15,000,000</option>
                <option value="20000000">Up to $20,000,000</option>
              </select>
            </div>

            {/* 4. Bedrooms */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-semibold uppercase tracking-wider text-[#183B32]/70">
                Bedrooms
              </label>
              <select
                value={minBedrooms}
                onChange={(e) =>
                  setMinBedrooms(e.target.value === 'all' ? 'all' : Number(e.target.value))
                }
                className="w-full px-4 py-2.5 rounded-xl border border-[#183B32]/15 bg-[#F7F5EF]/50 text-sm text-[#252A27] focus:outline-none focus:border-[#183B32] focus:bg-white transition-all cursor-pointer"
              >
                <option value="all">Any Number</option>
                <option value="3">3+ Bedrooms</option>
                <option value="4">4+ Bedrooms</option>
                <option value="5">5+ Bedrooms</option>
                <option value="6">6+ Bedrooms</option>
              </select>
            </div>
          </div>

          {/* Reset Filters action */}
          {hasActiveFilters && (
            <div className="mt-6 pt-4 border-t border-[#183B32]/10 flex items-center justify-between text-xs">
              <span className="text-[#252A27]/60">
                Active filters applied
              </span>
              <button
                onClick={resetFilters}
                className="flex items-center gap-1.5 text-[#183B32] hover:text-[#C6A66B] font-semibold transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset all filters</span>
              </button>
            </div>
          )}
        </div>

        {/* Property Grid: Image-focused, Asymmetric touches, Circular Accents */}
        {filteredProperties.length === 0 ? (
          <div className="text-center py-16 px-4 bg-white rounded-3xl border border-[#183B32]/10">
            <h3 className="font-editorial text-2xl text-[#183B32] mb-2">
              No matching properties found
            </h3>
            <p className="text-sm text-[#252A27]/60 max-w-md mx-auto mb-6">
              We couldn't find any homes matching your criteria. Try adjusting your search or clearing your filters.
            </p>
            <button
              onClick={resetFilters}
              className="px-6 py-3 rounded-full bg-[#183B32] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#183B32]/90 cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property, idx) => {
              const isWishlisted = wishlistIds.includes(property.id);

              return (
                <div
                  key={property.id}
                  className="group bg-white rounded-3xl overflow-hidden border border-[#183B32]/10 hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
                >
                  {/* Image container with circular architectural accent */}
                  <div className="relative aspect-4/3 overflow-hidden">
                    <img
                      src={property.primaryImage}
                      alt={property.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Wishlist toggle button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleWishlist(property.id);
                      }}
                      aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
                      className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#183B32] shadow-md hover:bg-white hover:scale-105 transition-all cursor-pointer"
                    >
                      <Heart
                        className={`w-5 h-5 transition-colors ${
                          isWishlisted ? 'fill-[#C6A66B] text-[#C6A66B]' : 'text-[#183B32]'
                        }`}
                      />
                    </button>

                    {/* Circular Architectural Inset Badge (Organic reference visual touch) */}
                    <div className="absolute bottom-3 left-4 w-12 h-12 rounded-full p-1 bg-white/95 shadow-md hidden sm:block">
                      <div className="w-full h-full rounded-full overflow-hidden">
                        <img
                          src={property.circularAccentImage}
                          alt={`${property.name} thumbnail`}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Category Label */}
                    <div className="absolute top-4 left-4 bg-[#183B32]/85 text-white text-[10px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full backdrop-blur-xs">
                      {property.category}
                    </div>
                  </div>

                  {/* Property Info Content */}
                  <div className="p-6 flex flex-col flex-1 justify-between">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs text-[#252A27]/60 mb-1">
                        <MapPin className="w-3.5 h-3.5 text-[#C6A66B]" />
                        <span>{property.location}</span>
                      </div>

                      <h3 className="font-editorial text-2xl text-[#183B32] group-hover:text-[#C6A66B] transition-colors">
                        {property.name}
                      </h3>

                      <p className="text-xs text-[#252A27]/70 mt-1 line-clamp-2">
                        {property.tagline}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-[#183B32]/10">
                      {/* Specs row */}
                      <div className="flex items-center justify-between text-xs text-[#252A27]/70 mb-4">
                        <span className="flex items-center gap-1">
                          <Bed className="w-3.5 h-3.5 text-[#183B32]" />
                          <span>{property.bedrooms > 0 ? `${property.bedrooms} Beds` : 'Studio'}</span>
                        </span>
                        <span>·</span>
                        <span className="flex items-center gap-1">
                          <Bath className="w-3.5 h-3.5 text-[#183B32]" />
                          <span>{property.bathrooms} Baths</span>
                        </span>
                        <span>·</span>
                        <span className="flex items-center gap-1">
                          <Maximize2 className="w-3.5 h-3.5 text-[#183B32]" />
                          <span className="tabular-nums">{property.areaSqFt.toLocaleString()} sq ft</span>
                        </span>
                      </div>

                      {/* Price and View Details CTA */}
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-editorial font-semibold text-[#183B32] tabular-nums">
                          {property.formattedPrice}
                        </span>

                        <button
                          onClick={() => onSelectProperty(property)}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#183B32] hover:text-[#C6A66B] transition-colors cursor-pointer group/btn"
                        >
                          <span>View Details</span>
                          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
