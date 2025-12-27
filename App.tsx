import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { Hero } from './components/Hero';
import { Metrics } from './components/Metrics';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { translations, Language } from './translations';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [currentLang, setCurrentLang] = useState<Language>('pt');

  useEffect(() => {
    // Auto-detect language from browser settings
    const browserLang = navigator.language.split('-')[0].toLowerCase();
    const supportedLangs: Language[] = ['en', 'pt', 'es', 'fr', 'pl', 'de', 'it', 'ru'];
    
    if (supportedLangs.includes(browserLang as Language)) {
      setCurrentLang(browserLang as Language);
    } else {
      setCurrentLang('en');
    }
  }, []);

  const handleNavigate = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const t = translations[currentLang];

  const languages: { code: Language; label: string }[] = [
    { code: 'pt', label: 'PT' },
    { code: 'en', label: 'EN' },
    { code: 'es', label: 'ES' },
    { code: 'fr', label: 'FR' },
    { code: 'de', label: 'DE' },
    { code: 'it', label: 'IT' },
    { code: 'ru', label: 'RU' },
    { code: 'pl', label: 'PL' },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      <Sidebar activeSection={activeSection} onNavigate={handleNavigate} text={t.nav} />
      
      <main>
        <Hero onCtaClick={() => handleNavigate('contact')} text={t.hero} />
        <Metrics text={t.metrics} />
        <Services text={t.services} />
        <Contact text={t.contact} lang={currentLang} />
        
        <footer className="py-12 flex flex-col items-center justify-center gap-6 border-t border-white/5">
          <div className="flex gap-4">
             {languages.map((lang) => (
               <button
                 key={lang.code}
                 onClick={() => setCurrentLang(lang.code)}
                 className={`text-xs font-bold tracking-widest transition-colors ${currentLang === lang.code ? 'text-white' : 'text-white/30 hover:text-white/70'}`}
               >
                 {lang.label}
               </button>
             ))}
          </div>
          
          <div className="text-center text-white/30 text-xs tracking-widest uppercase">
            <p>&copy; {new Date().getFullYear()} {t.footer.rights}</p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;