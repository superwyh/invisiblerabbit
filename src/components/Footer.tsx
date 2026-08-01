import React, { useState, useEffect } from 'react';
import { StudioInfo } from '../types';
import { ArrowUp, Sparkles, Mail, Heart } from 'lucide-react';

interface FooterProps {
  studioInfo: StudioInfo;
  lang: 'zh' | 'en';
  onOpenAbout: () => void;
}

export const Footer: React.FC<FooterProps> = ({ studioInfo, lang, onOpenAbout }) => {
  const [timeStr, setTimeStr] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString('en-US', {
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        }) + ' UTC'
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-zinc-100 py-12 px-6 mt-20 transition-all">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        
        {/* Left Studio Info */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-lg text-zinc-900">
              {lang === 'zh' ? studioInfo.nameZh : studioInfo.name}
            </span>
            <span className="text-[10px] font-mono-code text-zinc-400 border border-zinc-200 px-2 py-0.5 rounded-full">
              STUDIO
            </span>
          </div>
          <p className="text-xs text-zinc-500 max-w-md">
            {lang === 'zh' ? studioInfo.manifestoZh : studioInfo.manifesto}
          </p>
          <div className="pt-1 flex items-center gap-4 text-xs font-mono-code text-zinc-400">
            <span>© {new Date().getFullYear()} {studioInfo.name}</span>
            <span>•</span>
            <button
              onClick={onOpenAbout}
              className="hover:text-zinc-900 underline underline-offset-2 transition-colors"
            >
              {lang === 'zh' ? '关于与媒体资料' : 'About & Press Kit'}
            </button>
          </div>
        </div>

        {/* Right Time & Back To Top */}
        <div className="flex items-center gap-6 self-end md:self-auto">
          <div className="text-right font-mono-code text-xs text-zinc-400 hidden sm:block">
            <span className="block text-zinc-800 font-medium">{timeStr}</span>
            <span className="text-[10px] text-zinc-400">{studioInfo.location}</span>
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-full border border-zinc-200 hover:border-zinc-900 hover:bg-zinc-900 hover:text-white text-zinc-500 transition-all duration-300 shadow-xs"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
