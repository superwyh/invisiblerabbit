import React from 'react';
import { motion } from 'framer-motion';

// 1. Sakura (Cherry Blossom) Field - HIGH VISIBILITY VERSION
export const SakuraField: React.FC = () => {
  const petals = Array.from({ length: 25 }).map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 6 + Math.random() * 4,
    size: 14 + Math.random() * 12, // Larger size
    rotation: Math.random() * 360,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden h-screen">
      {petals.map((p) => (
        <div
          key={p.id}
          // Changed color to a vibrant pink/rose gradient and added stronger shadow
          className="absolute bg-gradient-to-br from-pink-400 to-rose-400 rounded-tl-3xl rounded-br-3xl"
          style={{
            left: `${p.left}%`,
            top: '-30px',
            width: `${p.size}px`,
            height: `${p.size * 0.6}px`,
            opacity: 0.9, // Higher opacity
            transform: `rotate(${p.rotation}deg)`,
            animation: `sakura ${p.duration}s linear infinite`,
            animationDelay: `${p.delay}s`,
            boxShadow: '1px 1px 4px rgba(255, 100, 100, 0.3)' // Visible shadow
          }}
        />
      ))}
    </div>
  );
};

// 2. Shooting Star - COLORFUL VERSION & FIXED ROTATION
export const ShootingStars: React.FC = () => {
  const [stars, setStars] = React.useState<number[]>([]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      setStars(prev => [...prev, now]);
      setTimeout(() => {
        setStars(prev => prev.filter(t => t !== now));
      }, 1500);
    }, 2000); // More frequent

    setStars([Date.now()]);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {stars.map((id) => (
        <motion.div
          key={id}
          // FIX: Move rotate to initial/animate props to avoid override by Framer Motion
          initial={{ 
            top: Math.random() * 40 + '%', 
            left: Math.random() * 20 + 70 + '%', 
            opacity: 1, 
            scale: 1,
            rotate: -45 
          }}
          animate={{ x: -500, y: 500, opacity: 0, scale: 0.5 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          // Shortened width slightly for better proportion
          className="absolute w-40 h-[3px] bg-gradient-to-l from-transparent via-sky-500 to-indigo-600 drop-shadow-md"
        />
      ))}
    </div>
  );
};

// 3. Magic Circular Geometry
export const MagicCircle: React.FC<{ className?: string, style?: React.CSSProperties }> = ({ className = "", style }) => {
    return (
        <div className={`absolute pointer-events-none opacity-20 ${className}`} style={style}>
            <div className="relative flex items-center justify-center">
                <div className="absolute w-[60vw] h-[60vw] md:w-[30vw] md:h-[30vw] border border-dashed border-rabbit-sky rounded-full animate-spin-slow" />
                <div className="absolute w-[40vw] h-[40vw] md:w-[20vw] md:h-[20vw] border border-rabbit-lavender rounded-full animate-spin-reverse-slow opacity-50" />
                <div className="absolute w-[30vw] h-[30vw] md:w-[15vw] md:h-[15vw] border border-rabbit-text/10 rotate-45 animate-pulse" />
            </div>
        </div>
    )
}

// 4. Sparkle
export const Sparkle: React.FC<{ style?: React.CSSProperties, delay?: number }> = ({ style, delay = 0 }) => (
    <motion.div 
        style={style}
        className="absolute w-6 h-6 z-10 pointer-events-none mix-blend-multiply"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0], rotate: [0, 45, 90] }}
        transition={{ duration: 3, repeat: Infinity, repeatDelay: 4, delay: delay }}
    >
        <svg viewBox="0 0 24 24" fill="none" className="text-blue-400 drop-shadow-sm">
            <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10L12 0Z" fill="currentColor" />
        </svg>
    </motion.div>
);

// 5. Cloud - FIXED TRANSFORM CONFLICT
export const CloudDecoration: React.FC<{ className?: string, delay?: number }> = ({ className = "", delay = 0 }) => (
    // FIX: Wrapper div handles static class transforms (like scale, position)
    <div className={`absolute text-white pointer-events-none blur-sm drop-shadow-lg ${className}`}>
        <motion.div 
            // Inner motion div handles animation transform (translate)
            animate={{ x: ["-15vw", "15vw"] }} 
            transition={{ 
                duration: 20, 
                repeat: Infinity, 
                repeatType: "mirror", 
                ease: "easeInOut", 
                delay 
            }}
        >
            <svg width="240" height="140" viewBox="0 0 100 60" fill="currentColor" className="opacity-80">
                <path d="M10 40C5 40 0 35 0 30C0 20 10 20 10 20C10 10 25 0 40 0C55 0 65 10 65 15C70 10 85 10 90 25C95 25 100 30 100 40C100 55 85 60 80 60H20C10 60 10 40 10 40Z" />
            </svg>
        </motion.div>
    </div>
);