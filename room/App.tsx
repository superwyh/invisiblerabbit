import React, { useState, useEffect } from 'react';
import { TRANSLATIONS } from './constants';
import { Language } from './types';
import { Button } from './components/Button';
import { SectionHeader } from './components/SectionHeader';
import { Icon } from './components/Icons';
import { AudioVisualizer } from './components/AudioVisualizer';
import { Reveal } from './components/Reveal';
import { GlitchTitle } from './components/GlitchTitle';
import { Marquee } from './components/Marquee';
import { ArrowRight, Volume2, Download, EyeOff, Crosshair, Fingerprint, ScanLine, Rabbit, Globe } from 'lucide-react';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<Language>('zh');

  const content = TRANSLATIONS[lang];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update html lang attribute for accessibility
  useEffect(() => {
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang === 'ja' ? 'ja' : 'en';
  }, [lang]);

  const toggleLang = () => {
    if (lang === 'zh') setLang('en');
    else if (lang === 'en') setLang('ja');
    else setLang('zh');
  };

  return (
    <div className={`min-h-screen bg-neutral-950 text-neutral-100 overflow-x-hidden selection:bg-red-700 selection:text-white relative font-sans ${lang === 'ja' || lang === 'zh' ? '' : 'tracking-wide'}`}>
      
      {/* GLOBAL OVERLAYS */}
      {/* 1. Noise Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 bg-noise mix-blend-overlay opacity-30"></div>
      
      {/* 2. Scanline Animation */}
      <div className="animate-scanline"></div>
      
      {/* 3. Corner Decorations (HUD style - Keep in English/Tech style) */}
      <div className="fixed top-4 left-4 z-40 text-red-800/50 pointer-events-none hidden md:block">
        <Crosshair size={24} />
        <div className="text-[10px] font-mono mt-1">REC • 00:00:00</div>
      </div>
      <div className="fixed bottom-4 right-4 z-40 text-red-800/50 pointer-events-none hidden md:block">
        <div className="text-[10px] font-mono text-right mb-1">SIGNAL_LOST</div>
        <Fingerprint size={24} className="ml-auto" />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-500 border-b ${scrolled ? 'bg-black/95 backdrop-blur-md border-red-900/50 py-3 shadow-[0_5px_30px_rgba(0,0,0,0.8)]' : 'bg-transparent border-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
             {scrolled && <div className="animate-pulse"><AudioVisualizer small /></div>}
             <div className={`font-serif font-bold text-xl tracking-[0.2em] text-white ${lang === 'zh' ? '' : 'text-sm md:text-xl'}`}>
               {content.subtitle}
             </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <button 
              onClick={toggleLang}
              className="flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-white transition-colors border border-gray-800 px-3 py-1 rounded bg-black/50"
            >
              <Globe size={14} />
              <span>{lang.toUpperCase()}</span>
            </button>

            <Button href={content.steamLink} external variant="primary" className="text-xs px-6 py-2 border-l-4 border-l-white hidden md:inline-block">
              {content.ui.steamStore}
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax-like static feel */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/1920/1080?grayscale&blur=2" 
            alt="Atmospheric Background" 
            className="w-full h-full object-cover opacity-20 scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/90 to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_100%)]"></div>
        </div>

        {/* Decorative Lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-red-900/20"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-red-900/20"></div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          
          <Reveal delay={100} className="mb-4">
            <div className="flex items-center justify-center gap-2 text-red-600/80 font-mono text-xs md:text-sm tracking-[0.3em] uppercase">
               <span>///</span>{' '}
               <a href="/" className="hover:underline">
                 {content.studio}
               </a>{' '}
               PRESENTS <span>///</span>
            </div>
          </Reveal>

          <Reveal delay={200} className="mb-8 flex justify-center">
            <AudioVisualizer />
          </Reveal>
          
          <div className="mb-6 relative inline-block">
             <GlitchTitle text={content.title} className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white drop-shadow-[0_0_25px_rgba(220,38,38,0.5)]" />
             <div className="absolute -right-4 -top-4 text-red-600 font-mono text-xs border border-red-600 px-1 transform rotate-12">v1.0.4 // ERROR</div>
          </div>

          <Reveal delay={400}>
            <p className="text-xl md:text-3xl text-gray-300 font-serif tracking-widest mb-12 max-w-4xl mx-auto leading-relaxed">
              <span className="text-red-600">“</span> {content.tagline} <span className="text-red-600">”</span>
            </p>
          </Reveal>
          
          <Reveal delay={600} className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Button href={content.steamLink} external variant="primary" className="group relative overflow-hidden">
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12"></div>
              <span className="flex items-center gap-2 relative z-10">
                {content.ui.buy} <Download size={20} className="group-hover:translate-y-1 transition-transform" />
              </span>
            </Button>
            <Button href="#intro" variant="outline" className="group">
              <span className="flex items-center gap-2">
                {content.ui.learnMore} <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </Reveal>
        </div>
        
        {/* Decorative Bottom Skew */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-neutral-950 transform -skew-y-2 origin-bottom-right translate-y-16 border-t-4 border-red-800/50"></div>
      </header>
      
      {/* Marquee Divider */}
      <div className="bg-red-700 text-black transform -rotate-2 relative z-20 border-y-4 border-black">
        <Marquee text="INVISIBLE ROOM // AUDIO MYSTERY // DO NOT TRUST YOUR EYES //" />
      </div>

      {/* Introduction Section */}
      <section id="intro" className="py-32 relative">
        {/* Abstract floating shapes */}
        <div className="absolute top-20 right-0 w-64 h-64 border border-neutral-800 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 border-2 border-red-900 rotate-45 opacity-20"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            
            <div className="lg:w-1/2">
               <Reveal direction="left">
                 <SectionHeader title={content.intro.title} subtitle="Pure Audio Mystery" />
               </Reveal>
               <Reveal delay={200} direction="up">
                 <div className="relative pl-8 border-l-2 border-red-800/50">
                    <ScanLine className="absolute -left-[13px] top-0 text-red-600 bg-neutral-950 p-1" size={24} />
                    <p className="text-lg leading-relaxed text-gray-300 mb-6 font-light">
                      {content.intro.content}
                    </p>
                    <p className="text-lg leading-relaxed text-gray-400">
                      {content.intro.subContent}
                    </p>
                 </div>
               </Reveal>
            </div>

            <div className="lg:w-1/2 relative group perspective-1000">
              <Reveal direction="right" delay={300}>
                {/* Image Composition */}
                <div className="relative">
                   {/* Back decorations */}
                   <div className="absolute -top-4 -right-4 w-full h-full border-2 border-red-600/30 z-0"></div>
                   <div className="absolute -bottom-4 -left-4 w-full h-full bg-neutral-900 z-0"></div>
                   
                   {/* Main Image Frame */}
                   <div className="relative border-4 border-neutral-800 p-1 bg-black transform transition-transform duration-700 group-hover:rotate-1 group-hover:scale-105 z-10">
                    <div className="absolute inset-0 bg-red-600/10 mix-blend-color-dodge z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <img 
                      src="/img/看不见的房间kv图.png" 
                      alt="Game Concept Art" 
                      className="w-full h-auto grayscale contrast-125"
                    />
                    
                    {/* Overlay Tech UI */}
                    <div className="absolute top-4 left-4 flex gap-1">
                      <div className="w-2 h-2 bg-red-600 animate-ping"></div>
                      <div className="text-[10px] text-red-600 font-mono tracking-widest">LIVE FEED</div>
                    </div>
                    
                    <div className="absolute -bottom-8 -right-8 text-red-600 bg-black p-2 border border-red-900">
                      <EyeOff size={48} strokeWidth={1} />
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* Story Section - Skewed Background */}
      <section className="py-40 relative overflow-hidden text-black mt-12">
        <div className="absolute inset-0 bg-[#e5e5e5] transform -skew-y-3 scale-110 origin-top-left z-0 border-t-[12px] border-b-[12px] border-red-700"></div>
        {/* Grain on white background */}
        <div className="absolute inset-0 bg-noise opacity-20 mix-blend-multiply z-0 pointer-events-none transform -skew-y-3 scale-110 origin-top-left"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row-reverse gap-20 items-center">
            
            <div className="lg:w-1/2">
               <Reveal direction="right">
                 <SectionHeader title={content.story.title} theme="light" align="right" subtitle="The Narrative" />
               </Reveal>
               
               <Reveal delay={200} direction="up">
                 <div className="bg-white p-8 md:p-12 shadow-[15px_15px_0_0_#050505] border-2 border-black relative">
                   <div className="absolute top-0 left-0 w-full h-1 bg-red-600"></div>
                   <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 border-b-2 border-gray-200 pb-4">
                     <span className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></span>
                     {lang === 'en' ? 'Identity' : '身份档案'}: <span className="font-serif text-red-700">{content.story.role}</span>
                   </h3>
                   <p className="text-lg leading-loose text-gray-800 mb-8 font-serif">
                     {content.story.content}
                   </p>
                   <p className="text-xl md:text-2xl font-black italic text-red-700 pl-6 border-l-4 border-black">
                     {content.story.climax}
                   </p>
                   
                   {/* Decorative stamps */}
                   <div className="absolute bottom-4 right-4 opacity-20 transform -rotate-12 border-4 border-black p-2 font-black text-4xl uppercase">
                     Confidential
                   </div>
                 </div>
               </Reveal>
            </div>

            {/* Visual Element for Story */}
            <div className="lg:w-1/2">
              <Reveal direction="left" delay={300}>
                <div className="grid grid-cols-2 gap-4 relative">
                   {/* Red thread connecting images */}
                   <div className="absolute top-1/2 left-1/2 w-32 h-1 bg-red-600 transform -translate-x-1/2 -translate-y-1/2 rotate-45 z-20 shadow-lg"></div>

                   <div className="bg-black aspect-square flex items-center justify-center text-white p-4 relative group overflow-hidden border-2 border-black">
                      <div className="absolute inset-0 bg-neutral-900 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                      <span className="font-serif text-2xl tracking-widest text-center border-b-2 border-red-600 pb-2 relative z-10">BLACK</span>
                   </div>
                   <img src="/img/icon1.jpg" className="w-full h-full object-cover grayscale contrast-150 border-2 border-black hover:scale-95 transition-transform duration-500" alt="Evidence" />
                   <img src="/img/icon2.jpg" className="w-full h-full object-cover grayscale contrast-150 border-2 border-black hover:scale-95 transition-transform duration-500" alt="Scene" />
                   <div className="bg-red-700 aspect-square flex items-center justify-center text-white p-4 relative overflow-hidden border-2 border-black">
                      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')] opacity-20"></div>
                      <span className="font-serif text-2xl tracking-widest text-center border-b-2 border-black pb-2 relative z-10">RED</span>
                   </div>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 bg-neutral-950 relative">
        <div className="absolute top-0 w-full">
           <Marquee text="FEATURES /// MECHANICS /// ANALYSIS ///" direction="right" className="bg-neutral-900/50 text-neutral-600" />
        </div>

        <div className="container mx-auto px-6 mt-16">
          <Reveal className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black uppercase text-white mb-6 tracking-tighter">
              <span className="text-red-600 text-6xl align-top mr-2">///</span> {content.ui.featuresTitle}
            </h2>
            <p className="text-gray-500 font-serif tracking-[0.3em]">{content.ui.featuresSubtitle}</p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.features.map((feature, idx) => (
              <Reveal key={idx} delay={idx * 100} direction="up">
                <div 
                  className="group relative bg-neutral-900 border border-neutral-800 p-8 h-full transition-all duration-300 hover:border-red-600 hover:-translate-y-2 overflow-hidden"
                >
                  {/* Hover Background Effect */}
                  <div className="absolute inset-0 bg-red-900/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                  
                  <div className="absolute top-0 left-0 w-full h-1 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  
                  <div className="mb-8 text-neutral-500 group-hover:text-red-600 transition-colors duration-300 flex justify-between items-start">
                    <Icon name={feature.icon} size={48} strokeWidth={1} />
                    <span className="font-mono text-xs opacity-30">0{idx+1}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 tracking-wide text-white group-hover:text-red-500 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed relative z-10">
                    {feature.desc}
                  </p>
                  
                  {/* Decorative corner */}
                  <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[20px] border-r-[20px] border-b-red-600/20 border-r-transparent group-hover:border-b-red-600 transition-all"></div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PDF / Meta Highlight Section */}
      <section className="py-32 relative overflow-hidden bg-neutral-900 border-t border-neutral-800">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#dc2626_1px,transparent_1px)] [background-size:20px_20px]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
           <div className="flex flex-col items-center text-center">
             <Reveal>
               <div className="inline-block border border-red-500/50 p-1 mb-10 rotate-2">
                 <div className="bg-red-900/20 backdrop-blur border border-red-500 text-red-500 px-6 py-2 font-bold text-xs tracking-[0.3em] uppercase flex items-center gap-2">
                   <Fingerprint size={14} /> {content.ui.immersiveLabel}
                 </div>
               </div>
             </Reveal>

             <Reveal delay={200}>
               <h2 className="text-5xl md:text-7xl font-black mb-8 font-serif leading-tight max-w-5xl">
                 {content.ui.immersiveTitle}
               </h2>
               <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-16 font-light">
                 {content.ui.immersiveDesc}
               </p>
             </Reveal>
             
             <Reveal delay={400} className="relative">
               {/* Glowing effect behind papers */}
               <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-red-600/30 blur-[100px] -translate-x-1/2 -translate-y-1/2 rounded-full"></div>

               <div className="flex flex-wrap justify-center gap-8 md:gap-16 perspective-1000">
                 <div className="relative w-64 h-80 bg-[#f0f0f0] transform -rotate-6 transition-transform hover:rotate-0 hover:scale-110 shadow-2xl text-black duration-500 group cursor-pointer">
                   <div className="absolute inset-0 overflow-hidden">
                     <img src="/img/文档1.jpg" alt="Evidence Document" className="w-full h-full object-cover" />
                   </div>
                   <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-red-800 opacity-80 shadow-lg z-20"></div>
                   <div className="absolute top-4 left-4 w-full h-full bg-black/5 -z-10 blur-sm transform translate-y-2 pointer-events-none"></div>
                 </div>

                 <div className="relative w-64 h-80 bg-neutral-950 transform rotate-6 transition-transform hover:rotate-0 hover:scale-110 shadow-2xl flex flex-col items-center justify-center p-1 border border-neutral-700 duration-500 group cursor-pointer hidden md:flex">
                   <div className="w-full h-full bg-black border border-neutral-800 flex flex-col items-center justify-center gap-6 relative overflow-hidden">
                     <div className="absolute inset-0 bg-red-900/10 animate-pulse"></div>
                     <Volume2 className="text-red-600 relative z-10" size={64} />
                     <div className="h-1 w-24 bg-neutral-800 rounded overflow-hidden relative z-10">
                       <div className="h-full bg-red-600 animate-[width_2s_ease-in-out_infinite]" style={{width: '60%'}}></div>
                     </div>
                   </div>
                 </div>
               </div>
             </Reveal>
           </div>
        </div>
      </section>

      {/* Call to Action / Footer */}
      <footer className="bg-black pt-32 pb-12 border-t border-neutral-900 relative overflow-hidden">
        {/* Background Glitch Title */}
        <div className="absolute top-10 left-0 w-full overflow-hidden opacity-10 pointer-events-none select-none">
          <h2 className="text-[12rem] leading-none font-black text-white whitespace-nowrap animate-marquee">
            INVISIBLE ROOM INVISIBLE ROOM
          </h2>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          
          <Reveal className="mb-16">
            <Button href={content.steamLink} external className="text-xl md:text-2xl px-16 py-6 shadow-[0_0_50px_rgba(220,38,38,0.3)] hover:shadow-[0_0_80px_rgba(220,38,38,0.6)] border-2 border-red-600 bg-black text-red-500 hover:bg-red-600 hover:text-white">
              {content.ui.steamStore}
            </Button>
          </Reveal>

          <div className="flex flex-col md:flex-row justify-between items-center border-t border-neutral-900 pt-10 text-neutral-600 text-sm">
              <div className="flex flex-col items-center md:items-start gap-2">
              <div className="flex items-center gap-2">
                 <Rabbit size={16} className="text-red-600" />
                 <p className="font-serif tracking-widest">
                   &copy; {new Date().getFullYear()}{' '}
                   <a href="/" className="hover:underline">
                     {content.studio.toUpperCase()}
                   </a>
                 </p>
               </div>
               <p className="text-xs opacity-50 pl-6">{content.ui.footerRights}</p>
            </div>
            
            <div className="flex items-center gap-8 mt-8 md:mt-0">
               <a href="#" className="hover:text-red-500 transition-colors decoration-slice">{content.ui.privacy}</a>
               <a href="#" className="hover:text-red-500 transition-colors">{content.ui.contact}</a>
               <div className="flex items-center gap-2">
                 <span className="text-[10px] font-bold bg-neutral-900 text-neutral-400 px-3 py-1 rounded border border-neutral-800">WINDOWS</span>
                 <span className="text-[10px] font-bold bg-neutral-900 text-neutral-400 px-3 py-1 rounded border border-neutral-800">MAC OS</span>
               </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;