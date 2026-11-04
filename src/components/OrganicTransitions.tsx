import React from 'react';

interface WaveProps {
  className?: string;
  fillColor?: string;
  strokeColor?: string;
}

export const HeroToSageWave: React.FC<WaveProps> = ({
  className = '',
  fillColor = '#E5EBE1',
}) => {
  return (
    <div className={`w-full overflow-hidden leading-none ${className}`}>
      <svg
        viewBox="0 0 1440 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto block"
        preserveAspectRatio="none"
      >
        {/* Soft layered organic curve */}
        <path
          d="M0,45 C280,120 480,20 720,80 C980,145 1200,30 1440,90 L1440,180 L0,180 Z"
          fill={fillColor}
          fillOpacity="0.45"
        />
        <path
          d="M0,90 C320,160 540,40 820,110 C1080,170 1280,60 1440,120 L1440,180 L0,180 Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
};

export const SageToForestWave: React.FC<WaveProps> = ({
  className = '',
  fillColor = '#183B32',
}) => {
  return (
    <div className={`w-full overflow-hidden leading-none ${className}`}>
      <svg
        viewBox="0 0 1440 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto block"
        preserveAspectRatio="none"
      >
        <path
          d="M0,60 C360,160 620,10 940,95 C1180,160 1340,70 1440,110 L1440,200 L0,200 Z"
          fill={fillColor}
          fillOpacity="0.4"
        />
        <path
          d="M0,110 C290,40 580,165 900,90 C1160,30 1320,140 1440,150 L1440,200 L0,200 Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
};

export const ForestToIvoryWave: React.FC<WaveProps> = ({
  className = '',
  fillColor = '#F7F5EF',
}) => {
  return (
    <div className={`w-full overflow-hidden leading-none ${className}`}>
      <svg
        viewBox="0 0 1440 190"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto block"
        preserveAspectRatio="none"
      >
        <path
          d="M0,50 C380,140 700,10 1020,85 C1220,130 1360,40 1440,80 L1440,190 L0,190 Z"
          fill={fillColor}
          fillOpacity="0.5"
        />
        <path
          d="M0,100 C320,160 680,45 980,120 C1200,175 1360,95 1440,135 L1440,190 L0,190 Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
};

export const OrganicBlob: React.FC<{
  className?: string;
  color?: string;
  size?: number;
}> = ({ className = '', color = '#E5EBE1', size = 400 }) => {
  return (
    <div
      className={`absolute pointer-events-none -z-10 blur-3xl opacity-60 ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: color,
        borderRadius: '62% 38% 70% 30% / 45% 58% 42% 55%',
      }}
    />
  );
};
