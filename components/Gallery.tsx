
import React from 'react';
import { GalleryItem } from '../types';

const COLLECTIONS: GalleryItem[] = [
  { id: '1', url: 'https://images.unsplash.com/photo-1449156001935-d2863fb72690?auto=format&fit=crop&q=80&w=800', title: 'The Gilded Silence', category: 'Interior' },
  { id: '2', url: 'https://images.unsplash.com/photo-1507537330553-c08562105d97?auto=format&fit=crop&q=80&w=800', title: 'Oasis in Glass', category: 'Architecture' },
  { id: '3', url: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=800', title: 'Abstract Resonance', category: 'Canvas' },
  { id: '4', url: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800', title: 'Monochrome Order', category: 'Design' },
  { id: '5', url: 'https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?auto=format&fit=crop&q=80&w=800', title: 'Shattered Time', category: 'Concept' },
  { id: '6', url: 'https://images.unsplash.com/photo-1515549832467-8783363e19b6?auto=format&fit=crop&q=80&w=800', title: 'Pale Fire', category: 'Botanical' },
];

const Gallery: React.FC = () => {
  return (
    <div className="py-32 bg-lumina-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-[10px] tracking-[0.5em] uppercase text-lumina-gold font-bold mb-6">The Vault</h2>
          <h3 className="font-serif text-5xl md:text-6xl">Witness the Manifested</h3>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-12 space-y-12">
          {COLLECTIONS.map((item) => (
            <div key={item.id} className="relative group overflow-hidden break-inside-avoid shadow-sm hover:shadow-2xl transition-shadow duration-700">
              <div className="aspect-auto overflow-hidden bg-lumina-charcoal">
                <img 
                  src={item.url} 
                  alt={item.title} 
                  className="w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
              </div>
              <div className="absolute inset-0 bg-lumina-charcoal/80 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-10">
                <span className="text-[10px] tracking-[0.4em] uppercase text-lumina-gold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{item.category}</span>
                <h4 className="font-serif text-2xl text-lumina-cream transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <button className="px-12 py-5 bg-transparent border border-lumina-charcoal text-[10px] tracking-[0.4em] uppercase hover:bg-lumina-charcoal hover:text-lumina-cream transition-all duration-700 shadow-xl">
            Explore the Full Archive
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
