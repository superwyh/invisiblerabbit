import React from 'react';

interface GlitchTitleProps {
  text: string;
  className?: string;
}

export const GlitchTitle: React.FC<GlitchTitleProps> = ({ text, className = "" }) => {
  return (
    <div className={`relative inline-block ${className}`}>
      <span className="glitch-text relative z-10" data-text={text}>
        {text}
      </span>
    </div>
  );
};