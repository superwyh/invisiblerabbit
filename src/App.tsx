import { motion } from "motion/react";
import { useState } from "react";
import { ArrowLeft, ExternalLink, FlaskConical, Globe, Home, Info, Play, Star } from "lucide-react";

type Language = "zh" | "en" | "ja" | "ko";
type GameId = "long-wait" | "invisible-room" | "key-hero" | "fight-with-keys";

interface GameCopy {
  title: string;
  desc: string;
  detail?: string[];
  link?: string;
  linkLabel?: string;
  status?: string;
  platform?: string;
  tags?: string[];
}

interface LocaleCopy {
  langLabel: string;
  flagship: string;
  expCode: string;
  back: string;
  studioProfile: string;
  wePlayTitle: string;
  aboutP1: string;
  aboutP2: string;
  philosophy: string;
  philosophyVal: string;
  location: string;
  locationVal: string;
  labHeroPrefix: string;
  labHeroTitle: string;
  labD1_1: string;
  labD1_hl: string;
  labD1_2: string;
  labD2_1: string;
  labD2_hl: string;
  labD2_2: string;
  labD3: string;
  goal1: string;
  goal1Val: string;
  goal2: string;
  goal2Val: string;
  statusLabel: string;
  statusVal: string;
  platformLabel: string;
  platformVal: string;
  learnMore: string;
  labPanelTitle: string;
  labPanelSub: string;
  expPrefix: string;
  games: Record<GameId, GameCopy>;
}

interface GameMetadata {
  id: GameId;
  category: "experimental" | "formal";
  tags: string[];
  image: string;
  accent: string;
}

const DICT: Record<Language, LocaleCopy> = {
  zh: {
    langLabel: "中文",
    flagship: "旗舰游戏",
    expCode: "实验代号: ",
    back: "返回大厅",
    studioProfile: "Studio Profile",
    wePlayTitle: "About",
    aboutP1: "北京不见兔科技有限公司成立于 2025 年，团队分布于北京与石家庄，专注于 Steam 独立游戏开发。",
    aboutP2: "我们有两条并行的产品线：一条用来冒险，做一些玩法上更实验、更偏探索性的作品 -- 它们不一定安全，也不一定从一开始就能被定义为“好玩”，但我们愿意为新的体验去承担不确定性；另一条用来沉淀，做一些类型更明确、玩法更成熟、完成度更高的作品，把游戏最朴素的乐趣认真做到位。",
    philosophy: "Philosophy",
    philosophyVal: "给现实留个后门。",
    location: "Location",
    locationVal: "北京 | 石家庄",
    labHeroPrefix: "Lab Prototypes",
    labHeroTitle: "创意原型的孵化池。",
    labD1_1: "我们一直觉得，现在很多游戏已经太像彼此了。成熟当然不是坏事，但当太多作品都沿着同样的路径打磨，游戏就会越来越稳，也越来越少让人意外。所以我们想留一条路给那些",
    labD1_hl: "还不够成熟、还不够标准、甚至还不太好定义",
    labD1_2: "的东西。",
    labD2_1: "这条产品线会更关注机制上的新鲜感，去试一些没那么常见的结构、规则和交互方式。它们不一定每次都成立，也不一定每次都完美，但至少应该提出一点新的可能。哪怕只是给玩家一点新感觉，或者给同行一点新启发。我们不把实验当成噱头。比起“为了不同而不同”，我们更在意的是：",
    labD2_hl: "能不能真的做出一点以前少见的体验",
    labD2_2: "。",
    labD3: "右侧是一些我做完的怪点子游戏。",
    goal1: "Goal 01",
    goal1Val: "把还没被做旧的机制做出来。",
    goal2: "Goal 02",
    goal2Val: "给游戏行业增加一点新的参考答案。",
    statusLabel: "Current Status",
    statusVal: "开发中",
    platformLabel: "Target Platform",
    platformVal: "Steam / Switch",
    learnMore: "了解更多",
    labPanelTitle: "独立实验室",
    labPanelSub: "Lab / Prototypes",
    expPrefix: "Exp.",
    games: {
      "long-wait": {
        title: "久等了",
        desc: "有些爱留在夏天，有些人停在昨天。而记忆，总会把我们带回那个模糊又明亮的2000年。在现实与梦境交叠的时间裂缝里，做出你的选择，走进一场关于回忆、怀念与重逢的故事。",
      },
      "invisible-room": {
        title: "看不见的房间",
        desc: "《看不见的房间》里玩家将作为“怪谈办”的成员，通过一条唯一的通讯链路，引导一名在任务中失明并被困的探员逃离险境。没有画面，没有直接观察环境的能力，玩家只能依靠环境音、角色对话与细微的声音线索，在脑中拼出空间、判断危险、整理信息，并一步步接近真相。",
        detail: [
          "《看不见的房间》里玩家将作为“怪谈办”的成员，通过一条唯一的通讯链路，引导一名在任务中失明并被困的探员逃离险境。没有画面，没有直接观察环境的能力，玩家只能依靠环境音、角色对话与细微的声音线索，在脑中拼出空间、判断危险、整理信息，并一步步接近真相。",
          "《看不见的房间》所尝试的，是一种以声音为主导、以纸面资料为辅助的解谜方式。我们希望把玩家对世界的理解，尽量从“看见什么”转移到“听见什么、记录什么、推断出什么”上。与此同时，游戏附带的可打印文件也不只是叙事补充，而是与音频线索并行运作的解谜工具。这项实验的重点不在于“去掉画面”本身，而在于验证：声音是否足以支撑完整的空间认知与逻辑推理，现实中的纸面媒介是否能真正进入游戏机制。"
        ],
        link: "https://store.steampowered.com/app/3533210/_/",
        linkLabel: "Steam",
        status: "已上线",
        platform: "Steam",
      },
      "key-hero": {
        title: "KeyHero",
        desc: "《KeyHero》是一款围绕“方向键”展开的解谜游戏。玩家通过上下左右控制主角移动，遇到墙壁会被阻挡；但与此同时，方向键也不仅仅用于移动，它们本身还可以被放置到关卡中，临时搭成可通行的桥梁，让玩家跨越原本无法通过的地形。不过，每放下一枚方向键，玩家就会同时失去对应方向的移动能力。也就是说，搭桥不只是获得一条路，也是在主动削减自己的行动方式。",
        detail: [
          "《KeyHero》是一款围绕“方向键”展开的解谜游戏。玩家通过上下左右控制主角移动，遇到墙壁会被阻挡；但与此同时，方向键也不仅仅用于移动，它们本身还可以被放置到关卡中，临时搭成可通行的桥梁，让玩家跨越原本无法通过的地形。不过，每放下一枚方向键，玩家就会同时失去对应方向的移动能力。也就是说，搭桥不只是获得一条路，也是在主动削减自己的行动方式。",
          "《KeyHero》想实验的是一件很简单、但很少有人认真拿来做谜题的事：当玩家已经默认方向键只是“移动工具”时，能不能让它本身也变成需要思考、取舍和重组的对象。在大多数游戏里，方向输入几乎是最基础、最透明的部分。玩家依赖它，却很少意识到它的存在。而《KeyHero》希望把这种“默认”翻出来：把方向键从一个理所当然的操作方式，变成一种有限资源、一种空间工具，也是一道谜题。玩家不再只是“用方向键解谜”，而是要去思考：如果某个方向本身可以被消耗、被放置、被暂时失去，那移动这件事还成立吗？谜题又会变成什么样子？"
        ],
        link: "https://store.steampowered.com/app/1807150/KeyHero/",
        linkLabel: "Steam",
        status: "已上线",
        platform: "Steam",
      },
      "fight-with-keys": {
        title: "Fight With Keys",
        desc: "《Fight With Keys》是一款将打字输入与动作走位结合在一起的游戏。玩家使用右手控制方向键移动角色、躲避敌人；同时用左手输入键盘上的对应按键，在战斗中快速击杀逼近的目标。敌人进入攻击范围后，头顶会显示对应字符，玩家必须在持续移动、观察局势的同时完成输入，才能维持节奏、清空战场。",
        detail: [
          "《Fight With Keys》是一款将打字输入与动作走位结合在一起的游戏。玩家使用右手控制方向键移动角色、躲避敌人；同时用左手输入键盘上的对应按键，在战斗中快速击杀逼近的目标。敌人进入攻击范围后，头顶会显示对应字符，玩家必须在持续移动、观察局势的同时完成输入，才能维持节奏、清空战场。",
          "《Fight With Keys》想实验的是：当左右手不再共同服务于一件简单的事，而是各自承担一套复杂任务时，玩家是否还能接受这种分裂式操作，并从中获得乐趣。在大多数键盘游戏里，左右手的分工通常比较稳定：一只手负责移动，另一只手负责少量功能键，负担并不对等。我们想测试的，不只是“操作会不会更难”，而是当人的注意力被强行拆成左右两套系统时，游戏会不会产生一种新的紧张感、新的节奏感，以及一种接近左右互搏的独特乐趣。"
        ],
        link: "https://store.steampowered.com/app/2309550/Fight_With_Keys/",
        linkLabel: "Steam",
        status: "已上线",
        platform: "Steam",
      },
    },
  },
  en: {
    langLabel: "EN",
    flagship: "Flagship Title",
    expCode: "Exp. Code: ",
    back: "Back to Portfolio",
    studioProfile: "Studio Profile",
    wePlayTitle: "About",
    aboutP1: "Invisible Rabbit Technology Co., Ltd. was founded in 2025. Our team is based in Beijing and Shijiazhuang, focused on developing indie games for Steam.",
    aboutP2: "We run two product lines in parallel. One is for adventure: more experimental, more exploratory works. They are not always safe, and they may not even be recognizable as “fun” from the start, but we are willing to take on uncertainty in exchange for new experiences. The other is for refinement: works with clearer genres, more mature gameplay, and higher completion, where we take the most fundamental joy of games seriously and polish it properly.",
    philosophy: "Philosophy",
    philosophyVal: "Leave reality a back door.",
    location: "Location",
    locationVal: "Beijing | Shijiazhuang",
    labHeroPrefix: "Lab Prototypes",
    labHeroTitle: "An incubator for creative prototypes.",
    labD1_1: "We have always felt that too many games are starting to resemble one another. Maturity is not a bad thing, but when too many works are polished along the same path, games become steadier and less surprising. So we want to leave room for things that are ",
    labD1_hl: "not mature enough, not standard enough, or not even easy to define yet",
    labD1_2: ".",
    labD2_1: "This line focuses more on freshness in mechanics, trying structures, rules, and interactions that are less common. These ideas will not always work, and they will not always be perfect, but they should at least propose some new possibility. Even if it only gives players a new sensation or gives peers a new point of reference, what we care about is whether we can truly create ",
    labD2_hl: "an experience that used to be rare",
    labD2_2: ".",
    labD3: "On the right are some odd little games I have already made.",
    goal1: "Goal 01",
    goal1Val: "Make mechanics that have not yet been worn old.",
    goal2: "Goal 02",
    goal2Val: "Add a few new reference answers to the game industry.",
    statusLabel: "Current Status",
    statusVal: "In Development",
    platformLabel: "Platform",
    platformVal: "Steam / Switch",
    learnMore: "Learn More",
    labPanelTitle: "Indie Lab",
    labPanelSub: "Lab / Prototypes",
    expPrefix: "Exp.",
    games: {
      "long-wait": {
        title: "Long Wait",
        desc: "Some loves remain in summer, and some people remain in yesterday. Memory always leads us back to that blurred yet luminous year 2000. In the crack where reality and dreams overlap, make your choice and step into a story about memory, longing, and reunion.",
        status: "In Development",
        platform: "Steam / Switch",
        tags: ["Millennium", "Memory", "TRPG"],
      },
      "invisible-room": {
        title: "Invisible Room",
        desc: "In Invisible Room, the player becomes a member of the Paranormal Office, guiding an investigator who lost their sight and is now trapped during a mission through a single communication line. There are no visuals and no direct way to observe the environment. The player can only rely on ambient sound, character dialogue, and subtle audio cues to reconstruct space, judge danger, organize information, and move step by step toward the truth.",
        detail: [
          "In Invisible Room, the player becomes a member of the Paranormal Office, guiding an investigator who lost their sight and is now trapped during a mission through a single communication line. There are no visuals and no direct way to observe the environment. The player can only rely on ambient sound, character dialogue, and subtle audio cues to reconstruct space, judge danger, organize information, and move step by step toward the truth.",
          "Invisible Room experiments with a puzzle-solving structure led by sound and assisted by paper documents. We want the player's understanding of the world to shift away from ‘what can be seen’ and toward ‘what can be heard, recorded, and inferred.’ At the same time, the printable files that come with the game are not just narrative extras; they function alongside the audio clues as actual puzzle-solving tools. The core of this experiment is not simply removing visuals, but testing whether sound alone can support full spatial cognition and logical reasoning, and whether physical paper media can truly become part of game mechanics."
        ],
        link: "https://store.steampowered.com/app/3533210/_/",
        linkLabel: "Steam",
        status: "Released",
        platform: "Steam",
        tags: ["Sound", "Puzzle", "Print"],
      },
      "key-hero": {
        title: "KeyHero",
        desc: "KeyHero is a puzzle game built around the arrow keys. The player moves the character with up, down, left, and right, and walls block movement as expected. At the same time, however, the arrow keys are not only for movement: they can also be placed into the level as temporary bridges, allowing the player to cross terrain that was previously impossible to pass. But every time one arrow key is placed, the player also loses the ability to move in that direction. In other words, building a bridge is not just about gaining a path, but also about actively reducing your own options for action.",
        detail: [
          "KeyHero is a puzzle game built around the arrow keys. The player moves the character with up, down, left, and right, and walls block movement as expected. At the same time, however, the arrow keys are not only for movement: they can also be placed into the level as temporary bridges, allowing the player to cross terrain that was previously impossible to pass. But every time one arrow key is placed, the player also loses the ability to move in that direction. In other words, building a bridge is not just about gaining a path, but also about actively reducing your own options for action.",
          "KeyHero experiments with something very simple, yet rarely treated seriously as the core of a puzzle: once players already assume that arrow keys are merely movement tools, can those keys themselves become objects of thought, tradeoff, and recombination? In most games, directional input is one of the most basic and transparent parts of interaction. Players depend on it, but rarely notice it. KeyHero wants to turn that default inside out: to make the arrow keys not just an obvious control scheme, but a limited resource, a spatial tool, and a puzzle in their own right. The player is no longer simply using arrow keys to solve puzzles, but asking instead: if a direction itself can be spent, placed, or temporarily lost, does movement still function the same way? And what kind of puzzle does that create?"
        ],
        link: "https://store.steampowered.com/app/1807150/KeyHero/",
        linkLabel: "Steam",
        status: "Released",
        platform: "Steam",
        tags: ["Box-Pushing", "Puzzle", "Arrow Keys"],
      },
      "fight-with-keys": {
        title: "Fight With Keys",
        desc: "Fight With Keys is a game that combines typing input with action movement. The player uses the right hand to move the character with the arrow keys and dodge enemies, while the left hand types the corresponding keys to quickly eliminate approaching targets. Once an enemy enters attack range, the matching character appears above its head. The player must keep moving, reading the situation, and typing at the same time in order to hold the rhythm and clear the field.",
        detail: [
          "Fight With Keys is a game that combines typing input with action movement. The player uses the right hand to move the character with the arrow keys and dodge enemies, while the left hand types the corresponding keys to quickly eliminate approaching targets. Once an enemy enters attack range, the matching character appears above its head. The player must keep moving, reading the situation, and typing at the same time in order to hold the rhythm and clear the field.",
          "Fight With Keys experiments with this question: when the left and right hands no longer serve one simple task together, but instead each takes on its own complex responsibilities, can players still accept this split mode of control and find it enjoyable? In most keyboard games, the division of labor between the two hands is relatively stable: one hand handles movement, while the other handles a few function keys, so the load is not evenly shared. What we want to test is not simply whether the controls become harder, but whether forcing attention into two separate systems can create a new kind of tension, a new sense of rhythm, and a distinctive pleasure close to left-right hand combat."
        ],
        link: "https://store.steampowered.com/app/2309550/Fight_With_Keys/",
        linkLabel: "Steam",
        status: "Released",
        platform: "Steam",
        tags: ["Typing", "Action", "Dual-Handed"],
      },
    },
  },
  ja: {
    langLabel: "日本語",
    flagship: "Flagship Title",
    expCode: "Exp. Code: ",
    back: "一覧に戻る",
    studioProfile: "スタジオ紹介",
    wePlayTitle: "About",
    aboutP1: "北京不见兔科技有限公司は2025年に設立され、チームは北京と石家荘に拠点を置き、Steam向けインディーゲーム開発に注力しています。",
    aboutP2: "私たちには並行する二つのプロダクトラインがあります。一つは冒険のためのラインで、より実験的で探索寄りの作品をつくります。必ずしも安全ではなく、最初から「面白い」と定義できるとも限りませんが、新しい体験のためなら不確実さを引き受けたいと考えています。もう一つは蓄積のためのラインで、ジャンルがより明確で、ゲームプレイがより成熟し、完成度の高い作品をつくり、ゲームの最も素朴な楽しさを丁寧に磨き上げます。",
    philosophy: "哲学",
    philosophyVal: "現実に裏口を残しておく。",
    location: "所在地",
    locationVal: "北京 | 石家荘",
    labHeroPrefix: "Lab Prototypes",
    labHeroTitle: "創造的なプロトタイプの培養槽。",
    labD1_1: "私たちはずっと、今のゲームの多くが互いに似すぎていると感じています。成熟そのものは悪いことではありませんが、あまりに多くの作品が同じ道筋で磨かれていくと、ゲームは安定する一方で、驚きが減っていきます。だからこそ私たちは、",
    labD1_hl: "まだ十分に成熟しておらず、まだ十分に標準化されておらず、そもそも定義しきれないもの",
    labD1_2: "のために一本の道を残しておきたいのです。",
    labD2_1: "このラインでは、仕組みそのものの新鮮さを重視し、あまり見かけない構造、ルール、インタラクションを試します。毎回うまくいくとは限らず、毎回完璧とも限りませんが、少なくとも何か新しい可能性を提示できるべきだと考えています。たとえそれがプレイヤーに少し新しい感覚を与えるだけでも、あるいは同業者に少し新しい示唆を与えるだけでも、私たちが気にしているのは、",
    labD2_hl: "本当にこれまであまり見られなかった体験をつくれるかどうか",
    labD2_2: "です。",
    labD3: "右側は、私が作り終えた少し変なアイデアのゲームたちです。",
    goal1: "Goal 01",
    goal1Val: "まだ手垢のついていない仕組みを形にする。",
    goal2: "Goal 02",
    goal2Val: "ゲーム業界に新しい参照解を少し増やす。",
    statusLabel: "現在の状況",
    statusVal: "開発中",
    platformLabel: "対応プラットフォーム",
    platformVal: "Steam / Switch",
    learnMore: "詳しく見る",
    labPanelTitle: "実験室",
    labPanelSub: "Lab / Prototypes",
    expPrefix: "Exp.",
    games: {
      "long-wait": {
        title: "久等了",
        desc: "夏に置き去りにされた愛もあれば、昨日に留まったままの人もいる。そして記憶は、いつも私たちをあのぼやけていて、それでいてまぶしい2000年へと連れ戻す。現実と夢が重なり合う時間の裂け目の中で選択を行い、記憶、懐かしさ、再会をめぐる物語へ足を踏み入れてください。",
        status: "開発中",
        platform: "Steam / Switch",
        tags: ["ミレニアム", "記憶", "TRPG"],
      },
      "invisible-room": {
        title: "見えない部屋",
        desc: "『見えない部屋』でプレイヤーは「怪談室」の一員となり、たった一本の通信回線を通じて、任務中に失明し閉じ込められた捜査員を危険から導き出します。映像はなく、環境を直接観察する力もありません。プレイヤーは環境音、会話、そしてかすかな音の手がかりだけを頼りに、頭の中で空間を組み立て、危険を判断し、情報を整理しながら、一歩ずつ真相へ近づいていきます。",
        detail: [
          "『見えない部屋』でプレイヤーは「怪談室」の一員となり、たった一本の通信回線を通じて、任務中に失明し閉じ込められた捜査員を危険から導き出します。映像はなく、環境を直接観察する力もありません。プレイヤーは環境音、会話、そしてかすかな音の手がかりだけを頼りに、頭の中で空間を組み立て、危険を判断し、情報を整理しながら、一歩ずつ真相へ近づいていきます。",
          "『見えない部屋』が試みているのは、音を主軸に、紙の資料を補助に据えた謎解きの形です。私たちは、プレイヤーの世界理解をできるだけ「何が見えるか」から「何が聞こえるか、何を記録するか、何を推論できるか」へ移したいと考えています。同時に、ゲームに付属する印刷可能な資料も単なる物語の補足ではなく、音声の手がかりと並行して機能する謎解きの道具です。この実験の重点は、単に画面を取り去ることではありません。音だけで完全な空間認知と論理推理を支えられるのか、そして現実の紙媒体が本当にゲームの仕組みに入り込めるのかを検証することにあります。"
        ],
        link: "https://store.steampowered.com/app/3533210/_/",
        linkLabel: "Steam",
        status: "配信中",
        platform: "Steam",
        tags: ["音", "謎解き", "印刷物"],
      },
      "key-hero": {
        title: "KeyHero",
        desc: "『KeyHero』は「方向キー」を中心に組み立てられた謎解きゲームです。プレイヤーは上下左右で主人公を動かし、壁にぶつかれば当然止められます。しかし同時に、方向キーは移動のためだけのものではありません。キーそのものをステージ上に置き、一時的な橋として使うことで、もともと渡れなかった地形を越えられます。ただし、方向キーを一つ置くたびに、その方向への移動能力も失われます。つまり橋を架けることは、道を得ることでもあり、自分の行動手段を削ることでもあるのです。",
        detail: [
          "『KeyHero』は「方向キー」を中心に組み立てられた謎解きゲームです。プレイヤーは上下左右で主人公を動かし、壁にぶつかれば当然止められます。しかし同時に、方向キーは移動のためだけのものではありません。キーそのものをステージ上に置き、一時的な橋として使うことで、もともと渡れなかった地形を越えられます。ただし、方向キーを一つ置くたびに、その方向への移動能力も失われます。つまり橋を架けることは、道を得ることでもあり、自分の行動手段を削ることでもあるのです。",
          "『KeyHero』が実験したいのは、とても単純でありながら、謎として本気で扱われることが少ない問いです。プレイヤーがすでに方向キーをただの「移動ツール」だと当然視しているとき、そのキー自体を考え、取捨選択し、組み替える対象にできるのか。多くのゲームにおいて、方向入力は最も基礎的で透明な要素です。プレイヤーはそれに頼りながら、その存在をほとんど意識しません。『KeyHero』はその「当たり前」をひっくり返したいのです。方向キーを当然の操作方法ではなく、有限の資源であり、空間の道具であり、そして一つの謎に変える。プレイヤーはもはや「方向キーで謎を解く」のではなく、ある方向そのものが消費され、配置され、一時的に失われうるとしたら、移動とは何になるのか、そして謎はどんな形になるのかを考えることになります。"
        ],
        link: "https://store.steampowered.com/app/1807150/KeyHero/",
        linkLabel: "Steam",
        status: "配信中",
        platform: "Steam",
        tags: ["箱押し", "謎解き", "方向キー"],
      },
      "fight-with-keys": {
        title: "Fight With Keys",
        desc: "『Fight With Keys』は、タイピング入力とアクションの立ち回りを組み合わせたゲームです。プレイヤーは右手で方向キーを操作してキャラクターを動かし、敵を避けながら、左手で対応するキーを入力して迫ってくる敵を素早く倒します。敵が攻撃範囲に入ると頭上に対応する文字が表示され、プレイヤーは動き続け、状況を見ながら入力もこなさなければ、テンポを維持して戦場を片づけることができません。",
        detail: [
          "『Fight With Keys』は、タイピング入力とアクションの立ち回りを組み合わせたゲームです。プレイヤーは右手で方向キーを操作してキャラクターを動かし、敵を避けながら、左手で対応するキーを入力して迫ってくる敵を素早く倒します。敵が攻撃範囲に入ると頭上に対応する文字が表示され、プレイヤーは動き続け、状況を見ながら入力もこなさなければ、テンポを維持して戦場を片づけることができません。",
          "『Fight With Keys』が試しているのは、左右の手がもはや一つの単純な仕事を共有するのではなく、それぞれが複雑な役割を担うとき、それでもプレイヤーはこの分裂した操作を受け入れ、そこに楽しさを見いだせるのかということです。多くのキーボードゲームでは、左右の手の役割分担は比較的固定されており、一方の手が移動を、もう一方が少数の機能キーを担当します。私たちが確かめたいのは、単に操作が難しくなるかどうかではなく、人の注意が左右二つの系統へ強制的に引き裂かれたとき、ゲームに新しい緊張感、新しいリズム感、そして左右互搏に近い独特の楽しさが生まれるかどうかです。"
        ],
        link: "https://store.steampowered.com/app/2309550/Fight_With_Keys/",
        linkLabel: "Steam",
        status: "配信中",
        platform: "Steam",
        tags: ["タイピング", "アクション", "左右分業"],
      },
    },
  },
  ko: {
    langLabel: "KO",
    flagship: "Flagship Title",
    expCode: "Exp. Code: ",
    back: "메인으로 돌아가기",
    studioProfile: "스튜디오 소개",
    wePlayTitle: "About",
    aboutP1: "베이징 불견토 테크놀로지 유한회사는 2025년에 설립되었으며, 팀은 베이징과 스자좡에 분포해 있고 Steam 인디 게임 개발에 집중하고 있습니다.",
    aboutP2: "우리는 두 개의 제품 라인을 병행하고 있습니다. 하나는 모험을 위한 라인으로, 더 실험적이고 더 탐색적인 작품을 만듭니다. 이 작품들은 언제나 안전한 것도 아니고, 처음부터 곧바로 ‘재미있다’고 정의할 수 있는 것도 아니지만, 우리는 새로운 경험을 위해 그 불확실성을 기꺼이 감수하려고 합니다. 다른 하나는 축적을 위한 라인으로, 장르가 더 분명하고, 플레이가 더 성숙하며, 완성도가 더 높은 작품을 만들고, 게임이 가진 가장 소박한 즐거움을 제대로 다듬어 완성합니다.",
    philosophy: "철학",
    philosophyVal: "현실에 뒷문을 남겨 둔다.",
    location: "위치",
    locationVal: "베이징 | 스자좡",
    labHeroPrefix: "Lab Prototypes",
    labHeroTitle: "창의적인 프로토타입을 키워 내는 배양실.",
    labD1_1: "우리는 늘 지금의 많은 게임이 서로 너무 닮아 간다고 느껴 왔습니다. 성숙함 자체가 나쁜 것은 아니지만, 너무 많은 작품이 같은 길을 따라 다듬어질수록 게임은 점점 더 안정적이 되고, 동시에 점점 덜 놀라워집니다. 그래서 우리는 ",
    labD1_hl: "아직 충분히 성숙하지도, 충분히 표준화되지도 않았고, 심지어 아직 무엇이라 정의하기도 어려운 것들",
    labD1_2: "을 위한 길 하나를 남겨 두고 싶습니다.",
    labD2_1: "이 라인은 메커니즘 자체의 신선함에 더 집중하며, 그리 흔하지 않은 구조, 규칙, 상호작용 방식을 시도합니다. 그것들이 매번 성립하는 것도 아니고, 매번 완벽한 것도 아니지만, 적어도 하나의 새로운 가능성은 제시해야 한다고 생각합니다. 그것이 플레이어에게 새로운 감각을 조금 주는 정도이든, 동료 창작자에게 새로운 힌트를 조금 주는 정도이든, 우리가 더 중요하게 보는 것은 ",
    labD2_hl: "정말로 예전에는 드물었던 경험을 만들어 낼 수 있는가",
    labD2_2: "입니다.",
    labD3: "오른쪽은 제가 완성한 조금 괴상한 아이디어 게임들입니다.",
    goal1: "Goal 01",
    goal1Val: "아직 낡아지지 않은 메커니즘을 실제로 만들어 낸다.",
    goal2: "Goal 02",
    goal2Val: "게임 업계에 새로운 참고 답안을 조금 더 보탠다.",
    statusLabel: "현재 상태",
    statusVal: "개발 중",
    platformLabel: "플랫폼",
    platformVal: "Steam / Switch",
    learnMore: "자세히 보기",
    labPanelTitle: "실험실",
    labPanelSub: "Lab / Prototypes",
    expPrefix: "Exp.",
    games: {
      "long-wait": {
        title: "久等了",
        desc: "어떤 사랑은 여름에 남고, 어떤 사람은 어제에 머뭅니다. 그리고 기억은 언제나 우리를 흐릿하면서도 밝게 빛나던 2000년으로 데려갑니다. 현실과 꿈이 겹쳐지는 시간의 틈에서 당신의 선택을 내리고, 기억과 그리움, 재회를 둘러싼 이야기 속으로 들어가세요.",
        status: "개발 중",
        platform: "Steam / Switch",
        tags: ["밀레니엄", "기억", "TRPG"],
      },
      "invisible-room": {
        title: "보이지 않는 방",
        desc: "『보이지 않는 방』에서 플레이어는 ‘괴담반’의 일원이 되어, 단 하나뿐인 통신 회선을 통해 임무 중 시력을 잃고 갇힌 요원을 위험에서 탈출시키게 됩니다. 화면도 없고, 주변 환경을 직접 관찰할 능력도 없습니다. 플레이어는 환경음, 인물의 대화, 미세한 소리 단서만을 바탕으로 머릿속에서 공간을 구성하고, 위험을 판단하고, 정보를 정리하며, 한 걸음씩 진실에 다가가야 합니다.",
        detail: [
          "『보이지 않는 방』에서 플레이어는 ‘괴담반’의 일원이 되어, 단 하나뿐인 통신 회선을 통해 임무 중 시력을 잃고 갇힌 요원을 위험에서 탈출시키게 됩니다. 화면도 없고, 주변 환경을 직접 관찰할 능력도 없습니다. 플레이어는 환경음, 인물의 대화, 미세한 소리 단서만을 바탕으로 머릿속에서 공간을 구성하고, 위험을 판단하고, 정보를 정리하며, 한 걸음씩 진실에 다가가야 합니다.",
          "『보이지 않는 방』이 시도하는 것은 소리를 주도축으로, 종이 자료를 보조축으로 삼는 퍼즐 방식입니다. 우리는 플레이어가 세계를 이해하는 기준을 가능한 한 ‘무엇이 보이는가’에서 ‘무엇이 들리는가, 무엇을 기록하는가, 무엇을 추론할 수 있는가’로 옮기고 싶습니다. 동시에 게임에 포함된 출력 가능한 문서는 단순한 서사 보충물이 아니라, 오디오 단서와 나란히 작동하는 실제 퍼즐 도구가 됩니다. 이 실험의 핵심은 단지 화면을 없애는 데 있지 않습니다. 소리만으로 완전한 공간 인지와 논리 추론을 떠받칠 수 있는지, 그리고 현실의 종이 매체가 정말 게임 메커니즘 안으로 들어올 수 있는지를 검증하는 데 있습니다."
        ],
        link: "https://store.steampowered.com/app/3533210/_/",
        linkLabel: "Steam",
        status: "출시됨",
        platform: "Steam",
        tags: ["사운드", "퍼즐", "인쇄물"],
      },
      "key-hero": {
        title: "KeyHero",
        desc: "『KeyHero』는 ‘방향키’를 중심으로 전개되는 퍼즐 게임입니다. 플레이어는 상하좌우로 주인공을 움직이고, 벽에 닿으면 막히게 됩니다. 하지만 동시에 방향키는 단순히 이동만을 위한 것이 아닙니다. 방향키 자체를 스테이지 위에 놓아 임시 다리로 만들면, 원래는 건널 수 없던 지형을 넘을 수 있습니다. 다만 방향키 하나를 내려놓을 때마다 그 방향으로 움직일 수 있는 능력도 함께 잃게 됩니다. 즉, 다리를 놓는다는 것은 길을 얻는 일이면서 동시에 자신의 행동 방식을 줄여 나가는 일이기도 합니다.",
        detail: [
          "『KeyHero』는 ‘방향키’를 중심으로 전개되는 퍼즐 게임입니다. 플레이어는 상하좌우로 주인공을 움직이고, 벽에 닿으면 막히게 됩니다. 하지만 동시에 방향키는 단순히 이동만을 위한 것이 아닙니다. 방향키 자체를 스테이지 위에 놓아 임시 다리로 만들면, 원래는 건널 수 없던 지형을 넘을 수 있습니다. 다만 방향키 하나를 내려놓을 때마다 그 방향으로 움직일 수 있는 능력도 함께 잃게 됩니다. 즉, 다리를 놓는다는 것은 길을 얻는 일이면서 동시에 자신의 행동 방식을 줄여 나가는 일이기도 합니다.",
          "『KeyHero』가 실험하고 싶은 것은 아주 단순하지만, 정작 퍼즐의 핵심으로 진지하게 다뤄진 적은 드문 질문입니다. 플레이어가 이미 방향키를 그저 ‘이동 도구’로 여기고 있을 때, 그 키 자체를 사고하고, 선택하고, 재구성해야 하는 대상으로 바꿀 수 있을까? 대부분의 게임에서 방향 입력은 가장 기초적이고 투명한 요소입니다. 플레이어는 그것에 의존하지만, 그 존재를 거의 의식하지 않습니다. 『KeyHero』는 바로 그 ‘당연함’을 뒤집고자 합니다. 방향키를 당연한 조작 방식이 아니라, 한정된 자원이며, 공간 도구이자, 하나의 퍼즐로 바꾸는 것입니다. 플레이어는 더 이상 단순히 ‘방향키로 퍼즐을 푸는’ 것이 아니라, 어떤 방향 자체가 소모되고, 배치되고, 잠시 잃어버릴 수 있다면 이동이라는 행위는 어떻게 달라지는지, 그리고 퍼즐은 어떤 모습이 되는지를 생각하게 됩니다."
        ],
        link: "https://store.steampowered.com/app/1807150/KeyHero/",
        linkLabel: "Steam",
        status: "출시됨",
        platform: "Steam",
        tags: ["박스 밀기", "퍼즐", "방향키"],
      },
      "fight-with-keys": {
        title: "Fight With Keys",
        desc: "『Fight With Keys』는 타이핑 입력과 액션 이동을 결합한 게임입니다. 플레이어는 오른손으로 방향키를 조작해 캐릭터를 움직이고 적을 피하는 동시에, 왼손으로 대응하는 키를 입력해 다가오는 적을 빠르게 처치합니다. 적이 공격 범위 안으로 들어오면 머리 위에 해당 문자가 표시되고, 플레이어는 계속 움직이고 상황을 살피면서 동시에 입력까지 해내야만 리듬을 유지하고 전장을 비울 수 있습니다.",
        detail: [
          "『Fight With Keys』는 타이핑 입력과 액션 이동을 결합한 게임입니다. 플레이어는 오른손으로 방향키를 조작해 캐릭터를 움직이고 적을 피하는 동시에, 왼손으로 대응하는 키를 입력해 다가오는 적을 빠르게 처치합니다. 적이 공격 범위 안으로 들어오면 머리 위에 해당 문자가 표시되고, 플레이어는 계속 움직이고 상황을 살피면서 동시에 입력까지 해내야만 리듬을 유지하고 전장을 비울 수 있습니다.",
          "『Fight With Keys』가 실험하는 것은, 왼손과 오른손이 더 이상 하나의 단순한 일을 함께 처리하는 것이 아니라 각자 복잡한 역할을 떠맡게 될 때, 플레이어가 이런 분열형 조작을 받아들이고 그 안에서 즐거움을 느낄 수 있는가 하는 점입니다. 대부분의 키보드 게임에서는 양손의 역할 분담이 비교적 고정되어 있습니다. 한 손은 이동을, 다른 한 손은 소수의 기능키를 맡기 때문에 부담도 대칭적이지 않습니다. 우리가 পরীক্ষা하고 싶은 것은 단순히 조작이 더 어려워지는가가 아니라, 사람의 주의가 좌우 두 체계로 강제로 나뉠 때 게임이 새로운 긴장감, 새로운 리듬감, 그리고 좌우가 따로 싸우는 듯한 독특한 즐거움을 만들어 낼 수 있는가입니다."
        ],
        link: "https://store.steampowered.com/app/2309550/Fight_With_Keys/",
        linkLabel: "Steam",
        status: "출시됨",
        platform: "Steam",
        tags: ["타이핑", "액션", "좌우 분업"],
      },
    },
  },
};

const GAME_METADATA: GameMetadata[] = [
  {
    id: "long-wait",
    category: "formal",
    tags: ["千禧年", "回忆", "TRPG"],
    image: "/IMG/long-wait.jpg",
    accent: "#E60012",
  },
  {
    id: "key-hero",
    category: "experimental",
    tags: ["推箱子", "解谜", "方向键"],
    image: "/IMG/KeyHero.png",
    accent: "#00FFFF",
  },
  {
    id: "fight-with-keys",
    category: "experimental",
    tags: ["打字", "动作", "左右互搏"],
    image: "/IMG/FightWithKeys.png",
    accent: "#FFFF00",
  },
  {
    id: "invisible-room",
    category: "experimental",
    tags: ["声音", "解谜", "印刷品"],
    image: "/IMG/invisible-room-kv.png",
    accent: "#FF00FF",
  },
];

export default function App() {
  const [view, setView] = useState<"home" | "about" | "detail" | "lab">("home");
  const [activeGameId, setActiveGameId] = useState<GameId | null>(null);
  const [lang, setLang] = useState<Language>("zh");

  const t = DICT[lang];
  const formalGames = GAME_METADATA.filter((g) => g.category === "formal");
  const experimentalGames = GAME_METADATA.filter((g) => g.category === "experimental");
  const selectedGame = GAME_METADATA.find((g) => g.id === activeGameId) || GAME_METADATA[0];

  const toggleLang = () => {
    const sequence: Language[] = ["zh", "en", "ja", "ko"];
    const currentIndex = sequence.indexOf(lang);
    setLang(sequence[(currentIndex + 1) % sequence.length]);
  };

  const renderContent = () => {
    if (view === "about") {
      return (
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full md:flex-1 p-4 md:p-8 lg:p-12 md:overflow-y-auto bg-bg-main shrink-0 flex flex-col min-h-max"
        >
          <div className="bg-white rounded-[2rem] md:rounded-[3rem] shadow-sm border border-border p-6 md:p-12 flex-1 flex flex-col shrink-0">
            <div className="inline-block bg-blue-100 text-blue-600 px-3 md:px-4 py-1.5 md:py-2 rounded-full font-black text-xs md:text-sm uppercase tracking-widest mb-4 md:mb-6 self-start">
              {t.studioProfile}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-text-main mb-6 md:mb-8">{t.wePlayTitle}</h1>
            <div className="text-base md:text-xl text-text-dim font-bold space-y-4 md:space-y-6 max-w-2xl">
              <p>{t.aboutP1}</p>
              <p>{t.aboutP2}</p>
            </div>

            <div className="mt-8 md:mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 border-t-4 border-bg-main pt-8 md:pt-12 max-w-2xl">
              <div>
                <div className="text-accent font-black uppercase tracking-widest mb-1.5 md:mb-2 text-xs md:text-sm flex items-center gap-2">
                  <Star size={16} fill="#E60012" /> {t.philosophy}
                </div>
                <div className="text-base md:text-lg font-bold text-text-main">{t.philosophyVal}</div>
              </div>
              <div>
                <div className="text-accent font-black uppercase tracking-widest mb-1.5 md:mb-2 text-xs md:text-sm flex items-center gap-2">
                  <Star size={16} fill="#E60012" /> {t.location}
                </div>
                <div className="text-base md:text-lg font-bold text-text-main">{t.locationVal}</div>
              </div>
            </div>
          </div>
        </motion.main>
      );
    }

    if (view === "lab") {
      return (
        <motion.main
          key="lab-view"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full md:flex-1 p-4 md:p-8 lg:p-12 md:overflow-y-auto bg-bg-main shrink-0 flex flex-col min-h-max"
        >
          <div className="bg-white rounded-[2rem] md:rounded-[3rem] shadow-sm border border-border p-6 md:p-12 flex-1 flex flex-col shrink-0 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-red-50 text-accent border border-red-100 px-3 md:px-4 py-1.5 md:py-2 rounded-full font-black text-xs md:text-sm uppercase tracking-widest mb-4 md:mb-6">
                <FlaskConical size={16} strokeWidth={3} /> {t.labHeroPrefix}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-text-main mb-6 md:mb-8 tracking-tight">{t.labHeroTitle}</h1>
              <div className="text-base md:text-xl text-text-main font-bold space-y-4 md:space-y-6 max-w-3xl leading-relaxed">
                <p>
                  {t.labD1_1}
                  <span className="text-accent underline decoration-4 underline-offset-4">{t.labD1_hl}</span>
                  {t.labD1_2}
                </p>
                <p>
                  {t.labD2_1}
                  <span className="bg-accent text-white px-2 rounded-md mx-1">{t.labD2_hl}</span>
                  {t.labD2_2}
                </p>
                <p className="text-text-dim leading-relaxed">{t.labD3}</p>
              </div>
              <div className="mt-10 md:mt-16 bg-bg-main p-6 md:p-8 rounded-[1.5rem] md:rounded-3xl border border-border max-w-3xl flex flex-col sm:flex-row gap-6 md:gap-8">
                <div className="flex-1">
                  <div className="text-accent font-black uppercase tracking-widest text-[10px] md:text-xs mb-2">{t.goal1}</div>
                  <div className="text-text-main font-black text-base md:text-lg">{t.goal1Val}</div>
                </div>
                <div className="hidden sm:block w-px bg-border my-2" />
                <div className="flex-1">
                  <div className="text-accent font-black uppercase tracking-widest text-[10px] md:text-xs mb-2">{t.goal2}</div>
                  <div className="text-text-main font-black text-base md:text-lg">{t.goal2Val}</div>
                </div>
              </div>
            </div>
          </div>
        </motion.main>
      );
    }

    if (view === "detail" && selectedGame) {
      const selectedGameLoc = t.games[selectedGame.id];
      const detailParagraphs = selectedGameLoc.detail ?? [selectedGameLoc.desc];

      return (
        <motion.main
          key="detail-view"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full md:flex-1 p-4 md:p-8 lg:p-12 md:overflow-y-auto bg-bg-main shrink-0 flex flex-col min-h-max"
        >
          <div className="bg-white rounded-[2rem] md:rounded-[3rem] shadow-sm border border-border overflow-hidden flex-1 flex flex-col relative shrink-0">
            <div className="absolute top-4 left-4 md:top-6 md:left-6 z-10">
              <button
                onClick={() => setView("home")}
                className="bg-white/90 backdrop-blur-md shadow-md hover:scale-105 transition-transform text-accent px-4 md:px-6 py-2 md:py-3 rounded-full font-black flex items-center gap-1.5 md:gap-2 text-xs md:text-sm uppercase border border-border"
              >
                <ArrowLeft size={18} strokeWidth={3} className="w-4 h-4 md:w-5 md:h-5" /> {t.back}
              </button>
            </div>
            <div className="h-56 md:h-72 lg:h-[400px] w-full relative bg-dark border-b border-border">
              <img src={selectedGame.image} alt={selectedGameLoc.title} className="w-full h-full object-cover opacity-90" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
            </div>
            <div className="p-6 md:p-10 lg:p-16 flex-1 -mt-16 md:-mt-32 relative z-10 shrink-0">
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-black text-text-main mb-4 md:mb-6 tracking-tight">{selectedGameLoc.title}</h1>
              <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
                {(selectedGameLoc.tags ?? selectedGame.tags).map((tag) => (
                  <span key={tag} className="font-bold text-[10px] md:text-sm bg-bg-main text-text-dim px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-border">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="max-w-3xl mb-8 md:mb-12 space-y-4 md:space-y-6">
                {detailParagraphs.map((paragraph) => (
                  <p key={paragraph} className="text-base md:text-xl text-text-main font-bold leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 p-4 md:p-6 bg-bg-main rounded-[1.5rem] md:rounded-2xl max-w-xl border border-border">
                <div className="flex-1 w-full">
                  <div className="text-text-dim font-bold text-[10px] md:text-sm mb-1 uppercase">{t.statusLabel}</div>
                  <div className="text-text-main font-black text-sm md:text-lg">{selectedGameLoc.status ?? t.statusVal}</div>
                </div>
                <div className="h-0.5 w-full sm:h-10 sm:w-1 bg-border rounded-full" />
                <div className="flex-1 w-full">
                  <div className="text-text-dim font-bold text-[10px] md:text-sm mb-1 uppercase">{t.platformLabel}</div>
                  <div className="text-text-main font-black text-sm md:text-lg">{selectedGameLoc.platform ?? t.platformVal}</div>
                </div>
              </div>

              {selectedGameLoc.link ? (
                <a
                  href={selectedGameLoc.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 bg-accent text-white px-5 md:px-6 py-3 rounded-full font-black text-xs md:text-sm uppercase tracking-widest shadow-[0_4px_12px_rgba(230,0,18,0.3)] hover:scale-105 hover:bg-red-600 transition-all"
                >
                  <ExternalLink size={16} />
                  {selectedGameLoc.linkLabel ?? "Link"}
                </a>
              ) : null}
            </div>
          </div>
        </motion.main>
      );
    }

    return (
      <main className="w-full shrink-0 min-h-[75dvh] md:min-h-0 md:flex-1 flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory scrollbar-hide bg-bg-main relative shadow-[0_4px_24px_rgba(0,0,0,0.02)] md:shadow-none z-10 md:z-auto">
        {formalGames.map((game) => {
          const gameLoc = t.games[game.id];
          return (
            <section key={game.id} className="min-w-full h-full p-4 md:p-8 lg:p-12 snap-center flex flex-col justify-center">
              <div className="bg-white rounded-[2rem] md:rounded-[3rem] shadow-sm border border-border h-full overflow-hidden flex flex-col relative group">
                <div
                  className="h-[45%] md:h-[55%] lg:h-[60%] w-full relative overflow-hidden bg-dark cursor-pointer shrink-0 border-b border-border"
                  onClick={() => {
                    setActiveGameId(game.id);
                    setView("detail");
                  }}
                >
                  <img src={game.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" />
                </div>

                <div className="p-5 md:p-8 lg:p-12 flex-1 flex flex-col justify-between shrink-0 overflow-y-auto">
                  <div>
                    <h1
                      className="text-2xl md:text-4xl lg:text-5xl font-black text-text-main mb-2 md:mb-4 tracking-tight cursor-pointer inline-block hover:text-accent transition-colors"
                      onClick={() => {
                        setActiveGameId(game.id);
                        setView("detail");
                      }}
                    >
                      {gameLoc.title}
                    </h1>
                    <p className="text-text-dim text-sm md:text-lg lg:text-xl leading-relaxed font-bold max-w-4xl line-clamp-3 md:line-clamp-3">
                      {gameLoc.desc}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 md:gap-6 mt-4 md:mt-6 shrink-0">
                    <button
                      onClick={() => {
                        setActiveGameId(game.id);
                        setView("detail");
                      }}
                      className="bg-accent text-white px-5 md:px-8 py-2.5 md:py-4 rounded-full font-black text-xs md:text-lg shadow-[0_4px_12px_rgba(230,0,18,0.3)] hover:scale-105 hover:bg-red-600 transition-all flex items-center gap-1.5 md:gap-2 w-max"
                    >
                      <Play fill="white" size={18} className="w-4 h-4 md:w-5 md:h-5" /> {t.learnMore}
                    </button>
                    <div className="flex flex-wrap gap-2">
                      {(gameLoc.tags ?? game.tags).map((tag) => (
                        <span key={tag} className="text-[9px] md:text-xs font-bold text-text-dim bg-bg-main px-3 md:px-4 py-1 md:py-2 rounded-full border border-border hidden sm:inline-block">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </main>
    );
  };

  return (
    <div className="flex flex-col-reverse md:flex-row h-[100dvh] w-screen bg-bg-main text-text-main overflow-hidden selection:bg-accent selection:text-white">
      <aside className="w-full md:w-20 lg:w-28 h-[72px] md:h-full bg-white/90 backdrop-blur-md md:bg-white border-t md:border-t-0 md:border-r border-border shrink-0 py-2 md:py-8 lg:py-10 px-6 md:px-0 flex flex-row md:flex-col justify-between items-center z-50 rounded-t-3xl md:rounded-none shadow-[0_-4px_24px_rgba(0,0,0,0.05)] md:shadow-none pb-safe">
        <nav className="flex flex-row md:flex-col gap-6 md:gap-4 flex-1 md:w-full md:px-4 justify-start md:justify-center items-center pt-0 md:pt-4">
          <button
            onClick={() => setView("home")}
            className={`w-12 h-12 md:w-full md:aspect-square rounded-[1.25rem] flex items-center justify-center transition-all ${view === "home" ? "bg-bg-main text-accent shadow-inner border border-border" : "text-text-dim border border-transparent hover:bg-bg-main hover:text-text-main"}`}
            title="Home"
          >
            <Home size={24} strokeWidth={view === "home" ? 3 : 2.5} className="w-6 h-6 md:w-7 md:h-7" />
          </button>
          <button
            onClick={() => setView("lab")}
            className={`w-12 h-12 md:w-full md:aspect-square rounded-[1.25rem] flex items-center justify-center transition-all ${view === "lab" ? "bg-bg-main text-accent shadow-inner border border-border" : "text-text-dim border border-transparent hover:bg-bg-main hover:text-text-main"}`}
            title="Lab"
          >
            <FlaskConical size={24} strokeWidth={view === "lab" ? 3 : 2.5} className="w-6 h-6 md:w-7 md:h-7" />
          </button>
          <button
            onClick={() => setView("about")}
            className={`w-12 h-12 md:w-full md:aspect-square rounded-[1.25rem] flex items-center justify-center transition-all ${view === "about" ? "bg-bg-main text-accent shadow-inner border border-border" : "text-text-dim border border-transparent hover:bg-bg-main hover:text-text-main"}`}
            title="About"
          >
            <Info size={24} strokeWidth={view === "about" ? 3 : 2.5} className="w-6 h-6 md:w-7 md:h-7" />
          </button>
        </nav>

        <div className="flex flex-row md:flex-col items-center gap-3 md:gap-4 mt-0 md:mt-auto">
          <button
            onClick={toggleLang}
            className="w-9 h-9 md:w-12 md:h-12 shrink-0 rounded-full border-2 border-transparent bg-transparent hover:bg-bg-main flex items-center justify-center text-text-dim hover:text-accent transition-colors"
            title="Toggle Language"
          >
            <div className="flex flex-col items-center justify-center leading-none">
              <Globe size={18} className="w-4 h-4 md:w-5 md:h-5 mb-0.5" />
              <span className="font-black text-[8px] md:text-[9px] uppercase">{t.langLabel}</span>
            </div>
          </button>

          <div className="w-9 h-9 md:w-12 md:h-12 shrink-0 rounded-full border-2 border-border bg-bg-main flex items-center justify-center text-accent hover:border-accent cursor-pointer transition-colors" title="User Profile">
            <span className="font-black text-[10px] md:text-sm">P1</span>
          </div>
        </div>
      </aside>

      <div className="flex flex-col md:flex-row flex-1 overflow-x-hidden overflow-y-auto md:overflow-hidden relative bg-bg-main">
        {renderContent()}

        <section
          className={`w-full md:w-[320px] lg:w-[380px] bg-white border-t md:border-t-0 md:border-l border-border p-6 md:p-8 lg:p-10 flex flex-col md:transition-transform md:duration-500 z-40 shrink-0
          ${view === "about" ? "hidden md:flex md:translate-x-full md:absolute md:right-0 md:h-full md:shadow-none md:pointer-events-none" : "flex relative md:shadow-[-4px_0_24px_rgba(0,0,0,0.02)] z-0"}
        `}
        >
          <div className="mb-5 md:mb-8">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-text-main flex items-center gap-2 md:gap-3">
              <span className="text-accent animate-pulse">●</span> {t.labPanelTitle}
            </h2>
            <span className="block text-[10px] md:text-sm text-text-dim font-bold mt-1 md:mt-2 uppercase tracking-widest">{t.labPanelSub}</span>
          </div>

          <ul className="md:flex-1 flex flex-col space-y-3 md:space-y-4 md:overflow-y-auto scrollbar-hide pb-6 md:pb-10 pt-1 md:pt-2 px-1 md:-mx-2 md:px-2">
            {experimentalGames.map((game, index) => {
              const gameLoc = t.games[game.id];
              return (
                <motion.li
                  key={game.id}
                  whileHover={{ scale: 1.03 }}
                  onClick={() => {
                    setActiveGameId(game.id);
                    setView("detail");
                  }}
                  className={`group rounded-[1.5rem] p-4 md:p-5 cursor-pointer transition-all border-2 shrink-0 ${activeGameId === game.id && view === "detail" ? "border-accent bg-red-50 shadow-md" : "border-border bg-[#F8F9FA] hover:border-accent hover:shadow-md hover:bg-white"}`}
                >
                  <div className="flex justify-between items-start mb-2 md:mb-3">
                    <div className="text-base md:text-xl font-black text-text-main group-hover:text-accent transition-colors leading-snug pr-2">{gameLoc.title}</div>
                    <div className="text-accent font-black bg-white border border-border px-2 py-0.5 rounded-full text-[9px] md:text-xs shadow-sm whitespace-nowrap">
                      {t.expPrefix}0{index + 1}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {(gameLoc.tags ?? game.tags).map((tag) => (
                      <span key={tag} className="text-[9px] md:text-[10px] uppercase font-bold text-text-dim border border-border px-2 py-0.5 md:px-2.5 md:py-1 rounded-full bg-white">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </section>
      </div>
    </div>
  );
}
