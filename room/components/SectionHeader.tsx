import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  theme?: 'light' | 'dark';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, align = 'left', theme = 'dark' }) => {
  const alignClass = align === 'center' ? 'items-center text-center' : align === 'right' ? 'items-end text-right' : 'items-start text-left';
  const textClass = theme === 'dark' ? 'text-white' : 'text-black';
  const lineClass = theme === 'dark' ? 'bg-red-600' : 'bg-black';

  return (
    <div className={`flex flex-col mb-12 ${alignClass}`}>
      <h2 className={`text-4xl md:text-6xl font-black tracking-tighter uppercase mb-2 ${textClass}`}>
        {title}
      </h2>
      <div className={`w-24 h-2 ${lineClass} mb-4 transform skew-x-12`} />
      {subtitle && (
        <p className={`text-lg md:text-xl font-serif text-gray-400 max-w-2xl`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};