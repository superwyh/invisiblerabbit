import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Language, StudioInfo } from '../types';
import { X, ExternalLink } from 'lucide-react';
import { playClickSound } from '../utils/audio';

interface StudioAboutModalProps {
  studioInfo: StudioInfo;
  lang: Language;
  onClose: () => void;
}

export const StudioAboutModal: React.FC<StudioAboutModalProps> = ({
  studioInfo,
  lang,
  onClose,
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

  const localizedStudio = lang === 'ja' || lang === 'ko' ? studioInfo.locales?.[lang] : undefined;
  const manifestoText = lang === 'zh'
    ? studioInfo.manifestoZh
    : localizedStudio?.manifesto ?? studioInfo.manifesto;
  const studioName = lang === 'zh'
    ? studioInfo.nameZh
    : localizedStudio?.name ?? studioInfo.name;
  const location = localizedStudio?.location ?? studioInfo.location;
  const team = studioInfo.team?.[lang];
  const labels: Record<Language, { close: string; contact: string; socials: string }> = {
    zh: { close: '关闭 (Esc)', contact: '联系邮箱', socials: '社交平台' },
    en: { close: 'Close (Esc)', contact: 'CONTACT', socials: 'SOCIALS' },
    ja: { close: '閉じる (Esc)', contact: '連絡先', socials: 'ソーシャル' },
    ko: { close: '닫기 (Esc)', contact: '연락처', socials: '소셜' },
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-zinc-950/20 backdrop-blur-xs"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 10 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white rounded-xl shadow-xl border border-zinc-200 p-6 sm:p-8 space-y-6"
      >
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <h2 className="font-display text-xl sm:text-2xl font-medium text-zinc-900">
              {studioName}
            </h2>
            <p className="text-xs font-mono-code text-zinc-400 uppercase tracking-wider mt-1">
              EST. {studioInfo.established} • {location}
            </p>
          </div>
          <button
            onClick={() => {
              playClickSound();
              onClose();
            }}
            className="p-1 text-zinc-400 hover:text-zinc-900 transition-colors cursor-pointer"
            title={labels[lang].close}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Studio Manifesto / Intro */}
        <div className="text-sm text-zinc-600 leading-relaxed font-normal space-y-2">
          <img
            src="/IMG/logo.png"
            alt="不见兔"
            className="h-9 sm:h-11 w-auto object-contain mb-5"
          />
          <p>{manifestoText}</p>
        </div>

        {team && (
          <section className="pt-5 border-t border-zinc-100 space-y-4">
            <div>
              <h3 className="text-[11px] font-mono-code text-zinc-400 uppercase tracking-wider">
                {team.label}
              </h3>
              <p className="mt-2 text-sm text-zinc-600 leading-relaxed">{team.intro}</p>
            </div>
            <div className="space-y-3">
              {team.members.map((member) => (
                <article key={member.name} className="flex gap-3 rounded-lg border border-zinc-100 p-3">
                  <img src={member.image} alt={member.name} className="h-14 w-14 shrink-0 rounded-md object-cover" />
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                      {member.url ? (
                        <a
                          href={member.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={playClickSound}
                          className="inline-flex items-center gap-1 text-sm font-semibold text-zinc-900 underline underline-offset-4 hover:text-zinc-500 transition-colors"
                        >
                          {member.name}
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      ) : (
                        <h4 className="text-sm font-semibold text-zinc-900">{member.name}</h4>
                      )}
                      <span className="text-xs text-zinc-400">{member.role}</span>
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-zinc-600">{member.bio}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Contact & Socials */}
        <div className="pt-4 border-t border-zinc-100 space-y-3 text-xs font-mono-code">
          {studioInfo.contactEmail && (
            <div className="flex items-center justify-between text-zinc-500">
              <span>{labels[lang].contact}</span>
              <a
                href={`mailto:${studioInfo.contactEmail}`}
                onClick={playClickSound}
                className="text-zinc-800 hover:text-zinc-400 underline underline-offset-4 transition-colors"
              >
                {studioInfo.contactEmail}
              </a>
            </div>
          )}

          {studioInfo.socials && studioInfo.socials.length > 0 && (
            <div className="flex items-center justify-between text-zinc-500 pt-1">
              <span>{labels[lang].socials}</span>
              <div className="flex items-center gap-3">
                {studioInfo.socials.map((s, idx) => (
                  <a
                    key={idx}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playClickSound}
                    className="text-zinc-800 hover:text-zinc-400 underline underline-offset-4 inline-flex items-center gap-1 transition-colors"
                  >
                    <span>{s.name}</span>
                    <ExternalLink className="w-2.5 h-2.5 text-zinc-400" />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};
