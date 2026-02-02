
import React from 'react';

const Philosophy: React.FC = () => {
  return (
    <div className="py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3">
            <h2 className="text-[10px] tracking-[0.5em] uppercase text-lumina-gold font-bold mb-8">The Ethos</h2>
            <h3 className="font-serif text-5xl leading-tight mb-8">A Covenant <br />of <br />Intention</h3>
            <div className="h-px w-24 bg-lumina-charcoal/20"></div>
          </div>
          
          <div className="lg:w-2/3 space-y-16">
            <p className="font-serif text-3xl md:text-4xl text-lumina-charcoal leading-tight">
              We reject the noise of the machine. In a world of automated clutter, we offer a temple of focus—where your intuition is granted the precision it deserves.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="space-y-6">
                <span className="text-[10px] tracking-[0.3em] uppercase text-lumina-gold font-bold">I / Total Discretion</span>
                <p className="text-lumina-muted leading-relaxed font-light italic">
                  "The most powerful voices are often the quietest." Our system does not shout; it waits for your touch to transform silence into form.
                </p>
              </div>
              <div className="space-y-6">
                <span className="text-[10px] tracking-[0.3em] uppercase text-lumina-gold font-bold">II / Absolute Integrity</span>
                <p className="text-lumina-muted leading-relaxed font-light italic">
                  Every curve and shadow is born from a true collaboration. We do not provide shortcuts, only a longer, more beautiful reach for your soul.
                </p>
              </div>
            </div>
            
            <div className="aspect-[21/9] overflow-hidden bg-lumina-cream grayscale relative group">
              <img 
                src="https://images.unsplash.com/photo-1516245834210-c4c142787335?auto=format&fit=crop&q=80&w=1500" 
                alt="Studio Detail" 
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-[4000ms]"
              />
              <div className="absolute inset-0 bg-lumina-charcoal/10 group-hover:bg-transparent transition-colors duration-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Philosophy;
