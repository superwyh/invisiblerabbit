const { createApp } = Vue;

createApp({
    data() {
        return {
            searchQuery: '',
            selectedResult: null,
            showModal: false,
            modalMessage: '',
            results: [
                {
                    id: 'studio',
                    name: 'Invisible Rabbit',
                    type: '工作室',
                    content: `
                        <p class="about-text">
                            由 <span class="highlight">Superwyh</span> 创建，致力于打造与众不同的游戏体验，专注于探索那些大公司往往不愿涉足的游戏类型和创意核心玩法。已上 Steam 的游戏有 <span class="highlight">看不见的房间</span>，开发中的游戏有 <span class="highlight">久等了</span>。
                        </p>
                    `,
                    keywords: ['invisible rabbit', 'invisible', 'rabbit', '工作室', '工作室介绍', '关于我们']
                },
                {
                    id: 'superwyh',
                    name: 'Superwyh',
                    type: '外部链接',
                    externalUrl: 'https://www.superwyh.com/',
                    keywords: ['superwyh']
                },
                {
                    id: 'invisible-room',
                    name: '看不见的房间',
                    type: '游戏',
                    enName: 'Invisible Room',
                    banner: 'images/banner.jpg',
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
                    steamUrl: 'https://store.steampowered.com/app/3533210/',
                    keywords: ['看不见的房间', 'invisible room', '怪谈办']
                },
                {
                    id: 'guaitanban',
                    name: '怪谈办',
                    type: '警告',
                    showModal: true,
                    modalMessage: '作为普通人，你无权窥探这一切，为了你的安全，请不要继续调查了 ……',
                    keywords: ['怪谈办']
                },
                {
                    id: 'waiting',
                    name: '久等了',
                    type: '游戏',
                    content: `
                        <p class="about-text">正在施工中。</p>
                    `,
                    keywords: ['久等了']
                }
            ]
        };
    },
    methods: {
        handleSearch() {
            // 输入时不显示结果，只清空已选择的结果
            this.selectedResult = null;
        },
        selectFirstResult() {
            const query = this.searchQuery.trim();
            if (!query) {
                this.selectedResult = null;
                return;
            }
            
            // 精确匹配：搜索词必须完全匹配某个关键词
            const queryLower = query.toLowerCase();
            // 优先匹配showModal为true的结果
            let matchedResult = this.results.find(result => {
                return result.showModal && result.keywords.some(keyword => 
                    keyword.toLowerCase() === queryLower
                );
            });
            // 如果没有找到showModal的结果，再查找其他结果
            if (!matchedResult) {
                matchedResult = this.results.find(result => {
                    return result.keywords.some(keyword => 
                        keyword.toLowerCase() === queryLower
                    );
                });
            }
            
            if (matchedResult) {
                // 如果需要显示modal
                if (matchedResult.showModal) {
                    this.modalMessage = matchedResult.modalMessage;
                    this.showModal = true;
                    this.searchQuery = '';
                    this.selectedResult = null;
                }
                // 如果是Superwyh，打开外部链接
                else if (matchedResult.externalUrl) {
                    window.open(matchedResult.externalUrl, '_blank');
                    this.searchQuery = '';
                    this.selectedResult = null;
                } else {
                    this.selectResult(matchedResult);
                }
            } else {
                this.selectedResult = null;
            }
        },
        closeModal() {
            this.showModal = false;
            this.modalMessage = '';
        },
        selectResult(result) {
            this.selectedResult = result;
            this.searchQuery = '';
        }
    }
}).mount('#app');