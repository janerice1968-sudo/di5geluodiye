
import React, { useState } from 'react';
import { GoogleGenAI, Type } from '@google/genai';

const SENSORY_TRIGGERS = [
  { label: 'Ghost', prompt: 'a vision of light, fog, and weightlessness, barely visible yet profound' },
  { label: 'Steel', prompt: 'a study in sharp industrial lines, chrome reflections, and cold elegance' },
  { label: 'Moss', prompt: 'the raw energy of ancient forests, damp earth, and secret growth' },
  { label: 'Pulse', prompt: 'the electric heartbeat of a midnight city, neon trails and frantic grace' },
  { label: 'Stone', prompt: 'monolithic stillness meeting the softest rays of dawn' },
  { label: 'Velvet', prompt: 'deep textures, rich shadows, and the feeling of luxury in silence' },
];

const Experience: React.FC = () => {
  const [activeTrigger, setActiveTrigger] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<{ title: string; narrative: string } | null>(null);

  const exploreSensory = async (trigger: { label: string, prompt: string }) => {
    setActiveTrigger(trigger.label);
    setIsLoading(true);
    setResult(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Act as a master creative director for a luxury brand. A visitor has requested a resonance based on the word "${trigger.label}". Describe a visual world that is poetic and enticing. Format as an elegant 3-word title and a 2-sentence sensory narrative. No AI-speak.`,
        config: {
          responseMimeType: 'application/json',
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              narrative: { type: Type.STRING }
            },
            required: ['title', 'narrative']
          }
        }
      });

      const data = JSON.parse(response.text.trim());
      setResult(data);
    } catch (error) {
      console.error('Flow interrupted', error);
      setResult({
        title: "The Veiled Source",
        narrative: "The vision is momentarily hidden. Return when the shadows align once more."
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="py-40 bg-lumina-charcoal text-lumina-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div>
            <h2 className="text-[10px] tracking-[0.5em] uppercase text-lumina-gold font-bold mb-8">The Alchemy</h2>
            <h3 className="font-serif text-5xl md:text-6xl leading-tight mb-12 italic">
              Summon <br />the Ether
            </h3>
            <p className="text-lumina-muted text-lg font-light leading-relaxed max-w-md mb-16">
              You are invited to touch the abstract. Select a resonance below to witness how our engine translates a single feeling into a masterwork of visual intent.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-4">
              {SENSORY_TRIGGERS.map((trigger) => (
                <button
                  key={trigger.label}
                  onClick={() => exploreSensory(trigger)}
                  disabled={isLoading}
                  className={`group relative py-8 px-4 border text-[10px] tracking-[0.3em] uppercase transition-all duration-700 overflow-hidden ${
                    activeTrigger === trigger.label 
                      ? 'bg-lumina-gold border-lumina-gold text-lumina-charcoal' 
                      : 'border-white/5 hover:border-white/20 text-white/40 hover:text-white'
                  }`}
                >
                  <span className="relative z-10">{trigger.label}</span>
                  <div className="absolute inset-0 bg-white/5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                </button>
              ))}
            </div>
          </div>

          <div className="relative min-h-[500px] flex items-center justify-center">
            {isLoading ? (
              <div className="text-center space-y-6">
                <div className="w-16 h-16 border-t border-lumina-gold rounded-full animate-spin mx-auto opacity-50"></div>
                <p className="text-[10px] tracking-[0.5em] uppercase text-lumina-gold animate-pulse">Distilling Essence</p>
              </div>
            ) : result ? (
              <div className="bg-white/5 backdrop-blur-3xl p-12 w-full border border-white/5 fade-in shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]">
                <h4 className="text-[10px] tracking-[0.5em] uppercase text-lumina-gold mb-8 pb-4 border-b border-white/10 inline-block">The Revealed Path</h4>
                <h5 className="font-serif text-4xl md:text-5xl mb-8 leading-tight">{result.title}</h5>
                <p className="text-xl text-lumina-muted font-light italic leading-relaxed">
                  "{result.narrative}"
                </p>
                <div className="mt-16 flex items-center space-x-6">
                  <button className="text-[10px] tracking-[0.3em] uppercase text-white hover:text-lumina-gold transition-colors underline underline-offset-8">
                    Deepen the Connection
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-white/5 text-center select-none group">
                <p className="font-serif italic text-6xl lg:text-8xl transform group-hover:scale-110 transition-transform duration-1000">Choose <br />Your Fate</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
