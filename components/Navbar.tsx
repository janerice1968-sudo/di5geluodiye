
import React from 'react';
import { NavigationSection } from '../types';

interface NavbarProps {
  activeSection: NavigationSection;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-lumina-cream/80 backdrop-blur-md border-b border-lumina-charcoal/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-lumina-charcoal rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-lumina-cream rounded-full"></div>
          </div>
          <span className="font-serif text-xl tracking-tight font-bold">LUMINA</span>
        </div>

        <div className="hidden md:flex items-center space-x-12">
          {[
            { id: 'home', label: 'The Origin' },
            { id: 'philosophy', label: 'The Ethos' },
            { id: 'gallery', label: 'The Archive' },
            { id: 'experience', label: 'The Encounter' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`text-[10px] tracking-[0.3em] uppercase transition-colors duration-300 ${
                activeSection === item.id ? 'text-lumina-gold' : 'text-lumina-charcoal/60 hover:text-lumina-charcoal'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <button 
          onClick={() => scrollTo('experience')}
          className="px-6 py-2 border border-lumina-charcoal text-[10px] tracking-[0.3em] uppercase hover:bg-lumina-charcoal hover:text-lumina-cream transition-all duration-500 shadow-sm"
        >
          Enter the Silence
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
