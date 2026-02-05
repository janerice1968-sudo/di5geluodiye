
import React from 'react';

const Hero: React.FC = () => {
  const EXTERNAL_LINK = "https://t.acrsmartcam.com/403718/7335?bo=2779,2778,2777,2776,2775&aff_sub5=SF_006OG000004lmDN";

  return (
    <div className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Full screen background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.ibb.co/Q3qpqrdj/6d5c0417-d374-4219-9e29-952cc72d5d22.png" 
          alt="Intimate Background" 
          className="w-full h-full object-cover scale-110 object-center transition-transform duration-[10000ms] hover:scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-red-950/20 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10 pt-24 pb-20">
        {/* Left Copy */}
        <div className="lg:col-span-7">
          <div className="overflow-hidden mb-8">
            <span className="block text-[12px] tracking-[0.6em] uppercase text-red-500 font-bold fade-in drop-shadow-md">
              Midnight Only · 1-on-1 Premium Private · Global Premiere
            </span>
          </div>
          <h1 className="font-serif text-6xl md:text-9xl leading-[0.95] text-white mb-10 fade-in [animation-delay:200ms] drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]">
            Unleash <br />
            <span className="italic pl-8 md:pl-20 text-red-600">Forbidden Desires</span>
          </h1>
          <p className="max-w-xl text-xl text-white/90 font-light leading-relaxed mb-12 fade-in [animation-delay:400ms] text-balance drop-shadow-md">
            Stop suppressing your soul. At <span className="text-red-500 font-medium">Late Nights Vibe</span>, every play of light and shadow moves for you, every whisper is meant only for your ears. Here, the air warms only for the truest version of you.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 fade-in [animation-delay:600ms]">
            <a 
              href={EXTERNAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-14 py-6 bg-red-950 text-white text-[15px] tracking-[0.4em] font-bold uppercase transition-all duration-700 hover:bg-red-800 shadow-[0_20px_60px_rgba(153,27,27,0.7)] overflow-hidden rounded-sm text-center block"
            >
              <span className="relative z-10 animate-pulse">Start Private: Just You & Her</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </a>
            
            <button 
              onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-[12px] tracking-[0.4em] font-medium text-white/80 hover:text-white transition-colors border-b border-white/30 pb-2 hover:border-white group drop-shadow-sm"
            >
              PEEK INTO UNSEEN SCENES <span className="inline-block transform group-hover:translate-x-2 transition-transform">→</span>
            </button>
          </div>
        </div>

        {/* Right Preview */}
        <div className="lg:col-span-5 relative fade-in [animation-delay:800ms] hidden lg:block">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-[0_60px_120px_-20px_rgba(0,0,0,1)] border border-white/10 group">
            <img 
              src="https://i.ibb.co/1Y7MP7BB/5fbcef90-d592-4619-a5e8-c6285e7693d1.png" 
              alt="Live Model Preview" 
              className="w-full h-full object-cover transform transition-transform duration-[8000ms] group-hover:scale-110 grayscale hover:grayscale-0 transition-all"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
          </div>
          
          {/* Status Card */}
          <div className="absolute -left-12 bottom-16 bg-black/90 backdrop-blur-2xl p-8 border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,1)] transform hover:-translate-y-2 transition-transform duration-500 max-w-[320px]">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-2 h-2 bg-red-600 rounded-full animate-ping"></div>
              <span className="text-red-600 font-bold text-[10px] tracking-widest uppercase">Live Interaction</span>
            </div>
            <div className="font-serif italic text-2xl text-white mb-2 leading-snug">
              Tonight, I am yours.
            </div>
            <div className="w-16 h-px bg-red-900 mt-6"></div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-12 flex flex-col items-center space-y-4 z-10">
        <span className="text-[10px] tracking-[0.5em] uppercase text-white/40 font-bold animate-pulse">Scroll Down</span>
        <div className="w-px h-16 bg-gradient-to-b from-white/40 to-transparent"></div>
      </div>
    </div>
  );
};

export default Hero;
