import React from 'react';

interface MarqueeProps {
  text: string;
  direction?: 'left' | 'right';
  className?: string;
}

export const Marquee: React.FC<MarqueeProps> = ({ text, direction = 'left', className = "" }) => {
  return (
    <div className={`relative flex overflow-hidden whitespace-nowrap py-3 select-none ${className}`}>
      <div className={`animate-marquee flex ${direction === 'right' ? 'flex-row-reverse' : 'flex-row'}`}>
        {[...Array(8)].map((_, i) => (
          <span key={i} className="mx-4 text-sm md:text-lg font-mono tracking-widest opacity-70">
            {text} <span className="text-red-600 mx-2">///</span>
          </span>
        ))}
      </div>
      <div className={`absolute top-0 flex ${direction === 'right' ? 'flex-row-reverse' : 'flex-row'} animate-marquee`} aria-hidden="true" style={{ left: '100%' }}>
         {[...Array(8)].map((_, i) => (
          <span key={i} className="mx-4 text-sm md:text-lg font-mono tracking-widest opacity-70">
            {text} <span className="text-red-600 mx-2">///</span>
          </span>
        ))}
      </div>
    </div>
  );
};