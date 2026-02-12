import React from 'react';
import { useTranslation } from 'react-i18next';

const InfoView: React.FC = () => {
  const { t } = useTranslation();
  const emailUser = 'superwyh';
  const emailDomain = 'gmail.com';

  return (
    <div className="w-full h-full animate-in fade-in slide-in-from-right-4 duration-500 overflow-y-auto custom-scrollbar">
      <div className="max-w-4xl">
        <h2 className="text-4xl md:text-7xl font-bold mb-12 tracking-tight">{t('about.title')}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-xl md:text-2xl leading-relaxed">
          <div className="md:col-span-2 space-y-8">
            <p>{t('about.p1')}</p>
            <p>{t('about.p2')}</p>
            <p className="italic font-medium border-l-4 border-black pl-6">{t('about.quote')}</p>
          </div>
          
          <div className="space-y-8">
            <div>
              <p className="font-bold mb-2 uppercase tracking-widest text-sm opacity-50">{t('about.location')}</p>
              <p>{t('about.locationValue')}</p>
            </div>
            
            <div>
              <p className="font-bold mb-2 uppercase tracking-widest text-sm opacity-50">{t('about.contact')}</p>
              <p 
                className="cursor-pointer hover:underline"
                onClick={() => window.location.href = `mailto:${emailUser}@${emailDomain}`}
              >
                {emailUser} [at] {emailDomain}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoView;