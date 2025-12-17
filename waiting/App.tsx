import React, { useState, useEffect } from 'react';
import { ASSETS, TRANSLATIONS } from './constants';

type Language = 'zh' | 'en' | 'jp';

// --- Decorative Components ---

// A lush, golden-framed button with a "gem" feel
const OrnateButton: React.FC<{ 
  children: React.ReactNode; 
  onClick?: () => void;
  variant?: 'primary' | 'secondary'; 
  className?: string;
}> = ({ children, onClick, variant = 'primary', className }) => {
  const baseClasses = "relative group px-10 py-4 font-bold tracking-[0.2em] text-sm transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0.5";
  
  // Primary: Amber/Gold warmth (Storybook feel)
  const primaryStyle = "text-amber-900 bg-gradient-to-b from-amber-300 via-amber-400 to-amber-500 shadow-[0_4px_0_#b45309,0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_0_#b45309,0_15px_25px_rgba(180,83,9,0.3)] active:shadow-[0_2px_0_#b45309]";
  
  // Secondary: Slate/Silver (Industrial/Modern feel)
  const secondaryStyle = "text-slate-100 bg-gradient-to-b from-slate-600 via-slate-700 to-slate-800 shadow-[0_4px_0_#1e293b,0_10px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_6px_0_#1e293b,0_15px_25px_rgba(0,0,0,0.3)] active:shadow-[0_2px_0_#1e293b]";

  return (
    <button onClick={onClick} className={`${baseClasses} ${variant === 'primary' ? primaryStyle : secondaryStyle} rounded-xl border-2 border-white/40 ${className}`}>
      {/* Inner Shine */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-white/40 to-transparent opacity-50 pointer-events-none"></div>
      
      {/* Left Wing Decor */}
      <span className="absolute -left-3 top-1/2 -translate-y-1/2 text-white/80 group-hover:-translate-x-1 transition-transform">
        ✦
      </span>
      
      {/* Content */}
      <span className="relative z-10 flex items-center gap-2 drop-shadow-sm">
        {children}
      </span>

      {/* Right Wing Decor */}
      <span className="absolute -right-3 top-1/2 -translate-y-1/2 text-white/80 group-hover:translate-x-1 transition-transform">
        ✦
      </span>
    </button>
  );
};

const VineDivider = () => (
  <div className="flex items-center justify-center gap-2 my-10 opacity-70 text-green-700/40">
    <svg className="w-16 h-4 transform scale-x-[-1]" viewBox="0 0 100 20" fill="currentColor">
       <path d="M100,20 C80,20 70,0 50,10 C30,20 20,0 0,20 L0,18 C20,-2 30,18 50,8 C70,-2 80,18 100,18 Z" />
    </svg>
    <div className="w-2 h-2 rounded-full bg-amber-400 shadow-sm"></div>
    <svg className="w-16 h-4" viewBox="0 0 100 20" fill="currentColor">
       <path d="M100,20 C80,20 70,0 50,10 C30,20 20,0 0,20 L0,18 C20,-2 30,18 50,8 C70,-2 80,18 100,18 Z" />
    </svg>
  </div>
);

const Cloud = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <div className={`absolute pointer-events-none opacity-60 mix-blend-screen ${className}`} style={style}>
     <svg viewBox="0 0 24 24" fill="white" className="w-full h-full filter drop-shadow-lg">
        <path d="M17.5,19c-0.83,0-1.5-0.67-1.5-1.5c0-0.83,0.67-1.5,1.5-1.5c0.83,0,1.5,0.67,1.5,1.5C19,18.33,18.33,19,17.5,19z M19.5,13
	c-2.48,0-4.5,2.02-4.5,4.5c0,2.48,2.02,4.5,4.5,4.5c2.48,0,4.5-2.02,4.5-4.5C24,15.02,21.98,13,19.5,13z M6.5,19
	c-0.83,0-1.5-0.67-1.5-1.5c0-0.83,0.67-1.5,1.5-1.5c0.83,0,1.5,0.67,1.5,1.5C8,18.33,7.33,19,6.5,19z M4.5,13
	c-2.48,0-4.5,2.02-4.5,4.5c0,2.48,2.02,4.5,4.5,4.5c2.48,0,4.5-2.02,4.5-4.5C9,15.02,6.98,13,4.5,13z M12.5,10
	c-0.83,0-1.5-0.67-1.5-1.5c0-0.83,0.67-1.5,1.5-1.5c0.83,0,1.5,0.67,1.5,1.5C14,9.33,13.33,10,12.5,10z M12.5,4
	c-3.59,0-6.5,2.91-6.5,6.5c0,3.59,2.91,6.5,6.5,6.5c3.59,0,6.5-2.91,6.5-6.5C19,6.91,16.09,4,12.5,4z"/>
     </svg>
  </div>
);

const ParticleSystem = () => {
  // Generate static sparkles/petals to avoid hydration mismatch, or use effect
  // For simplicity in this demo, we hardcode a few random styled elements
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Sparkles */}
      {[...Array(10)].map((_, i) => (
        <div 
          key={`sparkle-${i}`}
          className="absolute w-1 h-1 bg-yellow-200 rounded-full animate-twinkle shadow-[0_0_8px_rgba(253,230,138,0.8)]"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 3}s`
          }}
        />
      ))}
      
      {/* Falling Petals */}
      {[...Array(6)].map((_, i) => (
        <div 
          key={`petal-${i}`}
          className="absolute w-2 h-2 bg-pink-100 rounded-tl-none rounded-br-none rounded-tr-full rounded-bl-full particle-petal opacity-60"
          style={{
            top: `-5%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${10 + Math.random() * 10}s`
          }}
        />
      ))}
    </div>
  );
};

// --- Main Component ---

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('zh');
  const t = TRANSLATIONS[lang];

  return (
    <div className="relative min-h-screen overflow-x-hidden selection:bg-amber-100 selection:text-amber-900">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Clouds */}
        <Cloud className="w-64 h-32 top-[10%] cloud-anim-1" />
        <Cloud className="w-96 h-48 top-[20%] cloud-anim-2" />
        
        {/* Sun Glow */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-gradient-to-b from-amber-100/50 to-transparent rounded-full blur-3xl opacity-60"></div>
        
        {/* Global Particles */}
        <ParticleSystem />
      </div>

      {/* --- LANGUAGE SWITCHER --- */}
      <nav className="fixed top-6 right-8 z-50 flex gap-2 bg-white/70 backdrop-blur-md px-3 py-2 rounded-2xl shadow-lg border border-white/60">
        {(['zh', 'en', 'jp'] as Language[]).map((l) => (
          <button 
            key={l}
            onClick={() => setLang(l)} 
            className={`text-xs font-bold tracking-widest px-3 py-1.5 rounded-lg transition-all duration-300 ${lang === l ? 'bg-amber-400 text-white shadow-md -translate-y-0.5' : 'text-slate-500 hover:text-amber-600 hover:bg-amber-50'}`}
          >
            {l === 'zh' ? '中' : l.toUpperCase()}
          </button>
        ))}
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 pt-24 pb-16">
        
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 animate-float">
           
           {/* Ornate Frame around Title */}
           <div className="relative inline-block px-16 py-14">
              {/* Decorative Frame SVG */}
              <svg className="absolute inset-0 w-full h-full text-amber-300/60" viewBox="0 0 300 150" preserveAspectRatio="none">
                 <path d="M10,10 L30,10 M10,10 L10,30" stroke="currentColor" strokeWidth="2" fill="none" />
                 <path d="M290,10 L270,10 M290,10 L290,30" stroke="currentColor" strokeWidth="2" fill="none" />
                 <path d="M290,140 L270,140 M290,140 L290,120" stroke="currentColor" strokeWidth="2" fill="none" />
                 <path d="M10,140 L30,140 M10,140 L10,120" stroke="currentColor" strokeWidth="2" fill="none" />
                 {/* Curvy bits */}
                 <path d="M30,10 Q50,10 60,0" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5"/>
                 <path d="M270,10 Q250,10 240,0" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5"/>
              </svg>

              <div className="absolute inset-4 border border-amber-400/20 rounded-[2rem] transform rotate-1 bg-white/10 backdrop-blur-sm"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-3 mb-6 px-6 py-1.5 bg-amber-50/80 backdrop-blur rounded-full border border-amber-200 text-amber-800 text-xs tracking-[0.3em] uppercase shadow-sm">
                  <span className="text-amber-400">✦</span>
                  {t.subtitle}
                  <span className="text-amber-400">✦</span>
                </div>

                <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-slate-800 serif leading-[1.1] drop-shadow-sm">
                  <span className="bg-clip-text text-transparent bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 filter drop-shadow-lg">
                    {t.title}
                  </span>
                </h1>
              </div>
           </div>
           
           <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-loose font-serif italic text-shadow-sm">
              {t.slogan}
           </p>

           <div className="pt-8 flex flex-col items-center gap-6">
              <OrnateButton variant="primary">
                 {t.cta}
              </OrnateButton>
              
              <div className="flex items-center justify-center gap-3 text-[11px] text-slate-400 font-bold uppercase tracking-widest opacity-80 bg-white/40 px-4 py-2 rounded-full">
                 <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse"></span>
                 {t.wishlist}
                 <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse"></span>
              </div>
           </div>
        </div>
      </header>


      {/* --- INTRO QUOTE --- */}
      <section className="relative py-32 px-6">
         <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
            <img src={ASSETS.main_interface} className="w-[800px] h-[800px] object-contain animate-spin-slow" style={{animationDuration: '120s'}} />
         </div>
         
         <div className="relative max-w-4xl mx-auto text-center">
            <VineDivider />
            <h2 className="text-3xl md:text-5xl serif leading-normal text-slate-700 font-medium tracking-wide drop-shadow-sm relative">
               <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-6xl text-amber-200/50 serif">“</span>
               {t.introQuote}
               <span className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-6xl text-amber-200/50 serif">”</span>
            </h2>
            <VineDivider />
         </div>
      </section>


      {/* --- CHARACTERS (THE TRIAD) --- */}
      <section className="py-24 px-6 relative">
         {/* Greenery Decor */}
         <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-green-50/40 to-transparent -z-10"></div>
         {/* Decorative leaves */}
         <div className="absolute top-20 left-10 text-green-800/5 rotate-45 text-9xl font-serif">❦</div>
         <div className="absolute bottom-20 right-10 text-green-800/5 -rotate-12 text-9xl font-serif">❦</div>

         <div className="max-w-7xl mx-auto">
            <div className="mb-24 text-center">
               <span className="inline-block px-4 py-1 mb-4 text-xs font-bold text-green-800 bg-green-100/80 rounded-full tracking-[0.1em] uppercase border border-green-200 shadow-sm">
                 {t.charactersSubtitle}
               </span>
               <h2 className="text-4xl md:text-5xl serif text-slate-800 drop-shadow-sm">{t.charactersTitle}</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-16 items-start">
               
               {/* Character Card Component */}
               {[t.characters.boy, t.characters.woman, t.characters.man].map((char, idx) => {
                 const imgs = [ASSETS.avatar_boy, ASSETS.avatar_woman, ASSETS.avatar_man];
                 const bgs = ['bg-blue-50', 'bg-amber-50', 'bg-slate-50'];
                 const borders = ['border-blue-200', 'border-amber-200', 'border-slate-200'];
                 
                 return (
                   <div key={idx} className={`group relative bg-white p-5 rounded-2xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] transition-all duration-500 hover:-translate-y-3 border border-white/60 ${idx === 1 ? 'md:-mt-16' : ''}`}>
                      
                      {/* Decorative Tape */}
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-amber-100/50 border-l border-r border-white/50 backdrop-blur-sm shadow-sm rotate-1 z-20"></div>

                      <div className={`relative aspect-[3/4] mb-6 rounded-xl overflow-hidden ${bgs[idx]} border-4 border-white shadow-inner`}>
                         <img src={imgs[idx]} alt={char.name} className="absolute inset-0 w-full h-full object-cover pixelated opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000" />
                         <div className="absolute bottom-0 inset-x-0 h-2/3 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
                         
                         <div className="absolute bottom-4 left-0 right-0 text-center">
                            <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-md rounded-lg text-[10px] font-bold tracking-widest text-slate-500 shadow-sm border border-slate-100">
                               {char.year}
                            </span>
                         </div>
                      </div>

                      <div className="text-center relative z-20 px-2 pb-2">
                        <h4 className="text-2xl font-bold mb-1 serif text-slate-800">{char.name}</h4>
                        <p className="text-xs text-slate-400 font-bold tracking-widest uppercase mb-4">{char.role}</p>
                        
                        <div className="relative bg-slate-50/50 p-4 rounded-lg border border-slate-100/50">
                          <p className="text-base text-slate-600 font-serif italic leading-relaxed">
                             {char.quote}
                          </p>
                        </div>
                      </div>
                   </div>
                 );
               })}

            </div>
         </div>
      </section>


      {/* --- FEATURES --- */}
      <section className="py-24 px-6 bg-white/60 backdrop-blur-sm border-y border-white/50 relative overflow-hidden">
         {/* Background Decor */}
         <div className="absolute -right-20 top-20 w-96 h-96 bg-amber-100/50 rounded-full blur-3xl -z-10"></div>
         <div className="absolute -left-20 bottom-20 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl -z-10"></div>

         <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-20 items-center">
               
               {/* Text Content */}
               <div className="space-y-8 order-2 md:order-1">
                  <h3 className="text-3xl md:text-4xl serif font-bold text-slate-800 whitespace-pre-line leading-tight drop-shadow-sm">
                     {t.featureTitle}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                     {t.featureDesc}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 pt-6">
                      {t.tags.map((tag, i) => (
                          <div key={i} className="flex items-center space-x-2 text-sm font-medium text-slate-600 bg-white/80 px-3 py-1.5 rounded-lg shadow-sm border border-slate-100 hover:scale-105 transition-transform cursor-default">
                              <span className="text-amber-400">❖</span>
                              <span>{tag}</span>
                          </div>
                      ))}
                  </div>
               </div>

               {/* Feature Art Frame */}
               <div className="order-1 md:order-2 relative group perspective-1000">
                  <div className="relative aspect-[4/3] bg-white p-4 rounded-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.2)] rotate-2 group-hover:rotate-0 transition-transform duration-700 ease-out border border-slate-100">
                      
                      {/* Paper texture overlay on image */}
                      <div className="w-full h-full bg-slate-100 rounded-lg overflow-hidden relative border border-slate-200">
                           <img src={ASSETS.bg_clock} alt="Feature Art" className="w-full h-full object-cover opacity-90 mix-blend-multiply group-hover:scale-110 transition-transform duration-[2s]" />
                           <div className="absolute inset-0 bg-gradient-to-tr from-amber-100/20 to-blue-100/20 mix-blend-overlay pointer-events-none"></div>
                           
                           {/* Ornate UI Mockup Overlay */}
                           <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                               <div className="px-8 py-4 bg-white/95 backdrop-blur-md rounded-xl border-2 border-amber-100 shadow-xl text-xs tracking-widest font-bold text-slate-800 flex flex-col items-center gap-2">
                                   <span className="text-amber-400 text-lg">✦</span>
                                   SYSTEM INTERFACE
                               </div>
                           </div>
                      </div>
                  </div>
               </div>

            </div>
         </div>
      </section>


      {/* --- FOOTER --- */}
      <footer className="relative py-24 px-6 text-center overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-t from-amber-50 to-transparent -z-10"></div>
         <ParticleSystem />
         
         <div className="max-w-2xl mx-auto space-y-12 relative z-10">
            
            <VineDivider />

            <p className="text-xl md:text-2xl serif italic text-slate-600 leading-relaxed">
               {t.footerQuote}
            </p>

            <div className="flex flex-col items-center gap-6">
                <OrnateButton variant="secondary">
                   {t.cta}
                </OrnateButton>
            </div>

            <div className="pt-16 text-xs text-slate-400 font-medium uppercase tracking-widest space-y-3">
               <p>
                 <a href="/" className="hover:underline">
                   {t.copyright}
                 </a>
               </p>
            </div>
         </div>
      </footer>

    </div>
  );
};

export default App;