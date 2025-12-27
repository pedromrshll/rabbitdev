import React from 'react';
import { NavItem } from '../types';
import { Home, Briefcase, Layout, Mail } from 'lucide-react';
import { Translation } from '../translations';

interface SidebarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  text: Translation['nav'];
}

export const Sidebar: React.FC<SidebarProps> = ({ activeSection, onNavigate, text }) => {
  const navItems: NavItem[] = [
    { id: 'hero', label: text.home, icon: Home },
    { id: 'metrics', label: text.about, icon: Briefcase },
    { id: 'services', label: text.services, icon: Layout },
    { id: 'contact', label: text.contact, icon: Mail },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-6 lg:px-12 bg-black/50 backdrop-blur-sm">
      <div className="flex items-center gap-2">
         {/* Logo similar to PlanetX reference */}
         <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <div className="w-6 h-1 bg-black rounded-full transform rotate-45"></div>
         </div>
         <span className="text-xl font-bold tracking-tight text-white">Rabbit<span className="font-light opacity-70">Dev</span></span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`
              text-sm font-medium transition-colors duration-300 tracking-wide
              ${activeSection === item.id 
                ? 'text-white' 
                : 'text-white/50 hover:text-white'}
            `}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Mobile Menu Icon (Simple placeholder) */}
      <button className="md:hidden text-white">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
      </button>
    </nav>
  );
};