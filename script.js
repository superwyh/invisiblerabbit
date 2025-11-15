const { createApp } = Vue;

// 多语言数据
const i18n = {
    zh: {
        studio: {
            name: 'Invisible Rabbit',
            type: '工作室',
            content: `
                <p class="about-text">
                    由 <span class="highlight">Superwyh</span> 创建，致力于打造与众不同的游戏体验，专注于探索那些大公司往往不愿涉足的游戏类型和创意核心玩法。已上 Steam 的游戏有 <span class="highlight">看不见的房间</span>，开发中的游戏有 <span class="highlight">久等了</span>。
                </p>
            `
        },
        'invisible-room': {
            name: '看不见的房间',
            enName: 'Invisible Room',
            description: `
                <h3>🕳️ 游戏简介</h3>
                <p>看不见的房间是一款纯粹的音频解谜游戏，玩家需要完全依靠声音来探索、推理，并揭开隐藏的真相。与传统依赖视觉的游戏不同，本作彻底剥离了画面元素，挑战你的听觉感知与逻辑思维，让你在一个"看不见"的世界中寻找前进的方向。</p>
                <p>你将通过环境音、角色对话以及各种细微的声音线索，在脑海中一步步构筑出这间不可见的房间，并借此解开背后的谜团。除此之外，游戏还融合了独特的实体解谜元素——你需要打印并使用游戏内附带的 PDF 文件，这些线索材料将成为你破解谜题不可或缺的工具，带来独一无二的沉浸式体验。</p>

                <h3>📖 剧情介绍</h3>
                <p>你是<span class="highlight">怪谈办</span>组织中的一名成员。某天，一位外出执行任务的探员在一场突发事件中双目失明，被困在一处神秘的建筑内。通讯设备是你们之间唯一的纽带，而你必须通过她传来的零碎声音与对话，引导她在完全黑暗的环境中生存与脱困。</p>
                <p>随着调查的深入，你将逐渐发现这间"房间"绝非普通之地……</p>
            `,
            awards: [
                {
                    organizer: '「机核网」BOOOM暴造',
                    event: '「摊开玩」独立游戏市集（BOOOM IndieFair）',
                    items: ['🏆 恁牛全场奖', '最不想让它咕咕奖', '拍手叫好玩法奖']
                }
            ],
            steamButton: '在 Steam 上获取'
        },
        guaitanban: {
            name: '怪谈办',
            type: '警告',
            modalMessage: '作为普通人，你无权窥探这一切，为了你的安全，请不要继续调查了 ……',
            modalButton: '我知道了'
        },
        waiting: {
            name: '久等了',
            type: '游戏',
            content: `
                <p class="about-text">正在施工中。</p>
            `
        },
        error: {
            notFoundMessage: '对不起，兔子不见了。',
            notFoundButton: '我知道了'
        }
    },
    en: {
        studio: {
            name: 'Invisible Rabbit',
            type: 'Studio',
            content: `
                <p class="about-text">
                    Created by <span class="highlight">Superwyh</span>, dedicated to creating unique gaming experiences, focusing on exploring game types and creative core gameplay that large companies often shy away from. Games released on Steam include <span class="highlight">Invisible Room</span>, and games in development include <span class="highlight">Waiting</span>.
                </p>
            `
        },
        'invisible-room': {
            name: 'Invisible Room',
            enName: 'Invisible Room',
            description: `
                <h3>🕳️ Game Overview</h3>
                <p>Invisible Room is a pure audio puzzle game where players must rely entirely on sound to explore, deduce, and uncover hidden truths. Unlike traditional visually-dependent games, this work completely strips away visual elements, challenging your auditory perception and logical thinking, allowing you to find your way forward in an "invisible" world.</p>
                <p>You will construct this invisible room step by step in your mind through environmental sounds, character dialogues, and various subtle audio clues, and use this to solve the mysteries behind it. In addition, the game incorporates unique physical puzzle elements—you need to print and use the PDF files included with the game. These clue materials will become indispensable tools for solving puzzles, bringing a unique immersive experience.</p>

                <h3>📖 Story</h3>
                <p>You are a member of the <span class="highlight">Strange Tales Bureau</span> organization. One day, an agent on a mission suddenly went blind in an emergency and was trapped in a mysterious building. Communication devices are the only link between you, and you must guide her to survive and escape in a completely dark environment through the fragmented sounds and dialogues she transmits.</p>
                <p>As the investigation deepens, you will gradually discover that this "room" is far from ordinary...</p>
            `,
            awards: [
                {
                    organizer: '「Gcores」BOOOM Creation',
                    event: '「Play It Out」Indie Game Market (BOOOM IndieFair)',
                    items: ['🏆 Best Overall Award', 'Most Unwilling to Let It Flop Award', 'Applause-Worthy Gameplay Award']
                }
            ],
            steamButton: 'Get on Steam'
        },
        guaitanban: {
            name: 'Strange Tales Bureau',
            type: 'Warning',
            modalMessage: 'As an ordinary person, you have no right to pry into all of this. For your safety, please do not continue the investigation...',
            modalButton: 'I Understand'
        },
        waiting: {
            name: 'Waiting',
            type: 'Game',
            content: `
                <p class="about-text">Under construction.</p>
            `
        },
        error: {
            notFoundMessage: 'Sorry, the rabbit is gone.',
            notFoundButton: 'I Understand'
        }
    },
    ja: {
        studio: {
            name: 'Invisible Rabbit',
            type: 'スタジオ',
            content: `
                <p class="about-text">
                    <span class="highlight">Superwyh</span>によって作成され、大企業がしばしば避けるゲームタイプと創造的なコアゲームプレイを探索することに焦点を当て、独特のゲーム体験を作り出すことに専念しています。Steamでリリースされたゲームには<span class="highlight">見えない部屋</span>があり、開発中のゲームには<span class="highlight">お待たせしました</span>があります。
                </p>
            `
        },
        'invisible-room': {
            name: '見えない部屋',
            enName: 'Invisible Room',
            description: `
                <h3>🕳️ ゲーム概要</h3>
                <p>見えない部屋は、プレイヤーが完全に音に頼って探索、推理し、隠された真実を明らかにしなければならない純粋なオーディオパズルゲームです。視覚に依存する従来のゲームとは異なり、この作品は視覚要素を完全に取り除き、聴覚的知覚と論理的思考に挑戦し、「見えない」世界で前進する道を見つけることができます。</p>
                <p>環境音、キャラクターの対話、そして様々な微妙な音の手がかりを通じて、この見えない部屋を頭の中で段階的に構築し、それを使って背後にある謎を解明します。さらに、ゲームには独特の物理パズル要素が組み込まれています—ゲームに付属するPDFファイルを印刷して使用する必要があります。これらの手がかり材料は、パズルを解くために不可欠なツールとなり、独特の没入感のある体験をもたらします。</p>

                <h3>📖 ストーリー</h3>
                <p>あなたは<span class="highlight">怪談局</span>組織の一員です。ある日、任務中のあるエージェントが緊急事態で突然失明し、神秘的な建物に閉じ込められました。通信機器はあなたたちの間の唯一の絆であり、彼女が送ってくる断片的な音と対話を通じて、完全に暗い環境で彼女を生存させ、脱出させなければなりません。</p>
                <p>調査が深まるにつれて、この「部屋」が普通ではないことを徐々に発見するでしょう...</p>
            `,
            awards: [
                {
                    organizer: '「Gcores」BOOOM Creation',
                    event: '「Play It Out」インディーゲームマーケット（BOOOM IndieFair）',
                    items: ['🏆 最高総合賞', '最もフロップさせたくない賞', '拍手に値するゲームプレイ賞']
                }
            ],
            steamButton: 'Steamで入手'
        },
        guaitanban: {
            name: '怪談局',
            type: '警告',
            modalMessage: '普通の人として、あなたにはこれらすべてを覗き見る権利はありません。あなたの安全のために、調査を続けないでください...',
            modalButton: '理解しました'
        },
        waiting: {
            name: 'お待たせしました',
            type: 'ゲーム',
            content: `
                <p class="about-text">工事中です。</p>
            `
        },
        error: {
            notFoundMessage: '申し訳ございませんが、ウサギが見つかりませんでした。',
            notFoundButton: '理解しました'
        }
    }
};

// 检测浏览器语言
function getBrowserLanguage() {
    const lang = navigator.language || navigator.userLanguage;
    if (lang.startsWith('zh')) {
        return 'zh';
    } else if (lang.startsWith('ja')) {
        return 'ja';
  } else {
        return 'en';
    }
}

createApp({
    data() {
        const currentLang = getBrowserLanguage();
        return {
            currentLang: currentLang,
            searchQuery: '',
            selectedResult: null,
            showModal: false,
            modalMessage: '',
            modalButton: '',
            results: [
                {
                    id: 'studio',
                    keywords: {
                        zh: ['invisible rabbit', 'invisible', 'rabbit', '工作室', '工作室介绍', '关于我们'],
                        en: ['invisible rabbit', 'invisible', 'rabbit', 'studio', 'about'],
                        ja: ['invisible rabbit', 'invisible', 'rabbit', 'スタジオ', 'について']
                    }
                },
                {
                    id: 'superwyh',
                    name: 'Superwyh',
                    type: {
                        zh: '外部链接',
                        en: 'External Link',
                        ja: '外部リンク'
                    },
                    externalUrl: 'https://www.superwyh.com/',
                    keywords: {
                        zh: ['superwyh'],
                        en: ['superwyh'],
                        ja: ['superwyh']
                    }
                },
                {
                    id: 'invisible-room',
                    banner: 'images/banner.jpg',
                    steamUrl: 'https://store.steampowered.com/app/3533210/',
                    keywords: {
                        zh: ['看不见的房间', 'invisible room', '怪谈办'],
                        en: ['invisible room', 'invisible'],
                        ja: ['見えない部屋', 'invisible room']
                    }
                },
                {
                    id: 'guaitanban',
                    showModal: true,
                    keywords: {
                        zh: ['怪谈办'],
                        en: ['strange tales bureau', 'guaitanban'],
                        ja: ['怪談局', 'guaitanban']
                    }
                },
                {
                    id: 'waiting',
                    keywords: {
                        zh: ['久等了'],
                        en: ['waiting'],
                        ja: ['お待たせしました', 'waiting']
                    }
                }
            ]
        };
    },
    computed: {
        localizedResults() {
            return this.results.map(result => {
                const langData = i18n[this.currentLang];
                const itemData = langData[result.id];
                
                // 处理关键词：如果是对象，提取当前语言的关键词；如果是数组，直接使用
                let keywords = [];
                if (result.keywords) {
                    if (typeof result.keywords === 'object' && !Array.isArray(result.keywords)) {
                        keywords = result.keywords[this.currentLang] || result.keywords.zh || [];
                    } else if (Array.isArray(result.keywords)) {
                        keywords = result.keywords;
                    }
                }

                if (!itemData) {
                    return {
                        ...result,
                        keywords: keywords
                    };
                }

                const localized = {
                    ...result,
                    name: itemData.name || result.name,
                    type: typeof result.type === 'object' ? result.type[this.currentLang] : (itemData.type || result.type),
                    keywords: keywords,
                    showModal: result.showModal || false,
                    externalUrl: result.externalUrl || null,
                    banner: result.banner || null,
                    steamUrl: result.steamUrl || null
                };

                if (itemData.content) {
                    localized.content = itemData.content;
                }
                if (itemData.description) {
                    localized.description = itemData.description;
                }
                if (itemData.enName) {
                    localized.enName = itemData.enName;
                }
                if (itemData.awards) {
                    localized.awards = itemData.awards;
                }
                if (itemData.modalMessage) {
                    localized.modalMessage = itemData.modalMessage;
                }
                if (itemData.modalButton) {
                    localized.modalButton = itemData.modalButton;
                }
                if (itemData.steamButton) {
                    localized.steamButton = itemData.steamButton;
                }

                return localized;
            });
        }
    },
    methods: {
        handleSearch() {
            this.selectedResult = null;
        },
        selectFirstResult() {
            const query = this.searchQuery.trim();
            if (!query) {
                this.selectedResult = null;
                return;
            }
            
            // 对于中文，直接比较；对于英文，转换为小写比较
            const normalizeKeyword = (keyword) => {
                // 检查是否包含中文字符
                if (/[\u4e00-\u9fa5]/.test(keyword)) {
                    return keyword;
                }
                return keyword.toLowerCase();
            };
            
            const normalizedQuery = normalizeKeyword(query);
            
            let matchedResult = this.localizedResults.find(result => {
                if (!result.keywords || !Array.isArray(result.keywords) || result.keywords.length === 0) {
                    return false;
                }
                return result.showModal && result.keywords.some(keyword => 
                    normalizeKeyword(keyword) === normalizedQuery
                );
            });
            
            if (!matchedResult) {
                matchedResult = this.localizedResults.find(result => {
                    if (!result.keywords || !Array.isArray(result.keywords) || result.keywords.length === 0) {
                        return false;
                    }
                    return result.keywords.some(keyword => 
                        normalizeKeyword(keyword) === normalizedQuery
                    );
                });
            }
            
            if (matchedResult) {
                if (matchedResult.showModal) {
                    this.modalMessage = matchedResult.modalMessage;
                    this.modalButton = matchedResult.modalButton || '我知道了';
                    this.showModal = true;
                    this.searchQuery = '';
                    this.selectedResult = null;
                } else if (matchedResult.externalUrl) {
                    window.open(matchedResult.externalUrl, '_blank');
                    this.searchQuery = '';
                    this.selectedResult = null;
                } else {
                    this.selectResult(matchedResult);
                }
            } else {
                // 没有找到匹配结果，显示错误modal
                const errorData = i18n[this.currentLang].error;
                this.modalMessage = errorData.notFoundMessage;
                this.modalButton = errorData.notFoundButton;
                this.showModal = true;
                this.searchQuery = '';
                this.selectedResult = null;
            }
        },
        closeModal() {
            this.showModal = false;
            this.modalMessage = '';
            this.modalButton = '';
        },
        selectResult(result) {
            this.selectedResult = result;
            this.searchQuery = '';
        }
    }
}).mount('#app');