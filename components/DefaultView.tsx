import React from 'react';
import { useTranslation } from 'react-i18next';

const DefaultView: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full h-full flex flex-col lg:flex-row items-center justify-between animate-in fade-in duration-700 gap-12 relative min-h-0">
      <div className="max-w-6xl z-10 relative">
        <h2 
          className="text-5xl md:text-7xl lg:text-[5.4rem] font-bold tracking-tighter text-black relative px-4 py-2"
          style={{
            lineHeight: '1.2',
            background: 'linear-gradient(to right, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0.3) 100%)',
            backdropFilter: 'blur(2px)',
            WebkitBackdropFilter: 'blur(2px)',
          }}
        >
          {t('home.intro')}
        </h2>
      </div>
      
      <div 
        className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center justify-center z-0 group/logo cursor-default min-w-[200px] min-h-[200px] md:min-w-[300px] md:min-h-[300px]"
        style={{ transform: 'translateY(-50%) translateX(15%)' }}
      >
        <img 
          src="/IMG/Logo.png" 
          alt="Logo" 
          className="w-[1200px] h-[1200px] md:w-[1500px] md:h-[1500px] lg:w-[1800px] lg:h-[1800px] object-contain opacity-0 group-hover/logo:opacity-90 transition-opacity duration-300"
        />
      </div>
    </div>
  );
};

export default DefaultView;