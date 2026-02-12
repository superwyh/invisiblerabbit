import React from 'react';
import { useTranslation } from 'react-i18next';
import { ViewMode } from '../types';

type LangCode = 'zh' | 'en' | 'ja';

interface LayoutProps {
  children: React.ReactNode;
  onInfoClick: () => void;
  onHomeClick: () => void;
  currentView: ViewMode;
}

const Layout: React.FC<LayoutProps> = ({ children, onInfoClick, onHomeClick, currentView }) => {
  const { t, i18n } = useTranslation();

  const setLang = (lng: LangCode) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('lang', lng);
  };

  return (
    <div className="flex flex-col h-screen w-full px-6 py-4 md:px-12 md:py-8 overflow-hidden select-none bg-white text-black">
      {/* Header */}
      <header className="flex justify-between items-baseline z-10">
        <h1 
          className="text-4xl md:text-6xl font-bold tracking-tight cursor-pointer hover:text-gray-500 transition-colors"
          onClick={onHomeClick}
        >
          {t('common.studioName')}
        </h1>
        <div className="flex items-baseline gap-4 md:gap-6">
          <div className="relative text-lg md:text-2xl font-medium text-gray-300 group/lang">
            <button
              type="button"
              className="flex items-baseline gap-1 cursor-pointer hover:text-gray-500 transition-colors"
              aria-haspopup="listbox"
              aria-expanded="false"
            >
              {t(
                (i18n.language === 'zh' ? 'common.langZh' : i18n.language === 'en' ? 'common.langEn' : 'common.langJa')
              )}
              <span className="text-base opacity-70">▾</span>
            </button>
            <div className="absolute right-0 top-full pt-1 opacity-0 invisible group-hover/lang:opacity-100 group-hover/lang:visible transition-all duration-150 min-w-[6rem]">
              <ul
                className="bg-white border border-gray-200 shadow-lg py-2 rounded"
                role="listbox"
              >
                {(['zh', 'en', 'ja'] as const).map((lng) => (
                  <li key={lng} role="option">
                    <button
                      type="button"
                      onClick={() => setLang(lng)}
                      className={`w-full text-left px-4 py-2 text-lg hover:bg-gray-100 transition-colors ${
                        i18n.language === lng ? 'font-bold bg-gray-50' : ''
                      }`}
                    >
                      {t(lng === 'zh' ? 'common.langZh' : lng === 'en' ? 'common.langEn' : 'common.langJa')}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <button 
            onClick={onInfoClick}
            className={`text-2xl md:text-4xl font-medium transition-colors hover:text-gray-500 ${currentView === ViewMode.INFO ? 'text-black' : 'text-gray-300'}`}
          >
            {t('common.info')}
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow flex flex-col relative overflow-visible my-8 md:my-12">
        {children}
      </main>
    </div>
  );
};

export default Layout;
