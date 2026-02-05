
import React from 'react';

const Philosophy: React.FC = () => {
  const EXTERNAL_LINK = "https://t.acrsmartcam.com/403718/7335?bo=2779,2778,2777,2776,2775&aff_sub5=SF_006OG000004lmDN";

  return (
    <div className="py-40 bg-lumina-charcoal text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3">
            <h2 className="text-[11px] tracking-[0.5em] uppercase text-red-500 font-bold mb-8">Deep Immersion</h2>
            <h3 className="font-serif text-5xl leading-tight mb-8">Warmth, Breath <br />& Heartbeat</h3>
            <div className="h-px w-24 bg-red-600"></div>
          </div>
          
          <div className="lg:w-2/3 space-y-16">
            <p className="font-serif text-3xl md:text-4xl text-white leading-tight">
              Farewell to cold screens. This is a place of unreserved surrender. <span className="text-red-600 italic">Late Nights Vibe</span> turns every second of waiting into a soul-stirring tremor.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="space-y-6">
                <span className="text-[11px] tracking-[0.3em] uppercase text-red-500 font-bold">I / Absolute Privacy</span>
                <p className="text-white/60 leading-relaxed font-light italic">
                  Every secret you share here is safe. Drop your identity, shed your mask. In the midnight hour where no one knows, indulge in a carnival meant only for you.
                </p>
              </div>
              <div className="space-y-6">
                <span className="text-[11px] tracking-[0.3em] uppercase text-red-500 font-bold">II / Fingertip Interaction</span>
                <p className="text-white/60 leading-relaxed font-light italic">
                  This isn't just a performance; it's a dance across space and time. Through your commands, shift her state in real-time and take control of the tonight's rhythm.
                </p>
              </div>
            </div>
            
            <div className="aspect-[21/9] overflow-hidden bg-black relative group shadow-2xl rounded-sm">
              <img 
                src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&q=80&w=1500" 
                alt="Intimate Interaction" 
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-[4000ms] grayscale"
              />
              <div className="absolute inset-0 bg-red-950/40 group-hover:bg-transparent transition-colors duration-1000"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                 <a 
                    href={EXTERNAL_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-12 py-4 bg-white text-black text-[12px] tracking-widest uppercase font-bold shadow-2xl"
                 >
                    Break the Barrier · Click to Start
                 </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Philosophy;
