import React from 'react';

export const AudioVisualizer: React.FC<{ small?: boolean }> = ({ small }) => {
  const bars = small ? 5 : 12;
  const heightClass = small ? "h-6" : "h-16";
  const widthClass = small ? "w-1" : "w-2";

  return (
    <div className={`flex items-end justify-center space-x-1 ${heightClass}`}>
      {[...Array(bars)].map((_, i) => (
        <div
          key={i}
          className={`${widthClass} bg-red-600 animate-pulse shadow-[0_0_10px_rgba(220,38,38,0.8)]`}
          style={{
            height: `${Math.random() * 80 + 20}%`,
            animationDuration: `${0.4 + Math.random() * 0.6}s`,
            animationDelay: `${i * 0.05}s`,
            opacity: 0.8
          }}
        />
      ))}
    </div>
  );
};