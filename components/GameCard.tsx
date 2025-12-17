import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Gamepad2, Sparkles } from 'lucide-react';
import { Game } from '../types';
import { useLanguage } from './LanguageContext';

interface GameCardProps {
  game: Game;
  index: number;
}

const GameCard: React.FC<GameCardProps> = ({ game, index }) => {
  const { t } = useLanguage();

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
      }}
      className="group flex flex-col h-full"
    >
      {/* Image / Cover - Soft Rounded */}
      <div className="relative aspect-[4/5] rounded-2xl mb-6 shadow-xl shadow-blue-900/5 group-hover:shadow-2xl group-hover:shadow-blue-500/10 transition-shadow duration-500 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 z-10 opacity-60 group-hover:opacity-40 transition-opacity" />
        
        <motion.img 
            src={game.imageUrl} 
            alt={game.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
        />
        
        {/* Type Tag */}
        <div className="absolute top-4 left-4 z-20">
             <span className="px-3 py-1 bg-white/90 backdrop-blur text-[10px] uppercase tracking-widest rounded-full shadow-sm font-sans font-bold text-gray-600">
                {game.type}
             </span>
        </div>
      </div>

      {/* Info */}
      <div className="flex-1 flex flex-col px-2 text-center items-center">
        <h3 className="text-2xl font-serif text-rabbit-text mb-2 group-hover:text-rabbit-accent transition-colors">
            {game.title}
        </h3>
        {game.subtitle && (
            <p className="text-xs font-serif italic text-gray-400 mb-2">{game.subtitle}</p>
        )}
        <p className="text-sm text-gray-500 leading-relaxed font-light mb-6 line-clamp-3">
            {game.description}
        </p>

        {/* Action Buttons */}
        <div className="mt-auto flex flex-col gap-3 w-full max-w-[240px]">
             
             {/* Steam Button */}
             {game.isSteamPending ? (
                <div className="w-full px-4 py-2.5 rounded-full bg-gray-50 border border-gray-100 text-gray-400 text-xs font-sans flex items-center justify-center gap-2 cursor-not-allowed">
                    <Sparkles size={14} />
                    <span>{t('games.comingSoon')}</span>
                </div>
             ) : (
                <a href={game.steamLink} className="w-full px-4 py-2.5 rounded-full bg-rabbit-text text-white hover:bg-rabbit-accent hover:shadow-lg hover:shadow-blue-200 transition-all text-xs font-sans flex items-center justify-center gap-2 group/btn">
                    <Gamepad2 size={14} />
                    <span>{t('games.viewSteam')}</span>
                    <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                </a>
             )}
             
             {/* Website Button */}
             {game.websiteLink && (
                 <a href={game.websiteLink} className="w-full px-4 py-2.5 rounded-full border border-gray-200 hover:border-rabbit-accent/30 hover:bg-blue-50/50 transition-colors text-xs font-sans flex items-center justify-center gap-2 text-gray-500 hover:text-rabbit-accent">
                    <Globe size={14} />
                    <span>{t('games.officialSite')}</span>
                 </a>
             )}
        </div>
      </div>
    </motion.div>
  );
};

export default GameCard;