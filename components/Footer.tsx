
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-20 border-t border-lumina-charcoal/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-6 h-6 bg-lumina-charcoal rounded-full"></div>
              <span className="font-serif text-xl tracking-tight font-bold">LUMINA</span>
            </div>
            <p className="text-lumina-muted max-w-sm leading-relaxed mb-8">
              A creative sanctuary dedicated to the intersection of human creativity and intuitive technology. Based in the space between thoughts.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] tracking-widest uppercase text-lumina-gold font-bold mb-6">Exploration</h4>
            <ul className="space-y-4 text-sm text-lumina-charcoal/70">
              <li><a href="#home" className="hover:text-lumina-charcoal transition-colors">Overview</a></li>
              <li><a href="#philosophy" className="hover:text-lumina-charcoal transition-colors">Philosophy</a></li>
              <li><a href="#gallery" className="hover:text-lumina-charcoal transition-colors">Collections</a></li>
              <li><a href="#experience" className="hover:text-lumina-charcoal transition-colors">Experience</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] tracking-widest uppercase text-lumina-gold font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-lumina-charcoal/70">
              <li>atelier@lumina.vision</li>
              <li>Kyoto • London • New York</li>
              <li>@lumina.atelier</li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-lumina-charcoal/5 flex flex-col md:row items-center justify-between space-y-4 md:space-y-0 text-[10px] tracking-[0.2em] uppercase text-lumina-muted">
          <p>© {new Date().getFullYear()} Lumina Creative Atelier. All Rights Reserved.</p>
          <div className="flex space-x-8">
            <span className="hover:text-lumina-charcoal cursor-pointer transition-colors">Privacy</span>
            <span className="hover:text-lumina-charcoal cursor-pointer transition-colors">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
