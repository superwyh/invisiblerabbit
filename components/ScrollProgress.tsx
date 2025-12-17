import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed right-0 top-0 bottom-0 w-12 hidden md:flex flex-col items-center justify-center z-40 pointer-events-none">
      <div className="h-[40vh] w-[1px] bg-gray-200 relative">
        <motion.div 
            style={{ scaleY, transformOrigin: "top" }}
            className="absolute top-0 left-0 w-full h-full bg-black"
        />
      </div>
    </div>
  );
};

export default ScrollProgress;