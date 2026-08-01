import React, { useState } from 'react';
import { GameItem } from '../types';
import { ArrowUpRight, Monitor, Play, Sparkles } from 'lucide-react';

interface GameRowProps {
  game: GameItem;
  lang: 'zh' | 'en';
  onSelect: (game: GameItem) => void;
  index: number;
}

export const GameRow: React.FC<GameRowProps> = ({ game, lang, onSelect, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getStatusBadge = (status: GameItem['status']) => {
    switch (status) {
      case 'RELEASED':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono-code bg-emerald-50 text-emerald-700 border border-emerald-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            {lang === 'zh' ? '已发售' : 'RELEASED'}
          </span>
        );
      case 'EARLY_ACCESS':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono-code bg-amber-50 text-amber-700 border border-amber-200">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            {lang === 'zh' ? '抢先体验' : 'EARLY ACCESS'}
          </span>
        );
      case 'IN_DEVELOPMENT':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono-code bg-zinc-100 text-zinc-600 border border-zinc-200">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
            {lang === 'zh' ? '开发中' : 'IN DEV'}
          </span>
        );
      case 'ANNOUNCED':
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono-code bg-purple-50 text-purple-700 border border-purple-200">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
            {lang === 'zh' ? '尚未公开' : 'ANNOUNCED'}
          </span>
        );
    }
  };

  return (
    <div
      onClick={() => onSelect(game)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative border-b border-zinc-100 py-7 px-4 sm:px-6 transition-all duration-300 hover:bg-zinc-50/90 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4"
    >
      {/* Left side: Number, Title, Tagline */}
      <div className="flex items-start md:items-center gap-6 z-10">
        <span className="font-mono-code text-sm text-zinc-300 group-hover:text-zinc-900 transition-colors duration-300 font-medium">
          {game.number || (index + 1 < 10 ? `0${index + 1}` : `${index + 1}`)}
        </span>

        <div className="flex flex-col">
          <div className="flex items-center gap-3">
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight group-hover:translate-x-2 transition-transform duration-300">
              {lang === 'zh' && game.titleZh ? game.titleZh : game.title}
            </h2>
            {game.hasWebDemo && (
              <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-mono-code bg-zinc-900 text-white px-2 py-0.5 rounded-md">
                <Play className="w-2.5 h-2.5 fill-current" />
                DEMO
              </span>
            )}
          </div>

          <p className="text-xs sm:text-sm text-zinc-500 font-normal mt-1 line-clamp-1 max-w-xl group-hover:text-zinc-700 transition-colors">
            {lang === 'zh' && game.taglineZh ? game.taglineZh : game.tagline}
          </p>
        </div>
      </div>

      {/* Right side: Platforms, Year, Status badge, Action indicator */}
      <div className="flex items-center justify-between md:justify-end gap-4 sm:gap-6 z-10 pt-2 md:pt-0 border-t md:border-t-0 border-zinc-100/60">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono-code text-zinc-400">
            {game.releaseYear}
          </span>
          <div className="hidden sm:flex items-center gap-1.5 text-xs text-zinc-400">
            <Monitor className="w-3.5 h-3.5" />
            <span className="max-w-[140px] truncate">{game.platforms[0]}</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {getStatusBadge(game.status)}

          <div className="w-8 h-8 rounded-full border border-zinc-200 group-hover:border-zinc-900 group-hover:bg-zinc-900 group-hover:text-white flex items-center justify-center text-zinc-400 transition-all duration-300">
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>
      </div>

      {/* Subtle hover background preview image thumbnail on right desktop */}
      {isHovered && game.coverImage && (
        <div className="hidden lg:block absolute right-32 top-1/2 -translate-y-1/2 w-48 h-28 rounded-lg overflow-hidden border border-zinc-300 shadow-xl pointer-events-none z-20 animate-in fade-in zoom-in-95 duration-200">
          <img
            src={game.coverImage}
            alt={game.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-2">
            <span className="text-[10px] font-mono-code text-white/90 truncate flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-emerald-400" />
              {game.genre[0]}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
