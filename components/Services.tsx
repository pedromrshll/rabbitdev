import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Translation } from '../translations';

interface ServicesProps {
  text: Translation['services'];
}

export const Services: React.FC<ServicesProps> = ({ text }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const metricsEl = document.getElementById('metrics');
      const contactEl = document.getElementById('contact');
      
      if (!metricsEl || !contactEl) return;

      const metricsRect = metricsEl.getBoundingClientRect();
      const servicesRect = sectionRef.current.getBoundingClientRect();
      const contactRect = contactEl.getBoundingClientRect();

      const scrollY = window.scrollY;
      const metricsBottom = scrollY + metricsRect.bottom;
      const servicesTop = scrollY + servicesRect.top;
      const servicesBottom = scrollY + servicesRect.bottom;
      const contactTop = scrollY + contactRect.top;

      // Point A: Midway between Metrics end and Services start
      const pointA = (metricsBottom + servicesTop) / 2;
      // Point B: Midway between Services end and Contact start
      const pointB = (servicesBottom + contactTop) / 2;

      // Use center of screen as the activator
      const currentScroll = scrollY + window.innerHeight / 2;
      
      let progress = (currentScroll - pointA) / (pointB - pointA);
      progress = Math.max(0, Math.min(1, progress));
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section 
      id="services" 
      ref={sectionRef} 
      className="py-32 px-6 max-w-7xl mx-auto relative z-20"
    >
      <div className="flex justify-center">
        {/* Centered Services List */}
        <div className="w-full max-w-4xl flex flex-col">
          <div className="mb-24 text-center">
            <h2 className="text-sm font-bold text-white/50 uppercase tracking-widest mb-2">{text.subtitle}</h2>
            <h3 className="text-5xl md:text-7xl text-white font-black tracking-tighter">
              {text.title}
            </h3>
          </div>

          <div className="flex flex-col gap-0">
            {text.items.map((service, index) => {
              // Stagger text reveal within the 0-1 range
              const startAt = (index / text.items.length) * 0.5;
              const endAt = startAt + 0.5;
              let itemProgress = (scrollProgress - startAt) / (endAt - startAt);
              itemProgress = Math.max(0, Math.min(1, itemProgress));

              return (
                <div 
                  key={index} 
                  style={{ 
                    opacity: 0.1 + (itemProgress * 0.9),
                    transform: `translateY(${(1 - itemProgress) * 20}px)`,
                    transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)'
                  }}
                  className="group flex flex-col md:flex-row md:items-start justify-between py-16 border-b border-white/10 hover:border-white transition-colors cursor-pointer"
                >
                  <div className="text-white/30 text-2xl font-mono mb-6 md:mb-0 mr-12 pt-2 transition-colors group-hover:text-white">
                    {service.id}
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-3xl md:text-5xl font-bold text-white mb-6 group-hover:translate-x-4 transition-all duration-500 tracking-tighter">
                      {service.title}
                    </h4>
                    <p className="text-white/40 text-base md:text-lg leading-relaxed group-hover:text-white/80 group-hover:translate-x-4 transition-all duration-500">
                      {service.desc}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4 mt-8 md:mt-0 pt-2">
                    <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all group-hover:scale-110 duration-500">
                      <ArrowUpRight size={28} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};