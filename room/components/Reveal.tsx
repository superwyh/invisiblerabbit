import React from 'react';
import { useInView } from '../hooks/useInView';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'left' | 'right' | 'none';
}

export const Reveal: React.FC<RevealProps> = ({ 
  children, 
  delay = 0, 
  className = "",
  direction = 'up'
}) => {
  const { ref, isInView } = useInView();

  const getTransform = () => {
    if (!isInView) {
      switch (direction) {
        case 'up': return 'translate-y-12';
        case 'left': return '-translate-x-12';
        case 'right': return 'translate-x-12';
        default: return '';
      }
    }
    return 'translate-y-0 translate-x-0';
  };

  const baseTransition = `transition-all duration-1000 ease-out`;
  
  return (
    <div 
      ref={ref}
      className={`${baseTransition} ${getTransform()} ${isInView ? 'opacity-100' : 'opacity-0'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};