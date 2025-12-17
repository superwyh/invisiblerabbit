import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, Cloud, Sparkles, MapPin, Feather, Compass, Globe } from 'lucide-react';
import Background from './components/Background';
import GameCard from './components/GameCard';
import BlogOverlay from './components/BlogOverlay';
import Marquee from './components/Marquee';
import { SakuraField, ShootingStars, Sparkle, CloudDecoration, MagicCircle } from './components/VisualEffects';
import { BLOG_POSTS } from './data/blogs';
import { Game, BlogPost, Language } from './types';
import { LanguageProvider, useLanguage } from './components/LanguageContext';

// Game Data Dictionary
const gamesData: Record<Language, Game[]> = {
  zh: [
    {
      id: '1',
      title: '看不见的房间',
      subtitle: 'Invisible Room',
      description: '闭上眼睛，让听觉在迷宫中指引你。没有画面，只有纯粹的想象力。配合实体线索，寻找逃离的声音出口。',
      imageUrl: '/img/看不见的房间.jpg', 
      websiteLink: '/room',
      steamLink: '#steam-invisible',
      type: 'audio',
      releaseYear: '2026'
    },
    {
      id: '2',
      title: '久等了',
      subtitle: 'I Kept you waiting',
      description: '文字CRPG游戏，这是一封写给你的信，当你开始阅读时，游戏就已经入侵了你的生活。',
      imageUrl: '/img/久等了.jpg', 
      websiteLink: '/waiting',
      steamLink: '#',
      isSteamPending: true,
      type: 'meta',
      releaseYear: '2026'
    }
  ],
  en: [
    {
      id: '1',
      title: 'Invisible Room',
      subtitle: 'Invisible Room',
      description: 'Close your eyes. Let sound guide you through the maze. No visuals, just pure imagination. Combined with physical Braille clues, find the sonic exit.',
      imageUrl: '/img/看不见的房间.jpg', 
      websiteLink: '/room',
      steamLink: '#steam-invisible',
      type: 'audio',
      releaseYear: '2026'
    },
    {
      id: '2',
      title: 'I Kept you waiting',
      subtitle: 'I Kept you waiting',
      description: 'A META narrative adventure breaking screen boundaries. This is a letter to you. Once you start reading, the game has already invaded your desktop.',
      imageUrl: '/img/久等了.jpg', 
      websiteLink: '/waiting',
      steamLink: '#',
      isSteamPending: true,
      type: 'meta',
      releaseYear: '2026'
    }
  ],
  ja: [
    {
      id: '1',
      title: 'Invisible Room',
      subtitle: '見えない部屋',
      description: '目を閉じて。迷宮の中で音に導かれよう。映像はない、あるのは純粋な想像力だけ。実物の点字の手がかりと組み合わせて、音の出口を探し出せ。',
      imageUrl: '/img/看不见的房间.jpg', 
      websiteLink: '/room',
      steamLink: '#steam-invisible',
      type: 'audio',
      releaseYear: '2026'
    },
    {
      id: '2',
      title: 'I Kept you waiting',
      subtitle: 'お待たせしました',
      description: '画面の境界を破るメタ・ナラティブ・アドベンチャー。これはあなたへの手紙。読み始めた瞬間、ゲームはすでにあなたのデスクトップを侵食している。',
      imageUrl: '/img/久等了.jpg', 
      websiteLink: '/waiting',
      steamLink: '#',
      isSteamPending: true,
      type: 'meta',
      releaseYear: '2026'
    }
  ]
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const MainApp = () => {
  const { scrollYProgress } = useScroll();
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const { language, setLanguage, t } = useLanguage();

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const cloudY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  
  // Get current content
  const currentGames = gamesData[language];
  const currentBlogs = BLOG_POSTS[language];

  return (
    <div className="min-h-screen font-sans selection:bg-rabbit-sky selection:text-white relative text-rabbit-text">
      <div className="bg-noise" />
      <Background />
      <SakuraField />
      <ShootingStars />
      
      <AnimatePresence>
        {selectedPost && (
          <BlogOverlay post={selectedPost} onClose={() => setSelectedPost(null)} />
        )}
      </AnimatePresence>

      {/* Navigation - Glass & Floating */}
      <nav className="fixed top-6 left-0 right-0 z-40 flex justify-center px-4 pointer-events-none">
        <motion.div 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="glass-card rounded-full pl-6 pr-2 py-3 md:px-8 md:py-4 flex items-center shadow-lg shadow-blue-100/20 pointer-events-auto"
        >
            <a href="#" className="flex items-center justify-center text-rabbit-text hover:text-rabbit-accent transition-colors mr-4 md:mr-8">
               <img src="/img/logo.png" alt="Invisible Rabbit" className="h-5 w-auto" />
            </a>
            
            <div className="h-4 w-[1px] bg-gray-300 hidden md:block"></div>

            <div className="hidden md:flex gap-8 text-sm font-serif font-medium text-gray-600 px-8">
                <a href="#works" className="hover:text-rabbit-accent transition-colors relative group">
                    {t('nav.works')}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-rabbit-accent transition-all group-hover:w-full"></span>
                </a>
                <a href="#journal" className="hover:text-rabbit-accent transition-colors relative group">
                    {t('nav.journal')}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-rabbit-accent transition-all group-hover:w-full"></span>
                </a>
                <a href="#contact" className="hover:text-rabbit-accent transition-colors relative group">
                    {t('nav.contact')}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-rabbit-accent transition-all group-hover:w-full"></span>
                </a>
            </div>

            {/* Divider between Nav and Language - Darker Color for Visibility */}
            <div className="h-6 w-[1px] bg-gray-400/50 mx-2 hidden md:block"></div>

            {/* Language Switcher */}
            <div className="flex items-center ml-2 bg-white/50 rounded-full p-1 border border-white/40">
                {(['zh', 'en', 'ja'] as Language[]).map((lang) => (
                    <button
                        key={lang}
                        onClick={() => setLanguage(lang)}
                        className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase transition-all ${
                            language === lang 
                            ? 'bg-rabbit-accent text-white shadow-sm' 
                            : 'text-gray-400 hover:text-rabbit-accent'
                        }`}
                    >
                        {lang.toUpperCase()}
                    </button>
                ))}
            </div>
        </motion.div>
      </nav>

      <main>
        
        {/* HERO SECTION - RICHLY DECORATED */}
        <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden px-4">
            
            {/* Background Decorative Layers */}
            <MagicCircle className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" />
            
            {/* Clouds Layer - z-index managed in App container, but ensure it floats correctly */}
            <motion.div style={{ y: cloudY }} className="absolute inset-0 pointer-events-none z-10">
                <CloudDecoration className="top-[10%] left-[5%] opacity-60 scale-150" delay={0} />
                <CloudDecoration className="top-[40%] left-[-10%] opacity-40 scale-100" delay={5} />
                <CloudDecoration className="bottom-[10%] right-[5%] opacity-50 scale-125" delay={2} />
            </motion.div>

            <Sparkle style={{ top: '25%', right: '25%' }} delay={1} />
            <Sparkle style={{ bottom: '35%', left: '20%' }} delay={3} />
            <Sparkle style={{ top: '15%', left: '40%' }} delay={0.5} />

            <motion.div style={{ y: heroY }} className="relative z-20 w-full max-w-7xl flex flex-col items-center text-center">
                
                {/* Decorative Top Tags */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex items-center gap-6 text-xs font-serif italic text-gray-500 mb-12"
                >
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-white/50 backdrop-blur">
                         <Compass size={12} className="text-rabbit-accent animate-spin-slow" />
                         <span>{t('hero.lat')}</span>
                    </div>
                    
                    <span className="h-[1px] w-12 bg-gray-300"></span>

                    <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-white/50 backdrop-blur">
                        <MapPin size={12} className="text-rabbit-sunset" /> 
                        <span>{t('hero.location')}</span>
                    </div>
                </motion.div>

                {/* MASSIVE BRAND NAME - WITH FLOATING ELEMENTS */}
                <div className="relative py-10">
                    {/* Floating decorators behind text */}
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} className="absolute top-0 right-10 text-rabbit-lavender opacity-60">
                        <Star size={32} />
                    </motion.div>
                     <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-0 left-10 text-rabbit-sky opacity-60">
                        <Feather size={32} />
                    </motion.div>

                    <div className="flex flex-col items-center">
                        <motion.h1 
                            initial={{ y: 50, opacity: 0, filter: "blur(10px)" }}
                            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className="text-[13vw] md:text-[12vw] font-serif leading-[0.85] text-transparent bg-clip-text bg-gradient-to-br from-rabbit-text via-rabbit-text to-rabbit-accent/80 drop-shadow-lg select-none relative z-10"
                        >
                            INVISIBLE
                        </motion.h1>

                        <div className="relative my-[-1.5vw] z-20 flex items-center justify-center w-full">
                            {/* Decorative Lines */}
                            <motion.div initial={{ width: 0 }} animate={{ width: "30vw" }} transition={{ delay: 1, duration: 1.5 }} className="h-[1px] bg-gradient-to-r from-transparent via-rabbit-accent/50 to-transparent" />
                            
                            {/* Center Piece */}
                             <motion.div
                                initial={{ scale: 0, opacity: 0, rotate: -45 }}
                                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                                transition={{ delay: 0.8, duration: 1, type: "spring" }}
                                className="mx-6 bg-white/90 backdrop-blur-xl shadow-[0_0_30px_rgba(196,181,253,0.3)] p-6 rounded-[2rem] border border-white relative"
                             >
                                 <div className="absolute inset-0 rounded-[2rem] border border-rabbit-accent/20 animate-pulse"></div>
                                 <img src="/img/logo.png" alt="Invisible Rabbit" className="h-14 w-auto relative z-10" />
                             </motion.div>
                             
                             <motion.div initial={{ width: 0 }} animate={{ width: "30vw" }} transition={{ delay: 1, duration: 1.5 }} className="h-[1px] bg-gradient-to-r from-transparent via-rabbit-accent/50 to-transparent" />
                        </div>
                        
                        <motion.h1 
                            initial={{ y: -50, opacity: 0, filter: "blur(10px)" }}
                            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                            className="text-[13vw] md:text-[12vw] font-serif leading-[0.85] text-transparent bg-clip-text bg-gradient-to-br from-rabbit-text via-rabbit-text to-rabbit-accent/80 drop-shadow-lg select-none relative z-10"
                        >
                            RABBIT
                        </motion.h1>
                    </div>
                </div>
                
                {/* Slogan with Decoration */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="mt-16 relative group cursor-default"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-rabbit-lavender/30 to-rabbit-sky/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="glass-card px-10 py-4 rounded-full flex items-center gap-6 relative z-10 border-white/60">
                        <Sparkles size={16} className="text-rabbit-sunset animate-pulse" />
                        <div className="flex flex-col items-center">
                            <span className="font-serif italic text-2xl text-gray-700">{t('hero.slogan')}</span>
                            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-gray-400 mt-1">{t('hero.subSlogan')}</span>
                        </div>
                        <Sparkles size={16} className="text-rabbit-sunset animate-pulse" />
                    </div>
                </motion.div>

            </motion.div>
            
             {/* Gentle Scroll Indicator */}
             <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 flex flex-col items-center gap-3 text-rabbit-accent/40"
            >
                <div className="text-[10px] font-mono tracking-widest uppercase">{t('hero.scroll')}</div>
                <div className="w-[1px] h-16 bg-gradient-to-b from-rabbit-accent/20 to-rabbit-accent overflow-hidden relative">
                    <motion.div 
                        animate={{ y: [-64, 64] }} 
                        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                        className="absolute w-full h-1/2 bg-rabbit-accent" 
                    />
                </div>
            </motion.div>

        </section>

        {/* GAMES SECTION */}
        <section id="works" className="py-40 px-6 md:px-12 relative">
            <MagicCircle className="top-0 right-[-10%] opacity-5 w-[50vw] h-[50vw]" />
            
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col items-center text-center mb-32">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 mb-6"
                    >
                        <div className="h-[1px] w-12 bg-gray-300"></div>
                        <span className="font-serif italic text-gray-400 text-lg">{t('games.featured')}</span>
                        <div className="h-[1px] w-12 bg-gray-300"></div>
                    </motion.div>
                    
                    <h2 className="text-5xl md:text-6xl font-serif text-rabbit-text mb-6">{t('games.sectionTitle')}</h2>
                    <p className="text-gray-400 font-sans max-w-lg leading-relaxed">
                        {t('games.sectionSubtitle')}<br/>
                        <span className="text-xs font-mono uppercase tracking-widest text-rabbit-accent/60 mt-2 block">{t('games.sectionTag')}</span>
                    </p>
                </div>

                <motion.div 
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-12"
                >
                    {currentGames.map((game, index) => (
                        <GameCard key={game.id} game={game} index={index} />
                    ))}

                    {/* Placeholder Card - Artistic Style */}
                    <motion.div
                         variants={{
                             hidden: { opacity: 0, y: 30 },
                             show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
                         }}
                         className="flex flex-col h-full group cursor-pointer relative"
                    >
                         <div className="relative aspect-[4/5] bg-white/40 rounded-3xl border border-dashed border-rabbit-lavender flex flex-col items-center justify-center gap-4 mb-6 group-hover:border-rabbit-accent/50 group-hover:bg-white/80 transition-all duration-500 overflow-hidden shadow-sm">
                             <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                             
                             {/* Decorative rotating background for placeholder */}
                             <div className="absolute inset-0 flex items-center justify-center opacity-10">
                                 <div className="w-32 h-32 border border-gray-400 rounded-full animate-spin-slow"></div>
                             </div>

                             <div className="p-6 bg-white rounded-full shadow-lg shadow-purple-100 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 relative z-10">
                                <Cloud size={32} className="text-rabbit-lavender" />
                             </div>
                             <span className="font-serif italic text-gray-400 relative z-10">{t('games.dreaming')}</span>
                         </div>
                         <div className="text-center px-4">
                             <h3 className="text-xl font-serif text-gray-500 group-hover:text-rabbit-accent transition-colors">{t('games.project03')}</h3>
                             <p className="text-xs font-sans text-gray-300 mt-2 uppercase tracking-widest">{t('games.coming2027')}</p>
                         </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>

        <Marquee text={t('marquee')} speed={40} className="bg-gradient-to-r from-blue-50/50 via-white to-blue-50/50 text-rabbit-text/20 py-16 backdrop-blur-sm" />

        {/* JOURNAL / BLOG */}
        <section id="journal" className="py-40 px-6 md:px-12 relative overflow-hidden">
             {/* Side Decoration */}
             <div className="absolute left-0 top-1/4 w-32 h-full border-r border-gray-100 opacity-50 hidden md:block"></div>
             
             <div className="max-w-5xl mx-auto relative z-10">
                 <div className="flex items-end justify-between mb-20 px-4">
                     <div>
                         <span className="text-xs font-bold text-rabbit-sunset uppercase tracking-wider mb-2 block">{t('journal.devlog')}</span>
                         <h2 className="text-4xl font-serif text-rabbit-text mb-2">{t('journal.sectionTitle')}</h2>
                     </div>
                     <CloudDecoration className="text-blue-100/50 -translate-y-10 scale-150" />
                 </div>

                 <div className="grid gap-8">
                     {currentBlogs.map((post, i) => (
                         <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            key={post.id}
                            onClick={() => setSelectedPost(post)} 
                            className="group cursor-pointer glass-card p-10 rounded-3xl hover:bg-white hover:shadow-2xl hover:shadow-blue-100/40 transition-all duration-500 flex flex-col md:flex-row gap-8 items-start md:items-center border-transparent hover:border-rabbit-lavender/30 relative overflow-hidden"
                         >
                             {/* Hover Shine Effect */}
                             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none"></div>

                             <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-white shadow-sm flex-shrink-0 flex items-center justify-center text-rabbit-accent group-hover:scale-110 transition-transform duration-500">
                                 <span className="font-serif italic text-2xl text-rabbit-text/80">0{i+1}</span>
                             </div>
                             
                             <div className="flex-1 z-10">
                                 <div className="flex items-center gap-3 mb-3">
                                     <span className="px-2 py-0.5 rounded-md bg-rabbit-sunset/10 text-[10px] font-bold text-rabbit-sunset uppercase tracking-wider">{post.tags[0]}</span>
                                     <span className="text-xs text-gray-300">•</span>
                                     <span className="text-xs font-sans text-gray-400">{post.date}</span>
                                 </div>
                                 <h3 className="text-2xl md:text-3xl font-serif text-rabbit-text group-hover:text-rabbit-accent transition-colors mb-4">
                                    {post.title}
                                 </h3>
                                 <p className="text-gray-500 font-sans leading-relaxed line-clamp-2">
                                    {post.excerpt}
                                 </p>
                             </div>
                             
                             <div className="w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-300 group-hover:bg-rabbit-accent group-hover:text-white group-hover:shadow-lg transition-all z-10">
                                 <ArrowRight size={18} />
                             </div>
                         </motion.div>
                     ))}
                 </div>
             </div>
        </section>

        {/* FOOTER - SUNSET GRADIENT */}
        <footer id="contact" className="py-32 px-6 bg-gradient-to-b from-white to-[#edf2f7] text-center relative overflow-hidden">
            {/* Background Footer Decor */}
            <MagicCircle className="bottom-[-20%] left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] opacity-[0.03]" />

            <div className="max-w-2xl mx-auto flex flex-col items-center gap-10 relative z-10">
                <motion.div 
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    className="p-5 bg-white shadow-xl shadow-blue-100 rounded-[2rem] border border-white"
                >
                    <img src="/img/logo.png" alt="Invisible Rabbit" className="h-10 w-auto" />
                </motion.div>
                
                <h2 className="text-4xl md:text-6xl font-serif italic text-rabbit-text leading-tight">
                    {t('footer.slogan')}
                </h2>

                <div className="mt-20 flex flex-col gap-3 text-xs font-sans text-gray-400 tracking-wide">
                    <span className="flex items-center justify-center gap-2">
                        <Star size={10} className="text-rabbit-sunset" /> 
                        Shijiazhuang &bull; Indie Game Studio
                        <Star size={10} className="text-rabbit-sunset" />
                    </span>
                    <span className="opacity-60">&copy; 2026 INVISIBLE RABBIT. {t('footer.rights')}</span>
                </div>
            </div>
            
            {/* Soft decorative footer text */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden opacity-[0.02] pointer-events-none select-none">
                <h1 className="text-[25vw] leading-[0.5] font-serif text-center text-rabbit-text mix-blend-overlay">RABBIT</h1>
            </div>
        </footer>

      </main>
    </div>
  );
}

function App() {
    return (
        <LanguageProvider>
            <MainApp />
        </LanguageProvider>
    );
}

export default App;