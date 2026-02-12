import React from 'react';
import { useTranslation } from 'react-i18next';
import { GameProject } from '../types';

interface GameViewProps {
  game: GameProject;
}

const GameView: React.FC<GameViewProps> = ({ game }) => {
  const { t } = useTranslation();
  const title = t(`games.${game.id}.title`);
  // 确保使用正确的 key 路径，i18next 需要字符串 key
  const descKey = `games.${String(game.id)}.description`;
  const rawDesc = t(descKey, { returnObjects: true });
  const paragraphs = Array.isArray(rawDesc) ? rawDesc : [rawDesc];

  return (
    <div className="w-full h-full flex flex-col md:flex-row gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500 overflow-y-auto custom-scrollbar">
      <div className="flex-1 flex flex-col justify-center">
        <div className="mb-6">
          <h2 className="text-5xl md:text-8xl font-bold leading-none mb-8 tracking-tighter">
            {title}
          </h2>
        </div>
        
        <div className="max-w-xl">
          <div className="text-xl md:text-2xl leading-relaxed text-black/70 font-normal space-y-6">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{String(paragraph)}</p>
            ))}
          </div>
          
          <div className="mt-12">
            <button className="text-xl md:text-2xl font-bold hover:text-gray-400 transition-colors uppercase tracking-widest flex items-center group">
              {t('game.steam')}
              <span className="ml-4 transition-transform group-hover:translate-x-2">→</span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <div className="relative w-full max-h-[60vh] bg-gray-50 overflow-hidden group">
          <img 
            src={game.imageUrl} 
            alt={title} 
            className="w-full h-full max-h-[60vh] object-contain transition-all duration-1000 ease-in-out transform group-hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default GameView;
