import { ScenarioStep } from './types';

export const ASSETS = {
  bg_computer: "https://file.302.ai/gpt/imgs/20260221/3074d436b7614d9b9220556e72921503.png",
  avatar_boy: "/img/王.png",
  avatar_woman: "/img/慕.png",
  avatar_man: "/img/史.png",
  icon_path: "https://file.302.ai/gpt/imgs/20260221/4a87e59600a9477cb6394589d9361718.png",
  icon_bulb: "https://file.302.ai/gpt/imgs/20260221/2e5e40e6988849b28292f703901b5042.png",
  icon_heart: "https://file.302.ai/gpt/imgs/20260221/c5101689cc6443c2957c838e4a93f0b2.png",
  icon_chat: "https://file.302.ai/gpt/imgs/20260221/585098e66e744115ae7248f52233e790.png",
  icon_bow: "https://file.302.ai/gpt/imgs/20260221/985532d0f50942049c3666b610738600.png",
  bg_clock: "/img/背景3.jpg",
  main_interface: "/img/主界面.png"
};

type Language = 'zh' | 'en' | 'jp';

interface Translation {
  title: string;
  subtitle: string; // Used for "Narrative CRPG" tag or similar
  slogan: string;
  introQuote: string;
  charactersTitle: string;
  charactersSubtitle: string;
  featureTitle: string;
  featureDesc: string;
  tags: string[];
  footerQuote: string;
  cta: string;
  wishlist: string;
  copyright: string;
  characters: {
    boy: { name: string; year: string; role: string; quote: string };
    woman: { name: string; year: string; role: string; quote: string };
    man: { name: string; year: string; role: string; quote: string };
  }
}

export const TRANSLATIONS: Record<Language, Translation> = {
  zh: {
    title: "久等了",
    subtitle: "叙事 CRPG // 2026",
    slogan: "你以为你在救一个人，其实你在改写三个人生。",
    introQuote: "“时间真的能改变一切吗？”",
    charactersTitle: "三条时间线，三个必须承担的代价",
    charactersSubtitle: "人物介绍",
    featureTitle: "当爱需要回溯，\n责任就不再有退路。",
    featureDesc: "本作是一款以纯文字 CRPG 为核心的叙事作品。在三条时间里做同一个选择，承担三份代价。你所做的一切，都会在过去、现在与未来激起涟漪。",
    tags: ["纯文字", "CRPG", "叙事解谜", "多时间线"],
    footerQuote: "“最后一句话之前，没有人是‘失踪’的。”",
    cta: "敬请期待",
    wishlist: "加入 Steam 愿望单",
    copyright: "© 2026 Invisible Rabbit",
    characters: {
      boy: { name: "王子墨", year: "2008 // 过去", role: "少年", quote: "“我想她。”" },
      woman: { name: "慕雪兰", year: "2008 // 平行", role: "女人", quote: "“救回他。”" },
      man: { name: "史蒂夫", year: "2035 // 未来", role: "警察", quote: "“我是谁？”" }
    }
  },
  en: {
    title: "I KEPT YOU WAITING",
    subtitle: "NARRATIVE CRPG // 2026",
    slogan: "You think you're saving one person, but you're rewriting three lives.",
    introQuote: "“If going back could save someone, why does no one want to?”",
    charactersTitle: "Three Timelines. Three Costs to Bear.",
    charactersSubtitle: "CHARACTERS",
    featureTitle: "When love requires regression,\nresponsibility has no retreat.",
    featureDesc: "A text-based CRPG narrative experience. Make one choice across three timelines, bear three consequences. Everything you do ripples through the past, present, and future.",
    tags: ["Text-Based", "CRPG", "Mystery", "Multi-Timeline"],
    footerQuote: "“Before the final word, no one is truly 'missing'.”",
    cta: "COMING SOON",
    wishlist: "Wishlist on Steam",
    copyright: "© 2026 Invisible Rabbit.",
    characters: {
      boy: { name: "Wang Zimo", year: "2008 // PAST", role: "The Boy", quote: "“I miss her.”" },
      woman: { name: "Mu Xuelan", year: "2008 // PARALLEL", role: "The Woman", quote: "“Save him.”" },
      man: { name: "Steve", year: "2035 // FUTURE", role: "The Cop", quote: "“Who am I?”" }
    }
  },
  jp: {
    title: "お待たせしました",
    subtitle: "ナラティブ CRPG // 2026",
    slogan: "一人を救っているつもりでも、実は三人の人生を書き換えている。",
    introQuote: "「過去に戻って人を救えるなら、なぜ誰もそうしないのか？」",
    charactersTitle: "3つのタイムライン、3つの代償。",
    charactersSubtitle: "キャラクター",
    featureTitle: "愛が回帰を求めるとき、\n責任に逃げ場はない。",
    featureDesc: "純テキスト系CRPGを核としたナラティブ作品。3つの時間軸で同じ選択をし、3つの代償を負う。あなたの行動は過去、現在、そして未来に波紋を広げる。",
    tags: ["テキストADV", "CRPG", "ミステリー", "タイムリープ"],
    footerQuote: "「最後の言葉が出るまで、『行方不明』の者はいない。」",
    cta: "近日公開",
    wishlist: "Steamウィッシュリストに追加",
    copyright: "© 2026 Invisible Rabbit",
    characters: {
      boy: { name: "王子墨 (ワン・ズーモー)", year: "2008 // 過去", role: "少年", quote: "「彼女を想う。」" },
      woman: { name: "慕雪兰 (ムー・シュエラン)", year: "2008 // 平行", role: "女性", quote: "「彼を救い出す。」" },
      man: { name: "スティーブ", year: "2035 // 未来", role: "刑事", quote: "「私は誰だ？」" }
    }
  }
};

// Initial Scenario Data for Demo (Kept for compatibility, though not used in landing page)
export const INITIAL_SCENARIO: ScenarioStep[] = [];