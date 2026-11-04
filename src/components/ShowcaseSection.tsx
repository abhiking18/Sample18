import React from 'react';
import { SageToForestWave, OrganicBlob } from './OrganicTransitions';
import { Property } from '../types';

interface ShowcaseSectionProps {
  onSelectProperty: (property: Property) => void;
  properties: Property[];
}

export const ShowcaseSection: React.FC<ShowcaseSectionProps> = ({
  onSelectProperty,
  properties,
}) => {
  const p1 = properties[0]; // Villa Solaria
  const p2 = properties[1]; // Atrium
  const p3 = properties[2]; // Casa de la Luz
  const p4 = properties[3]; // Kyoto

  return (
    <section
      id="showcase"
      className="relative pt-20 md:pt-28 pb-0 bg-[#E5EBE1] overflow-hidden"
    >
      {/* Background Organic Blobs */}
      <OrganicBlob
        color="#F7F5EF"
        size={500}
        className="-top-20 right-10 opacity-70"
      />
      <OrganicBlob
        color="#C6A66B"
        size={320}
        className="bottom-20 left-10 opacity-20"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Heading */}
        <div className="max-w-2xl mb-14 md:mb-20">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#183B32]/70 block mb-2">
            Harmonic Living
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#183B32] font-normal tracking-tight leading-tight">
            Architecture worth coming home to.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#252A27]/75">
            Spaces composed in harmony with light, stone, and natural contours.
          </p>
        </div>

        {/* Floating Asymmetric Composition Grid */}
        <div className="relative min-h-[520px] md:min-h-[640px] w-full pb-16">
          {/* Main Large Editorial Architectural Canvas (Left-Center) */}
          <div
            onClick={() => onSelectProperty(p3)}
            className="w-full md:w-[62%] h-[320px] sm:h-[400px] md:h-[480px] rounded-3xl overflow-hidden shadow-2xl shadow-[#183B32]/10 relative group cursor-pointer border border-white/50"
          >
            <img
              src={p3.primaryImage}
              alt={p3.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#183B32]/70 via-transparent to-transparent flex flex-col justify-end p-8 text-white">
              <span className="text-[11px] uppercase tracking-widest text-[#C6A66B] font-semibold">
                Organic Geometry
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl mt-1">{p3.name}</h3>
              <p className="text-xs text-white/80 mt-1 max-w-md line-clamp-2">
                {p3.tagline}
              </p>
            </div>
          </div>

          {/* Floating Circular Image Accent 1 (Upper Right - Asymmetric Overlap) */}
          <div
            onClick={() => onSelectProperty(p1)}
            className="hidden sm:block absolute top-4 md:top-8 right-4 md:right-8 w-48 h-48 md:w-64 md:h-64 rounded-full p-2 bg-white/90 shadow-2xl shadow-[#183B32]/15 cursor-pointer group z-20 transition-transform duration-500 hover:-translate-y-2 hover:rotate-1"
          >
            <div className="w-full h-full rounded-full overflow-hidden relative">
              <img
                src={p1.circularAccentImage}
                alt={p1.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#183B32]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-center p-3">
                <span className="text-xs font-editorial tracking-wider">
                  View {p1.name}
                </span>
              </div>
            </div>
            {/* Subtle caption badge */}
            <div className="absolute -bottom-2 right-4 bg-[#183B32] text-white text-[10px] tracking-widest uppercase px-3 py-1 rounded-full shadow-sm">
              Limestone & Light
            </div>
          </div>

          {/* Floating Circular Image Accent 2 (Lower Right - Intersecting depth) */}
          <div
            onClick={() => onSelectProperty(p4)}
            className="mt-6 md:mt-0 md:absolute md:bottom-2 md:right-32 w-44 h-44 md:w-56 md:h-56 rounded-full p-2 bg-[#F7F5EF] shadow-xl shadow-[#183B32]/10 cursor-pointer group z-10 transition-transform duration-500 hover:-translate-y-1.5"
          >
            <div className="w-full h-full rounded-full overflow-hidden relative">
              <img
                src={p4.primaryImage}
                alt={p4.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#183B32]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-center p-3">
                <span className="text-xs font-editorial tracking-wider">
                  {p4.name}
                </span>
              </div>
            </div>
          </div>

          {/* Floating Architectural Note Card (Bottom Left Offset) */}
          <div className="hidden lg:flex absolute bottom-0 left-[54%] z-30 bg-[#F7F5EF]/95 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/60 max-w-xs flex-col gap-2">
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#C6A66B]">
              Philosophy
            </span>
            <p className="text-xs text-[#252A27]/80 leading-relaxed italic font-serif text-sm">
              "We believe true luxury is the feeling of calm that arrives when architectural volume and natural light align."
            </p>
            <div className="text-[11px] font-medium text-[#183B32] pt-2 border-t border-[#183B32]/10 flex items-center justify-between">
              <span>Tarex Curated Portfolio</span>
              <span className="text-[#C6A66B]">Est. 2024</span>
            </div>
          </div>
        </div>
      </div>

      {/* Wavy Section Transition into Deep Forest Green */}
      <SageToForestWave fillColor="#183B32" className="mt-8 -mb-1" />
    </section>
  );
};
