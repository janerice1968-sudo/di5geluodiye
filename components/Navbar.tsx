
import React from 'react';
import { NavigationSection } from '../types';

interface NavbarProps {
  activeSection: NavigationSection;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const EXTERNAL_LINK = "https://t.acrsmartcam.com/403718/7335?bo=2779,2778,2777,2776,2775&aff_sub5=SF_006OG000004lmDN";

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => scrollTo('home')}>
          <div className="w-8 h-8 bg-red-950 rounded-full flex items-center justify-center animate-pulse group-hover:scale-110 transition-transform">
            <div className="w-2 h-2 bg-red-600 rounded-full shadow-[0_0_10px_#991b1b]"></div>
          </div>
          <span className="font-serif text-xl tracking-tighter font-bold uppercase text-white">Late Nights Vibe</span>
        </div>

        <div className="hidden md:flex items-center space-x-12">
          {[
            { id: 'home', label: 'Entrance' },
            { id: 'philosophy', label: 'Rhythm' },
            { id: 'gallery', label: 'Archives' },
            { id: 'experience', label: 'Encounter' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`text-[11px] tracking-[0.4em] font-medium transition-all duration-300 uppercase ${
                activeSection === item.id ? 'text-red-500' : 'text-white/40 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <a 
          href={EXTERNAL_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 border border-red-900 text-[10px] tracking-[0.3em] font-bold text-red-500 hover:bg-red-950 hover:text-white transition-all duration-500 uppercase rounded-sm text-center"
        >
          Private Access
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
