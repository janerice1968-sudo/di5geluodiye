
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-20 border-t border-lumina-charcoal/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-6 h-6 bg-red-950 rounded-full"></div>
              <span className="font-serif text-xl tracking-tight font-bold uppercase">LATE NIGHTS VIBE</span>
            </div>
            <p className="text-lumina-muted max-w-sm leading-relaxed mb-8">
              A midnight sanctuary designed for those seeking deep interaction and authentic sensory experiences. At the intersection of thought and desire, we await your presence.
            </p>
          </div>

          <div>
            <h4 className="text-[11px] tracking-[0.4em] uppercase text-red-900 font-bold mb-6">Navigation</h4>
            <ul className="space-y-4 text-sm text-lumina-charcoal/70">
              <li><button onClick={() => document.getElementById('home')?.scrollIntoView({behavior:'smooth'})} className="hover:text-red-900 transition-colors">Entrance</button></li>
              <li><button onClick={() => document.getElementById('philosophy')?.scrollIntoView({behavior:'smooth'})} className="hover:text-red-900 transition-colors">Midnight Rhythm</button></li>
              <li><button onClick={() => document.getElementById('gallery')?.scrollIntoView({behavior:'smooth'})} className="hover:text-red-900 transition-colors">Secret Archives</button></li>
              <li><button onClick={() => document.getElementById('experience')?.scrollIntoView({behavior:'smooth'})} className="hover:text-red-900 transition-colors">Sensory Encounter</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] tracking-[0.4em] uppercase text-red-900 font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-lumina-charcoal/70">
              <li>concierge@latenights.vibe</li>
              <li>Tokyo • Paris • Bangkok</li>
              <li>@latenightsvibe.official</li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-lumina-charcoal/5 flex flex-col md:row items-center justify-between space-y-4 md:space-y-0 text-[10px] tracking-[0.2em] uppercase text-lumina-muted">
          <p>© {new Date().getFullYear()} Late Nights Vibe. All Rights Reserved.</p>
          <div className="flex space-x-8">
            <span className="hover:text-lumina-charcoal cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-lumina-charcoal cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
