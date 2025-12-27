import React from 'react';
import { Reveal } from './Reveal';
import { Translation } from '../translations';

interface MetricsProps {
  text: Translation['metrics'];
}

export const Metrics: React.FC<MetricsProps> = ({ text }) => {
  return (
    <section id="metrics" className="py-24 px-6 max-w-7xl mx-auto relative z-10">
        <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="space-y-2">
                    <h3 className="text-6xl font-bold text-white">10+</h3>
                    <p className="text-white/50 uppercase tracking-widest text-sm">{text.years}</p>
                </div>
                <div className="space-y-2">
                    <h3 className="text-6xl font-bold text-white">250+</h3>
                    <p className="text-white/50 uppercase tracking-widest text-sm">{text.projects}</p>
                </div>
                <div className="space-y-2">
                    <h3 className="text-6xl font-bold text-white">100%</h3>
                    <p className="text-white/50 uppercase tracking-widest text-sm">{text.satisfaction}</p>
                </div>
            </div>
        </Reveal>
    </section>
  );
};