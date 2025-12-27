import React from 'react';
import { Reveal } from './Reveal';
import { Translation } from '../translations';
import { InteractivePhysicsBackground } from './InteractivePhysicsBackground';
import { Plus } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
  text: Translation['hero'];
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick, text }) => {
  // Helper to split text into characters with glitch animation on hover
  const renderAnimatedTitle = (title: string) => {
    return title.split('\n').map((line, lineIndex) => (
      <span key={lineIndex} className="block mb-2 last:mb-0">
        {line.split(' ').map((word, wordIndex) => (
          <span key={wordIndex} className="inline-block mr-[0.3em] last:mr-0 whitespace-nowrap">
            {word.split('').map((char, charIndex) => (
              <span
                key={charIndex}
                className="inline-block glitch-hover cursor-crosshair transition-colors duration-150 hover:text-white physics-char"
              >
                {char}
              </span>
            ))}
          </span>
        ))}
      </span>
    ));
  };

  const handleSpawnRequest = () => {
    window.dispatchEvent(new CustomEvent('spawn-particles'));
  };

  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center justify-center bg-black">
      
      {/* Lusion-style Physics Background */}
      <InteractivePhysicsBackground />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 h-full flex flex-col justify-center items-center text-center py-24">
        
        {/* Set delay to 0 to spawn immediately with particles */}
        <Reveal delay={0}>
            <div className="max-w-5xl flex flex-col items-center">
                <span className="text-xs font-bold tracking-[0.4em] uppercase text-white/40 mb-12 block">
                    Portfolio Experience
                </span>
                
                <h1 className="text-5xl md:text-[7rem] font-black text-white leading-[0.9] tracking-tighter mb-16 select-none uppercase">
                    {renderAnimatedTitle(text.title)}
                </h1>
                
                <div className="flex flex-col items-center gap-8">
                    <button 
                        onClick={handleSpawnRequest}
                        title="Spawn more particles"
                        className="group relative flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-md border border-white/20 text-white transition-all duration-300 rounded-full hover:scale-110 active:scale-90 hover:bg-white hover:text-black overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                    >
                        <Plus size={32} strokeWidth={2.5} />
                    </button>

                    <div className="flex flex-col items-center gap-2 animate-bounce opacity-40 mt-12">
                        <span className="text-[10px] tracking-[0.3em] uppercase font-bold">Scroll</span>
                        <div className="w-[1px] h-12 bg-white"></div>
                    </div>
                </div>
            </div>
        </Reveal>

        {/* Floating Context Labels like Lusion */}
        <div className="absolute top-1/4 left-10 hidden xl:block pointer-events-none opacity-20">
            <span className="text-[10px] font-mono tracking-widest">+ 37.7749° N, 122.4194° W</span>
        </div>
        <div className="absolute bottom-1/4 right-10 hidden xl:block pointer-events-none opacity-20">
            <span className="text-[10px] font-mono tracking-widest">SYSTEM_VERSION: 2.0.48</span>
        </div>
      </div>
    </section>
  );
};