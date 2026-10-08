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

const LaurelBranch = ({ className }: { className: string }) => (
  <svg viewBox="0 0 48 180" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M42 174C13 150 6 111 12 73C15 50 23 30 35 12" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <ellipse cx="31" cy="17" rx="4" ry="10" transform="rotate(26 31 17)" />
    <ellipse cx="20" cy="42" rx="5" ry="11" transform="rotate(-32 20 42)" />
    <ellipse cx="32" cy="47" rx="5" ry="10" transform="rotate(54 32 47)" />
    <ellipse cx="10" cy="64" rx="5" ry="11" transform="rotate(-30 10 64)" />
    <ellipse cx="27" cy="69" rx="5" ry="11" transform="rotate(56 27 69)" />
    <ellipse cx="7" cy="91" rx="5" ry="11" transform="rotate(-14 7 91)" />
    <ellipse cx="26" cy="94" rx="5" ry="11" transform="rotate(72 26 94)" />
    <ellipse cx="10" cy="119" rx="5" ry="11" transform="rotate(-34 10 119)" />
    <ellipse cx="30" cy="119" rx="5" ry="11" transform="rotate(76 30 119)" />
    <ellipse cx="21" cy="146" rx="5" ry="11" transform="rotate(-47 21 146)" />
    <ellipse cx="38" cy="140" rx="5" ry="10" transform="rotate(57 38 140)" />
  </svg>
);

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
  const labels: Record<Language, { awards: string; close: string }> = {
    zh: { awards: '获奖与入选', close: '关闭 (Esc)' },
    en: { awards: 'AWARDS & SELECTIONS', close: 'Close (Esc)' },
    ja: { awards: '受賞・選出', close: '閉じる (Esc)' },
    ko: { awards: '수상 및 선정', close: '닫기 (Esc)' },
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
            <section aria-label={labels[lang].awards} className="border-t border-zinc-200 pt-6">
              <h2 className="text-xs font-mono-code text-zinc-600 uppercase tracking-wider">
                {labels[lang].awards}
              </h2>
              <div className="grid gap-6 sm:grid-cols-2">
                {awardGroups.map((group) => (
                  <div key={`${group.organizer}-${group.awards.join('-')}`} className="relative flex min-h-52 items-center justify-center px-12 py-7 text-center text-zinc-950">
                    <LaurelBranch className="pointer-events-none absolute left-0 top-1/2 h-44 w-12 -translate-y-1/2" />
                    <LaurelBranch className="pointer-events-none absolute right-0 top-1/2 h-44 w-12 -translate-y-1/2 -scale-x-100" />
                    <div>
                      <ul className="space-y-2.5 font-display text-base font-semibold leading-relaxed">
                        {group.awards.map((award) => (
                          <li key={award} aria-label={award}>
                            {award === 'SELECTED INDIE 80' ? (
                              <>
                                <span className="block font-mono-code text-[11px] tracking-[0.2em]">SELECTED </span>
                                <span className="mt-2 block text-2xl font-bold tracking-wide">INDIE 80</span>
                              </>
                            ) : award}
                          </li>
                        ))}
                      </ul>
                      {group.organizer && (
                        <p className="mt-5 text-xs leading-relaxed text-zinc-600">
                          {group.organizer}
                        </p>
                      )}
                    </div>
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
