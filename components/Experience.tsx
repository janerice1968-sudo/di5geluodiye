
import React, { useState } from 'react';
import { GoogleGenAI, Type } from '@google/genai';

const SENSORY_TRIGGERS = [
  { label: 'Whispers', prompt: 'a private, low-volume conversation, intimate close-ups, and soft lighting' },
  { label: 'Crimson', prompt: 'high energy, bold colors, seductive dance, and intense eye contact' },
  { label: 'Midnight', prompt: 'moody, cinematic shadows, slow movement, and a sense of mystery' },
  { label: 'Electric', prompt: 'vibrant neon, fast-paced interaction, and a futuristic party vibe' },
  { label: 'Satin', prompt: 'luxury textures, slow-motion, and a focus on elegance and grace' },
  { label: 'Raw', prompt: 'unfiltered, handheld camera, natural lighting, and total authenticity' },
];

const Experience: React.FC = () => {
  const EXTERNAL_LINK = "https://t.acrsmartcam.com/403718/7335?bo=2779,2778,2777,2776,2775&aff_sub5=SF_006OG000004lmDN";
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
        contents: `You are an exclusive concierge for a high-end private club. The guest has selected the frequency: "${trigger.label}". Describe a heart-pounding, immersive private live stream scenario. Focus on visual, tactile, and auditory sensory experiences. The style must be extremely elegant, cinematic, and seductive. Provide the answer in English. Format: one elegant 3-5 word title and 2 short, powerful sensory narrative sentences.`,
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
        title: "Silent Void",
        narrative: "Connection temporarily interrupted. Your private concierge is preparing an encrypted channel—please try again shortly."
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="py-40 bg-lumina-charcoal text-lumina-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-[11px] tracking-[0.5em] uppercase text-red-600 font-bold mb-8">Frequency</h2>
            <h3 className="font-serif text-5xl md:text-7xl leading-[1.1] mb-12">
              Tailor Your <br /><span className="text-red-800 italic">Midnight Resonance</span>
            </h3>
            <p className="text-lumina-muted text-lg font-light leading-relaxed max-w-md mb-16 italic border-l-2 border-red-900 pl-8">
              Every encounter begins with synchronized rhythm. Select a sensory anchor below to begin your private narrative.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SENSORY_TRIGGERS.map((trigger) => (
                <button
                  key={trigger.label}
                  onClick={() => exploreSensory(trigger)}
                  disabled={isLoading}
                  className={`group relative py-6 px-6 border text-[10px] tracking-[0.3em] font-bold uppercase transition-all duration-500 rounded-sm ${
                    activeTrigger === trigger.label 
                      ? 'bg-red-950 border-red-950 text-white' 
                      : 'border-white/10 hover:border-red-900 text-white/40 hover:text-white'
                  }`}
                >
                  <span className="relative z-10">{trigger.label}</span>
                  <div className="absolute inset-0 bg-red-900/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>
              ))}
            </div>
          </div>

          <div className="relative min-h-[600px] flex items-center justify-center">
            {isLoading ? (
              <div className="text-center">
                <div className="w-12 h-12 border-t border-red-800 rounded-full animate-spin mx-auto opacity-50 mb-8"></div>
                <p className="text-[10px] tracking-[0.6em] uppercase text-red-700 animate-pulse font-bold">Weaving the dream...</p>
              </div>
            ) : result ? (
              <div className="relative w-full py-20 px-12 md:px-20 bg-black/40 backdrop-blur-3xl border border-white/5 rounded-sm fade-in shadow-[0_50px_100px_rgba(0,0,0,0.9)]">
                <div className="absolute -top-10 -left-6 text-[180px] font-serif text-red-900/10 select-none">“</div>
                
                <div className="relative z-10">
                  <div className="flex items-center space-x-3 mb-12">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                    <span className="text-[10px] tracking-[0.4em] uppercase text-red-600/80 font-bold">Sync Completed</span>
                  </div>
                  
                  <h5 className="font-serif text-4xl md:text-6xl mb-10 leading-tight italic text-white underline decoration-red-900/30 underline-offset-8">
                    {result.title}
                  </h5>
                  <p className="text-xl md:text-2xl text-white/70 font-light italic leading-relaxed mb-16">
                    {result.narrative}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-8 pt-10 border-t border-white/5">
                    <a 
                      href={EXTERNAL_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-12 py-5 bg-red-900 text-white text-[12px] tracking-[0.4em] font-bold uppercase hover:bg-red-800 transition-all shadow-xl hover:-translate-y-1 text-center"
                    >
                      Start Session in This Mode
                    </a>
                    <div className="text-right">
                      <div className="text-[9px] tracking-[0.3em] uppercase text-white/20 mb-1">SESSION ID</div>
                      <div className="text-[10px] tracking-[0.2em] font-mono text-red-900/60 uppercase">VIBE-X-{Math.random().toString(36).substr(2, 6).toUpperCase()}</div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center group cursor-default">
                <div className="font-serif italic text-6xl md:text-8xl text-white/5 transition-all duration-1000 group-hover:text-white/10 group-hover:scale-105 text-balance">
                  Surrender <br /> Begins with a Choice
                </div>
                <div className="mt-8 w-12 h-px bg-red-900/20 mx-auto group-hover:w-24 transition-all duration-1000"></div>
              </div>
            )}
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-900/10 blur-[150px] -z-10 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
