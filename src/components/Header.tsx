import React from 'react';
import { StudioInfo } from '../types';
import { MinimalAudio } from './MinimalAudio';
import { Info, Settings, LayoutList, Grid, Globe } from 'lucide-react';

interface HeaderProps {
  studioInfo: StudioInfo;
  gameCount: number;
  lang: 'zh' | 'en';
  onToggleLang: () => void;
  layoutMode: 'list' | 'cards' | 'expanded';
  onChangeLayoutMode: (mode: 'list' | 'cards' | 'expanded') => void;
  onOpenAbout: () => void;
  onOpenManager: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  studioInfo,
  gameCount,
  lang,
  onToggleLang,
  layoutMode,
  onChangeLayoutMode,
  onOpenAbout,
  onOpenManager,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-zinc-100 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Left: Studio Branding */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenAbout}
            className="group flex flex-col text-left focus:outline-none"
          >
            <span className="font-display font-extrabold text-xl sm:text-2xl tracking-wider text-zinc-900 group-hover:text-zinc-600 transition-colors">
              {lang === 'zh' ? studioInfo.nameZh : studioInfo.name}
            </span>
            <span className="text-[11px] font-mono-code text-zinc-400 tracking-widest uppercase mt-0.5">
              {lang === 'zh' ? studioInfo.taglineZh : studioInfo.tagline}
            </span>
          </button>

          <span className="hidden md:inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-mono-code bg-zinc-100 text-zinc-600 border border-zinc-200">
            {gameCount} {lang === 'zh' ? '款独立作品' : 'TITLES'}
          </span>
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Ambient Sound synth */}
          <div className="hidden sm:block">
            <MinimalAudio />
          </div>

          {/* Layout switcher */}
          <div className="hidden lg:flex items-center p-1 bg-zinc-50 border border-zinc-200 rounded-lg">
            <button
              onClick={() => onChangeLayoutMode('list')}
              className={`p-1.5 rounded-md text-xs transition-all ${
                layoutMode === 'list'
                  ? 'bg-white text-zinc-900 shadow-xs font-medium'
                  : 'text-zinc-400 hover:text-zinc-700'
              }`}
              title={lang === 'zh' ? '极简单排列表' : 'Minimal List'}
            >
              <LayoutList className="w-4 h-4" />
            </button>
            <button
              onClick={() => onChangeLayoutMode('cards')}
              className={`p-1.5 rounded-md text-xs transition-all ${
                layoutMode === 'cards'
                  ? 'bg-white text-zinc-900 shadow-xs font-medium'
                  : 'text-zinc-400 hover:text-zinc-700'
              }`}
              title={lang === 'zh' ? '图文卡片视图' : 'Card Grid'}
            >
              <Grid className="w-4 h-4" />
            </button>
          </div>

          {/* Language Toggle */}
          <button
            onClick={onToggleLang}
            className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-mono-code border border-zinc-200 rounded-lg hover:border-zinc-400 text-zinc-700 transition-colors"
            title="Switch Language"
          >
            <Globe className="w-3.5 h-3.5 text-zinc-500" />
            <span>{lang === 'zh' ? 'EN' : '中文'}</span>
          </button>

          {/* About Studio Modal Trigger */}
          <button
            onClick={onOpenAbout}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium border border-zinc-200 rounded-lg hover:bg-zinc-900 hover:text-white hover:border-zinc-900 text-zinc-800 transition-all duration-200"
          >
            <Info className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{lang === 'zh' ? '工作室简介' : 'ABOUT'}</span>
          </button>

          {/* Manage Games Trigger */}
          <button
            onClick={onOpenManager}
            className="p-1.5 text-zinc-500 hover:text-zinc-900 border border-zinc-200 rounded-lg hover:border-zinc-400 transition-colors"
            title={lang === 'zh' ? '管理/添加游戏列表' : 'Manage Games'}
          >
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
