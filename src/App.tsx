import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GameItem, Language, StudioInfo } from './types';
import { DEFAULT_GAMES, INITIAL_STUDIO_INFO } from './data/defaultGames';
import { GameDetailModal } from './components/GameDetailModal';
import { StudioAboutModal } from './components/StudioAboutModal';
import { ExhibitionList } from './components/ExhibitionList';
import { playClickSound, playModalOpenSound } from './utils/audio';

export default function App() {
  const [games] = useState<GameItem[]>(DEFAULT_GAMES);
  const [studioInfo] = useState<StudioInfo>(INITIAL_STUDIO_INFO);
  const [selectedGame, setSelectedGame] = useState<GameItem | null>(null);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [lang, setLang] = useState<Language>('zh');
  const languages: Language[] = ['zh', 'en', 'ja', 'ko'];
  const languageLabels: Record<Language, string> = { zh: '中文', en: 'EN', ja: '日本語', ko: '한국어' };
  const studioName = lang === 'zh'
    ? studioInfo.nameZh
    : lang === 'en'
      ? studioInfo.name
      : studioInfo.locales?.[lang]?.name ?? studioInfo.name;
  const studioTitle: Record<Language, string> = { zh: '查看工作室介绍', en: 'About Studio', ja: 'スタジオ紹介', ko: '스튜디오 소개' };

  const handleOpenAbout = () => {
    playModalOpenSound();
    setIsAboutOpen(true);
  };

  const handleSelectGame = (game: GameItem) => {
    playModalOpenSound();
    setSelectedGame(game);
  };

  const handleToggleLang = () => {
    playClickSound();
    setLang((prev) => languages[(languages.indexOf(prev) + 1) % languages.length]);
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 flex flex-col justify-between font-sans selection:bg-zinc-900 selection:text-white px-8 sm:px-16 py-10 sm:py-16">

      {/* Top Header: Left Studio Name (Clickable for Intro), Right Language Switcher */}
      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-end"
      >
        <button
          onClick={handleToggleLang}
          className="text-xs font-mono-code text-zinc-400 hover:text-zinc-900 transition-colors uppercase tracking-wider cursor-pointer"
        >
          {languageLabels[lang]}
        </button>
      </motion.header>

      {/* Main Content: Pure white clean list of Game Name + Release Year */}
      <main className="my-auto py-12 max-w-xl w-full mx-auto">
        <button
          onClick={handleOpenAbout}
          className="mb-8 flex w-full items-center justify-center gap-2 font-display text-base sm:text-lg tracking-[0.12em] font-bold text-zinc-500 hover:text-zinc-900 transition-colors uppercase cursor-pointer"
          title={studioTitle[lang]}
        >
          <img src="/IMG/logo.png" alt="" aria-hidden="true" className="h-5 w-auto shrink-0 sm:h-6" />
          <span>{studioName}</span>
        </button>
        <div className="space-y-5">
          {games.map((game, idx) => {
            const titleToShow = lang === 'zh'
              ? game.titleZh ?? game.title
              : lang === 'en'
                ? game.title
                : game.locales?.[lang]?.title ?? game.title;

            return (
              <motion.div
                key={game.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ x: 4 }}
                onClick={() => handleSelectGame(game)}
                className="cursor-pointer group flex items-baseline justify-between py-1 transition-colors"
              >
                <div className="flex min-w-0 items-center gap-2.5">
                  {game.icon ? (
                    <img
                      src={game.icon}
                      alt=""
                      aria-hidden="true"
                      className="h-6 w-6 shrink-0 rounded-sm object-cover sm:h-7 sm:w-7"
                    />
                  ) : (
                    <span aria-hidden="true" className="flex h-6 w-6 shrink-0 items-center justify-center text-lg sm:h-7 sm:w-7">
                      {game.iconEmoji ?? '🎮'}
                    </span>
                  )}
                  <h2 className="min-w-0 font-display text-sm sm:text-base font-normal text-zinc-800 group-hover:text-zinc-400 transition-colors">
                    {titleToShow}
                  </h2>
                </div>
                <span className="text-xs font-mono-code text-zinc-400 group-hover:text-zinc-300 transition-colors ml-4 shrink-0">
                  {game.releaseYear}
                </span>
              </motion.div>
            );
          })}
        </div>
        <ExhibitionList lang={lang} />
      </main>

      {/* Footer: Clean empty spacing */}
      <footer className="h-6" />

      {/* Simplified Studio Intro Modal */}
      <AnimatePresence>
        {isAboutOpen && (
          <StudioAboutModal
            studioInfo={studioInfo}
            lang={lang}
            onClose={() => setIsAboutOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Simplified Clean Game Detail Modal */}
      <AnimatePresence>
        {selectedGame && (
          <GameDetailModal
            game={selectedGame}
            allGames={games}
            lang={lang}
            onClose={() => setSelectedGame(null)}
            onSelectGame={(g) => setSelectedGame(g)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
