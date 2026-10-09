import React, { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { Language } from '../types';
import { DEFAULT_GAMES } from '../data/defaultGames';
import { playClickSound, playModalOpenSound } from '../utils/audio';
import { AwardBadges } from './AwardBadges';

export const EXHIBITIONS = [
  {
    id: 'tankaiwan-2025',
    date: '2025-10',
    titles: {
      zh: '「摊开玩」独立游戏市集',
      en: 'Booom IndieFair',
      ja: '「摊开玩」 インディーゲームマーケット',
      ko: '탄카이완 인디 게임 마켓',
    },
    // Official event details: https://www.gcores.com/articles/204396
    // Organizer: https://www.gcores.com/articles/204132
    details: {
      zh: {
        organizer: '机核 GCORES · BOOOM 暴造游戏孵化器',
        date: '2025年10月18日—19日',
        venue: '中国北京市朝阳区东进国际中心 B1 下沉广场',
      },
      en: {
        organizer: 'GCORES · BOOOM Game Incubator',
        date: 'October 18–19, 2025',
        venue: 'B1 Sunken Plaza, Dongjin International Center, Chaoyang District, Beijing, China',
      },
      ja: {
        organizer: '機核 GCORES · BOOOM ゲームインキュベーター',
        date: '2025年10月18日〜19日',
        venue: '中国・北京市朝陽区 東進国際中心 B1 サンクンプラザ',
      },
      ko: {
        organizer: 'GCORES · BOOOM 게임 인큐베이터',
        date: '2025년 10월 18–19일',
        venue: '중국 베이징 차오양구 둥진 국제센터 B1 선큰 광장',
      },
    },
    awardGroupIndex: 0,
    photos: [
      '/exhibitions/booom-indiefair-2025/cover.jpg',
      '/exhibitions/booom-indiefair-2025/photo-02.jpg',
      '/exhibitions/booom-indiefair-2025/photo-03.jpg',
      '/exhibitions/booom-indiefair-2025/photo-04.jpg',
      '/exhibitions/booom-indiefair-2025/photo-05.jpg',
    ],
  },
  {
    id: 'tgs-2026',
    date: '2026-09',
    titles: {
      zh: '东京电玩展',
      en: 'Tokyo Game Show',
      ja: '東京ゲームショウ',
      ko: '도쿄 게임쇼',
    },
    // https://tgs.cesa.or.jp/2026/en/about
    details: {
      zh: {
        organizer: '日本计算机娱乐协会（CESA）；共同主办：日经 BP、Sony Music Solutions',
        date: '2026年9月17日—20日',
        venue: '日本千叶市 · 幕张展览馆（Makuhari Messe）',
      },
      en: {
        organizer: "Computer Entertainment Supplier's Association (CESA); co-organizers: Nikkei BP, Sony Music Solutions",
        date: 'September 17–20, 2026',
        venue: 'Makuhari Messe, Chiba, Japan',
      },
      ja: {
        organizer: '一般社団法人コンピュータエンターテインメント協会（CESA）；共催：日経 BP、ソニー・ミュージックソリューションズ',
        date: '2026年9月17日〜20日',
        venue: '幕張メッセ（日本・千葉市）',
      },
      ko: {
        organizer: '일본 컴퓨터 엔터테인먼트 협회(CESA); 공동 주최: Nikkei BP, Sony Music Solutions',
        date: '2026년 9월 17–20일',
        venue: '일본 지바시 마쿠하리 멧세',
      },
    },
    awardGroupIndex: 1,
    photos: [
      '/exhibitions/tgs-2026/cover.jpg',
      '/exhibitions/tgs-2026/photo-01.jpg',
      '/exhibitions/tgs-2026/photo-02.jpg',
      '/exhibitions/tgs-2026/photo-03.jpg',
      '/exhibitions/tgs-2026/photo-04.jpg',
    ],
  },
].sort((a, b) => b.date.localeCompare(a.date));

const labels: Record<Language, { section: string; close: string; awards: string; photo: string; organizer: string; date: string; venue: string }> = {
  zh: { section: '参展', close: '关闭相册 (Esc)', awards: '获奖与入选', photo: '照片', organizer: '活动组织方', date: '活动日期', venue: '活动地点' },
  en: { section: 'Exhibitions', close: 'Close album (Esc)', awards: 'AWARDS & SELECTIONS', photo: 'Photo', organizer: 'Organizers', date: 'Dates', venue: 'Venue' },
  ja: { section: '出展', close: 'アルバムを閉じる (Esc)', awards: '受賞・選出', photo: '写真', organizer: '主催', date: '開催日', venue: '会場' },
  ko: { section: '전시 참가', close: '앨범 닫기 (Esc)', awards: '수상 및 선정', photo: '사진', organizer: '주최', date: '행사 날짜', venue: '장소' },
};

export const ExhibitionAlbum = ({ exhibition, lang }: { exhibition: typeof EXHIBITIONS[number]; lang: Language }) => {
  const room = DEFAULT_GAMES.find(game => game.id === 'invisible-room')!;
  const awardGroups = room.locales?.[lang]?.awardGroups ?? room.awardGroups!;
  const awardGroup = awardGroups[exhibition.awardGroupIndex];
  const gameTitle = lang === 'zh' ? room.titleZh : room.locales?.[lang]?.title ?? room.title;

  return (
    <>
      <dl className="mb-6 grid grid-cols-[5rem_minmax(0,1fr)] gap-x-4 gap-y-2 border-b border-zinc-200 pb-6 text-sm leading-relaxed">
        {(['organizer', 'date', 'venue'] as const).map(field => (
          <React.Fragment key={field}>
            <dt className="text-xs leading-relaxed text-zinc-500">{labels[lang][field]}</dt>
            <dd className="min-w-0 text-zinc-700">{exhibition.details[lang][field]}</dd>
          </React.Fragment>
        ))}
      </dl>
      <section aria-label={labels[lang].awards} className="mb-6 border-b border-zinc-200 pb-6">
        <h2 className="text-center font-display text-sm text-zinc-700">{gameTitle}</h2>
        <AwardBadges groups={[awardGroup]} />
      </section>
      <div className="space-y-5">
        {exhibition.photos.map((photo, index) => (
          <img
            key={photo}
            src={photo}
            alt={`${exhibition.titles[lang]} · ${labels[lang].photo} ${index + 1}`}
            loading="lazy"
            className="block h-auto w-full rounded-lg"
          />
        ))}
      </div>
    </>
  );
};

export const ExhibitionList = ({ lang }: { lang: Language }) => {
  const [selectedExhibition, setSelectedExhibition] = useState<typeof EXHIBITIONS[number] | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (selectedExhibition) dialogRef.current?.showModal();
  }, [selectedExhibition]);

  return (
    <section aria-label={labels[lang].section} className="mt-9 border-t border-zinc-200 pt-8">
      <div className="grid gap-7 sm:grid-cols-2">
        {EXHIBITIONS.map((exhibition) => (
          <button
            key={exhibition.id}
            type="button"
            onClick={() => {
              playModalOpenSound();
              setSelectedExhibition(exhibition);
            }}
            className="group block w-full cursor-pointer text-left"
          >
            <img
              src={exhibition.photos[0]}
              alt=""
              aria-hidden="true"
              className="mb-3 aspect-video w-full rounded-lg object-cover transition-opacity group-hover:opacity-80"
            />
            <span className="flex items-baseline justify-between gap-3">
              <span className="min-w-0 font-display text-sm font-normal leading-relaxed text-zinc-800 transition-colors group-hover:text-zinc-400">
                {exhibition.titles[lang]}
              </span>
              <time dateTime={exhibition.date} className="shrink-0 font-mono-code text-xs text-zinc-400">
                {exhibition.date.replace('-', '.')}
              </time>
            </span>
          </button>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        aria-label={selectedExhibition?.titles[lang]}
        onClose={() => setSelectedExhibition(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialogRef.current?.close();
        }}
        className="fixed m-auto max-h-[90vh] w-[calc(100%-2rem)] max-w-4xl overflow-hidden rounded-xl bg-white p-0 shadow-xl backdrop:bg-zinc-950/30 backdrop:backdrop-blur-xs"
      >
        {selectedExhibition && (
          <div className="flex max-h-[90vh] flex-col">
            <header className="flex shrink-0 items-start justify-between gap-4 px-5 py-5 sm:px-8">
              <div>
                <time dateTime={selectedExhibition.date} className="font-mono-code text-xs text-zinc-400">
                  {selectedExhibition.date.replace('-', '.')}
                </time>
                <h1 className="mt-1 font-display text-lg font-medium text-zinc-900 sm:text-2xl">
                  {selectedExhibition.titles[lang]}
                </h1>
              </div>
              <button
                type="button"
                autoFocus
                aria-label={labels[lang].close}
                onClick={() => {
                  playClickSound();
                  dialogRef.current?.close();
                }}
                className="flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-full text-zinc-500 transition-colors hover:text-zinc-950"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </header>
            <div className="min-h-0 overflow-y-auto px-5 pb-6 sm:px-8">
              <ExhibitionAlbum exhibition={selectedExhibition} lang={lang} />
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
};
