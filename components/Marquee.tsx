import React from 'react';
import { motion } from 'framer-motion';

interface MarqueeProps {
  text: string;
  direction?: 'left' | 'right';
  speed?: number;
  className?: string;
}

const Marquee: React.FC<MarqueeProps> = ({ text, direction = 'left', speed = 40, className = "" }) => {
  return (
    <div className={`relative flex overflow-hidden whitespace-nowrap py-6 ${className}`}>
      <motion.div
        className="flex gap-20 items-center"
        animate={{ x: direction === 'left' ? '-50%' : '0%' }}
        initial={{ x: direction === 'left' ? '0%' : '-50%' }}
        transition={{ repeat: Infinity, ease: "linear", duration: speed }}
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <span key={i} className="text-3xl md:text-5xl font-serif font-light tracking-wide text-rabbit-text/10 select-none">
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;