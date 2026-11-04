import React from 'react';
import { OrganicBlob } from './OrganicTransitions';

export const AboutSection: React.FC = () => {
  const features = [
    {
      num: '01',
      title: 'Curated Properties',
      description:
        'Every residence in our private portfolio is selected for its architectural distinction, proportion of natural light, and serene harmony with surrounding terrain.',
      image:
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
    },
    {
      num: '02',
      title: 'Trusted Guidance',
      description:
        'Discreet advisory spanning off-market acquisitions, heritage legal structuring, and architectural preservation consulting with utmost fidelity.',
      image:
        'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=600&q=80',
    },
    {
      num: '03',
      title: 'Personal Assistance',
      description:
        'Dedicated real estate concierge offering accompanied private viewings, bespoke interior introductions, and seamless residency onboarding.',
      image:
        'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80',
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-[#F7F5EF] relative overflow-hidden">
      {/* Background Organic Blobs */}
      <OrganicBlob
        color="#E5EBE1"
        size={450}
        className="top-1/4 -left-20 opacity-80"
      />
      <OrganicBlob
        color="#C6A66B"
        size={300}
        className="bottom-10 -right-10 opacity-20"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Editorial Heading */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C6A66B] block mb-2">
            Our Purpose
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl md:text-6xl text-[#183B32] font-normal tracking-tight leading-tight">
            More than finding a house.
          </h2>
          <p className="mt-4 text-base sm:text-xl text-[#252A27]/75 font-normal">
            We help you discover spaces that fit the way you live.
          </p>
        </div>

        {/* 3 Minimal Features with Circular Architectural Imagery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {features.map((feat) => (
            <div
              key={feat.num}
              className="flex flex-col items-start group"
            >
              {/* Circular Architectural Image Accent */}
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1.5 bg-[#E5EBE1] shadow-lg mb-8 transition-transform duration-500 group-hover:scale-105">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img
                    src={feat.image}
                    alt={feat.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Number and Title */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C6A66B] tabular-nums">
                  {feat.num} —
                </span>
                <h3 className="font-editorial text-2xl text-[#183B32]">
                  {feat.title}
                </h3>
              </div>

              {/* Minimal Description */}
              <p className="text-sm text-[#252A27]/75 leading-relaxed font-normal">
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
