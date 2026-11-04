import React, { useState } from 'react';

interface ArchitecturalImageProps {
  src: string;
  alt: string;
  className?: string;
  circular?: boolean;
  aspectRatioClass?: string;
  showFallbackOnStart?: boolean;
}

export const ArchitecturalImage: React.FC<ArchitecturalImageProps> = ({
  src,
  alt,
  className = '',
  circular = false,
  aspectRatioClass = 'aspect-4/3',
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={`relative overflow-hidden bg-[#E5EBE1]/40 ${
        circular ? 'rounded-full' : 'rounded-2xl'
      } ${aspectRatioClass} ${className}`}
    >
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-[#E5EBE1]/60 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border border-[#C6A66B]/40 border-t-[#183B32] animate-spin" />
        </div>
      )}

      {hasError ? (
        /* Zero-Broken-Image Policy: High-end architectural blueprint SVG fallback */
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#E5EBE1] to-[#F7F5EF] p-6 text-center select-none">
          <svg
            className="w-16 h-16 text-[#183B32]/40 mb-3"
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            {/* Architectural Villa Minimal Line Art */}
            <path d="M10 80 H90" strokeDasharray="2 2" />
            <path d="M20 80 V45 L50 25 L80 45 V80" />
            <rect x="35" y="50" width="30" height="30" stroke="#C6A66B" />
            <line x1="50" y1="50" x2="50" y2="80" stroke="#C6A66B" />
            <line x1="15" y1="45" x2="85" y2="45" stroke="#183B32" strokeWidth="2" />
            <circle cx="50" cy="25" r="3" fill="#C6A66B" />
          </svg>
          <span className="text-xs uppercase tracking-widest text-[#183B32]/70 font-medium">
            Architectural Vision
          </span>
          <span className="text-[11px] text-[#252A27]/60 mt-1 line-clamp-1 max-w-[80%]">
            {alt}
          </span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-all duration-700 ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          } ${circular ? 'rounded-full' : ''}`}
        />
      )}
    </div>
  );
};
