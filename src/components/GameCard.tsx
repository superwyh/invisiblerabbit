import React from 'react';
import { GameItem } from '../types';
import { ArrowUpRight, Monitor, Play } from 'lucide-react';

interface GameCardProps {
  game: GameItem;
  lang: 'zh' | 'en';
  onSelect: (game: GameItem) => void;
}

export const GameCard: React.FC<GameCardProps> = ({ game, lang, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(game)}
      className="group bg-white rounded-xl border border-zinc-200 overflow-hidden hover:border-zinc-900 transition-all duration-300 hover:shadow-lg cursor-pointer flex flex-col h-full"
    >
      <div className="relative h-48 sm:h-56 overflow-hidden bg-zinc-100">
        <img
          src={game.coverImage || game.bannerImage}
          alt={game.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className="font-mono-code text-xs bg-zinc-900/90 text-white px-2.5 py-1 rounded-md backdrop-blur-xs">
            {game.number}
          </span>
          {game.hasWebDemo && (
            <span className="text-[10px] font-mono-code bg-emerald-500 text-white px-2 py-1 rounded-md flex items-center gap-1">
              <Play className="w-2.5 h-2.5 fill-current" />
              DEMO
            </span>
          )}
        </div>
        <div className="absolute top-3 right-3">
          <span className="font-mono-code text-xs bg-white/95 text-zinc-900 px-2.5 py-1 rounded-md shadow-xs border border-zinc-200">
            {game.releaseYear}
          </span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            {game.genre.slice(0, 2).map((g, idx) => (
              <span
                key={idx}
                className="text-[10px] font-mono-code uppercase tracking-wider text-zinc-500 bg-zinc-100 px-2 py-0.5 rounded"
              >
                {g}
              </span>
            ))}
          </div>

          <h3 className="font-display text-xl font-bold text-zinc-900 group-hover:text-zinc-600 transition-colors">
            {lang === 'zh' && game.titleZh ? game.titleZh : game.title}
          </h3>

          <p className="text-xs text-zinc-500 mt-2 line-clamp-2 leading-relaxed">
            {lang === 'zh' && game.taglineZh ? game.taglineZh : game.tagline}
          </p>
        </div>

        <div className="mt-5 pt-4 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-500 font-mono-code">
          <span className="flex items-center gap-1.5 truncate max-w-[180px]">
            <Monitor className="w-3.5 h-3.5 text-zinc-400" />
            {game.platforms[0]}
          </span>
          <span className="inline-flex items-center gap-1 text-zinc-900 group-hover:translate-x-1 transition-transform font-medium">
            {lang === 'zh' ? '详情与链接' : 'DETAILS'}
            <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </div>
  );
};
