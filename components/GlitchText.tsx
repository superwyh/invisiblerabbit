import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: React.ElementType;
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, className = "", as: Component = "h1" }) => {
  const [displayText, setDisplayText] = useState(text);
  const chars = "!@#$%^&*()_+-=[]{}|;':\",./<>?ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  useEffect(() => {
    let iteration = 0;
    let interval: ReturnType<typeof setInterval>;

    const scramble = () => {
      interval = setInterval(() => {
        setDisplayText(
          text
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return text[index];
              }
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("")
        );

        if (iteration >= text.length) {
          clearInterval(interval);
        }

        iteration += 1 / 3;
      }, 30);
    };

    // Trigger initially
    scramble();

    // Trigger randomly every few seconds for that "unstable" META feel
    const randomTrigger = setInterval(() => {
      if (Math.random() > 0.8) {
        iteration = 0;
        scramble();
      }
    }, 5000);

    return () => {
      clearInterval(interval);
      clearInterval(randomTrigger);
    };
  }, [text]);

  return (
    <motion.div className="relative inline-block group">
      <Component className={`relative z-10 ${className}`}>
        {displayText}
      </Component>
      <Component className={`absolute top-0 left-0 -z-10 text-rabbit-neon opacity-0 group-hover:opacity-70 group-hover:translate-x-[2px] transition-all duration-75 ${className}`}>
        {text}
      </Component>
      <Component className={`absolute top-0 left-0 -z-10 text-rabbit-cyan opacity-0 group-hover:opacity-70 group-hover:-translate-x-[2px] transition-all duration-75 ${className}`}>
        {text}
      </Component>
    </motion.div>
  );
};

export default GlitchText;