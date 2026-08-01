import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { GameItem, Language } from '../types';
import { X, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { playClickSound } from '../utils/audio';

interface GameDetailModalProps {
  game: GameItem | null;
  allGames: GameItem[];
  lang: Language;
  onClose: () => void;
  onSelectGame: (game: GameItem) => void;
}

export const GameDetailModal: React.FC<GameDetailModalProps> = ({
  game,
  allGames,
  lang,
  onClose,
  onSelectGame,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!game) return null;

  const currentIndex = allGames.findIndex((g) => g.id === game.id);
  const prevGame = allGames[(currentIndex - 1 + allGames.length) % allGames.length];
  const nextGame = allGames[(currentIndex + 1) % allGames.length];

  const localizedGame = lang === 'zh' ? undefined : game.locales?.[lang];
  const titleFor = (item: GameItem) => lang === 'zh'
    ? item.titleZh ?? item.title
    : item.locales?.[lang]?.title ?? item.title;
  const titleToShow = titleFor(game);
  const descToShow = lang === 'zh'
    ? game.descriptionZh ?? game.description
    : localizedGame?.description ?? game.description;
  const detailsToShow = lang === 'zh'
    ? game.detailsZh ?? game.details
    : localizedGame?.details ?? game.details;
  const fallbackAwardGroups = game.awards?.length
    ? [{ organizer: game.awardOrganizer ?? '', awards: game.awards }]
    : [];
  const awardGroups = localizedGame?.awardGroups ?? game.awardGroups ?? fallbackAwardGroups;
  const labels: Record<Language, { awards: string; organizer: string; close: string }> = {
    zh: { awards: '获奖', organizer: '主办方：', close: '关闭 (Esc)' },
    en: { awards: 'AWARDS', organizer: 'Organized by: ', close: 'Close (Esc)' },
    ja: { awards: '受賞歴', organizer: '主催：', close: '閉じる (Esc)' },
    ko: { awards: '수상', organizer: '주최：', close: '닫기 (Esc)' },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={() => {
        playClickSound();
        onClose();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-zinc-950/30 backdrop-blur-xs"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 12 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-white rounded-xl shadow-xl overflow-hidden flex flex-col max-h-[90vh] border border-zinc-200 p-6 sm:p-10"
      >
        {/* Top Close Button */}
        <div className="flex items-center justify-between mb-6">
          <div className="text-xs font-mono-code text-zinc-400">
            {game.releaseYear} • {game.platforms.join(' / ')}
          </div>
          <button
            onClick={() => {
              playClickSound();
              onClose();
            }}
            className="p-1.5 text-zinc-400 hover:text-zinc-900 transition-colors cursor-pointer"
            title={labels[lang].close}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto space-y-6 pr-1">
          {/* Game Title */}
          <div>
            <h1 className="font-display text-2xl sm:text-3xl font-medium text-zinc-900">
              {titleToShow}
            </h1>
          </div>

          {/* Clean Main Cover Image */}
          {game.coverImage && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="w-full h-56 sm:h-72 rounded-lg overflow-hidden bg-zinc-100"
            >
              <img
                src={game.coverImage}
                alt={game.title}
                className="w-full h-full object-cover"
              />
            </motion.div>
          )}

          {/* Description */}
          <p className="text-sm text-zinc-600 leading-relaxed font-normal">
            {descToShow}
          </p>

          {detailsToShow?.map((detail) => (
            <p key={detail} className="text-sm text-zinc-600 leading-relaxed font-normal whitespace-pre-line">
              {detail}
            </p>
          ))}

          {awardGroups.length > 0 && (
            <section className="pt-2 border-t border-zinc-100 space-y-2">
              <span className="text-[11px] font-mono-code text-zinc-400 uppercase tracking-wider block">
                {labels[lang].awards}
              </span>
              <div className="space-y-3">
                {awardGroups.map((group, index) => (
                  <div key={`${group.organizer}-${group.awards.join('-')}`} className={index > 0 ? 'pt-3 border-t border-zinc-100' : ''}>
                    {group.organizer && (
                      <p className="text-xs text-zinc-500 mb-2">
                        {labels[lang].organizer}{group.organizer}
                      </p>
                    )}
                    <ul className="flex flex-wrap gap-2">
                      {group.awards.map((award) => (
                        <li key={award} className="text-xs text-zinc-800 border border-zinc-200 rounded-full px-3 py-1">
                          {award}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Direct Store / Media Links */}
          {game.links && game.links.length > 0 && (
            <div className="pt-2 border-t border-zinc-100">
              <div className="flex flex-wrap gap-3">
                {game.links.map((link) => (
                  <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playClickSound}
                    className="inline-flex items-center gap-2 py-1 text-sm sm:text-base text-zinc-900 hover:text-zinc-500 font-semibold underline underline-offset-4 transition-colors"
                  >
                    <span>{link.label}</span>
                    <ExternalLink className="w-4 h-4 text-zinc-500" />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer Navigation */}
        <div className="pt-6 mt-6 border-t border-zinc-100 flex items-center justify-between text-xs font-mono-code text-zinc-400">
          <button
            onClick={() => {
              playClickSound();
              onSelectGame(prevGame);
            }}
            className="flex items-center gap-1 hover:text-zinc-900 transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>{titleFor(prevGame)}</span>
          </button>

          <button
            onClick={() => {
              playClickSound();
              onSelectGame(nextGame);
            }}
            className="flex items-center gap-1 hover:text-zinc-900 transition-colors cursor-pointer"
          >
            <span>{titleFor(nextGame)}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};
