import { GameItem, StudioInfo } from '../types';

export const INITIAL_STUDIO_INFO: StudioInfo = {
  name: 'INVISIBLE RABBIT',
  nameZh: '不见兔',
  tagline: 'INDEPENDENT GAMES FROM BEIJING & SHIJIAZHUANG',
  taglineZh: '来自北京与石家庄的独立游戏工作室',
  established: '2025',
  location: 'Beijing / Shijiazhuang',
  manifesto: 'Invisible Rabbit is an independent game studio based in Beijing and Shijiazhuang. We develop games for Steam along two parallel paths: experimental works that make room for unfamiliar ideas, and more focused games that take the simple pleasure of play seriously.',
  manifestoZh: '正式成立于 2025 年，团队分布于北京与石家庄，专注于 Steam 独立游戏开发。我们喜欢尝试新鲜、有趣、与众不同的玩法，尤其热衷于那些打破常规、充满创意的游戏设计。我们相信，游戏的魅力在于不断带来新的体验，也希望通过自己的作品，让玩家发现更多意想不到的乐趣。',
  socials: [],
  team: {
    zh: {
      label: '团队',
      intro: '遇见在这个小房间里打造无限游戏的热血生物。',
      members: [
        { name: '王兔兔', role: '策划 / 程序', bio: '这个团队人不多，但工种很齐，基本都是我。', image: '/IMG/1.jpg', url: 'https://www.superwyh.com/' },
        { name: '锅子', role: '美术 / 铲屎', bio: '虽然干活慢一点，但站在那里就很有说服力。', image: '/IMG/2.jpg' },
        { name: '11', role: '保安', bio: '排便不太顺利，出手倒是很利索。', image: '/IMG/3.png' },
      ],
    },
    en: {
      label: 'Team',
      intro: 'Meet the hot-blooded creatures building limitless games in this little room.',
      members: [
        { name: 'Wang Tutu', role: 'Design / Programming', bio: 'The team is small, but the roles are surprisingly complete. Most of them are basically me.', image: '/IMG/1.jpg', url: 'https://www.superwyh.com/' },
        { name: 'Guozi', role: 'Art / Cat Care', bio: 'Works a little slowly, but is convincing just by standing there.', image: '/IMG/2.jpg' },
        { name: '11', role: 'Security', bio: 'Bathroom business is not always smooth, but the response time definitely is.', image: '/IMG/3.png' },
      ],
    },
    ja: {
      label: 'チーム',
      intro: 'この小さな部屋で、無限のゲームをつくっている熱血生物たちに会ってください。',
      members: [
        { name: '王兔兔', role: '企画 / プログラム', bio: '人数は多くありませんが、役割はだいたい全部そろっています。ほとんど私です。', image: '/IMG/1.jpg', url: 'https://www.superwyh.com/' },
        { name: '锅子', role: 'アート / 猫係', bio: '作業は少しゆっくりですが、そこに立っているだけで妙な説得力があります。', image: '/IMG/2.jpg' },
        { name: '11', role: '警備', bio: 'お通じは少し不安定ですが、動き出すとかなり素早いです。', image: '/IMG/3.png' },
      ],
    },
    ko: {
      label: '팀',
      intro: '이 작은 방에서 무한한 게임을 만들고 있는 열혈 생물들을 만나 보세요.',
      members: [
        { name: '王兔兔', role: '기획 / 프로그래밍', bio: '팀 인원은 많지 않지만 맡는 일은 꽤 다양합니다. 사실 대부분은 저예요.', image: '/IMG/1.jpg', url: 'https://www.superwyh.com/' },
        { name: '锅子', role: '아트 / 집사', bio: '일은 조금 느리지만, 거기 서 있기만 해도 이상하게 설득력이 있습니다.', image: '/IMG/2.jpg' },
        { name: '11', role: '보안', bio: '배변은 조금 답답하지만, 움직일 때 손은 아주 빠릅니다.', image: '/IMG/3.png' },
      ],
    },
  },
  locales: {
    ja: {
      name: 'インビジブル・ラビット',
      tagline: '北京と石家荘を拠点とするインディーゲームスタジオ',
      location: '北京 / 石家荘',
      manifesto: '北京不见兔科技有限公司は2025年に設立され、チームは北京と石家荘に拠点を置き、Steam向けインディーゲーム開発に注力しています。私たちには並行する二つのプロダクトラインがあります。一つはより実験的で探索寄りの作品をつくる冒険のためのライン。もう一つは、ジャンルがより明確でゲームプレイが成熟した作品をつくり、ゲームの最も素朴な楽しさを丁寧に磨き上げるためのラインです。',
    },
    ko: {
      name: '인비저블 래빗',
      tagline: '베이징과 스자좡을 기반으로 하는 인디 게임 스튜디오',
      location: '베이징 / 스자좡',
      manifesto: '베이징 불견토 테크놀로지 유한회사는 2025년에 설립되었으며, 팀은 베이징과 스자좡에 분포해 있고 Steam 인디 게임 개발에 집중하고 있습니다. 우리는 두 개의 제품 라인을 병행합니다. 하나는 더 실험적이고 탐색적인 작품을 만드는 모험의 라인이고, 다른 하나는 장르가 더 분명하고 플레이가 더 성숙한 작품을 만들어 게임의 가장 소박한 즐거움을 제대로 다듬는 라인입니다.',
    },
  },
};

const GAME_LOCALES = {
  'invisible-room': {
    en: {
      title: 'Invisible Room',
      tagline: 'A sound-led puzzle game with printable documents.',
      description: 'Invisible Room is an audio puzzle game with no visuals. As a member of the Paranormal Office, you guide a blind investigator out of danger over a communication link. Listen to environmental sounds and character dialogue, and use the printable documents included with the game to reconstruct the surroundings in your mind, assess dangers, and gradually uncover the truth.',
      awardGroups: [
        { organizer: 'BOOOM Game Incubation Committee', awards: ['Best in Show Award', 'Applauded Gameplay Award', 'Least Wanted to Be Delayed Award'] },
        { organizer: 'Tokyo Game Show', awards: ['SELECTED INDIE 80'] },
      ],
    },
    ja: {
      title: '見えない部屋',
      tagline: '音と印刷資料で空間と危険を組み立てるパズル。',
      description: '『見えない部屋』は、映像のない音声パズルゲームです。あなたは「怪談室」の一員として、通信を通じて目の見えない捜査員を危険から脱出させます。環境音や登場人物の会話に耳を澄まし、ゲームに付属する印刷可能な資料を手がかりに、頭の中で周囲の状況を再現し、危険を見極めながら、少しずつ真相を解き明かしていきます。',
      awardGroups: [
        { organizer: 'BOOOM 暴造 ゲームインキュベーション委員会', awards: ['圧巻のグランプリ', '思わず拍手したくなるゲームプレイ賞', 'いちばん延期してほしくない賞'] },
        { organizer: '東京ゲームショウ', awards: ['SELECTED INDIE 80'] },
      ],
    },
    ko: {
      title: '보이지 않는 방',
      tagline: '소리와 인쇄 자료로 공간과 위험을 조합하는 퍼즐.',
      description: '『보이지 않는 방』은 화면 없이 소리로 풀어 나가는 퍼즐 게임입니다. 당신은 ‘괴담반’의 일원이 되어 통신으로 시각장애가 있는 요원이 위험에서 벗어나도록 안내합니다. 환경음과 인물들의 대화를 듣고, 게임에 포함된 인쇄 가능한 자료를 함께 활용해 머릿속에서 주변 환경을 재구성하고 위험을 판단하며, 조금씩 진실을 밝혀내야 합니다.',
      awardGroups: [
        { organizer: 'BOOOM 暴造 게임 인큐베이션 운영위원회', awards: ['최고의 대상', '박수가 절로 나오는 게임플레이상', '가장 연기하지 않았으면 하는 상'] },
        { organizer: '도쿄 게임쇼', awards: ['SELECTED INDIE 80'] },
      ],
    },
  },
  'key-hero': {
    ja: {
      title: 'KeyHero',
      tagline: '方向キーで橋を架け、その方向を失う。',
      description: '『KeyHero』は、方向キーで橋を架けるパズルゲームです。方向キーは移動に使えるだけでなく、ステージに置いて橋にすることもできます。ただし、キーを一つ置くたびに、その方向への移動能力を一時的に失います。どの方向キーを道づくりに使い、どのキーを移動用に残すかを考えて、ステージのクリアを目指します。',
    },
    ko: {
      title: 'KeyHero',
      tagline: '방향키로 다리를 놓는 대신 그 방향을 잃는 퍼즐.',
      description: '『KeyHero』는 방향키로 다리를 만드는 퍼즐 게임입니다. 방향키로 이동할 수도 있고, 스테이지에 놓아 다리를 만들 수도 있지만, 키 하나를 내려놓을 때마다 해당 방향으로 움직이는 능력을 일시적으로 잃습니다. 어떤 방향키를 길을 만드는 데 쓰고 어떤 키를 이동용으로 남길지 결정해야 스테이지를 클리어할 수 있습니다.',
    },
  },
  'fight-with-keys': {
    ja: {
      title: 'Fight With Keys',
      tagline: '右手の移動と左手のタイピングを分けるアクションゲーム。',
      description: '『Fight With Keys』は、タイピングと立ち回りを組み合わせたアクションゲームです。右手で方向キーを操作して移動し、敵をかわしながら、左手で敵の頭上に表示される文字を入力して倒します。文字は敵が攻撃範囲に入ると表示されるため、移動しながら状況を見て入力する、両手の連携が試されます。',
    },
    ko: {
      title: 'Fight With Keys',
      tagline: '오른손 이동과 왼손 타이핑을 분리한 액션 게임.',
      description: '『Fight With Keys』는 타이핑과 이동을 결합한 액션 게임입니다. 오른손으로 방향키를 조작해 이동하고 적을 피하는 동시에, 왼손으로 적의 머리 위에 표시되는 문자를 입력해 적을 처치합니다. 문자는 적이 공격 범위에 들어온 뒤 나타나므로, 이동하면서 관찰하고 입력하는 양손의 호흡이 중요합니다.',
    },
  },
};

const GAMES: GameItem[] = [
  {
    id: 'invisible-room',
    number: '02',
    title: 'Invisible Room',
    titleZh: '看不见的房间',
    tagline: 'A sound-led puzzle game with printable documents.',
    taglineZh: '通过声音与纸面资料拼出空间、判断危险。',
    description: 'Invisible Room is an audio puzzle game with no visuals. As a member of the Paranormal Office, you guide a blind investigator out of danger over a communication link. Listen to environmental sounds and character dialogue, and use the printable documents included with the game to reconstruct the surroundings in your mind, assess dangers, and gradually uncover the truth.',
    descriptionZh: '《看不见的房间》是一款没有画面的声音解谜游戏。你将作为“怪谈办”的成员，通过通讯引导一名失明的探员逃离险境。你需要聆听环境音和角色对话，结合游戏附带的可打印资料，在脑中还原环境、判断危险，逐步揭开真相。',
    genre: ['Sound', 'Puzzle', 'Print'],
    platforms: ['Steam'],
    releaseYear: '2025',
    status: 'RELEASED',
    coverImage: '/IMG/invisible-room-kv.png',
    bannerImage: '/IMG/invisible-room-kv.png',
    icon: '/IMG/invisible-room-logo.png',
    screenshots: [],
    awardGroups: [
      { organizer: 'BOOOM 暴造 游戏孵化组委会', awards: ['恁牛全场奖', '拍手叫好玩法奖', '最不想让它咕咕奖'] },
      { organizer: 'Tokyo Game Show 东京电玩展', awards: ['SELECTED INDIE 80'] },
    ],
    locales: GAME_LOCALES['invisible-room'],
    links: [{ id: 'steam', label: 'Steam', url: 'https://store.steampowered.com/app/3533210/_/', type: 'store', primary: true }],
  },
  {
    id: 'key-hero',
    number: '03',
    title: 'KeyHero',
    titleZh: 'KeyHero',
    tagline: 'Build bridges with the arrow keys—then lose that direction.',
    taglineZh: '把方向键放进关卡搭桥，同时失去那个方向。',
    description: 'KeyHero is a puzzle game about building bridges with the arrow keys. The arrow keys let you move, but you can also place them in a level to build bridges. Each key you place temporarily takes away your ability to move in that direction. To clear each level, you need to decide which arrow keys to use for a path and which to keep for movement.',
    descriptionZh: '《KeyHero》是一款用方向键搭桥的解谜游戏。方向键既能控制移动，也能放进关卡中搭桥，但每放下一枚，你就会暂时失去对应方向的移动能力。你需要决定用哪些方向键铺路、保留哪些用来移动，才能顺利过关。',
    genre: ['Box-Pushing', 'Puzzle', 'Arrow Keys'],
    platforms: ['Steam'],
    releaseYear: '2021',
    status: 'RELEASED',
    coverImage: '/IMG/KeyHero.png',
    bannerImage: '/IMG/KeyHero.png',
    icon: '/IMG/keyhero-logo.png',
    screenshots: [],
    locales: GAME_LOCALES['key-hero'],
    links: [{ id: 'steam', label: 'Steam', url: 'https://store.steampowered.com/app/1807150/KeyHero/', type: 'store', primary: true }],
  },
  {
    id: 'fight-with-keys',
    number: '04',
    title: 'Fight With Keys',
    titleZh: 'Fight With Keys',
    tagline: 'Action movement and typing, split between two hands.',
    taglineZh: '右手走位，左手打字的双手分工动作游戏。',
    description: 'Fight With Keys is an action game that combines typing with movement. Use your right hand on the arrow keys to move and dodge enemies while your left hand types the characters above their heads to defeat them. The characters appear when enemies enter your attack range, testing your ability to move, observe, and type with both hands working together.',
    descriptionZh: '《Fight With Keys》是一款结合打字与走位的动作游戏。你需要用右手操作方向键移动、躲避敌人，同时用左手输入敌人头顶的字符来击杀目标。字符会在敌人进入攻击范围后出现，考验你一边走位、一边观察和输入的双手配合。',
    genre: ['Typing', 'Action', 'Dual-Handed'],
    platforms: ['Steam'],
    releaseYear: '2023',
    status: 'RELEASED',
    coverImage: '/IMG/FightWithKeys.png',
    bannerImage: '/IMG/FightWithKeys.png',
    icon: '/IMG/fight-with-keys-logo.png',
    screenshots: [],
    locales: GAME_LOCALES['fight-with-keys'],
    links: [{ id: 'steam', label: 'Steam', url: 'https://store.steampowered.com/app/2309550/Fight_With_Keys/', type: 'store', primary: true }],
  },
];

export const DEFAULT_GAMES = GAMES.sort((a, b) => {
  const releaseValue = (year: string) => (year === 'TBA' ? Number.POSITIVE_INFINITY : Number.parseInt(year, 10));
  return releaseValue(b.releaseYear) - releaseValue(a.releaseYear);
}).map((game, index) => ({ ...game, number: String(index + 1).padStart(2, '0') }));
