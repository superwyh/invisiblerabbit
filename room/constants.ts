import { GameContent, Language } from './types';

const COMMON_LINKS = {
  steam: "https://store.steampowered.com/app/3533210/_/",
};

export const TRANSLATIONS: Record<Language, GameContent> = {
  zh: {
    title: "INVISIBLE ROOM",
    subtitle: "看不见的房间",
    tagline: "在无尽的黑暗中，声音是你唯一的眼睛。",
    studio: "Invisible Rabbit",
    steamLink: COMMON_LINKS.steam,
    
    intro: {
      title: "游戏简介",
      content: "Invisible Room 是一款纯粹的音频解谜游戏，玩家需要完全依靠声音来探索、推理，并揭开隐藏的真相。与传统依赖视觉的游戏不同，本作彻底剥离了画面元素，挑战你的听觉感知与逻辑思维，让你在一个“看不见”的世界中寻找前进的方向。",
      subContent: "你将通过环境音、角色对话以及各种细微的声音线索，在脑海中一步步构筑出这间不可见的房间，并借此解开背后的谜团。除此之外，游戏还融合了独特的实体解谜元素——你需要打印并使用游戏内附带的 PDF 文件，这些线索材料将成为你破解谜题不可或缺的工具，带来独一无二的沉浸式体验。"
    },
  
    story: {
      title: "剧情介绍",
      role: "怪谈办探员",
      content: "你是“怪谈办”组织中的一名成员。某天，一位外出执行任务的探员在一场突发事件中双目失明，被困在一处神秘的建筑内。通讯设备是你们之间唯一的纽带，而你必须通过她传来的零碎声音与对话，引导她在完全黑暗的环境中生存与脱困。",
      climax: "随着调查的深入，你将逐渐发现这间“房间”绝非普通之地 ……"
    },
  
    features: [
      {
        title: "全程音频玩法",
        desc: "没有视觉画面，所有信息都隐藏在声音之中。",
        icon: "headphones"
      },
      {
        title: "烧脑解谜机制",
        desc: "依靠听觉推理，结合逻辑分析破解谜题。",
        icon: "brain"
      },
      {
        title: "实体道具互动",
        desc: "使用随游戏附带的 PDF 材料，打印后体验更佳。",
        icon: "scroll"
      },
      {
        title: "沉浸式故事体验",
        desc: "通过零碎的声音线索逐步揭开深层真相。",
        icon: "mask"
      },
      {
        title: "高质量音效设计",
        desc: "精细的声音构筑真实场景，每个音节都是线索。",
        icon: "waves"
      },
      {
        title: "Meta叙事结构",
        desc: "游戏与现实文件交织，突破屏幕的边界。",
        icon: "file-digit"
      }
    ],

    ui: {
      buy: "立即购买",
      learnMore: "了解更多",
      steamStore: "Steam 商店",
      featuresTitle: "游戏特色",
      featuresSubtitle: "系统概览",
      immersiveTitle: "打破虚实的边界",
      immersiveDesc: "不仅是屏幕内的解谜。打印档案，折叠线索，触摸真实。这张纸，是你通往真相的唯一钥匙。",
      immersiveLabel: "沉浸式道具",
      footerRights: "HEAR THE TRUTH.",
      privacy: "隐私政策",
      contact: "联系我们",
      evidence: "EVIDENCE",
      caseNumber: "CASE #3910",
      doNotRemove: "DO NOT REMOVE"
    }
  },

  en: {
    title: "INVISIBLE ROOM",
    subtitle: "Invisible Room",
    tagline: "In the endless darkness, sound is your only sight.",
    studio: "Invisible Rabbit",
    steamLink: COMMON_LINKS.steam,
    
    intro: {
      title: "Introduction",
      content: "Invisible Room is a pure audio puzzle game where players must rely entirely on sound to explore, deduce, and uncover hidden truths. Unlike traditional visual-based games, this title completely strips away visual elements, challenging your auditory perception and logical thinking to find your way in an 'unseen' world.",
      subContent: "You will construct this invisible room in your mind through environmental sounds, character dialogue, and subtle audio cues. Additionally, the game integrates unique physical puzzle elements—you need to print and use the PDF files included with the game. These clue materials become indispensable tools for solving puzzles, delivering a one-of-a-kind immersive experience."
    },
  
    story: {
      title: "Story",
      role: "Paranormal Bureau Agent",
      content: "You are a member of the 'Paranormal Bureau'. One day, an agent executing a mission is blinded in a sudden incident and trapped inside a mysterious building. Communication equipment is your only link, and you must guide her to survive and escape the pitch-black environment through the fragmented sounds and dialogue she transmits.",
      climax: "As the investigation deepens, you will gradually discover that this 'room' is no ordinary place..."
    },
  
    features: [
      {
        title: "Audio-Only Gameplay",
        desc: "No visuals. All information is hidden within the sound.",
        icon: "headphones"
      },
      {
        title: "Hardcore Puzzles",
        desc: "Deduce via hearing, solve mysteries with pure logic.",
        icon: "brain"
      },
      {
        title: "Physical Interaction",
        desc: "Print the attached PDF files for the full detective experience.",
        icon: "scroll"
      },
      {
        title: "Immersive Narrative",
        desc: "Uncover deep truths through fragmented audio cues.",
        icon: "mask"
      },
      {
        title: "High-Fidelity Audio",
        desc: "Detailed soundscapes construct reality. Every syllable is a clue.",
        icon: "waves"
      },
      {
        title: "Meta Structure",
        desc: "Interweaving game and reality documents, breaking the fourth wall.",
        icon: "file-digit"
      }
    ],

    ui: {
      buy: "Buy Now",
      learnMore: "Learn More",
      steamStore: "Steam Store",
      featuresTitle: "Features",
      featuresSubtitle: "System Overview",
      immersiveTitle: "Break the Boundary",
      immersiveDesc: "More than just on-screen puzzles. Print files, fold clues, touch the reality. This paper is your only key to the truth.",
      immersiveLabel: "Immersive Props",
      footerRights: "HEAR THE TRUTH.",
      privacy: "Privacy Policy",
      contact: "Contact",
      evidence: "EVIDENCE",
      caseNumber: "CASE #3910",
      doNotRemove: "DO NOT REMOVE"
    }
  },

  ja: {
    title: "INVISIBLE ROOM",
    subtitle: "見えない部屋",
    tagline: "無限の闇の中で、音だけが唯一の視界となる。",
    studio: "Invisible Rabbit",
    steamLink: COMMON_LINKS.steam,
    
    intro: {
      title: "ゲーム紹介",
      content: "『Invisible Room』は、音だけで探索し、推理し、隠された真実を暴く、純粋なオーディオパズルゲームです。従来の視覚に頼るゲームとは異なり、本作は画面要素を完全に排除。聴覚と論理的思考を研ぎ澄まし、「見えない」世界で進むべき道を探し出します。",
      subContent: "環境音、キャラクターの会話、そして微かな音の手がかりを通じて、あなたの脳内で見えない部屋を構築し、謎を解き明かしてください。さらに、本作には独自の物理的な謎解き要素も融合されています。ゲームに付属するPDFファイルを印刷して使用することで、それらの資料が謎を解く不可欠なツールとなり、唯一無二の没入体験をもたらします。"
    },
  
    story: {
      title: "ストーリー",
      role: "怪談局のエージェント",
      content: "あなたは「怪談局」の一員です。ある日、任務中のエージェントが突発的な事故で視力を失い、謎の建物に閉じ込められてしまいました。通信機だけが二人の絆です。彼女から送られてくる断片的な音と会話を頼りに、完全な暗闇の中で彼女を導き、脱出させなければなりません。",
      climax: "調査が進むにつれ、この「部屋」がただの場所ではないことに気づくでしょう……"
    },
  
    features: [
      {
        title: "完全オーディオプレイ",
        desc: "視覚情報なし、すべては音の中に隠されている。",
        icon: "headphones"
      },
      {
        title: "本格ミステリー",
        desc: "聴覚で推理し、論理的思考で謎を解く。",
        icon: "brain"
      },
      {
        title: "物理アイテム連動",
        desc: "付属PDFを印刷して、リアルな捜査体験を。",
        icon: "scroll"
      },
      {
        title: "没入型ストーリー",
        desc: "断片的な音の手がかりから深層の真実に迫る。",
        icon: "mask"
      },
      {
        title: "高品質サウンド",
        desc: "精緻な音響がリアルな空間を構築。すべての音がヒントになる。",
        icon: "waves"
      },
      {
        title: "メタフィクション",
        desc: "ゲームと現実の資料が交差する、第四の壁を超えた体験。",
        icon: "file-digit"
      }
    ],

    ui: {
      buy: "今すぐ購入",
      learnMore: "詳細を見る",
      steamStore: "Steam ストア",
      featuresTitle: "ゲームの特徴",
      featuresSubtitle: "システム概要",
      immersiveTitle: "虚実の境界を越えて",
      immersiveDesc: "画面の中だけの謎解きではありません。資料を印刷し、折り、触れる……その紙こそが、真実への唯一の鍵です。",
      immersiveLabel: "没入型アイテム",
      footerRights: "HEAR THE TRUTH.",
      privacy: "プライバシーポリシー",
      contact: "お問い合わせ",
      evidence: "EVIDENCE",
      caseNumber: "CASE #3910",
      doNotRemove: "DO NOT REMOVE"
    }
  }
};

// Default export for backward compatibility if needed, though we will use TRANSLATIONS in App
export const GAME_INFO = TRANSLATIONS.zh;