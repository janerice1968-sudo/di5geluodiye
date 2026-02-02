
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-lumina-cream flex flex-col justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-end pb-20 pt-32">
        <div className="lg:col-span-7 z-10">
          <div className="overflow-hidden mb-6">
            <span className="block text-[10px] tracking-[0.5em] uppercase text-lumina-gold font-bold fade-in">
              Ethereal Craft — Defined by Absence
            </span>
          </div>
          <h1 className="font-serif text-7xl md:text-9xl leading-[0.9] text-lumina-charcoal mb-10 fade-in [animation-delay:200ms]">
            Echo <br />
            <span className="italic pl-12 md:pl-24">Within.</span>
          </h1>
          <p className="max-w-md text-lg text-lumina-muted font-light leading-relaxed mb-12 fade-in [animation-delay:400ms]">
            Lumina is an invitation to witness the birth of a thought. We don't just provide tools; we provide the atmosphere where your most daring visions are finally given permission to breathe.
          </p>
          <div className="flex items-center space-x-10 fade-in [animation-delay:600ms]">
            <button 
              onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative inline-block text-xs tracking-[0.4em] uppercase font-semibold"
            >
              <span className="relative z-10">Claim Your Atmosphere</span>
              <div className="absolute -bottom-2 left-0 w-full h-px bg-lumina-charcoal origin-left transform scale-x-100 group-hover:scale-x-50 transition-transform duration-500"></div>
            </button>
            <span className="text-lumina-muted/30 text-xs">|</span>
            <button 
              onClick={() => document.getElementById('philosophy')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-[10px] tracking-[0.3em] uppercase text-lumina-muted hover:text-lumina-charcoal transition-colors"
            >
              The Unspoken Laws
            </button>
          </div>
        </div>
        
        <div className="lg:col-span-5 relative">
          <div className="aspect-[3/4] overflow-hidden grayscale contrast-125 shadow-2xl fade-in [animation-delay:800ms] rounded-sm">
            <img 
              src="https://images.unsplash.com/photo-1518005020470-58b73069c972?auto=format&fit=crop&q=80&w=1200" 
              alt="Light play on architecture" 
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-[3000ms]"
            />
          </div>
          <div className="absolute -left-12 bottom-12 bg-lumina-charcoal text-lumina-cream p-8 hidden xl:block shadow-2xl transform hover:-translate-y-2 transition-transform duration-700">
            <div className="text-[10px] tracking-widest uppercase mb-4 opacity-50">Resonance No. 042</div>
            <div className="font-serif italic text-2xl">The Weight of Light</div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute right-12 bottom-12 flex flex-col items-center space-y-4">
        <span className="text-[10px] tracking-widest uppercase vertical-text text-lumina-muted rotate-90 mb-8 opacity-50">Descend</span>
        <div className="w-px h-24 bg-gradient-to-b from-lumina-charcoal to-transparent opacity-20"></div>
      </div>
    </div>
  );
};

export default Hero;
