import React from 'react';
import { motion } from 'framer-motion';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#f8fafd]">
      {/* Anime Sky Gradient Base */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-200 via-blue-50 to-white opacity-80" />
      
      {/* Sun Beams / God Rays - The "Shinkai" Light */}
      <div className="absolute top-[-20%] right-[-10%] w-[100vw] h-[100vw] rounded-full bg-gradient-to-b from-white/40 via-transparent to-transparent blur-[80px] rotate-[-45deg] pointer-events-none mix-blend-overlay" />
      <div className="absolute top-[-10%] left-[-10%] w-[80vw] h-[100vh] bg-gradient-to-r from-rabbit-sky/10 via-transparent to-transparent rotate-[30deg] pointer-events-none" />

      {/* Moving Color Orbs */}
      <motion.div 
        animate={{ 
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[10%] w-[50vw] h-[50vw] bg-blue-300/20 rounded-full blur-[120px]" 
      />
      
      <motion.div 
        animate={{ 
          x: [0, -30, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[30%] right-[-10%] w-[40vw] h-[40vw] bg-purple-200/30 rounded-full blur-[100px]" 
      />

      <motion.div 
        animate={{ 
           opacity: [0.3, 0.6, 0.3],
           scale: [1, 1.2, 1]
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[40vw] bg-orange-100/40 rounded-full blur-[120px]" 
      />
    </div>
  );
};

export default Background;