
import React from 'react';
import { GalleryItem } from '../types';

const COLLECTIONS: GalleryItem[] = [
  { 
    id: '1', 
    url: 'https://i.ibb.co/Q34hhhxL/c0449d6a-e83c-44f7-b398-8e5055b2837c.png', 
    title: 'Vera', 
    category: 'Midnight Glow · Live Now' 
  },
  { 
    id: '2', 
    url: 'https://i.ibb.co/G32XDH4q/a0e66ad2-3f5e-4664-bcac-578750e319b9.png', 
    title: 'Eileen', 
    category: 'Neon Pulse · Private Invite' 
  },
  { 
    id: '3', 
    url: 'https://i.ibb.co/WWDTWyyH/aa5aa43f-da01-446e-b715-339b555104a5.png', 
    title: 'Sophia', 
    category: 'Forbidden Gaze · Immersive' 
  },
  { 
    id: '4', 
    url: 'https://i.ibb.co/XrYHM2Gp/25efda4d-e738-46ac-a45b-c771a2b8e680.png', 
    title: 'Nora', 
    category: 'Scarlet Imprint · New Arrival' 
  },
];

const Gallery: React.FC = () => {
  const EXTERNAL_LINK = "https://t.acrsmartcam.com/403718/7335?bo=2779,2778,2777,2776,2775&aff_sub5=SF_006OG000004lmDN";

  return (
    <div className="py-48 bg-lumina-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-12">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-4 mb-8">
              <div className="h-px w-12 bg-red-900"></div>
              <h2 className="text-[12px] tracking-[0.8em] uppercase text-red-900 font-bold">The Archives</h2>
            </div>
            <h3 className="font-serif text-6xl md:text-8xl mb-8 text-lumina-charcoal leading-none tracking-tighter">
              Timeless <br />
              <span className="italic text-red-900/90 pl-16 md:pl-32">Muses</span>
            </h3>
          </div>
          <div className="md:text-right max-w-sm">
            <p className="text-lumina-muted text-sm tracking-[0.2em] leading-relaxed font-light mb-8 italic">
              "Beauty is the only truth." We traverse the globe just to preserve a spark of pure resonance for you on the other side of the screen.
            </p>
            <div className="inline-flex items-center space-x-4 px-8 py-3 bg-lumina-charcoal text-white rounded-full">
              <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
              <span className="text-[10px] tracking-[0.3em] font-bold uppercase">42 Artists Awaiting Your Arrival</span>
            </div>
          </div>
        </div>

        {/* 2x2 Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-32">
          {COLLECTIONS.map((item, index) => (
            <a 
              key={item.id} 
              href={EXTERNAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`group cursor-pointer relative block ${index % 2 !== 0 ? 'md:translate-y-40' : ''}`}
            >
              {/* Background Index */}
              <div className="absolute -top-12 -left-8 text-[12vw] font-serif text-red-900/[0.03] select-none pointer-events-none italic group-hover:text-red-900/[0.07] transition-all duration-1000">
                0{index + 1}
              </div>

              {/* Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden bg-lumina-charcoal shadow-[0_50px_100px_-30px_rgba(0,0,0,0.4)] transition-all duration-1000 group-hover:shadow-[0_80px_150px_-40px_rgba(153,27,27,0.3)]">
                <img 
                  src={item.url} 
                  alt={item.title} 
                  loading="eager"
                  className="w-full h-full object-cover transform transition-transform duration-[4000ms] group-hover:scale-110 ease-out"
                />
                
                <div className="absolute inset-0 bg-red-950/0 group-hover:bg-red-950/10 transition-colors duration-1000"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                  <div className="bg-white/95 backdrop-blur-md text-lumina-charcoal px-10 py-4 text-[11px] tracking-[0.4em] font-bold uppercase shadow-2xl">
                    Connect Now
                  </div>
                </div>

                <div className="absolute top-8 right-8">
                   <div className="flex items-center space-x-2 bg-black/40 backdrop-blur-lg border border-white/10 px-4 py-1.5 rounded-full">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-ping"></span>
                      <span className="text-[9px] tracking-[0.2em] text-white font-bold uppercase">Online</span>
                   </div>
                </div>
              </div>

              {/* Info Area */}
              <div className="mt-12 space-y-4">
                <div className="flex items-end justify-between border-b border-lumina-charcoal/5 pb-6">
                  <h4 className="font-serif text-4xl text-lumina-charcoal group-hover:text-red-900 transition-colors duration-500">{item.title}</h4>
                  <span className="text-[10px] tracking-[0.3em] uppercase text-red-900 font-bold mb-1">
                    Enter Room
                  </span>
                </div>
                <p className="text-[11px] tracking-[0.5em] uppercase text-lumina-muted font-medium pl-1 flex items-center">
                  <span className="w-8 h-px bg-lumina-charcoal/10 mr-4"></span>
                  {item.category}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-80 flex flex-col items-center">
          <div className="w-px h-32 bg-gradient-to-b from-lumina-charcoal/20 to-transparent mb-16"></div>
          
          <a 
            href={EXTERNAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-28 py-8 bg-red-950 text-white text-[14px] tracking-[0.6em] font-bold uppercase transition-all duration-1000 hover:shadow-[0_40px_100px_-20px_rgba(153,27,27,0.6)] overflow-hidden text-center block"
          >
            <span className="relative z-10">Explore Private Vault</span>
            <div className="absolute inset-0 bg-red-900 -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></div>
          </a>
          
          <div className="mt-24 flex items-center space-x-12 opacity-40">
             <span className="text-[9px] tracking-[0.4em] uppercase font-bold">Curated by Late Nights Vibe</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
