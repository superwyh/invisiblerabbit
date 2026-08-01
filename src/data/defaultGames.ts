import { GameItem, StudioInfo } from '../types';

export const INITIAL_STUDIO_INFO: StudioInfo = {
  name: 'INVISIBLE RABBIT',
  nameZh: '不见兔',
  tagline: 'INDEPENDENT GAMES FROM BEIJING & SHIJIAZHUANG',
  taglineZh: '来自北京与石家庄的独立游戏工作室',
  established: '2025',
  location: 'Beijing / Shijiazhuang',
  manifesto: 'Invisible Rabbit is an independent game studio based in Beijing and Shijiazhuang. We develop games for Steam along two parallel paths: experimental works that make room for unfamiliar ideas, and more focused games that take the simple pleasure of play seriously.',
  manifestoZh: '北京不见兔科技有限公司成立于 2025 年，团队分布于北京与石家庄，专注于 Steam 独立游戏开发。我们有两条并行的产品线：一条用来冒险，做一些玩法上更实验、更偏探索性的作品；另一条用来沉淀，做一些类型更明确、玩法更成熟、完成度更高的作品，把游戏最朴素的乐趣认真做到位。',
  socials: [],
  team: {
    zh: {
      label: '团队',
      intro: '遇见在这个小房间里打造无限游戏的热血生物。',
      members: [
        { name: '王兔兔', role: '策划 / 程序', bio: '这个团队人不多，但工种很齐，基本都是我。', image: '/IMG/1.jpg' },
        { name: '锅子', role: '美术 / 铲屎', bio: '虽然干活慢一点，但站在那里就很有说服力。', image: '/IMG/2.jpg' },
        { name: '11', role: '保安', bio: '排便不太顺利，出手倒是很利索。', image: '/IMG/3.png' },
      ],
    },
    en: {
      label: 'Team',
      intro: 'Meet the hot-blooded creatures building limitless games in this little room.',
      members: [
        { name: 'Wang Tutu', role: 'Design / Programming', bio: 'The team is small, but the roles are surprisingly complete. Most of them are basically me.', image: '/IMG/1.jpg' },
        { name: 'Guozi', role: 'Art / Cat Care', bio: 'Works a little slowly, but is convincing just by standing there.', image: '/IMG/2.jpg' },
        { name: '11', role: 'Security', bio: 'Bathroom business is not always smooth, but the response time definitely is.', image: '/IMG/3.png' },
      ],
    },
    ja: {
      label: 'チーム',
      intro: 'この小さな部屋で、無限のゲームをつくっている熱血生物たちに会ってください。',
      members: [
        { name: '王兔兔', role: '企画 / プログラム', bio: '人数は多くありませんが、役割はだいたい全部そろっています。ほとんど私です。', image: '/IMG/1.jpg' },
        { name: '锅子', role: 'アート / 猫係', bio: '作業は少しゆっくりですが、そこに立っているだけで妙な説得力があります。', image: '/IMG/2.jpg' },
        { name: '11', role: '警備', bio: 'お通じは少し不安定ですが、動き出すとかなり素早いです。', image: '/IMG/3.png' },
      ],
    },
    ko: {
      label: '팀',
      intro: '이 작은 방에서 무한한 게임을 만들고 있는 열혈 생물들을 만나 보세요.',
      members: [
        { name: '王兔兔', role: '기획 / 프로그래밍', bio: '팀 인원은 많지 않지만 맡는 일은 꽤 다양합니다. 사실 대부분은 저예요.', image: '/IMG/1.jpg' },
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
  'long-wait': {
    ja: {
      title: '久等了',
      tagline: '現実と夢が重なる二つの時間軸を行き来する物語。',
      description: '記憶はいつも人を、あのぼやけていて、それでいてまぶしい2008年へ連れ戻します。現実と夢が重なり合う裂け目の中で、あなたは交差する二つの時間軸を行き来し、愛と後悔、悔恨をめぐる過去にもう一度向き合うことになります。',
      details: ['後になって、ようやくわかった。\n時間は流れていくものではない。', '時間とは——\nあるものが\n二度と戻ってこないということ。', '子どものころの夏。\n扇風機が宿題のノートを揺らし、\nテレビでは、もう誰も覚えていない歌が流れていた。', '誰かが駅のホームに立ち、\n手を振った。\nけれどあなたは知らなかった。\nそれが最後の一度だったことを。', '若いころはいつも\n未来はゆっくりだと思っていた。', '後になって気づいた。\n一年は\n紙を一枚めくるように速いのだと。', '両親は老いていき、\n友人たちは少しずつ離れ、\n鏡の中の自分さえ\nだんだん見知らぬ人になっていく。', 'けれど時間は何も言わない。', 'ただ静かに\n少年を大人に変え、\n理想を思い出に変え、\n「いつか」を\n「もしあの時」に変えていく。', 'ある深夜、\nあなたがふと立ち止まり、\n街を抜ける風の音を聞くまで。', '聞こえてくる。\nもう何年も前に過ぎ去った人や出来事が、\n長い歳月の向こうから、\nそっとあなたに言う声が。', '——お待たせ。'],
    },
    ko: {
      title: '久等了',
      tagline: '현실과 꿈이 겹치는 두 시간선을 오가는 이야기.',
      description: '기억은 언제나 사람을 흐릿하면서도 밝게 빛나던 2008년으로 데려갑니다. 현실과 꿈이 겹쳐지는 틈 속에서, 당신은 서로 교차하는 두 시간선을 지나 사랑과 아쉬움, 후회를 둘러싼 지난 일을 다시 마주하게 됩니다.',
      details: ['나중에서야 나는 마침내 알았다.\n시간은 흘러가는 것이 아니라는 것을.', '시간이란——\n어떤 것들이\n다시는 돌아오지 않는다는 것.', '어린 시절의 여름,\n선풍기가 숙제 공책을 넘기고,\n텔레비전에서는 이제 아무도 기억하지 못하는 노래가 흘러나오던 때.', '누군가가 플랫폼에 서서,\n손을 흔들었다.\n하지만 너는 몰랐다.\n그게 마지막 만남이었다는 것을.', '젊었을 때는 늘\n미래가 아주 느리다고 생각했다.', '나중에야 깨달았다.\n일 년은\n종이 한 장을 넘기듯 빠르다는 것을.', '부모님은 늙어 가고,\n친구들은 조금씩 흩어지고,\n거울 속의 나마저도\n점점 낯설어졌다.', '하지만 시간은 말하지 않는다.', '그저 조용히\n소년을 어른으로 만들고,\n이상을 추억으로 만들고,\n‘언젠가’를\n‘그때 그랬더라면’으로 바꿀 뿐이다.', '어느 깊은 밤,\n네가 문득 멈춰 서서,\n도시를 가로지르는 바람소리를 들을 때까지.', '그때 너는 듣는다.\n이미 오래전에 지나간 사람과 일들이,\n긴 세월 너머에서,\n가만히 너에게 말하는 것을:', '——오래 기다렸지.'],
    },
  },
  'invisible-room': {
    en: {
      title: 'Invisible Room',
      tagline: 'A sound-led puzzle game with printable documents.',
      description: 'In Invisible Room, the player becomes a member of the Paranormal Office, guiding an investigator who lost their sight and is trapped during a mission through a single communication line. With no visuals, the player relies on ambient sound, dialogue, and subtle audio cues to reconstruct space and move toward the truth.',
      details: ['Invisible Room experiments with a puzzle-solving structure led by sound and assisted by paper documents. Printable files are not just narrative extras: they work alongside audio clues as puzzle-solving tools.', 'The experiment asks whether sound alone can support spatial cognition and logical reasoning, and whether physical paper media can truly become part of game mechanics.'],
      awardOrganizer: 'BOOOM Game Incubation Committee',
      awards: ['Best in Show Award', 'Applauded Gameplay Award', 'Least Wanted to Be Delayed Award'],
    },
    ja: {
      title: '見えない部屋',
      tagline: '音と印刷資料で空間と危険を組み立てるパズル。',
      description: '『見えない部屋』でプレイヤーは「怪談室」の一員となり、たった一本の通信回線を通じて、任務中に失明し閉じ込められた捜査員を危険から導き出します。映像はなく、環境を直接観察する力もありません。プレイヤーは環境音、会話、そしてかすかな音の手がかりだけを頼りに、頭の中で空間を組み立て、危険を判断し、情報を整理しながら、一歩ずつ真相へ近づいていきます。',
      details: ['『見えない部屋』が試みているのは、音を主軸に、紙の資料を補助に据えた謎解きの形です。私たちは、プレイヤーの世界理解をできるだけ「何が見えるか」から「何が聞こえるか、何を記録するか、何を推論できるか」へ移したいと考えています。同時に、ゲームに付属する印刷可能な資料も単なる物語の補足ではなく、音声の手がかりと並行して機能する謎解きの道具です。この実験の重点は、単に画面を取り去ることではありません。音だけで完全な空間認知と論理推理を支えられるのか、そして現実の紙媒体が本当にゲームの仕組みに入り込めるのかを検証することにあります。'],
      awardOrganizer: 'BOOOM 暴造 ゲームインキュベーション委員会',
      awards: ['圧巻のグランプリ', '思わず拍手したくなるゲームプレイ賞', 'いちばん延期してほしくない賞'],
    },
    ko: {
      title: '보이지 않는 방',
      tagline: '소리와 인쇄 자료로 공간과 위험을 조합하는 퍼즐.',
      description: '『보이지 않는 방』에서 플레이어는 ‘괴담반’의 일원이 되어, 단 하나뿐인 통신 회선을 통해 임무 중 시력을 잃고 갇힌 요원을 위험에서 탈출시키게 됩니다. 화면도 없고, 주변 환경을 직접 관찰할 능력도 없습니다. 플레이어는 환경음, 인물의 대화, 미세한 소리 단서만을 바탕으로 머릿속에서 공간을 구성하고, 위험을 판단하고, 정보를 정리하며, 한 걸음씩 진실에 다가가야 합니다.',
      details: ['『보이지 않는 방』이 시도하는 것은 소리를 주도축으로, 종이 자료를 보조축으로 삼는 퍼즐 방식입니다. 우리는 플레이어가 세계를 이해하는 기준을 가능한 한 ‘무엇이 보이는가’에서 ‘무엇이 들리는가, 무엇을 기록하는가, 무엇을 추론할 수 있는가’로 옮기고 싶습니다. 동시에 게임에 포함된 출력 가능한 문서는 단순한 서사 보충물이 아니라, 오디오 단서와 나란히 작동하는 실제 퍼즐 도구가 됩니다. 이 실험의 핵심은 단지 화면을 없애는 데 있지 않습니다. 소리만으로 완전한 공간 인지와 논리 추론을 떠받칠 수 있는지, 그리고 현실의 종이 매체가 정말 게임 메커니즘 안으로 들어올 수 있는지를 검증하는 데 있습니다.'],
      awardOrganizer: 'BOOOM 暴造 게임 인큐베이션 운영위원회',
      awards: ['최고의 대상', '박수가 절로 나오는 게임플레이상', '가장 연기하지 않았으면 하는 상'],
    },
  },
  'key-hero': {
    ja: {
      title: 'KeyHero',
      tagline: '方向キーで橋を架け、その方向を失う。',
      description: '『KeyHero』は「方向キー」を中心に組み立てられた謎解きゲームです。プレイヤーは上下左右で主人公を動かし、壁にぶつかれば当然止められます。しかし同時に、方向キーは移動のためだけのものではありません。キーそのものをステージ上に置き、一時的な橋として使うことで、もともと渡れなかった地形を越えられます。ただし、方向キーを一つ置くたびに、その方向への移動能力も失われます。つまり橋を架けることは、道を得ることでもあり、自分の行動手段を削ることでもあるのです。',
      details: ['『KeyHero』が実験したいのは、とても単純でありながら、謎として本気で扱われることが少ない問いです。プレイヤーがすでに方向キーをただの「移動ツール」だと当然視しているとき、そのキー自体を考え、取捨選択し、組み替える対象にできるのか。多くのゲームにおいて、方向入力は最も基礎的で透明な要素です。プレイヤーはそれに頼りながら、その存在をほとんど意識しません。『KeyHero』はその「当たり前」をひっくり返したいのです。方向キーを当然の操作方法ではなく、有限の資源であり、空間の道具であり、そして一つの謎に変える。プレイヤーはもはや「方向キーで謎を解く」のではなく、ある方向そのものが消費され、配置され、一時的に失われうるとしたら、移動とは何になるのか、そして謎はどんな形になるのかを考えることになります。'],
    },
    ko: {
      title: 'KeyHero',
      tagline: '방향키로 다리를 놓는 대신 그 방향을 잃는 퍼즐.',
      description: '『KeyHero』는 ‘방향키’를 중심으로 전개되는 퍼즐 게임입니다. 플레이어는 상하좌우로 주인공을 움직이고, 벽에 닿으면 막히게 됩니다. 하지만 동시에 방향키는 단순히 이동만을 위한 것이 아닙니다. 방향키 자체를 스테이지 위에 놓아 임시 다리로 만들면, 원래는 건널 수 없던 지형을 넘을 수 있습니다. 다만 방향키 하나를 내려놓을 때마다 그 방향으로 움직일 수 있는 능력도 함께 잃게 됩니다. 즉, 다리를 놓는다는 것은 길을 얻는 일이면서 동시에 자신의 행동 방식을 줄여 나가는 일이기도 합니다.',
      details: ['『KeyHero』가 실험하고 싶은 것은 아주 단순하지만, 정작 퍼즐의 핵심으로 진지하게 다뤄진 적은 드문 질문입니다. 플레이어가 이미 방향키를 그저 ‘이동 도구’로 여기고 있을 때, 그 키 자체를 사고하고, 선택하고, 재구성해야 하는 대상으로 바꿀 수 있을까? 대부분의 게임에서 방향 입력은 가장 기초적이고 투명한 요소입니다. 플레이어는 그것에 의존하지만, 그 존재를 거의 의식하지 않습니다. 『KeyHero』는 바로 그 ‘당연함’을 뒤집고자 합니다. 방향키를 당연한 조작 방식이 아니라, 한정된 자원이며, 공간 도구이자, 하나의 퍼즐로 바꾸는 것입니다. 플레이어는 더 이상 단순히 ‘방향키로 퍼즐을 푸는’ 것이 아니라, 어떤 방향 자체가 소모되고, 배치되고, 잠시 잃어버릴 수 있다면 이동이라는 행위는 어떻게 달라지는지, 그리고 퍼즐은 어떤 모습이 되는지를 생각하게 됩니다.'],
    },
  },
  'fight-with-keys': {
    ja: {
      title: 'Fight With Keys',
      tagline: '右手の移動と左手のタイピングを分けるアクションゲーム。',
      description: '『Fight With Keys』は、タイピング入力とアクションの立ち回りを組み合わせたゲームです。プレイヤーは右手で方向キーを操作してキャラクターを動かし、敵を避けながら、左手で対応するキーを入力して迫ってくる敵を素早く倒します。敵が攻撃範囲に入ると頭上に対応する文字が表示され、プレイヤーは動き続け、状況を見ながら入力もこなさなければ、テンポを維持して戦場を片づけることができません。',
      details: ['『Fight With Keys』が試しているのは、左右の手がもはや一つの単純な仕事を共有するのではなく、それぞれが複雑な役割を担うとき、それでもプレイヤーはこの分裂した操作を受け入れ、そこに楽しさを見いだせるのかということです。多くのキーボードゲームでは、左右の手の役割分担は比較的固定されており、一方の手が移動を、もう一方が少数の機能キーを担当します。私たちが確かめたいのは、単に操作が難しくなるかどうかではなく、人の注意が左右二つの系統へ強制的に引き裂かれたとき、ゲームに新しい緊張感、新しいリズム感、そして左右互搏に近い独特の楽しさが生まれるかどうかです。'],
    },
    ko: {
      title: 'Fight With Keys',
      tagline: '오른손 이동과 왼손 타이핑을 분리한 액션 게임.',
      description: '『Fight With Keys』는 타이핑 입력과 액션 이동을 결합한 게임입니다. 플레이어는 오른손으로 방향키를 조작해 캐릭터를 움직이고 적을 피하는 동시에, 왼손으로 대응하는 키를 입력해 다가오는 적을 빠르게 처치합니다. 적이 공격 범위 안으로 들어오면 머리 위에 해당 문자가 표시되고, 플레이어는 계속 움직이고 상황을 살피면서 동시에 입력까지 해내야만 리듬을 유지하고 전장을 비울 수 있습니다.',
      details: ['『Fight With Keys』가 실험하는 것은, 왼손과 오른손이 더 이상 하나의 단순한 일을 함께 처리하는 것이 아니라 각자 복잡한 역할을 떠맡게 될 때, 플레이어가 이런 분열형 조작을 받아들이고 그 안에서 즐거움을 느낄 수 있는가 하는 점입니다. 대부분의 키보드 게임에서는 양손의 역할 분담이 비교적 고정되어 있습니다. 한 손은 이동을, 다른 한 손은 소수의 기능키를 맡기 때문에 부담도 대칭적이지 않습니다. 우리가 확인하고 싶은 것은 단순히 조작이 더 어려워지는가가 아니라, 사람의 주의가 좌우 두 체계로 강제로 나뉠 때 게임이 새로운 긴장감, 새로운 리듬감, 그리고 좌우가 따로 싸우는 듯한 독특한 즐거움을 만들어 낼 수 있는가입니다.'],
    },
  },
};

const GAMES: GameItem[] = [
  {
    id: 'long-wait',
    number: '01',
    title: 'Long Wait',
    titleZh: '久等了',
    tagline: 'A story across the blurred, luminous year of 2008.',
    taglineZh: '穿行于现实与梦境交叠的两条时间线。',
    description: 'Memory always carries people back to that blurred yet luminous year 2008. In the crack where reality and dreams overlap, you will pass between two intertwined timelines and face again a story about love, regret, and remorse.',
    descriptionZh: '记忆总会把人带回那个模糊又明亮的 2008 年。在现实与梦境交叠的裂缝中，你将穿行于两条交错的时间线之间，重新面对一段关于爱、遗憾与悔恨的往事。',
    details: [
      'Later, I finally understood: time is not passing. Time is—some things will never return.',
      'It is the summer of childhood, the fan blowing over homework pages, and a song on TV no one remembers anymore. It is someone standing on the platform, waving once, while you did not know that was the last time you would meet.',
      'Parents begin to grow old, friends slowly scatter, and even the person in the mirror grows more and more unfamiliar. But time never speaks. It only quietly turns children into adults, ideals into memories, and “someday” into “if only then.”',
    ],
    detailsZh: [
      '后来我终于明白，\n时间不是流逝。',
      '时间是——\n有些东西\n再也不会回来。',
      '是小时候的夏天，\n风扇吹着作业本，\n电视里播着已经没人记得的歌。',
      '是某个人站在站台，\n挥了挥手，\n你却不知道\n那就是最后一面。',
      '年轻时总觉得\n未来很慢。',
      '后来才发现，\n一年快得\n像翻过一张纸。',
      '父母开始变老，\n朋友渐渐失散，\n连镜子里的自己\n也越来越陌生。',
      '可时间从不说话。',
      '它只是安静地\n把少年变成大人，\n把理想变成回忆，\n把“总有一天”\n变成“如果当时”。',
      '直到某个深夜，\n你忽然停下来，\n听见风穿过城市。',
      '听见那些\n已经过去很多年的人和事，\n隔着漫长岁月，\n轻轻对你说：',
      '——久等了。',
    ],
    genre: ['Memory', 'TRPG'],
    platforms: ['Steam', 'Nintendo Switch'],
    releaseYear: 'TBA',
    status: 'IN_DEVELOPMENT',
    coverImage: '/IMG/jiudengle.jpg',
    bannerImage: '/IMG/jiudengle.jpg',
    screenshots: [],
    locales: GAME_LOCALES['long-wait'],
    links: [],
  },
  {
    id: 'invisible-room',
    number: '02',
    title: 'Invisible Room',
    titleZh: '看不见的房间',
    tagline: 'A sound-led puzzle game with printable documents.',
    taglineZh: '通过声音与纸面资料拼出空间、判断危险。',
    description: 'In Invisible Room, the player becomes a member of the Paranormal Office, guiding an investigator who lost their sight and is trapped during a mission through a single communication line. With no visuals, the player relies on ambient sound, dialogue, and subtle audio cues to reconstruct space and move toward the truth.',
    descriptionZh: '《看不见的房间》里玩家将作为“怪谈办”的成员，通过一条唯一的通讯链路，引导一名在任务中失明并被困的探员逃离险境。没有画面，没有直接观察环境的能力，玩家只能依靠环境音、角色对话与细微的声音线索，在脑中拼出空间、判断危险、整理信息，并一步步接近真相。',
    details: [
      'Invisible Room experiments with a puzzle-solving structure led by sound and assisted by paper documents. Printable files are not just narrative extras: they work alongside audio clues as puzzle-solving tools.',
      'The experiment asks whether sound alone can support spatial cognition and logical reasoning, and whether physical paper media can truly become part of game mechanics.',
    ],
    detailsZh: [
      '《看不见的房间》所尝试的，是一种以声音为主导、以纸面资料为辅助的解谜方式。我们希望把玩家对世界的理解，尽量从“看见什么”转移到“听见什么、记录什么、推断出什么”上。与此同时，游戏附带的可打印文件也不只是叙事补充，而是与音频线索并行运作的解谜工具。这项实验的重点不在于“去掉画面”本身，而在于验证：声音是否足以支撑完整的空间认知与逻辑推理，现实中的纸面媒介是否能真正进入游戏机制。',
    ],
    genre: ['Sound', 'Puzzle', 'Print'],
    platforms: ['Steam'],
    releaseYear: '2025',
    status: 'RELEASED',
    coverImage: '/IMG/invisible-room-kv.png',
    bannerImage: '/IMG/invisible-room-kv.png',
    screenshots: [],
    awardOrganizer: 'BOOOM 暴造 游戏孵化组委会',
    awards: ['恁牛全场奖', '拍手叫好玩法奖', '最不想让它咕咕奖'],
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
    description: 'KeyHero is a puzzle game built around the arrow keys. Players can place arrow keys into a level as temporary bridges, but every key placed also removes the ability to move in that direction.',
    descriptionZh: '《KeyHero》是一款围绕“方向键”展开的解谜游戏。方向键不仅用于移动，也可以被放置到关卡中，临时搭成可通行的桥梁；但每放下一枚方向键，玩家就会同时失去对应方向的移动能力。搭桥不只是获得一条路，也是在主动削减自己的行动方式。',
    details: [
      'KeyHero turns a default control scheme into a limited resource, a spatial tool, and a puzzle in its own right. Players are no longer simply using arrow keys to solve puzzles: they consider what happens when a direction can be spent, placed, or temporarily lost.',
    ],
    detailsZh: [
      '《KeyHero》想实验的是一件很简单、但很少有人认真拿来做谜题的事：当玩家已经默认方向键只是“移动工具”时，能不能让它本身也变成需要思考、取舍和重组的对象。在大多数游戏里，方向输入几乎是最基础、最透明的部分。玩家依赖它，却很少意识到它的存在。而《KeyHero》希望把这种“默认”翻出来：把方向键从一个理所当然的操作方式，变成一种有限资源、一种空间工具，也是一道谜题。玩家不再只是“用方向键解谜”，而是要去思考：如果某个方向本身可以被消耗、被放置、被暂时失去，那移动这件事还成立吗？谜题又会变成什么样子？',
    ],
    genre: ['Box-Pushing', 'Puzzle', 'Arrow Keys'],
    platforms: ['Steam'],
    releaseYear: '2021',
    status: 'RELEASED',
    coverImage: '/IMG/KeyHero.png',
    bannerImage: '/IMG/KeyHero.png',
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
    description: 'Fight With Keys combines typing input with action movement. The right hand moves the character and dodges enemies with the arrow keys, while the left hand types matching characters to eliminate targets.',
    descriptionZh: '《Fight With Keys》是一款将打字输入与动作走位结合在一起的游戏。玩家使用右手控制方向键移动角色、躲避敌人；同时用左手输入键盘上的对应按键，在战斗中快速击杀逼近的目标。敌人进入攻击范围后，头顶会显示对应字符，玩家必须在持续移动、观察局势的同时完成输入，才能维持节奏、清空战场。',
    details: [
      'Fight With Keys asks whether players can enjoy a split mode of control, where each hand takes on a complex task. The goal is not merely difficulty, but a new tension, rhythm, and the peculiar pleasure of two hands working against one another.',
    ],
    detailsZh: [
      '《Fight With Keys》想实验的是：当左右手不再共同服务于一件简单的事，而是各自承担一套复杂任务时，玩家是否还能接受这种分裂式操作，并从中获得乐趣。在大多数键盘游戏里，左右手的分工通常比较稳定：一只手负责移动，另一只手负责少量功能键，负担并不对等。我们想测试的，不只是“操作会不会更难”，而是当人的注意力被强行拆成左右两套系统时，游戏会不会产生一种新的紧张感、新的节奏感，以及一种接近左右互搏的独特乐趣。',
    ],
    genre: ['Typing', 'Action', 'Dual-Handed'],
    platforms: ['Steam'],
    releaseYear: '2023',
    status: 'RELEASED',
    coverImage: '/IMG/FightWithKeys.png',
    bannerImage: '/IMG/FightWithKeys.png',
    screenshots: [],
    locales: GAME_LOCALES['fight-with-keys'],
    links: [{ id: 'steam', label: 'Steam', url: 'https://store.steampowered.com/app/2309550/Fight_With_Keys/', type: 'store', primary: true }],
  },
];

export const DEFAULT_GAMES = GAMES.sort((a, b) => {
  const releaseValue = (year: string) => (year === 'TBA' ? Number.POSITIVE_INFINITY : Number.parseInt(year, 10));
  return releaseValue(b.releaseYear) - releaseValue(a.releaseYear);
}).map((game, index) => ({ ...game, number: String(index + 1).padStart(2, '0') }));
