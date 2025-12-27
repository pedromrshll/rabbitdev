import React from 'react';
import { Reveal } from './Reveal';
import { Translation } from '../translations';

interface ContactProps {
  text: Translation['contact'];
  lang?: string;
}

export const Contact: React.FC<ContactProps> = ({ text, lang }) => {
  // Polish word "Porozmawiajmy" is very long, so we reduce font size to prevent overlap with the form
  const isPolish = lang === 'pl';
  const titleSizeClass = isPolish ? 'text-4xl md:text-6xl' : 'text-5xl md:text-7xl';
  // Move animation lower for Polish as requested (less negative top value moves it down)
  const animationPosClass = isPolish ? 'md:-top-32' : 'md:-top-60';

  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
      <Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
                <div className="relative">
                    <h2 className={`${titleSizeClass} font-bold text-white mb-8 relative z-10 leading-tight whitespace-pre-line`}>
                      {text.title}
                    </h2>
                    <img 
                        src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXdwdzlpbmpidThwbmcxcThreXE2eXoxenl2bmt4dDZhaHd0bjN2YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/E94Hl4mziPbFh1zvWJ/giphy.gif"
                        alt="Abstract Planet Element"
                        style={{ clipPath: 'inset(20% 0 20% 0)' }}
                        className={`absolute -right-12 -top-24 w-64 h-64 md:-right-32 ${animationPosClass} md:w-[500px] md:h-[500px] mix-blend-screen object-contain opacity-100 pointer-events-none`}
                    />
                </div>
                <p className="text-white/60 text-lg max-w-md leading-relaxed relative z-10">
                    {text.desc}
                </p>
                <div className="mt-12 space-y-4 relative z-10">
                    <p className="text-white text-xl">hello@rabbitdev.com</p>
                    <p className="text-white/50">+55 11 99999-9999</p>
                </div>
            </div>

            <form className="space-y-8 mt-8 md:mt-0 relative z-10">
                <div className="space-y-6">
                    <div className="border-b border-white/20 py-2">
                        <input 
                            type="text" 
                            placeholder={text.namePlaceholder}
                            className="w-full bg-transparent text-white text-xl p-2 focus:outline-none placeholder-white/30"
                        />
                    </div>
                    <div className="border-b border-white/20 py-2">
                        <input 
                            type="email" 
                            placeholder={text.emailPlaceholder}
                            className="w-full bg-transparent text-white text-xl p-2 focus:outline-none placeholder-white/30"
                        />
                    </div>
                    <div className="border-b border-white/20 py-2">
                        <textarea 
                            rows={3}
                            placeholder={text.messagePlaceholder}
                            className="w-full bg-transparent text-white text-xl p-2 focus:outline-none placeholder-white/30 resize-none"
                        />
                    </div>
                </div>

                <button className="px-10 py-4 bg-white text-black font-bold uppercase tracking-wider hover:bg-gray-200 transition-colors">
                    {text.submit}
                </button>
            </form>
        </div>
      </Reveal>
    </section>
  );
};